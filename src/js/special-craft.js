// ============================================================================
// PK NOTE — SIGNATURE CRAFT SUITE (100% Client-Side, Zero Server, Zero Emoji)
// 1. Study Deck (Auto-Generated Flashcards & Spaced Recall)
// 2. Focus Soundscapes (0 MB Procedural Web Audio Synthesizer)
// 3. Time-Capsule Note Snapshots & Visual Diff
// 4. Vault Pulse (Rust WebAssembly Readability & 28-Day Writing Streak)
// 5. Quick Scratchpad Drawer (Alt+S Persistent Sticky Capture)
// ============================================================================

const PK_STUDY_MASTERY_KEY = 'pk_note_study_mastery_v1';
const PK_SNAPSHOTS_KEY = 'pk_note_snapshots_v1';
const PK_ACTIVITY_KEY = 'pk_note_activity_v1';
const PK_SCRATCHPAD_KEY = 'pk_note_scratchpad_v1';

function pkStripHtmlText(raw) {
  if (!raw) return '';
  return String(raw)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .trim();
}

// Track daily writing activity for Vault Pulse 28-day heatmap
function pkRecordActivityToday(wordsDelta = 1) {
  try {
    const key = new Date().toISOString().slice(0, 10);
    const map = JSON.parse(localStorage.getItem(PK_ACTIVITY_KEY) || '{}');
    map[key] = (map[key] || 0) + Math.max(1, wordsDelta);
    // Prune entries older than 60 days so storage stays tiny
    const cutoff = new Date(Date.now() - 60 * 86400000).toISOString().slice(0, 10);
    Object.keys(map).forEach(d => { if (d < cutoff) delete map[d]; });
    localStorage.setItem(PK_ACTIVITY_KEY, JSON.stringify(map));
  } catch (_) {}
}

// ============================================================================
// 1. STUDY DECK — AUTO-GENERATED FLASHCARDS & SPACED RECALL
// ============================================================================
let pkStudyScope = 'note'; // 'note' | 'vault'
let pkStudyCards = [];
let pkStudyIdx = 0;
let pkStudyFlipped = false;

function loadStudyMastery() {
  try { return JSON.parse(localStorage.getItem(PK_STUDY_MASTERY_KEY) || '{}'); } catch (_) { return {}; }
}

function saveStudyMastery(map) {
  try { localStorage.setItem(PK_STUDY_MASTERY_KEY, JSON.stringify(map)); } catch (_) {}
}

function extractCardsFromNote(note) {
  if (!note || !Array.isArray(note.blocks)) return [];
  const cards = [];
  const title = note.title || 'Untitled';
  const blocks = note.blocks;

  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const txt = pkStripHtmlText(b.content || '');
    if (!txt || txt.length < 4) continue;

    // Pattern A: Explicit "Question :: Answer" card syntax
    if (txt.includes('::')) {
      const parts = txt.split('::');
      const front = parts[0].trim();
      const back = parts.slice(1).join('::').trim();
      if (front && back) {
        cards.push({ id: `${note.id}:${b.id}`, front, back, source: title, kind: 'Q/A' });
        continue;
      }
    }

    // Pattern B: Heading followed by 1..3 explanation blocks
    if (b.type === 'h1' || b.type === 'h2' || b.type === 'h3') {
      const answerLines = [];
      let j = i + 1;
      while (j < blocks.length && answerLines.length < 4) {
        const nb = blocks[j];
        if (nb.type === 'h1' || nb.type === 'h2' || nb.type === 'h3' || nb.type === 'divider') break;
        const nt = pkStripHtmlText(nb.content || '');
        if (nt) answerLines.push(nb.type === 'bullet' || nb.type === 'todo' ? `• ${nt}` : nt);
        j++;
      }
      if (answerLines.length > 0) {
        cards.push({
          id: `${note.id}:h:${b.id}`,
          front: txt,
          back: answerLines.join('\n'),
          source: title,
          kind: 'CONCEPT'
        });
      }
      continue;
    }

    // Pattern C: "Term: Definition" on concise lines (outside headings)
    const colonIdx = txt.indexOf(': ');
    if (colonIdx >= 3 && colonIdx <= 48 && txt.length >= colonIdx + 8 && !/^https?:/i.test(txt)) {
      const term = txt.slice(0, colonIdx).trim();
      const def = txt.slice(colonIdx + 2).trim();
      if (term.split(/\s+/).length <= 7 && def.length >= 6) {
        cards.push({ id: `${note.id}:d:${b.id}`, front: term, back: def, source: title, kind: 'DEFINITION' });
        continue;
      }
    }

    // Pattern D: Callouts & Quotes as active-recall highlights
    if ((b.type === 'callout' || b.type === 'quote') && txt.length >= 16) {
      cards.push({
        id: `${note.id}:q:${b.id}`,
        front: `Key insight from "${title}"`,
        back: txt,
        source: title,
        kind: b.type.toUpperCase()
      });
    }
  }

  return cards;
}

function buildStudyDeck() {
  const mastery = loadStudyMastery();
  let cards = [];
  if (pkStudyScope === 'vault' && typeof state !== 'undefined' && Array.isArray(state.notes)) {
    state.notes.forEach(n => { cards = cards.concat(extractCardsFromNote(n)); });
  } else {
    const active = typeof getActiveNote === 'function' ? getActiveNote() : null;
    if (active) cards = extractCardsFromNote(active);
  }
  // Put unmastered cards first so study sessions focus on what needs recall
  cards.sort((a, b) => (mastery[a.id] === 'easy' ? 1 : 0) - (mastery[b.id] === 'easy' ? 1 : 0));
  pkStudyCards = cards;
  pkStudyIdx = 0;
  pkStudyFlipped = false;
}

function renderStudyDeckCard() {
  const progLabel = document.getElementById('pkStudyProgressLabel');
  const mastLabel = document.getElementById('pkStudyMasteryLabel');
  const progBar = document.getElementById('pkStudyProgressBar');
  const sideTag = document.getElementById('pkStudyCardSideTag');
  const srcEl = document.getElementById('pkStudyCardSource');
  const txtEl = document.getElementById('pkStudyCardText');
  const hintEl = document.getElementById('pkStudyFlipHint');
  const rateRow = document.getElementById('pkStudyRatingRow');
  const subEl = document.getElementById('pkStudyDeckSubtitle');

  const noteBtn = document.getElementById('pkStudyScopeNoteBtn');
  const vaultBtn = document.getElementById('pkStudyScopeVaultBtn');
  if (noteBtn && vaultBtn) {
    const activeCls = 'px-2 py-1 rounded-[3px] font-mono text-[10px] font-semibold bg-[var(--accent-vermilion)] text-white cursor-pointer';
    const idleCls = 'px-2 py-1 rounded-[3px] font-mono text-[10px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer';
    noteBtn.className = pkStudyScope === 'note' ? activeCls : idleCls;
    vaultBtn.className = pkStudyScope === 'vault' ? activeCls : idleCls;
  }

  const mastery = loadStudyMastery();
  const total = pkStudyCards.length;
  const masteredCount = pkStudyCards.filter(c => mastery[c.id] === 'easy').length;
  if (mastLabel) mastLabel.textContent = `${masteredCount}/${total} mastered`;
  if (subEl) subEl.textContent = pkStudyScope === 'vault' ? `Studying entire vault (${total} cards)` : `Active note (${total} cards)`;

  if (total === 0) {
    if (progLabel) progLabel.textContent = '0 cards found';
    if (progBar) progBar.style.width = '0%';
    if (sideTag) sideTag.textContent = 'READY TO BUILD';
    if (srcEl) srcEl.textContent = '';
    if (txtEl) txtEl.textContent = 'Add a Heading + paragraph, a Callout, or a line like "Photosynthesis :: Process plants use to convert light into energy" to generate instant flashcards.';
    if (hintEl) hintEl.textContent = 'Switch to Vault above to study all notes';
    if (rateRow) rateRow.style.opacity = '0.4';
    return;
  }

  if (rateRow) rateRow.style.opacity = '1';
  const card = pkStudyCards[pkStudyIdx % total];
  const pct = Math.round(((pkStudyIdx + 1) / total) * 100);
  if (progLabel) progLabel.textContent = `Card ${(pkStudyIdx % total) + 1} of ${total}`;
  if (progBar) progBar.style.width = `${pct}%`;
  if (srcEl) srcEl.textContent = `${card.kind} · ${card.source.slice(0, 22)}`;

  if (pkStudyFlipped) {
    if (sideTag) {
      sideTag.textContent = 'ANSWER';
      sideTag.className = 'px-2 py-0.5 rounded-[2px] bg-emerald-500/15 text-emerald-500 font-mono text-[9px] font-semibold uppercase tracking-wider';
    }
    if (txtEl) txtEl.textContent = card.back;
    if (hintEl) hintEl.textContent = 'Rate recall below (1 Again · 2 Good · 3 Mastered)';
  } else {
    if (sideTag) {
      sideTag.textContent = 'PROMPT';
      sideTag.className = 'px-2 py-0.5 rounded-[2px] bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] font-mono text-[9px] font-semibold uppercase tracking-wider';
    }
    if (txtEl) txtEl.textContent = card.front;
    if (hintEl) hintEl.textContent = 'Tap card or press Space to reveal answer';
  }
}

function openStudyDeckModal(scope) {
  if (scope === 'note' || scope === 'vault') pkStudyScope = scope;
  buildStudyDeck();
  renderStudyDeckCard();
  const el = document.getElementById('pkStudyDeckBackdrop');
  if (typeof openModalWithAnimation === 'function') openModalWithAnimation(el);
  else if (el) el.classList.remove('hidden');
}

function closeStudyDeckModal(e) {
  if (e && e.target && e.target !== document.getElementById('pkStudyDeckBackdrop') && e.target !== e.currentTarget) return;
  if (typeof closeModalWithAnimation === 'function') closeModalWithAnimation('pkStudyDeckBackdrop');
  else {
    const el = document.getElementById('pkStudyDeckBackdrop');
    if (el) el.classList.add('hidden');
  }
}

function setStudyDeckScope(scope) {
  pkStudyScope = scope === 'vault' ? 'vault' : 'note';
  buildStudyDeck();
  renderStudyDeckCard();
}

function flipStudyCard() {
  if (pkStudyCards.length === 0) return;
  pkStudyFlipped = !pkStudyFlipped;
  renderStudyDeckCard();
}

function rateStudyCard(level) {
  if (pkStudyCards.length === 0) return;
  const card = pkStudyCards[pkStudyIdx % pkStudyCards.length];
  const mastery = loadStudyMastery();
  mastery[card.id] = level;
  saveStudyMastery(mastery);
  pkRecordActivityToday(2);

  if (level === 'again' && pkStudyCards.length > 2) {
    // Re-queue missed card 2 positions later for active recall
    const missed = pkStudyCards.splice(pkStudyIdx % pkStudyCards.length, 1)[0];
    const insertAt = Math.min(pkStudyCards.length, pkStudyIdx + 2);
    pkStudyCards.splice(insertAt, 0, missed);
  } else {
    pkStudyIdx = (pkStudyIdx + 1) % pkStudyCards.length;
  }
  pkStudyFlipped = false;
  renderStudyDeckCard();
  if (typeof showToast === 'function') {
    showToast(level === 'easy' ? 'Card mastered' : level === 'good' ? 'Good recall' : 'Scheduled for quick review');
  }
}

function shuffleStudyDeck() {
  for (let i = pkStudyCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = pkStudyCards[i];
    pkStudyCards[i] = pkStudyCards[j];
    pkStudyCards[j] = tmp;
  }
  pkStudyIdx = 0;
  pkStudyFlipped = false;
  renderStudyDeckCard();
  if (typeof showToast === 'function') showToast('Study deck shuffled');
}

function resetStudyMastery() {
  saveStudyMastery({});
  buildStudyDeck();
  renderStudyDeckCard();
  if (typeof showToast === 'function') showToast('Study mastery reset');
}

function speakCurrentStudyCard() {
  if (pkStudyCards.length === 0) return;
  const card = pkStudyCards[pkStudyIdx % pkStudyCards.length];
  const text = pkStudyFlipped ? card.back : card.front;
  if (typeof readTextAloud === 'function') {
    readTextAloud(text, pkStudyFlipped ? 'Card Answer' : 'Card Prompt');
  }
}

// ============================================================================
// 2. AMBIENT FOCUS SOUNDSCAPES (0 MB PROCEDURAL WEB AUDIO SYNTHESIZER)
// ============================================================================
const PK_SOUNDSCAPES = [
  { id: 'rain',      name: 'Warm Rain',         desc: 'Soft filtered rainfall on archival glass', tag: 'CALM' },
  { id: 'brown',     name: 'Deep Brown Focus',  desc: 'Velvety low-frequency noise for deep reading', tag: 'STUDY' },
  { id: 'fireplace', name: 'Library Fireplace', desc: 'Warm low hearth rumble with subtle texture', tag: 'COZY' },
  { id: 'cafe',      name: 'Quiet Study Room',  desc: 'Gentle mid-warm ambient room tone', tag: 'AMBIENT' },
  { id: 'gamma40',   name: '40 Hz Focus Pulse', desc: 'Ultra-subtle soft focus bed for concentration', tag: 'FOCUS' }
];

let pkAmbientCtx = null;
let pkAmbientGain = null;
let pkAmbientNodes = [];
let pkAmbientActiveId = null;
let pkAmbientVolume = 0.35;

function createNoiseBuffer(ctx, type) {
  const sr = ctx.sampleRate || 44100;
  const len = sr * 3; // 3-second seamless loop buffer (tiny RAM footprint)
  const buf = ctx.createBuffer(1, len, sr);
  const data = buf.getChannelData(0);

  if (type === 'brown') {
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
  } else {
    // Pink noise (Paul Kellet filter)
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + w * 0.0555179;
      b1 = 0.99332 * b1 + w * 0.0750759;
      b2 = 0.96900 * b2 + w * 0.1538520;
      b3 = 0.86650 * b3 + w * 0.3104856;
      b4 = 0.55000 * b4 + w * 0.5329522;
      b5 = -0.7616 * b5 - w * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11;
      b6 = w * 0.115926;
    }
  }
  // Smooth crossfade loop edges so loop seam is 100% inaudible
  const fade = Math.min(2048, Math.floor(len / 8));
  for (let i = 0; i < fade; i++) {
    const t = i / fade;
    data[i] = data[i] * t + data[len - fade + i] * (1 - t);
  }
  return buf;
}

function stopSoundscape(silent = false) {
  pkAmbientNodes.forEach(n => {
    try { if (typeof n.stop === 'function') n.stop(); } catch (_) {}
    try { n.disconnect(); } catch (_) {}
  });
  pkAmbientNodes = [];
  if (pkAmbientGain) {
    try { pkAmbientGain.disconnect(); } catch (_) {}
    pkAmbientGain = null;
  }
  if (pkAmbientCtx) {
    try { pkAmbientCtx.close(); } catch (_) {}
    pkAmbientCtx = null;
  }
  const wasActive = !!pkAmbientActiveId;
  pkAmbientActiveId = null;
  updateSoundscapeUI();
  if (wasActive && !silent && typeof showToast === 'function') {
    showToast('Focus soundscape stopped');
  }
}

function toggleSoundscape(id) {
  if (pkAmbientActiveId === id) {
    stopSoundscape();
    return;
  }
  stopSoundscape(true);
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) {
    if (typeof showToast === 'function') showToast('Web Audio not supported in this browser', 'ochre');
    return;
  }

  try {
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.001, ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(Math.max(0.01, pkAmbientVolume * 0.45), ctx.currentTime + 0.45);
    master.connect(ctx.destination);

    const nodes = [];

    if (id === 'rain') {
      const src = ctx.createBufferSource();
      src.buffer = createNoiseBuffer(ctx, 'pink');
      src.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 1050;
      bp.Q.value = 0.65;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 2600;
      src.connect(bp); bp.connect(lp); lp.connect(master);
      src.start(0);
      nodes.push(src, bp, lp);
    } else if (id === 'brown') {
      const src = ctx.createBufferSource();
      src.buffer = createNoiseBuffer(ctx, 'brown');
      src.loop = true;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 420;
      src.connect(lp); lp.connect(master);
      src.start(0);
      nodes.push(src, lp);
    } else if (id === 'fireplace') {
      const src = ctx.createBufferSource();
      src.buffer = createNoiseBuffer(ctx, 'brown');
      src.loop = true;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 240;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.35;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 70;
      lfo.connect(lfoGain);
      lfoGain.connect(lp.frequency);
      src.connect(lp); lp.connect(master);
      src.start(0); lfo.start(0);
      nodes.push(src, lp, lfo, lfoGain);
    } else if (id === 'cafe') {
      const src = ctx.createBufferSource();
      src.buffer = createNoiseBuffer(ctx, 'pink');
      src.loop = true;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 680;
      const hp = ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 110;
      src.connect(hp); hp.connect(lp); lp.connect(master);
      src.start(0);
      nodes.push(src, hp, lp);
    } else if (id === 'gamma40') {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 220;
      const mod = ctx.createOscillator();
      mod.type = 'sine';
      mod.frequency.value = 40;
      const modGain = ctx.createGain();
      modGain.gain.value = 0.18;
      const carrierGain = ctx.createGain();
      carrierGain.gain.value = 0.25;
      mod.connect(modGain);
      modGain.connect(carrierGain.gain);
      osc.connect(carrierGain);
      carrierGain.connect(master);
      // Soft brown bed underneath so tone feels natural and warm
      const bed = ctx.createBufferSource();
      bed.buffer = createNoiseBuffer(ctx, 'brown');
      bed.loop = true;
      const bedLp = ctx.createBiquadFilter();
      bedLp.type = 'lowpass';
      bedLp.frequency.value = 300;
      const bedGain = ctx.createGain();
      bedGain.gain.value = 0.5;
      bed.connect(bedLp); bedLp.connect(bedGain); bedGain.connect(master);
      osc.start(0); mod.start(0); bed.start(0);
      nodes.push(osc, mod, modGain, carrierGain, bed, bedLp, bedGain);
    }

    pkAmbientCtx = ctx;
    pkAmbientGain = master;
    pkAmbientNodes = nodes;
    pkAmbientActiveId = id;
    updateSoundscapeUI();

    const meta = PK_SOUNDSCAPES.find(s => s.id === id);
    if (typeof showToast === 'function') showToast(`Playing ${meta ? meta.name : 'Soundscape'} (0 MB)`);
  } catch (err) {
    stopSoundscape(true);
    if (typeof showToast === 'function') showToast('Audio could not start', 'ochre');
  }
}

function setSoundscapeVolume(val) {
  const pct = Math.max(5, Math.min(100, Number(val) || 35));
  pkAmbientVolume = pct / 100;
  const lbl = document.getElementById('pkSoundscapeVolLabel');
  if (lbl) lbl.textContent = `${pct}%`;
  if (pkAmbientGain && pkAmbientCtx) {
    pkAmbientGain.gain.setTargetAtTime(Math.max(0.01, pkAmbientVolume * 0.45), pkAmbientCtx.currentTime, 0.05);
  }
}

function updateSoundscapeUI() {
  const grid = document.getElementById('pkSoundscapeGrid');
  const statusEl = document.getElementById('pkSoundscapeStatus');
  const headerBtn = document.getElementById('desktopSoundscapeBtn');
  const activeMeta = PK_SOUNDSCAPES.find(s => s.id === pkAmbientActiveId);

  if (statusEl) {
    statusEl.textContent = activeMeta
      ? `Playing: ${activeMeta.name} · Procedural 0 MB`
      : '0 MB procedural audio · Offline ready';
  }
  if (headerBtn) {
    headerBtn.style.color = activeMeta ? 'var(--accent-vermilion)' : '';
    headerBtn.style.borderColor = activeMeta ? 'var(--accent-vermilion)' : '';
  }
  if (!grid) return;

  grid.innerHTML = PK_SOUNDSCAPES.map(s => {
    const isOn = pkAmbientActiveId === s.id;
    return `
      <button type="button" onclick="toggleSoundscape('${s.id}')"
              style="${isOn ? 'border-color: var(--accent-vermilion); background-color: var(--accent-vermilion-tint);' : ''}"
              class="w-full p-3 rounded-lg bg-[var(--bg-canvas)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] flex items-center justify-between gap-3 text-left cursor-pointer">
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span class="font-serif font-semibold text-xs text-[var(--text-primary)]">${s.name}</span>
            <span class="px-1.5 py-0.5 rounded-[2px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] font-mono text-[9px] text-[var(--text-tertiary)]">${s.tag}</span>
          </div>
          <div class="font-mono text-[10px] text-[var(--text-tertiary)] mt-0.5 truncate">${s.desc}</div>
        </div>
        <span class="shrink-0 px-2.5 py-1 rounded-[3px] font-mono text-[10px] font-semibold ${isOn ? 'bg-[var(--accent-vermilion)] text-white' : 'bg-[var(--bg-panel)] border border-[var(--border-hairline)] text-[var(--text-secondary)]'}">
          ${isOn ? 'Playing' : 'Play'}
        </span>
      </button>
    `;
  }).join('');
}

function openSoundscapeModal() {
  updateSoundscapeUI();
  const el = document.getElementById('pkSoundscapeBackdrop');
  if (typeof openModalWithAnimation === 'function') openModalWithAnimation(el);
  else if (el) el.classList.remove('hidden');
}

function closeSoundscapeModal(e) {
  if (e && e.target && e.target !== document.getElementById('pkSoundscapeBackdrop') && e.target !== e.currentTarget) return;
  if (typeof closeModalWithAnimation === 'function') closeModalWithAnimation('pkSoundscapeBackdrop');
  else {
    const el = document.getElementById('pkSoundscapeBackdrop');
    if (el) el.classList.add('hidden');
  }
}

// ============================================================================
// 3. TIME-CAPSULE NOTE SNAPSHOTS & VISUAL LINE DIFF
// ============================================================================
let pkSelectedSnapshotId = null;

function loadAllSnapshots() {
  try { return JSON.parse(localStorage.getItem(PK_SNAPSHOTS_KEY) || '{}'); } catch (_) { return {}; }
}

function saveAllSnapshots(map) {
  try { localStorage.setItem(PK_SNAPSHOTS_KEY, JSON.stringify(map)); } catch (_) {}
}

function noteToPlainLines(note) {
  if (!note) return [];
  return (note.blocks || [])
    .map(b => pkStripHtmlText(b.content || ''))
    .filter(Boolean);
}

function stampNoteSnapshot(notify = false, customLabel = '') {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  if (!note) return null;
  const all = loadAllSnapshots();
  const list = all[note.id] || [];
  const blocksClone = JSON.parse(JSON.stringify(note.blocks || []));
  const words = noteToPlainLines(note).join(' ').split(/\s+/).filter(Boolean).length;
  const snap = {
    id: 'snap_' + Date.now().toString(36),
    ts: Date.now(),
    label: customLabel || (notify ? 'Manual Stamp' : 'Auto Backup'),
    title: note.title || 'Untitled',
    words,
    blocks: blocksClone
  };
  list.unshift(snap);
  all[note.id] = list.slice(0, 12); // Cap cleanly at 12 snapshots per note
  saveAllSnapshots(all);
  pkRecordActivityToday(1);
  if (notify && typeof showToast === 'function') {
    showToast(`Snapshot stamped (${words} words)`);
  }
  return snap;
}

function renderTimeCapsuleModal() {
  if (typeof openRevisionHistoryModal === 'function') {
    openRevisionHistoryModal();
  }
}

function selectSnapshotForDiff(snapId) {
  pkSelectedSnapshotId = snapId;
}

function renderSnapshotDiff(note, snap) {
  if (typeof renderRevisionDiff === 'function') {
    renderRevisionDiff(snap);
  }
}

function restoreSelectedSnapshot() {
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note || !pkSelectedSnapshotId) return;
  const all = loadAllSnapshots();
  const snaps = all[note.id] || [];
  const snap = snaps.find(s => s.id === pkSelectedSnapshotId);
  if (!snap) return;

  // Always auto-backup current version BEFORE restoring so no work is ever lost!
  stampNoteSnapshot(false, 'Pre-Restore Backup');
  if (typeof takeSnapshot === 'function') takeSnapshot('restoreTimeCapsule');
  note.title = snap.title;
  note.blocks = JSON.parse(JSON.stringify(snap.blocks));
  note.updatedAt = typeof TODAY_KEY !== 'undefined' ? TODAY_KEY : new Date().toISOString().slice(0, 10);
  if (typeof renderAll === 'function') renderAll();
  if (typeof persistState === 'function') persistState();
  closeTimeCapsuleModal();
  if (typeof showToast === 'function') showToast('Snapshot restored (previous state backed up)');
}

function deleteNoteSnapshot(snapId) {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  if (!note) return;
  const all = loadAllSnapshots();
  all[note.id] = (all[note.id] || []).filter(s => s.id !== snapId);
  saveAllSnapshots(all);
  if (pkSelectedSnapshotId === snapId) pkSelectedSnapshotId = null;
  renderTimeCapsuleModal();
}

function openTimeCapsuleModal() {
  if (typeof openRevisionHistoryModal === 'function') {
    openRevisionHistoryModal();
  }
}

function closeTimeCapsuleModal() {
  if (typeof closeRevisionHistoryModal === 'function') {
    closeRevisionHistoryModal();
  }
}

// ============================================================================
// 4. VAULT PULSE — RUST WEBASSEMBLY READABILITY & 28-DAY ACTIVITY HEATMAP
// ============================================================================
function analyzeNoteStatsWithWasm(text) {
  if (window.PKWasm && window.PKWasm.ready && typeof window.PKWasm.analyzeText === 'function') {
    const r = window.PKWasm.analyzeText(text);
    if (r) return { ...r, engine: 'Rust WebAssembly' };
  }
  const wordsArr = text.trim() ? text.trim().split(/\s+/) : [];
  const sentences = Math.max(wordsArr.length ? 1 : 0, (text.match(/[.!?]+/g) || []).length);
  const nonWsChars = text.replace(/\s+/g, '').length;
  const longWords = wordsArr.filter(w => w.replace(/[^a-zA-Z]/g, '').length >= 7).length;
  const syllables = Math.max(wordsArr.length, Math.round(nonWsChars / 3.1));
  return { words: wordsArr.length, sentences, nonWsChars, syllables, longWords, engine: 'JS Fallback' };
}

function openVaultPulseModal() {
  const body = document.getElementById('pkVaultPulseBody');
  const tag = document.getElementById('pkVaultPulseEngineTag');
  if (!body) return;

  const activeNote = typeof getActiveNote === 'function' ? getActiveNote() : null;
  const activeText = activeNote ? [activeNote.title || '', ...noteToPlainLines(activeNote)].join('\n') : '';
  const stats = analyzeNoteStatsWithWasm(activeText);

  if (tag) tag.textContent = `${stats.engine} · Zero-Server Vault Analytics`;

  // Flesch-Kincaid Reading Ease & Speaking Duration synced to Voice Studio rate
  const wps = stats.sentences > 0 ? stats.words / stats.sentences : 0;
  const spw = stats.words > 0 ? stats.syllables / stats.words : 0;
  const flesch = stats.words >= 8 ? Math.max(0, Math.min(100, Math.round(206.835 - 1.015 * wps - 84.6 * spw))) : 80;
  const clarityLabel = flesch >= 70 ? 'Crisp & Clear' : flesch >= 50 ? 'Editorial' : 'Dense / Academic';

  const voiceRate = (typeof getVoiceSettings === 'function' ? getVoiceSettings().rate : 1.0) || 1.0;
  const speakSec = Math.round((stats.words / (155 * voiceRate)) * 60);
  const speakFmt = speakSec >= 60 ? `${Math.floor(speakSec / 60)}m ${speakSec % 60}s` : `${speakSec}s`;

  const uniqueWords = new Set((activeText.toLowerCase().match(/[a-z]{3,}/g) || [])).size;
  const richnessPct = stats.words > 0 ? Math.min(100, Math.round((uniqueWords / Math.max(1, stats.words)) * 100)) : 0;

  // Vault totals
  const notes = (typeof state !== 'undefined' && Array.isArray(state.notes)) ? state.notes : [];
  let vaultWords = 0;
  let todoDone = 0, todoTotal = 0;
  notes.forEach(n => {
    (n.blocks || []).forEach(b => {
      const t = pkStripHtmlText(b.content || '');
      if (t) vaultWords += t.split(/\s+/).filter(Boolean).length;
      if (b.type === 'todo') { todoTotal++; if (b.checked) todoDone++; }
    });
  });

  // 28-Day Archival Heatmap & Streak
  let activity = {};
  try { activity = JSON.parse(localStorage.getItem(PK_ACTIVITY_KEY) || '{}'); } catch (_) {}
  // Seed today if notes exist so first view feels alive
  const todayStr = new Date().toISOString().slice(0, 10);
  if (!activity[todayStr] && vaultWords > 0) activity[todayStr] = 1;

  const days = [];
  let streak = 0;
  let streakAlive = true;
  for (let d = 0; d < 28; d++) {
    const dt = new Date(Date.now() - d * 86400000);
    const key = dt.toISOString().slice(0, 10);
    const count = activity[key] || 0;
    if (streakAlive && count > 0) streak++;
    else if (d > 0) streakAlive = false;
    days.unshift({ key, count });
  }

  const heatCells = days.map(day => {
    const bg = day.count >= 12 ? 'background-color: var(--accent-vermilion);'
             : day.count >= 5  ? 'background-color: rgba(217, 83, 56, 0.58);'
             : day.count >= 1  ? 'background-color: rgba(217, 83, 56, 0.28);'
             : 'background-color: var(--bg-canvas);';
    return `<div class="pk-heat-cell" style="${bg}" title="${day.key}: ${day.count} actions"></div>`;
  }).join('');

  body.innerHTML = `
    <div class="space-y-2">
      <div class="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">Active Note Rhythm</div>
      <div class="grid grid-cols-3 gap-2">
        <div class="p-2.5 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-hairline)]">
          <div class="font-mono text-[9px] text-[var(--text-tertiary)] uppercase">Words</div>
          <div class="font-serif text-lg font-semibold text-[var(--text-primary)]">${stats.words}</div>
          <div class="font-mono text-[9px] text-[var(--text-tertiary)]">${stats.sentences} sentences</div>
        </div>
        <div class="p-2.5 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-hairline)]">
          <div class="font-mono text-[9px] text-[var(--text-tertiary)] uppercase">Voice Time</div>
          <div class="font-serif text-lg font-semibold text-[var(--accent-vermilion)]">${speakFmt}</div>
          <div class="font-mono text-[9px] text-[var(--text-tertiary)]">at ${voiceRate.toFixed(2)}x speed</div>
        </div>
        <div class="p-2.5 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-hairline)]">
          <div class="font-mono text-[9px] text-[var(--text-tertiary)] uppercase">Clarity</div>
          <div class="font-serif text-lg font-semibold text-[var(--text-primary)]">${flesch}</div>
          <div class="font-mono text-[9px] text-[var(--text-tertiary)]">${clarityLabel}</div>
        </div>
      </div>
      <div class="flex items-center justify-between px-3 py-2 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-hairline)] font-mono text-[10px]">
        <span class="text-[var(--text-tertiary)]">Vocabulary Richness · ${stats.longWords} complex words</span>
        <span class="text-[var(--text-primary)] font-semibold">${richnessPct}% unique</span>
      </div>
    </div>

    <div class="space-y-2 pt-2 border-t border-[var(--border-hairline)]">
      <div class="flex items-center justify-between font-mono text-[10px]">
        <span class="uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">28-Day Writing Pulse</span>
        <span class="text-[var(--accent-vermilion)] font-semibold">${streak} day streak</span>
      </div>
      <div class="grid grid-cols-14 gap-1 p-2.5 rounded-lg bg-[var(--bg-panel)] border border-[var(--border-hairline)]" style="grid-template-columns: repeat(14, minmax(0, 1fr));">
        ${heatCells}
      </div>
    </div>

    <div class="grid grid-cols-3 gap-2 pt-2 border-t border-[var(--border-hairline)] font-mono text-[10px]">
      <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-center">
        <div class="text-sm font-serif font-semibold text-[var(--text-primary)]">${notes.length}</div>
        <div class="text-[9px] text-[var(--text-tertiary)]">NOTES</div>
      </div>
      <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-center">
        <div class="text-sm font-serif font-semibold text-[var(--text-primary)]">${vaultWords}</div>
        <div class="text-[9px] text-[var(--text-tertiary)]">VAULT WORDS</div>
      </div>
      <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-center">
        <div class="text-sm font-serif font-semibold text-[var(--text-primary)]">${todoDone}/${todoTotal}</div>
        <div class="text-[9px] text-[var(--text-tertiary)]">TODOS DONE</div>
      </div>
    </div>
  `;

  const el = document.getElementById('pkVaultPulseBackdrop');
  if (typeof openModalWithAnimation === 'function') openModalWithAnimation(el);
  else if (el) el.classList.remove('hidden');
}

function closeVaultPulseModal(e) {
  if (e && e.target && e.target !== document.getElementById('pkVaultPulseBackdrop') && e.target !== e.currentTarget) return;
  if (typeof closeModalWithAnimation === 'function') closeModalWithAnimation('pkVaultPulseBackdrop');
  else {
    const el = document.getElementById('pkVaultPulseBackdrop');
    if (el) el.classList.add('hidden');
  }
}

// ============================================================================
// 5. QUICK SCRATCHPAD DRAWER (ALT+S PERSISTENT CAPTURE)
// ============================================================================
function updateScratchpadCounter(val) {
  const cnt = document.getElementById('pkScratchpadCount');
  if (!cnt) return;
  const words = (val || '').trim() ? val.trim().split(/\s+/).length : 0;
  cnt.textContent = `${words} ${words === 1 ? 'word' : 'words'}`;
}

function toggleScratchpadDrawer(forceState) {
  const drawer = document.getElementById('pkScratchpadDrawer');
  const input = document.getElementById('pkScratchpadInput');
  if (!drawer) return;
  const isCurrentlyOpen = !drawer.classList.contains('hidden') && drawer.getAttribute('data-closing') !== 'true';
  const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;

  if (shouldOpen) {
    const saved = localStorage.getItem(PK_SCRATCHPAD_KEY) || '';
    if (input) {
      input.value = saved;
      updateScratchpadCounter(saved);
    }
    drawer.removeAttribute('data-closing');
    drawer.classList.remove('animate-scratchpad-out', 'hidden');
    drawer.classList.remove('animate-scratchpad-in');
    void drawer.offsetWidth;
    drawer.classList.add('animate-scratchpad-in');
    if (input && window.innerWidth >= 768) input.focus();
  } else {
    if (drawer.classList.contains('hidden')) return;
    drawer.setAttribute('data-closing', 'true');
    drawer.classList.remove('animate-scratchpad-in');
    drawer.classList.add('animate-scratchpad-out');
    setTimeout(() => {
      drawer.classList.add('hidden');
      drawer.classList.remove('animate-scratchpad-out');
      drawer.removeAttribute('data-closing');
    }, 150);
  }
}

function handleScratchpadInput(val) {
  try { localStorage.setItem(PK_SCRATCHPAD_KEY, val || ''); } catch (_) {}
  updateScratchpadCounter(val);
}

function clearScratchpadText() {
  const input = document.getElementById('pkScratchpadInput');
  if (input) input.value = '';
  handleScratchpadInput('');
  if (typeof showToast === 'function') showToast('Scratchpad cleared');
}

function sendScratchpadToActiveNote() {
  const input = document.getElementById('pkScratchpadInput');
  const text = (input ? input.value : localStorage.getItem(PK_SCRATCHPAD_KEY) || '').trim();
  if (!text) {
    if (typeof showToast === 'function') showToast('Scratchpad is empty', 'ochre');
    return;
  }
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note) return;

  if (typeof takeSnapshot === 'function') takeSnapshot('scratchpadAppend');
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  lines.forEach(line => {
    note.blocks.push({ id: generateId('b'), type: 'paragraph', content: line });
  });
  if (typeof setAppMode === 'function') setAppMode('workspace');
  if (typeof renderBlocks === 'function') renderBlocks(note);
  if (typeof persistState === 'function') persistState();
  pkRecordActivityToday(lines.length);
  clearScratchpadText();
  toggleScratchpadDrawer(false);
  if (typeof showToast === 'function') showToast(`Appended ${lines.length} block(s) to note`);
}

function promoteScratchpadToNewNote() {
  const input = document.getElementById('pkScratchpadInput');
  const text = (input ? input.value : localStorage.getItem(PK_SCRATCHPAD_KEY) || '').trim();
  if (!text) {
    if (typeof showToast === 'function') showToast('Scratchpad is empty', 'ochre');
    return;
  }
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const title = lines[0].slice(0, 60);
  const bodyLines = lines.length > 1 ? lines.slice(1) : [lines[0]];
  if (typeof createNewNote === 'function') {
    createNewNote('General');
    const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
    if (note) {
      note.title = title;
      note.blocks = bodyLines.map(l => ({ id: generateId('b'), type: 'paragraph', content: l }));
      if (typeof renderAll === 'function') renderAll();
      if (typeof persistState === 'function') persistState();
    }
  }
  pkRecordActivityToday(3);
  clearScratchpadText();
  toggleScratchpadDrawer(false);
  if (typeof showToast === 'function') showToast(`Created note "${title}"`);
}

// Keyboard shortcuts: Alt+S for Scratchpad, Study Deck Space/1/2/3/Esc
document.addEventListener('keydown', (e) => {
  if (e.altKey && (e.key === 's' || e.key === 'S')) {
    e.preventDefault();
    toggleScratchpadDrawer();
    return;
  }
  const studyEl = document.getElementById('pkStudyDeckBackdrop');
  if (studyEl && !studyEl.classList.contains('hidden')) {
    if (e.key === 'Escape') { closeStudyDeckModal(); return; }
    if (e.key === ' ') { e.preventDefault(); flipStudyCard(); return; }
    if (e.key === '1') { rateStudyCard('again'); return; }
    if (e.key === '2') { rateStudyCard('good'); return; }
    if (e.key === '3') { rateStudyCard('easy'); return; }
  }
  if (e.key === 'Escape') {
    closeSoundscapeModal();
    closeTimeCapsuleModal();
    closeVaultPulseModal();
  }
});

// Hook daily writing activity counter lightweightly on input (throttled to once every 15s -> 0 overhead)
let pkLastActivityStampTs = 0;
document.addEventListener('input', (e) => {
  if (Date.now() - pkLastActivityStampTs < 15000) return;
  if (e.target && (e.target.isContentEditable || e.target.id === 'pkScratchpadInput')) {
    pkLastActivityStampTs = Date.now();
    pkRecordActivityToday(1);
  }
}, true);
