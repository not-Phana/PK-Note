// PK Note — Rust WebAssembly Accelerator Bridge (Zero-GC Linear Memory)
(function () {
  const MAX_ARENA_FLOATS = 950000; // Fits safely inside 4 MB Rust static arena
  const enc = typeof TextEncoder !== 'undefined' ? new TextEncoder() : null;
  const dec = typeof TextDecoder !== 'undefined' ? new TextDecoder() : null;

  const bridge = {
    ready: false,
    engine: 'js-fallback',
    exports: null,
    memory: null,

    async init() {
      if (this.ready || typeof WebAssembly === 'undefined') return this.ready;
      try {
        const res = await fetch('./wasm/pk_engine.wasm', { cache: 'force-cache' });
        if (!res.ok) return false;
        let inst;
        if (typeof WebAssembly.instantiateStreaming === 'function') {
          try {
            const loaded = await WebAssembly.instantiateStreaming(res.clone());
            inst = loaded.instance;
          } catch (_) {
            const buf = await res.arrayBuffer();
            inst = (await WebAssembly.instantiate(buf)).instance;
          }
        } else {
          const buf = await res.arrayBuffer();
          inst = (await WebAssembly.instantiate(buf)).instance;
        }
        this.exports = inst.exports;
        this.memory = inst.exports.memory;
        this.ready = true;
        this.engine = 'rust-wasm';
        return true;
      } catch (_) {
        return false;
      }
    },

    // 1. Native Rust Force-Directed Graph Physics (O(N^2) repulsion + springs + damping)
    stepGraphPhysics(graphNodes, activeEdges, centerX, centerY, draggedNodeId) {
      if (!this.ready || !graphNodes || graphNodes.length === 0) return null;
      const n = graphNodes.length;
      const e = activeEdges ? activeEdges.length : 0;
      const w = this.exports;
      w.arena_reset();

      const nodesPtr = w.arena_alloc(n * 16, 4);
      const edgesPtr = e > 0 ? w.arena_alloc(e * 8, 4) : 0;
      if (!nodesPtr) return null;

      const nodeBuf = new Float32Array(this.memory.buffer, nodesPtr, n * 4);
      const idToIdx = new Map();
      let draggedIdx = -1;

      for (let i = 0; i < n; i++) {
        const nd = graphNodes[i];
        idToIdx.set(nd.id, i);
        if (draggedNodeId && nd.id === draggedNodeId) draggedIdx = i;
        const b = i * 4;
        nodeBuf[b] = nd.x;
        nodeBuf[b + 1] = nd.y;
        nodeBuf[b + 2] = nd.vx;
        nodeBuf[b + 3] = nd.vy;
      }

      let validEdges = 0;
      if (e > 0 && edgesPtr) {
        const edgeBuf = new Uint32Array(this.memory.buffer, edgesPtr, e * 2);
        for (let k = 0; k < e; k++) {
          const edge = activeEdges[k];
          const si = idToIdx.get(edge.source);
          const ti = idToIdx.get(edge.target);
          if (si !== undefined && ti !== undefined) {
            edgeBuf[validEdges * 2] = si;
            edgeBuf[validEdges * 2 + 1] = ti;
            validEdges++;
          }
        }
      }

      const energy = w.step_graph_physics(nodesPtr, n, edgesPtr, validEdges, centerX, centerY, draggedIdx);

      for (let i = 0; i < n; i++) {
        const nd = graphNodes[i];
        const b = i * 4;
        nd.x = nodeBuf[b];
        nd.y = nodeBuf[b + 1];
        nd.vx = nodeBuf[b + 2];
        nd.vy = nodeBuf[b + 3];
      }
      return energy;
    },

    // 1b. Native Rust 3D Force-Directed Knowledge Galaxy Physics (Zero-GC)
    stepGraphPhysics3D(graphNodes, activeEdges, centerX, centerY, centerZ, draggedNodeId) {
      if (!this.ready || !graphNodes || graphNodes.length === 0 || !this.exports || !this.exports.step_graph_physics_3d) return null;
      const n = graphNodes.length;
      const e = activeEdges ? activeEdges.length : 0;
      const w = this.exports;
      w.arena_reset();

      const nodesPtr = w.arena_alloc(n * 24, 4); // 6 floats * 4 bytes = 24 bytes
      const edgesPtr = e > 0 ? w.arena_alloc(e * 8, 4) : 0;
      if (!nodesPtr) return null;

      const nodeBuf = new Float32Array(this.memory.buffer, nodesPtr, n * 6);
      const idToIdx = new Map();
      let draggedIdx = -1;

      for (let i = 0; i < n; i++) {
        const nd = graphNodes[i];
        idToIdx.set(nd.id, i);
        if (draggedNodeId && nd.id === draggedNodeId) draggedIdx = i;
        const b = i * 6;
        nodeBuf[b] = typeof nd.x3 === 'number' ? nd.x3 : 0;
        nodeBuf[b + 1] = typeof nd.y3 === 'number' ? nd.y3 : 0;
        nodeBuf[b + 2] = typeof nd.z3 === 'number' ? nd.z3 : 0;
        nodeBuf[b + 3] = typeof nd.vx3 === 'number' ? nd.vx3 : 0;
        nodeBuf[b + 4] = typeof nd.vy3 === 'number' ? nd.vy3 : 0;
        nodeBuf[b + 5] = typeof nd.vz3 === 'number' ? nd.vz3 : 0;
      }

      let validEdges = 0;
      if (e > 0 && edgesPtr) {
        const edgeBuf = new Uint32Array(this.memory.buffer, edgesPtr, e * 2);
        for (let k = 0; k < e; k++) {
          const edge = activeEdges[k];
          const si = idToIdx.get(edge.source);
          const ti = idToIdx.get(edge.target);
          if (si !== undefined && ti !== undefined) {
            edgeBuf[validEdges * 2] = si;
            edgeBuf[validEdges * 2 + 1] = ti;
            validEdges++;
          }
        }
      }

      const energy = w.step_graph_physics_3d(nodesPtr, n, edgesPtr, validEdges, centerX || 0, centerY || 0, centerZ || 0, draggedIdx);

      for (let i = 0; i < n; i++) {
        const nd = graphNodes[i];
        const b = i * 6;
        nd.x3 = nodeBuf[b];
        nd.y3 = nodeBuf[b + 1];
        nd.z3 = nodeBuf[b + 2];
        nd.vx3 = nodeBuf[b + 3];
        nd.vy3 = nodeBuf[b + 4];
        nd.vz3 = nodeBuf[b + 5];
      }
      return energy;
    },

    // 2. Native Rust Whisper PCM Resampling (48kHz -> 16kHz), DC Removal & Soft-Limiter
    resampleAndNormalizePcm(merged, sourceSampleRate, maxBoost) {
      if (!this.ready || !merged || merged.length === 0) return null;
      const ratio = sourceSampleRate / 16000;
      const outLen = Math.max(1, Math.floor(merged.length / ratio));
      if (merged.length + outLen > MAX_ARENA_FLOATS) return null;

      const w = this.exports;
      w.arena_reset();
      const srcPtr = w.arena_alloc(merged.length * 4, 4);
      const dstPtr = w.arena_alloc(outLen * 4, 4);
      if (!srcPtr || !dstPtr) return null;

      new Float32Array(this.memory.buffer, srcPtr, merged.length).set(merged);
      const peak = w.resample_and_normalize_pcm(srcPtr, merged.length, sourceSampleRate, dstPtr, outLen, maxBoost || 48);
      const pcm = new Float32Array(outLen);
      pcm.set(new Float32Array(this.memory.buffer, dstPtr, outLen));
      return { pcm, peak };
    },

    // 3. Native Rust Kokoro-82M Studio-Master Float32 -> Int16 PCM Pipeline
    masterPcmToI16(float32Samples, sampleRate, applyWarmth) {
      if (!this.ready || !float32Samples || float32Samples.length === 0) return null;
      const len = float32Samples.length;
      if (len * 6 > 4 * 1024 * 1024 - 64) return null;

      const w = this.exports;
      w.arena_reset();
      const srcPtr = w.arena_alloc(len * 4, 4);
      const outPtr = w.arena_alloc(len * 2, 2);
      if (!srcPtr || !outPtr) return null;

      new Float32Array(this.memory.buffer, srcPtr, len).set(float32Samples);
      const count = w.master_pcm_to_i16(srcPtr, len, sampleRate >>> 0, applyWarmth ? 1 : 0, outPtr);
      const result = new Int16Array(count);
      result.set(new Int16Array(this.memory.buffer, outPtr, count));
      return result;
    },

    // 4. Native Rust Real-Time Mic RMS & Peak Analyzer
    computePcmRmsPeak(frame) {
      if (!this.ready || !frame || frame.length === 0 || frame.length > 65536) return null;
      const w = this.exports;
      w.arena_reset();
      const ptr = w.arena_alloc(frame.length * 4, 4);
      const statsPtr = w.arena_alloc(8, 4);
      if (!ptr || !statsPtr) return null;

      new Float32Array(this.memory.buffer, ptr, frame.length).set(frame);
      w.compute_pcm_rms_peak(ptr, frame.length, statsPtr);
      const out = new Float32Array(this.memory.buffer, statsPtr, 2);
      return { rms: out[0], peak: out[1] };
    },

    // 5. Native Rust ASCII Fuzzy Scorer (Command Palette & Search)
    fuzzyScore(query, text) {
      if (!this.ready || !enc || !query || !text) return null;
      const qBytes = enc.encode(query);
      const tBytes = enc.encode(text);
      if (qBytes.length + tBytes.length > 65536) return null;

      const w = this.exports;
      w.arena_reset();
      const qPtr = w.arena_alloc(qBytes.length, 1);
      const tPtr = w.arena_alloc(tBytes.length, 1);
      if (!qPtr || !tPtr) return null;

      const memU8 = new Uint8Array(this.memory.buffer);
      memU8.set(qBytes, qPtr);
      memU8.set(tBytes, tPtr);
      return w.fuzzy_score_ascii(qPtr, qBytes.length, tPtr, tBytes.length);
    },

    // 6. Native Rust Text & Readability Analyzer (Vault Pulse / Reading Rhythm)
    analyzeText(text) {
      if (!this.ready || !enc || typeof text !== 'string') return null;
      const bytes = enc.encode(text);
      if (bytes.length > 1024 * 1024) return null;
      const w = this.exports;
      w.arena_reset();
      const ptr = bytes.length > 0 ? w.arena_alloc(bytes.length, 1) : 0;
      const outPtr = w.arena_alloc(20, 4);
      if (!outPtr) return null;
      if (bytes.length > 0 && ptr) {
        new Uint8Array(this.memory.buffer, ptr, bytes.length).set(bytes);
      }
      w.analyze_text_stats(ptr, bytes.length, outPtr);
      const out = new Uint32Array(this.memory.buffer, outPtr, 5);
      return {
        words: out[0],
        sentences: out[1],
        nonWsChars: out[2],
        syllables: out[3],
        longWords: out[4]
      };
    },

    analyzeTextStats(text) {
      return this.analyzeText(text);
    },

    // 7. Native Rust Advanced Readability & Pulse Metrics
    analyzeTextFull(text) {
      if (!this.ready || !enc || typeof text !== 'string') return null;
      const bytes = enc.encode(text);
      if (bytes.length > 1024 * 1024) return null;
      const w = this.exports;
      w.arena_reset();
      const ptr = bytes.length > 0 ? w.arena_alloc(bytes.length, 1) : 0;
      const outPtr = w.arena_alloc(36, 4);
      if (!outPtr) return null;
      if (bytes.length > 0 && ptr) {
        new Uint8Array(this.memory.buffer, ptr, bytes.length).set(bytes);
      }
      w.analyze_text_full(ptr, bytes.length, outPtr);
      const out = new Float32Array(this.memory.buffer, outPtr, 9);
      return {
        words: out[0],
        sentences: out[1],
        nonWsChars: out[2],
        syllables: out[3],
        longWords: out[4],
        fleschEase: out[5],
        fkGrade: out[6],
        readingTimeSecs: out[7],
        speakingTimeSecs: out[8]
      };
    },

    // 8. Native Rust High-Performance Math Evaluator (Kon Action calculate)
    calculate(expression) {
      if (!this.ready || !enc || typeof expression !== 'string') return null;
      const trimmed = expression.trim();
      if (!trimmed) return { ok: false, error: 'Empty expression' };
      const bytes = enc.encode(trimmed);
      if (bytes.length > 65536) return null;

      const w = this.exports;
      w.arena_reset();
      const exprPtr = w.arena_alloc(bytes.length, 1);
      const outPtr = w.arena_alloc(8, 8);
      if (!exprPtr || !outPtr) return null;

      new Uint8Array(this.memory.buffer, exprPtr, bytes.length).set(bytes);
      const errCode = w.eval_math_expression(exprPtr, bytes.length, outPtr);
      if (errCode === 0) {
        const val = new Float64Array(this.memory.buffer, outPtr, 1)[0];
        return { ok: true, result: val };
      } else if (errCode === 2) {
        return { ok: false, error: 'Division by zero' };
      } else {
        return { ok: false, error: 'Syntax error in mathematical expression' };
      }
    },

    // 9. Native Rust Vault Wikilink Scanner
    extractWikilinks(text, maxLinks) {
      if (!this.ready || !enc || !dec || typeof text !== 'string') return null;
      const bytes = enc.encode(text);
      if (bytes.length > 1024 * 1024) return null;
      const max = maxLinks || 256;

      const w = this.exports;
      w.arena_reset();
      const textPtr = bytes.length > 0 ? w.arena_alloc(bytes.length, 1) : 0;
      const outOffsetsPtr = w.arena_alloc(max * 8, 4);
      if (!outOffsetsPtr) return null;

      if (bytes.length > 0 && textPtr) {
        new Uint8Array(this.memory.buffer, textPtr, bytes.length).set(bytes);
      }
      const count = w.extract_wikilinks(textPtr, bytes.length, outOffsetsPtr, max);
      const offsets = new Uint32Array(this.memory.buffer, outOffsetsPtr, count * 2);
      const links = [];
      const memU8 = new Uint8Array(this.memory.buffer);
      for (let i = 0; i < count; i++) {
        const s = offsets[i * 2];
        const l = offsets[i * 2 + 1];
        const linkStr = dec.decode(memU8.subarray(textPtr + s, textPtr + s + l));
        if (linkStr) links.push(linkStr);
      }
      return links;
    },

    // 10. Native Rust High-Speed Auto-Link Title Matcher
    findTitleMatches(text, titles, maxMatches) {
      if (!this.ready || !enc || typeof text !== 'string' || !Array.isArray(titles) || titles.length === 0) return null;
      const textBytes = enc.encode(text);
      if (textBytes.length > 512 * 1024) return null;
      const max = maxMatches || 128;

      let titlesBufSize = 4;
      const encodedTitles = [];
      for (let i = 0; i < titles.length; i++) {
        const tb = enc.encode(titles[i]);
        encodedTitles.push(tb);
        titlesBufSize += 2 + tb.length;
      }
      if (titlesBufSize > 512 * 1024) return null;

      const w = this.exports;
      w.arena_reset();
      const textPtr = textBytes.length > 0 ? w.arena_alloc(textBytes.length, 1) : 0;
      const titlesPtr = w.arena_alloc(titlesBufSize, 4);
      const outMatchesPtr = w.arena_alloc(max * 12, 4);
      if (!titlesPtr || !outMatchesPtr) return null;

      if (textBytes.length > 0 && textPtr) {
        new Uint8Array(this.memory.buffer, textPtr, textBytes.length).set(textBytes);
      }

      const memU8 = new Uint8Array(this.memory.buffer);
      new Uint32Array(this.memory.buffer, titlesPtr, 1)[0] = titles.length;
      let tOff = 4;
      for (let i = 0; i < encodedTitles.length; i++) {
        const tb = encodedTitles[i];
        memU8[titlesPtr + tOff] = tb.length & 0xff;
        memU8[titlesPtr + tOff + 1] = (tb.length >> 8) & 0xff;
        memU8.set(tb, titlesPtr + tOff + 2);
        tOff += 2 + tb.length;
      }

      const matchCount = w.find_title_matches(textPtr, textBytes.length, titlesPtr, outMatchesPtr, max);
      const matchesBuf = new Uint32Array(this.memory.buffer, outMatchesPtr, matchCount * 3);
      const matches = [];
      const isPureAscii = textBytes.length === text.length;
      for (let i = 0; i < matchCount; i++) {
        const bStart = matchesBuf[i * 3];
        const bEnd = matchesBuf[i * 3 + 1];
        const titleIdx = matchesBuf[i * 3 + 2];
        const title = titles[titleIdx];
        if (isPureAscii) {
          matches.push({
            start: bStart,
            end: bEnd,
            title,
            matchedText: text.substring(bStart, bEnd)
          });
        } else {
          const matchedText = dec.decode(memU8.subarray(textPtr + bStart, textPtr + bEnd));
          const charStart = dec.decode(textBytes.subarray(0, bStart)).length;
          const charEnd = charStart + matchedText.length;
          matches.push({
            start: charStart,
            end: charEnd,
            title,
            matchedText
          });
        }
      }
      return matches;
    },

    // 11. Native Rust Markdown Block Tokenizer
    parseMarkdownBlocks(mdText, maxBlocks) {
      if (!this.ready || !enc || typeof mdText !== 'string') return null;
      const bytes = enc.encode(mdText);
      if (bytes.length > 1024 * 1024) return null;
      const max = maxBlocks || 512;

      const w = this.exports;
      w.arena_reset();
      const textPtr = bytes.length > 0 ? w.arena_alloc(bytes.length, 1) : 0;
      const outBlocksPtr = w.arena_alloc(max * 12, 4);
      if (!outBlocksPtr) return null;

      if (bytes.length > 0 && textPtr) {
        new Uint8Array(this.memory.buffer, textPtr, bytes.length).set(bytes);
      }

      const count = w.parse_markdown_blocks(textPtr, bytes.length, outBlocksPtr, max);
      const blocksBuf = new Uint32Array(this.memory.buffer, outBlocksPtr, count * 3);
      const TYPE_MAP = {
        1: 'h1', 2: 'h2', 3: 'h3', 4: 'divider',
        5: 'todo', 6: 'todo', 7: 'bullet', 8: 'quote',
        9: 'code', 10: 'math', 11: 'paragraph'
      };
      const result = [];
      const memU8 = new Uint8Array(this.memory.buffer);
      for (let i = 0; i < count; i++) {
        const typeId = blocksBuf[i * 3];
        const start = blocksBuf[i * 3 + 1];
        const len = blocksBuf[i * 3 + 2];
        const type = TYPE_MAP[typeId] || 'paragraph';
        const content = dec.decode(memU8.subarray(textPtr + start, textPtr + start + len));
        const item = { type, content };
        if (typeId === 6) item.checked = true;
        else if (typeId === 5) item.checked = false;
        result.push(item);
      }
      return result;
    },

    // 12. Native Rust Batch Fuzzy Vault Ranker
    rankVaultNotes(query, notes, maxResults) {
      if (!this.ready || !enc || !Array.isArray(notes) || notes.length === 0) return null;
      const q = typeof query === 'string' ? query.trim() : '';
      const qBytes = enc.encode(q);
      const max = maxResults || 50;

      let totalSize = 4;
      const encodedNotes = [];
      for (let i = 0; i < notes.length; i++) {
        const n = notes[i];
        const tb = enc.encode(n.title || '');
        const cb = enc.encode(n.content || '');
        encodedNotes.push({ tb, cb });
        totalSize += 4 + tb.length + cb.length;
      }
      if (totalSize > 2 * 1024 * 1024) return null;

      const w = this.exports;
      w.arena_reset();
      const qPtr = qBytes.length > 0 ? w.arena_alloc(qBytes.length, 1) : 0;
      const notesBufPtr = w.arena_alloc(totalSize, 4);
      const outIdxPtr = w.arena_alloc(max * 4, 4);
      const outScoresPtr = w.arena_alloc(max * 4, 4);
      if (!notesBufPtr || !outIdxPtr || !outScoresPtr) return null;

      if (qBytes.length > 0 && qPtr) {
        new Uint8Array(this.memory.buffer, qPtr, qBytes.length).set(qBytes);
      }

      const memU8 = new Uint8Array(this.memory.buffer);
      new Uint32Array(this.memory.buffer, notesBufPtr, 1)[0] = notes.length;
      let offset = 4;
      for (let i = 0; i < encodedNotes.length; i++) {
        const { tb, cb } = encodedNotes[i];
        memU8[notesBufPtr + offset] = tb.length & 0xff;
        memU8[notesBufPtr + offset + 1] = (tb.length >> 8) & 0xff;
        memU8[notesBufPtr + offset + 2] = cb.length & 0xff;
        memU8[notesBufPtr + offset + 3] = (cb.length >> 8) & 0xff;
        memU8.set(tb, notesBufPtr + offset + 4);
        memU8.set(cb, notesBufPtr + offset + 4 + tb.length);
        offset += 4 + tb.length + cb.length;
      }

      const count = w.rank_vault_notes(qPtr, qBytes.length, notesBufPtr, outIdxPtr, outScoresPtr, max);
      const idxBuf = new Uint32Array(this.memory.buffer, outIdxPtr, count);
      const scoresBuf = new Int32Array(this.memory.buffer, outScoresPtr, count);
      const ranked = [];
      for (let i = 0; i < count; i++) {
        ranked.push({
          noteIndex: idxBuf[i],
          score: scoresBuf[i],
          note: notes[idxBuf[i]]
        });
      }
      return ranked;
    }
  };

  window.PKWasm = bridge;
  bridge.init();
})();
