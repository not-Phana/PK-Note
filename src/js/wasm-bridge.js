// PK Note — Rust WebAssembly Accelerator Bridge (Zero-GC Linear Memory)
(function () {
  const MAX_ARENA_FLOATS = 950000; // Fits safely inside 4 MB Rust static arena
  const enc = typeof TextEncoder !== 'undefined' ? new TextEncoder() : null;

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
    }
  };

  window.PKWasm = bridge;
  bridge.init();
})();
