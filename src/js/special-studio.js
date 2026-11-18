// ============================================================================
// PK NOTE — SPECIAL STUDIO (v2.5 Signature Suite · 100% Client-Side, Zero Emoji)
//   1. Secret Vault Lock      — Real Web Crypto AES-256-GCM + PBKDF2 Note Encryption
//   2. Daily Habits & Briefing — 7-Day Streak Matrix + 1-Tap Daily Journal Generator
//   3. Canvas Sketchpad       — Touch/Mouse Drawing Board -> Insert Directly Into Note
//   4. Spotlight Teleprompter — Full-Screen Auto-Scroll Cinema Reader + Voice Sync
// ============================================================================

const PK_HABITS_STORAGE_KEY = 'pk_note_special_habits_v1';
let pkSpecialDrawerOpen = false;
let pkSpecialActiveTab = 'vault'; // 'vault' | 'habits' | 'sketch' | 'spotlight'

// ============================================================================
// DRAWER OPEN / CLOSE (SILKY SIDEBAR SPRING GLIDE)
// ============================================================================
function openSpecialStudio(initialTab) {
  if (typeof closeGroqAssistant === 'function' && typeof pkGroqDrawerOpen !== 'undefined' && pkGroqDrawerOpen) {
    closeGroqAssistant();
  }
  if (initialTab && ['vault', 'habits', 'sketch', 'spotlight'].includes(initialTab)) {
    pkSpecialActiveTab = initialTab;
  }
  const backdrop = document.getElementById('pkSpecialStudioBackdrop');
  const panel = document.getElementById('pkSpecialStudioPanel');
  syncSpecialStudioTabUI();
  if (backdrop && panel) {
    pkSpecialDrawerOpen = true;
    backdrop.setAttribute('aria-hidden', 'false');
    backdrop.classList.remove('invisible', 'pointer-events-none');
    requestAnimationFrame(() => {
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
      if (pkSpecialActiveTab === 'sketch') initSpecialSketchpad();
    });
  }
}

function closeSpecialStudio() {
  const backdrop = document.getElementById('pkSpecialStudioBackdrop');
  const panel = document.getElementById('pkSpecialStudioPanel');
  pkSpecialDrawerOpen = false;
  if (panel) {
    panel.classList.remove('translate-x-0');
    panel.classList.add('translate-x-full');
  }
  if (backdrop) {
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      if (!pkSpecialDrawerOpen) backdrop.classList.add('invisible');
    }, 240);
  }
}

function setSpecialStudioTab(tab) {
  if (!['vault', 'habits', 'sketch', 'spotlight'].includes(tab)) return;
  pkSpecialActiveTab = tab;
  syncSpecialStudioTabUI();
  if (tab === 'sketch') {
    requestAnimationFrame(() => initSpecialSketchpad());
  }
}

function syncSpecialStudioTabUI() {
  const tabs = [
    ['vault', 'pkSpecTabVault', 'pkSpecViewVault'],
    ['habits', 'pkSpecTabHabits', 'pkSpecViewHabits'],
    ['sketch', 'pkSpecTabSketch', 'pkSpecViewSketch'],
    ['spotlight', 'pkSpecTabSpotlight', 'pkSpecViewSpotlight']
  ];
  const activeCls = 'px-2 py-1.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer';
  const idleCls = 'px-2 py-1.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer';
  tabs.forEach(([id, btnId, viewId]) => {
    const btn = document.getElementById(btnId);
    const view = document.getElementById(viewId);
    if (btn) btn.className = pkSpecialActiveTab === id ? activeCls : idleCls;
    if (view) view.classList.toggle('hidden', pkSpecialActiveTab !== id);
  });

  if (pkSpecialActiveTab === 'vault') renderVaultLockPanel();
  else if (pkSpecialActiveTab === 'habits') renderHabitsPanel();
  else if (pkSpecialActiveTab === 'spotlight') renderSpotlightPreviewCard();
}

// ============================================================================
// 1. SECRET VAULT LOCK — REAL AES-256-GCM + PBKDF2-SHA256 NOTE ENCRYPTION
// ============================================================================
function pkBytesToBase64(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

function pkBase64ToBytes(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function pkDeriveAesKey(passphrase, saltBytes) {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(passphrase),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: saltBytes, iterations: 100000, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function pkEncryptJsonAesGcm(obj, passphrase) {
  if (!window.crypto || !window.crypto.subtle) {
    throw new Error('Web Crypto API requires HTTPS or localhost');
  }
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await pkDeriveAesKey(passphrase, salt);
  const plaintext = new TextEncoder().encode(JSON.stringify(obj));
  const cipherBuf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plaintext);
  return {
    alg: 'AES-256-GCM',
    kdf: 'PBKDF2-SHA256-100k',
    salt: pkBytesToBase64(salt),
    iv: pkBytesToBase64(iv),
    ct: pkBytesToBase64(new Uint8Array(cipherBuf)),
    lockedAt: new Date().toISOString()
  };
}

async function pkDecryptJsonAesGcm(payload, passphrase) {
  if (!window.crypto || !window.crypto.subtle) {
    throw new Error('Web Crypto API requires HTTPS or localhost');
  }
  const salt = pkBase64ToBytes(payload.salt);
  const iv = pkBase64ToBytes(payload.iv);
  const ct = pkBase64ToBytes(payload.ct);
  const key = await pkDeriveAesKey(passphrase, salt);
  const plainBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct);
  return JSON.parse(new TextDecoder().decode(plainBuf));
}

function toggleVaultPassVisibility() {
  const inp = document.getElementById('pkVaultPassInput');
  const btn = document.getElementById('pkVaultPassRevealBtn');
  if (!inp) return;
  const masked = inp.classList.contains('pk-key-masked');
  inp.classList.toggle('pk-key-masked', !masked);
  if (btn) btn.textContent = masked ? 'Hide' : 'Show';
}

function renderVaultLockPanel() {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  const statusEl = document.getElementById('pkVaultStatusBadge');
  const titleEl = document.getElementById('pkVaultNoteTitle');
  const descEl = document.getElementById('pkVaultStatusDesc');
  const lockBtn = document.getElementById('pkVaultEncryptBtn');
  const unlockBtn = document.getElementById('pkVaultDecryptBtn');
  const passInp = document.getElementById('pkVaultPassInput');

  if (!note) {
    if (titleEl) titleEl.textContent = 'No active note';
    return;
  }
  const isEncrypted = !!note.encryptedPayload;
  if (titleEl) titleEl.textContent = note.title || 'Untitled Note';
  if (statusEl) {
    statusEl.textContent = isEncrypted ? 'ENCRYPTED · AES-256-GCM' : 'UNENCRYPTED';
    statusEl.className = isEncrypted
      ? 'px-2 py-0.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-mono text-[9px] font-semibold'
      : 'px-2 py-0.5 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-[var(--text-tertiary)] font-mono text-[9px] font-semibold';
  }
  if (descEl) {
    descEl.textContent = isEncrypted
      ? 'This note is sealed with AES-256-GCM ciphertext. Enter your passphrase below to decrypt and restore all blocks.'
      : 'Seal this note with real browser Web Crypto AES-256-GCM encryption. Your passphrase is never stored anywhere.';
  }
  if (lockBtn) lockBtn.classList.toggle('hidden', isEncrypted);
  if (unlockBtn) unlockBtn.classList.toggle('hidden', !isEncrypted);
  if (passInp) passInp.value = '';
}

async function encryptActiveNoteWithVault() {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  if (!note) return;
  if (note.encryptedPayload) {
    if (typeof showToast === 'function') showToast('This note is already encrypted', 'ochre');
    return;
  }
  const passInp = document.getElementById('pkVaultPassInput');
  const pass = passInp ? passInp.value : '';
  if (!pass || pass.length < 4) {
    if (typeof showToast === 'function') showToast('Enter a passphrase (at least 4 characters)', 'ochre');
    return;
  }
  try {
    const payload = await pkEncryptJsonAesGcm({ blocks: note.blocks || [] }, pass);
    note.encryptedPayload = payload;
    note.blocks = [];
    note.locked = true;
    note.updatedAt = new Date().toISOString();
    if (passInp) passInp.value = '';
    if (typeof renderAll === 'function') renderAll();
    if (typeof persistState === 'function') persistState();
    renderVaultLockPanel();
    if (typeof showToast === 'function') showToast('Note sealed with AES-256-GCM encryption');
  } catch (err) {
    if (typeof showToast === 'function') showToast(`Encryption error: ${err.message || 'failed'}`, 'ochre');
  }
}

async function decryptActiveNoteWithVault(overridePass) {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  if (!note || !note.encryptedPayload) return;
  const passInp = document.getElementById('pkVaultPassInput');
  const inlineInp = document.getElementById('pkInlineVaultPassInput');
  const pass = typeof overridePass === 'string'
    ? overridePass
    : ((passInp && passInp.value) || (inlineInp && inlineInp.value) || '');

  if (!pass) {
    if (typeof showToast === 'function') showToast('Enter your passphrase to unlock this note', 'ochre');
    return;
  }
  try {
    const decrypted = await pkDecryptJsonAesGcm(note.encryptedPayload, pass);
    note.blocks = Array.isArray(decrypted.blocks) && decrypted.blocks.length > 0
      ? decrypted.blocks
      : [{ id: generateId('b'), type: 'paragraph', content: '' }];
    delete note.encryptedPayload;
    note.locked = false;
    note.updatedAt = new Date().toISOString();
    if (passInp) passInp.value = '';
    if (inlineInp) inlineInp.value = '';
    if (typeof renderAll === 'function') renderAll();
    if (typeof persistState === 'function') persistState();
    renderVaultLockPanel();
    if (typeof showToast === 'function') showToast('Note decrypted and unlocked');
  } catch (_) {
    if (typeof showToast === 'function') showToast('Wrong passphrase — could not decrypt note', 'ochre');
  }
}

// ============================================================================
// 2. DAILY HABITS TRACKER & 1-TAP DAILY BRIEFING GENERATOR
// ============================================================================
function pkGetDateKeyOffset(daysOffset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function loadSpecialHabits() {
  try {
    const raw = JSON.parse(localStorage.getItem(PK_HABITS_STORAGE_KEY) || 'null');
    if (Array.isArray(raw)) return raw;
  } catch (_) {}
  return [
    { id: 'hab_1', name: 'Deep Focus Session (30m)', days: {} },
    { id: 'hab_2', name: 'Read or Study Notes', days: {} },
    { id: 'hab_3', name: 'Exercise or Walk', days: {} }
  ];
}

function saveSpecialHabits(list) {
  try { localStorage.setItem(PK_HABITS_STORAGE_KEY, JSON.stringify(list)); } catch (_) {}
}

function computeHabitStreak(habit) {
  let streak = 0;
  const days = habit.days || {};
  const startOffset = days[pkGetDateKeyOffset(0)] ? 0 : -1;
  for (let i = startOffset; i >= -365; i--) {
    if (days[pkGetDateKeyOffset(i)]) streak++;
    else break;
  }
  return streak;
}

function renderHabitsPanel() {
  const listEl = document.getElementById('pkHabitsList');
  const progressBar = document.getElementById('pkHabitsProgressBar');
  const progressText = document.getElementById('pkHabitsProgressText');
  if (!listEl) return;

  const habits = loadSpecialHabits();
  const todayKey = pkGetDateKeyOffset(0);
  const dayCols = [-6, -5, -4, -3, -2, -1, 0].map(off => {
    const d = new Date();
    d.setDate(d.getDate() + off);
    return {
      key: pkGetDateKeyOffset(off),
      short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][d.getDay()],
      isToday: off === 0
    };
  });

  const doneToday = habits.filter(h => h.days && h.days[todayKey]).length;
  const pct = habits.length > 0 ? Math.round((doneToday / habits.length) * 100) : 0;
  if (progressBar) progressBar.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `${doneToday}/${habits.length} done today (${pct}%)`;

  if (habits.length === 0) {
    listEl.innerHTML = '<div class="py-4 text-center font-mono text-[10px] text-[var(--text-tertiary)]">Add your first daily ritual above.</div>';
    return;
  }

  listEl.innerHTML = habits.map(h => {
    const streak = computeHabitStreak(h);
    const cells = dayCols.map(col => {
      const checked = !!(h.days && h.days[col.key]);
      const cls = checked
        ? 'bg-[var(--accent-vermilion)] text-white border-[var(--accent-vermilion)]'
        : (col.isToday
            ? 'bg-[var(--bg-canvas)] text-[var(--text-primary)] border-[var(--accent-vermilion)]/50'
            : 'bg-[var(--bg-canvas)] text-[var(--text-tertiary)] border-[var(--border-hairline)]');
      return `<button type="button" onclick="toggleSpecialHabitDay('${escapeHtml(h.id)}','${col.key}')" title="${col.key}" class="w-7 h-7 rounded-[4px] border font-mono text-[9px] font-semibold flex items-center justify-center cursor-pointer transition-colors ${cls}">${col.short}</button>`;
    }).join('');

    return `
      <div class="p-2.5 rounded-[5px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] space-y-2">
        <div class="flex items-center justify-between gap-2">
          <div class="font-sans text-xs font-medium text-[var(--text-primary)] truncate">${escapeHtml(h.name)}</div>
          <div class="flex items-center gap-1.5 shrink-0">
            <span class="font-mono text-[9.5px] text-[var(--accent-vermilion)] font-semibold">${streak}d streak</span>
            <button type="button" onclick="deleteSpecialHabit('${escapeHtml(h.id)}')" title="Remove habit" class="w-5 h-5 rounded-[3px] text-[var(--text-tertiary)] hover:text-rose-500 font-mono text-[10px] cursor-pointer">✕</button>
          </div>
        </div>
        <div class="flex items-center justify-between gap-1">${cells}</div>
      </div>
    `;
  }).join('');
}

function addSpecialHabit() {
  const inp = document.getElementById('pkHabitAddInput');
  const name = inp ? inp.value.trim() : '';
  if (!name) return;
  const habits = loadSpecialHabits();
  habits.unshift({ id: 'hab_' + Date.now().toString(36), name: name.slice(0, 60), days: {} });
  saveSpecialHabits(habits);
  if (inp) inp.value = '';
  renderHabitsPanel();
  if (typeof showToast === 'function') showToast(`Added habit "${name}"`);
}

function toggleSpecialHabitDay(habitId, dateKey) {
  const habits = loadSpecialHabits();
  const h = habits.find(x => x.id === habitId);
  if (!h) return;
  if (!h.days) h.days = {};
  if (h.days[dateKey]) delete h.days[dateKey];
  else h.days[dateKey] = true;
  saveSpecialHabits(habits);
  renderHabitsPanel();
}

function deleteSpecialHabit(habitId) {
  const habits = loadSpecialHabits().filter(x => x.id !== habitId);
  saveSpecialHabits(habits);
  renderHabitsPanel();
}

function createDailyBriefingNote() {
  const todayKey = pkGetDateKeyOffset(0);
  const prettyDate = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  const habits = loadSpecialHabits();
  const blocks = [
    { id: generateId('b'), type: 'callout', content: `Daily Briefing · ${prettyDate}` },
    { id: generateId('b'), type: 'h2', content: 'Today\'s Schedule' }
  ];

  // Pull today's calendar events automatically
  const todayEvents = (typeof state !== 'undefined' && Array.isArray(state.events))
    ? state.events.filter(e => {
        const norm = typeof normalizeEventRange === 'function' ? normalizeEventRange(e) : null;
        const dKey = norm ? norm.startDateKey : (e.date || '');
        return dKey === todayKey;
      })
    : [];

  if (todayEvents.length > 0) {
    todayEvents.forEach(e => {
      const norm = typeof normalizeEventRange === 'function' ? normalizeEventRange(e) : null;
      const timeLabel = norm && !norm.allDay && typeof formatLocalTime24 === 'function'
        ? formatLocalTime24(norm.start)
        : 'All-day';
      blocks.push({ id: generateId('b'), type: 'bullet', content: `${timeLabel} — ${e.title}${e.location ? ' @ ' + e.location : ''}` });
    });
  } else {
    blocks.push({ id: generateId('b'), type: 'bullet', content: 'Open calendar — clear day for deep work.' });
  }

  blocks.push({ id: generateId('b'), type: 'h2', content: 'Daily Rituals' });
  habits.forEach(h => {
    blocks.push({
      id: generateId('b'),
      type: 'todo',
      checked: !!(h.days && h.days[todayKey]),
      content: h.name
    });
  });

  blocks.push(
    { id: generateId('b'), type: 'h2', content: 'Top 3 Priorities' },
    { id: generateId('b'), type: 'todo', checked: false, content: '' },
    { id: generateId('b'), type: 'h2', content: 'Quick Reflection' },
    { id: generateId('b'), type: 'paragraph', content: '' }
  );

  if (typeof createNewNote === 'function') {
    createNewNote('Journal');
    const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
    if (note) {
      note.title = `Daily Briefing · ${todayKey}`;
      note.blocks = blocks;
      note.tags = ['daily', 'briefing'];
      if (typeof setAppMode === 'function') setAppMode('workspace');
      if (typeof renderAll === 'function') renderAll();
      if (typeof persistState === 'function') persistState();
    }
  }
  closeSpecialStudio();
  if (typeof showToast === 'function') showToast(`Created Daily Briefing (${todayKey})`);
}

// ============================================================================
// 3. INTERACTIVE CANVAS SKETCHPAD (TOUCH + MOUSE -> INSERT INTO NOTE)
// ============================================================================
let pkSketchCtx = null;
let pkSketchStrokes = []; // [{ color, size, points: [{x,y}] }]
let pkSketchCurrentStroke = null;
let pkSketchColor = '#D95338';
let pkSketchSize = 3;
let pkSketchEraser = false;
let pkSketchShowGrid = true;
let pkSketchBound = false;

function initSpecialSketchpad() {
  const canvas = document.getElementById('pkSpecialSketchCanvas');
  if (!canvas) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const rect = canvas.getBoundingClientRect();
  const cssW = Math.max(260, Math.round(rect.width || 380));
  const cssH = 260;
  if (canvas.width !== cssW * dpr || canvas.height !== cssH * dpr) {
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
  }
  pkSketchCtx = canvas.getContext('2d');
  pkSketchCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  redrawSpecialSketch(cssW, cssH);

  if (!pkSketchBound) {
    pkSketchBound = true;
    const getPos = (e) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
      const pt = getPos(e);
      pkSketchCurrentStroke = {
        color: pkSketchEraser ? '__erase__' : pkSketchColor,
        size: pkSketchEraser ? 16 : pkSketchSize,
        points: [pt]
      };
      pkSketchStrokes.push(pkSketchCurrentStroke);
      redrawSpecialSketch(canvas.getBoundingClientRect().width, 260);
    });
    canvas.addEventListener('pointermove', (e) => {
      if (!pkSketchCurrentStroke) return;
      e.preventDefault();
      const pt = getPos(e);
      const pts = pkSketchCurrentStroke.points;
      const last = pts[pts.length - 1];
      if (!last || Math.hypot(pt.x - last.x, pt.y - last.y) >= 1.5) {
        pts.push(pt);
        redrawSpecialSketch(canvas.getBoundingClientRect().width, 260);
      }
    });
    const finishStroke = () => { pkSketchCurrentStroke = null; };
    canvas.addEventListener('pointerup', finishStroke);
    canvas.addEventListener('pointercancel', finishStroke);
  }
}

function redrawSpecialSketch(w, h) {
  if (!pkSketchCtx) return;
  const isDark = document.documentElement.classList.contains('dark');
  const bg = isDark ? '#18181B' : '#FAF8F5';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  pkSketchCtx.fillStyle = bg;
  pkSketchCtx.fillRect(0, 0, w, h);

  if (pkSketchShowGrid) {
    pkSketchCtx.fillStyle = gridColor;
    for (let x = 16; x < w; x += 20) {
      for (let y = 16; y < h; y += 20) {
        pkSketchCtx.fillRect(x, y, 1.5, 1.5);
      }
    }
  }

  pkSketchCtx.lineCap = 'round';
  pkSketchCtx.lineJoin = 'round';
  for (let i = 0; i < pkSketchStrokes.length; i++) {
    const s = pkSketchStrokes[i];
    if (!s.points || s.points.length === 0) continue;
    pkSketchCtx.strokeStyle = s.color === '__erase__' ? bg : s.color;
    pkSketchCtx.lineWidth = s.size;
    pkSketchCtx.beginPath();
    pkSketchCtx.moveTo(s.points[0].x, s.points[0].y);
    if (s.points.length === 1) {
      pkSketchCtx.lineTo(s.points[0].x + 0.1, s.points[0].y + 0.1);
    } else {
      for (let j = 1; j < s.points.length; j++) {
        pkSketchCtx.lineTo(s.points[j].x, s.points[j].y);
      }
    }
    pkSketchCtx.stroke();
  }
}

function setSpecialSketchColor(color) {
  pkSketchColor = color;
  pkSketchEraser = false;
  const erBtn = document.getElementById('pkSketchEraserBtn');
  if (erBtn) erBtn.classList.remove('bg-[var(--accent-vermilion)]', 'text-white');
}

function setSpecialSketchSize(sz) {
  pkSketchSize = Number(sz) || 3;
  pkSketchEraser = false;
}

function toggleSpecialSketchEraser() {
  pkSketchEraser = !pkSketchEraser;
  const erBtn = document.getElementById('pkSketchEraserBtn');
  if (erBtn) {
    erBtn.classList.toggle('bg-[var(--accent-vermilion)]', pkSketchEraser);
    erBtn.classList.toggle('text-white', pkSketchEraser);
  }
}

function toggleSpecialSketchGrid() {
  pkSketchShowGrid = !pkSketchShowGrid;
  const c = document.getElementById('pkSpecialSketchCanvas');
  if (c) redrawSpecialSketch(c.getBoundingClientRect().width || 380, 260);
}

function undoSpecialSketchStroke() {
  pkSketchStrokes.pop();
  const c = document.getElementById('pkSpecialSketchCanvas');
  if (c) redrawSpecialSketch(c.getBoundingClientRect().width || 380, 260);
}

function clearSpecialSketch() {
  pkSketchStrokes = [];
  const c = document.getElementById('pkSpecialSketchCanvas');
  if (c) redrawSpecialSketch(c.getBoundingClientRect().width || 380, 260);
}

function insertSpecialSketchIntoNote() {
  const c = document.getElementById('pkSpecialSketchCanvas');
  if (!c || pkSketchStrokes.length === 0) {
    if (typeof showToast === 'function') showToast('Draw something on the canvas first', 'ochre');
    return;
  }
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note) return;

  const captionInp = document.getElementById('pkSketchCaptionInput');
  const caption = captionInp && captionInp.value.trim() ? captionInp.value.trim() : `Sketch · ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  let dataUrl = '';
  try {
    dataUrl = c.toDataURL('image/webp', 0.82);
    if (!dataUrl || !dataUrl.startsWith('data:image/webp')) dataUrl = c.toDataURL('image/png');
  } catch (_) {
    dataUrl = c.toDataURL('image/png');
  }

  if (typeof takeSnapshot === 'function') takeSnapshot('insertSketch');
  note.blocks.push({
    id: generateId('b'),
    type: 'sketch',
    content: caption,
    imageData: dataUrl
  });
  note.updatedAt = new Date().toISOString();
  if (typeof setAppMode === 'function') setAppMode('workspace');
  if (typeof renderBlocks === 'function') renderBlocks(note);
  if (typeof persistState === 'function') persistState();
  clearSpecialSketch();
  if (captionInp) captionInp.value = '';
  closeSpecialStudio();
  if (typeof showToast === 'function') showToast('Inserted sketch into active note');
}

function downloadSpecialSketchPng() {
  const c = document.getElementById('pkSpecialSketchCanvas');
  if (!c || pkSketchStrokes.length === 0) {
    if (typeof showToast === 'function') showToast('Draw something first', 'ochre');
    return;
  }
  const a = document.createElement('a');
  a.href = c.toDataURL('image/png');
  a.download = `pk-note-sketch-${pkGetDateKeyOffset(0)}.png`;
  a.click();
}

// ============================================================================
// 4. SPOTLIGHT TELEPROMPTER CINEMA READER (AUTO-SCROLL + MIRROR + VOICE SYNC)
// ============================================================================
let pkSpotlightOpen = false;
let pkSpotlightScrolling = false;
let pkSpotlightSpeed = 1.0; // 0.5 .. 3.0
let pkSpotlightFontPx = 28;
let pkSpotlightMirrored = false;
let pkSpotlightRafId = null;
let pkSpotlightLastTs = 0;

function renderSpotlightPreviewCard() {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  const titleEl = document.getElementById('pkSpotlightPreviewTitle');
  const metaEl = document.getElementById('pkSpotlightPreviewMeta');
  if (!note) return;
  const text = (note.blocks || []).map(b => pkStripHtmlText(b.content)).filter(Boolean).join(' ');
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
  const mins = Math.max(1, Math.ceil(words / 160));
  if (titleEl) titleEl.textContent = note.title || 'Untitled Note';
  if (metaEl) metaEl.textContent = `${words} words · ~${mins} min read/speak`;
}

function launchSpotlightReader() {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  if (!note) return;
  if (note.encryptedPayload) {
    if (typeof showToast === 'function') showToast('Decrypt this note first in Vault Lock', 'ochre');
    setSpecialStudioTab('vault');
    return;
  }
  const overlay = document.getElementById('pkSpotlightOverlay');
  const contentEl = document.getElementById('pkSpotlightContent');
  const scroller = document.getElementById('pkSpotlightScroller');
  if (!overlay || !contentEl) return;

  const blocksHtml = (note.blocks || []).map(b => {
    if (b.type === 'sketch' && b.imageData) {
      return `<div class="my-6"><img src="${b.imageData}" alt="${escapeHtml(b.content || 'Sketch')}" class="max-w-full rounded-lg border border-white/15 mx-auto" /></div>`;
    }
    const t = pkStripHtmlText(b.content);
    if (!t) return '';
    if (b.type === 'h1' || b.type === 'h2') return `<h2 class="font-serif font-semibold text-[var(--accent-vermilion)] mt-8 mb-3 leading-tight">${escapeHtml(t)}</h2>`;
    if (b.type === 'quote' || b.type === 'callout') return `<blockquote class="border-l-2 border-[var(--accent-vermilion)] pl-5 italic opacity-90 my-5">${escapeHtml(t)}</blockquote>`;
    return `<p class="mb-5 leading-[1.65]">${escapeHtml(t)}</p>`;
  }).filter(Boolean).join('');

  contentEl.innerHTML = `
    <h1 class="font-serif font-bold mb-8 pb-4 border-b border-white/15 leading-tight">${escapeHtml(note.title || 'Untitled')}</h1>
    ${blocksHtml || '<p class="opacity-60">This note is empty.</p>'}
    <div class="h-[45vh]"></div>
  `;
  contentEl.style.fontSize = `${pkSpotlightFontPx}px`;
  contentEl.style.transform = pkSpotlightMirrored ? 'scaleX(-1)' : 'none';
  if (scroller) scroller.scrollTop = 0;

  closeSpecialStudio();
  overlay.classList.remove('hidden');
  pkSpotlightOpen = true;
  pkSpotlightScrolling = false;
  syncSpotlightControlsUI();
}

function closeSpotlightReader() {
  pkSpotlightOpen = false;
  pkSpotlightScrolling = false;
  if (pkSpotlightRafId) { cancelAnimationFrame(pkSpotlightRafId); pkSpotlightRafId = null; }
  const overlay = document.getElementById('pkSpotlightOverlay');
  if (overlay) overlay.classList.add('hidden');
}

function syncSpotlightControlsUI() {
  const playBtn = document.getElementById('pkSpotlightPlayBtn');
  const speedLbl = document.getElementById('pkSpotlightSpeedLbl');
  const mirrorBtn = document.getElementById('pkSpotlightMirrorBtn');
  if (playBtn) playBtn.textContent = pkSpotlightScrolling ? 'Pause' : 'Auto-Scroll';
  if (speedLbl) speedLbl.textContent = `${pkSpotlightSpeed.toFixed(1)}x`;
  if (mirrorBtn) {
    mirrorBtn.classList.toggle('bg-[var(--accent-vermilion)]', pkSpotlightMirrored);
    mirrorBtn.classList.toggle('text-white', pkSpotlightMirrored);
  }
}

function toggleSpotlightAutoScroll() {
  pkSpotlightScrolling = !pkSpotlightScrolling;
  syncSpotlightControlsUI();
  if (pkSpotlightScrolling) {
    pkSpotlightLastTs = performance.now();
    const step = (now) => {
      if (!pkSpotlightOpen || !pkSpotlightScrolling) return;
      const dt = Math.min(60, now - pkSpotlightLastTs);
      pkSpotlightLastTs = now;
      const scroller = document.getElementById('pkSpotlightScroller');
      if (scroller) {
        scroller.scrollTop += (dt / 1000) * (38 * pkSpotlightSpeed);
        if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 4) {
          pkSpotlightScrolling = false;
          syncSpotlightControlsUI();
          return;
        }
      }
      pkSpotlightRafId = requestAnimationFrame(step);
    };
    pkSpotlightRafId = requestAnimationFrame(step);
  } else if (pkSpotlightRafId) {
    cancelAnimationFrame(pkSpotlightRafId);
    pkSpotlightRafId = null;
  }
}

function adjustSpotlightSpeed(delta) {
  pkSpotlightSpeed = Math.max(0.5, Math.min(3.0, Math.round((pkSpotlightSpeed + delta) * 10) / 10));
  syncSpotlightControlsUI();
}

function adjustSpotlightFont(delta) {
  pkSpotlightFontPx = Math.max(18, Math.min(48, pkSpotlightFontPx + delta));
  const contentEl = document.getElementById('pkSpotlightContent');
  if (contentEl) contentEl.style.fontSize = `${pkSpotlightFontPx}px`;
}

function toggleSpotlightMirror() {
  pkSpotlightMirrored = !pkSpotlightMirrored;
  const contentEl = document.getElementById('pkSpotlightContent');
  if (contentEl) contentEl.style.transform = pkSpotlightMirrored ? 'scaleX(-1)' : 'none';
  syncSpotlightControlsUI();
}

function speakFromSpotlightReader() {
  if (typeof toggleReadingNoteAloud === 'function') toggleReadingNoteAloud();
}

// Keyboard shortcuts: Alt+P toggles PK Special Studio; Esc closes; Space toggles Spotlight scroll
document.addEventListener('keydown', (e) => {
  if (e.altKey && (e.key === 'p' || e.key === 'P')) {
    e.preventDefault();
    if (pkSpecialDrawerOpen) closeSpecialStudio();
    else openSpecialStudio();
    return;
  }
  if (e.key === 'Escape') {
    if (pkSpotlightOpen) { closeSpotlightReader(); return; }
    if (pkSpecialDrawerOpen) { closeSpecialStudio(); return; }
  }
  if (pkSpotlightOpen && e.code === 'Space') {
    e.preventDefault();
    toggleSpotlightAutoScroll();
  }
});
