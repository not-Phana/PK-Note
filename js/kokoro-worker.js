// PK Note — Fast Off-Main-Thread Kokoro-82M Neural Voice Web Worker
// Features:
//   - Auto WebGPU (fp16) hardware acceleration on desktop GPUs (10-20x faster) with automatic WASM q8 fallback
//   - Instant queue cancellation so stale/stopped jobs are skipped in 0 ms
//   - Zero-copy Float32Array PCM transfer back to main thread (skips WAV encode/decode round-trip)

const KOKORO_MODEL_ID = 'onnx-community/Kokoro-82M-v1.0-ONNX';
const KOKORO_ESM_URL = 'https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/dist/kokoro.web.js';
const KOKORO_ESM_FALLBACK_URL = 'https://unpkg.com/kokoro-js@1.2.1/dist/kokoro.web.js';

let ttsInstance = null;
let loadedKey = null; // `${device}:${dtype}`
let loadedDevice = 'wasm';
let loadedQuant = 'q8';
let loadPromise = null;
let minValidSessionId = 0;

async function detectWebGpuF16() {
  if (typeof navigator === 'undefined' || !navigator.gpu) return false;
  try {
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) return false;
    return !!(adapter.features && adapter.features.has('shader-f16'));
  } catch (_) {
    return false;
  }
}

async function importKokoroModule() {
  try {
    return await import(KOKORO_ESM_URL);
  } catch (_) {
    return await import(KOKORO_ESM_FALLBACK_URL);
  }
}

async function ensureLoaded(dtype, isLiteMobile = false) {
  const preferWebGpu = !isLiteMobile && (await detectWebGpuF16());
  const targetDevice = preferWebGpu ? 'webgpu' : 'wasm';
  const targetQuant = preferWebGpu ? 'fp16' : (dtype === 'fp16' ? 'fp16' : 'q8');
  const key = `${targetDevice}:${targetQuant}`;

  if (ttsInstance && loadedKey === key) return ttsInstance;
  if (loadPromise && loadedKey === key) return loadPromise;

  loadedKey = key;
  let lastProgressTs = 0;

  const makeProgressCb = () => (info) => {
    if (!info) return;
    const now = performance.now();
    if (info.status === 'progress' && (now - lastProgressTs < 140)) return;
    lastProgressTs = now;
    self.postMessage({
      type: 'progress',
      status: info.status || '',
      file: info.file || info.name || '',
      progress: typeof info.progress === 'number' ? info.progress : null,
      loaded: info.loaded || 0,
      total: info.total || 0,
      device: loadedDevice
    });
  };

  loadPromise = (async () => {
    try {
      self.postMessage({ type: 'status', state: 'loading', pct: 4, text: 'Connecting to Kokoro-82M runtime...' });
      const mod = await importKokoroModule();
      const { KokoroTTS } = mod;
      if (!KokoroTTS) throw new Error('KokoroTTS export missing');

      let tts = null;
      if (targetDevice === 'webgpu') {
        try {
          loadedDevice = 'webgpu';
          loadedQuant = 'fp16';
          tts = await KokoroTTS.from_pretrained(KOKORO_MODEL_ID, {
            dtype: 'fp16',
            device: 'webgpu',
            progress_callback: makeProgressCb()
          });
        } catch (_) {
          // Seamless fallback to fast WASM q8 if WebGPU driver rejects ONNX shader
          tts = null;
        }
      }

      if (!tts) {
        loadedDevice = 'wasm';
        loadedQuant = dtype === 'fp16' && !isLiteMobile ? 'fp16' : 'q8';
        loadedKey = `wasm:${loadedQuant}`;
        tts = await KokoroTTS.from_pretrained(KOKORO_MODEL_ID, {
          dtype: loadedQuant,
          device: 'wasm',
          progress_callback: makeProgressCb()
        });
      }

      ttsInstance = tts;
      self.postMessage({ type: 'status', state: 'ready', pct: 100, quant: loadedQuant, device: loadedDevice });
      return tts;
    } catch (err) {
      ttsInstance = null;
      loadPromise = null;
      loadedKey = null;
      throw err;
    }
  })();

  return loadPromise;
}

// Serialize worker tasks 1-at-a-time, skipping any cancelled/obsolete generation in 0 ms!
let taskChain = Promise.resolve();

self.onmessage = (event) => {
  const msg = event.data || {};
  const { id, type } = msg;

  // Instant queue cancellation — never waste 10s synthesizing a cancelled sentence!
  if (type === 'cancel') {
    if (typeof msg.sessionId === 'number' && msg.sessionId > minValidSessionId) {
      minValidSessionId = msg.sessionId;
    }
    return;
  }

  if (type === 'unload') {
    ttsInstance = null;
    loadPromise = null;
    loadedKey = null;
    self.postMessage({ type: 'reply', id, ok: true });
    return;
  }

  taskChain = taskChain.catch(() => {}).then(async () => {
    try {
      if (type === 'init') {
        await ensureLoaded(msg.dtype, !!msg.isLiteMobile);
        self.postMessage({ type: 'reply', id, ok: true, quant: loadedQuant, device: loadedDevice });
      } else if (type === 'generate') {
        // Drop obsolete queued job immediately before touching ONNX!
        if (typeof msg.sessionId === 'number' && msg.sessionId < minValidSessionId) {
          self.postMessage({ type: 'reply', id, ok: true, cancelled: true });
          return;
        }
        const tts = await ensureLoaded(msg.dtype, !!msg.isLiteMobile);
        if (typeof msg.sessionId === 'number' && msg.sessionId < minValidSessionId) {
          self.postMessage({ type: 'reply', id, ok: true, cancelled: true });
          return;
        }
        const rawAudio = await tts.generate(msg.text, {
          voice: msg.voice || 'af_heart',
          speed: msg.speed || 1.0
        });
        const sr = rawAudio.sampling_rate || 24000;
        const pcm = new Float32Array(rawAudio.audio);
        self.postMessage(
          { type: 'reply', id, ok: true, audio: pcm.buffer, sampleRate: sr, device: loadedDevice },
          [pcm.buffer]
        );
      }
    } catch (err) {
      self.postMessage({
        type: 'reply',
        id,
        ok: false,
        error: err && err.message ? err.message : String(err)
      });
    }
  });
};
