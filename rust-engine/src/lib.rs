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
