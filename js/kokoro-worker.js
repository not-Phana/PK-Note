// PK Note — Off-Main-Thread Kokoro-82M Neural Voice Web Worker
// Runs ONNX WASM synthesis completely off the UI thread -> 0ms UI lag on 2019 phones!

const KOKORO_MODEL_ID = 'onnx-community/Kokoro-82M-v1.0-ONNX';
const KOKORO_ESM_URL = 'https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/dist/kokoro.web.js';
const KOKORO_ESM_FALLBACK_URL = 'https://unpkg.com/kokoro-js@1.2.1/dist/kokoro.web.js';

let ttsInstance = null;
let loadedQuant = null;
let loadPromise = null;

async function ensureLoaded(dtype) {
  const targetQuant = dtype === 'fp16' ? 'fp16' : 'q8';
  if (ttsInstance && loadedQuant === targetQuant) return ttsInstance;
  if (loadPromise && loadedQuant === targetQuant) return loadPromise;

  loadedQuant = targetQuant;
  let lastProgressTs = 0;

  loadPromise = (async () => {
    try {
      self.postMessage({ type: 'status', state: 'loading', pct: 4, text: 'Connecting to Kokoro-82M runtime...' });
      let mod = null;
      try {
        mod = await import(KOKORO_ESM_URL);
      } catch (_) {
        mod = await import(KOKORO_ESM_FALLBACK_URL);
      }
      const { KokoroTTS } = mod;
      if (!KokoroTTS) throw new Error('KokoroTTS export missing');

      const tts = await KokoroTTS.from_pretrained(KOKORO_MODEL_ID, {
        dtype: targetQuant,
        device: 'wasm',
        progress_callback: (info) => {
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
            total: info.total || 0
          });
        }
      });

      ttsInstance = tts;
      self.postMessage({ type: 'status', state: 'ready', pct: 100, quant: targetQuant });
      return tts;
    } catch (err) {
      ttsInstance = null;
      loadPromise = null;
      loadedQuant = null;
      throw err;
    }
  })();

  return loadPromise;
}

// Serialize all worker commands strictly 1-at-a-time so RAM never spikes on 2019 phones
let taskChain = Promise.resolve();

self.onmessage = (event) => {
  const msg = event.data || {};
  const { id, type } = msg;

  if (type === 'unload') {
    ttsInstance = null;
    loadPromise = null;
    loadedQuant = null;
    self.postMessage({ type: 'reply', id, ok: true });
    return;
  }

  taskChain = taskChain.catch(() => {}).then(async () => {
    try {
      if (type === 'init') {
        await ensureLoaded(msg.dtype);
        self.postMessage({ type: 'reply', id, ok: true, quant: loadedQuant });
      } else if (type === 'generate') {
        const tts = await ensureLoaded(msg.dtype);
        const rawAudio = await tts.generate(msg.text, {
          voice: msg.voice || 'af_heart',
          speed: msg.speed || 1.0
        });
        const sr = rawAudio.sampling_rate || 24000;
        // Clone into a fresh transferable Float32Array for zero-copy postMessage transfer
        const pcm = new Float32Array(rawAudio.audio);
        self.postMessage(
          { type: 'reply', id, ok: true, audio: pcm.buffer, sampleRate: sr },
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
