// ============================================================================
// PK NOTE — MULTI-PROVIDER FREE AI ASSISTANT (Gemini · OpenRouter Free · Groq · NVIDIA · Local)
// 100% Client-Side BYOK & Local Server Support, Ranked Free Models, SSE Streaming, Zero Emoji
// Full PK Note integration: Active Note, Vault, Calendar, Study Deck, Voice
// ============================================================================

const PK_AI_CONFIG_KEY = 'pk_note_ai_config_v2';
const PK_GROQ_LEGACY_CONFIG_KEY = 'pk_note_groq_config_v1';

const PK_AI_PROVIDERS = {
  gemini: {
    id: 'gemini',
    name: 'Gemini AI',
    shortName: 'Gemini',
    defaultBaseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai',
    defaultModel: 'gemini-2.0-flash',
    requiresKey: true,
    keyPlaceholder: 'AIzaSy... or AQ....',
    keyLabel: 'Gemini API Key (Saved Locally)',
    keyUrl: 'https://aistudio.google.com/apikey',
    keyLinkText: 'Get free key',
    models: [
      { id: 'gemini-2.0-flash', label: '#1 gemini-2.0-flash (Fast & Multimodal · 1M Ctx · Best Free)' },
      { id: 'gemini-2.0-flash-lite', label: '#2 gemini-2.0-flash-lite (Lowest Latency · Fast Lite)' },
      { id: 'gemini-1.5-flash', label: '#3 gemini-1.5-flash (Stable Production Flash · 1M Ctx)' },
      { id: 'gemini-1.5-pro', label: '#4 gemini-1.5-pro (Deep Reasoning & Analysis · 2M Ctx)' },
      { id: 'gemini-2.0-pro-exp-02-05', label: '#5 gemini-2.0-pro-exp-02-05 (Experimental Pro)' }
    ]
  },
  openrouter: {
    id: 'openrouter',
    name: 'OpenRouter Free',
    shortName: 'Free OR',
    defaultBaseUrl: 'https://openrouter.ai/api/v1',
    defaultModel: 'openrouter/auto',
    requiresKey: true,
    keyPlaceholder: 'sk-or-v1-...',
    keyLabel: 'OpenRouter Key (Free $0 Models Only)',
    keyUrl: 'https://openrouter.ai/keys',
    keyLinkText: 'Get free key',
    models: [
      { id: 'openrouter/auto', label: '#1 openrouter/auto (Auto-Route to Best Available Model)' },
      { id: 'deepseek/deepseek-r1:free', label: '#2 deepseek/deepseek-r1:free (DeepSeek R1 Flagship Reasoning · Free)' },
      { id: 'deepseek/deepseek-chat:free', label: '#3 deepseek/deepseek-chat:free (DeepSeek V3 Chat · Free)' },
      { id: 'meta-llama/llama-3.3-70b-instruct:free', label: '#4 meta-llama/llama-3.3-70b-instruct:free (Llama 3.3 70B · Free)' },
      { id: 'google/gemini-2.0-flash-exp:free', label: '#5 google/gemini-2.0-flash-exp:free (Gemini 2.0 Flash · Free)' },
      { id: 'google/gemini-2.0-flash-thinking-exp:free', label: '#6 google/gemini-2.0-flash-thinking-exp:free (Gemini 2.0 Thinking · Free)' },
      { id: 'qwen/qwen-2.5-coder-32b-instruct:free', label: '#7 qwen/qwen-2.5-coder-32b-instruct:free (Qwen 2.5 Coder 32B · Free)' },
      { id: 'mistralai/mistral-small-24b-instruct-2501:free', label: '#8 mistralai/mistral-small-24b-instruct-2501:free (Mistral Small 24B · Free)' },
      { id: 'meta-llama/llama-3.1-8b-instruct:free', label: '#9 meta-llama/llama-3.1-8b-instruct:free (Llama 3.1 8B · Free)' }
    ]
  },
  groq: {
    id: 'groq',
    name: 'Groq Cloud',
    shortName: 'Groq',
    defaultBaseUrl: 'https://api.groq.com/openai/v1',
    defaultModel: 'llama-3.3-70b-versatile',
    requiresKey: true,
    keyPlaceholder: 'gsk_...',
    keyLabel: 'Groq API Key (Saved Locally)',
    keyUrl: 'https://console.groq.com/keys',
    keyLinkText: 'Get free key',
    models: [
      { id: 'llama-3.3-70b-versatile', label: '#1 llama-3.3-70b-versatile (Flagship 70B · 128K Ctx · Blazing Fast)' },
      { id: 'llama-3.1-8b-instant', label: '#2 llama-3.1-8b-instant (Fastest Instant · 128K Ctx)' },
      { id: 'deepseek-r1-distill-llama-70b', label: '#3 deepseek-r1-distill-llama-70b (DeepSeek R1 Reasoning · 128K Ctx)' },
      { id: 'qwen-2.5-32b', label: '#4 qwen-2.5-32b (Qwen 2.5 32B · Coding & Math)' },
      { id: 'qwen-2.5-coder-32b', label: '#5 qwen-2.5-coder-32b (Qwen Specialist Coder)' },
      { id: 'gemma2-9b-it', label: '#6 gemma2-9b-it (Google Gemma 2 9B)' },
      { id: 'llama-3.2-1b-preview', label: '#7 llama-3.2-1b-preview (Ultra-Light 1B)' },
      { id: 'llama-3.2-3b-preview', label: '#8 llama-3.2-3b-preview (Compact 3B)' },
      { id: 'llama-3.2-11b-vision-preview', label: '#9 llama-3.2-11b-vision-preview (Vision Multimodal)' }
    ]
  },
  nvidia: {
    id: 'nvidia',
    name: 'NVIDIA AI',
    shortName: 'NVIDIA',
    defaultBaseUrl: 'https://integrate.api.nvidia.com/v1',
    defaultModel: 'nvidia/nemotron-3.5-bolt-e4b',
    requiresKey: true,
    keyPlaceholder: 'nvapi-...',
    keyLabel: 'NVIDIA API Key (Saved Locally)',
    keyUrl: 'https://build.nvidia.com/explore/discover',
    keyLinkText: 'Get free key',
    models: [
      { id: 'nvidia/nemotron-3.5-bolt-e4b', label: '#1 nvidia/nemotron-3.5-bolt-e4b (Ultra-Fast Flagship · 128K Ctx)' },
      { id: 'nvidia/nemotron-3.5-lightning-30b-a3b', label: '#2 nvidia/nemotron-3.5-lightning-30b-a3b (30B Deep Reasoning)' },
      { id: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning', label: '#3 nvidia/nemotron-3-nano-omni-30b-a3b-reasoning (Omni Reasoning)' },
      { id: 'nvidia/nemotron-3-ultra-550b-a55b', label: '#4 nvidia/nemotron-3-ultra-550b-a55b (550B Frontier)' },
      { id: 'mistralai/mistral-large-4-1t-a52b', label: '#5 mistralai/mistral-large-4-1t-a52b (Mistral Large 4)' },
      { id: 'z-ai/glm-5.3-flash', label: '#6 z-ai/glm-5.3-flash (GLM 5.3 Flash)' },
      { id: 'moonshotai/kimi-k3.1-pro', label: '#7 moonshotai/kimi-k3.1-pro (Kimi K3.1 Pro)' },
      { id: 'minimaxai/minimax-m3.1-flash', label: '#8 minimaxai/minimax-m3.1-flash (MiniMax M3.1 Flash)' }
    ]
  },
  local: {
    id: 'local',
    name: 'Local Model',
    shortName: 'Local',
    defaultBaseUrl: 'http://localhost:1234/v1',
    defaultModel: 'llama3.2:latest',
    requiresKey: false,
    keyPlaceholder: 'Optional — leave blank for LM Studio / Ollama',
    keyLabel: 'Local Token / Key (Optional)',
    keyUrl: '',
    keyLinkText: '',
    models: [
      { id: 'llama3.2:latest', label: '#1 llama3.2:latest (Llama 3.2 · Local Default)' },
      { id: 'deepseek-r1:latest', label: '#2 deepseek-r1:latest (DeepSeek R1 Local)' },
      { id: 'qwen2.5:latest', label: '#3 qwen2.5:latest (Qwen 2.5 Local)' },
      { id: 'mistral:latest', label: '#4 mistral:latest (Mistral Local)' },
      { id: 'gemma2:latest', label: '#5 gemma2:latest (Gemma 2 Local)' },
      { id: 'llama3.1:latest', label: '#6 llama3.1:latest (Llama 3.1 Local)' }
    ]
  }
};

const PK_LOCAL_SERVER_PRESETS = {
  lmstudio: { label: 'LM Studio', baseUrl: 'http://localhost:1234/v1', defaultModel: 'google/gemma-4-e4b' },
  ollama: { label: 'Ollama', baseUrl: 'http://localhost:11434/v1', defaultModel: 'kimi-k3.1-pro:cloud' },
  llamacpp: { label: 'llama.cpp', baseUrl: 'http://localhost:8080/v1', defaultModel: 'google/gemma-4-e4b' },
  jan: { label: 'Jan', baseUrl: 'http://localhost:1337/v1', defaultModel: 'google/gemma-4-e4b' }
};

const PK_NVIDIA_WORKER_SNIPPET = `export default {
  async fetch(request) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    };
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    const url = new URL(request.url);
    const path = url.pathname.startsWith('/v1/') ? url.pathname : '/v1' + (url.pathname.startsWith('/') ? url.pathname : '/' + url.pathname);
    const upstream = await fetch('https://integrate.api.nvidia.com' + path + url.search, {
      method: request.method,
      headers: {
        'Content-Type': request.headers.get('Content-Type') || 'application/json',
        ...(request.headers.get('Authorization') ? { 'Authorization': request.headers.get('Authorization') } : {})
      },
      body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body
    });
    const outHeaders = new Headers(upstream.headers);
    Object.entries(cors).forEach(([k, v]) => outHeaders.set(k, v));
    return new Response(upstream.body, { status: upstream.status, headers: outHeaders });
  }
};`;

let pkGroqHistory = []; // { role: 'user'|'assistant', content: string, eventPayloads?: [], savedMemories?: [], isError?: boolean, provider?: string, retryPrompt?: string }
let pkGroqContextScope = 'note'; // 'note' | 'vault' | 'general'
let pkGroqAbortController = null;
let pkGroqIsStreaming = false;
let pkGroqDrawerOpen = false;
let pkMemoryChatLoaded = false;

function updateAiMemoryBadge() {
  const lbl = document.getElementById('pkAiMemoryBtnLabel');
  if (!lbl) return;
  const count = window.PKMemory && typeof window.PKMemory.getCount === 'function' ? window.PKMemory.getCount() : 0;
  lbl.textContent = count > 0 ? `Memory (${count})` : 'Memory';
}

window.onPKMemoryReady = async function () {
  updateAiMemoryBadge();
  if (!pkMemoryChatLoaded && window.PKMemory && typeof window.PKMemory.loadChatHistory === 'function') {
    pkMemoryChatLoaded = true;
    const saved = await window.PKMemory.loadChatHistory(40);
    if (saved.length > 0 && pkGroqHistory.length === 0) {
      pkGroqHistory = saved;
      if (pkGroqDrawerOpen) renderGroqMessages();
    }
  }
};

// ============================================================================
// MULTI-PROVIDER CONFIG STORAGE (WITH AUTOMATIC LEGACY GROQ MIGRATION)
// ============================================================================
function makeAiKeyId() {
  return 'k_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
}

function maskAiKeyTail(key) {
  const k = String(key || '').trim();
  if (!k) return 'empty';
  if (k.length <= 6) return '••••';
  return '…' + k.slice(-4);
}

function normalizeProviderKeys(src) {
  const rawKeys = Array.isArray(src && src.keys) ? src.keys : [];
  const keys = rawKeys
    .filter(item => item && typeof item === 'object')
    .map((item, idx) => ({
      id: typeof item.id === 'string' && item.id.trim() ? item.id.trim() : `k_${idx + 1}`,
      label: typeof item.label === 'string' && item.label.trim() ? item.label.trim().slice(0, 24) : `Key ${idx + 1}`,
      key: typeof item.key === 'string' ? item.key.trim() : ''
    }));
  const legacyKey = typeof (src && src.apiKey) === 'string' ? src.apiKey.trim() : '';
  if (keys.length === 0) {
    keys.push({ id: 'k_1', label: 'Key 1', key: legacyKey });
  }
  let activeKeyId = typeof (src && src.activeKeyId) === 'string' ? src.activeKeyId : keys[0].id;
  let active = keys.find(k => k.id === activeKeyId) || keys[0];
  activeKeyId = active.id;
  return { keys, activeKeyId, apiKey: active.key };
}

function syncActiveKeySlot(provData, newKeyValue = null) {
  if (!provData) return;
  if (!Array.isArray(provData.keys) || provData.keys.length === 0) {
    provData.keys = [{ id: 'k_1', label: 'Key 1', key: provData.apiKey || '' }];
    provData.activeKeyId = 'k_1';
  }
  let slot = provData.keys.find(k => k.id === provData.activeKeyId) || provData.keys[0];
  provData.activeKeyId = slot.id;
  if (newKeyValue !== null) {
    slot.key = String(newKeyValue).trim();
  }
  provData.apiKey = slot.key;
}

function getDefaultAiConfig() {
  const mk = (pid) => ({
    apiKey: '',
    activeKeyId: 'k_1',
    keys: [{ id: 'k_1', label: 'Key 1', key: '' }],
    baseUrl: PK_AI_PROVIDERS[pid].defaultBaseUrl,
    model: PK_AI_PROVIDERS[pid].defaultModel,
    discoveredModels: []
  });
  return {
    provider: 'groq',
    gemini: mk('gemini'),
    openrouter: mk('openrouter'),
    groq: mk('groq'),
    nvidia: mk('nvidia'),
    local: mk('local')
  };
}

const PK_RETIRED_GROQ_MODELS = new Set([
  'mixtral-8x7b-32768',
  'llama2-70b-4096',
  'gemma-7b-it',
  'openai/gpt-oss-120b',
  'openai/gpt-oss-20b',
  'qwen/qwen3.8-27b',
  'allam-2-7b'
]);

const PK_RETIRED_GEMINI_MODELS = new Set([
  'gemini-1.0-pro',
  'gemini-1.0-pro-vision',
  'gemini-3-flash-preview',
  'gemini-3.8-flash',
  'gemini-3.5-flash-lite',
  'gemini-4-hydrogen'
]);

const PK_RETIRED_NVIDIA_MODELS = new Set([
  'meta/llama-3.3-70b-instruct',
  'deepseek-ai/deepseek-r1',
  'mistralai/mistral-large-2-instruct',
  'nvidia/llama-3.1-nemotron-70b-instruct',
  'google/gemma-2-27b-it',
  'qwen/qwen2.5-72b-instruct'
]);

function loadAiConfig() {
  const def = getDefaultAiConfig();
  try {
    const rawV2 = localStorage.getItem(PK_AI_CONFIG_KEY);
    if (rawV2) {
      const parsed = JSON.parse(rawV2);
      const provider = PK_AI_PROVIDERS[parsed.provider] ? parsed.provider : 'groq';
      ['gemini', 'openrouter', 'groq', 'nvidia', 'local'].forEach(pid => {
        const src = parsed[pid] || {};
        const normKeys = normalizeProviderKeys(src);
        def[pid] = {
          apiKey: normKeys.apiKey,
          activeKeyId: normKeys.activeKeyId,
          keys: normKeys.keys,
          baseUrl: typeof src.baseUrl === 'string' && src.baseUrl.trim() ? src.baseUrl.trim() : PK_AI_PROVIDERS[pid].defaultBaseUrl,
          model: typeof src.model === 'string' && src.model.trim() ? src.model.trim() : PK_AI_PROVIDERS[pid].defaultModel,
          discoveredModels: Array.isArray(src.discoveredModels) ? src.discoveredModels.filter(x => typeof x === 'string' && x.trim()) : []
        };
      });
      def.provider = provider;
      let migrated = false;
      // Upgrade retired Groq presets automatically to live active default
      if (PK_RETIRED_GROQ_MODELS.has(def.groq.model)) {
        def.groq.model = PK_AI_PROVIDERS.groq.defaultModel;
        migrated = true;
      }
      // Upgrade retired Gemini presets automatically to live active default
      if (PK_RETIRED_GEMINI_MODELS.has(def.gemini.model)) {
        def.gemini.model = PK_AI_PROVIDERS.gemini.defaultModel;
        migrated = true;
      }
      // Upgrade retired NVIDIA models automatically
      if (PK_RETIRED_NVIDIA_MODELS.has(def.nvidia.model) || !def.nvidia.model) {
        def.nvidia.model = PK_AI_PROVIDERS.nvidia.defaultModel;
        migrated = true;
      }
      // Clean up any accidental github.io or invalid host URLs that cause HTTP 405
      if (/github\.io/i.test(def.nvidia.baseUrl) || !def.nvidia.baseUrl) {
        def.nvidia.baseUrl = PK_AI_PROVIDERS.nvidia.defaultBaseUrl;
        migrated = true;
      }
      // Upgrade OpenRouter legacy preset to openrouter/auto
      if (def.openrouter.model === 'openrouter/free' || !def.openrouter.model) {
        def.openrouter.model = PK_AI_PROVIDERS.openrouter.defaultModel;
        migrated = true;
      }
      // Upgrade untouched v2.3.0 generic local default (llama3.2) to user's installed LM Studio library
      if (def.local.baseUrl === 'http://localhost:11434/v1' && def.local.model === 'llama3.2' && def.local.discoveredModels.length === 0) {
        def.local.baseUrl = PK_AI_PROVIDERS.local.defaultBaseUrl;
        def.local.model = PK_AI_PROVIDERS.local.defaultModel;
        migrated = true;
      }
      if (migrated) saveAiConfig(def);
      return def;
    }
    // Migrate legacy Groq v1 key seamlessly
    const rawV1 = localStorage.getItem(PK_GROQ_LEGACY_CONFIG_KEY);
    if (rawV1) {
      const legacy = JSON.parse(rawV1);
      if (typeof legacy.apiKey === 'string') def.groq.apiKey = legacy.apiKey.trim();
      if (typeof legacy.model === 'string' && legacy.model.trim() && !PK_RETIRED_GROQ_MODELS.has(legacy.model.trim())) {
        def.groq.model = legacy.model.trim();
      }
      saveAiConfig(def);
    }
  } catch (_) {}
  return def;
}

function saveAiConfig(cfg) {
  try {
    localStorage.setItem(PK_AI_CONFIG_KEY, JSON.stringify(cfg));
  } catch (_) {}
}

function getActiveProviderSpec(cfg) {
  const pid = PK_AI_PROVIDERS[cfg.provider] ? cfg.provider : 'groq';
  return {
    spec: PK_AI_PROVIDERS[pid],
    data: cfg[pid] || getDefaultAiConfig()[pid]
  };
}

function isProviderReady(pid, data) {
  const spec = PK_AI_PROVIDERS[pid];
  if (!spec || !data) return false;
  if (spec.requiresKey) return !!data.apiKey;
  return !!(data.baseUrl && data.baseUrl.trim());
}

// ============================================================================
// ENDPOINT NORMALIZER (GROQ · NVIDIA / WORKER PROXY · OLLAMA / LM STUDIO)
// ============================================================================
function buildProviderEndpoints(pid, rawBaseUrl) {
  const spec = PK_AI_PROVIDERS[pid] || PK_AI_PROVIDERS.groq;
  let url = (rawBaseUrl || spec.defaultBaseUrl || '').trim().replace(/\/+$/, '');
  if (!url) url = spec.defaultBaseUrl;
  if (!/^https?:\/\//i.test(url)) {
    url = (pid === 'local' ? 'http://' : 'https://') + url;
  }

  let origin = '';
  let pathname = '';
  try {
    const u = new URL(url);
    origin = u.origin;
    pathname = u.pathname.replace(/\/+$/, '');
  } catch (_) {}

  // Case 1: User pasted a full .../chat/completions URL
  if (/\/chat\/completions$/i.test(url)) {
    const base = url.replace(/\/chat\/completions$/i, '');
    return {
      baseUrl: base,
      chatUrl: url,
      modelsUrl: `${base}/models`,
      ollamaTagsUrl: origin ? `${origin}/api/tags` : ''
    };
  }

  // Case 2: Bare local server host:port (e.g. http://localhost:11434) -> auto-append /v1
  if (pid === 'local' && (!pathname || pathname === '/')) {
    const base = `${url}/v1`;
    return {
      baseUrl: base,
      chatUrl: `${base}/chat/completions`,
      modelsUrl: `${base}/models`,
      ollamaTagsUrl: origin ? `${origin}/api/tags` : ''
    };
  }

  // Case 3: Standard base URL (https://api.groq.com/openai/v1, https://integrate.api.nvidia.com/v1, custom worker, http://localhost:1234/v1)
  return {
    baseUrl: url,
    chatUrl: `${url}/chat/completions`,
    modelsUrl: `${url}/models`,
    ollamaTagsUrl: origin ? `${origin}/api/tags` : ''
  };
}

function buildAuthHeaders(apiKey) {
  const headers = { 'Content-Type': 'application/json' };
  if (apiKey && apiKey.trim()) {
    headers['Authorization'] = `Bearer ${apiKey.trim()}`;
  }
  return headers;
}

// ============================================================================
// SETTINGS UI SYNC & PROVIDER SWITCHING
// ============================================================================
function captureCurrentProviderInputsIntoConfig(cfg) {
  const pid = cfg.provider;
  const keyInput = document.getElementById('pkGroqApiKeyInput');
  const baseInput = document.getElementById('pkAiBaseUrlInput');
  const modelSel = document.getElementById('pkGroqModelSelect');
  const customInp = document.getElementById('pkGroqCustomModelInput');

  if (keyInput) syncActiveKeySlot(cfg[pid], keyInput.value.trim());
  if (pid !== 'groq' && pid !== 'gemini' && pid !== 'openrouter' && baseInput && baseInput.value.trim()) {
    cfg[pid].baseUrl = baseInput.value.trim();
  }
  if (modelSel) {
    const selVal = modelSel.value;
    if (selVal === 'custom') {
      if (customInp && customInp.value.trim()) cfg[pid].model = customInp.value.trim();
    } else if (selVal) {
      cfg[pid].model = selVal;
    }
  }
  return cfg;
}

function populateKeySlotsForProvider(pid, data) {
  const row = document.getElementById('pkAiKeySlotsRow');
  const sel = document.getElementById('pkAiKeySlotSelect');
  if (!sel) return;
  if (row) row.classList.toggle('hidden', pid === 'local');
  const keys = Array.isArray(data.keys) && data.keys.length > 0
    ? data.keys
    : [{ id: 'k_1', label: 'Key 1', key: data.apiKey || '' }];
  sel.innerHTML = keys.map((slot, idx) => {
    const lbl = slot.label || `Key ${idx + 1}`;
    const tail = maskAiKeyTail(slot.key);
    return `<option value="${escapeHtml(slot.id)}">${escapeHtml(lbl)} (${escapeHtml(tail)})</option>`;
  }).join('');
  sel.value = data.activeKeyId || keys[0].id;
}

function syncQuickComposerSwitchers(cfg) {
  const quickKeySel = document.getElementById('pkAiQuickKeySelect');
  const quickModelSel = document.getElementById('pkAiQuickModelSelect');
  const { spec, data } = getActiveProviderSpec(cfg);

  if (quickKeySel) {
    const opts = [];
    const providerOrder = ['gemini', 'openrouter', 'groq', 'nvidia', 'local'];
    providerOrder.forEach(pid => {
      const pSpec = PK_AI_PROVIDERS[pid];
      const pData = cfg[pid];
      if (!pSpec || !pData) return;
      if (pid === 'local') {
        opts.push({ val: 'local::k_1', label: 'Local · Offline' });
        return;
      }
      const slots = Array.isArray(pData.keys) ? pData.keys : [];
      const filled = slots.filter(s => s && s.key);
      if (filled.length > 0) {
        filled.forEach((slot, idx) => {
          const kName = slot.label || `Key ${idx + 1}`;
          const suffix = filled.length > 1 ? ` · ${kName} (${maskAiKeyTail(slot.key)})` : ` · ${kName}`;
          opts.push({ val: `${pid}::${slot.id}`, label: `${pSpec.shortName}${suffix}` });
        });
      } else if (pid === cfg.provider) {
        const curSlot = slots.find(s => s.id === pData.activeKeyId) || slots[0] || { id: 'k_1', label: 'Key 1' };
        opts.push({ val: `${pid}::${curSlot.id}`, label: `${pSpec.shortName} · No Key` });
      }
    });
    // Also offer quick jump to unconfigured free providers at the bottom
    ['gemini', 'openrouter', 'groq', 'nvidia'].forEach(pid => {
      if (pid === cfg.provider) return;
      const pData = cfg[pid];
      const hasAny = pData && Array.isArray(pData.keys) && pData.keys.some(s => s && s.key);
      if (!hasAny) {
        opts.push({ val: `${pid}::setup`, label: `+ Setup ${PK_AI_PROVIDERS[pid].shortName}` });
      }
    });
    quickKeySel.innerHTML = opts.map(o => `<option value="${escapeHtml(o.val)}">${escapeHtml(o.label)}</option>`).join('');
    const currentVal = `${cfg.provider}::${data.activeKeyId || 'k_1'}`;
    if (opts.some(o => o.val === currentVal)) {
      quickKeySel.value = currentVal;
    }
  }

  if (quickModelSel) {
    const seen = new Set();
    const mOpts = [];
    if (spec.id === 'local') {
      (data.discoveredModels || []).forEach(id => {
        if (!seen.has(id)) { seen.add(id); mOpts.push({ id, label: id.split('/').pop() }); }
      });
      spec.models.forEach(m => {
        if (!seen.has(m.id)) { seen.add(m.id); mOpts.push({ id: m.id, label: m.label.replace(/\s*\([^)]*\)$/, '') }); }
      });
    } else {
      spec.models.forEach(m => {
        if (!seen.has(m.id)) { seen.add(m.id); mOpts.push({ id: m.id, label: m.label.replace(/\s*\([^)]*\)$/, '') }); }
      });
      (data.discoveredModels || []).forEach(id => {
        if (!seen.has(id)) { seen.add(id); mOpts.push({ id, label: id.split('/').pop() }); }
      });
    }
    if (data.model && !seen.has(data.model)) {
      mOpts.unshift({ id: data.model, label: data.model.split('/').pop() });
    }
    quickModelSel.innerHTML = mOpts.map(o => `<option value="${escapeHtml(o.id)}">${escapeHtml(o.label)}</option>`).join('');
    if (data.model) quickModelSel.value = data.model;
  }
}

function selectAiKeySlot(slotId) {
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);
  // Save whatever is currently typed into the previous slot first
  const keyInput = document.getElementById('pkGroqApiKeyInput');
  if (keyInput) syncActiveKeySlot(data, keyInput.value.trim());

  const target = (data.keys || []).find(k => k.id === slotId);
  if (!target) return;
  data.activeKeyId = target.id;
  data.apiKey = target.key;
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  if (typeof showToast === 'function') {
    showToast(`Switched ${spec.shortName} to ${target.label} (${maskAiKeyTail(target.key)})`);
  }
}

function addAiKeySlot() {
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);
  const keyInput = document.getElementById('pkGroqApiKeyInput');
  if (keyInput) syncActiveKeySlot(data, keyInput.value.trim());

  if (!Array.isArray(data.keys)) data.keys = [];
  const nextNum = data.keys.length + 1;
  const newSlot = { id: makeAiKeyId(), label: `Key ${nextNum}`, key: '' };
  data.keys.push(newSlot);
  data.activeKeyId = newSlot.id;
  data.apiKey = '';
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  const inp = document.getElementById('pkGroqApiKeyInput');
  if (inp) {
    inp.value = '';
    inp.focus();
  }
  if (typeof showToast === 'function') {
    showToast(`Added ${spec.shortName} ${newSlot.label} — paste your key now`);
  }
}

function renameAiKeySlot() {
  const cfg = loadAiConfig();
  const { data } = getActiveProviderSpec(cfg);
  const slot = (data.keys || []).find(k => k.id === data.activeKeyId);
  if (!slot) return;
  const nextName = window.prompt('Name this API key (e.g. Personal, Backup, Account 2):', slot.label || 'Key 1');
  if (nextName === null) return;
  const clean = String(nextName).trim().slice(0, 24);
  if (!clean) return;
  slot.label = clean;
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  if (typeof showToast === 'function') showToast(`Renamed key to "${clean}"`);
}

function handleQuickAiKeySwitch(val) {
  if (!val) return;
  const [pid, slotId] = String(val).split('::');
  if (!PK_AI_PROVIDERS[pid]) return;
  const cfg = loadAiConfig();
  cfg.provider = pid;
  if (slotId === 'setup') {
    saveAiConfig(cfg);
    syncGroqHeaderAndSettingsUI();
    const panel = document.getElementById('pkGroqSettingsPanel');
    if (panel) panel.classList.remove('hidden');
    const inp = document.getElementById('pkGroqApiKeyInput');
    if (inp) setTimeout(() => inp.focus(), 60);
    return;
  }
  const pData = cfg[pid];
  if (pData && Array.isArray(pData.keys)) {
    const slot = pData.keys.find(k => k.id === slotId);
    if (slot) {
      pData.activeKeyId = slot.id;
      pData.apiKey = slot.key;
    }
  }
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  renderGroqMessages();
  const activeSlot = (cfg[pid].keys || []).find(k => k.id === cfg[pid].activeKeyId);
  const label = pid === 'local' ? 'Local Model' : `${PK_AI_PROVIDERS[pid].shortName} · ${(activeSlot && activeSlot.label) || 'Key 1'}`;
  if (typeof showToast === 'function') showToast(`Switched AI to ${label}`);
}

function handleQuickAiModelSwitch(modelId) {
  if (!modelId) return;
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);
  data.model = modelId;
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  if (typeof showToast === 'function') {
    showToast(`${spec.shortName} model: ${modelId.split('/').pop()}`);
  }
}

function populateModelSelectForProvider(pid, data) {
  const modelSel = document.getElementById('pkGroqModelSelect');
  const customInp = document.getElementById('pkGroqCustomModelInput');
  if (!modelSel) return;

  const spec = PK_AI_PROVIDERS[pid] || PK_AI_PROVIDERS.groq;
  const seen = new Set();
  const options = [];

  if (pid === 'local') {
    // Local: put live-detected running models first, then ranked library presets
    (data.discoveredModels || []).forEach(id => {
      if (!seen.has(id)) {
        seen.add(id);
        options.push({ id, label: `${id} (Running)` });
      }
    });
    spec.models.forEach(m => {
      if (!seen.has(m.id)) {
        seen.add(m.id);
        options.push(m);
      }
    });
  } else {
    // Cloud providers: always show live-verified ranked #1..#N presets first, then any extra live models
    spec.models.forEach(m => {
      if (!seen.has(m.id)) {
        seen.add(m.id);
        options.push(m);
      }
    });
    (data.discoveredModels || []).forEach(id => {
      if (!seen.has(id)) {
        seen.add(id);
        options.push({ id, label: `${id} (Live)` });
      }
    });
  }

  modelSel.innerHTML = options.map(o => `<option value="${escapeHtml(o.id)}">${escapeHtml(o.label)}</option>`).join('') +
    '<option value="custom">Custom Model ID...</option>';

  if (seen.has(data.model)) {
    modelSel.value = data.model;
    if (customInp) customInp.classList.add('hidden');
  } else {
    modelSel.value = 'custom';
    if (customInp) {
      customInp.classList.remove('hidden');
      customInp.value = data.model || '';
      customInp.placeholder = pid === 'local'
        ? 'e.g. google/gemma-4-e4b, qwen/qwen3.5-9b...'
        : pid === 'nvidia'
          ? 'e.g. nvidia/nemotron-3.5-lightning-30b-a3b'
          : pid === 'openrouter'
            ? 'e.g. openrouter/free, google/gemma-4-31b-it:free'
            : pid === 'gemini'
              ? 'e.g. gemini-3-flash-preview, gemini-3.5-flash-lite'
              : 'e.g. openai/gpt-oss-120b';
    }
  }
}

function syncGroqHeaderAndSettingsUI() {
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);
  const ready = isProviderReady(spec.id, data);

  // Provider tabs highlight
  const activeTabCls = 'px-1 py-1.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer truncate';
  const idleTabCls = 'px-1 py-1.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer truncate';
  const tabs = [
    ['gemini', 'pkAiProviderTabGemini'],
    ['openrouter', 'pkAiProviderTabOpenrouter'],
    ['groq', 'pkAiProviderTabGroq'],
    ['nvidia', 'pkAiProviderTabNvidia'],
    ['local', 'pkAiProviderTabLocal']
  ];
  tabs.forEach(([id, elId]) => {
    const el = document.getElementById(elId);
    if (el) el.className = cfg.provider === id ? activeTabCls : idleTabCls;
  });

  // Header subtitle & button badge
  const sub = document.getElementById('pkGroqHeaderSub');
  const keyBtnLabel = document.getElementById('pkGroqKeyBtnLabel');
  const shortModel = (data.model || spec.defaultModel).split('/').pop();
  const filledKeys = (data.keys || []).filter(k => k && k.key);
  const activeSlot = (data.keys || []).find(k => k.id === data.activeKeyId);
  const keySuffix = filledKeys.length > 1 && activeSlot ? ` · ${activeSlot.label}` : '';
  if (sub) {
    if (spec.id === 'local') {
      const shortHost = (data.baseUrl || spec.defaultBaseUrl).replace(/^https?:\/\//i, '').replace(/\/v1.*$/i, '');
      sub.textContent = `Local · ${shortModel} · ${shortHost}`;
    } else if (ready) {
      sub.textContent = `${spec.shortName}${keySuffix} · ${shortModel} · Ready`;
    } else {
      sub.textContent = `${spec.name} · Add your API key to start`;
    }
  }
  if (keyBtnLabel) {
    if (spec.id === 'local') keyBtnLabel.textContent = 'Local';
    else keyBtnLabel.textContent = ready ? (filledKeys.length > 1 ? `${spec.shortName} (${filledKeys.length})` : spec.shortName) : 'Add Key';
  }

  // Endpoint section (shown for NVIDIA & Local, hidden for direct-CORS Gemini / OpenRouter / Groq)
  const endpointSec = document.getElementById('pkAiEndpointSection');
  const baseLabel = document.getElementById('pkAiBaseUrlLabel');
  const baseInput = document.getElementById('pkAiBaseUrlInput');
  const localPresets = document.getElementById('pkAiLocalPresetsRow');
  const nvidiaHint = document.getElementById('pkAiNvidiaCorsHint');
  const localHint = document.getElementById('pkAiLocalCorsHint');

  if (endpointSec) endpointSec.classList.toggle('hidden', spec.id === 'groq' || spec.id === 'gemini' || spec.id === 'openrouter');
  if (localPresets) localPresets.classList.toggle('hidden', spec.id !== 'local');
  if (nvidiaHint) nvidiaHint.classList.toggle('hidden', spec.id !== 'nvidia');
  if (localHint) localHint.classList.toggle('hidden', spec.id !== 'local');
  if (baseLabel) {
    baseLabel.textContent = spec.id === 'nvidia'
      ? 'NVIDIA Endpoint / Proxy URL'
      : 'Local Server URL (OpenAI-Compatible)';
  }
  if (baseInput) {
    baseInput.value = data.baseUrl || spec.defaultBaseUrl;
    baseInput.placeholder = spec.defaultBaseUrl;
  }

  // API Key row
  const keyLabel = document.getElementById('pkAiApiKeyLabel');
  const keyLink = document.getElementById('pkAiGetKeyLink');
  const keyInput = document.getElementById('pkGroqApiKeyInput');
  const clearBtn = document.getElementById('pkAiClearKeyBtn');

  if (keyLabel) keyLabel.textContent = spec.keyLabel;
  if (keyLink) {
    if (spec.keyUrl) {
      keyLink.href = spec.keyUrl;
      keyLink.textContent = spec.keyLinkText;
      keyLink.classList.remove('hidden');
    } else {
      keyLink.classList.add('hidden');
    }
  }
  if (keyInput) {
    keyInput.value = data.apiKey || '';
    keyInput.placeholder = spec.keyPlaceholder;
  }
  if (clearBtn) {
    clearBtn.textContent = spec.id === 'local' ? 'Clear Token' : 'Remove Key';
  }

  // Model selector + Fetch / Scan button
  const modelLabel = document.getElementById('pkAiModelLabel');
  const fetchBtn = document.getElementById('pkAiFetchModelsBtn');
  if (modelLabel) modelLabel.textContent = `${spec.shortName} Model`;
  if (fetchBtn) fetchBtn.textContent = spec.id === 'local' ? 'Scan local models' : 'Fetch live models';

  populateKeySlotsForProvider(spec.id, data);
  populateModelSelectForProvider(spec.id, data);
  syncQuickComposerSwitchers(cfg);
  updateGroqScopeButtons();
}

function selectAiProvider(pid) {
  if (!PK_AI_PROVIDERS[pid]) return;
  const cfg = loadAiConfig();
  captureCurrentProviderInputsIntoConfig(cfg);
  cfg.provider = pid;
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  renderGroqMessages();
  if (typeof showToast === 'function') {
    showToast(`Switched AI provider to ${PK_AI_PROVIDERS[pid].name}`);
  }
}

function applyLocalServerPreset(presetId) {
  const preset = PK_LOCAL_SERVER_PRESETS[presetId];
  if (!preset) return;
  const baseInput = document.getElementById('pkAiBaseUrlInput');
  if (baseInput) baseInput.value = preset.baseUrl;
  const cfg = loadAiConfig();
  cfg.provider = 'local';
  cfg.local.baseUrl = preset.baseUrl;
  if (presetId === 'ollama' && cfg.local.model !== 'kimi-k3.1-pro:cloud') {
    cfg.local.model = preset.defaultModel;
  } else if (presetId === 'lmstudio' && cfg.local.model === 'kimi-k3.1-pro:cloud') {
    cfg.local.model = preset.defaultModel;
  }
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  if (typeof showToast === 'function') {
    showToast(`${preset.label} set (${preset.baseUrl}) — tap Scan local models`);
  }
}

function resetAiProviderEndpoint() {
  const cfg = loadAiConfig();
  const { spec } = getActiveProviderSpec(cfg);
  cfg[spec.id].baseUrl = spec.defaultBaseUrl;
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  if (typeof showToast === 'function') {
    showToast(`Reset ${spec.shortName} endpoint to default`);
  }
}

function copyNvidiaProxySnippet() {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(PK_NVIDIA_WORKER_SNIPPET).then(() => {
      if (typeof showToast === 'function') {
        showToast('Copied Cloudflare Worker code! Deploy on dash.cloudflare.com -> Workers and paste its URL above.');
      }
    }).catch(() => {
      if (typeof showToast === 'function') showToast('Could not access clipboard', 'ochre');
    });
  }
}

let pkServerLanUrl = '';

async function detectServerLanUrl() {
  const origin = (typeof window !== 'undefined' && window.location && window.location.protocol.startsWith('http'))
    ? window.location.origin
    : 'http://127.0.0.1:4000';
  try {
    const res = await fetch(`${origin}/health`, { signal: AbortSignal.timeout(1500) });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.lanIps) && data.lanIps.length > 0) {
        pkServerLanUrl = `http://${data.lanIps[0].ip}:${data.port || 4000}`;
        const phoneBadge = document.getElementById('pkAiServerPhoneBadge');
        if (phoneBadge) {
          phoneBadge.textContent = pkServerLanUrl;
        }
        const container = document.getElementById('pkAiServerPhoneContainer');
        if (container) container.classList.remove('hidden');
      }
    }
  } catch (_) {}
}

function copyServerPhoneUrl() {
  const url = pkServerLanUrl || (window.location && window.location.protocol.startsWith('http') ? window.location.origin : 'http://192.168.1.10:4000');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      if (typeof showToast === 'function') {
        showToast(`Copied Phone URL: ${url} — open in Safari or Chrome on your phone!`);
      }
    });
  }
}

function useNvidiaLocalProxy() {
  const cfg = loadAiConfig();
  const isHttps = typeof window !== 'undefined' && window.location && window.location.protocol === 'https:';
  cfg.nvidia.baseUrl = 'http://127.0.0.1:4000/v1';
  saveAiConfig(cfg);
  const input = document.getElementById('pkAiBaseUrlInput');
  if (input) input.value = cfg.nvidia.baseUrl;
  if (isHttps) {
    if (typeof showToast === 'function') {
      showToast('Set to local proxy. On HTTPS (GitHub Pages), browsers block local HTTP. Use a Cloudflare Worker or run PK Note locally via PK Note.bat.', 'ochre');
    }
  } else if (typeof showToast === 'function') {
    showToast(`Set NVIDIA endpoint to ${cfg.nvidia.baseUrl}`);
  }
}

function switchToGroqProvider() {
  const cfg = loadAiConfig();
  cfg.provider = 'groq';
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  if (typeof showToast === 'function') {
    showToast('Switched to Groq! 100% serverless, runs directly on phone with 0 servers.');
  }
}

function switchToGeminiProvider() {
  const cfg = loadAiConfig();
  cfg.provider = 'gemini';
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  if (typeof showToast === 'function') {
    showToast('Switched to Gemini AI! 100% serverless, runs directly on phone with 0 servers.');
  }
}

function updateGroqScopeButtons() {
  const scopes = [
    ['note', 'pkGroqScopeNote'],
    ['vault', 'pkGroqScopeVault'],
    ['general', 'pkGroqScopeGeneral']
  ];
  const activeCls = 'px-2 py-0.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer';
  const idleCls = 'px-2 py-0.5 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer';
  scopes.forEach(([s, id]) => {
    const btn = document.getElementById(id);
    if (btn) btn.className = pkGroqContextScope === s ? activeCls : idleCls;
  });
}

function setGroqContextScope(scope) {
  pkGroqContextScope = scope === 'vault' || scope === 'general' ? scope : 'note';
  updateGroqScopeButtons();
  if (typeof showToast === 'function') {
    const label = pkGroqContextScope === 'note' ? 'Active Note' : pkGroqContextScope === 'vault' ? 'Vault & Calendar' : 'General Chat';
    showToast(`AI context: ${label}`);
  }
}

let pkAiTargetSelection = '';
let pkAiTargetBlockId = null;

function setAiTarget(selectionText = '', blockId = null) {
  pkAiTargetSelection = (selectionText || '').trim();
  pkAiTargetBlockId = blockId || null;
  updateAiTargetBadgeUI();
}

function clearAiTarget() {
  pkAiTargetSelection = '';
  pkAiTargetBlockId = null;
  updateAiTargetBadgeUI();
}

function updateAiTargetBadgeUI() {
  const badge = document.getElementById('pkAiTargetBadge');
  const label = document.getElementById('pkAiTargetLabel');
  const input = document.getElementById('pkGroqPromptInput');
  if (!badge) return;

  if (pkAiTargetSelection) {
    badge.classList.remove('hidden');
    if (label) {
      const preview = pkAiTargetSelection.length > 34
        ? pkAiTargetSelection.slice(0, 34) + '…'
        : pkAiTargetSelection;
      label.textContent = `Target selection: "${preview}"`;
    }
    if (input && !input.value) {
      input.placeholder = `How to replace or fix "${pkAiTargetSelection.slice(0, 22)}..."?`;
    }
  } else if (pkAiTargetBlockId) {
    const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
    const blk = note && (note.blocks || []).find(b => b.id === pkAiTargetBlockId);
    if (blk && blk.content && blk.content.trim()) {
      badge.classList.remove('hidden');
      const preview = blk.content.length > 30 ? blk.content.slice(0, 30) + '…' : blk.content;
      if (label) label.textContent = `Focused block: "${preview}"`;
      if (input && !input.value) {
        input.placeholder = 'How should AI edit or replace this block?';
      }
    } else {
      badge.classList.add('hidden');
      if (input && !input.value) {
        input.placeholder = 'Ask about your note, draft text, create flashcards, or plan your schedule...';
      }
    }
  } else {
    badge.classList.add('hidden');
    if (input && !input.value) {
      input.placeholder = 'Ask about your note, draft text, create flashcards, or plan your schedule...';
    }
  }
}

function openGroqAssistant(autoShowSettings = false) {
  if (typeof closeSpecialStudio === 'function' && typeof pkSpecialDrawerOpen !== 'undefined' && pkSpecialDrawerOpen) {
    closeSpecialStudio();
  }
  const currentSel = typeof getReadableSelectedText === 'function' ? getReadableSelectedText(true) : '';
  if (currentSel && !pkAiTargetSelection) {
    setAiTarget(currentSel, typeof activeEditingBlockId !== 'undefined' ? activeEditingBlockId : null);
  } else if (!currentSel && typeof activeEditingBlockId !== 'undefined' && activeEditingBlockId && !pkAiTargetBlockId) {
    const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
    const blk = note && (note.blocks || []).find(b => b.id === activeEditingBlockId);
    if (blk && blk.content && blk.content.trim()) {
      setAiTarget('', activeEditingBlockId);
    }
  } else {
    updateAiTargetBadgeUI();
  }
  syncGroqHeaderAndSettingsUI();
  updateAiMemoryBadge();
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);
  const ready = isProviderReady(spec.id, data);
  const settingsPanel = document.getElementById('pkGroqSettingsPanel');
  const memPanel = document.getElementById('pkAiMemoryPanel');
  if (memPanel) memPanel.classList.add('hidden');
  if (settingsPanel) {
    if (autoShowSettings || !ready) settingsPanel.classList.remove('hidden');
    else settingsPanel.classList.add('hidden');
  }
  if (!pkMemoryChatLoaded && window.PKMemory && typeof window.PKMemory.loadChatHistory === 'function') {
    pkMemoryChatLoaded = true;
    window.PKMemory.loadChatHistory(40).then(saved => {
      updateAiMemoryBadge();
      if (saved.length > 0 && pkGroqHistory.length === 0) {
        pkGroqHistory = saved;
        renderGroqMessages();
      }
    }).catch(() => {});
  }
  renderGroqMessages();
  const backdrop = document.getElementById('pkGroqAssistantBackdrop');
  const panel = document.getElementById('pkGroqAssistantPanel');
  if (backdrop && panel) {
    pkGroqDrawerOpen = true;
    backdrop.setAttribute('aria-hidden', 'false');
    backdrop.classList.remove('invisible', 'pointer-events-none');
    requestAnimationFrame(() => {
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
    });
  }
  if (ready && window.innerWidth >= 768) {
    const inp = document.getElementById('pkGroqPromptInput');
    if (inp) setTimeout(() => inp.focus(), 220);
  }
}

function closeGroqAssistant() {
  const backdrop = document.getElementById('pkGroqAssistantBackdrop');
  const panel = document.getElementById('pkGroqAssistantPanel');
  pkGroqDrawerOpen = false;
  if (panel) {
    panel.classList.remove('translate-x-0');
    panel.classList.add('translate-x-full');
  }
  if (backdrop) {
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      if (!pkGroqDrawerOpen) backdrop.classList.add('invisible');
    }, 240);
  }
}

function toggleGroqSettingsPanel() {
  const panel = document.getElementById('pkGroqSettingsPanel');
  const memPanel = document.getElementById('pkAiMemoryPanel');
  if (!panel) return;
  if (memPanel) memPanel.classList.add('hidden');
  syncGroqHeaderAndSettingsUI();
  panel.classList.toggle('hidden');
  if (!panel.classList.contains('hidden')) {
    detectServerLanUrl();
  }
}

let pkAiMemoryTab = 'memories'; // 'memories' | 'chats'

async function toggleAiMemoryPanel() {
  const memPanel = document.getElementById('pkAiMemoryPanel');
  const settingsPanel = document.getElementById('pkGroqSettingsPanel');
  if (!memPanel) return;
  if (settingsPanel) settingsPanel.classList.add('hidden');
  const willOpen = memPanel.classList.contains('hidden');
  memPanel.classList.toggle('hidden');
  if (willOpen) {
    await renderAiMemoryPanel();
  }
}

function setAiMemoryTab(tab) {
  pkAiMemoryTab = tab === 'chats' ? 'chats' : 'memories';
  renderAiMemoryPanel();
}

function toggleAiCrossChat() {
  if (!window.PKMemory) return;
  const cur = window.PKMemory.getSettings();
  const next = window.PKMemory.saveSettings({ crossChat: !cur.crossChat });
  renderAiMemoryPanel();
  if (typeof showToast === 'function') {
    showToast(next.crossChat ? 'Cross-Chat recall ON — AI remembers across all chats' : 'Cross-Chat recall OFF', next.crossChat ? undefined : 'ochre');
  }
}

async function openSavedAiChat(threadId) {
  if (!window.PKMemory || !threadId) return;
  abortGroqStream();
  pkGroqHistory = await window.PKMemory.openThread(threadId);
  const memPanel = document.getElementById('pkAiMemoryPanel');
  if (memPanel) memPanel.classList.add('hidden');
  renderGroqMessages();
  if (typeof showToast === 'function') showToast('Opened saved chat');
}

async function deleteSavedAiChat(threadId) {
  if (!window.PKMemory || !threadId) return;
  const wasActive = window.PKMemory.getActiveThreadId() === threadId;
  await window.PKMemory.deleteThread(threadId);
  if (wasActive) {
    pkGroqHistory = [];
    renderGroqMessages();
  }
  await renderAiMemoryPanel();
  if (typeof showToast === 'function') showToast('Deleted chat thread', 'ochre');
}

async function startFreshAiChatFromPanel() {
  await clearGroqConversation();
  const memPanel = document.getElementById('pkAiMemoryPanel');
  if (memPanel) memPanel.classList.add('hidden');
}

async function renderAiMemoryPanel() {
  const listEl = document.getElementById('pkAiMemoryList');
  const chatsListEl = document.getElementById('pkAiChatsList');
  const memView = document.getElementById('pkAiMemoriesView');
  const chatsView = document.getElementById('pkAiChatsView');
  const tabFacts = document.getElementById('pkAiMemTabFacts');
  const tabChats = document.getElementById('pkAiMemTabChats');
  const metaEl = document.getElementById('pkAiMemoryCountMeta');
  const autoBtn = document.getElementById('pkAiAutoMemoryToggle');
  const crossBtn = document.getElementById('pkAiCrossChatToggle');
  const searchEl = document.getElementById('pkAiMemorySearchInput');
  const chatsSearchEl = document.getElementById('pkAiChatsSearchInput');
  if (!window.PKMemory) return;

  const settings = window.PKMemory.getSettings();
  const onCls = 'px-2 py-1 rounded-[3px] bg-[var(--accent-vermilion-tint)] border border-[var(--accent-vermilion)]/40 font-mono text-[9.5px] font-semibold text-[var(--accent-vermilion)] cursor-pointer shrink-0';
  const offCls = 'px-2 py-1 rounded-[3px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] font-mono text-[9.5px] text-[var(--text-tertiary)] cursor-pointer shrink-0';
  if (autoBtn) {
    autoBtn.textContent = settings.autoSave ? 'Auto: ON' : 'Auto: OFF';
    autoBtn.className = settings.autoSave ? onCls : offCls;
  }
  if (crossBtn) {
    crossBtn.textContent = settings.crossChat ? 'Cross-Chat: ON' : 'Cross-Chat: OFF';
    crossBtn.className = settings.crossChat ? onCls : offCls;
  }

  const activeTabCls = 'px-2.5 py-1 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer';
  const idleTabCls = 'px-2.5 py-1 rounded-[3px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer';
  const memCount = window.PKMemory.getCount();
  const chatCount = window.PKMemory.getThreadCount ? window.PKMemory.getThreadCount() : 0;

  if (tabFacts) {
    tabFacts.className = pkAiMemoryTab === 'memories' ? activeTabCls : idleTabCls;
    tabFacts.textContent = memCount > 0 ? `Memories (${memCount})` : 'Memories';
  }
  if (tabChats) {
    tabChats.className = pkAiMemoryTab === 'chats' ? activeTabCls : idleTabCls;
    tabChats.textContent = chatCount > 0 ? `Chats (${chatCount})` : 'Chats';
  }
  if (memView) memView.classList.toggle('hidden', pkAiMemoryTab !== 'memories');
  if (chatsView) chatsView.classList.toggle('hidden', pkAiMemoryTab !== 'chats');

  updateAiMemoryBadge();
  if (metaEl) metaEl.textContent = `${memCount} memories · ${chatCount} chats`;

  if (pkAiMemoryTab === 'memories') {
    const query = searchEl ? searchEl.value.trim() : '';
    const items = await window.PKMemory.list(query);
    if (!listEl) return;
    if (items.length === 0) {
      listEl.innerHTML = `<div class="py-3 text-center font-mono text-[10px] text-[var(--text-tertiary)]">${
        query
          ? 'No memories matched that search.'
          : 'No saved facts yet. Tell the AI "remember that..." or add one above.'
      }</div>`;
      return;
    }
    listEl.innerHTML = items.map(m => {
      const pinCls = m.pinned
        ? 'px-1.5 py-0.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-mono text-[9px] font-semibold cursor-pointer'
        : 'px-1.5 py-0.5 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] font-mono text-[9px] cursor-pointer';
      return `
        <div class="px-2.5 py-2 rounded-[4px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] flex items-start justify-between gap-2">
          <div class="min-w-0 flex-1 space-y-1">
            <div class="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-[var(--text-tertiary)]">
              <span class="px-1.5 py-0.2 rounded-[2px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-[var(--accent-vermilion)]">${escapeHtml(m.category || 'fact')}</span>
              ${m.pinned ? '<span class="text-[var(--text-primary)] font-semibold">Pinned</span>' : ''}
            </div>
            <div class="text-[11.5px] text-[var(--text-primary)] leading-snug break-words">${escapeHtml(m.text)}</div>
          </div>
          <div class="flex items-center gap-1 shrink-0 pt-0.5">
            <button type="button" onclick="togglePinAiMemory('${escapeHtml(m.id)}')" class="${pinCls}">${m.pinned ? 'Pinned' : 'Pin'}</button>
            <button type="button" onclick="deleteAiMemory('${escapeHtml(m.id)}')" title="Forget" class="w-5 h-5 rounded-[3px] text-[var(--text-tertiary)] hover:text-rose-500 font-mono text-[10px] flex items-center justify-center cursor-pointer">✕</button>
          </div>
        </div>
      `;
    }).join('');
  } else {
    const query = chatsSearchEl ? chatsSearchEl.value.trim() : '';
    const threads = await window.PKMemory.listThreads(query);
    if (!chatsListEl) return;
    if (threads.length === 0) {
      chatsListEl.innerHTML = `<div class="py-3 text-center font-mono text-[10px] text-[var(--text-tertiary)]">${
        query
          ? 'No past chats matched that search.'
          : 'No saved chats yet. Every chat is archived automatically so AI remembers across chats.'
      }</div>`;
      return;
    }
    chatsListEl.innerHTML = threads.map(t => {
      const dateStr = new Date(t.updatedAt || Date.now()).toISOString().slice(0, 10);
      const borderCls = t.isActive
        ? 'border-[var(--accent-vermilion)]/60 bg-[var(--accent-vermilion-tint)]/40'
        : 'border-[var(--border-hairline)] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)]';
      return `
        <div class="px-2.5 py-2 rounded-[4px] border ${borderCls} flex items-start justify-between gap-2">
          <button type="button" onclick="openSavedAiChat('${escapeHtml(t.id)}')" class="min-w-0 flex-1 text-left space-y-0.5 cursor-pointer">
            <div class="flex items-center gap-1.5">
              <span class="font-sans text-[11.5px] font-semibold text-[var(--text-primary)] truncate">${escapeHtml(t.title || 'Chat')}</span>
              ${t.isActive ? '<span class="font-mono text-[8.5px] uppercase text-[var(--accent-vermilion)] font-semibold shrink-0">Active</span>' : ''}
            </div>
            <div class="font-mono text-[9px] text-[var(--text-tertiary)]">${t.messageCount || 0} msgs · ${dateStr}</div>
            ${t.matchSnippet ? `<div class="text-[10.5px] text-[var(--text-secondary)] line-clamp-2 leading-snug pt-0.5">${escapeHtml(t.matchSnippet)}</div>` : ''}
          </button>
          <button type="button" onclick="deleteSavedAiChat('${escapeHtml(t.id)}')" title="Delete chat" class="w-5 h-5 rounded-[3px] text-[var(--text-tertiary)] hover:text-rose-500 font-mono text-[10px] flex items-center justify-center cursor-pointer shrink-0">✕</button>
        </div>
      `;
    }).join('');
  }
}

function toggleAiAutoMemory() {
  if (!window.PKMemory) return;
  const cur = window.PKMemory.getSettings();
  const next = window.PKMemory.saveSettings({ autoSave: !cur.autoSave });
  renderAiMemoryPanel();
  if (typeof showToast === 'function') {
    showToast(next.autoSave ? 'Auto-memory ON — AI will remember key details' : 'Auto-memory OFF — manual memories only', next.autoSave ? undefined : 'ochre');
  }
}

async function addManualAiMemory() {
  if (!window.PKMemory) return;
  const inp = document.getElementById('pkAiMemoryAddInput');
  const catSel = document.getElementById('pkAiMemoryCategory');
  const text = inp ? inp.value.trim() : '';
  if (!text) return;
  const category = catSel ? catSel.value : 'fact';
  await window.PKMemory.add(text, { category, source: 'manual' });
  if (inp) inp.value = '';
  await renderAiMemoryPanel();
  if (typeof showToast === 'function') showToast('Saved to AI memory');
}

async function togglePinAiMemory(id) {
  if (!window.PKMemory) return;
  const updated = await window.PKMemory.togglePin(id);
  await renderAiMemoryPanel();
  if (updated && typeof showToast === 'function') {
    showToast(updated.pinned ? 'Memory pinned (always active)' : 'Memory unpinned');
  }
}

async function deleteAiMemory(id) {
  if (!window.PKMemory) return;
  await window.PKMemory.remove(id);
  await renderAiMemoryPanel();
  if (typeof showToast === 'function') showToast('Removed memory', 'ochre');
}

async function undoSavedAiMemory(msgIdx, memId) {
  if (window.PKMemory) await window.PKMemory.remove(memId);
  const msg = pkGroqHistory[msgIdx];
  if (msg && Array.isArray(msg.savedMemories)) {
    msg.savedMemories = msg.savedMemories.filter(m => m.id !== memId);
  }
  updateAiMemoryBadge();
  renderGroqMessages();
  if (window.PKMemory) window.PKMemory.saveChatHistory(pkGroqHistory);
  if (typeof showToast === 'function') showToast('Memory removed', 'ochre');
}

async function rememberGroqReply(msgIdx) {
  const msg = pkGroqHistory[msgIdx];
  if (!msg || !msg.content || msg.isError || !window.PKMemory) return;
  const clean = stripSpecialBlocksForDisplay(msg.content, false).replace(/\s+/g, ' ').slice(0, 320);
  if (!clean) return;
  const res = await window.PKMemory.add(clean, { category: 'fact', source: 'reply' });
  updateAiMemoryBadge();
  const memPanel = document.getElementById('pkAiMemoryPanel');
  if (memPanel && !memPanel.classList.contains('hidden')) await renderAiMemoryPanel();
  if (res && typeof showToast === 'function') showToast('Saved reply to AI memory');
}

async function exportAiMemories() {
  if (!window.PKMemory) return;
  const json = await window.PKMemory.exportJson();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(json).then(() => {
      if (typeof showToast === 'function') showToast('Copied AI memory JSON backup');
    }).catch(() => {});
  }
}

async function clearAllAiMemoriesUI() {
  if (!window.PKMemory) return;
  if (window.PKMemory.getCount() === 0) return;
  if (typeof window.confirm === 'function' && !window.confirm('Clear all saved AI memories on this device?')) return;
  await window.PKMemory.clearAll();
  await renderAiMemoryPanel();
  if (typeof showToast === 'function') showToast('All AI memories cleared', 'ochre');
}

function copyCurrentAiApiKey() {
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);
  const inp = document.getElementById('pkGroqApiKeyInput');
  const key = (inp && inp.value ? inp.value.trim() : (data && data.apiKey ? data.apiKey.trim() : ''));

  if (!key) {
    if (typeof showToast === 'function') showToast(`No ${spec.shortName} API key saved to copy`, 'ochre');
    return;
  }

  const btn = document.getElementById('pkAiCopyKeyBtn');
  const doFeedback = () => {
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('text-[var(--accent-vermilion)]');
      setTimeout(() => {
        btn.textContent = orig;
        btn.classList.remove('text-[var(--accent-vermilion)]');
      }, 1500);
    }
    if (typeof showToast === 'function') showToast(`Copied ${spec.shortName} API key (${maskAiKeyTail(key)}) to clipboard`);
  };

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(key).then(doFeedback).catch(() => {
      copyKeyFallbackText(key);
      doFeedback();
    });
  } else {
    copyKeyFallbackText(key);
    doFeedback();
  }
}

function toggleGroqKeyVisibility() {
  const inp = document.getElementById('pkGroqApiKeyInput');
  const btn = document.getElementById('pkGroqRevealBtn');
  if (!inp) return;
  // Keep type="text" always so OPPO / ColorOS Secure Keyboard never blocks clipboard paste!
  const isMasked = inp.classList.contains('pk-key-masked');
  inp.classList.toggle('pk-key-masked', !isMasked);
  if (btn) btn.textContent = isMasked ? 'Hide' : 'Show';
}

async function pasteAiApiKey() {
  const inp = document.getElementById('pkGroqApiKeyInput');
  if (!inp) return;
  if (navigator.clipboard && typeof navigator.clipboard.readText === 'function') {
    try {
      const raw = await navigator.clipboard.readText();
      const cleaned = String(raw || '').trim().replace(/\s+/g, '');
      if (!cleaned) {
        if (typeof showToast === 'function') showToast('Clipboard is empty — copy your API key first', 'ochre');
        return;
      }
      const cfg = loadAiConfig();
      captureCurrentProviderInputsIntoConfig(cfg);
      // Smart auto-switch provider if key prefix clearly identifies Gemini, OpenRouter, Groq, or NVIDIA
      const prevPid = cfg.provider;
      if (/^(?:AIza|AQ\.)/i.test(cleaned) && cfg.provider !== 'gemini') {
        cfg.provider = 'gemini';
      } else if (/^sk-or-/i.test(cleaned) && cfg.provider !== 'openrouter') {
        cfg.provider = 'openrouter';
      } else if (/^gsk_/i.test(cleaned) && cfg.provider !== 'groq') {
        cfg.provider = 'groq';
      } else if (/^nvapi-/i.test(cleaned) && cfg.provider !== 'nvidia') {
        cfg.provider = 'nvidia';
      }
      const targetProv = cfg[cfg.provider];
      const existingMatch = (targetProv.keys || []).find(s => s.key === cleaned);
      if (existingMatch) {
        targetProv.activeKeyId = existingMatch.id;
        targetProv.apiKey = existingMatch.key;
      } else if (prevPid !== cfg.provider && targetProv.apiKey && targetProv.apiKey !== cleaned) {
        // Don't overwrite Key 1 on auto-switch -> create Key 2 automatically!
        const nextNum = (targetProv.keys ? targetProv.keys.length : 1) + 1;
        const newSlot = { id: makeAiKeyId(), label: `Key ${nextNum}`, key: cleaned };
        targetProv.keys.push(newSlot);
        targetProv.activeKeyId = newSlot.id;
        targetProv.apiKey = cleaned;
      } else {
        syncActiveKeySlot(targetProv, cleaned);
      }
      saveAiConfig(cfg);
      syncGroqHeaderAndSettingsUI();
      const actSlot = (targetProv.keys || []).find(s => s.id === targetProv.activeKeyId);
      if (typeof showToast === 'function') {
        showToast(`Pasted ${PK_AI_PROVIDERS[cfg.provider].shortName} ${(actSlot && actSlot.label) || 'Key 1'} — tap Test or Save`);
      }
      return;
    } catch (_) {
      // Clipboard read denied/unavailable -> unmask & focus normal text box so OS long-press Paste works cleanly
    }
  }
  inp.classList.remove('pk-key-masked');
  const btn = document.getElementById('pkGroqRevealBtn');
  if (btn) btn.textContent = 'Hide';
  inp.focus();
  try { inp.select(); } catch (_) {}
  if (typeof showToast === 'function') {
    showToast('Tap & hold the key box -> Paste (normal keyboard enabled)');
  }
}

async function pasteAiBaseUrl() {
  const inp = document.getElementById('pkAiBaseUrlInput');
  if (!inp) return;
  if (navigator.clipboard && typeof navigator.clipboard.readText === 'function') {
    try {
      const raw = await navigator.clipboard.readText();
      const cleaned = String(raw || '').trim().replace(/\s+/g, '');
      if (!cleaned) {
        if (typeof showToast === 'function') showToast('Clipboard is empty', 'ochre');
        return;
      }
      inp.value = cleaned;
      const cfg = loadAiConfig();
      cfg[cfg.provider].baseUrl = cleaned;
      saveAiConfig(cfg);
      syncGroqHeaderAndSettingsUI();
      if (typeof showToast === 'function') showToast('Pasted endpoint URL');
      return;
    } catch (_) {}
  }
  inp.focus();
  try { inp.select(); } catch (_) {}
  if (typeof showToast === 'function') showToast('Tap & hold URL box -> Paste');
}

function handleGroqModelSelectChange(val) {
  const customInp = document.getElementById('pkGroqCustomModelInput');
  if (customInp) customInp.classList.toggle('hidden', val !== 'custom');
}

function saveGroqSettingsFromUI() {
  const cfg = loadAiConfig();
  captureCurrentProviderInputsIntoConfig(cfg);
  const { spec, data } = getActiveProviderSpec(cfg);

  if (!data.model) data.model = spec.defaultModel;
  if (!data.baseUrl) data.baseUrl = spec.defaultBaseUrl;

  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();

  const ready = isProviderReady(spec.id, data);
  const panel = document.getElementById('pkGroqSettingsPanel');
  if (panel && ready) panel.classList.add('hidden');
  if (typeof showToast === 'function') {
    const shortM = data.model.split('/').pop();
    showToast(ready
      ? `${spec.shortName} saved (${shortM})`
      : `${spec.shortName} settings saved (add key to send)`, ready ? undefined : 'ochre');
  }
  renderGroqMessages();
}

function clearGroqApiKey() {
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);
  const keys = Array.isArray(data.keys) ? data.keys : [];
  if (keys.length > 1) {
    const removed = keys.find(k => k.id === data.activeKeyId);
    data.keys = keys.filter(k => k.id !== data.activeKeyId);
    data.activeKeyId = data.keys[0].id;
    data.apiKey = data.keys[0].key;
    saveAiConfig(cfg);
    syncGroqHeaderAndSettingsUI();
    if (typeof showToast === 'function') {
      showToast(`Removed ${spec.shortName} ${(removed && removed.label) || 'key'} — switched to ${data.keys[0].label}`, 'ochre');
    }
    return;
  }
  syncActiveKeySlot(data, '');
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  if (typeof showToast === 'function') {
    showToast(`${spec.shortName} API key removed from this device`, 'ochre');
  }
}

// ============================================================================
// DIAGNOSTIC ERROR FORMATTER (CORS · MIXED CONTENT · AUTH · MODEL NOT FOUND)
// ============================================================================
function formatAiConnectionError(err, pid, baseUrl, model) {
  const spec = PK_AI_PROVIDERS[pid] || PK_AI_PROVIDERS.groq;
  const rawMsg = err && err.message ? String(err.message) : 'Connection failed';
  const isNetworkOrCors = err && (
    err.name === 'TypeError' ||
    /failed to fetch|networkerror|load failed|cors/i.test(rawMsg)
  );

  if (isNetworkOrCors) {
    if (pid === 'nvidia') {
      const isHttps = typeof window !== 'undefined' && window.location && window.location.protocol === 'https:';
      const isLocalhost = /^https?:\/\/(localhost|127\.0\.0\.1)(:|\/|$)/i.test(baseUrl || '');
      const isDefaultNvidia = /integrate\.api\.nvidia\.com/i.test(baseUrl || '');

      if (isHttps && isLocalhost) {
        return 'Local proxy (127.0.0.1) cannot be reached from mobile phones or HTTPS pages. For zero-server mobile use, switch to Groq or Gemini (100% serverless with no PC needed), or deploy a free Cloudflare Worker for NVIDIA.';
      }
      if (isLocalhost) {
        return `Local NVIDIA proxy (${baseUrl}) is not running. On PC: double-click "Start NVIDIA Proxy.bat". On mobile or without a PC server: switch to Groq or Gemini (0 servers needed), or use a free Cloudflare Worker.`;
      }
      if (isDefaultNvidia) {
        return 'NVIDIA NIM blocks direct browser CORS. On PC: run "Start NVIDIA Proxy.bat". On phone / without PC: switch to Groq or Gemini (0 servers needed), or deploy a free Cloudflare Worker.';
      }
      return `Could not reach NVIDIA proxy (${baseUrl}). Check the URL. For 0-server mobile usage, switch to Groq or Gemini in Settings.`;
    }
    if (pid === 'local') {
      const isHttpsPage = typeof window !== 'undefined' && window.location && window.location.protocol === 'https:';
      const isLocalhost = /^https?:\/\/(localhost|127\.0\.0\.1)(:|\/|$)/i.test(baseUrl || '');
      if (isHttpsPage && /^http:\/\//i.test(baseUrl || '') && !isLocalhost) {
        return `Browser blocked HTTP LAN request (${baseUrl}) from HTTPS page (Mixed Content). Use an HTTPS tunnel/reverse-proxy or open PK Note locally via PK Note.bat.`;
      }
      return `Cannot connect to local server at ${baseUrl}. Make sure it is running with CORS enabled (LM Studio: lms server start --cors · Ollama: OLLAMA_ORIGINS=* ollama serve).`;
    }
    return `Cannot reach ${spec.name}. Check your internet connection or browser ad-blocker.`;
  }

  if (/\b405\b/.test(rawMsg)) {
    if (/github\.io/i.test(baseUrl || '')) {
      return 'GitHub Pages is a static host and cannot process API requests. Set your NVIDIA Endpoint to a valid proxy (e.g. Cloudflare Worker) or switch to Groq / Gemini.';
    }
    return `Endpoint returned HTTP 405 (Method Not Allowed). Check your endpoint URL (${baseUrl}).`;
  }
  if (/\b(401|403)\b/.test(rawMsg)) {
    return `${spec.shortName} rejected your API key (${rawMsg}). Check your key in Settings.`;
  }
  if (/\b(404|410)\b/.test(rawMsg)) {
    return `Model "${model}" was not found or is retired on ${spec.shortName}. Open Settings and tap "${pid === 'local' ? 'Scan local models' : 'Fetch live models'}".`;
  }
  if (/\b429\b/.test(rawMsg)) {
    return `${spec.shortName} rate limit reached. Wait a moment or switch model/provider.`;
  }
  if (/no models? loaded/i.test(rawMsg)) {
    return `Local server is connected, but no model is loaded yet. Load "${model}" in LM Studio (or run: lms load ${model}) and tap Retry.`;
  }
  return rawMsg;
}

// ============================================================================
// LIVE MODEL DISCOVERY + AUTO-PORT FALLBACK (LM STUDIO / OLLAMA / LLAMA.CPP)
// ============================================================================
const PK_LOCAL_AUTO_PORTS = [
  'http://localhost:1234/v1',
  'http://localhost:1235/v1',
  'http://localhost:11434/v1',
  'http://localhost:8080/v1',
  'http://localhost:1337/v1'
];

function isNonChatModelId(id) {
  return /embed|phonon|orpheus|whisper|tts|playai|clip|rerank|synthetic-video|guard|safety|imagen|veo|aqa|bison|gecko|lyria|robotics|computer-use|native-audio|image-generation|-image\b|nano-banana|transcribe|deep-research|decision-|antigravity-preview|customtools|live-translate|\blive-|-live$/i.test(String(id || ''));
}

function isModelNotFoundError(status, msg) {
  return status === 404 || status === 410 || /does not exist|not found|decommissioned|retired|no access|not have access/i.test(String(msg || ''));
}

async function probeLocalBaseUrl(baseUrl, apiKey) {
  const endpoints = buildProviderEndpoints('local', baseUrl);
  const headers = {};
  if (apiKey && apiKey.trim()) headers['Authorization'] = `Bearer ${apiKey.trim()}`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 1800);
  try {
    const res = await fetch(endpoints.modelsUrl, { method: 'GET', headers, signal: ctrl.signal });
    if (res.ok) {
      const json = await res.json().catch(() => ({}));
      const list = Array.isArray(json.data) ? json.data : (Array.isArray(json.models) ? json.models : []);
      const ids = list
        .map(item => (typeof item === 'string' ? item : (item && (item.id || item.name || item.model)) || ''))
        .filter(id => id && !isNonChatModelId(id));
      return { ok: true, baseUrl: endpoints.baseUrl, models: [...new Set(ids)] };
    }
  } catch (_) {
    // Try Ollama native /api/tags as fallback on this port
    if (endpoints.ollamaTagsUrl) {
      try {
        const tRes = await fetch(endpoints.ollamaTagsUrl, { method: 'GET', signal: ctrl.signal });
        if (tRes.ok) {
          const json = await tRes.json().catch(() => ({}));
          const ids = (json.models || []).map(m => m && (m.name || m.model)).filter(id => id && !isNonChatModelId(id));
          return { ok: true, baseUrl: endpoints.baseUrl, models: [...new Set(ids)] };
        }
      } catch (_) {}
    }
  } finally {
    clearTimeout(timer);
  }
  return { ok: false, baseUrl: endpoints.baseUrl, models: [] };
}

async function autoDetectRunningLocalServer(currentBaseUrl, apiKey) {
  const normCurrent = buildProviderEndpoints('local', currentBaseUrl).baseUrl;
  const candidates = [normCurrent, ...PK_LOCAL_AUTO_PORTS.filter(u => u !== normCurrent)];
  const results = await Promise.all(candidates.map(u => probeLocalBaseUrl(u, apiKey)));
  const hit = results.find(r => r.ok);
  return hit || null;
}

async function discoverModelsForProvider(pid, baseUrl, apiKey) {
  const endpoints = buildProviderEndpoints(pid, baseUrl);
  const headers = {};
  if (apiKey && apiKey.trim()) headers['Authorization'] = `Bearer ${apiKey.trim()}`;

  // 1. Standard OpenAI-compatible GET /v1/models (supports Gemini, OpenRouter Free, Groq, NVIDIA, Local)
  try {
    const res = await fetch(endpoints.modelsUrl, { method: 'GET', headers });
    if (res.ok) {
      const json = await res.json();
      let list = Array.isArray(json.data) ? json.data : (Array.isArray(json.models) ? json.models : []);
      if (pid === 'openrouter') {
        // Strictly keep FREE ($0) chat models on OpenRouter so users never get billed
        list = list.filter(item => {
          const id = typeof item === 'string' ? item : (item && item.id) || '';
          const isZeroCost = item && item.pricing && Number(item.pricing.prompt) === 0 && Number(item.pricing.completion) === 0;
          return id === 'openrouter/free' || /:free$/i.test(id) || isZeroCost;
        });
      }
      let ids = list
        .map(item => {
          const raw = typeof item === 'string' ? item : (item && (item.id || item.name || item.model)) || '';
          return pid === 'gemini' ? String(raw).replace(/^models\//i, '') : String(raw);
        })
        .filter(id => id && !isNonChatModelId(id));
      if (pid === 'gemini') {
        ids = ids.filter(id => !PK_RETIRED_GEMINI_MODELS.has(id));
        const geminiFirst = ids.filter(id => /^gemini-/i.test(id));
        const others = ids.filter(id => !/^gemini-/i.test(id));
        ids = [...geminiFirst, ...others];
      } else if (pid === 'openrouter') {
        const routerFirst = ids.filter(id => id === 'openrouter/free');
        const rest = ids.filter(id => id !== 'openrouter/free');
        ids = [...routerFirst, ...rest];
      }
      if (ids.length > 0) return [...new Set(ids)];
    }
  } catch (err) {
    // Fall through to Ollama native tags if Local; otherwise rethrow
    if (pid !== 'local') throw err;
  }

  // 2. Ollama native GET /api/tags fallback for Local provider
  if (pid === 'local' && endpoints.ollamaTagsUrl) {
    const res = await fetch(endpoints.ollamaTagsUrl, { method: 'GET' });
    if (res.ok) {
      const json = await res.json();
      const ids = (json.models || [])
        .map(m => m && (m.name || m.model))
        .filter(id => id && !isNonChatModelId(id));
      if (ids.length > 0) return [...new Set(ids)];
    }
  }

  return [];
}

async function fetchAiProviderModels() {
  const cfg = loadAiConfig();
  captureCurrentProviderInputsIntoConfig(cfg);
  const { spec, data } = getActiveProviderSpec(cfg);

  if ((spec.id === 'groq' || spec.id === 'gemini') && !data.apiKey) {
    if (typeof showToast === 'function') showToast(`Paste your ${spec.shortName} API key first to fetch models`, 'ochre');
    return;
  }

  const fetchBtn = document.getElementById('pkAiFetchModelsBtn');
  if (fetchBtn) fetchBtn.textContent = spec.id === 'local' ? 'Scanning...' : 'Fetching...';

  try {
    let models = [];
    let switchedUrl = '';
    if (spec.id === 'local') {
      try {
        models = await discoverModelsForProvider('local', data.baseUrl, data.apiKey);
      } catch (_) {
        // Configured port unreachable -> auto-probe LM Studio (:1234/:1235), Ollama (:11434), llama.cpp (:8080), Jan (:1337)
        const detected = await autoDetectRunningLocalServer(data.baseUrl, data.apiKey);
        if (!detected) throw new TypeError('Failed to fetch');
        cfg.local.baseUrl = detected.baseUrl;
        switchedUrl = detected.baseUrl;
        models = detected.models;
      }
    } else {
      models = await discoverModelsForProvider(spec.id, data.baseUrl, data.apiKey);
    }

    if (models.length === 0) {
      throw new Error(spec.id === 'local'
        ? 'Local server is running, but no chat models are loaded yet. Load a model in LM Studio or pull one in Ollama.'
        : 'No chat models returned by endpoint.');
    }
    cfg[spec.id].discoveredModels = models;
    if (spec.id === 'local' && !models.includes(cfg.local.model)) {
      cfg.local.model = models[0];
    }
    saveAiConfig(cfg);
    syncGroqHeaderAndSettingsUI();
    if (typeof showToast === 'function') {
      showToast(switchedUrl
        ? `Auto-connected ${switchedUrl} · Found ${models.length} model(s)`
        : `Found ${models.length} ${spec.shortName} model(s)`);
    }
  } catch (err) {
    const friendly = formatAiConnectionError(err, spec.id, data.baseUrl, data.model);
    if (typeof showToast === 'function') showToast(friendly.slice(0, 110), 'ochre');
  } finally {
    syncGroqHeaderAndSettingsUI();
  }
}

async function testGroqConnection() {
  const cfg = loadAiConfig();
  captureCurrentProviderInputsIntoConfig(cfg);
  const { spec, data } = getActiveProviderSpec(cfg);

  if (spec.requiresKey && !data.apiKey) {
    if (typeof showToast === 'function') showToast(`Paste your ${spec.shortName} API key (${spec.keyPlaceholder}) first`, 'ochre');
    return;
  }

  const testBtn = document.getElementById('pkAiTestBtn');
  if (testBtn) testBtn.textContent = 'Testing...';
  if (typeof showToast === 'function') showToast(`Testing ${spec.name}...`);

  try {
    // For Local Model: auto-detect running port (:1234/:1235/:11434/:8080/:1337) if configured port is closed!
    if (spec.id === 'local') {
      const detected = await autoDetectRunningLocalServer(data.baseUrl, data.apiKey);
      if (detected) {
        data.baseUrl = detected.baseUrl;
        if (detected.models.length > 0) {
          data.discoveredModels = detected.models;
          if (!detected.models.includes(data.model)) data.model = detected.models[0];
        }
      }
    }

    const endpoints = buildProviderEndpoints(spec.id, data.baseUrl);
    const runPing = (modelId) => fetch(endpoints.chatUrl, {
      method: 'POST',
      headers: buildAuthHeaders(data.apiKey),
      body: JSON.stringify({
        model: modelId,
        messages: [{ role: 'user', content: 'Reply with OK.' }],
        max_tokens: 64,
        temperature: 0,
        stream: false
      })
    });

    let res = await runPing(data.model);

    const extractApiErrMsg = (errData, status) => {
      const obj = Array.isArray(errData) ? errData[0] : errData;
      return obj?.error?.message || obj?.detail || obj?.title || `HTTP ${status}`;
    };

    // Auto-recover if a cloud model was retired/unavailable on this key
    if (!res.ok && spec.id !== 'local') {
      const errData = await res.json().catch(() => ({}));
      const msg = extractApiErrMsg(errData, res.status);
      if (isModelNotFoundError(res.status, msg)) {
        const liveModels = await discoverModelsForProvider(spec.id, data.baseUrl, data.apiKey).catch(() => []);
        const fallbackModel = liveModels.find(m => m !== data.model);
        if (fallbackModel) {
          data.discoveredModels = liveModels;
          data.model = fallbackModel;
          res = await runPing(fallbackModel);
        } else {
          throw new Error(msg);
        }
      } else {
        throw new Error(msg);
      }
    }

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const msg = extractApiErrMsg(errData, res.status);
      throw new Error(msg);
    }

    saveAiConfig(cfg);
    syncGroqHeaderAndSettingsUI();
    const panel = document.getElementById('pkGroqSettingsPanel');
    if (panel) panel.classList.add('hidden');
    if (typeof showToast === 'function') {
      showToast(`${spec.shortName} connected (${data.model.split('/').pop()})!`);
    }
    renderGroqMessages();
  } catch (err) {
    const friendly = formatAiConnectionError(err, spec.id, data.baseUrl, data.model);
    if (typeof showToast === 'function') {
      showToast(friendly.slice(0, 120), 'ochre');
    }
    pkGroqHistory.push({
      role: 'assistant',
      content: `${spec.name} connection check failed:\n${friendly}`,
      isError: true,
      provider: spec.id
    });
    renderGroqMessages();
  } finally {
    if (testBtn) testBtn.textContent = 'Test';
  }
}

async function clearGroqConversation() {
  abortGroqStream();
  pkGroqHistory = [];
  if (window.PKMemory && typeof window.PKMemory.startNewThread === 'function') {
    await window.PKMemory.startNewThread();
  }
  updateAiMemoryBadge();
  renderGroqMessages();
  if (typeof showToast === 'function') showToast('Started new chat (past chats & memories kept)');
}

// ============================================================================
// CONTEXT BUILDER (ACTIVE NOTE / VAULT + CALENDAR / GENERAL)
// ============================================================================
function pkCleanBlockText(raw) {
  if (!raw) return '';
  return String(raw)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function buildGroqSystemPrompt(recalledCtx = null, targetSelection = '', targetBlockId = null) {
  const todayIso = new Date().toISOString().slice(0, 10);
  const autoMemOn = !window.PKMemory || window.PKMemory.getSettings().autoSave;
  const parts = [
    'You are the built-in AI helper inside PK Note.',
    `Today's date is ${todayIso}.`,
    'Tone & Persona: Communicate naturally and directly, like a sharp, professional colleague in a focused conversation. Avoid sounding like a formulaic AI chatbot: do not use robotic greetings, canned flattery, repetitive filler, or rigid textbook structures. Write with clarity, nuance, and professional substance without being stiff, corporate, or overly academic. In chat conversation, you can naturally use emojis to add warmth, tone, and expression when appropriate. However, never insert unwanted emojis into document text or note replacements unless the user specifically asked for emojis in their note. Use formatting only when it genuinely improves readability.',
    'TEXT REPLACEMENT & EDITING (CRITICAL): When asked to replace, fix, edit, proofread, translate, or rewrite text (or when target selection/block is specified below): Return ONLY the clean replacement text. Ensure the revised writing sounds authentic, articulate, and natural, free of cliché AI phrasing and without unsolicited emojis in the note content. NEVER add conversational introductions (e.g. do not say "Sure!", "Here is the revised text:", "Here is the correction:"). NEVER add conversational conclusions (e.g. do not say "Hope this helps!", "Let me know if you need more changes!"). NEVER add unsolicited changes to other parts of the text. Make ONLY the requested change. Do NOT wrap entire responses in markdown code block ticks (```).',
    'Flashcards: Only when asked to make flashcards or study cards, put each card on its own line as: Question :: Answer (no numbering needed).',
    'Calendar: ONLY when the user asks to schedule or add a calendar event, include one fenced block at the end like:\n```pk-event\n{"title":"Event Title","date":"YYYY-MM-DD","start":"14:00","end":"15:00","location":""}\n```',
    'API KEYS & CREDENTIAL SCANNING (EXPERT CAPABILITY): When asked to scan text or notes for API keys, identify providers, remove duplicates, organize into clean lists, or check security: You are an expert at detecting and categorizing API keys. Accurately identify providers by their format: Google Gemini (AIzaSy... or AQ....), Groq (gsk_...), OpenRouter (sk-or-v1-... or sk-or-...), NVIDIA NIM (nvapi-...), OpenAI Project (sk-proj-...), OpenAI Standard (sk-...), Anthropic Claude (sk-ant-api03-... or sk-ant-...), DeepSeek (sk-... followed by exactly 32 hex characters), Perplexity (pplx-...), Cerebras (csk-...), Hugging Face (hf_...), GitHub (ghp_... or github_pat_...), Mistral, Cohere, etc. Automatically deduplicate identical keys. Format your response with clean Markdown code blocks (```) grouped by provider for instant 1-click copying. Perform a security & formatting health check: flag if any key is truncated, contains accidental trailing punctuation (commas, quotes) or internal whitespace, or looks like an insecure dummy/placeholder value, and explain how to fix it.',
    'API KEY PROTECTION & ZERO RANDOM EDITS (CRITICAL): Always recognize when text contains an API key (e.g. gsk_..., AIzaSy..., sk-or-v1-..., sk-proj-..., sk-ant-..., nvapi-..., pplx-..., hf_..., csk-..., or hex secrets). When editing, rewriting, summarizing, or polishing notes or code: DO NOT touch, modify, truncate, censor, obfuscate, or alter any API key randomly! Keep every character of an API key 100% intact and verbatim. Never replace real API keys with placeholder text like "your-key-here" or fake strings unless the user explicitly asks to replace that specific key.'
  ];

  if (autoMemOn) {
    parts.push(
      'Long-term memory: ONLY when the user shares a durable personal detail worth remembering across future chats (name, preferences, ongoing projects, goals, tools/devices they use, or explicitly asks you to remember something), append one hidden block at the very end like:\n```pk-memory\n{"text":"Short clear fact to remember","category":"preference"}\n```\nValid categories: profile, preference, project, fact. Never save one-off questions or facts already listed in your memories below.'
    );
  }

  // Accept either new recallContext object or legacy array of memories
  const ctx = Array.isArray(recalledCtx)
    ? { memories: recalledCtx, openingTopic: '', earlierInThisChat: [], acrossChats: [], recentThreads: [] }
    : (recalledCtx || { memories: [], openingTopic: '', earlierInThisChat: [], acrossChats: [], recentThreads: [] });

  if (ctx.memories && ctx.memories.length > 0) {
    const memLines = ctx.memories
      .map(m => `- [${m.category || 'fact'}] ${m.text}`)
      .join('\n');
    parts.push(`\nWHAT YOU REMEMBER ABOUT THE USER (use naturally without awkwardly announcing it):\n${memLines}`);
  }

  if (ctx.openingTopic || (ctx.earlierInThisChat && ctx.earlierInThisChat.length > 0)) {
    const earlierLines = [];
    if (ctx.openingTopic) earlierLines.push(`- Chat started with: "${ctx.openingTopic}"`);
    (ctx.earlierInThisChat || []).forEach(ch => {
      earlierLines.push(`- Earlier turn: ${ch.text}`);
    });
    parts.push(`\nEARLIER IN THIS SAME CHAT (beyond the recent messages below):\n${earlierLines.join('\n')}`);
  }

  if (ctx.acrossChats && ctx.acrossChats.length > 0) {
    const crossLines = ctx.acrossChats
      .map(ch => `- [${ch.date} · "${ch.threadTitle}"] ${ch.text}`)
      .join('\n');
    parts.push(`\nRELEVANT MOMENTS FROM PAST CHATS (you have memory across chats — use these naturally when relevant):\n${crossLines}`);
  }

  if (ctx.recentThreads && ctx.recentThreads.length > 0) {
    const threadLines = ctx.recentThreads
      .map(t => `- [${t.date}] "${t.title}" (${t.messageCount} msgs)${t.summary ? ': ' + t.summary : ''}`)
      .join('\n');
    parts.push(`\nOTHER RECENT CHATS WITH THIS USER:\n${threadLines}`);
  }

  const activeNote = typeof getActiveNote === 'function' ? getActiveNote() : null;

  if (pkGroqContextScope === 'note' && activeNote) {
    let lines = '';
    if (activeNote.encryptedPayload) {
      lines = '(encrypted AES-256-GCM note — currently locked by user in Vault Lock)';
    } else {
      lines = (activeNote.blocks || []).map(b => {
        if (!b || b.type === 'divider' || b.type === 'sketch') return '';
        if (b.type === 'toggle') {
          const head = pkCleanBlockText(b.content);
          const body = pkCleanBlockText(b.body);
          if (!head && !body) return '';
          return body ? `> ${head}\n  ${body}` : `> ${head}`;
        }
        if (b.type === 'table' && Array.isArray(b.rows)) {
          return b.rows
            .map(row => Array.isArray(row) ? `| ${row.map(c => pkCleanBlockText(c)).join(' | ')} |` : '')
            .filter(Boolean)
            .join('\n');
        }
        const t = pkCleanBlockText(b.content);
        if (!t) return '';
        if (b.type === 'h1') return `# ${t}`;
        if (b.type === 'h2') return `## ${t}`;
        if (b.type === 'h3') return `### ${t}`;
        if (b.type === 'todo') return `- [${b.checked ? 'x' : ' '}] ${t}`;
        if (b.type === 'bullet') return `- ${t}`;
        if (b.type === 'quote' || b.type === 'callout') return `> ${t}`;
        return t;
      }).filter(Boolean).join('\n').slice(0, 7500);
    }

    parts.push(
      `\nACTIVE NOTE CONTEXT:\nTitle: ${activeNote.title || 'Untitled'}\nFolder: ${activeNote.folder || 'General'}\nTags: ${(activeNote.tags || []).join(', ') || 'none'}\nLocked: ${activeNote.locked ? 'yes' : 'no'}\nEncrypted: ${activeNote.encryptedPayload ? 'yes' : 'no'}\nContent:\n${lines || '(empty note)'}`
    );

    if (targetSelection) {
      parts.push(
        `\nCRITICAL TARGET SELECTION (The user specifically highlighted this text in their note to replace/edit):\n"""\n${targetSelection}\n"""\nINSTRUCTION: The user wants to replace, correct, or edit the above text. Return ONLY the exact replacement text for this selection. ZERO conversational fluff, ZERO introduction, ZERO conclusion, NO markdown code block ticks. Return just the replacement.`
      );
    } else if (targetBlockId) {
      const blk = (activeNote.blocks || []).find(b => b.id === targetBlockId);
      if (blk && blk.content) {
        parts.push(
          `\nCRITICAL TARGET BLOCK (The user is focused on this block):\n"""\n${blk.content}\n"""\nINSTRUCTION: The user wants to edit or replace this block. Return ONLY the replacement content with ZERO conversational filler.`
        );
      }
    }
  } else if (pkGroqContextScope === 'vault' && typeof state !== 'undefined') {
    const noteSummaries = (state.notes || []).slice(0, 18).map(n => {
      const preview = n.encryptedPayload
        ? '[Encrypted AES-256-GCM note]'
        : (n.blocks || []).map(b => {
            if (!b || b.type === 'divider' || b.type === 'sketch') return '';
            if (b.type === 'toggle') return [pkCleanBlockText(b.content), pkCleanBlockText(b.body)].filter(Boolean).join(' ');
            if (b.type === 'table' && Array.isArray(b.rows)) return b.rows.flat().map(c => pkCleanBlockText(c)).filter(Boolean).join(' ');
            return pkCleanBlockText(b.content);
          }).filter(Boolean).join(' ').slice(0, 220);
      return `- "${n.title || 'Untitled'}" [${n.folder || 'General'}]${n.id === state.activeNoteId ? ' (ACTIVE)' : ''}: ${preview}`;
    }).join('\n');

    const upcomingEvents = (state.events || [])
      .map(e => {
        const norm = typeof normalizeEventRange === 'function' ? normalizeEventRange(e) : null;
        return {
          title: e.title,
          date: norm ? norm.startDateKey : (e.date || ''),
          time: norm && !norm.allDay && typeof formatLocalTime24 === 'function' ? formatLocalTime24(norm.start) : 'All-day',
          location: e.location || ''
        };
      })
      .filter(e => !e.date || e.date >= todayIso)
      .sort((a, b) => (a.date || '').localeCompare(b.date || ''))
      .slice(0, 15)
      .map(e => `- ${e.date} ${e.time}: ${e.title}${e.location ? ' @ ' + e.location : ''}`)
      .join('\n');

    parts.push(`\nVAULT NOTES (${(state.notes || []).length} total):\n${noteSummaries || '(no notes)'}`);
    parts.push(`\nUPCOMING SCHEDULE:\n${upcomingEvents || '(no upcoming events)'}`);
  }

  return parts.join('\n');
}

// ============================================================================
// WORKSPACE INTEGRATION: MARKDOWN -> BLOCKS, FLASHCARDS, CALENDAR EVENTS, VOICE
// ============================================================================
function extractEventPayloadsFromText(text) {
  const events = [];
  const re = /```pk-event\s*([\s\S]*?)```/gi;
  let m;
  while ((m = re.exec(text)) !== null) {
    try {
      const obj = JSON.parse(m[1].trim());
      if (obj && obj.title) events.push(obj);
    } catch (_) {}
  }
  return events;
}

function extractMemoryPayloadsFromText(text) {
  const memories = [];
  const re = /```pk-memory\s*([\s\S]*?)```/gi;
  let m;
  while ((m = re.exec(text)) !== null) {
    try {
      const parsed = JSON.parse(m[1].trim());
      const items = Array.isArray(parsed) ? parsed : [parsed];
      items.forEach(obj => {
        if (obj && typeof obj.text === 'string' && obj.text.trim().length >= 3) {
          memories.push({ text: obj.text.trim(), category: obj.category || 'fact' });
        }
      });
    } catch (_) {}
  }
  return memories;
}

function stripSpecialBlocksForDisplay(text, isStreaming = false) {
  let out = String(text || '')
    .replace(/<(?:think|thought)>[\s\S]*?<\/(?:think|thought)>/gi, '')
    .replace(/```pk-event[\s\S]*?```/gi, '')
    .replace(/```pk-memory[\s\S]*?```/gi, '');
  // Hide unclosed <think>/<thought> or hidden pk-memory / pk-event block while streaming
  if (isStreaming) {
    out = out
      .replace(/<(?:think|thought)>[\s\S]*$/gi, '')
      .replace(/```pk-(?:memory|event)[\s\S]*$/gi, '');
  }
  return out.trim();
}

function cleanAiTextForInsertion(rawText) {
  if (!rawText) return '';
  let text = stripSpecialBlocksForDisplay(rawText, false).trim();

  // 1. Unwrap outer markdown/text code blocks if entire response is wrapped
  const outerBlockMatch = text.match(/^```(?:markdown|md|text|txt)?\r?\n([\s\S]*?)\r?\n```$/i);
  if (outerBlockMatch) {
    text = outerBlockMatch[1].trim();
  }

  // 2. Split lines to inspect preamble and postamble
  let lines = text.split(/\r?\n/);

  // Common conversational introductory phrases models output before the actual text
  const introPatterns = [
    /^(?:sure(?: thing)?|certainly|of course|alright|absolutely|below is|here(?: is|'s)|here are)[^:\n]*:?\s*$/i,
    /^(?:here is the (?:updated|revised|corrected|new|polished) (?:text|note|version|content|sentence|paragraph)[^:\n]*:?)\s*$/i,
    /^(?:i(?:'ve| have) (?:updated|replaced|revised|fixed|rewritten|polished|corrected) (?:the |your )?(?:text|note|content|sentence|paragraph|words?)[^:\n]*:?)\s*$/i,
    /^(?:in your (?:note|text),? [^:\n]*:?)\s*$/i,
    /^(?:revised (?:text|note|version|content):?)\s*$/i,
    /^(?:updated (?:text|note|version|content):?)\s*$/i,
    /^(?:corrected (?:text|note|version|content):?)\s*$/i,
    /^(?:here (?:is|are) the (?:result|output|changes)[^:\n]*:?)\s*$/i,
    /^(?:replacement:?)\s*$/i
  ];

  while (lines.length > 1) {
    const firstLine = lines[0].trim();
    if (!firstLine) {
      lines.shift();
      continue;
    }
    const isFluff = introPatterns.some(rx => rx.test(firstLine));
    if (isFluff) {
      lines.shift();
      if (lines.length > 0 && !lines[0].trim()) lines.shift();
    } else {
      break;
    }
  }

  // Common conversational outro phrases models output after the actual text
  const outroPatterns = [
    /^(?:hope this (?:helps|works)|let me know if you (?:need|want)|feel free to (?:ask|tweak)|is there anything else)[^\n]*$/i,
    /^(?:i (?:also )?(?:kept|polished|removed|adjusted|rephrased) [^\n]+(?:for you)?\.?)\s*$/i,
    /^(?:let me know what you think[^\n]*)$/i,
    /^(?:let me know if that works[^\n]*)$/i
  ];

  while (lines.length > 1) {
    const lastLine = lines[lines.length - 1].trim();
    if (!lastLine) {
      lines.pop();
      continue;
    }
    const isFluff = outroPatterns.some(rx => rx.test(lastLine));
    if (isFluff) {
      lines.pop();
    } else {
      break;
    }
  }

  let cleaned = lines.join('\n').trim();

  // If after stripping, it still has an outer code block, unwrap it again
  const secondWrap = cleaned.match(/^```(?:markdown|md|text|txt)?\r?\n([\s\S]*?)\r?\n```$/i);
  if (secondWrap) cleaned = secondWrap[1].trim();

  // If enclosed in wrapping quotation marks (e.g. "replacement text"), strip them
  if (cleaned.startsWith('"') && cleaned.endsWith('"') && cleaned.length >= 2 && !cleaned.slice(1, -1).includes('"')) {
    cleaned = cleaned.slice(1, -1).trim();
  }

  return cleaned || text;
}

function parseMarkdownToPKBlocks(rawText) {
  const clean = cleanAiTextForInsertion(rawText);
  const lines = clean.split(/\r?\n/);
  const blocks = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith('```')) continue;
    if (/^---+$/.test(line)) {
      blocks.push({ id: generateId('b'), type: 'divider', content: '' });
    } else if (/^###\s+/.test(line)) {
      blocks.push({ id: generateId('b'), type: 'h3', content: line.replace(/^###\s+/, '') });
    } else if (/^##\s+/.test(line)) {
      blocks.push({ id: generateId('b'), type: 'h2', content: line.replace(/^##\s+/, '') });
    } else if (/^#\s+/.test(line)) {
      blocks.push({ id: generateId('b'), type: 'h1', content: line.replace(/^#\s+/, '') });
    } else if (/^[-*]\s+\[([ xX])\]\s+/.test(line)) {
      const checked = /^[-*]\s+\[[xX]\]/.test(line);
      blocks.push({ id: generateId('b'), type: 'todo', checked, content: line.replace(/^[-*]\s+\[[ xX]\]\s+/, '') });
    } else if (/^[-*•]\s+/.test(line)) {
      blocks.push({ id: generateId('b'), type: 'bullet', content: line.replace(/^[-*•]\s+/, '') });
    } else if (/^>\s+/.test(line)) {
      blocks.push({ id: generateId('b'), type: 'quote', content: line.replace(/^>\s+/, '') });
    } else {
      blocks.push({ id: generateId('b'), type: 'paragraph', content: line.replace(/\*\*(.*?)\*\*/g, '$1') });
    }
  }
  return blocks;
}

function preserveApiKeysInReplacement(originalText, replacementText, userPrompt = '') {
  if (!originalText || !replacementText) return replacementText;
  const isExplicitKeyReplacement = /replace\s+(?:the\s+)?(?:api\s+)?key|new\s+(?:api\s+)?key|change\s+(?:the\s+)?(?:api\s+)?key/i.test(userPrompt);
  if (isExplicitKeyReplacement) return replacementText;

  const keyRegex = /\b(gsk_[A-Za-z0-9]{45,64}|AIzaSy[A-Za-z0-9_-]{33}|AQ\.[A-Za-z0-9_-]{20,}|sk-or-v1-[a-f0-9]{64}|sk-or-[A-Za-z0-9_-]{32,}|nvapi-[A-Za-z0-9_-]{40,}|sk-proj-[A-Za-z0-9_-]{48,}|sk-ant-api03-[A-Za-z0-9_-]{80,}|sk-[a-f0-9]{32}|pplx-[a-f0-9]{48}|hf_[A-Za-z0-9]{34,}|csk-[a-zA-Z0-9_-]{32,})\b/g;
  let m;
  const origKeys = [];
  while ((m = keyRegex.exec(originalText)) !== null) {
    origKeys.push(m[0]);
  }

  if (origKeys.length === 0) return replacementText;

  let protectedText = replacementText;
  origKeys.forEach(origKey => {
    if (!protectedText.includes(origKey)) {
      const prefix = origKey.slice(0, 7);
      const safePrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const placeholderRegex = new RegExp(`\\b(?:${safePrefix}[A-Za-z0-9_.-]*|your[_-]?(?:api[_-]?)?key|replace[_-]?with[_-]?key)\\b`, 'gi');
      if (placeholderRegex.test(protectedText)) {
        protectedText = protectedText.replace(placeholderRegex, origKey);
      }
    }
  });

  return protectedText;
}

function replaceTargetSelectionWithGroqReply(msgIdx) {
  const msg = pkGroqHistory[msgIdx];
  if (!msg || !msg.content || msg.isError) return;
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note) return;

  const targetText = msg.targetSelection || pkAiTargetSelection || '';
  const cleanReplacement = preserveApiKeysInReplacement(targetText, cleanAiTextForInsertion(msg.content), msg.retryPrompt || '');
  if (!cleanReplacement) return;

  if (typeof stampNoteSnapshot === 'function') {
    stampNoteSnapshot(false, 'Pre-AI Text Replace');
  }
  if (typeof takeSnapshot === 'function') takeSnapshot('aiReplaceSelection');

  let replaced = false;

  // 1. Try finding in the specified target block first
  if (msg.targetBlockId) {
    const block = (note.blocks || []).find(b => b.id === msg.targetBlockId);
    if (block && typeof block.content === 'string') {
      if (targetText && block.content.includes(targetText)) {
        block.content = block.content.replace(targetText, cleanReplacement);
        replaced = true;
      } else if (!targetText) {
        block.content = cleanReplacement;
        replaced = true;
      }
    }
  }

  // 2. Search across all blocks for exact match of targetText
  if (!replaced && targetText) {
    for (const b of (note.blocks || [])) {
      if (b && typeof b.content === 'string' && b.content.includes(targetText)) {
        b.content = b.content.replace(targetText, cleanReplacement);
        replaced = true;
        break;
      }
    }
  }

  // 3. Search case-insensitively or trimmed
  if (!replaced && targetText) {
    const norm = targetText.trim().toLowerCase();
    for (const b of (note.blocks || [])) {
      if (b && typeof b.content === 'string' && b.content.toLowerCase().includes(norm)) {
        const lower = b.content.toLowerCase();
        const start = lower.indexOf(norm);
        b.content = b.content.slice(0, start) + cleanReplacement + b.content.slice(start + targetText.trim().length);
        replaced = true;
        break;
      }
    }
  }

  // 4. If target was multi-line or spanned blocks, replace with parsed blocks
  if (!replaced && targetText.includes('\n')) {
    const targetLines = targetText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (targetLines.length > 0) {
      const startIdx = (note.blocks || []).findIndex(b => b && b.content && b.content.includes(targetLines[0]));
      if (startIdx !== -1) {
        const newBlocks = parseMarkdownToPKBlocks(msg.content);
        note.blocks.splice(startIdx, Math.min(targetLines.length, note.blocks.length - startIdx), ...newBlocks);
        replaced = true;
      }
    }
  }

  // 5. If still not replaced but activeEditingBlockId is set, replace in that block
  if (!replaced && typeof activeEditingBlockId !== 'undefined' && activeEditingBlockId) {
    const block = (note.blocks || []).find(b => b.id === activeEditingBlockId);
    if (block) {
      block.content = cleanReplacement;
      replaced = true;
    }
  }

  if (replaced) {
    note.updatedAt = new Date().toISOString();
    if (typeof setAppMode === 'function') setAppMode('workspace');
    if (typeof renderBlocks === 'function') renderBlocks(note);
    if (typeof persistState === 'function') persistState();
    if (typeof showToast === 'function') showToast('Replaced text with AI correction (0 fluff)');
  } else {
    insertGroqReplyIntoNote(msgIdx, false);
    if (typeof showToast === 'function') showToast('Target text not found in note — inserted at bottom of note', 'ochre');
  }
}

function replaceTargetBlockWithGroqReply(msgIdx) {
  const msg = pkGroqHistory[msgIdx];
  if (!msg || !msg.content || msg.isError) return;
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note) return;

  const targetBlockId = msg.targetBlockId || pkAiTargetBlockId;
  const targetBlock = targetBlockId ? (note.blocks || []).find(b => b.id === targetBlockId) : null;
  const origContent = targetBlock && typeof targetBlock.content === 'string' ? targetBlock.content : '';
  const protectedContent = preserveApiKeysInReplacement(origContent, msg.content, msg.retryPrompt || '');
  const newBlocks = parseMarkdownToPKBlocks(protectedContent);
  if (newBlocks.length === 0) return;

  if (typeof stampNoteSnapshot === 'function') {
    stampNoteSnapshot(false, 'Pre-AI Block Replace');
  }
  if (typeof takeSnapshot === 'function') takeSnapshot('aiReplaceBlock');

  let replaced = false;
  if (targetBlockId) {
    const idx = (note.blocks || []).findIndex(b => b.id === targetBlockId);
    if (idx !== -1) {
      if (newBlocks.length === 1) {
        note.blocks[idx].content = newBlocks[0].content;
        note.blocks[idx].type = newBlocks[0].type;
      } else {
        note.blocks.splice(idx, 1, ...newBlocks);
      }
      replaced = true;
    }
  }

  if (replaced) {
    note.updatedAt = new Date().toISOString();
    if (typeof setAppMode === 'function') setAppMode('workspace');
    if (typeof renderBlocks === 'function') renderBlocks(note);
    if (typeof persistState === 'function') persistState();
    if (typeof showToast === 'function') showToast('Replaced target block with AI correction');
  } else {
    insertGroqReplyIntoNote(msgIdx, true);
  }
}

// ============================================================================
// IN-PLACE 1-TAP AI POLISH ENGINE (BACKGROUND NON-STREAMING · ZERO CHAT DRAWER)
// ============================================================================
async function runInPlaceAiPolishText(rawText, options = {}) {
  if (!rawText || !rawText.trim()) {
    showToast('No text provided to polish', 'ochre');
    return;
  }

  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);

  if (!isProviderReady(cfg.provider, data)) {
    showToast(`Please configure ${spec.shortName} in AI Settings first`, 'ochre');
    if (typeof openGroqSettingsModal === 'function') openGroqSettingsModal();
    return;
  }

  showToast(`Polishing text with ${spec.shortName}...`, 'blue');

  const systemPrompt = [
    'You are an expert editorial proofreader and text polish engine for PK Note.',
    'TASK: Rewrite and polish the user text to fix all typos, grammatical mistakes, awkward phrasing, and flow, while strictly keeping the author original meaning, voice, facts, and structure.',
    'CRITICAL RULES:',
    '1. Return ONLY the polished text as replacement. No preamble, no introduction ("Here is...", "Sure!"), no commentary, no quotes around the output.',
    '2. Do NOT wrap entire output in markdown code fences unless the original text itself was a code block.',
    '3. STRICTLY PRESERVE all code snippets, wikilinks [[...]], markdown tags, links, and any API keys (e.g. gsk_..., AIzaSy..., sk-..., nvapi-...) verbatim without changing or truncating them.',
    '4. Do not omit user facts or details.'
  ].join('\n');

  try {
    let endpoints = buildProviderEndpoints(spec.id, data.baseUrl);
    let activeModel = data.model || spec.defaultModel;

    const doFetch = (chatUrl, modelId) => fetch(chatUrl, {
      method: 'POST',
      headers: buildAuthHeaders(data.apiKey),
      body: JSON.stringify({
        model: modelId,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: rawText }
        ],
        stream: false,
        temperature: 0.3,
        max_tokens: 2048
      })
    });

    let res = await doFetch(endpoints.chatUrl, activeModel);
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      const msg = errJson?.error?.message || errJson?.detail || `${spec.shortName} error (${res.status})`;
      showToast(`AI Polish failed: ${msg}`, 'vermilion');
      return;
    }

    const json = await res.json();
    let reply = json.choices?.[0]?.message?.content || '';

    // Strip AI conversational intro/outro fluff if any leaked through
    reply = cleanAiTextForInsertion(reply);

    // Strictly protect original API keys against alteration
    reply = preserveApiKeysInReplacement(rawText, reply);

    if (!reply || !reply.trim()) {
      showToast('AI returned empty response', 'ochre');
      return;
    }

    if (options.isWholeNote) {
      const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : getActiveNote();
      if (!note) return;
      if (typeof stampNoteSnapshot === 'function') stampNoteSnapshot(false, 'Pre-AI Note Polish');
      if (typeof takeSnapshot === 'function') takeSnapshot('aiPolishWholeNote');
      const paragraphs = reply.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
      if (paragraphs.length > 0) {
        note.blocks = paragraphs.map(p => ({
          id: generateId('b'),
          type: 'paragraph',
          content: p
        }));
        note.updatedAt = new Date().toISOString();
        if (typeof renderBlocks === 'function') renderBlocks(note);
        if (typeof updateWordCount === 'function') updateWordCount(note);
        if (typeof persistState === 'function') persistState();
        if (typeof playSparkleSound === 'function') playSparkleSound();
        showToast('Document polished with AI (Undo: Ctrl+Z)');
      }
    } else {
      const target = options.targetText || rawText;
      const ok = typeof replaceTextInActiveNote === 'function'
        ? replaceTextInActiveNote(target, reply, options.preferredBlockId)
        : false;
      if (ok) {
        if (typeof playSparkleSound === 'function') playSparkleSound();
        showToast('AI Polish applied (Undo: Ctrl+Z)');
      } else {
        // Fallback: replace target block or selection directly
        if (options.preferredBlockId) {
          const note = getActiveNote();
          const blk = (note.blocks || []).find(b => b.id === options.preferredBlockId);
          if (blk) {
            blk.content = reply;
            if (typeof renderBlocks === 'function') renderBlocks(note);
            if (typeof persistState === 'function') persistState();
            showToast('AI Polish applied (Undo: Ctrl+Z)');
          }
        } else {
          showToast('Could not locate text in note to replace', 'ochre');
        }
      }
    }
  } catch (err) {
    console.error('runInPlaceAiPolishText error:', err);
    showToast(`AI Polish error: ${err.message || 'Network error'}`, 'vermilion');
  }
}

function insertGroqReplyIntoNote(msgIdx, replaceExisting = false) {
  const msg = pkGroqHistory[msgIdx];
  if (!msg || !msg.content || msg.isError) return;
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note) return;

  // Safe routing: if this message targeted a selection or block, do not wipe out the whole note!
  if (replaceExisting) {
    if (msg.targetSelection) {
      replaceTargetSelectionWithGroqReply(msgIdx);
      return;
    }
    if (msg.targetBlockId && (note.blocks || []).length > 1) {
      replaceTargetBlockWithGroqReply(msgIdx);
      return;
    }
  }

  const newBlocks = parseMarkdownToPKBlocks(msg.content);
  if (newBlocks.length === 0) return;

  if (replaceExisting && typeof stampNoteSnapshot === 'function') {
    stampNoteSnapshot(false, 'Pre-AI Note Rewrite');
  }
  if (typeof takeSnapshot === 'function') takeSnapshot(replaceExisting ? 'groqReplace' : 'groqAppend');

  if (replaceExisting) {
    note.blocks = newBlocks;
  } else {
    note.blocks.push(...newBlocks);
  }
  note.updatedAt = new Date().toISOString();
  if (typeof setAppMode === 'function') setAppMode('workspace');
  if (typeof renderBlocks === 'function') renderBlocks(note);
  if (typeof persistState === 'function') persistState();
  if (typeof showToast === 'function') {
    showToast(replaceExisting
      ? 'Replaced note with cleaned AI text (previous version saved in Time-Capsule)'
      : `Inserted ${newBlocks.length} block(s) into note`);
  }
}

function createNewNoteFromGroqReply(msgIdx) {
  const msg = pkGroqHistory[msgIdx];
  if (!msg || !msg.content || msg.isError) return;
  const blocks = parseMarkdownToPKBlocks(msg.content);
  if (blocks.length === 0) return;

  let title = 'AI Draft';
  if (blocks[0].type === 'h1' || blocks[0].type === 'h2') {
    title = blocks[0].content.slice(0, 64);
    blocks.shift();
  } else {
    title = blocks[0].content.slice(0, 48);
  }

  if (typeof createNewNote === 'function') {
    createNewNote('General');
    const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
    if (note) {
      note.title = title;
      note.blocks = blocks.length > 0 ? blocks : [{ id: generateId('b'), type: 'paragraph', content: stripSpecialBlocksForDisplay(msg.content, false) }];
      if (typeof renderAll === 'function') renderAll();
      if (typeof persistState === 'function') persistState();
    }
  }
  closeGroqAssistant();
  if (typeof showToast === 'function') showToast(`Created note "${title}"`);
}

function sendGroqFlashcardsToStudyDeck(msgIdx) {
  insertGroqReplyIntoNote(msgIdx, false);
  closeGroqAssistant();
  if (typeof openStudyDeckModal === 'function') openStudyDeckModal('note');
}

function readGroqReplyAloud(msgIdx) {
  const msg = pkGroqHistory[msgIdx];
  if (!msg || !msg.content || msg.isError) return;
  const clean = stripSpecialBlocksForDisplay(msg.content, false);
  if (clean && typeof readTextAloud === 'function') {
    readTextAloud(clean, 'AI Assistant');
  }
}

function copyGroqReply(msgIdx) {
  const msg = pkGroqHistory[msgIdx];
  if (!msg || !msg.content) return;
  const clean = stripSpecialBlocksForDisplay(msg.content, false);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(clean).then(() => {
      if (typeof showToast === 'function') showToast('Copied AI reply');
    }).catch(() => {});
  }
}

function addGroqSuggestedEvent(msgIdx, evtIdx) {
  const msg = pkGroqHistory[msgIdx];
  if (!msg || !msg.eventPayloads || !msg.eventPayloads[evtIdx]) return;
  const payload = msg.eventPayloads[evtIdx];
  const dateKey = /^\d{4}-\d{2}-\d{2}$/.test(payload.date || '') ? payload.date : new Date().toISOString().slice(0, 10);
  const startTime = /^\d{2}:\d{2}$/.test(payload.start || '') ? payload.start : '09:00';
  const endTime = /^\d{2}:\d{2}$/.test(payload.end || '') ? payload.end : '10:00';

  if (typeof state !== 'undefined' && Array.isArray(state.events)) {
    const providerLabel = (PK_AI_PROVIDERS[msg.provider] && PK_AI_PROVIDERS[msg.provider].shortName) || 'AI';
    const newEvt = {
      id: generateId('evt'),
      title: String(payload.title || 'Scheduled Event').slice(0, 80),
      start_datetime: `${dateKey}T${startTime}:00`,
      end_datetime: `${dateKey}T${endTime}:00`,
      all_day: !payload.start,
      location: payload.location || '',
      notes: `Created via PK AI Assistant (${providerLabel})`,
      color_code: '#D95338'
    };
    state.events.push(newEvt);
    if (typeof renderAll === 'function') renderAll();
    if (typeof persistState === 'function') persistState();
    if (typeof showToast === 'function') showToast(`Added "${newEvt.title}" on ${dateKey} at ${startTime}`);
  }
}

function retryLastAiPrompt(msgIdx) {
  const msg = pkGroqHistory[msgIdx];
  const promptText = msg && msg.retryPrompt ? msg.retryPrompt : '';
  if (!promptText) return;
  const targetSel = msg.targetSelection || '';
  const targetBlk = msg.targetBlockId || null;
  // Remove the failed assistant message (and duplicate preceding user message) before retrying
  pkGroqHistory.splice(msgIdx, 1);
  if (msgIdx > 0 && pkGroqHistory[msgIdx - 1] && pkGroqHistory[msgIdx - 1].role === 'user' && pkGroqHistory[msgIdx - 1].content === promptText) {
    pkGroqHistory.splice(msgIdx - 1, 1);
  }
  if (targetSel || targetBlk) {
    setAiTarget(targetSel, targetBlk);
  }
  sendGroqPrompt(promptText);
}

// ============================================================================
// MESSAGE RENDERING & SMOOTH RAF-BATCHED SSE STREAMING
// ============================================================================
function renderGroqMessages() {
  const box = document.getElementById('pkGroqMessages');
  if (!box) return;
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);
  const ready = isProviderReady(spec.id, data);

  if (pkGroqHistory.length === 0) {
    let helperCopy = '';
    if (spec.id === 'local') {
      helperCopy = `Ready for your local model (${data.model} at ${data.baseUrl}). Tap "Scan local models" in Setup to auto-detect Ollama, LM Studio, llama.cpp, or Jan.`;
    } else if (ready) {
      helperCopy = `Connected to ${spec.name} (${data.model.split('/').pop()}). Ask anything about your active note, vault, or schedule — or tap a quick action above.`;
    } else {
      helperCopy = `Add your ${spec.name} API key above (saved only on this device) — or switch to Groq, NVIDIA AI, or your Local Model in Setup.`;
    }

    box.innerHTML = `
      <div class="py-6 px-3 text-center space-y-3">
        <div class="w-10 h-10 mx-auto rounded-lg bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] flex items-center justify-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/></svg>
        </div>
        <div class="space-y-1">
          <div class="font-serif font-semibold text-sm text-[var(--text-primary)]">Your PK Note AI Partner</div>
          <div class="font-mono text-[10px] text-[var(--text-tertiary)] leading-relaxed max-w-xs mx-auto">${escapeHtml(helperCopy)}</div>
        </div>
      </div>
    `;
    return;
  }

  box.innerHTML = pkGroqHistory.map((m, idx) => {
    if (m.role === 'user') {
      return `
        <div class="flex justify-end">
          <div class="max-w-[88%] px-3 py-2 rounded-xl rounded-br-[3px] bg-[var(--accent-vermilion)] text-white text-xs leading-relaxed whitespace-pre-wrap break-words">${escapeHtml(m.content)}</div>
        </div>
      `;
    }

    const display = stripSpecialBlocksForDisplay(m.content, !!m.streaming);
    const hasFlashcards = !m.isError && display.includes('::');
    const eventCards = (m.eventPayloads || []).map((ev, ei) => `
      <button type="button" onclick="addGroqSuggestedEvent(${idx}, ${ei})"
              class="w-full mt-2 px-3 py-2 rounded-lg bg-[var(--accent-vermilion-tint)] border border-[var(--accent-vermilion)]/50 text-left flex items-center justify-between gap-2 cursor-pointer">
        <div class="min-w-0">
          <div class="font-mono text-[10px] font-semibold text-[var(--accent-vermilion)] truncate">+ Add Calendar Event</div>
          <div class="font-serif text-xs text-[var(--text-primary)] truncate">${escapeHtml(ev.title)} · ${escapeHtml(ev.date || 'Today')} ${escapeHtml(ev.start || '')}</div>
        </div>
        <span class="font-mono text-[10px] font-semibold text-[var(--accent-vermilion)] shrink-0">Add</span>
      </button>
    `).join('');

    const memoryBadges = (m.savedMemories || []).map(mem => `
      <div class="mt-2 px-2.5 py-1.5 rounded-[5px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] flex items-center justify-between gap-2 font-mono text-[9.5px]">
        <span class="text-[var(--text-secondary)] truncate"><span class="text-[var(--accent-vermilion)] font-semibold">Remembered:</span> ${escapeHtml(mem.text)}</span>
        <button type="button" onclick="undoSavedAiMemory(${idx}, '${escapeHtml(mem.id)}')" class="text-[var(--text-tertiary)] hover:text-rose-500 shrink-0 cursor-pointer">Undo</button>
      </div>
    `).join('');

    let actionsBar = '';
    if (!m.streaming) {
      if (m.isError) {
        actionsBar = `
          <div class="flex flex-wrap items-center gap-1.5 pt-2 mt-2 border-t border-[var(--border-hairline)] font-mono text-[9.5px]">
            ${m.retryPrompt ? `<button type="button" onclick="retryLastAiPrompt(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer">Retry</button>` : ''}
            <button type="button" onclick="toggleGroqSettingsPanel()" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-primary)] cursor-pointer">Open Setup</button>
          </div>
        `;
      } else {
        const hasSelectionTarget = !!m.targetSelection;
        const hasBlockTarget = !!m.targetBlockId;

        actionsBar = `
          <div class="flex flex-wrap items-center gap-1 pt-2 mt-2 border-t border-[var(--border-hairline)] font-mono text-[9.5px]">
            ${hasSelectionTarget ? `
              <button type="button" onclick="replaceTargetSelectionWithGroqReply(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--accent-vermilion)] hover:opacity-90 text-white font-semibold cursor-pointer shadow-xs">Replace Selection</button>
            ` : hasBlockTarget ? `
              <button type="button" onclick="replaceTargetBlockWithGroqReply(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--accent-vermilion)] hover:opacity-90 text-white font-semibold cursor-pointer shadow-xs">Replace Block</button>
            ` : `
              <button type="button" onclick="insertGroqReplyIntoNote(${idx}, true)" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer" title="Replace note with cleaned AI text">Replace</button>
            `}
            <button type="button" onclick="insertGroqReplyIntoNote(${idx}, false)" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-primary)] cursor-pointer">Insert Below</button>
            ${hasSelectionTarget || hasBlockTarget ? `
              <button type="button" onclick="insertGroqReplyIntoNote(${idx}, true)" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] cursor-pointer" title="Replace entire note with AI text">Replace Note</button>
            ` : ''}
            <button type="button" onclick="createNewNoteFromGroqReply(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer">New Note</button>
            ${hasFlashcards ? `<button type="button" onclick="sendGroqFlashcardsToStudyDeck(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer">Study Deck</button>` : ''}
            <button type="button" onclick="rememberGroqReply(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer">Remember</button>
            <button type="button" onclick="readGroqReplyAloud(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--accent-vermilion)] cursor-pointer">Read</button>
            <button type="button" onclick="copyGroqReply(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-tertiary)] cursor-pointer">Copy</button>
          </div>
        `;
      }
    }

    const bubbleBorder = m.isError ? 'border-rose-500/40 bg-rose-500/5' : 'border-[var(--border-hairline)] bg-[var(--bg-canvas)]';
    const placeholderStatus = m.streaming ? (m.isReasoning ? 'Reasoning...' : 'Thinking...') : '';

    const recalledNote = !m.streaming && !m.isError && m.recalledMeta
      ? `<div class="mt-1.5 font-mono text-[9px] text-[var(--text-tertiary)]">${escapeHtml(m.recalledMeta)}</div>`
      : '';

    return `
      <div class="flex justify-start">
        <div class="max-w-[94%] w-full px-3 py-2.5 rounded-xl rounded-bl-[3px] border ${bubbleBorder} text-[var(--text-primary)]">
          <div id="pkGroqMsgBody_${idx}" class="text-xs leading-relaxed whitespace-pre-wrap break-words font-sans">${escapeHtml(display || placeholderStatus)}</div>
          ${memoryBadges}
          ${eventCards}
          ${recalledNote}
          ${actionsBar}
        </div>
      </div>
    `;
  }).join('');

  box.scrollTop = box.scrollHeight;
}

function setGroqStreamingButtons(streaming) {
  pkGroqIsStreaming = streaming;
  const sendBtn = document.getElementById('pkGroqSendBtn');
  const stopBtn = document.getElementById('pkGroqStopBtn');
  if (sendBtn) sendBtn.classList.toggle('hidden', streaming);
  if (stopBtn) stopBtn.classList.toggle('hidden', !streaming);
}

function abortGroqStream() {
  if (pkGroqAbortController) {
    try { pkGroqAbortController.abort(); } catch (_) {}
    pkGroqAbortController = null;
  }
  setGroqStreamingButtons(false);
}

function handleGroqPromptKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendGroqPrompt();
  }
}

function runGroqQuickAction(kind) {
  if (kind === 'scankeys') {
    openApiKeyScannerModal(true);
    return;
  }
  const currentSel = typeof getReadableSelectedText === 'function' ? getReadableSelectedText(true) : '';
  const currentBlockId = typeof activeEditingBlockId !== 'undefined' ? activeEditingBlockId : null;

  if (kind === 'polish' && currentSel) {
    setAiTarget(currentSel, currentBlockId);
    sendGroqPrompt('Polish and refine the selected text so it reads naturally, clearly, and professionally, like authentic human prose. Eliminate awkward phrasing and stiff clichés while preserving the original intent. Return ONLY the polished replacement text.');
    return;
  }

  const prompts = {
    summarize: 'Provide a concise, thoughtful summary of this note. Focus on the core ideas directly and clearly, without generic AI boilerplate.',
    polish: 'Polish this note so it reads naturally, clearly, and professionally. Smooth out awkward sentences and eliminate stiff phrasing while keeping the original voice and meaning intact. Return ONLY the updated text.',
    todos: 'Extract actionable items from this note as a clean checkbox list (- [ ] ...). Keep each task clear and concise.',
    flashcards: 'Extract key concepts from this note into clear, effective study flashcards. Format each on its own line as: Question :: Answer',
    continue: 'Continue writing the next 1-2 paragraphs seamlessly in the same natural, professional voice and train of thought.',
    schedule: 'Review my schedule and notes, and synthesize a clear, realistic plan for today.'
  };
  if (kind === 'schedule') setGroqContextScope('vault');
  else if (pkGroqContextScope === 'general') setGroqContextScope('note');
  sendGroqPrompt(prompts[kind] || prompts.summarize);
}

function parseSseDataLine(line, stateObj) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith(':')) return false;
  if (!trimmed.startsWith('data:')) return false;
  const payload = trimmed.slice(5).trim();
  if (!payload || payload === '[DONE]') return false;
  try {
    const parsed = JSON.parse(payload);
    if (parsed && parsed.error && parsed.error.message) {
      throw new Error(parsed.error.message);
    }
    const choice = parsed && parsed.choices && parsed.choices[0];
    const deltaContent = choice && choice.delta && typeof choice.delta.content === 'string'
      ? choice.delta.content
      : (choice && choice.message && typeof choice.message.content === 'string' ? choice.message.content : '');
    const deltaReason = choice && choice.delta && typeof choice.delta.reasoning_content === 'string'
      ? choice.delta.reasoning_content
      : (choice && choice.delta && typeof choice.delta.reasoning === 'string' ? choice.delta.reasoning : '');
    if (deltaReason) {
      stateObj.reasoning += deltaReason;
      stateObj.isReasoning = true;
    }
    if (deltaContent) {
      stateObj.content += deltaContent;
      stateObj.isReasoning = false;
      return true;
    }
    return !!deltaReason;
  } catch (e) {
    if (e && e.message && !/JSON|Unexpected/i.test(e.message)) throw e;
    return false;
  }
}

async function sendGroqPrompt(overrideText) {
  if (pkGroqIsStreaming) return;
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);

  if (spec.requiresKey && !data.apiKey) {
    const panel = document.getElementById('pkGroqSettingsPanel');
    if (panel) panel.classList.remove('hidden');
    const inp = document.getElementById('pkGroqApiKeyInput');
    if (inp) inp.focus();
    if (typeof showToast === 'function') showToast(`Add your ${spec.shortName} API key (${spec.keyPlaceholder}) first`, 'ochre');
    return;
  }

  const promptEl = document.getElementById('pkGroqPromptInput');
  const userText = (typeof overrideText === 'string' ? overrideText : (promptEl ? promptEl.value : '')).trim();
  if (!userText) return;
  if (!overrideText && promptEl) promptEl.value = '';

  let promptTargetSelection = pkAiTargetSelection;
  let promptTargetBlockId = pkAiTargetBlockId;

  // If user typed a natural replace query like: replace "foo" with "bar"
  if (!promptTargetSelection) {
    const replaceMatch = userText.match(/(?:replace|change|swap)\s+["'“]([^"'”]+)["'”]\s+(?:with|to)\s+["'“]([^"'”]+)["'”]/i);
    if (replaceMatch) {
      promptTargetSelection = replaceMatch[1].trim();
    }
  }
  // Clear target badge from input bar so future unrelated prompts don't inherit it
  clearAiTarget();

  pkGroqHistory.push({ role: 'user', content: userText });
  const assistantIdx = pkGroqHistory.length;
  pkGroqHistory.push({
    role: 'assistant',
    content: '',
    streaming: true,
    isReasoning: false,
    isError: false,
    provider: spec.id,
    retryPrompt: userText,
    targetSelection: promptTargetSelection,
    targetBlockId: promptTargetBlockId,
    eventPayloads: []
  });
  renderGroqMessages();

  setGroqStreamingButtons(true);
  pkGroqAbortController = new AbortController();

  // Clean history of this full chat (excluding prior failed error bubbles)
  const cleanFullChat = pkGroqHistory
    .slice(0, -1)
    .filter(m => !m.isError && m.content);

  // Recall long-term memories + earlier turns in THIS chat + relevant moments ACROSS ALL PAST CHATS via Orama Hybrid Search
  const RECENT_WINDOW = 16;
  let recalledCtx = { memories: [], openingTopic: '', earlierInThisChat: [], acrossChats: [], recentThreads: [] };
  if (window.PKMemory && typeof window.PKMemory.recallContext === 'function') {
    try {
      recalledCtx = await window.PKMemory.recallContext(userText, cleanFullChat, { recentWindow: RECENT_WINDOW });
    } catch (_) {}
  }

  // Build subtle recall metadata tag if memory/cross-chat was used
  const metaParts = [];
  if (recalledCtx.memories.length > 0) metaParts.push(`${recalledCtx.memories.length} mem`);
  if (recalledCtx.earlierInThisChat.length > 0) metaParts.push(`${recalledCtx.earlierInThisChat.length} earlier turn`);
  if (recalledCtx.acrossChats.length > 0) metaParts.push(`${recalledCtx.acrossChats.length} past chat`);
  if (metaParts.length > 0) {
    pkGroqHistory[assistantIdx].recalledMeta = `Recalled: ${metaParts.join(' · ')}`;
  }

  // Send recent 16 messages verbatim + whole-chat & cross-chat Orama recall in system prompt
  const recentTurns = cleanFullChat
    .slice(-RECENT_WINDOW)
    .map(m => ({ role: m.role, content: stripSpecialBlocksForDisplay(m.content, false) || m.content }));

  const messages = [
    { role: 'system', content: buildGroqSystemPrompt(recalledCtx, promptTargetSelection, promptTargetBlockId) },
    ...recentTurns
  ];

  let rafPending = false;
  const flushStreamDom = () => {
    rafPending = false;
    const msgObj = pkGroqHistory[assistantIdx];
    if (!msgObj) return;
    const bodyEl = document.getElementById(`pkGroqMsgBody_${assistantIdx}`);
    const box = document.getElementById('pkGroqMessages');
    if (bodyEl) {
      const visible = stripSpecialBlocksForDisplay(msgObj.content, true);
      bodyEl.textContent = visible || (msgObj.isReasoning ? 'Reasoning...' : 'Thinking...');
    }
    if (box) box.scrollTop = box.scrollHeight;
  };

  try {
    let endpoints = buildProviderEndpoints(spec.id, data.baseUrl);
    let activeModel = data.model || spec.defaultModel;
    const doChatFetch = (chatUrl, modelId) => fetch(chatUrl, {
      method: 'POST',
      headers: buildAuthHeaders(data.apiKey),
      signal: pkGroqAbortController.signal,
      body: JSON.stringify({
        model: modelId,
        messages,
        stream: true,
        temperature: 0.75,
        max_tokens: 2048
      })
    });

    let res;
    try {
      res = await doChatFetch(endpoints.chatUrl, activeModel);
    } catch (firstErr) {
      if (spec.id === 'local' && !(firstErr && firstErr.name === 'AbortError')) {
        const detected = await autoDetectRunningLocalServer(data.baseUrl, data.apiKey);
        if (detected) {
          data.baseUrl = detected.baseUrl;
          if (detected.models.length > 0) {
            data.discoveredModels = detected.models;
            if (!detected.models.includes(activeModel)) {
              activeModel = detected.models[0];
              data.model = activeModel;
            }
          }
          saveAiConfig(cfg);
          syncGroqHeaderAndSettingsUI();
          endpoints = buildProviderEndpoints('local', data.baseUrl);
          res = await doChatFetch(endpoints.chatUrl, activeModel);
        } else {
          throw firstErr;
        }
      } else {
        throw firstErr;
      }
    }

    const extractStreamErr = (errJson, status) => {
      const obj = Array.isArray(errJson) ? errJson[0] : errJson;
      return obj?.error?.message || obj?.detail || obj?.title || `${spec.shortName} HTTP ${status}`;
    };

    if (!res.ok && spec.id !== 'local') {
      const errJson = await res.json().catch(() => ({}));
      const errMsg = extractStreamErr(errJson, res.status);
      if (res.status === 429) {
        // Automatic backup key rotation when 2+ keys are saved on this provider!
        const altKeys = (data.keys || []).filter(s => s && s.key && s.id !== data.activeKeyId);
        let rotated = false;
        for (const alt of altKeys) {
          data.activeKeyId = alt.id;
          data.apiKey = alt.key;
          saveAiConfig(cfg);
          syncGroqHeaderAndSettingsUI();
          if (typeof showToast === 'function') showToast(`Rate-limited (429) — auto-switched to ${alt.label}`, 'ochre');
          res = await doChatFetch(endpoints.chatUrl, activeModel);
          if (res.ok || res.status !== 429) {
            rotated = true;
            break;
          }
        }
        if (!rotated && !res.ok) throw new Error(errMsg);
      } else if (spec.id === 'gemini' && res.status === 503) {
        const gemFallbacks = ['gemini-3-flash-preview', 'gemini-3.1-flash-lite', 'gemini-3.5-flash-lite'].filter(m => m !== activeModel);
        for (const fb of gemFallbacks) {
          activeModel = fb;
          if (typeof showToast === 'function') showToast(`Model busy (503) — trying ${fb}`, 'ochre');
          res = await doChatFetch(endpoints.chatUrl, activeModel);
          if (res.ok || res.status !== 503) break;
        }
      } else if (isModelNotFoundError(res.status, errMsg)) {
        const liveModels = await discoverModelsForProvider(spec.id, data.baseUrl, data.apiKey).catch(() => []);
        const fallbackModel = liveModels.find(m => m !== activeModel && !(spec.id === 'gemini' && PK_RETIRED_GEMINI_MODELS.has(m)));
        if (fallbackModel) {
          activeModel = fallbackModel;
          data.model = fallbackModel;
          data.discoveredModels = liveModels;
          saveAiConfig(cfg);
          syncGroqHeaderAndSettingsUI();
          if (typeof showToast === 'function') showToast(`Switched to active model: ${fallbackModel.split('/').pop()}`);
          res = await doChatFetch(endpoints.chatUrl, activeModel);
        } else {
          throw new Error(errMsg);
        }
      } else {
        throw new Error(errMsg);
      }
    }

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      const errMsg = extractStreamErr(errJson, res.status);
      throw new Error(errMsg);
    }

    const contentType = (res.headers.get('content-type') || '').toLowerCase();
    const isJsonBody = contentType.includes('application/json');
    const reader = !isJsonBody && res.body && res.body.getReader ? res.body.getReader() : null;

    if (!reader) {
      const fullJson = await res.json();
      const choice = fullJson?.choices?.[0];
      pkGroqHistory[assistantIdx].content =
        choice?.message?.content ||
        fullJson?.message?.content ||
        choice?.message?.reasoning_content ||
        choice?.message?.reasoning ||
        '';
    } else {
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      let rawFallback = '';
      const streamState = { content: '', reasoning: '', isReasoning: false };

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          buffer += decoder.decode();
          break;
        }
        const chunk = decoder.decode(value, { stream: true });
        if (rawFallback.length < 16384) rawFallback += chunk;
        buffer += chunk;
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        let dirty = false;
        for (let i = 0; i < lines.length; i++) {
          if (parseSseDataLine(lines[i], streamState)) dirty = true;
        }
        if (dirty) {
          pkGroqHistory[assistantIdx].content = streamState.content;
          pkGroqHistory[assistantIdx].isReasoning = streamState.isReasoning;
          if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(flushStreamDom);
          }
        }
      }

      // Process any final buffered line after stream closes
      if (buffer.trim()) {
        parseSseDataLine(buffer, streamState);
      }

      // Fallback: if server returned plain JSON without text/event-stream framing
      if (!streamState.content && rawFallback.trim().startsWith('{')) {
        try {
          const parsedObj = JSON.parse(rawFallback.trim());
          if (parsedObj?.error?.message) throw new Error(parsedObj.error.message);
          streamState.content =
            parsedObj?.choices?.[0]?.message?.content ||
            parsedObj?.message?.content ||
            parsedObj?.choices?.[0]?.message?.reasoning_content ||
            '';
        } catch (e) {
          if (e && e.message && !/JSON|Unexpected/i.test(e.message)) throw e;
        }
      }

      pkGroqHistory[assistantIdx].content = streamState.content || streamState.reasoning || '';
    }

    if (!stripSpecialBlocksForDisplay(pkGroqHistory[assistantIdx].content, false)) {
      pkGroqHistory[assistantIdx].content = `(${spec.shortName} returned an empty response — try increasing prompt clarity or switching models.)`;
      pkGroqHistory[assistantIdx].isError = true;
    }

    pkGroqHistory[assistantIdx].streaming = false;
    pkGroqHistory[assistantIdx].isReasoning = false;
    pkGroqHistory[assistantIdx].eventPayloads = pkGroqHistory[assistantIdx].isError
      ? []
      : extractEventPayloadsFromText(pkGroqHistory[assistantIdx].content);

    // Save extracted AI memories + explicit user "remember that..." statements into Dexie + Orama
    const savedMemList = [];
    if (!pkGroqHistory[assistantIdx].isError && window.PKMemory && window.PKMemory.getSettings().autoSave) {
      const candidates = extractMemoryPayloadsFromText(pkGroqHistory[assistantIdx].content);
      const explicitMem = window.PKMemory.detectExplicit(userText);
      if (explicitMem && candidates.length === 0) candidates.push(explicitMem);
      for (let i = 0; i < candidates.length; i++) {
        try {
          const added = await window.PKMemory.add(candidates[i].text, {
            category: candidates[i].category,
            source: 'auto'
          });
          if (added && added.memory) {
            savedMemList.push({ id: added.memory.id, text: added.memory.text, category: added.memory.category });
          }
        } catch (_) {}
      }
      if (savedMemList.length > 0) updateAiMemoryBadge();
    }
    pkGroqHistory[assistantIdx].savedMemories = savedMemList;
    if (window.PKMemory && typeof window.PKMemory.saveChatHistory === 'function') {
      await window.PKMemory.saveChatHistory(pkGroqHistory);
      updateAiMemoryBadge();
    }
    renderGroqMessages();
  } catch (err) {
    pkGroqHistory[assistantIdx].streaming = false;
    pkGroqHistory[assistantIdx].isReasoning = false;
    if (err && err.name === 'AbortError') {
      if (!pkGroqHistory[assistantIdx].content) pkGroqHistory[assistantIdx].content = '(Stopped)';
    } else {
      const friendly = formatAiConnectionError(err, spec.id, data.baseUrl, data.model);
      pkGroqHistory[assistantIdx].content = `${spec.shortName} error: ${friendly}`;
      pkGroqHistory[assistantIdx].isError = true;
      if (typeof showToast === 'function') showToast(`${spec.shortName}: ${friendly.slice(0, 80)}`, 'ochre');
    }
    renderGroqMessages();
  } finally {
    pkGroqAbortController = null;
    setGroqStreamingButtons(false);
  }
}

// ============================================================================
// API KEY SCANNER, DEDUPLICATOR & ORGANIZER ENGINE
// ============================================================================
let pkLastKeyScanResult = null;

function scanAndAnalyzeApiKeys(rawText) {
  if (!rawText || typeof rawText !== 'string') {
    return { totalFound: 0, uniqueCount: 0, duplicateCount: 0, fixedCount: 0, categories: {}, allKeys: [] };
  }

  const providerDefinitions = [
    {
      name: 'Google Gemini',
      id: 'gemini',
      isSupportedInPk: true,
      regex: /(?:AIzaSy[A-Za-z0-9_-]{33}|AQ\.[A-Za-z0-9_-]{20,})/g,
      validate: (k) => {
        const issues = [];
        if (k.startsWith('AIzaSy') && k.length !== 39) issues.push(`Non-standard length (${k.length} chars, standard is 39)`);
        return issues;
      }
    },
    {
      name: 'Groq Cloud',
      id: 'groq',
      isSupportedInPk: true,
      regex: /gsk_[A-Za-z0-9]{45,64}/g,
      validate: (k) => {
        const issues = [];
        if (k.length < 52) issues.push(`Shorter than standard Groq key (${k.length} chars, standard ~56)`);
        return issues;
      }
    },
    {
      name: 'OpenRouter',
      id: 'openrouter',
      isSupportedInPk: true,
      regex: /(?:sk-or-v1-[a-f0-9]{64}|sk-or-[A-Za-z0-9_-]{32,})/g,
      validate: (k) => {
        const issues = [];
        if (k.startsWith('sk-or-v1-') && k.length !== 73) issues.push(`Non-standard length (${k.length} chars, expected 73)`);
        return issues;
      }
    },
    {
      name: 'NVIDIA NIM',
      id: 'nvidia',
      isSupportedInPk: true,
      regex: /nvapi-[A-Za-z0-9_-]{40,}/g,
      validate: () => []
    },
    {
      name: 'OpenAI (Project)',
      id: 'openai_proj',
      isSupportedInPk: false,
      regex: /sk-proj-[A-Za-z0-9_-]{48,}/g,
      validate: () => []
    },
    {
      name: 'OpenAI (Admin)',
      id: 'openai_admin',
      isSupportedInPk: false,
      regex: /sk-admin-[A-Za-z0-9_-]{48,}/g,
      validate: () => []
    },
    {
      name: 'Anthropic Claude',
      id: 'anthropic',
      isSupportedInPk: false,
      regex: /(?:sk-ant-api03-[A-Za-z0-9_-]{80,}|sk-ant-admin01-[A-Za-z0-9_-]{80,}|sk-ant-[A-Za-z0-9_-]{32,})/g,
      validate: () => []
    },
    {
      name: 'DeepSeek',
      id: 'deepseek',
      isSupportedInPk: false,
      regex: /sk-[a-f0-9]{32}(?![a-zA-Z0-9_-])/g,
      validate: (k) => {
        const issues = [];
        if (k.length !== 35) issues.push(`DeepSeek keys are exactly 35 characters ('sk-' + 32 hex)`);
        return issues;
      }
    },
    {
      name: 'OpenAI (Standard)',
      id: 'openai_std',
      isSupportedInPk: false,
      regex: /sk-[A-Za-z0-9]{48,52}/g,
      validate: () => []
    },
    {
      name: 'Perplexity AI',
      id: 'perplexity',
      isSupportedInPk: false,
      regex: /pplx-[a-f0-9]{48}/g,
      validate: (k) => {
        const issues = [];
        if (k.length !== 53) issues.push(`Perplexity keys are 53 characters ('pplx-' + 48 hex)`);
        return issues;
      }
    },
    {
      name: 'Cerebras',
      id: 'cerebras',
      isSupportedInPk: false,
      regex: /csk-[a-zA-Z0-9_-]{32,}/g,
      validate: () => []
    },
    {
      name: 'Hugging Face',
      id: 'huggingface',
      isSupportedInPk: false,
      regex: /hf_[A-Za-z0-9]{34,}/g,
      validate: () => []
    },
    {
      name: 'GitHub Token',
      id: 'github',
      isSupportedInPk: false,
      regex: /(?:ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{82})/g,
      validate: () => []
    }
  ];

  // Pre-process: detect keys with accidental internal spaces/breaks (e.g. copied from wrapped terminal)
  let processedText = rawText;
  const spacedCandidateRegex = /\b(gsk_|AIzaSy|sk-or-v1-|sk-proj-|nvapi-|sk-ant-api03-|pplx-)([A-Za-z0-9_ -]{30,120})\b/g;
  let spaceMatch;
  while ((spaceMatch = spacedCandidateRegex.exec(rawText)) !== null) {
    const rawMatch = spaceMatch[0];
    if (/\s+/.test(rawMatch)) {
      processedText += `\n${rawMatch.replace(/\s+/g, '')}`;
    }
  }

  // Also parse environment variable assignments (e.g. MISTRAL_API_KEY=..., COHERE_API_KEY=...)
  const envVarMap = new Map();
  const envRegex = /(?:^|[\r\n])\s*(?:export\s+)?([A-Z0-9_]*(?:API_KEY|TOKEN|SECRET|KEY)[A-Z0-9_]*)\s*[:=]\s*["']?([A-Za-z0-9_\-\.]{16,128})["']?/gi;
  let envMatch;
  while ((envMatch = envRegex.exec(rawText)) !== null) {
    const varName = (envMatch[1] || '').toUpperCase();
    const val = (envMatch[2] || '').trim();
    if (val && !envVarMap.has(val)) {
      envVarMap.set(val, varName);
    }
  }

  const seenMap = new Map();
  let duplicateCount = 0;
  let fixedCount = 0;

  for (const def of providerDefinitions) {
    let match;
    const re = new RegExp(def.regex.source, def.regex.flags);
    while ((match = re.exec(processedText)) !== null) {
      const rawKey = match[0];
      const cleanedKey = rawKey
        .replace(/[.,;:"')\]}>]+$/, '')
        .replace(/^[.,;:"'(\[{<]+/, '')
        .trim();
      if (!cleanedKey) continue;

      if (cleanedKey !== rawKey) fixedCount++;

      if (seenMap.has(cleanedKey)) {
        duplicateCount++;
        continue;
      }

      const issues = def.validate(cleanedKey);
      if (/your[_-]?api[_-]?key|placeholder|test[_-]?key|xxxx+/i.test(cleanedKey)) {
        issues.push('Insecure / Dummy Key (contains placeholder pattern)');
      }

      seenMap.set(cleanedKey, {
        key: cleanedKey,
        provider: def.name,
        providerId: def.id,
        isSupportedInPk: def.isSupportedInPk,
        issues
      });
    }
  }

  // Check any remaining environment variable assignments not matched by prefix regexes
  for (const [val, varName] of envVarMap.entries()) {
    const cleanedVal = val.replace(/[.,;:"')\]}>]+$/, '').replace(/^[.,;:"'(\[{<]+/, '').trim();
    if (seenMap.has(cleanedVal)) continue;

    let provName = 'Generic API Key';
    let provId = 'generic';
    let isSupp = false;

    if (varName.includes('GEMINI')) { provName = 'Google Gemini'; provId = 'gemini'; isSupp = true; }
    else if (varName.includes('GROQ')) { provName = 'Groq Cloud'; provId = 'groq'; isSupp = true; }
    else if (varName.includes('OPENROUTER')) { provName = 'OpenRouter'; provId = 'openrouter'; isSupp = true; }
    else if (varName.includes('NVIDIA')) { provName = 'NVIDIA NIM'; provId = 'nvidia'; isSupp = true; }
    else if (varName.includes('OPENAI')) { provName = 'OpenAI'; provId = 'openai'; }
    else if (varName.includes('ANTHROPIC') || varName.includes('CLAUDE')) { provName = 'Anthropic Claude'; provId = 'anthropic'; }
    else if (varName.includes('DEEPSEEK')) { provName = 'DeepSeek'; provId = 'deepseek'; }
    else if (varName.includes('MISTRAL')) { provName = 'Mistral AI'; provId = 'mistral'; }
    else if (varName.includes('COHERE')) { provName = 'Cohere'; provId = 'cohere'; }
    else if (varName.includes('PERPLEXITY')) { provName = 'Perplexity AI'; provId = 'perplexity'; }
    else if (varName.includes('CEREBRAS')) { provName = 'Cerebras'; provId = 'cerebras'; }
    else if (varName.includes('SAMBANOVA')) { provName = 'SambaNova'; provId = 'sambanova'; }
    else if (varName.includes('HUGGING') || varName.includes('HF_')) { provName = 'Hugging Face'; provId = 'huggingface'; }
    else if (varName.includes('GITHUB')) { provName = 'GitHub Token'; provId = 'github'; }

    const issues = [];
    if (/your[_-]?api[_-]?key|placeholder|test[_-]?key|xxxx+/i.test(cleanedVal)) {
      issues.push('Insecure / Dummy Key (contains placeholder pattern)');
    }

    seenMap.set(cleanedVal, {
      key: cleanedVal,
      provider: provName,
      providerId: provId,
      isSupportedInPk: isSupp,
      issues
    });
  }

  const allKeys = Array.from(seenMap.values());
  const categories = {};
  allKeys.forEach(item => {
    if (!categories[item.provider]) {
      categories[item.provider] = {
        providerName: item.provider,
        providerId: item.providerId,
        isSupportedInPk: item.isSupportedInPk,
        keys: []
      };
    }
    categories[item.provider].keys.push(item);
  });

  return {
    totalFound: allKeys.length + duplicateCount,
    uniqueCount: allKeys.length,
    duplicateCount,
    fixedCount,
    categories,
    allKeys
  };
}

function openApiKeyScannerModal(prefillFromActiveNote = false) {
  const modal = document.getElementById('pkApiKeyScannerModal');
  const input = document.getElementById('pkApiKeyScannerInput');
  const results = document.getElementById('pkApiKeyScannerResults');
  if (!modal) return;

  modal.classList.remove('hidden');
  if (prefillFromActiveNote) {
    scanActiveNoteForKeys();
  } else if (input && !input.value.trim()) {
    if (results) results.classList.add('hidden');
    input.focus();
  }
}

function closeApiKeyScannerModal() {
  const modal = document.getElementById('pkApiKeyScannerModal');
  if (modal) modal.classList.add('hidden');
}

function clearApiKeyScannerInput() {
  const input = document.getElementById('pkApiKeyScannerInput');
  const results = document.getElementById('pkApiKeyScannerResults');
  if (input) {
    input.value = '';
    input.focus();
  }
  if (results) {
    results.innerHTML = '';
    results.classList.add('hidden');
  }
  pkLastKeyScanResult = null;
}

async function pasteClipboardToKeyScanner() {
  const input = document.getElementById('pkApiKeyScannerInput');
  if (!input) return;
  if (navigator.clipboard && typeof navigator.clipboard.readText === 'function') {
    try {
      const text = await navigator.clipboard.readText();
      if (!text || !text.trim()) {
        if (typeof showToast === 'function') showToast('Clipboard is empty', 'ochre');
        return;
      }
      input.value = text;
      runApiKeyScan();
      return;
    } catch (_) {}
  }
  input.focus();
  if (typeof showToast === 'function') showToast('Paste your text or keys into the box');
}

function scanActiveNoteForKeys() {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  const input = document.getElementById('pkApiKeyScannerInput');
  if (!note || !input) return;

  const lines = [note.title || ''];
  (note.blocks || []).forEach(b => {
    if (!b) return;
    if (b.content) lines.push(b.content);
    if (b.body) lines.push(b.body);
    if (Array.isArray(b.rows)) {
      lines.push(b.rows.flat().join(' '));
    }
  });

  input.value = lines.join('\n');
  runApiKeyScan();
  if (typeof showToast === 'function') showToast(`Loaded note "${note.title || 'Untitled'}" for scanning`);
}

function runApiKeyScan() {
  const input = document.getElementById('pkApiKeyScannerInput');
  const results = document.getElementById('pkApiKeyScannerResults');
  if (!input || !results) return;

  const rawText = input.value || '';
  const scanResult = scanAndAnalyzeApiKeys(rawText);
  pkLastKeyScanResult = scanResult;

  results.classList.remove('hidden');
  renderApiKeyScanResults(scanResult);
}

function renderApiKeyScanResults(scanResult) {
  const container = document.getElementById('pkApiKeyScannerResults');
  if (!container) return;

  if (scanResult.uniqueCount === 0) {
    container.innerHTML = `
      <div class="p-4 rounded-[4px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] text-center text-[var(--text-tertiary)] font-mono text-xs">
        No API keys detected. Paste your text, .env file, or raw keys above and click Scan.
      </div>
    `;
    return;
  }

  const supportedKeys = scanResult.allKeys.filter(k => k.isSupportedInPk);
  const catEntries = Object.values(scanResult.categories);

  let html = `
    <!-- Summary & Bulk Actions Bar -->
    <div class="p-3 rounded-[6px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] space-y-2.5">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="font-mono text-xs text-[var(--text-primary)]">
          Found <span class="text-[var(--accent-vermilion)] font-bold">${scanResult.uniqueCount}</span> unique API key${scanResult.uniqueCount === 1 ? '' : 's'} across <span class="font-bold">${catEntries.length}</span> provider${catEntries.length === 1 ? '' : 's'}
          ${scanResult.duplicateCount > 0 ? `<span class="text-[var(--accent-ochre)] font-semibold">(${scanResult.duplicateCount} duplicate${scanResult.duplicateCount === 1 ? '' : 's'} removed)</span>` : ''}
        </div>
        <div class="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
          <button type="button" onclick="copyOrganizedKeysMarkdown()" class="px-2.5 py-1 rounded-[3px] bg-[var(--bg-canvas)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-primary)] font-semibold cursor-pointer">
            Copy All (Code Blocks)
          </button>
          ${supportedKeys.length > 0 ? `
            <button type="button" onclick="importScannedKeysToPkNote()" class="px-2.5 py-1 rounded-[3px] bg-[var(--accent-vermilion)] hover:opacity-90 text-white font-semibold cursor-pointer shadow-xs">
              Import to PK Note (${supportedKeys.length})
            </button>
          ` : ''}
        </div>
      </div>
    </div>

    <!-- Provider Categories List -->
    <div class="space-y-3">
  `;

  catEntries.forEach(cat => {
    html += `
      <div class="p-3 rounded-[6px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] space-y-2">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-1.5 min-w-0">
            <span class="font-semibold text-xs text-[var(--text-primary)] truncate">${escapeHtml(cat.providerName)}</span>
            <span class="px-1.5 py-0.5 rounded-[2px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] font-mono text-[9px] text-[var(--text-secondary)]">${cat.keys.length} key${cat.keys.length === 1 ? '' : 's'}</span>
            ${cat.isSupportedInPk ? `<span class="px-1.5 py-0.5 rounded-[2px] bg-[var(--accent-vermilion-tint)] border border-[var(--accent-vermilion)]/40 font-mono text-[9px] text-[var(--accent-vermilion)] font-semibold">Active in PK Note</span>` : ''}
          </div>
        </div>

        <!-- Code Block for this Provider -->
        <div class="rounded-[4px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] overflow-hidden divide-y divide-[var(--border-hairline)]">
    `;

    cat.keys.forEach((item) => {
      const hasIssues = item.issues && item.issues.length > 0;
      const issuesText = hasIssues ? item.issues.join(' · ') : '';
      const safeJsKey = item.key.replace(/'/g, "\\'");

      html += `
        <div class="p-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div class="min-w-0 flex-1 space-y-0.5">
            <pre class="font-mono text-[11px] text-[var(--text-primary)] select-all whitespace-pre-wrap break-all overflow-x-auto leading-tight"><code>${escapeHtml(item.key)}</code></pre>
            ${hasIssues ? `
              <div class="font-mono text-[9.5px] text-amber-500 font-medium">${escapeHtml(issuesText)}</div>
            ` : ''}
          </div>
          <div class="flex items-center gap-1 shrink-0 font-mono text-[10px]">
            <button type="button" onclick="copySingleScannedKey('${safeJsKey}', this)" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer">
              Copy
            </button>
            ${item.isSupportedInPk ? `
              <button type="button" onclick="importSingleScannedKey('${safeJsKey}', '${cat.providerId}')" class="px-2 py-0.5 rounded-[3px] bg-[var(--accent-vermilion-tint)] hover:bg-[var(--bg-hover)] border border-[var(--accent-vermilion)]/40 text-[var(--accent-vermilion)] font-semibold cursor-pointer">
                Use in App
              </button>
            ` : ''}
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function copySingleScannedKey(keyText, btnEl) {
  const doFeedback = () => {
    if (btnEl) {
      const orig = btnEl.textContent;
      btnEl.textContent = 'Copied!';
      btnEl.classList.add('text-[var(--accent-vermilion)]');
      setTimeout(() => {
        btnEl.textContent = orig;
        btnEl.classList.remove('text-[var(--accent-vermilion)]');
      }, 1500);
    }
    if (typeof showToast === 'function') showToast('Copied key to clipboard');
  };

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(keyText).then(doFeedback).catch(() => {
      copyKeyFallbackText(keyText);
      doFeedback();
    });
  } else {
    copyKeyFallbackText(keyText);
    doFeedback();
  }
}

function copyOrganizedKeysMarkdown() {
  if (!pkLastKeyScanResult || !pkLastKeyScanResult.categories) return;
  const lines = ['# Organized API Keys', ''];
  Object.values(pkLastKeyScanResult.categories).forEach(cat => {
    lines.push(`## ${cat.providerName} (${cat.keys.length} key${cat.keys.length === 1 ? '' : 's'})`);
    lines.push('```');
    cat.keys.forEach(k => {
      lines.push(k.key);
    });
    lines.push('```');
    lines.push('');
  });

  const mdText = lines.join('\n').trim();
  const doFeedback = () => {
    if (typeof showToast === 'function') showToast('Copied organized keys with code blocks to clipboard');
  };

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(mdText).then(doFeedback).catch(() => {
      copyKeyFallbackText(mdText);
      doFeedback();
    });
  } else {
    copyKeyFallbackText(mdText);
    doFeedback();
  }
}

function copyKeyFallbackText(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
  } catch (_) {}
  document.body.removeChild(ta);
}

function importScannedKeysToPkNote() {
  if (!pkLastKeyScanResult || !pkLastKeyScanResult.allKeys) return;
  const supported = pkLastKeyScanResult.allKeys.filter(k => k.isSupportedInPk);
  if (supported.length === 0) {
    if (typeof showToast === 'function') showToast('No PK Note-supported keys found (Gemini, Groq, OpenRouter, NVIDIA)', 'ochre');
    return;
  }
  const cfg = loadAiConfig();
  let importedCount = 0;

  supported.forEach(item => {
    const pId = item.providerId;
    if (!cfg[pId]) return;
    if (!cfg[pId].keys) cfg[pId].keys = [];
    const exists = cfg[pId].keys.some(slot => slot.key === item.key);
    if (!exists) {
      const nextNum = cfg[pId].keys.length + 1;
      const newSlot = {
        id: makeAiKeyId(),
        label: `Key ${nextNum}`,
        key: item.key
      };
      cfg[pId].keys.push(newSlot);
      if (!cfg[pId].apiKey) {
        cfg[pId].apiKey = item.key;
        cfg[pId].activeKeyId = newSlot.id;
      }
      importedCount++;
    }
  });

  if (importedCount > 0) {
    saveAiConfig(cfg);
    syncGroqHeaderAndSettingsUI();
    if (typeof showToast === 'function') {
      showToast(`Imported ${importedCount} API key(s) into PK Note settings!`);
    }
    runApiKeyScan();
  } else {
    if (typeof showToast === 'function') {
      showToast('All supported keys are already saved in your settings');
    }
  }
}

function importSingleScannedKey(keyText, providerId) {
  const cfg = loadAiConfig();
  if (!cfg[providerId]) return;
  if (!cfg[providerId].keys) cfg[providerId].keys = [];
  const exists = cfg[providerId].keys.some(slot => slot.key === keyText);
  if (exists) {
    if (typeof showToast === 'function') showToast('Key is already in your settings');
    return;
  }
  const nextNum = cfg[providerId].keys.length + 1;
  const newSlot = {
    id: makeAiKeyId(),
    label: `Key ${nextNum}`,
    key: keyText
  };
  cfg[providerId].keys.push(newSlot);
  if (!cfg[providerId].apiKey) {
    cfg[providerId].apiKey = keyText;
    cfg[providerId].activeKeyId = newSlot.id;
  }
  saveAiConfig(cfg);
  syncGroqHeaderAndSettingsUI();
  if (typeof showToast === 'function') {
    showToast(`Added ${PK_AI_PROVIDERS[providerId].shortName} Key ${nextNum}`);
  }
  runApiKeyScan();
}

// Keyboard shortcut: Alt+A toggles AI Assistant, Esc closes it
document.addEventListener('keydown', (e) => {
  if (e.altKey && (e.key === 'a' || e.key === 'A')) {
    e.preventDefault();
    if (pkGroqDrawerOpen) closeGroqAssistant();
    else openGroqAssistant();
    return;
  }
  if (e.key === 'Escape') {
    const keyModal = document.getElementById('pkApiKeyScannerModal');
    if (keyModal && !keyModal.classList.contains('hidden')) {
      closeApiKeyScannerModal();
      return;
    }
    if (pkGroqDrawerOpen) {
      closeGroqAssistant();
    }
  }
});
