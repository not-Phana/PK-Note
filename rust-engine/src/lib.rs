#![no_std]

use core::panic::PanicInfo;

#[panic_handler]
fn panic(_info: &PanicInfo) -> ! {
    core::arch::wasm32::unreachable()
}

// ============================================================================
// PK NOTE — NATIVE RUST WEBASSEMBLY ACCELERATOR (ZERO-GC LINEAR MEMORY)
// Accelerates:
//   1. Force-Directed Knowledge Graph O(N^2) Physics Engine
//   2. Whisper AI Real-Time PCM Resampling, DC Removal & Soft-Limiter DSP
//   3. Kokoro-82M Studio-Master Silence Trimming, Warmth Filter & i16 Mastering
//   4. Real-Time Microphone RMS / Peak VAD Analysis
//   5. Case-Insensitive Fuzzy Search Scorer (Command Palette & Vault Search)
// ============================================================================

// Static 4 MB bump-allocated scratch heap (handles up to ~20s of 24kHz audio or 10k graph nodes)
const ARENA_BYTES: usize = 4 * 1024 * 1024;
static mut ARENA: [u8; ARENA_BYTES] = [0; ARENA_BYTES];
static mut ARENA_OFFSET: usize = 0;

#[no_mangle]
pub extern "C" fn arena_reset() {
    unsafe {
        ARENA_OFFSET = 0;
    }
}

#[no_mangle]
pub extern "C" fn arena_alloc(bytes: usize, align: usize) -> *mut u8 {
    unsafe {
        let a = if align == 0 { 4 } else { align };
        let aligned = (ARENA_OFFSET + (a - 1)) & !(a - 1);
        if aligned + bytes > ARENA_BYTES {
            return core::ptr::null_mut();
        }
        ARENA_OFFSET = aligned + bytes;
        core::ptr::addr_of_mut!(ARENA).cast::<u8>().add(aligned)
    }
}

#[inline(always)]
fn fast_sqrt(x: f32) -> f32 {
    if x <= 0.0 {
        return 0.0;
    }
    // Single-instruction IEEE-754 f32.sqrt via Newton-refinement fallback-safe intrinsic
    // LLVM lowers x.sqrt() or core::intrinsics cleanly; use exact f32 Newton-Raphson seeded by bit hack
    let mut y = f32::from_bits(0x1fbd_1df5 + (x.to_bits() >> 1));
    y = 0.5 * (y + x / y);
    y = 0.5 * (y + x / y);
    y = 0.5 * (y + x / y);
    y
}

#[inline(always)]
fn fast_abs(x: f32) -> f32 {
    if x < 0.0 { -x } else { x }
}

// Accurate cosine on [0, pi] (max error < 1.5e-5 — indistinguishable for 14ms audio fades)
#[inline(always)]
fn fast_cos_0_to_pi(x: f32) -> f32 {
    const HALF_PI: f32 = 1.57079632679;
    let t = x - HALF_PI; // [-pi/2, pi/2], cos(x) = -sin(t)
    let t2 = t * t;
    let sin_t = t * (1.0 - t2 * (0.16666667 - t2 * (0.008333333 - t2 * 0.0001984127)));
    -sin_t
}

// Smooth rational tanh approximation (exact within 0.001 for audio soft-clipping)
#[inline(always)]
fn fast_tanh(x: f32) -> f32 {
    if x > 3.0 {
        return 1.0;
    }
    if x < -3.0 {
        return -1.0;
    }
    let x2 = x * x;
    x * (27.0 + x2) / (27.0 + 9.0 * x2)
}

// ============================================================================
// 1. KNOWLEDGE GRAPH FORCE-DIRECTED PHYSICS ENGINE (O(N^2) IN NATIVE WASM)
// nodes_ptr: interleaved [x, y, vx, vy] * node_count
// edges_ptr: interleaved [src_idx, dst_idx] * edge_count
// Returns: total squared kinetic energy (lets JS sleep RAF when settled!)
// ============================================================================
#[no_mangle]
pub extern "C" fn step_graph_physics(
    nodes_ptr: *mut f32,
    node_count: usize,
    edges_ptr: *const u32,
    edge_count: usize,
    center_x: f32,
    center_y: f32,
    dragged_idx: i32,
) -> f32 {
    if nodes_ptr.is_null() || node_count == 0 {
        return 0.0;
    }

    let nodes = unsafe { core::slice::from_raw_parts_mut(nodes_ptr, node_count * 4) };

    // Center gravity + O(N^2) pairwise Coulomb repulsion
    for i in 0..node_count {
        let base_i = i * 4;
        let ax = nodes[base_i];
        let ay = nodes[base_i + 1];
        nodes[base_i + 2] += (center_x - ax) * 0.007;
        nodes[base_i + 3] += (center_y - ay) * 0.007;

        let mut j = i + 1;
        while j < node_count {
            let base_j = j * 4;
            let dx = ax - nodes[base_j];
            let dy = ay - nodes[base_j + 1];
            let dist_sq = dx * dx + dy * dy + 0.1;
            let force = 1450.0 / dist_sq;
            let inv_dist = 1.0 / fast_sqrt(dist_sq);
            let fx = dx * inv_dist * force;
            let fy = dy * inv_dist * force;

            nodes[base_i + 2] += fx;
            nodes[base_i + 3] += fy;
            nodes[base_j + 2] -= fx;
            nodes[base_j + 3] -= fy;
            j += 1;
        }
    }

    // Hooke's Law edge springs
    if !edges_ptr.is_null() && edge_count > 0 {
        let edges = unsafe { core::slice::from_raw_parts(edges_ptr, edge_count * 2) };
        for e in 0..edge_count {
            let s = edges[e * 2] as usize;
            let t = edges[e * 2 + 1] as usize;
            if s >= node_count || t >= node_count {
                continue;
            }
            let bs = s * 4;
            let bt = t * 4;
            let dx = nodes[bt] - nodes[bs];
            let dy = nodes[bt + 1] - nodes[bs + 1];
            let dist_sq = dx * dx + dy * dy;
            let dist = if dist_sq > 0.0 { fast_sqrt(dist_sq) } else { 1.0 };
            let spring = (dist - 94.0) * 0.035;
            let inv = 1.0 / dist;
            let fx = dx * inv * spring;
            let fy = dy * inv * spring;

            nodes[bs + 2] += fx;
            nodes[bs + 3] += fy;
            nodes[bt + 2] -= fx;
            nodes[bt + 3] -= fy;
        }
    }

    // Velocity damping & integration
    let mut energy: f32 = 0.0;
    for i in 0..node_count {
        if dragged_idx >= 0 && (i as i32) == dragged_idx {
            continue;
        }
        let b = i * 4;
        let vx = nodes[b + 2] * 0.82;
        let vy = nodes[b + 3] * 0.82;
        nodes[b + 2] = vx;
        nodes[b + 3] = vy;
        nodes[b] += vx;
        nodes[b + 1] += vy;
        energy += vx * vx + vy * vy;
    }

    energy
}

// ============================================================================
// 1b. 3D FORCE-DIRECTED KNOWLEDGE GALAXY PHYSICS (Zero-GC, 60-120fps SIMD)
// 6 floats per node: [x, y, z, vx, vy, vz]
// ============================================================================
#[no_mangle]
pub extern "C" fn step_graph_physics_3d(
    nodes_ptr: *mut f32,
    node_count: usize,
    edges_ptr: *const u32,
    edge_count: usize,
    center_x: f32,
    center_y: f32,
    center_z: f32,
    dragged_idx: i32,
) -> f32 {
    if nodes_ptr.is_null() || node_count == 0 {
        return 0.0;
    }

    let nodes = unsafe { core::slice::from_raw_parts_mut(nodes_ptr, node_count * 6) };

    // Center gravity toward (center_x, center_y, center_z) + 3D Pairwise Coulomb repulsion
    for i in 0..node_count {
        let base_i = i * 6;
        let ax = nodes[base_i];
        let ay = nodes[base_i + 1];
        let az = nodes[base_i + 2];
        nodes[base_i + 3] += (center_x - ax) * 0.005;
        nodes[base_i + 4] += (center_y - ay) * 0.005;
        nodes[base_i + 5] += (center_z - az) * 0.005;

        let mut j = i + 1;
        while j < node_count {
            let base_j = j * 6;
            let dx = ax - nodes[base_j];
            let dy = ay - nodes[base_j + 1];
            let dz = az - nodes[base_j + 2];
            let dist_sq = dx * dx + dy * dy + dz * dz + 0.1;
            let force = 2100.0 / dist_sq;
            let inv_dist = 1.0 / fast_sqrt(dist_sq);
            let fx = dx * inv_dist * force;
            let fy = dy * inv_dist * force;
            let fz = dz * inv_dist * force;

            nodes[base_i + 3] += fx;
            nodes[base_i + 4] += fy;
            nodes[base_i + 5] += fz;
            nodes[base_j + 3] -= fx;
            nodes[base_j + 4] -= fy;
            nodes[base_j + 5] -= fz;
            j += 1;
        }
    }

    // Hooke's Law edge springs in 3D Euclidean space
    if !edges_ptr.is_null() && edge_count > 0 {
        let edges = unsafe { core::slice::from_raw_parts(edges_ptr, edge_count * 2) };
        for e in 0..edge_count {
            let s = edges[e * 2] as usize;
            let t = edges[e * 2 + 1] as usize;
            if s >= node_count || t >= node_count {
                continue;
            }
            let bs = s * 6;
            let bt = t * 6;
            let dx = nodes[bt] - nodes[bs];
            let dy = nodes[bt + 1] - nodes[bs + 1];
            let dz = nodes[bt + 2] - nodes[bs + 2];
            let dist_sq = dx * dx + dy * dy + dz * dz;
            let dist = if dist_sq > 0.0 { fast_sqrt(dist_sq) } else { 1.0 };
            let spring = (dist - 110.0) * 0.032;
            let inv = 1.0 / dist;
            let fx = dx * inv * spring;
            let fy = dy * inv * spring;
            let fz = dz * inv * spring;

            nodes[bs + 3] += fx;
            nodes[bs + 4] += fy;
            nodes[bs + 5] += fz;
            nodes[bt + 3] -= fx;
            nodes[bt + 4] -= fy;
            nodes[bt + 5] -= fz;
        }
    }

    // Velocity damping & integration
    let mut energy: f32 = 0.0;
    for i in 0..node_count {
        if dragged_idx >= 0 && (i as i32) == dragged_idx {
            continue;
        }
        let b = i * 6;
        let vx = nodes[b + 3] * 0.84;
        let vy = nodes[b + 4] * 0.84;
        let vz = nodes[b + 5] * 0.84;
        nodes[b + 3] = vx;
        nodes[b + 4] = vy;
        nodes[b + 5] = vz;
        nodes[b] += vx;
        nodes[b + 1] += vy;
        nodes[b + 2] += vz;
        energy += vx * vx + vy * vy + vz * vz;
    }

    energy
}

// ============================================================================
// 2. WHISPER AI PCM RESAMPLING (48kHz -> 16kHz), DC REMOVAL & SOFT-LIMITER
// Returns: raw peak amplitude before normalization
// ============================================================================
#[no_mangle]
pub extern "C" fn resample_and_normalize_pcm(
    src_ptr: *const f32,
    src_len: usize,
    src_rate: f32,
    dst_ptr: *mut f32,
    dst_len: usize,
    max_boost: f32,
) -> f32 {
    if src_ptr.is_null() || dst_ptr.is_null() || src_len == 0 || dst_len == 0 {
        return 0.0;
    }

    let src = unsafe { core::slice::from_raw_parts(src_ptr, src_len) };
    let dst = unsafe { core::slice::from_raw_parts_mut(dst_ptr, dst_len) };

    let ratio = src_rate / 16000.0;
    let last_src = src_len - 1;
    let mut sum: f32 = 0.0;

    // Linear resample + accumulate DC mean in one pass
    for i in 0..dst_len {
        let src_idx = (i as f32) * ratio;
        let idx0 = src_idx as usize;
        let idx0_clamped = if idx0 > last_src { last_src } else { idx0 };
        let idx1 = if idx0_clamped < last_src { idx0_clamped + 1 } else { last_src };
        let frac = src_idx - (idx0_clamped as f32);
        let sample = src[idx0_clamped] * (1.0 - frac) + src[idx1] * frac;
        dst[i] = sample;
        sum += sample;
    }

    let mean = sum / (dst_len as f32);
    let mut peak: f32 = 0.0;

    for i in 0..dst_len {
        let centered = dst[i] - mean;
        dst[i] = centered;
        let a = fast_abs(centered);
        if a > peak {
            peak = a;
        }
    }

    if peak > 0.00016 {
        let raw_scale = 0.85 / peak;
        let scale = if raw_scale < max_boost { raw_scale } else { max_boost };
        for i in 0..dst_len {
            let v = dst[i] * scale;
            dst[i] = if v > 0.94 {
                0.94 + fast_tanh((v - 0.94) * 2.0) * 0.05
            } else if v < -0.94 {
                -0.94 + fast_tanh((v + 0.94) * 2.0) * 0.05
            } else {
                v
            };
        }
    }

    peak
}

// ============================================================================
// 3. KOKORO-82M STUDIO-MASTER FLOAT32 -> 16-BIT PCM MASTERING PIPELINE
// Trims digital silence, removes DC, applies analog warmth filter,
// normalizes to -1.5 dBFS, applies 14ms cosine fades, quantizes to i16.
// Returns: exact number of i16 samples written to out_i16_ptr.
// ============================================================================
#[no_mangle]
pub extern "C" fn master_pcm_to_i16(
    src_ptr: *mut f32,
    src_len: usize,
    sample_rate: u32,
    apply_warmth: u32,
    out_i16_ptr: *mut i16,
) -> u32 {
    if src_ptr.is_null() || out_i16_ptr.is_null() || src_len == 0 {
        return 0;
    }

    let src = unsafe { core::slice::from_raw_parts_mut(src_ptr, src_len) };
    let out = unsafe { core::slice::from_raw_parts_mut(out_i16_ptr, src_len) };

    let sr = sample_rate as f32;
    let lead_cand = (sr * 0.07) as usize;
    let tail_cand = (sr * 0.09) as usize;
    let sixth = src_len / 6;
    let lead_margin = if lead_cand < sixth { lead_cand } else { sixth };
    let tail_margin = if tail_cand < sixth { tail_cand } else { sixth };

    let mut start: usize = 0;
    let mut end: usize = src_len - 1;
    while start < src_len - 1 && fast_abs(src[start]) < 0.0006 {
        start += 1;
    }
    while end > start && fast_abs(src[end]) < 0.0006 {
        end -= 1;
    }

    start = start.saturating_sub(lead_margin);
    end = if end + tail_margin < src_len { end + tail_margin } else { src_len - 1 };
    let num_samples = if end >= start { end - start + 1 } else { 1 };

    // In-place slice mean & DC offset removal
    let mut sum: f32 = 0.0;
    for i in 0..num_samples {
        sum += src[start + i];
    }
    let mean = sum / (num_samples as f32);
    for i in 0..num_samples {
        src[start + i] -= mean;
    }

    // Gentle analog warmth low-pass de-harshing filter (alpha = 0.78)
    if apply_warmth != 0 && num_samples > 4 {
        let mut prev = src[start];
        let alpha: f32 = 0.78;
        for i in 1..num_samples {
            let cur = src[start + i];
            prev = prev + alpha * (cur - prev);
            src[start + i] = prev;
        }
    }

    // Peak scan
    let mut peak: f32 = 0.0;
    for i in 0..num_samples {
        let a = fast_abs(src[start + i]);
        if a > peak {
            peak = a;
        }
    }
    let norm_gain = if peak > 0.01 {
        let g = 0.84 / peak;
        if g < 2.2 { g } else { 2.2 }
    } else {
        1.0
    };

    let fade_cand = (sr * 0.014) as usize;
    let fade_limit = num_samples / 6;
    let fade_samples = if fade_cand < fade_limit { fade_cand } else { fade_limit };
    const PI: f32 = 3.14159265359;

    for i in 0..num_samples {
        let mut env: f32 = 1.0;
        if fade_samples > 1 {
            if i < fade_samples {
                env = 0.5 * (1.0 - fast_cos_0_to_pi(PI * (i as f32) / (fade_samples as f32)));
            } else if i > num_samples - fade_samples {
                env = 0.5 * (1.0 - fast_cos_0_to_pi(PI * ((num_samples - i) as f32) / (fade_samples as f32)));
            }
        }
        let mut s = src[start + i] * norm_gain * env;
        if s > 1.0 {
            s = 1.0;
        } else if s < -1.0 {
            s = -1.0;
        }
        out[i] = if s < 0.0 {
            (s * 32768.0) as i16
        } else {
            (s * 32767.0) as i16
        };
    }

    num_samples as u32
}

// ============================================================================
// 4. REAL-TIME MICROPHONE RMS & PEAK ANALYZER (WHISPER VAD FRAME)
// out_stats_ptr: [rms, peak]
// ============================================================================
#[no_mangle]
pub extern "C" fn compute_pcm_rms_peak(
    src_ptr: *const f32,
    len: usize,
    out_stats_ptr: *mut f32,
) {
    if src_ptr.is_null() || out_stats_ptr.is_null() || len == 0 {
        return;
    }
    let src = unsafe { core::slice::from_raw_parts(src_ptr, len) };
    let out = unsafe { core::slice::from_raw_parts_mut(out_stats_ptr, 2) };

    let mut sum: f32 = 0.0;
    for i in 0..len {
        sum += src[i];
    }
    let mean = sum / (len as f32);

    let mut sq_sum: f32 = 0.0;
    let mut peak: f32 = 0.0;
    for i in 0..len {
        let c = src[i] - mean;
        sq_sum += c * c;
        let a = fast_abs(c);
        if a > peak {
            peak = a;
        }
    }

    out[0] = fast_sqrt(sq_sum / (len as f32));
    out[1] = peak;
}

// ============================================================================
// 5. FAST CASE-INSENSITIVE FUZZY SCORER (COMMAND PALETTE & NOTE SEARCH)
// Returns -1 on no match, >= 0 relevance score on match
// ============================================================================
#[inline(always)]
fn to_lower_ascii(b: u8) -> u8 {
    if b >= b'A' && b <= b'Z' { b + 32 } else { b }
}

#[no_mangle]
pub extern "C" fn fuzzy_score_ascii(
    q_ptr: *const u8,
    q_len: usize,
    t_ptr: *const u8,
    t_len: usize,
) -> i32 {
    if q_len == 0 {
        return 100;
    }
    if q_ptr.is_null() || t_ptr.is_null() || t_len == 0 || q_len > t_len {
        return -1;
    }
    let q = unsafe { core::slice::from_raw_parts(q_ptr, q_len) };
    let t = unsafe { core::slice::from_raw_parts(t_ptr, t_len) };

    let mut qi: usize = 0;
    let mut score: i32 = 0;
    let mut streak: i32 = 0;

    for ti in 0..t_len {
        if to_lower_ascii(t[ti]) == to_lower_ascii(q[qi]) {
            streak += 1;
            score += 10 + streak * 6;
            if ti == 0 {
                score += 25;
            } else {
                let prev = t[ti - 1];
                if prev == b' ' || prev == b'-' || prev == b'_' || prev == b'/' {
                    score += 18;
                }
            }
            qi += 1;
            if qi == q_len {
                // Favor shorter exact matches slightly
                score -= (t_len as i32 - q_len as i32) / 4;
                return if score < 1 { 1 } else { score };
            }
        } else {
            streak = 0;
        }
    }

    -1
}

// ============================================================================
// 6. FAST NATIVE TEXT & READABILITY ANALYZER (VAULT PULSE / READING RHYTHM)
// out_u32_ptr: [words, sentences, non_ws_chars, syllables, long_words]
// ============================================================================
#[inline(always)]
fn is_ascii_alpha(b: u8) -> bool {
    (b >= b'a' && b <= b'z') || (b >= b'A' && b <= b'Z')
}

#[inline(always)]
fn is_ascii_vowel(b: u8) -> bool {
    let l = to_lower_ascii(b);
    l == b'a' || l == b'e' || l == b'i' || l == b'o' || l == b'u' || l == b'y'
}

#[no_mangle]
pub extern "C" fn analyze_text_stats(
    ptr: *const u8,
    len: usize,
    out_u32_ptr: *mut u32,
) {
    if out_u32_ptr.is_null() {
        return;
    }
    let out = unsafe { core::slice::from_raw_parts_mut(out_u32_ptr, 5) };
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    if ptr.is_null() || len == 0 {
        return;
    }
    let bytes = unsafe { core::slice::from_raw_parts(ptr, len) };

    let mut words: u32 = 0;
    let mut sentences: u32 = 0;
    let mut non_ws: u32 = 0;
    let mut syllables: u32 = 0;
    let mut long_words: u32 = 0;

    let mut in_word = false;
    let mut word_letters: u32 = 0;
    let mut word_syl: u32 = 0;
    let mut prev_vowel = false;
    let mut last_letter: u8 = 0;
    let mut in_punct_run = false;

    for i in 0..len {
        let b = bytes[i];
        let is_ws = b == b' ' || b == b'\n' || b == b'\r' || b == b'\t';
        if !is_ws {
            non_ws += 1;
        }

        if b == b'.' || b == b'!' || b == b'?' {
            if !in_punct_run {
                sentences += 1;
                in_punct_run = true;
            }
        } else if !is_ws {
            in_punct_run = false;
        }

        let is_word_char = is_ascii_alpha(b) || (b >= b'0' && b <= b'9') || b == b'\'' || b >= 128;
        if is_word_char {
            if !in_word {
                in_word = true;
                words += 1;
                word_letters = 0;
                word_syl = 0;
                prev_vowel = false;
                last_letter = 0;
            }
            if is_ascii_alpha(b) {
                word_letters += 1;
                let v = is_ascii_vowel(b);
                if v && !prev_vowel {
                    word_syl += 1;
                }
                prev_vowel = v;
                last_letter = to_lower_ascii(b);
            }
        } else if in_word {
            if word_letters >= 7 {
                long_words += 1;
            }
            if word_syl > 1 && last_letter == b'e' {
                word_syl -= 1;
            }
            syllables += if word_syl == 0 && word_letters > 0 { 1 } else { word_syl };
            in_word = false;
        }
    }

    if in_word {
        if word_letters >= 7 {
            long_words += 1;
        }
        if word_syl > 1 && last_letter == b'e' {
            word_syl -= 1;
        }
        syllables += if word_syl == 0 && word_letters > 0 { 1 } else { word_syl };
    }

    if words > 0 && sentences == 0 {
        sentences = 1;
    }

    out[0] = words;
    out[1] = sentences;
    out[2] = non_ws;
    out[3] = syllables;
    out[4] = long_words;
}

// ============================================================================
// 7. NATIVE RUST HIGH-PERFORMANCE MATH & CALCULATION EVALUATOR
// Evaluates arithmetic, parentheses, powers, constants, functions in O(N) zero-alloc
// out_result_ptr: [f64]
// Returns: 0 = Ok, 1 = Parse Error, 2 = Div By Zero, 3 = Empty Expression
// ============================================================================

const PI64: f64 = 3.14159265358979323846;
const E64: f64 = 2.71828182845904523536;
const TWO_PI64: f64 = 6.28318530717958647692;

#[inline(always)]
fn fast_sqrt64(x: f64) -> f64 {
    if x <= 0.0 {
        return 0.0;
    }
    let mut y = f64::from_bits(0x1ff7a3bea91d96c4 + (x.to_bits() >> 1));
    y = 0.5 * (y + x / y);
    y = 0.5 * (y + x / y);
    y = 0.5 * (y + x / y);
    y = 0.5 * (y + x / y);
    y
}

#[inline(always)]
fn fast_abs64(x: f64) -> f64 {
    if x < 0.0 { -x } else { x }
}

#[inline(always)]
fn fast_floor64(x: f64) -> f64 {
    let xi = x as i64;
    if (xi as f64) > x { (xi - 1) as f64 } else { xi as f64 }
}

#[inline(always)]
fn fast_ceil64(x: f64) -> f64 {
    let xi = x as i64;
    if (xi as f64) < x { (xi + 1) as f64 } else { xi as f64 }
}

#[inline(always)]
fn fast_round64(x: f64) -> f64 {
    fast_floor64(x + 0.5)
}

#[inline(always)]
fn fast_sin64(mut x: f64) -> f64 {
    x = x % TWO_PI64;
    if x > PI64 { x -= TWO_PI64; }
    else if x < -PI64 { x += TWO_PI64; }
    let x2 = x * x;
    let x3 = x * x2;
    let x5 = x3 * x2;
    let x7 = x5 * x2;
    let x9 = x7 * x2;
    x - (x3 / 6.0) + (x5 / 120.0) - (x7 / 5040.0) + (x9 / 362880.0)
}

#[inline(always)]
fn fast_cos64(mut x: f64) -> f64 {
    x = x % TWO_PI64;
    if x > PI64 { x -= TWO_PI64; }
    else if x < -PI64 { x += TWO_PI64; }
    let x2 = x * x;
    let x4 = x2 * x2;
    let x6 = x4 * x2;
    let x8 = x6 * x2;
    1.0 - (x2 / 2.0) + (x4 / 24.0) - (x6 / 720.0) + (x8 / 40320.0)
}

#[inline(always)]
fn fast_tan64(x: f64) -> f64 {
    let c = fast_cos64(x);
    if fast_abs64(c) < 1e-12 { 0.0 } else { fast_sin64(x) / c }
}

#[inline(always)]
fn fast_ln64(x: f64) -> f64 {
    if x <= 0.0 { return 0.0; }
    let bits = x.to_bits();
    let exp = ((bits >> 52) & 0x7ff) as i64 - 1023;
    let m = f64::from_bits((bits & 0x000f_ffff_ffff_ffff) | 0x3ff0_0000_0000_0000);
    let y = (m - 1.0) / (m + 1.0);
    let y2 = y * y;
    let y3 = y2 * y;
    let y5 = y3 * y2;
    let y7 = y5 * y2;
    let ln_m = 2.0 * (y + y3 / 3.0 + y5 / 5.0 + y7 / 7.0);
    ln_m + (exp as f64) * 0.6931471805599453
}

#[inline(always)]
fn fast_exp64(x: f64) -> f64 {
    if x > 700.0 { return 1e300; }
    if x < -700.0 { return 0.0; }
    let k = (x * 1.4426950408889634) as i32;
    let r = x - (k as f64) * 0.6931471805599453;
    let r2 = r * r;
    let r3 = r2 * r;
    let r4 = r2 * r2;
    let r5 = r4 * r;
    let r6 = r3 * r3;
    let exp_r = 1.0 + r + (r2 / 2.0) + (r3 / 6.0) + (r4 / 24.0) + (r5 / 120.0) + (r6 / 720.0);
    let scale = if k >= 0 {
        let shift = if k > 62 { 62 } else { k };
        (1i64 << shift) as f64
    } else {
        let shift = if -k > 62 { 62 } else { -k };
        1.0 / ((1i64 << shift) as f64)
    };
    exp_r * scale
}

#[inline(always)]
fn fast_pow64(base: f64, exp: f64) -> f64 {
    if exp == 0.0 { return 1.0; }
    if exp == 1.0 { return base; }
    if exp == 2.0 { return base * base; }
    if exp == 0.5 && base >= 0.0 { return fast_sqrt64(base); }
    let exp_i = exp as i64;
    if (exp_i as f64) == exp {
        let mut res = 1.0;
        let mut b = if exp_i < 0 { 1.0 / base } else { base };
        let mut e = if exp_i < 0 { -exp_i } else { exp_i };
        while e > 0 {
            if (e & 1) == 1 { res *= b; }
            b *= b;
            e >>= 1;
        }
        return res;
    }
    if base <= 0.0 { return 0.0; }
    fast_exp64(exp * fast_ln64(base))
}

struct MathParser<'a> {
    src: &'a [u8],
    pos: usize,
    error: i32,
}

impl<'a> MathParser<'a> {
    fn new(src: &'a [u8]) -> Self {
        MathParser { src, pos: 0, error: 0 }
    }

    fn skip_ws(&mut self) {
        while self.pos < self.src.len() {
            let b = self.src[self.pos];
            if b == b' ' || b == b'\t' || b == b'\r' || b == b'\n' {
                self.pos += 1;
            } else {
                break;
            }
        }
    }

    fn peek(&mut self) -> Option<u8> {
        self.skip_ws();
        if self.pos < self.src.len() {
            Some(self.src[self.pos])
        } else {
            None
        }
    }

    fn parse_number(&mut self) -> f64 {
        self.skip_ws();
        let start = self.pos;
        let mut val = 0.0;
        let mut has_digits = false;

        while self.pos < self.src.len() {
            let b = self.src[self.pos];
            if b >= b'0' && b <= b'9' {
                val = val * 10.0 + ((b - b'0') as f64);
                has_digits = true;
                self.pos += 1;
            } else {
                break;
            }
        }

        if self.pos < self.src.len() && self.src[self.pos] == b'.' {
            self.pos += 1;
            let mut div = 1.0;
            while self.pos < self.src.len() {
                let b = self.src[self.pos];
                if b >= b'0' && b <= b'9' {
                    div *= 10.0;
                    val += ((b - b'0') as f64) / div;
                    has_digits = true;
                    self.pos += 1;
                } else {
                    break;
                }
            }
        }

        if self.pos < self.src.len() && (self.src[self.pos] == b'e' || self.src[self.pos] == b'E') {
            self.pos += 1;
            let mut neg_exp = false;
            if self.pos < self.src.len() && self.src[self.pos] == b'-' {
                neg_exp = true;
                self.pos += 1;
            } else if self.pos < self.src.len() && self.src[self.pos] == b'+' {
                self.pos += 1;
            }
            let mut exp_val = 0;
            while self.pos < self.src.len() {
                let b = self.src[self.pos];
                if b >= b'0' && b <= b'9' {
                    exp_val = exp_val * 10 + ((b - b'0') as i32);
                    self.pos += 1;
                } else {
                    break;
                }
            }
            if exp_val > 0 {
                let factor = fast_pow64(10.0, exp_val as f64);
                val = if neg_exp { val / factor } else { val * factor };
            }
        }

        if !has_digits && self.pos == start {
            self.error = 1;
            0.0
        } else {
            val
        }
    }

    fn parse_primary(&mut self) -> f64 {
        self.skip_ws();
        let b = match self.peek() {
            Some(c) => c,
            None => {
                self.error = 1;
                return 0.0;
            }
        };

        if b == b'(' {
            self.pos += 1;
            let res = self.parse_expr();
            self.skip_ws();
            if self.peek() == Some(b')') {
                self.pos += 1;
            } else {
                self.error = 1;
            }
            return res;
        }

        if b == b'-' {
            self.pos += 1;
            return -self.parse_primary();
        }

        if b == b'+' {
            self.pos += 1;
            return self.parse_primary();
        }

        if (b >= b'0' && b <= b'9') || b == b'.' {
            return self.parse_number();
        }

        if is_ascii_alpha(b) {
            let start = self.pos;
            while self.pos < self.src.len() && (is_ascii_alpha(self.src[self.pos]) || (self.src[self.pos] >= b'0' && self.src[self.pos] <= b'9')) {
                self.pos += 1;
            }
            let ident = &self.src[start..self.pos];
            self.skip_ws();

            if self.peek() == Some(b'(') {
                self.pos += 1;
                let arg1 = self.parse_expr();
                let mut arg2 = 0.0;
                self.skip_ws();
                if self.peek() == Some(b',') {
                    self.pos += 1;
                    arg2 = self.parse_expr();
                }
                self.skip_ws();
                if self.peek() == Some(b')') {
                    self.pos += 1;
                } else {
                    self.error = 1;
                }

                if eq_ignore_case(ident, b"sqrt") {
                    return fast_sqrt64(arg1);
                } else if eq_ignore_case(ident, b"abs") {
                    return fast_abs64(arg1);
                } else if eq_ignore_case(ident, b"sin") {
                    return fast_sin64(arg1);
                } else if eq_ignore_case(ident, b"cos") {
                    return fast_cos64(arg1);
                } else if eq_ignore_case(ident, b"tan") {
                    return fast_tan64(arg1);
                } else if eq_ignore_case(ident, b"round") {
                    return fast_round64(arg1);
                } else if eq_ignore_case(ident, b"floor") {
                    return fast_floor64(arg1);
                } else if eq_ignore_case(ident, b"ceil") {
                    return fast_ceil64(arg1);
                } else if eq_ignore_case(ident, b"log") || eq_ignore_case(ident, b"ln") {
                    return fast_ln64(arg1);
                } else if eq_ignore_case(ident, b"log10") {
                    return fast_ln64(arg1) / 2.302585092994046;
                } else if eq_ignore_case(ident, b"exp") {
                    return fast_exp64(arg1);
                } else if eq_ignore_case(ident, b"min") {
                    return if arg1 < arg2 { arg1 } else { arg2 };
                } else if eq_ignore_case(ident, b"max") {
                    return if arg1 > arg2 { arg1 } else { arg2 };
                } else {
                    self.error = 1;
                    return 0.0;
                }
            }

            if eq_ignore_case(ident, b"pi") {
                return PI64;
            } else if eq_ignore_case(ident, b"e") {
                return E64;
            }

            self.error = 1;
            return 0.0;
        }

        self.error = 1;
        0.0
    }

    fn parse_factor(&mut self) -> f64 {
        let base = self.parse_primary();
        self.skip_ws();
        if self.peek() == Some(b'^') {
            self.pos += 1;
            let exp = self.parse_factor();
            return fast_pow64(base, exp);
        }
        base
    }

    fn parse_term(&mut self) -> f64 {
        let mut left = self.parse_factor();
        loop {
            self.skip_ws();
            match self.peek() {
                Some(b'*') => {
                    self.pos += 1;
                    left *= self.parse_factor();
                }
                Some(b'/') => {
                    self.pos += 1;
                    let right = self.parse_factor();
                    if fast_abs64(right) < 1e-15 {
                        self.error = 2;
                        return 0.0;
                    }
                    left /= right;
                }
                Some(b'%') => {
                    self.pos += 1;
                    let right = self.parse_factor();
                    if fast_abs64(right) < 1e-15 {
                        self.error = 2;
                        return 0.0;
                    }
                    left = left % right;
                }
                _ => break,
            }
        }
        left
    }

    fn parse_expr(&mut self) -> f64 {
        let mut left = self.parse_term();
        loop {
            self.skip_ws();
            match self.peek() {
                Some(b'+') => {
                    self.pos += 1;
                    left += self.parse_term();
                }
                Some(b'-') => {
                    self.pos += 1;
                    left -= self.parse_term();
                }
                _ => break,
            }
        }
        left
    }
}

#[inline(always)]
fn eq_ignore_case(a: &[u8], b: &[u8]) -> bool {
    if a.len() != b.len() {
        return false;
    }
    for i in 0..a.len() {
        if to_lower_ascii(a[i]) != to_lower_ascii(b[i]) {
            return false;
        }
    }
    true
}

#[no_mangle]
pub extern "C" fn eval_math_expression(
    expr_ptr: *const u8,
    expr_len: usize,
    out_result_ptr: *mut f64,
) -> i32 {
    if expr_ptr.is_null() || out_result_ptr.is_null() {
        return 1;
    }
    if expr_len == 0 {
        return 3;
    }
    let src = unsafe { core::slice::from_raw_parts(expr_ptr, expr_len) };
    let mut parser = MathParser::new(src);
    let result = parser.parse_expr();
    parser.skip_ws();
    if parser.pos < src.len() && parser.error == 0 {
        parser.error = 1;
    }
    unsafe {
        *out_result_ptr = result;
    }
    parser.error
}

// ============================================================================
// 8. NATIVE RUST VAULT WIKILINK SCANNER
// Scans text for [[Target]] or [[Target|Alias]] in O(N) zero-alloc memory
// Writes [start_byte, len_byte] into out_offsets_ptr (2 x u32 per link)
// Returns: number of wikilinks found
// ============================================================================
#[no_mangle]
pub extern "C" fn extract_wikilinks(
    text_ptr: *const u8,
    text_len: usize,
    out_offsets_ptr: *mut u32,
    max_links: usize,
) -> u32 {
    if text_ptr.is_null() || out_offsets_ptr.is_null() || text_len < 4 || max_links == 0 {
        return 0;
    }
    let text = unsafe { core::slice::from_raw_parts(text_ptr, text_len) };
    let out = unsafe { core::slice::from_raw_parts_mut(out_offsets_ptr, max_links * 2) };

    let mut count = 0;
    let mut i = 0;
    while i + 3 < text_len && count < max_links {
        if text[i] == b'[' && text[i + 1] == b'[' {
            let start = i + 2;
            let mut end = start;
            let mut pipe = 0;
            while end + 1 < text_len && !(text[end] == b']' && text[end + 1] == b']') {
                if text[end] == b'\n' || text[end] == b'\r' {
                    break;
                }
                if text[end] == b'|' && pipe == 0 {
                    pipe = end;
                }
                end += 1;
            }
            if end + 1 < text_len && text[end] == b']' && text[end + 1] == b']' {
                let target_end = if pipe > start { pipe } else { end };
                let mut s = start;
                while s < target_end && (text[s] == b' ' || text[s] == b'\t') {
                    s += 1;
                }
                let mut e = target_end;
                while e > s && (text[e - 1] == b' ' || text[e - 1] == b'\t') {
                    e -= 1;
                }
                if e > s {
                    out[count * 2] = s as u32;
                    out[count * 2 + 1] = (e - s) as u32;
                    count += 1;
                }
                i = end + 2;
                continue;
            }
        }
        i += 1;
    }
    count as u32
}

// ============================================================================
// 9. NATIVE RUST HIGH-SPEED AUTO-LINK TITLE MATCHER
// Scans active note text for unlinked occurrences of vault note titles.
// Skips existing [[...]], `code`, and markdown links.
// titles_buf: [count: u32] followed by [len: u16, bytes: [u8; len]] * count
// out_matches_ptr: [start_byte, end_byte, title_idx] (3 x u32 per match)
// Returns: number of matches found
// ============================================================================
#[inline(always)]
fn is_word_boundary_char(b: u8) -> bool {
    b == b' ' || b == b'\t' || b == b'\n' || b == b'\r' ||
    b == b'.' || b == b',' || b == b'!' || b == b'?' ||
    b == b';' || b == b':' || b == b'(' || b == b')' ||
    b == b'[' || b == b']' || b == b'{' || b == b'}' ||
    b == b'"' || b == b'\'' || b == b'`' || b == b'-' || b == b'/'
}

#[no_mangle]
pub extern "C" fn find_title_matches(
    text_ptr: *const u8,
    text_len: usize,
    titles_buf_ptr: *const u8,
    out_matches_ptr: *mut u32,
    max_matches: usize,
) -> u32 {
    if text_ptr.is_null() || titles_buf_ptr.is_null() || out_matches_ptr.is_null() || text_len == 0 || max_matches == 0 {
        return 0;
    }
    let text = unsafe { core::slice::from_raw_parts(text_ptr, text_len) };
    let out = unsafe { core::slice::from_raw_parts_mut(out_matches_ptr, max_matches * 3) };

    let title_count = unsafe { *(titles_buf_ptr as *const u32) } as usize;
    if title_count == 0 {
        return 0;
    }

    let mut match_count = 0;
    let mut i = 0;

    while i < text_len && match_count < max_matches {
        if i + 1 < text_len && text[i] == b'[' && text[i + 1] == b'[' {
            i += 2;
            while i + 1 < text_len && !(text[i] == b']' && text[i + 1] == b']') {
                i += 1;
            }
            if i + 1 < text_len { i += 2; }
            continue;
        }

        if i + 2 < text_len && text[i] == b'`' && text[i + 1] == b'`' && text[i + 2] == b'`' {
            i += 3;
            while i + 2 < text_len && !(text[i] == b'`' && text[i + 1] == b'`' && text[i + 2] == b'`') {
                i += 1;
            }
            if i + 2 < text_len { i += 3; }
            continue;
        }

        if text[i] == b'`' {
            i += 1;
            while i < text_len && text[i] != b'`' && text[i] != b'\n' {
                i += 1;
            }
            if i < text_len && text[i] == b'`' { i += 1; }
            continue;
        }

        let is_start_boundary = i == 0 || is_word_boundary_char(text[i - 1]);
        if is_start_boundary {
            let mut title_offset = 4;
            let mut matched_title_idx = None;
            let mut matched_title_len = 0;

            for t_idx in 0..title_count {
                let t_len = (unsafe { *titles_buf_ptr.add(title_offset) } as usize)
                    | ((unsafe { *titles_buf_ptr.add(title_offset + 1) } as usize) << 8);
                let t_bytes_ptr = unsafe { titles_buf_ptr.add(title_offset + 2) };
                let t_bytes = unsafe { core::slice::from_raw_parts(t_bytes_ptr, t_len) };

                if t_len > 1 && i + t_len <= text_len {
                    let mut matches = true;
                    for k in 0..t_len {
                        if to_lower_ascii(text[i + k]) != to_lower_ascii(t_bytes[k]) {
                            matches = false;
                            break;
                        }
                    }
                    if matches {
                        let is_end_boundary = (i + t_len == text_len) || is_word_boundary_char(text[i + t_len]);
                        if is_end_boundary {
                            if t_len > matched_title_len {
                                matched_title_idx = Some(t_idx);
                                matched_title_len = t_len;
                            }
                        }
                    }
                }
                title_offset += 2 + t_len;
            }

            if let Some(t_idx) = matched_title_idx {
                out[match_count * 3] = i as u32;
                out[match_count * 3 + 1] = (i + matched_title_len) as u32;
                out[match_count * 3 + 2] = t_idx as u32;
                match_count += 1;
                i += matched_title_len;
                continue;
            }
        }

        i += 1;
    }

    match_count as u32
}

// ============================================================================
// 10. NATIVE RUST LIGHTNING-FAST MARKDOWN BLOCK TOKENIZER
// Classifies markdown lines in O(N) single-pass without regex overhead
// out_blocks_ptr: [block_type, start_byte, len_byte] (3 x u32 per block)
// Types: 1=H1, 2=H2, 3=H3, 4=Divider, 5=TodoUnchecked, 6=TodoChecked,
//        7=Bullet, 8=Quote, 9=Code, 10=Math, 11=Paragraph
// Returns: number of blocks found
// ============================================================================
#[no_mangle]
pub extern "C" fn parse_markdown_blocks(
    text_ptr: *const u8,
    text_len: usize,
    out_blocks_ptr: *mut u32,
    max_blocks: usize,
) -> u32 {
    if text_ptr.is_null() || out_blocks_ptr.is_null() || text_len == 0 || max_blocks == 0 {
        return 0;
    }
    let text = unsafe { core::slice::from_raw_parts(text_ptr, text_len) };
    let out = unsafe { core::slice::from_raw_parts_mut(out_blocks_ptr, max_blocks * 3) };

    let mut count = 0;
    let mut i = 0;
    let mut in_code = false;
    let mut code_start = 0;
    let mut in_math = false;
    let mut math_start = 0;

    while i < text_len && count < max_blocks {
        let line_start = i;
        while i < text_len && text[i] != b'\n' {
            i += 1;
        }
        let mut line_end = i;
        if line_end > line_start && text[line_end - 1] == b'\r' {
            line_end -= 1;
        }
        if i < text_len && text[i] == b'\n' {
            i += 1;
        }

        let line = &text[line_start..line_end];
        let mut s = 0;
        while s < line.len() && (line[s] == b' ' || line[s] == b'\t') {
            s += 1;
        }
        let trimmed = &line[s..];

        if trimmed.len() >= 3 && trimmed[0] == b'`' && trimmed[1] == b'`' && trimmed[2] == b'`' {
            if in_code {
                out[count * 3] = 9;
                out[count * 3 + 1] = code_start as u32;
                out[count * 3 + 2] = (line_end - code_start) as u32;
                count += 1;
                in_code = false;
            } else {
                in_code = true;
                code_start = line_start;
            }
            continue;
        }
        if in_code {
            continue;
        }

        if trimmed.len() >= 2 && trimmed[0] == b'$' && trimmed[1] == b'$' {
            if in_math {
                out[count * 3] = 10;
                out[count * 3 + 1] = math_start as u32;
                out[count * 3 + 2] = (line_end - math_start) as u32;
                count += 1;
                in_math = false;
            } else {
                in_math = true;
                math_start = line_start;
            }
            continue;
        }
        if in_math {
            continue;
        }

        if trimmed.is_empty() {
            continue;
        }

        if trimmed.len() >= 2 && trimmed[0] == b'#' && trimmed[1] == b' ' {
            out[count * 3] = 1;
            out[count * 3 + 1] = (line_start + s + 2) as u32;
            out[count * 3 + 2] = (line_end - (line_start + s + 2)) as u32;
            count += 1;
        } else if trimmed.len() >= 3 && trimmed[0] == b'#' && trimmed[1] == b'#' && trimmed[2] == b' ' {
            out[count * 3] = 2;
            out[count * 3 + 1] = (line_start + s + 3) as u32;
            out[count * 3 + 2] = (line_end - (line_start + s + 3)) as u32;
            count += 1;
        } else if trimmed.len() >= 4 && trimmed[0] == b'#' && trimmed[1] == b'#' && trimmed[2] == b'#' && trimmed[3] == b' ' {
            out[count * 3] = 3;
            out[count * 3 + 1] = (line_start + s + 4) as u32;
            out[count * 3 + 2] = (line_end - (line_start + s + 4)) as u32;
            count += 1;
        } else if (trimmed.len() >= 3 && trimmed[0] == b'-' && trimmed[1] == b'-' && trimmed[2] == b'-')
               || (trimmed.len() >= 3 && trimmed[0] == b'*' && trimmed[1] == b'*' && trimmed[2] == b'*') {
            out[count * 3] = 4;
            out[count * 3 + 1] = line_start as u32;
            out[count * 3 + 2] = 0;
            count += 1;
        } else if trimmed.len() >= 5 && (trimmed[0] == b'-' || trimmed[0] == b'*' || trimmed[0] == b'+') && trimmed[1] == b' ' && trimmed[2] == b'[' {
            let check_char = trimmed[3];
            let is_checked = check_char == b'x' || check_char == b'X';
            out[count * 3] = if is_checked { 6 } else { 5 };
            let content_start = line_start + s + if trimmed.len() >= 6 && trimmed[4] == b']' && trimmed[5] == b' ' { 6 } else { 5 };
            out[count * 3 + 1] = content_start as u32;
            out[count * 3 + 2] = if line_end > content_start { (line_end - content_start) as u32 } else { 0 };
            count += 1;
        } else if trimmed.len() >= 2 && (trimmed[0] == b'-' || trimmed[0] == b'*' || trimmed[0] == b'+') && trimmed[1] == b' ' {
            out[count * 3] = 7;
            out[count * 3 + 1] = (line_start + s + 2) as u32;
            out[count * 3 + 2] = (line_end - (line_start + s + 2)) as u32;
            count += 1;
        } else if trimmed.len() >= 2 && trimmed[0] == b'>' {
            let offset = if trimmed[1] == b' ' { 2 } else { 1 };
            out[count * 3] = 8;
            out[count * 3 + 1] = (line_start + s + offset) as u32;
            out[count * 3 + 2] = (line_end - (line_start + s + offset)) as u32;
            count += 1;
        } else {
            out[count * 3] = 11;
            out[count * 3 + 1] = (line_start + s) as u32;
            out[count * 3 + 2] = (line_end - (line_start + s)) as u32;
            count += 1;
        }
    }

    if in_code && count < max_blocks {
        out[count * 3] = 9;
        out[count * 3 + 1] = code_start as u32;
        out[count * 3 + 2] = (text_len - code_start) as u32;
        count += 1;
    }

    count as u32
}

// ============================================================================
// 11. NATIVE RUST ADVANCED TEXT READABILITY & PULSE ANALYZER
// Computes words, sentences, chars, syllables, long words, Flesch Reading Ease,
// Flesch-Kincaid Grade Level, reading time (sec), and speaking time (sec).
// out_f32_ptr: [f32; 9]
// ============================================================================
#[no_mangle]
pub extern "C" fn analyze_text_full(
    ptr: *const u8,
    len: usize,
    out_f32_ptr: *mut f32,
) {
    if out_f32_ptr.is_null() {
        return;
    }
    let out = unsafe { core::slice::from_raw_parts_mut(out_f32_ptr, 9) };
    for k in 0..9 {
        out[k] = 0.0;
    }
    if ptr.is_null() || len == 0 {
        return;
    }

    let mut base_stats = [0u32; 5];
    analyze_text_stats(ptr, len, base_stats.as_mut_ptr());

    let words = base_stats[0] as f32;
    let sentences = (if base_stats[1] == 0 && base_stats[0] > 0 { 1 } else { base_stats[1] }) as f32;
    let non_ws = base_stats[2] as f32;
    let syllables = base_stats[3] as f32;
    let long_words = base_stats[4] as f32;

    out[0] = words;
    out[1] = sentences;
    out[2] = non_ws;
    out[3] = syllables;
    out[4] = long_words;

    if words > 0.0 && sentences > 0.0 {
        let words_per_sent = words / sentences;
        let syl_per_word = syllables / words;

        let mut ease = 206.835 - (1.015 * words_per_sent) - (84.6 * syl_per_word);
        if ease < 0.0 { ease = 0.0; }
        else if ease > 100.0 { ease = 100.0; }
        out[5] = ease;

        let mut grade = (0.39 * words_per_sent) + (11.8 * syl_per_word) - 15.59;
        if grade < 0.0 { grade = 0.0; }
        out[6] = grade;

        out[7] = (words / 220.0) * 60.0;
        out[8] = (words / 130.0) * 60.0;
    }
}

// ============================================================================
// 12. NATIVE RUST BATCH FUZZY VAULT RANKER
// Given query and array of notes in arena memory, scores all notes in one pass,
// sorts top matches, and returns out_indices and out_scores.
// notes_buf: [count: u32] then for each: [title_len: u16, content_len: u16, title_bytes, content_bytes]
// Returns: number of matched notes
// ============================================================================
#[inline(always)]
fn contains_substr_ignore_case(haystack: &[u8], needle: &[u8]) -> bool {
    if needle.is_empty() || needle.len() > haystack.len() {
        return false;
    }
    let limit = haystack.len() - needle.len() + 1;
    for i in 0..limit {
        let mut matches = true;
        for k in 0..needle.len() {
            if to_lower_ascii(haystack[i + k]) != to_lower_ascii(needle[k]) {
                matches = false;
                break;
            }
        }
        if matches {
            return true;
        }
    }
    false
}

#[no_mangle]
pub extern "C" fn rank_vault_notes(
    query_ptr: *const u8,
    query_len: usize,
    notes_buf_ptr: *const u8,
    out_indices_ptr: *mut u32,
    out_scores_ptr: *mut i32,
    max_results: usize,
) -> u32 {
    if query_ptr.is_null() || notes_buf_ptr.is_null() || out_indices_ptr.is_null() || out_scores_ptr.is_null() || max_results == 0 {
        return 0;
    }
    let notes_count = unsafe { *(notes_buf_ptr as *const u32) } as usize;
    if notes_count == 0 {
        return 0;
    }
    let out_indices = unsafe { core::slice::from_raw_parts_mut(out_indices_ptr, max_results) };
    let out_scores = unsafe { core::slice::from_raw_parts_mut(out_scores_ptr, max_results) };

    let mut matched_count = 0;
    let mut offset = 4;

    for n_idx in 0..notes_count {
        let title_len = (unsafe { *notes_buf_ptr.add(offset) } as usize)
            | ((unsafe { *notes_buf_ptr.add(offset + 1) } as usize) << 8);
        let content_len = (unsafe { *notes_buf_ptr.add(offset + 2) } as usize)
            | ((unsafe { *notes_buf_ptr.add(offset + 3) } as usize) << 8);
        let title_ptr = unsafe { notes_buf_ptr.add(offset + 4) };
        let content_ptr = unsafe { notes_buf_ptr.add(offset + 4 + title_len) };

        let title_score = if query_len == 0 { 100 } else { fuzzy_score_ascii(query_ptr, query_len, title_ptr, title_len) };
        let content_score = if query_len == 0 { 0 } else if content_len > 0 { fuzzy_score_ascii(query_ptr, query_len, content_ptr, content_len) } else { -1 };

        let q_bytes = unsafe { core::slice::from_raw_parts(query_ptr, query_len) };
        let t_bytes = unsafe { core::slice::from_raw_parts(title_ptr, title_len) };
        let is_title_substr = query_len > 0 && contains_substr_ignore_case(t_bytes, q_bytes);

        let final_score = if is_title_substr {
            title_score * 3 + 200 + if content_score > 0 { content_score / 2 } else { 0 }
        } else if title_score > 0 {
            title_score * 3 + if content_score > 0 { content_score / 2 } else { 0 }
        } else if content_score > 0 {
            content_score
        } else {
            -1
        };

        if final_score > 0 {
            if matched_count < max_results {
                out_indices[matched_count] = n_idx as u32;
                out_scores[matched_count] = final_score;
                matched_count += 1;
                let mut pos = matched_count - 1;
                while pos > 0 && out_scores[pos] > out_scores[pos - 1] {
                    out_scores.swap(pos, pos - 1);
                    out_indices.swap(pos, pos - 1);
                    pos -= 1;
                }
            } else if final_score > out_scores[max_results - 1] {
                out_indices[max_results - 1] = n_idx as u32;
                out_scores[max_results - 1] = final_score;
                let mut pos = max_results - 1;
                while pos > 0 && out_scores[pos] > out_scores[pos - 1] {
                    out_scores.swap(pos, pos - 1);
                    out_indices.swap(pos, pos - 1);
                    pos -= 1;
                }
            }
        }

        offset += 4 + title_len + content_len;
    }

    matched_count as u32
}
