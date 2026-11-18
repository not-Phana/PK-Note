// ============================================================================
// PK NOTE — MULTI-PROVIDER AI ASSISTANT (Groq · NVIDIA AI · Local Model)
// 100% Client-Side BYOK & Local Server Support, SSE Streaming, Zero Emoji
// Full PK Note integration: Active Note, Vault, Calendar, Study Deck, Voice
// ============================================================================

const PK_AI_CONFIG_KEY = 'pk_note_ai_config_v2';
const PK_GROQ_LEGACY_CONFIG_KEY = 'pk_note_groq_config_v1';

const PK_AI_PROVIDERS = {
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
      { id: 'llama-3.3-70b-versatile', label: 'llama-3.3-70b-versatile (Best Overall)' },
      { id: 'llama-3.1-8b-instant', label: 'llama-3.1-8b-instant (Ultra-Fast)' },
      { id: 'meta-llama/llama-4-scout-17b-16e-instruct', label: 'llama-4-scout-17b-16e-instruct (Llama 4)' },
      { id: 'qwen/qwen3-32b', label: 'qwen/qwen3-32b (Deep Reasoning)' }
    ]
  },
  nvidia: {
    id: 'nvidia',
    name: 'NVIDIA AI',
    shortName: 'NVIDIA',
    defaultBaseUrl: 'https://integrate.api.nvidia.com/v1',
    defaultModel: 'nvidia/nemotron-3.5-lightning-30b-a3b',
    requiresKey: true,
    keyPlaceholder: 'nvapi-...',
    keyLabel: 'NVIDIA API Key (Saved Locally)',
    keyUrl: 'https://build.nvidia.com/explore/discover',
    keyLinkText: 'Get free key',
    models: [
      { id: 'nvidia/nemotron-3.5-lightning-30b-a3b', label: 'nemotron-3.5-lightning-30b-a3b (Fast)' },
      { id: 'google/gemma-4-31b-it', label: 'gemma-4-31b-it (Balanced)' },
      { id: 'nvidia/nemotron-3.5-super-vl-120b-a12b', label: 'nemotron-3.5-super-vl-120b-a12b (Super 120B)' },
      { id: 'nvidia/nemotron-3-ultra-550b-a55b', label: 'nemotron-3-ultra-550b-a55b (Ultra 550B)' },
      { id: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning', label: 'nemotron-3-nano-omni-30b (Reasoning)' },
      { id: 'mistralai/mistral-large-4-1t-a52b', label: 'mistral-large-4-1t-a52b (Mistral Large 4)' },
      { id: 'moonshotai/kimi-k3.1-pro', label: 'kimi-k3.1-pro (Kimi K3.1)' },
      { id: 'minimaxai/minimax-m3.1-flash', label: 'minimax-m3.1-flash (Fast)' },
      { id: 'z-ai/glm-5.3-flash', label: 'glm-5.3-flash (GLM 5.3)' },
      { id: 'google/gemma-3-12b-it', label: 'gemma-3-12b-it (Gemma 3 12B)' }
    ]
  },
  local: {
    id: 'local',
    name: 'Local Model',
    shortName: 'Local',
    defaultBaseUrl: 'http://localhost:1234/v1',
    defaultModel: 'google/gemma-4-e4b',
    requiresKey: false,
    keyPlaceholder: 'Optional — leave blank for LM Studio / Ollama',
    keyLabel: 'Local Token / Key (Optional)',
    keyUrl: '',
    keyLinkText: '',
    models: [
      { id: 'google/gemma-4-e4b', label: 'google/gemma-4-e4b (LM Studio · 7.5B)' },
      { id: 'qwen/qwen3.5-9b', label: 'qwen/qwen3.5-9b (LM Studio · 9B)' },
      { id: 'google/gemma-4-12b', label: 'google/gemma-4-12b (LM Studio · 12B)' },
      { id: 'google/gemma-4-e2b', label: 'google/gemma-4-e2b (LM Studio · 4.6B Fast)' },
      { id: 'nvidia/nemotron-3-nano-4b', label: 'nvidia/nemotron-3-nano-4b (LM Studio · 4B Fast)' },
      { id: 'gemma-3-270m-it', label: 'gemma-3-270m-it (LM Studio · 270M Instant)' },
      { id: 'prism-ml/bonsai-27b', label: 'prism-ml/bonsai-27b (LM Studio · 27B)' },
      { id: 'liquid/lfm2-24b-a2b', label: 'liquid/lfm2-24b-a2b (LM Studio · 24B MoE)' },
      { id: 'gemma-4-12b-it-qat', label: 'gemma-4-12b-it-qat (LM Studio · 12B QAT)' },
      { id: 'gemma-4-12b-it-qat-deepseek-distill', label: 'gemma-4-12b-it-qat-deepseek-distill (LM Studio · 12B)' },
      { id: 'gemma-4-12b-coder-fable5-composer2.5-v1', label: 'gemma-4-12b-coder-fable5-composer2.5-v1 (LM Studio · Coder)' },
      { id: 'gemma-4-e4b-uncensored-hauhaucs-aggressive', label: 'gemma-4-e4b-uncensored-hauhaucs-aggressive (LM Studio)' },
      { id: 'gemma-4-e2b-uncensored-hauhaucs-aggressive', label: 'gemma-4-e2b-uncensored-hauhaucs-aggressive (LM Studio)' },
      { id: 'kimi-k3.1-pro:cloud', label: 'kimi-k3.1-pro:cloud (Ollama · :11434)' }
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

let pkGroqHistory = []; // { role: 'user'|'assistant', content: string, eventPayloads?: [], isError?: boolean, provider?: string, retryPrompt?: string }
let pkGroqContextScope = 'note'; // 'note' | 'vault' | 'general'
let pkGroqAbortController = null;
let pkGroqIsStreaming = false;
let pkGroqDrawerOpen = false;

// ============================================================================
// MULTI-PROVIDER CONFIG STORAGE (WITH AUTOMATIC LEGACY GROQ MIGRATION)
// ============================================================================
function getDefaultAiConfig() {
  return {
    provider: 'groq',
    groq: {
      apiKey: '',
      baseUrl: PK_AI_PROVIDERS.groq.defaultBaseUrl,
      model: PK_AI_PROVIDERS.groq.defaultModel,
      discoveredModels: []
    },
    nvidia: {
      apiKey: '',
      baseUrl: PK_AI_PROVIDERS.nvidia.defaultBaseUrl,
      model: PK_AI_PROVIDERS.nvidia.defaultModel,
      discoveredModels: []
    },
    local: {
      apiKey: '',
      baseUrl: PK_AI_PROVIDERS.local.defaultBaseUrl,
      model: PK_AI_PROVIDERS.local.defaultModel,
      discoveredModels: []
    }
  };
}

function loadAiConfig() {
  const def = getDefaultAiConfig();
  try {
    const rawV2 = localStorage.getItem(PK_AI_CONFIG_KEY);
    if (rawV2) {
      const parsed = JSON.parse(rawV2);
      const provider = PK_AI_PROVIDERS[parsed.provider] ? parsed.provider : 'groq';
      ['groq', 'nvidia', 'local'].forEach(pid => {
        const src = parsed[pid] || {};
        def[pid] = {
          apiKey: typeof src.apiKey === 'string' ? src.apiKey.trim() : '',
          baseUrl: typeof src.baseUrl === 'string' && src.baseUrl.trim() ? src.baseUrl.trim() : PK_AI_PROVIDERS[pid].defaultBaseUrl,
          model: typeof src.model === 'string' && src.model.trim() ? src.model.trim() : PK_AI_PROVIDERS[pid].defaultModel,
          discoveredModels: Array.isArray(src.discoveredModels) ? src.discoveredModels.filter(x => typeof x === 'string' && x.trim()) : []
        };
      });
      def.provider = provider;
      // Upgrade untouched v2.3.0 generic local default (llama3.2) to user's installed LM Studio library
      if (def.local.baseUrl === 'http://localhost:11434/v1' && def.local.model === 'llama3.2' && def.local.discoveredModels.length === 0) {
        def.local.baseUrl = PK_AI_PROVIDERS.local.defaultBaseUrl;
        def.local.model = PK_AI_PROVIDERS.local.defaultModel;
        saveAiConfig(def);
      }
      return def;
    }
    // Migrate legacy Groq v1 key seamlessly
    const rawV1 = localStorage.getItem(PK_GROQ_LEGACY_CONFIG_KEY);
    if (rawV1) {
      const legacy = JSON.parse(rawV1);
      if (typeof legacy.apiKey === 'string') def.groq.apiKey = legacy.apiKey.trim();
      if (typeof legacy.model === 'string' && legacy.model.trim()) def.groq.model = legacy.model.trim();
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

  if (keyInput) cfg[pid].apiKey = keyInput.value.trim();
  if (pid !== 'groq' && baseInput && baseInput.value.trim()) {
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

function populateModelSelectForProvider(pid, data) {
  const modelSel = document.getElementById('pkGroqModelSelect');
  const customInp = document.getElementById('pkGroqCustomModelInput');
  if (!modelSel) return;

  const spec = PK_AI_PROVIDERS[pid] || PK_AI_PROVIDERS.groq;
  const seen = new Set();
  const options = [];

  // Put live discovered models first (e.g. installed Ollama/LM Studio models or fetched cloud models)
  (data.discoveredModels || []).forEach(id => {
    if (!seen.has(id)) {
      seen.add(id);
      options.push({ id, label: pid === 'local' ? `${id} (Detected)` : id });
    }
  });

  // Add curated presets for this provider
  spec.models.forEach(m => {
    if (!seen.has(m.id)) {
      seen.add(m.id);
      options.push(m);
    }
  });

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
        ? 'e.g. llama3.2, qwen2.5:7b, gemma3:4b...'
        : pid === 'nvidia'
          ? 'e.g. nvidia/nemotron-3.5-lightning-30b-a3b'
          : 'e.g. llama-3.3-70b-versatile';
    }
  }
}

function syncGroqHeaderAndSettingsUI() {
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);
  const ready = isProviderReady(spec.id, data);

  // Provider tabs highlight
  const activeTabCls = 'px-2 py-1.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer';
  const idleTabCls = 'px-2 py-1.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer';
  const tabs = [
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
  if (sub) {
    if (spec.id === 'local') {
      const shortHost = (data.baseUrl || spec.defaultBaseUrl).replace(/^https?:\/\//i, '').replace(/\/v1.*$/i, '');
      sub.textContent = `Local · ${shortModel} · ${shortHost}`;
    } else if (ready) {
      sub.textContent = `${spec.shortName} · ${shortModel} · Ready`;
    } else {
      sub.textContent = `${spec.name} · Add your API key to start`;
    }
  }
  if (keyBtnLabel) {
    if (spec.id === 'local') keyBtnLabel.textContent = 'Local';
    else keyBtnLabel.textContent = ready ? spec.shortName : 'Add Key';
  }

  // Endpoint section (shown for NVIDIA & Local, hidden for Groq)
  const endpointSec = document.getElementById('pkAiEndpointSection');
  const baseLabel = document.getElementById('pkAiBaseUrlLabel');
  const baseInput = document.getElementById('pkAiBaseUrlInput');
  const localPresets = document.getElementById('pkAiLocalPresetsRow');
  const nvidiaHint = document.getElementById('pkAiNvidiaCorsHint');
  const localHint = document.getElementById('pkAiLocalCorsHint');

  if (endpointSec) endpointSec.classList.toggle('hidden', spec.id === 'groq');
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

  populateModelSelectForProvider(spec.id, data);
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

function openGroqAssistant(autoShowSettings = false) {
  syncGroqHeaderAndSettingsUI();
  const cfg = loadAiConfig();
  const { spec, data } = getActiveProviderSpec(cfg);
  const ready = isProviderReady(spec.id, data);
  const settingsPanel = document.getElementById('pkGroqSettingsPanel');
  if (settingsPanel) {
    if (autoShowSettings || !ready) settingsPanel.classList.remove('hidden');
    else settingsPanel.classList.add('hidden');
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
  if (!panel) return;
  syncGroqHeaderAndSettingsUI();
  panel.classList.toggle('hidden');
}

function toggleGroqKeyVisibility() {
  const inp = document.getElementById('pkGroqApiKeyInput');
  const btn = document.getElementById('pkGroqRevealBtn');
  if (!inp) return;
  const showing = inp.type === 'text';
  inp.type = showing ? 'password' : 'text';
  if (btn) btn.textContent = showing ? 'Show' : 'Hide';
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
  const { spec } = getActiveProviderSpec(cfg);
  cfg[spec.id].apiKey = '';
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
      const isDefaultNvidia = /integrate\.api\.nvidia\.com/i.test(baseUrl || '');
      if (isDefaultNvidia) {
        return 'NVIDIA NIM blocks direct browser CORS requests. Open Settings -> NVIDIA AI, tap "Copy Cloudflare Worker Code", deploy a free Worker, and paste its URL into NVIDIA Endpoint (or switch to Groq / Local Model).';
      }
      return `Could not reach NVIDIA proxy (${baseUrl}). Check the URL and ensure it sends Access-Control-Allow-Origin headers.`;
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

  if (/\b(401|403)\b/.test(rawMsg)) {
    return `${spec.shortName} rejected your API key (${rawMsg}). Check your key in Settings.`;
  }
  if (/\b(404|410)\b/.test(rawMsg)) {
    return `Model "${model}" was not found or is retired on ${spec.shortName}. Open Settings and tap "${pid === 'local' ? 'Scan local models' : 'Fetch live models'}".`;
  }
  if (/\b429\b/.test(rawMsg)) {
    return `${spec.shortName} rate limit reached. Wait a moment or switch model/provider.`;
  }
  return rawMsg;
}

// ============================================================================
// LIVE MODEL DISCOVERY (GROQ / NVIDIA / OLLAMA + LM STUDIO LOCAL SCAN)
// ============================================================================
async function discoverModelsForProvider(pid, baseUrl, apiKey) {
  const endpoints = buildProviderEndpoints(pid, baseUrl);
  const headers = {};
  if (apiKey && apiKey.trim()) headers['Authorization'] = `Bearer ${apiKey.trim()}`;

  // 1. Standard OpenAI-compatible GET /v1/models
  try {
    const res = await fetch(endpoints.modelsUrl, { method: 'GET', headers });
    if (res.ok) {
      const json = await res.json();
      const list = Array.isArray(json.data) ? json.data : (Array.isArray(json.models) ? json.models : []);
      const ids = list
        .map(item => (typeof item === 'string' ? item : (item && (item.id || item.name || item.model)) || ''))
        .filter(Boolean)
        // Filter out non-chat embedding/whisper/tts/guard models on cloud endpoints
        .filter(id => pid === 'local' || !/embed|whisper|tts|playai|clip|synthetic-video|guard|safety/i.test(id));
      if (ids.length > 0) return [...new Set(ids)].sort();
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
        .filter(Boolean);
      if (ids.length > 0) return [...new Set(ids)];
    }
  }

  return [];
}

async function fetchAiProviderModels() {
  const cfg = loadAiConfig();
  captureCurrentProviderInputsIntoConfig(cfg);
  const { spec, data } = getActiveProviderSpec(cfg);

  if (spec.id === 'groq' && !data.apiKey) {
    if (typeof showToast === 'function') showToast('Paste your Groq API key first to fetch models', 'ochre');
    return;
  }

  const fetchBtn = document.getElementById('pkAiFetchModelsBtn');
  if (fetchBtn) fetchBtn.textContent = spec.id === 'local' ? 'Scanning...' : 'Fetching...';

  try {
    const models = await discoverModelsForProvider(spec.id, data.baseUrl, data.apiKey);
    if (models.length === 0) {
      throw new Error(spec.id === 'local'
        ? 'Server reachable, but no local models found. Load a model in Ollama or LM Studio first.'
        : 'No chat models returned by endpoint.');
    }
    cfg[spec.id].discoveredModels = models;
    // If current model isn't in discovered local models, auto-select the first installed one
    if (spec.id === 'local' && !models.includes(cfg.local.model)) {
      cfg.local.model = models[0];
    }
    saveAiConfig(cfg);
    syncGroqHeaderAndSettingsUI();
    if (typeof showToast === 'function') {
      showToast(`Found ${models.length} ${spec.shortName} model(s)`);
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
    // For Local Model: auto-discover installed models first if none scanned yet
    if (spec.id === 'local') {
      try {
        const found = await discoverModelsForProvider('local', data.baseUrl, data.apiKey);
        if (found.length > 0) {
          data.discoveredModels = found;
          if (!found.includes(data.model)) data.model = found[0];
        }
      } catch (_) {}
    }

    const endpoints = buildProviderEndpoints(spec.id, data.baseUrl);
    const res = await fetch(endpoints.chatUrl, {
      method: 'POST',
      headers: buildAuthHeaders(data.apiKey),
      body: JSON.stringify({
        model: data.model,
        messages: [{ role: 'user', content: 'Reply with OK.' }],
        max_tokens: 16,
        temperature: 0,
        stream: false
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const msg = errData?.error?.message || errData?.detail || errData?.title || `HTTP ${res.status}`;
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
    // Also surface detailed troubleshooting message in chat viewport if conversation is empty or user is testing
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

function clearGroqConversation() {
  abortGroqStream();
  pkGroqHistory = [];
  renderGroqMessages();
  if (typeof showToast === 'function') showToast('Started new AI conversation');
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

function buildGroqSystemPrompt() {
  const todayIso = new Date().toISOString().slice(0, 10);
  const parts = [
    'You are the built-in AI assistant inside PK Note, a fast minimalist personal knowledge & calendar workspace.',
    `Today's date is ${todayIso}.`,
    'Style rules: Be concise, structured, and genuinely helpful. Never use emojis. Use clean Markdown (headings #, bullets -, checkboxes - [ ], quotes >) when writing note content.',
    'Flashcard rule: When asked to create flashcards or study cards, format each card on its own line as: Question :: Answer (one per line, no numbering prefix needed).',
    'Calendar rule: ONLY when the user explicitly asks to schedule/create a calendar event, include a single fenced block at the end like:\n```pk-event\n{"title":"Event Title","date":"YYYY-MM-DD","start":"14:00","end":"15:00","location":""}\n```'
  ];

  const activeNote = typeof getActiveNote === 'function' ? getActiveNote() : null;

  if (pkGroqContextScope === 'note' && activeNote) {
    const lines = (activeNote.blocks || []).map(b => {
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

    parts.push(
      `\nACTIVE NOTE CONTEXT:\nTitle: ${activeNote.title || 'Untitled'}\nFolder: ${activeNote.folder || 'General'}\nTags: ${(activeNote.tags || []).join(', ') || 'none'}\nLocked: ${activeNote.locked ? 'yes' : 'no'}\nContent:\n${lines || '(empty note)'}`
    );
  } else if (pkGroqContextScope === 'vault' && typeof state !== 'undefined') {
    const noteSummaries = (state.notes || []).slice(0, 18).map(n => {
      const preview = (n.blocks || []).map(b => pkCleanBlockText(b.content)).filter(Boolean).join(' ').slice(0, 220);
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

function stripSpecialBlocksForDisplay(text, isStreaming = false) {
  let out = String(text || '')
    .replace(/<think>[\s\S]*?<\/think>/gi, '')
    .replace(/```pk-event[\s\S]*?```/gi, '');
  // Hide unclosed <think> block while reasoning models are mid-thought
  if (isStreaming) {
    out = out.replace(/<think>[\s\S]*$/gi, '');
  }
  return out.trim();
}

function parseMarkdownToPKBlocks(rawText) {
  const clean = stripSpecialBlocksForDisplay(rawText, false);
  const lines = clean.split(/\r?\n/);
  const blocks = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line === '```') continue;
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

function insertGroqReplyIntoNote(msgIdx, replaceExisting = false) {
  const msg = pkGroqHistory[msgIdx];
  if (!msg || !msg.content || msg.isError) return;
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note) return;

  const newBlocks = parseMarkdownToPKBlocks(msg.content);
  if (newBlocks.length === 0) return;

  if (replaceExisting && typeof stampNoteSnapshot === 'function') {
    stampNoteSnapshot(false, 'Pre-AI Rewrite');
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
      ? 'Replaced note (previous version saved in Time-Capsule)'
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
  // Remove the failed assistant message (and duplicate preceding user message) before retrying
  pkGroqHistory.splice(msgIdx, 1);
  if (msgIdx > 0 && pkGroqHistory[msgIdx - 1] && pkGroqHistory[msgIdx - 1].role === 'user' && pkGroqHistory[msgIdx - 1].content === promptText) {
    pkGroqHistory.splice(msgIdx - 1, 1);
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
        actionsBar = `
          <div class="flex flex-wrap items-center gap-1 pt-2 mt-2 border-t border-[var(--border-hairline)] font-mono text-[9.5px]">
            <button type="button" onclick="insertGroqReplyIntoNote(${idx}, false)" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-primary)] cursor-pointer">Insert</button>
            <button type="button" onclick="insertGroqReplyIntoNote(${idx}, true)" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer">Replace</button>
            <button type="button" onclick="createNewNoteFromGroqReply(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer">New Note</button>
            ${hasFlashcards ? `<button type="button" onclick="sendGroqFlashcardsToStudyDeck(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer">Study Deck</button>` : ''}
            <button type="button" onclick="readGroqReplyAloud(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--accent-vermilion)] cursor-pointer">Read</button>
            <button type="button" onclick="copyGroqReply(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-tertiary)] cursor-pointer">Copy</button>
          </div>
        `;
      }
    }

    const bubbleBorder = m.isError ? 'border-rose-500/40 bg-rose-500/5' : 'border-[var(--border-hairline)] bg-[var(--bg-canvas)]';
    const placeholderStatus = m.streaming ? (m.isReasoning ? 'Reasoning...' : 'Thinking...') : '';

    return `
      <div class="flex justify-start">
        <div class="max-w-[94%] w-full px-3 py-2.5 rounded-xl rounded-bl-[3px] border ${bubbleBorder} text-[var(--text-primary)]">
          <div id="pkGroqMsgBody_${idx}" class="text-xs leading-relaxed whitespace-pre-wrap break-words font-sans">${escapeHtml(display || placeholderStatus)}</div>
          ${eventCards}
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
  const prompts = {
    summarize: 'Summarize my active note into crisp, high-signal bullet points.',
    polish: 'Rewrite and polish my active note for clarity, grammar, and natural flow while preserving my meaning. Return only the improved note text.',
    todos: 'Extract concrete, actionable checklist items from my active note formatted as Markdown checkboxes (- [ ] ...).',
    flashcards: 'Generate 5 high-value study flashcards from my active note. Format each line strictly as: Question :: Answer',
    continue: 'Continue writing the next 1-2 natural paragraphs for my active note, matching its tone and direction.',
    schedule: 'Review my upcoming schedule and notes, then propose a clear, focused priority plan for today.'
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
      : '';
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
    eventPayloads: []
  });
  renderGroqMessages();

  setGroqStreamingButtons(true);
  pkGroqAbortController = new AbortController();

  // Keep last 10 clean turns (excluding prior failed error bubbles)
  const recentTurns = pkGroqHistory
    .slice(0, -1)
    .filter(m => !m.isError && m.content)
    .slice(-10)
    .map(m => ({ role: m.role, content: stripSpecialBlocksForDisplay(m.content, false) || m.content }));

  const messages = [
    { role: 'system', content: buildGroqSystemPrompt() },
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
    const endpoints = buildProviderEndpoints(spec.id, data.baseUrl);
    const res = await fetch(endpoints.chatUrl, {
      method: 'POST',
      headers: buildAuthHeaders(data.apiKey),
      signal: pkGroqAbortController.signal,
      body: JSON.stringify({
        model: data.model || spec.defaultModel,
        messages,
        stream: true,
        temperature: 0.55,
        max_tokens: 2048
      })
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      const errMsg = errJson?.error?.message || errJson?.detail || errJson?.title || `${spec.shortName} HTTP ${res.status}`;
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

// Keyboard shortcut: Alt+A toggles AI Assistant, Esc closes it
document.addEventListener('keydown', (e) => {
  if (e.altKey && (e.key === 'a' || e.key === 'A')) {
    e.preventDefault();
    if (pkGroqDrawerOpen) closeGroqAssistant();
    else openGroqAssistant();
    return;
  }
  if (e.key === 'Escape' && pkGroqDrawerOpen) {
    closeGroqAssistant();
  }
});
