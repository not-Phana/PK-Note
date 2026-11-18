// ============================================================================
// PK NOTE — OPEN-SOURCE AI MEMORY ENGINE (Dexie IndexedDB + Orama Hybrid RAG)
// 100% Client-Side, Offline-First, Hybrid BM25 + 128-Dim Semantic Vector Search
// ============================================================================
import Dexie from 'dexie';
import { create as oramaCreate, insert as oramaInsert, remove as oramaRemove, search as oramaSearch } from '@orama/orama';

const VECTOR_DIM = 128;
const MEMORY_SETTINGS_KEY = 'pk_note_ai_memory_settings_v1';

const STOP_WORDS = new Set([
  'the', 'and', 'for', 'that', 'this', 'with', 'from', 'have', 'are', 'was',
  'were', 'been', 'will', 'would', 'could', 'should', 'about', 'into', 'your',
  'their', 'there', 'what', 'when', 'where', 'which', 'while', 'they', 'them',
  'then', 'than', 'just', 'like', 'very', 'some', 'more', 'also', 'please',
  'remember', 'note', 'notes', 'chat', 'tell', 'know', 'want', 'need'
]);

// ============================================================================
// 1. PERSISTENT INDEXEDDB LAYER (DEXIE + LOCALSTORAGE FALLBACK FOR PRIVATE MODE)
// ============================================================================
const FALLBACK_MEM_KEY = 'pk_note_ai_memory_fallback_v1';
let idbAvailable = typeof indexedDB !== 'undefined' && !!indexedDB;
let db = null;
if (idbAvailable) {
  try {
    db = new Dexie('PKNoteAIMemoryDB');
    db.version(1).stores({
      memories: 'id, category, pinned, updatedAt, lastUsedAt',
      chatLogs: '++seq, createdAt'
    });
  } catch (_) {
    idbAvailable = false;
    db = null;
  }
}

function saveFallbackMemories(rows) {
  try {
    const slim = rows.map(({ embedding, ...rest }) => rest);
    localStorage.setItem(FALLBACK_MEM_KEY, JSON.stringify(slim));
  } catch (_) {}
}

function loadFallbackMemories() {
  try {
    const raw = JSON.parse(localStorage.getItem(FALLBACK_MEM_KEY) || '[]');
    return Array.isArray(raw) ? raw : [];
  } catch (_) {
    return [];
  }
}

let oramaIndex = null;
let oramaIdMap = new Map(); // memoryId -> orama internal doc id
let initPromise = null;
let cachedMemories = [];

// ============================================================================
// 2. ZERO-DOWNLOAD 128-DIM HYBRID SEMANTIC HASH EMBEDDER (0ms ON 2019 PHONES)
// Combines normalized word stems + character 3-grams with signed FNV-1a hashing
// so Orama performs true cosine vector + BM25 hybrid retrieval with 0 MB download.
// ============================================================================
function fnv1a(str, seed) {
  let h = (2166136261 ^ (seed || 0)) >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

function tokenizeText(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\u00c0-\u024f\u1780-\u17ff]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(w => w.length >= 2 && !STOP_WORDS.has(w));
}

function embedText128(text) {
  const vec = new Array(VECTOR_DIM).fill(0);
  const tokens = tokenizeText(text);
  if (tokens.length === 0) {
    vec[0] = 1;
    return vec;
  }

  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    // Full token weight (high)
    const h1 = fnv1a(tok, 17);
    const idx1 = h1 % VECTOR_DIM;
    vec[idx1] += (h1 & 1) ? 2.0 : -2.0;

    // 4-char stem prefix weight (matches coding/coder, note/notes, design/designer)
    if (tok.length >= 5) {
      const stem = tok.slice(0, 4);
      const hs = fnv1a('s:' + stem, 53);
      vec[hs % VECTOR_DIM] += (hs & 1) ? 1.1 : -1.1;
    }

    // Character 3-grams (fuzzy typo & morphological overlap)
    if (tok.length >= 3 && tok.length <= 16) {
      const padded = `_${tok}_`;
      for (let g = 0; g <= padded.length - 3; g++) {
        const tri = padded.slice(g, g + 3);
        const hg = fnv1a(tri, 97);
        vec[hg % VECTOR_DIM] += (hg & 1) ? 0.35 : -0.35;
      }
    }

    // Bigram context with next token
    if (i + 1 < tokens.length) {
      const bi = tok + '_' + tokens[i + 1];
      const hb = fnv1a(bi, 131);
      vec[hb % VECTOR_DIM] += (hb & 1) ? 1.25 : -1.25;
    }
  }

  // L2 normalize so dot product == cosine similarity
  let normSq = 0;
  for (let i = 0; i < VECTOR_DIM; i++) normSq += vec[i] * vec[i];
  const norm = Math.sqrt(normSq);
  if (norm > 0) {
    for (let i = 0; i < VECTOR_DIM; i++) vec[i] = vec[i] / norm;
  } else {
    vec[0] = 1;
  }
  return vec;
}

function cosineSim(a, b) {
  let dot = 0;
  for (let i = 0; i < VECTOR_DIM; i++) dot += (a[i] || 0) * (b[i] || 0);
  return dot;
}

function normalizeCategory(cat) {
  const c = String(cat || '').toLowerCase().trim();
  if (c === 'profile' || c === 'preference' || c === 'project' || c === 'fact') return c;
  if (/pref|style|tone|like|dislike|habit/.test(c)) return 'preference';
  if (/proj|work|app|code|build|study|goal/.test(c)) return 'project';
  if (/name|bio|about|person|user|identity|device|phone/.test(c)) return 'profile';
  return 'fact';
}

function makeMemoryId() {
  return 'mem_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);
}

// ============================================================================
// 3. ORAMA HYBRID INDEX MANAGEMENT
// ============================================================================
async function rebuildOramaIndex(rows) {
  oramaIndex = await oramaCreate({
    schema: {
      memId: 'string',
      text: 'string',
      category: 'string',
      tags: 'string',
      embedding: `vector[${VECTOR_DIM}]`
    }
  });
  oramaIdMap = new Map();
  for (let i = 0; i < rows.length; i++) {
    const m = rows[i];
    const docId = await oramaInsert(oramaIndex, {
      memId: m.id,
      text: m.text,
      category: m.category || 'fact',
      tags: m.tags || '',
      embedding: Array.isArray(m.embedding) && m.embedding.length === VECTOR_DIM
        ? m.embedding
        : embedText128(`${m.text} ${m.tags || ''}`)
    });
    oramaIdMap.set(m.id, docId);
  }
}

async function ensureInitialized() {
  if (initPromise) return initPromise;
  initPromise = (async () => {
    try {
      if (idbAvailable && db) {
        const rows = await db.memories.orderBy('updatedAt').reverse().toArray();
        cachedMemories = rows;
      } else {
        cachedMemories = loadFallbackMemories();
      }
      await rebuildOramaIndex(cachedMemories);
    } catch (_) {
      idbAvailable = false;
      cachedMemories = loadFallbackMemories();
      await rebuildOramaIndex(cachedMemories);
    }
    return true;
  })();
  return initPromise;
}

// ============================================================================
// 4. SETTINGS (AUTO-MEMORY ON/OFF)
// ============================================================================
function getSettings() {
  try {
    const raw = JSON.parse(localStorage.getItem(MEMORY_SETTINGS_KEY) || '{}');
    return {
      autoSave: raw.autoSave !== false,
      persistChat: raw.persistChat !== false
    };
  } catch (_) {
    return { autoSave: true, persistChat: true };
  }
}

function saveSettings(partial) {
  const next = Object.assign(getSettings(), partial || {});
  try {
    localStorage.setItem(MEMORY_SETTINGS_KEY, JSON.stringify(next));
  } catch (_) {}
  return next;
}

// ============================================================================
// 5. CORE MEMORY OPERATIONS (ADD / DEDUPE / HYBRID RECALL / PIN / DELETE)
// ============================================================================
async function addMemory(rawText, options = {}) {
  await ensureInitialized();
  const text = String(rawText || '').replace(/\s+/g, ' ').trim().slice(0, 360);
  if (text.length < 3) return null;

  const category = normalizeCategory(options.category);
  const tags = String(options.tags || tokenizeText(text).slice(0, 6).join(' ')).trim();
  const pinned = !!options.pinned;
  const source = options.source || 'auto';
  const now = Date.now();
  const embedding = embedText128(`${text} ${tags}`);

  // Deduplicate against existing memories (exact case-insensitive or very high cosine similarity >= 0.88)
  const lower = text.toLowerCase();
  const duplicate = cachedMemories.find(m => {
    if (m.text.toLowerCase() === lower) return true;
    const mVec = Array.isArray(m.embedding) && m.embedding.length === VECTOR_DIM ? m.embedding : embedText128(m.text);
    return cosineSim(embedding, mVec) >= 0.88;
  });

  if (duplicate) {
    const updated = {
      ...duplicate,
      text,
      category: options.category ? category : duplicate.category,
      tags: tags || duplicate.tags,
      pinned: options.pinned !== undefined ? pinned : duplicate.pinned,
      embedding,
      updatedAt: now
    };
    if (idbAvailable && db) { try { await db.memories.put(updated); } catch (_) {} }
    const oldDocId = oramaIdMap.get(duplicate.id);
    if (oldDocId && oramaIndex) {
      try { await oramaRemove(oramaIndex, oldDocId); } catch (_) {}
    }
    if (oramaIndex) {
      const newDocId = await oramaInsert(oramaIndex, {
        memId: updated.id,
        text: updated.text,
        category: updated.category,
        tags: updated.tags,
        embedding
      });
      oramaIdMap.set(updated.id, newDocId);
    }
    cachedMemories = [updated, ...cachedMemories.filter(m => m.id !== duplicate.id)];
    if (!idbAvailable) saveFallbackMemories(cachedMemories);
    return { memory: updated, deduplicated: true };
  }

  const record = {
    id: makeMemoryId(),
    text,
    category,
    tags,
    pinned,
    source,
    embedding,
    createdAt: now,
    updatedAt: now,
    lastUsedAt: now,
    useCount: 0
  };

  if (idbAvailable && db) { try { await db.memories.put(record); } catch (_) {} }
  if (oramaIndex) {
    const docId = await oramaInsert(oramaIndex, {
      memId: record.id,
      text: record.text,
      category: record.category,
      tags: record.tags,
      embedding
    });
    oramaIdMap.set(record.id, docId);
  }
  cachedMemories = [record, ...cachedMemories];
  if (!idbAvailable) saveFallbackMemories(cachedMemories);
  return { memory: record, deduplicated: false };
}

async function deleteMemory(id) {
  await ensureInitialized();
  if (idbAvailable && db) { try { await db.memories.delete(id); } catch (_) {} }
  const docId = oramaIdMap.get(id);
  if (docId && oramaIndex) {
    try { await oramaRemove(oramaIndex, docId); } catch (_) {}
    oramaIdMap.delete(id);
  }
  cachedMemories = cachedMemories.filter(m => m.id !== id);
  if (!idbAvailable) saveFallbackMemories(cachedMemories);
  return true;
}

async function togglePinMemory(id) {
  await ensureInitialized();
  const target = cachedMemories.find(m => m.id === id);
  if (!target) return null;
  target.pinned = !target.pinned;
  target.updatedAt = Date.now();
  if (idbAvailable && db) { try { await db.memories.put(target); } catch (_) {} }
  else saveFallbackMemories(cachedMemories);
  return target;
}

async function clearAllMemories() {
  await ensureInitialized();
  if (idbAvailable && db) { try { await db.memories.clear(); } catch (_) {} }
  cachedMemories = [];
  if (!idbAvailable) saveFallbackMemories(cachedMemories);
  await rebuildOramaIndex([]);
  return true;
}

async function listMemories(query = '') {
  await ensureInitialized();
  const q = String(query || '').trim();
  if (!q) {
    return [...cachedMemories].sort((a, b) => {
      if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
      return (b.updatedAt || 0) - (a.updatedAt || 0);
    });
  }
  const hits = await searchMemories(q, 30);
  return hits;
}

async function searchMemories(query, limit = 8) {
  await ensureInitialized();
  const q = String(query || '').trim();
  if (!q || cachedMemories.length === 0 || !oramaIndex) return [];

  const byId = new Map(cachedMemories.map(m => [m.id, m]));
  const queryVec = embedText128(q);

  try {
    const res = await oramaSearch(oramaIndex, {
      term: q,
      mode: 'hybrid',
      vector: { value: queryVec, property: 'embedding' },
      similarity: 0.12,
      tolerance: 1,
      limit: Math.max(limit, 10)
    });
    const out = [];
    const seen = new Set();
    for (let i = 0; i < (res.hits || []).length; i++) {
      const hit = res.hits[i];
      const memId = hit && hit.document && hit.document.memId;
      if (memId && !seen.has(memId) && byId.has(memId)) {
        seen.add(memId);
        out.push({ ...byId.get(memId), _score: hit.score || 0 });
      }
    }
    return out.slice(0, limit);
  } catch (_) {
    // Fallback full-text search
    const lower = q.toLowerCase();
    return cachedMemories
      .filter(m => m.text.toLowerCase().includes(lower) || (m.tags || '').toLowerCase().includes(lower))
      .slice(0, limit);
  }
}

// Smart Recall for AI System Prompt:
// Always includes Pinned memories + top Orama Hybrid Search matches + most recent profile/preference facts
async function recallForPrompt(userQuery, options = {}) {
  await ensureInitialized();
  if (cachedMemories.length === 0) return [];

  const maxTotal = options.limit || 8;
  const picked = [];
  const seen = new Set();

  const pushUnique = (m) => {
    if (!m || seen.has(m.id) || picked.length >= maxTotal) return;
    seen.add(m.id);
    picked.push(m);
  };

  // 1. Always include pinned memories first (up to 4)
  cachedMemories
    .filter(m => m.pinned)
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .slice(0, 4)
    .forEach(pushUnique);

  // 2. Orama Hybrid BM25 + Vector recall for the current user message
  if (userQuery && userQuery.trim()) {
    const matched = await searchMemories(userQuery, maxTotal);
    matched.forEach(pushUnique);
  }

  // 3. Fill remaining slots with newest core profile / preference memories (up to 3)
  cachedMemories
    .filter(m => m.category === 'profile' || m.category === 'preference')
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .slice(0, 3)
    .forEach(pushUnique);

  // 4. Touch lastUsedAt asynchronously for recalled items
  const now = Date.now();
  picked.forEach(m => {
    m.lastUsedAt = now;
    m.useCount = (m.useCount || 0) + 1;
    if (idbAvailable && db) {
      try { Promise.resolve(db.memories.update(m.id, { lastUsedAt: now, useCount: m.useCount })).catch(() => {}); } catch (_) {}
    }
  });

  return picked;
}

// Instant client-side heuristic extractor for explicit user memory statements
// ("remember that I ...", "don't forget ...", "my name is ...")
function detectExplicitUserMemory(userText) {
  const text = String(userText || '').trim();
  if (!text || text.length < 8 || text.length > 260) return null;

  let m = text.match(/^(?:please\s+)?(?:remember|don't forget|do not forget|keep in mind)(?:\s+that)?[:,\s]+(.+)$/i);
  if (m && m[1] && m[1].trim().length >= 5) {
    const fact = m[1].trim().replace(/[.!?]+$/, '');
    return { text: fact, category: /prefer|like|love|hate|always|never|tone|style/i.test(fact) ? 'preference' : 'fact' };
  }

  m = text.match(/^(?:my name is|call me|i'm called|i am called)\s+([a-zA-Z0-9_\- ]{2,32})/i);
  if (m && m[1]) {
    return { text: `User's name is ${m[1].trim()}`, category: 'profile' };
  }

  return null;
}

// ============================================================================
// 6. PERSISTENT CHAT LOG STORAGE (DEXIE)
// ============================================================================
async function loadChatHistory(limit = 40) {
  await ensureInitialized();
  if (!getSettings().persistChat || !idbAvailable || !db) return [];
  try {
    const all = await db.chatLogs.orderBy('seq').toArray();
    return all.slice(-limit).map(r => ({
      role: r.role,
      content: r.content,
      provider: r.provider || '',
      eventPayloads: Array.isArray(r.eventPayloads) ? r.eventPayloads : [],
      savedMemories: Array.isArray(r.savedMemories) ? r.savedMemories : [],
      isError: false,
      streaming: false
    }));
  } catch (_) {
    return [];
  }
}

async function saveChatHistory(historyArr) {
  await ensureInitialized();
  if (!getSettings().persistChat || !idbAvailable || !db) return;
  try {
    const clean = (historyArr || [])
      .filter(m => m && !m.isError && !m.streaming && m.content)
      .slice(-40)
      .map(m => ({
        role: m.role,
        content: m.content,
        provider: m.provider || '',
        eventPayloads: Array.isArray(m.eventPayloads) ? m.eventPayloads : [],
        savedMemories: Array.isArray(m.savedMemories) ? m.savedMemories : [],
        createdAt: Date.now()
      }));
    await db.transaction('rw', db.chatLogs, async () => {
      await db.chatLogs.clear();
      if (clean.length > 0) await db.chatLogs.bulkAdd(clean);
    });
  } catch (_) {}
}

async function clearChatHistory() {
  await ensureInitialized();
  if (!idbAvailable || !db) return;
  try { await db.chatLogs.clear(); } catch (_) {}
}

async function exportAllMemoriesJson() {
  await ensureInitialized();
  return JSON.stringify({
    app: 'PK Note AI Memory',
    engine: 'Dexie + Orama Hybrid Search',
    exportedAt: new Date().toISOString(),
    memories: cachedMemories.map(({ embedding, ...rest }) => rest)
  }, null, 2);
}

async function importMemoriesJson(jsonStr) {
  await ensureInitialized();
  const parsed = JSON.parse(jsonStr);
  const arr = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.memories) ? parsed.memories : []);
  let added = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item && item.text) {
      const res = await addMemory(item.text, {
        category: item.category,
        tags: item.tags,
        pinned: !!item.pinned,
        source: 'import'
      });
      if (res && !res.deduplicated) added++;
    }
  }
  return added;
}

// Expose global API for PK Note's AI Assistant
window.PKMemory = {
  init: ensureInitialized,
  getSettings,
  saveSettings,
  getCount: () => cachedMemories.length,
  add: addMemory,
  remove: deleteMemory,
  togglePin: togglePinMemory,
  clearAll: clearAllMemories,
  list: listMemories,
  search: searchMemories,
  recall: recallForPrompt,
  detectExplicit: detectExplicitUserMemory,
  loadChatHistory,
  saveChatHistory,
  clearChatHistory,
  exportJson: exportAllMemoriesJson,
  importJson: importMemoriesJson
};

// Warm up Dexie + Orama index gently in the background after page load
ensureInitialized().then(() => {
  if (typeof window.onPKMemoryReady === 'function') window.onPKMemoryReady();
});
