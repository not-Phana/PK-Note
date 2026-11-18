// PK Note — Off-Main-Thread Whisper-Tiny Speech-to-Text Web Worker (Zero UI Freeze)
// Used only when user selects "Offline AI" mode or in browsers without native Web Speech API.

const WHISPER_ESM_URL = 'https://esm.sh/@huggingface/transformers@3.5.1';
const WHISPER_ESM_FALLBACK = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.5.1';
const WHISPER_MODEL_ID = 'onnx-community/whisper-tiny.en';

let asrPipeline = null;
let loadPromise = null;
let loadedDevice = 'wasm';
let minValidSessionId = 0;

async function detectWebGpu() {
  if (typeof navigator === 'undefined' || !navigator.gpu) return false;
  try {
    const adapter = await navigator.gpu.requestAdapter();
    return !!adapter;
  } catch (_) {
    return false;
  }
}

async function importTransformers() {
  try {
    return await import(WHISPER_ESM_URL);
  } catch (_) {
    return await import(WHISPER_ESM_FALLBACK);
  }
}

async function ensureLoaded(isLiteMobile = false) {
  if (asrPipeline) return asrPipeline;
  if (loadPromise) return loadPromise;

  let lastProgressTs = 0;
  const onProgress = (info) => {
    if (!info) return;
    const now = performance.now();
    if (info.status === 'progress' && (now - lastProgressTs < 150)) return;
    lastProgressTs = now;
    self.postMessage({
      type: 'progress',
      progress: typeof info.progress === 'number' ? info.progress : null,
      status: info.status || ''
    });
  };

  loadPromise = (async () => {
    const mod = await importTransformers();
    if (mod && mod.env) {
      mod.env.allowLocalModels = false;
      mod.env.useBrowserCache = true;
    }
    const useGpu = !isLiteMobile && (await detectWebGpu());
    try {
      if (useGpu) {
        loadedDevice = 'webgpu';
        asrPipeline = await mod.pipeline('automatic-speech-recognition', WHISPER_MODEL_ID, {
          dtype: { encoder_model: 'fp32', decoder_model_merged: 'q4' },
          device: 'webgpu',
          progress_callback: onProgress
        });
      } else {
        loadedDevice = 'wasm';
        asrPipeline = await mod.pipeline('automatic-speech-recognition', WHISPER_MODEL_ID, {
          dtype: 'q8',
          device: 'wasm',
          progress_callback: onProgress
        });
      }
    } catch (_) {
      loadedDevice = 'wasm';
      asrPipeline = await mod.pipeline('automatic-speech-recognition', WHISPER_MODEL_ID, {
        dtype: 'q8',
        device: 'wasm',
        progress_callback: onProgress
      });
    }
    self.postMessage({ type: 'ready', device: loadedDevice });
    return asrPipeline;
  })().catch((err) => {
    loadPromise = null;
    asrPipeline = null;
    throw err;
  });

  return loadPromise;
}

self.onmessage = async (event) => {
  const msg = event.data || {};
  if (msg.type === 'cancel') {
    minValidSessionId = Math.max(minValidSessionId, Number(msg.sessionId) || 0);
    return;
  }

  if (msg.type === 'init') {
    try {
      await ensureLoaded(!!msg.isLiteMobile);
    } catch (err) {
      self.postMessage({ type: 'error', id: msg.id || 0, message: err && err.message ? err.message : String(err) });
    }
    return;
  }

  if (msg.type === 'transcribe') {
    const { id, sessionId, pcm, isFinal } = msg;
    if ((sessionId || 0) < minValidSessionId) {
      self.postMessage({ type: 'cancelled', id });
      return;
    }
    try {
      const asr = await ensureLoaded(!!msg.isLiteMobile);
      if ((sessionId || 0) < minValidSessionId) {
        self.postMessage({ type: 'cancelled', id });
        return;
      }
      const audio = pcm instanceof Float32Array ? pcm : new Float32Array(pcm);
      const out = await asr(audio, { chunk_length_s: 20, stride_length_s: 3 });
      if ((sessionId || 0) < minValidSessionId) {
        self.postMessage({ type: 'cancelled', id });
        return;
      }
      self.postMessage({
        type: 'result',
        id,
        sessionId,
        isFinal: !!isFinal,
        text: (out && out.text) ? String(out.text) : ''
      });
    } catch (err) {
      self.postMessage({
        type: 'error',
        id,
        sessionId,
        message: err && err.message ? err.message : String(err)
      });
    }
  }
};
