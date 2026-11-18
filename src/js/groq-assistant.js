// ============================================================================
// PK NOTE — GROQ AI ASSISTANT (100% Client-Side BYOK, SSE Streaming, Zero Emoji)
// Connects directly to https://api.groq.com/openai/v1/chat/completions
// Full PK Note integration: Active Note, Vault, Calendar, Study Deck, Voice
// ============================================================================

const PK_GROQ_CONFIG_KEY = 'pk_note_groq_config_v1';
const PK_GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const PK_GROQ_PRESET_MODELS = [
  'llama-3.3-70b-versatile',
  'llama-3.1-8b-instant',
  'meta-llama/llama-4-scout-17b-16e-instruct',
  'qwen/qwen3-32b'
];

let pkGroqHistory = []; // { role: 'user'|'assistant', content: string, eventPayloads?: [] }
let pkGroqContextScope = 'note'; // 'note' | 'vault' | 'general'
let pkGroqAbortController = null;
let pkGroqIsStreaming = false;

function loadGroqConfig() {
  try {
    const raw = JSON.parse(localStorage.getItem(PK_GROQ_CONFIG_KEY) || '{}');
    return {
      apiKey: typeof raw.apiKey === 'string' ? raw.apiKey.trim() : '',
      model: typeof raw.model === 'string' && raw.model.trim() ? raw.model.trim() : 'llama-3.3-70b-versatile'
    };
  } catch (_) {
    return { apiKey: '', model: 'llama-3.3-70b-versatile' };
  }
}

function saveGroqConfig(cfg) {
  try {
    localStorage.setItem(PK_GROQ_CONFIG_KEY, JSON.stringify({
      apiKey: (cfg.apiKey || '').trim(),
      model: (cfg.model || 'llama-3.3-70b-versatile').trim()
    }));
  } catch (_) {}
}

function syncGroqHeaderAndSettingsUI() {
  const cfg = loadGroqConfig();
  const sub = document.getElementById('pkGroqHeaderSub');
  const keyBtnLabel = document.getElementById('pkGroqKeyBtnLabel');
  const keyInput = document.getElementById('pkGroqApiKeyInput');
  const modelSel = document.getElementById('pkGroqModelSelect');
  const customInp = document.getElementById('pkGroqCustomModelInput');

  const shortModel = cfg.model.split('/').pop();
  if (sub) {
    sub.textContent = cfg.apiKey
      ? `Groq · ${shortModel} · Ready`
      : 'Groq Cloud · Add your API key to start';
  }
  if (keyBtnLabel) {
    keyBtnLabel.textContent = cfg.apiKey ? 'Key Set' : 'Add Key';
  }
  if (keyInput) keyInput.value = cfg.apiKey;
  if (modelSel) {
    if (PK_GROQ_PRESET_MODELS.includes(cfg.model)) {
      modelSel.value = cfg.model;
      if (customInp) customInp.classList.add('hidden');
    } else {
      modelSel.value = 'custom';
      if (customInp) {
        customInp.classList.remove('hidden');
        customInp.value = cfg.model;
      }
    }
  }
  updateGroqScopeButtons();
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
  const cfg = loadGroqConfig();
  const settingsPanel = document.getElementById('pkGroqSettingsPanel');
  if (settingsPanel) {
    if (autoShowSettings || !cfg.apiKey) settingsPanel.classList.remove('hidden');
    else settingsPanel.classList.add('hidden');
  }
  renderGroqMessages();
  const backdrop = document.getElementById('pkGroqAssistantBackdrop');
  if (backdrop) backdrop.classList.remove('hidden');
  if (cfg.apiKey && window.innerWidth >= 768) {
    const inp = document.getElementById('pkGroqPromptInput');
    if (inp) setTimeout(() => inp.focus(), 40);
  }
}

function closeGroqAssistant() {
  const backdrop = document.getElementById('pkGroqAssistantBackdrop');
  if (backdrop) backdrop.classList.add('hidden');
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
  const keyInput = document.getElementById('pkGroqApiKeyInput');
  const modelSel = document.getElementById('pkGroqModelSelect');
  const customInp = document.getElementById('pkGroqCustomModelInput');
  const apiKey = keyInput ? keyInput.value.trim() : '';
  const selected = modelSel ? modelSel.value : 'llama-3.3-70b-versatile';
  const model = selected === 'custom' && customInp && customInp.value.trim()
    ? customInp.value.trim()
    : (selected === 'custom' ? 'llama-3.3-70b-versatile' : selected);

  saveGroqConfig({ apiKey, model });
  syncGroqHeaderAndSettingsUI();
  const panel = document.getElementById('pkGroqSettingsPanel');
  if (panel && apiKey) panel.classList.add('hidden');
  if (typeof showToast === 'function') {
    showToast(apiKey ? `Groq saved (${model.split('/').pop()})` : 'API key cleared', apiKey ? undefined : 'ochre');
  }
  renderGroqMessages();
}

function clearGroqApiKey() {
  const cfg = loadGroqConfig();
  saveGroqConfig({ apiKey: '', model: cfg.model });
  syncGroqHeaderAndSettingsUI();
  if (typeof showToast === 'function') showToast('Groq API key removed from this device', 'ochre');
}

async function testGroqConnection() {
  const keyInput = document.getElementById('pkGroqApiKeyInput');
  const modelSel = document.getElementById('pkGroqModelSelect');
  const customInp = document.getElementById('pkGroqCustomModelInput');
  const apiKey = keyInput ? keyInput.value.trim() : loadGroqConfig().apiKey;
  const sel = modelSel ? modelSel.value : loadGroqConfig().model;
  const model = sel === 'custom' && customInp && customInp.value.trim() ? customInp.value.trim() : (sel === 'custom' ? 'llama-3.3-70b-versatile' : sel);

  if (!apiKey) {
    if (typeof showToast === 'function') showToast('Paste your Groq API key (gsk_...) first', 'ochre');
    return;
  }
  if (typeof showToast === 'function') showToast('Testing Groq API key...');
  try {
    const res = await fetch(PK_GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: 'Reply with OK.' }],
        max_tokens: 6,
        temperature: 0
      })
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const msg = errData?.error?.message || `HTTP ${res.status}`;
      throw new Error(msg);
    }
    saveGroqConfig({ apiKey, model });
    syncGroqHeaderAndSettingsUI();
    const panel = document.getElementById('pkGroqSettingsPanel');
    if (panel) panel.classList.add('hidden');
    if (typeof showToast === 'function') showToast('Groq connected and key saved!');
  } catch (err) {
    if (typeof showToast === 'function') {
      showToast(`Groq error: ${(err && err.message ? err.message : 'Connection failed').slice(0, 64)}`, 'ochre');
    }
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

function stripSpecialBlocksForDisplay(text) {
  return String(text || '')
    .replace(/<think>[\s\S]*?<\/think>/gi, '')
    .replace(/```pk-event[\s\S]*?```/gi, '')
    .trim();
}

function parseMarkdownToPKBlocks(rawText) {
  const clean = stripSpecialBlocksForDisplay(rawText);
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
  if (!msg || !msg.content) return;
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
  if (!msg || !msg.content) return;
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
      note.blocks = blocks.length > 0 ? blocks : [{ id: generateId('b'), type: 'paragraph', content: stripSpecialBlocksForDisplay(msg.content) }];
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
  if (!msg || !msg.content) return;
  const clean = stripSpecialBlocksForDisplay(msg.content);
  if (clean && typeof readTextAloud === 'function') {
    readTextAloud(clean, 'AI Assistant');
  }
}

function copyGroqReply(msgIdx) {
  const msg = pkGroqHistory[msgIdx];
  if (!msg || !msg.content) return;
  const clean = stripSpecialBlocksForDisplay(msg.content);
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
    const newEvt = {
      id: generateId('evt'),
      title: String(payload.title || 'Scheduled Event').slice(0, 80),
      start_datetime: `${dateKey}T${startTime}:00`,
      end_datetime: `${dateKey}T${endTime}:00`,
      all_day: !payload.start,
      location: payload.location || '',
      notes: 'Created via PK AI Assistant (Groq)',
      color_code: '#D95338'
    };
    state.events.push(newEvt);
    if (typeof renderAll === 'function') renderAll();
    if (typeof persistState === 'function') persistState();
    if (typeof showToast === 'function') showToast(`Added "${newEvt.title}" on ${dateKey} at ${startTime}`);
  }
}

// ============================================================================
// MESSAGE RENDERING & SMOOTH RAF-BATCHED SSE STREAMING
// ============================================================================
function renderGroqMessages() {
  const box = document.getElementById('pkGroqMessages');
  if (!box) return;
  const cfg = loadGroqConfig();

  if (pkGroqHistory.length === 0) {
    box.innerHTML = `
      <div class="py-6 px-3 text-center space-y-3">
        <div class="w-10 h-10 mx-auto rounded-lg bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] flex items-center justify-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/></svg>
        </div>
        <div class="space-y-1">
          <div class="font-serif font-semibold text-sm text-[var(--text-primary)]">Your PK Note AI Partner</div>
          <div class="font-mono text-[10px] text-[var(--text-tertiary)] leading-relaxed max-w-xs mx-auto">
            ${cfg.apiKey
              ? 'Connected to Groq Cloud. Ask anything about your active note, vault, or schedule — or tap a quick action above.'
              : 'Paste your free Groq API key above (saved only on your device) to summarize notes, polish writing, extract tasks, generate Study Deck flashcards, and schedule events.'}
          </div>
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

    const display = stripSpecialBlocksForDisplay(m.content);
    const hasFlashcards = display.includes('::');
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

    const actionsBar = m.streaming ? '' : `
      <div class="flex flex-wrap items-center gap-1 pt-2 mt-2 border-t border-[var(--border-hairline)] font-mono text-[9.5px]">
        <button type="button" onclick="insertGroqReplyIntoNote(${idx}, false)" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-primary)] cursor-pointer">Insert</button>
        <button type="button" onclick="insertGroqReplyIntoNote(${idx}, true)" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer">Replace</button>
        <button type="button" onclick="createNewNoteFromGroqReply(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer">New Note</button>
        ${hasFlashcards ? `<button type="button" onclick="sendGroqFlashcardsToStudyDeck(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer">Study Deck</button>` : ''}
        <button type="button" onclick="readGroqReplyAloud(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--accent-vermilion)] cursor-pointer">Read</button>
        <button type="button" onclick="copyGroqReply(${idx})" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-tertiary)] cursor-pointer">Copy</button>
      </div>
    `;

    return `
      <div class="flex justify-start">
        <div class="max-w-[94%] w-full px-3 py-2.5 rounded-xl rounded-bl-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-[var(--text-primary)]">
          <div id="pkGroqMsgBody_${idx}" class="text-xs leading-relaxed whitespace-pre-wrap break-words font-sans">${escapeHtml(display || (m.streaming ? 'Thinking...' : ''))}</div>
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

async function sendGroqPrompt(overrideText) {
  if (pkGroqIsStreaming) return;
  const cfg = loadGroqConfig();
  if (!cfg.apiKey) {
    const panel = document.getElementById('pkGroqSettingsPanel');
    if (panel) panel.classList.remove('hidden');
    const inp = document.getElementById('pkGroqApiKeyInput');
    if (inp) inp.focus();
    if (typeof showToast === 'function') showToast('Add your Groq API key (gsk_...) first', 'ochre');
    return;
  }

  const promptEl = document.getElementById('pkGroqPromptInput');
  const userText = (typeof overrideText === 'string' ? overrideText : (promptEl ? promptEl.value : '')).trim();
  if (!userText) return;
  if (!overrideText && promptEl) promptEl.value = '';

  pkGroqHistory.push({ role: 'user', content: userText });
  const assistantIdx = pkGroqHistory.length;
  pkGroqHistory.push({ role: 'assistant', content: '', streaming: true, eventPayloads: [] });
  renderGroqMessages();

  setGroqStreamingButtons(true);
  pkGroqAbortController = new AbortController();

  // Keep last 10 turns so token usage stays fast & cheap
  const recentTurns = pkGroqHistory
    .slice(0, -1)
    .slice(-10)
    .map(m => ({ role: m.role, content: m.content }));

  const messages = [
    { role: 'system', content: buildGroqSystemPrompt() },
    ...recentTurns
  ];

  let rafPending = false;
  const flushStreamDom = () => {
    rafPending = false;
    const bodyEl = document.getElementById(`pkGroqMsgBody_${assistantIdx}`);
    const box = document.getElementById('pkGroqMessages');
    if (bodyEl) bodyEl.textContent = stripSpecialBlocksForDisplay(pkGroqHistory[assistantIdx].content) || 'Thinking...';
    if (box) box.scrollTop = box.scrollHeight;
  };

  try {
    const res = await fetch(PK_GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cfg.apiKey}`
      },
      signal: pkGroqAbortController.signal,
      body: JSON.stringify({
        model: cfg.model,
        messages,
        stream: true,
        temperature: 0.55,
        max_tokens: 1400
      })
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson?.error?.message || `Groq API HTTP ${res.status}`);
    }

    const reader = res.body && res.body.getReader ? res.body.getReader() : null;
    if (!reader) {
      const fullJson = await res.json();
      pkGroqHistory[assistantIdx].content = fullJson?.choices?.[0]?.message?.content || '';
    } else {
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line.startsWith('data:')) continue;
          const payload = line.slice(5).trim();
          if (payload === '[DONE]') continue;
          try {
            const parsed = JSON.parse(payload);
            const delta = parsed?.choices?.[0]?.delta?.content;
            if (delta) {
              pkGroqHistory[assistantIdx].content += delta;
              if (!rafPending) {
                rafPending = true;
                requestAnimationFrame(flushStreamDom);
              }
            }
          } catch (_) {}
        }
      }
    }

    pkGroqHistory[assistantIdx].streaming = false;
    pkGroqHistory[assistantIdx].eventPayloads = extractEventPayloadsFromText(pkGroqHistory[assistantIdx].content);
    renderGroqMessages();
  } catch (err) {
    pkGroqHistory[assistantIdx].streaming = false;
    if (err && err.name === 'AbortError') {
      if (!pkGroqHistory[assistantIdx].content) pkGroqHistory[assistantIdx].content = '(Stopped)';
    } else {
      const msg = err && err.message ? err.message : 'Request failed';
      pkGroqHistory[assistantIdx].content = `Groq error: ${msg}`;
      if (typeof showToast === 'function') showToast(`Groq: ${msg.slice(0, 60)}`, 'ochre');
    }
    renderGroqMessages();
  } finally {
    pkGroqAbortController = null;
    setGroqStreamingButtons(false);
  }
}

// Keyboard shortcut: Alt+A toggles Groq AI Assistant, Esc closes it
document.addEventListener('keydown', (e) => {
  if (e.altKey && (e.key === 'a' || e.key === 'A')) {
    e.preventDefault();
    const bd = document.getElementById('pkGroqAssistantBackdrop');
    if (bd && !bd.classList.contains('hidden')) closeGroqAssistant();
    else openGroqAssistant();
    return;
  }
  if (e.key === 'Escape') {
    const bd = document.getElementById('pkGroqAssistantBackdrop');
    if (bd && !bd.classList.contains('hidden')) closeGroqAssistant();
  }
});
