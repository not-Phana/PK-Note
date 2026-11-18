// ============================================================================
// PK NOTE — OPEN-SOURCE AI MEMORY & CROSS-CHAT ENGINE
// Powered by Dexie (IndexedDB) + Orama (Hybrid BM25 + 128-Dim Vector Search)
// Capabilities:
//   1. Long-term persistent memories (facts, preferences, profile, projects)
//   2. Whole-chat awareness (recalls earlier turns in long conversations)
//   3. Cross-chat episodic memory (searches & recalls across ALL past chats)
//   4. Multi-thread archive (switch, search, continue, or delete any chat)
// ============================================================================
import Dexie from 'dexie';
import { create as oramaCreate, insert as oramaInsert, remove as oramaRemove, search as oramaSearch } from '@orama/orama';

const VECTOR_DIM = 128;
const MEMORY_SETTINGS_KEY = 'pk_note_ai_memory_settings_v1';
const ACTIVE_THREAD_KEY = 'pk_note_ai_active_thread_v2';
const FALLBACK_MEM_KEY = 'pk_note_ai_memory_fallback_v1';
const FALLBACK_THREADS_KEY = 'pk_note_ai_threads_fallback_v2';

const STOP_WORDS = new Set([
  'the', 'and', 'for', 'that', 'this', 'with', 'from', 'have', 'are', 'was',
  'were', 'been', 'will', 'would', 'could', 'should', 'about', 'into', 'your',
  'their', 'there', 'what', 'when', 'where', 'which', 'while', 'they', 'them',
  'then', 'than', 'just', 'like', 'very', 'some', 'more', 'also', 'please',
  'remember', 'note', 'notes', 'chat', 'tell', 'know', 'want', 'need', 'earlier',
  'before', 'last', 'other', 'talked', 'discussed', 'previous', 'said'
]);

// ============================================================================
// 1. PERSISTENT INDEXEDDB LAYER (DEXIE v2 + PRIVATE-MODE FALLBACK)
// ============================================================================
let idbAvailable = typeof indexedDB !== 'undefined' && !!indexedDB;
let db = null;
if (idbAvailable) {
  try {
    db = new Dexie('PKNoteAIMemoryDB');
    db.version(1).stores({
      memories: 'id, category, pinned, updatedAt, lastUsedAt',
      chatLogs: '++seq, createdAt'
    });
    db.version(2).stores({
      memories: 'id, category, pinned, updatedAt, lastUsedAt',
      chatLogs: '++seq, createdAt',
      threads: 'id, updatedAt, createdAt',
      threadMessages: '++seq, threadId, createdAt'
    });
  } catch (_) {
    idbAvailable = false;
    db = null;
  }
}

let oramaMemIndex = null;
let oramaMemIdMap = new Map(); // memoryId -> orama docId

let oramaChatIndex = null;
let oramaChatDocIdsByThread = new Map(); // threadId -> [orama docIds]

let initPromise = null;
let cachedMemories = [];
let cachedThreads = []; // { id, title, summary, messageCount, createdAt, updatedAt }
let cachedMessagesByThread = new Map(); // threadId -> Message[]
let activeThreadId = '';

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

function saveFallbackThreads() {
  try {
    const payload = {
      threads: cachedThreads.slice(0, 25),
      messages: {}
    };
    payload.threads.forEach(t => {
      payload.messages[t.id] = (cachedMessagesByThread.get(t.id) || []).slice(-60);
    });
    localStorage.setItem(FALLBACK_THREADS_KEY, JSON.stringify(payload));
  } catch (_) {}
}

function loadFallbackThreads() {
  try {
    const raw = JSON.parse(localStorage.getItem(FALLBACK_THREADS_KEY) || '{}');
    const threads = Array.isArray(raw.threads) ? raw.threads : [];
    const map = new Map();
    if (raw.messages && typeof raw.messages === 'object') {
      Object.entries(raw.messages).forEach(([tid, msgs]) => {
        if (Array.isArray(msgs)) map.set(tid, msgs);
      });
    }
    return { threads, map };
  } catch (_) {
    return { threads: [], map: new Map() };
  }
}

function loadSavedActiveThreadId() {
  try { return localStorage.getItem(ACTIVE_THREAD_KEY) || ''; } catch (_) { return ''; }
}

function saveActiveThreadId(tid) {
  activeThreadId = tid || '';
  try { localStorage.setItem(ACTIVE_THREAD_KEY, activeThreadId); } catch (_) {}
}

// ============================================================================
// 2. ZERO-DOWNLOAD 128-DIM HYBRID SEMANTIC HASH EMBEDDER (0ms ON 2019 PHONES)
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
    const h1 = fnv1a(tok, 17);
    vec[h1 % VECTOR_DIM] += (h1 & 1) ? 2.0 : -2.0;

    if (tok.length >= 5) {
      const stem = tok.slice(0, 4);
      const hs = fnv1a('s:' + stem, 53);
      vec[hs % VECTOR_DIM] += (hs & 1) ? 1.1 : -1.1;
    }

    if (tok.length >= 3 && tok.length <= 16) {
      const padded = `_${tok}_`;
      for (let g = 0; g <= padded.length - 3; g++) {
        const tri = padded.slice(g, g + 3);
        const hg = fnv1a(tri, 97);
        vec[hg % VECTOR_DIM] += (hg & 1) ? 0.35 : -0.35;
      }
    }

    if (i + 1 < tokens.length) {
      const bi = tok + '_' + tokens[i + 1];
      const hb = fnv1a(bi, 131);
      vec[hb % VECTOR_DIM] += (hb & 1) ? 1.25 : -1.25;
    }
  }

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

function stripHiddenTags(raw) {
  return String(raw || '')
    .replace(/<think>[\s\S]*?<\/think>/gi, '')
    .replace(/```pk-(?:event|memory)[\s\S]*?```/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeId(prefix) {
  return prefix + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);
}

// Group a thread's messages into searchable Q&A exchange chunks so Orama recalls full context
function buildExchangeChunks(threadId, threadTitle, messages) {
  const chunks = [];
  const msgs = messages || [];
  let i = 0;
  while (i < msgs.length) {
    const m = msgs[i];
    if (!m || !m.content || m.isError) { i++; continue; }
    const startIdx = i;
    let userPart = '';
    let aiPart = '';
    if (m.role === 'user') {
      userPart = stripHiddenTags(m.content).slice(0, 260);
      if (i + 1 < msgs.length && msgs[i + 1] && msgs[i + 1].role === 'assistant' && !msgs[i + 1].isError) {
        aiPart = stripHiddenTags(msgs[i + 1].content).slice(0, 320);
        i += 2;
      } else {
        i += 1;
      }
    } else {
      aiPart = stripHiddenTags(m.content).slice(0, 320);
      i += 1;
    }
    const combined = [
      userPart ? `User: ${userPart}` : '',
      aiPart ? `Assistant: ${aiPart}` : ''
    ].filter(Boolean).join(' | ');
    if (combined.length >= 6) {
      chunks.push({
        threadId,
        threadTitle: threadTitle || 'Chat',
        msgIndex: startIdx,
        text: combined,
        createdAt: m.createdAt || Date.now()
      });
    }
  }
  return chunks;
}

function deriveThreadTitleAndSummary(messages) {
  const cleanMsgs = (messages || []).filter(m => m && !m.isError && m.content);
  const firstUser = cleanMsgs.find(m => m.role === 'user');
  const titleRaw = firstUser ? stripHiddenTags(firstUser.content) : (cleanMsgs[0] ? stripHiddenTags(cleanMsgs[0].content) : 'New Chat');
  const title = (titleRaw || 'New Chat').slice(0, 56);

  // Rolling summary: first user intent + latest exchange preview
  const lastUser = [...cleanMsgs].reverse().find(m => m.role === 'user');
  const lastAi = [...cleanMsgs].reverse().find(m => m.role === 'assistant');
  const parts = [];
  if (firstUser) parts.push(`Started with: "${stripHiddenTags(firstUser.content).slice(0, 95)}"`);
  if (lastUser && lastUser !== firstUser) parts.push(`Latest topic: "${stripHiddenTags(lastUser.content).slice(0, 95)}"`);
  else if (lastAi) parts.push(`Key reply: "${stripHiddenTags(lastAi.content).slice(0, 110)}"`);
  return {
    title,
    summary: parts.join(' · ').slice(0, 220)
  };
}

// ============================================================================
// 3. ORAMA HYBRID INDEXES (MEMORIES + ALL CHAT EXCHANGES)
// ============================================================================
async function rebuildOramaMemoryIndex(rows) {
  oramaMemIndex = await oramaCreate({
    schema: {
      memId: 'string',
      text: 'string',
      category: 'string',
      tags: 'string',
      embedding: `vector[${VECTOR_DIM}]`
    }
  });
  oramaMemIdMap = new Map();
  for (let i = 0; i < rows.length; i++) {
    const m = rows[i];
    const docId = await oramaInsert(oramaMemIndex, {
      memId: m.id,
      text: m.text,
      category: m.category || 'fact',
      tags: m.tags || '',
      embedding: Array.isArray(m.embedding) && m.embedding.length === VECTOR_DIM
        ? m.embedding
        : embedText128(`${m.text} ${m.tags || ''}`)
    });
    oramaMemIdMap.set(m.id, docId);
  }
}

async function rebuildOramaChatIndex() {
  oramaChatIndex = await oramaCreate({
    schema: {
      threadId: 'string',
      threadTitle: 'string',
      msgIndex: 'number',
      text: 'string',
      createdAt: 'number',
      embedding: `vector[${VECTOR_DIM}]`
    }
  });
  oramaChatDocIdsByThread = new Map();
  for (let i = 0; i < cachedThreads.length; i++) {
    const t = cachedThreads[i];
    await indexThreadInOrama(t.id, t.title, cachedMessagesByThread.get(t.id) || []);
  }
}

async function indexThreadInOrama(threadId, threadTitle, messages) {
  if (!oramaChatIndex) return;
  // Remove previous chunks for this thread
  const prevIds = oramaChatDocIdsByThread.get(threadId) || [];
  for (let i = 0; i < prevIds.length; i++) {
    try { await oramaRemove(oramaChatIndex, prevIds[i]); } catch (_) {}
  }
  const chunks = buildExchangeChunks(threadId, threadTitle, messages);
  const nextIds = [];
  for (let i = 0; i < chunks.length; i++) {
    const ch = chunks[i];
    const docId = await oramaInsert(oramaChatIndex, {
      threadId: ch.threadId,
      threadTitle: ch.threadTitle,
      msgIndex: ch.msgIndex,
      text: ch.text,
      createdAt: ch.createdAt,
      embedding: embedText128(`${ch.threadTitle} ${ch.text}`)
    });
    nextIds.push(docId);
  }
  oramaChatDocIdsByThread.set(threadId, nextIds);
}

async function ensureInitialized() {
  if (initPromise) return initPromise;
  initPromise = (async () => {
    try {
      if (idbAvailable && db) {
        cachedMemories = await db.memories.orderBy('updatedAt').reverse().toArray();
        let threads = await db.threads.orderBy('updatedAt').reverse().toArray();
        const allMsgs = await db.threadMessages.orderBy('seq').toArray();
        cachedMessagesByThread = new Map();
        allMsgs.forEach(m => {
          if (!cachedMessagesByThread.has(m.threadId)) cachedMessagesByThread.set(m.threadId, []);
          cachedMessagesByThread.get(m.threadId).push(m);
        });

        // One-time seamless migration from v1 chatLogs -> v2 threads
        if (threads.length === 0) {
          const legacyLogs = await db.chatLogs.orderBy('seq').toArray().catch(() => []);
          if (legacyLogs.length > 0) {
            const tid = makeId('chat');
            const now = Date.now();
            const meta = deriveThreadTitleAndSummary(legacyLogs);
            const tRec = {
              id: tid,
              title: meta.title,
              summary: meta.summary,
              messageCount: legacyLogs.length,
              createdAt: legacyLogs[0].createdAt || now,
              updatedAt: legacyLogs[legacyLogs.length - 1].createdAt || now
            };
            const migratedMsgs = legacyLogs.map(r => ({
              threadId: tid,
              role: r.role,
              content: r.content,
              provider: r.provider || '',
              eventPayloads: Array.isArray(r.eventPayloads) ? r.eventPayloads : [],
              savedMemories: Array.isArray(r.savedMemories) ? r.savedMemories : [],
              createdAt: r.createdAt || now
            }));
            await db.threads.put(tRec);
            await db.threadMessages.bulkAdd(migratedMsgs);
            threads = [tRec];
            cachedMessagesByThread.set(tid, migratedMsgs);
            saveActiveThreadId(tid);
          }
        }
        cachedThreads = threads;
      } else {
        cachedMemories = loadFallbackMemories();
        const fb = loadFallbackThreads();
        cachedThreads = fb.threads;
        cachedMessagesByThread = fb.map;
      }
    } catch (_) {
      idbAvailable = false;
      cachedMemories = loadFallbackMemories();
      const fb = loadFallbackThreads();
      cachedThreads = fb.threads;
      cachedMessagesByThread = fb.map;
    }

    const savedTid = loadSavedActiveThreadId();
    if (savedTid && cachedThreads.some(t => t.id === savedTid)) {
      activeThreadId = savedTid;
    } else if (cachedThreads.length > 0) {
      activeThreadId = cachedThreads[0].id;
    } else {
      activeThreadId = makeId('chat');
    }

    await rebuildOramaMemoryIndex(cachedMemories);
    await rebuildOramaChatIndex();
    return true;
  })();
  return initPromise;
}

// ============================================================================
// 4. SETTINGS (AUTO-MEMORY & CROSS-CHAT RECALL)
// ============================================================================
function getSettings() {
  try {
    const raw = JSON.parse(localStorage.getItem(MEMORY_SETTINGS_KEY) || '{}');
    return {
      autoSave: raw.autoSave !== false,
      persistChat: raw.persistChat !== false,
      crossChat: raw.crossChat !== false
    };
  } catch (_) {
    return { autoSave: true, persistChat: true, crossChat: true };
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
// 5. LONG-TERM MEMORIES CRUD + ORAMA HYBRID SEARCH
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
    const oldDocId = oramaMemIdMap.get(duplicate.id);
    if (oldDocId && oramaMemIndex) {
      try { await oramaRemove(oramaMemIndex, oldDocId); } catch (_) {}
    }
    if (oramaMemIndex) {
      const newDocId = await oramaInsert(oramaMemIndex, {
        memId: updated.id,
        text: updated.text,
        category: updated.category,
        tags: updated.tags,
        embedding
      });
      oramaMemIdMap.set(updated.id, newDocId);
    }
    cachedMemories = [updated, ...cachedMemories.filter(m => m.id !== duplicate.id)];
    if (!idbAvailable) saveFallbackMemories(cachedMemories);
    return { memory: updated, deduplicated: true };
  }

  const record = {
    id: makeId('mem'),
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
  if (oramaMemIndex) {
    const docId = await oramaInsert(oramaMemIndex, {
      memId: record.id,
      text: record.text,
      category: record.category,
      tags: record.tags,
      embedding
    });
    oramaMemIdMap.set(record.id, docId);
  }
  cachedMemories = [record, ...cachedMemories];
  if (!idbAvailable) saveFallbackMemories(cachedMemories);
  return { memory: record, deduplicated: false };
}

async function deleteMemory(id) {
  await ensureInitialized();
  if (idbAvailable && db) { try { await db.memories.delete(id); } catch (_) {} }
  const docId = oramaMemIdMap.get(id);
  if (docId && oramaMemIndex) {
    try { await oramaRemove(oramaMemIndex, docId); } catch (_) {}
    oramaMemIdMap.delete(id);
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
  await rebuildOramaMemoryIndex([]);
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
  return searchMemories(q, 30);
}

async function searchMemories(query, limit = 8) {
  await ensureInitialized();
  const q = String(query || '').trim();
  if (!q || cachedMemories.length === 0 || !oramaMemIndex) return [];

  const byId = new Map(cachedMemories.map(m => [m.id, m]));
  const queryVec = embedText128(q);

  try {
    const res = await oramaSearch(oramaMemIndex, {
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
    const lower = q.toLowerCase();
    return cachedMemories
      .filter(m => m.text.toLowerCase().includes(lower) || (m.tags || '').toLowerCase().includes(lower))
      .slice(0, limit);
  }
}

// ============================================================================
// 6. MULTI-THREAD ARCHIVE & CROSS-CHAT EPISODIC SEARCH (WHOLE CHAT + ACROSS CHATS)
// ============================================================================
function toUiMessage(r) {
  return {
    role: r.role,
    content: r.content,
    provider: r.provider || '',
    eventPayloads: Array.isArray(r.eventPayloads) ? r.eventPayloads : [],
    savedMemories: Array.isArray(r.savedMemories) ? r.savedMemories : [],
    createdAt: r.createdAt || Date.now(),
    isError: false,
    streaming: false
  };
}

async function startNewThread() {
  await ensureInitialized();
  const tid = makeId('chat');
  saveActiveThreadId(tid);
  return tid;
}

async function openThread(threadId) {
  await ensureInitialized();
  if (!threadId) return [];
  saveActiveThreadId(threadId);
  const msgs = cachedMessagesByThread.get(threadId) || [];
  return msgs.map(toUiMessage);
}

async function loadChatHistory() {
  await ensureInitialized();
  if (!getSettings().persistChat) return [];
  const msgs = cachedMessagesByThread.get(activeThreadId) || [];
  return msgs.map(toUiMessage);
}

async function saveChatHistory(historyArr) {
  await ensureInitialized();
  if (!getSettings().persistChat) return;

  const clean = (historyArr || [])
    .filter(m => m && !m.isError && !m.streaming && m.content)
    .map(m => ({
      threadId: activeThreadId,
      role: m.role,
      content: m.content,
      provider: m.provider || '',
      eventPayloads: Array.isArray(m.eventPayloads) ? m.eventPayloads : [],
      savedMemories: Array.isArray(m.savedMemories) ? m.savedMemories : [],
      createdAt: m.createdAt || Date.now()
    }));

  if (clean.length === 0) return;
  if (!activeThreadId) saveActiveThreadId(makeId('chat'));

  const now = Date.now();
  const existing = cachedThreads.find(t => t.id === activeThreadId);
  const meta = deriveThreadTitleAndSummary(clean);
  const threadRec = {
    id: activeThreadId,
    title: meta.title,
    summary: meta.summary,
    messageCount: clean.length,
    createdAt: existing ? existing.createdAt : (clean[0].createdAt || now),
    updatedAt: now
  };

  cachedMessagesByThread.set(activeThreadId, clean);
  cachedThreads = [threadRec, ...cachedThreads.filter(t => t.id !== activeThreadId)];
  saveActiveThreadId(activeThreadId);

  if (idbAvailable && db) {
    try {
      await db.transaction('rw', db.threads, db.threadMessages, async () => {
        await db.threads.put(threadRec);
        await db.threadMessages.where('threadId').equals(activeThreadId).delete();
        await db.threadMessages.bulkAdd(clean);
      });
    } catch (_) {}
  } else {
    saveFallbackThreads();
  }

  await indexThreadInOrama(activeThreadId, threadRec.title, clean);
}

async function deleteThread(threadId) {
  await ensureInitialized();
  if (!threadId) return false;
  cachedThreads = cachedThreads.filter(t => t.id !== threadId);
  cachedMessagesByThread.delete(threadId);
  const prevIds = oramaChatDocIdsByThread.get(threadId) || [];
  for (let i = 0; i < prevIds.length; i++) {
    try { await oramaRemove(oramaChatIndex, prevIds[i]); } catch (_) {}
  }
  oramaChatDocIdsByThread.delete(threadId);

  if (idbAvailable && db) {
    try {
      await db.transaction('rw', db.threads, db.threadMessages, async () => {
        await db.threads.delete(threadId);
        await db.threadMessages.where('threadId').equals(threadId).delete();
      });
    } catch (_) {}
  } else {
    saveFallbackThreads();
  }

  if (activeThreadId === threadId) {
    saveActiveThreadId(makeId('chat'));
  }
  return true;
}

async function clearChatHistory() {
  // Archive current chat and open a fresh thread so cross-chat memory NEVER loses past conversations!
  return startNewThread();
}

async function listThreads(query = '') {
  await ensureInitialized();
  const q = String(query || '').trim();
  const sorted = [...cachedThreads].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  if (!q) {
    return sorted.map(t => ({ ...t, isActive: t.id === activeThreadId, matchSnippet: '' }));
  }

  // Hybrid Orama search across all chat messages & thread titles
  const hits = await searchChatExchanges(q, { limit: 25 });
  const snippetByThread = new Map();
  hits.forEach(h => {
    if (!snippetByThread.has(h.threadId)) snippetByThread.set(h.threadId, h.text);
  });

  const lower = q.toLowerCase();
  const matched = [];
  const seen = new Set();

  // Ranked Orama hits first
  hits.forEach(h => {
    if (seen.has(h.threadId)) return;
    const t = cachedThreads.find(x => x.id === h.threadId);
    if (t) {
      seen.add(t.id);
      matched.push({ ...t, isActive: t.id === activeThreadId, matchSnippet: snippetByThread.get(t.id) || '' });
    }
  });

  // Also include direct title substring matches
  sorted.forEach(t => {
    if (seen.has(t.id)) return;
    if ((t.title || '').toLowerCase().includes(lower) || (t.summary || '').toLowerCase().includes(lower)) {
      seen.add(t.id);
      matched.push({ ...t, isActive: t.id === activeThreadId, matchSnippet: t.summary || '' });
    }
  });

  return matched;
}

async function searchChatExchanges(query, options = {}) {
  await ensureInitialized();
  const q = String(query || '').trim();
  if (!q || !oramaChatIndex) return [];
  const limit = options.limit || 12;
  const queryVec = embedText128(q);

  try {
    const res = await oramaSearch(oramaChatIndex, {
      term: q,
      mode: 'hybrid',
      vector: { value: queryVec, property: 'embedding' },
      similarity: 0.14,
      tolerance: 1,
      limit: Math.max(limit * 2, 16)
    });
    return (res.hits || []).map(h => ({
      threadId: h.document.threadId,
      threadTitle: h.document.threadTitle,
      msgIndex: h.document.msgIndex,
      text: h.document.text,
      createdAt: h.document.createdAt,
      score: h.score || 0
    })).slice(0, limit);
  } catch (_) {
    return [];
  }
}

// ============================================================================
// 7. UNIFIED RECALL FOR AI PROMPT (MEMORIES + WHOLE CURRENT CHAT + ACROSS CHATS)
// ============================================================================
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

  cachedMemories
    .filter(m => m.pinned)
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .slice(0, 4)
    .forEach(pushUnique);

  if (userQuery && userQuery.trim()) {
    const matched = await searchMemories(userQuery, maxTotal);
    matched.forEach(pushUnique);
  }

  cachedMemories
    .filter(m => m.category === 'profile' || m.category === 'preference')
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .slice(0, 3)
    .forEach(pushUnique);

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

async function recallContext(userQuery, currentCleanHistory = [], options = {}) {
  await ensureInitialized();
  const settings = getSettings();
  const recentWindow = options.recentWindow || 16;

  // 1. Long-term memories (pinned + Orama hybrid + profile/preference)
  const memories = await recallForPrompt(userQuery, { limit: 8 });

  // 2. Whole-chat recall: if the current conversation is longer than recentWindow,
  //    recall BOTH the opening topic AND any relevant earlier turns from THIS chat!
  let earlierInThisChat = [];
  let openingTopic = '';
  const totalCur = currentCleanHistory.length;
  if (totalCur > recentWindow) {
    const olderCutoff = totalCur - recentWindow;
    const firstUser = currentCleanHistory.find(m => m.role === 'user');
    if (firstUser) openingTopic = stripHiddenTags(firstUser.content).slice(0, 180);

    const thisChatHits = await searchChatExchanges(userQuery, { limit: 16 });
    earlierInThisChat = thisChatHits
      .filter(h => h.threadId === activeThreadId && h.msgIndex < olderCutoff)
      .slice(0, 4);

    // If user asks broadly ("summarize the whole chat", "earlier in this chat"), also include a couple spaced checkpoints
    if (earlierInThisChat.length === 0 && /whole chat|entire chat|earlier|beginning|start of|everything we/i.test(userQuery || '')) {
      const olderChunks = buildExchangeChunks(activeThreadId, 'This Chat', currentCleanHistory.slice(0, olderCutoff));
      earlierInThisChat = olderChunks.slice(0, 4);
    }
  }

  // 3. Cross-chat recall: search across ALL OTHER past chat threads via Orama Hybrid Search
  let acrossChats = [];
  let recentThreads = [];
  if (settings.crossChat) {
    const otherThreads = cachedThreads
      .filter(t => t.id !== activeThreadId && t.messageCount > 0)
      .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));

    recentThreads = otherThreads.slice(0, 6).map(t => ({
      id: t.id,
      title: t.title,
      summary: t.summary,
      date: new Date(t.updatedAt || Date.now()).toISOString().slice(0, 10),
      messageCount: t.messageCount
    }));

    if (otherThreads.length > 0 && userQuery && userQuery.trim()) {
      const allHits = await searchChatExchanges(userQuery, { limit: 18 });
      const perThreadCount = new Map();
      for (let i = 0; i < allHits.length; i++) {
        const h = allHits[i];
        if (h.threadId === activeThreadId) continue;
        const c = perThreadCount.get(h.threadId) || 0;
        if (c >= 2) continue; // Diversity across chats
        perThreadCount.set(h.threadId, c + 1);
        acrossChats.push({
          threadTitle: h.threadTitle,
          date: new Date(h.createdAt || Date.now()).toISOString().slice(0, 10),
          text: h.text
        });
        if (acrossChats.length >= 5) break;
      }

      // If user asks generally about their last/other chat without matching specific keywords, pull the latest exchange from the most recent other chat!
      if (acrossChats.length === 0 && /last chat|other chat|previous chat|earlier chat|before|remember what we|what did we talk/i.test(userQuery)) {
        const latestOther = otherThreads[0];
        if (latestOther) {
          const msgs = cachedMessagesByThread.get(latestOther.id) || [];
          const chunks = buildExchangeChunks(latestOther.id, latestOther.title, msgs);
          chunks.slice(-3).forEach(ch => {
            acrossChats.push({
              threadTitle: latestOther.title,
              date: new Date(latestOther.updatedAt || Date.now()).toISOString().slice(0, 10),
              text: ch.text
            });
          });
        }
      }
    }
  }

  return {
    memories,
    openingTopic,
    earlierInThisChat,
    acrossChats,
    recentThreads
  };
}

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

async function exportAllMemoriesJson() {
  await ensureInitialized();
  return JSON.stringify({
    app: 'PK Note AI Memory',
    engine: 'Dexie + Orama Hybrid Search (Whole-Chat + Cross-Chat)',
    exportedAt: new Date().toISOString(),
    memories: cachedMemories.map(({ embedding, ...rest }) => rest),
    threads: cachedThreads.map(t => ({
      ...t,
      messages: cachedMessagesByThread.get(t.id) || []
    }))
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

window.PKMemory = {
  init: ensureInitialized,
  getSettings,
  saveSettings,
  getCount: () => cachedMemories.length,
  getThreadCount: () => cachedThreads.length,
  getActiveThreadId: () => activeThreadId,
  add: addMemory,
  remove: deleteMemory,
  togglePin: togglePinMemory,
  clearAll: clearAllMemories,
  list: listMemories,
  search: searchMemories,
  recall: recallForPrompt,
  recallContext,
  detectExplicit: detectExplicitUserMemory,
  startNewThread,
  openThread,
  deleteThread,
  listThreads,
  searchChatExchanges,
  loadChatHistory,
  saveChatHistory,
  clearChatHistory,
  exportJson: exportAllMemoriesJson,
  importJson: importMemoriesJson
};

ensureInitialized().then(() => {
  if (typeof window.onPKMemoryReady === 'function') window.onPKMemoryReady();
});
