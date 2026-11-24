// ============================================================================
// PK NOTE — OBSIDIAN & NOTION POWER SUITE (v2.6 · 100% Client-Side, Zero Emoji)
//   1. Obsidian Multi-Tab Workspace Bar (open/switch/close tabs, Alt+1..9)
//   2. Obsidian Side-by-Side Split View (live dual-note editor, Alt+\)
//   3. Notion / Obsidian Properties & YAML Frontmatter (Status, Priority, Due, Custom)
//   4. Notion Interactive Toggle & Editable Table Blocks (/toggle, /table)
//   5. Notion Vault Database View (Live Table + Kanban Board by Status, Alt+D)
// ============================================================================

const PK_STATUS_OPTIONS = ['', 'Draft', 'In Progress', 'Review', 'Done', 'Archived'];
const PK_PRIORITY_OPTIONS = ['', 'Low', 'Medium', 'High'];

let pkSplitPaneOpen = false;
let pkSplitNoteId = null;
let pkDatabaseOpen = false;
let pkDatabaseMode = 'table'; // 'table' | 'board'
let pkDatabaseSort = 'updated'; // 'updated' | 'title' | 'status' | 'priority' | 'due' | 'words'
let pkDatabaseFolderFilter = 'ALL';

// ============================================================================
// 1. OBSIDIAN MULTI-TAB WORKSPACE BAR
// ============================================================================
function ensureOpenTabsState() {
  if (typeof state === 'undefined' || !Array.isArray(state.notes)) return [];
  if (!Array.isArray(state.openTabs)) state.openTabs = [];
  const validIds = new Set(state.notes.map(n => n.id));
  state.openTabs = state.openTabs.filter(id => validIds.has(id));
  if (state.activeNoteId && validIds.has(state.activeNoteId) && !state.openTabs.includes(state.activeNoteId)) {
    state.openTabs.push(state.activeNoteId);
  }
  if (state.openTabs.length === 0 && state.notes.length > 0) {
    state.openTabs.push(state.activeNoteId || state.notes[0].id);
  }
  return state.openTabs;
}

function renderNoteTabsBar() {
  const bar = document.getElementById('pkNoteTabsList');
  const splitBtn = document.getElementById('pkTabsSplitBtn');
  if (!bar || typeof state === 'undefined') return;
  const tabs = ensureOpenTabsState();

  bar.innerHTML = tabs.map((id, idx) => {
    const note = state.notes.find(n => n.id === id);
    if (!note) return '';
    const isActive = id === state.activeNoteId;
    const isSplit = pkSplitPaneOpen && id === pkSplitNoteId;
    const cls = isActive
      ? 'bg-[var(--bg-canvas)] text-[var(--text-primary)] border-b-2 border-b-[var(--accent-vermilion)] font-medium'
      : 'bg-transparent text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] border-b-2 border-b-transparent';
    const statusDot = note.properties && note.properties.status === 'Done'
      ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>'
      : note.properties && note.properties.status === 'In Progress'
        ? '<span class="w-1.5 h-1.5 rounded-full bg-[var(--accent-vermilion)] shrink-0"></span>'
        : note.encryptedPayload
          ? '<span class="w-1.5 h-1.5 rounded-full bg-[var(--accent-ochre)] shrink-0"></span>'
          : '';
    return `
      <div onclick="selectNote('${escapeHtml(id)}')"
           title="${escapeHtml(note.title || 'Untitled')} (Alt+${idx + 1})"
           class="group shrink-0 max-w-[175px] h-8 px-2.5 border-r border-[var(--border-hairline)] flex items-center gap-1.5 text-[11px] font-sans cursor-pointer select-none transition-colors ${cls}">
        ${statusDot}
        <span class="truncate">${escapeHtml(note.title || 'Untitled')}</span>
        ${isSplit ? '<span class="font-mono text-[8px] px-1 rounded bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] shrink-0">R</span>' : ''}
        ${tabs.length > 1 ? `<button type="button" onclick="event.stopPropagation(); closeNoteTab('${escapeHtml(id)}')" title="Close tab" class="opacity-60 group-hover:opacity-100 w-4 h-4 rounded hover:bg-[var(--bg-hover)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] font-mono text-[10px] flex items-center justify-center shrink-0 cursor-pointer">x</button>` : ''}
      </div>
    `;
  }).join('');

  if (splitBtn) {
    splitBtn.className = pkSplitPaneOpen
      ? 'px-2 py-1 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-mono text-[10px] font-semibold flex items-center gap-1 cursor-pointer shrink-0'
      : 'px-2 py-1 rounded-[3px] bg-[var(--bg-canvas)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-[10px] flex items-center gap-1 cursor-pointer shrink-0';
  }
}

function closeNoteTab(noteId) {
  const tabs = ensureOpenTabsState();
  if (tabs.length <= 1) return;
  const idx = tabs.indexOf(noteId);
  if (idx === -1) return;
  tabs.splice(idx, 1);
  if (state.activeNoteId === noteId) {
    const nextId = tabs[Math.max(0, idx - 1)] || tabs[0];
    if (nextId && typeof selectNote === 'function') selectNote(nextId);
  } else {
    renderNoteTabsBar();
    if (typeof persistState === 'function') persistState();
  }
}

function openNewTabNote() {
  if (typeof createNewNote === 'function') {
    const active = typeof getActiveNote === 'function' ? getActiveNote() : null;
    createNewNote((active && active.folder) || 'General');
  }
}

// ============================================================================
// 2. OBSIDIAN SIDE-BY-SIDE SPLIT VIEW (DUAL LIVE NOTE EDITOR & MOBILE DUAL STUDIO)
// ============================================================================
let pkMobileSplitMode = 'tabs'; // 'tabs' (single active focused tab) or 'dual' (vertical 50/50 stacked)
let pkMobileSplitActiveTab = 'primary'; // 'primary' or 'split'
let pkSplitPreviewMode = false; // false = edit textarea, true = rendered rich markdown & math

function toggleSplitNotePane(targetNoteId) {
  if (targetNoteId) {
    pkSplitNoteId = targetNoteId;
    pkSplitPaneOpen = true;
  } else {
    pkSplitPaneOpen = !pkSplitPaneOpen;
  }

  if (pkSplitPaneOpen) {
    const other = (state.notes || []).find(n => n.id !== state.activeNoteId);
    if (!pkSplitNoteId || !(state.notes || []).some(n => n.id === pkSplitNoteId)) {
      pkSplitNoteId = other ? other.id : state.activeNoteId;
    }
  }
  applySplitPaneLayout();
  renderNoteTabsBar();
}

function closeSplitNotePane() {
  pkSplitPaneOpen = false;
  applySplitPaneLayout();
  renderNoteTabsBar();
}

function setSplitPaneNote(noteId) {
  pkSplitNoteId = noteId;
  renderSplitNotePane();
  renderNoteTabsBar();
  updateMobileSplitTitles();
}

function setMobileSplitTab(tab) {
  pkMobileSplitActiveTab = tab;
  applySplitPaneLayout();
}

function toggleMobileSplitDualMode() {
  pkMobileSplitMode = pkMobileSplitMode === 'dual' ? 'tabs' : 'dual';
  applySplitPaneLayout();
}

function setSplitPreviewMode(preview) {
  pkSplitPreviewMode = !!preview;
  const editBtn = document.getElementById('pkSplitModeEditBtn');
  const prevBtn = document.getElementById('pkSplitModePrevBtn');
  if (editBtn && prevBtn) {
    if (pkSplitPreviewMode) {
      prevBtn.className = 'px-2 py-0.5 font-mono text-[9.5px] bg-[var(--accent-vermilion)] text-white font-medium cursor-pointer';
      editBtn.className = 'px-2 py-0.5 font-mono text-[9.5px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] cursor-pointer';
    } else {
      editBtn.className = 'px-2 py-0.5 font-mono text-[9.5px] bg-[var(--accent-vermilion)] text-white font-medium cursor-pointer';
      prevBtn.className = 'px-2 py-0.5 font-mono text-[9.5px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] cursor-pointer';
    }
  }
  renderSplitNotePane();
}

function swapSplitPaneNotes() {
  if (!pkSplitNoteId || pkSplitNoteId === state.activeNoteId) return;
  const oldActive = state.activeNoteId;
  const nextActive = pkSplitNoteId;
  pkSplitNoteId = oldActive;

  // Visual swap flash feedback
  const docContainer = document.getElementById('documentContentContainer');
  const splitPane = document.getElementById('pkSplitNotePane');
  if (docContainer) {
    docContainer.classList.add('split-swap-active');
    setTimeout(() => docContainer.classList.remove('split-swap-active'), 260);
  }
  if (splitPane) {
    splitPane.classList.add('split-swap-active');
    setTimeout(() => splitPane.classList.remove('split-swap-active'), 260);
  }

  if (typeof selectNote === 'function') selectNote(nextActive);
  applySplitPaneLayout();
}

function focusSplitPaneAsPrimary() {
  if (!pkSplitNoteId) return;
  const target = pkSplitNoteId;
  closeSplitNotePane();
  if (typeof selectNote === 'function') selectNote(target);
}

function updateMobileSplitTitles() {
  const pTitle = document.getElementById('pkMobileTabPrimaryTitle');
  const sTitle = document.getElementById('pkMobileTabSplitTitle');
  const primNote = (state && state.notes) ? state.notes.find(n => n.id === state.activeNoteId) : null;
  const splitNote = (state && state.notes) ? state.notes.find(n => n.id === pkSplitNoteId) : null;
  if (pTitle) pTitle.textContent = primNote ? (primNote.title || 'Untitled') : 'Primary';
  if (sTitle) sTitle.textContent = splitNote ? (splitNote.title || 'Untitled') : 'Split Note';
}

function applySplitPaneLayout() {
  const layout = document.getElementById('pkEditorSplitGrid');
  const pane = document.getElementById('pkSplitNotePane');
  const docContainer = document.getElementById('documentContentContainer');
  const mobileStrip = document.getElementById('pkMobileSplitStrip');
  const dividerHandle = document.getElementById('pkSplitDividerHandle');
  const tabPrimBtn = document.getElementById('pkMobileTabPrimary');
  const tabSplitBtn = document.getElementById('pkMobileTabSplit');
  const dualBtn = document.getElementById('pkMobileDualModeBtn');
  const dualLabel = document.getElementById('pkMobileDualModeLabel');

  if (!layout || !pane || !docContainer) return;

  const isDesktop = window.innerWidth >= 1024;

  if (pkSplitPaneOpen) {
    updateMobileSplitTitles();

    if (isDesktop) {
      // Desktop: Side-by-side 2-column grid
      layout.classList.add('lg:grid', 'lg:grid-cols-2');
      docContainer.classList.remove('hidden', 'pk-mobile-dual-pane');
      pane.classList.remove('hidden', 'pk-mobile-dual-pane');
      pane.classList.add('split-pane-anim-enter');
      if (dividerHandle) dividerHandle.classList.remove('lg:hidden');
      if (mobileStrip) mobileStrip.classList.add('hidden');
    } else {
      // Mobile / Tablet: Responsive Dual-Note Studio
      layout.classList.remove('lg:grid', 'lg:grid-cols-2');
      if (dividerHandle) dividerHandle.classList.add('lg:hidden');
      if (mobileStrip) mobileStrip.classList.remove('hidden');

      if (pkMobileSplitMode === 'tabs') {
        // Solo Tab Mode (100% viewport width per note)
        docContainer.classList.remove('pk-mobile-dual-pane');
        pane.classList.remove('pk-mobile-dual-pane');

        if (pkMobileSplitActiveTab === 'primary') {
          docContainer.classList.remove('hidden');
          pane.classList.add('hidden');
        } else {
          docContainer.classList.add('hidden');
          pane.classList.remove('hidden');
          pane.classList.add('split-pane-anim-enter');
        }

        if (tabPrimBtn && tabSplitBtn) {
          if (pkMobileSplitActiveTab === 'primary') {
            tabPrimBtn.className = 'flex-1 min-w-0 px-2 py-1 rounded-[4px] font-mono text-[10.5px] truncate text-center transition-all bg-[var(--accent-vermilion)] text-white font-medium shadow-xs flex items-center justify-center gap-1 cursor-pointer';
            tabSplitBtn.className = 'flex-1 min-w-0 px-2 py-1 rounded-[4px] font-mono text-[10.5px] truncate text-center transition-all text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center gap-1 cursor-pointer';
          } else {
            tabSplitBtn.className = 'flex-1 min-w-0 px-2 py-1 rounded-[4px] font-mono text-[10.5px] truncate text-center transition-all bg-[var(--accent-vermilion)] text-white font-medium shadow-xs flex items-center justify-center gap-1 cursor-pointer';
            tabPrimBtn.className = 'flex-1 min-w-0 px-2 py-1 rounded-[4px] font-mono text-[10.5px] truncate text-center transition-all text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center gap-1 cursor-pointer';
          }
        }
        if (dualLabel) dualLabel.textContent = 'Dual';
        if (dualBtn) dualBtn.className = 'px-2 py-1 rounded-[4px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer flex items-center gap-1';
      } else {
        // Vertical 50/50 Dual Stack Mode on mobile
        docContainer.classList.remove('hidden');
        docContainer.classList.add('pk-mobile-dual-pane');
        pane.classList.remove('hidden');
        pane.classList.add('pk-mobile-dual-pane', 'split-pane-anim-enter');

        if (dualLabel) dualLabel.textContent = 'Solo';
        if (dualBtn) dualBtn.className = 'px-2 py-1 rounded-[4px] bg-[var(--accent-vermilion)] text-white font-medium cursor-pointer flex items-center gap-1';
      }
    }
    renderSplitNotePane();
  } else {
    layout.classList.remove('lg:grid', 'lg:grid-cols-2');
    docContainer.classList.remove('hidden', 'pk-mobile-dual-pane');
    pane.classList.add('hidden', 'pk-mobile-dual-pane');
    pane.classList.remove('split-pane-anim-enter');
    if (dividerHandle) dividerHandle.classList.add('lg:hidden');
    if (mobileStrip) mobileStrip.classList.add('hidden');
  }
}

// Window resize listener to keep split layout synchronized across mobile & desktop
if (typeof window !== 'undefined') {
  let pkSplitResizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(pkSplitResizeTimer);
    pkSplitResizeTimer = setTimeout(() => {
      if (pkSplitPaneOpen) applySplitPaneLayout();
    }, 150);
  });
}

function renderSplitPreviewHTML(note) {
  if (!note || !Array.isArray(note.blocks) || note.blocks.length === 0) {
    return '<div class="text-[var(--text-tertiary)] font-mono text-xs italic py-6 text-center">Empty note · Click Edit to add content</div>';
  }
  return note.blocks.map(b => {
    const rawContent = b.content || '';
    const rich = typeof renderRichBlockHTML === 'function' ? renderRichBlockHTML(rawContent) : escapeHtml(rawContent);
    if (b.type === 'h1') return `<h1 class="font-serif text-2xl font-bold text-[var(--text-primary)] mt-4 mb-2 leading-tight">${rich}</h1>`;
    if (b.type === 'h2') return `<h2 class="font-serif text-xl font-semibold text-[var(--text-primary)] mt-3 mb-1.5 leading-snug">${rich}</h2>`;
    if (b.type === 'h3') return `<h3 class="font-serif text-lg font-medium text-[var(--text-primary)] mt-2.5 mb-1 leading-snug">${rich}</h3>`;
    if (b.type === 'todo') {
      const checked = !!b.checked;
      return `<div class="flex items-start gap-2 my-1 text-[var(--text-primary)]"><span class="font-mono text-xs ${checked ? 'text-emerald-500' : 'text-[var(--text-tertiary)]'} shrink-0">[${checked ? 'x' : ' '}]</span><span class="${checked ? 'line-through opacity-70' : ''}">${rich}</span></div>`;
    }
    if (b.type === 'bullet') return `<div class="flex items-start gap-2 my-1 text-[var(--text-primary)]"><span class="text-[var(--accent-vermilion)] shrink-0">•</span><span>${rich}</span></div>`;
    if (b.type === 'quote') return `<blockquote class="border-l-2 border-[var(--accent-vermilion)] pl-3 my-2 text-[var(--text-secondary)] italic">${rich}</blockquote>`;
    if (b.type === 'callout') return `<div class="p-2.5 rounded bg-[var(--bg-panel)] border border-[var(--border-hairline)] my-2 text-[var(--text-primary)] text-xs">${rich}</div>`;
    if (b.type === 'divider') return `<hr class="my-3 border-[var(--border-hairline)]" />`;
    return `<p class="my-1.5 text-[14px] leading-relaxed text-[var(--text-primary)]">${rich || '&nbsp;'}</p>`;
  }).join('');
}

function noteBlocksToEditableText(note) {
  if (!note || !Array.isArray(note.blocks)) return '';
  return note.blocks.map(b => {
    const c = (b.content || '').replace(/<[^>]+>/g, '');
    if (b.type === 'h1') return `# ${c}`;
    if (b.type === 'h2') return `## ${c}`;
    if (b.type === 'h3') return `### ${c}`;
    if (b.type === 'todo') return `- [${b.checked ? 'x' : ' '}] ${c}`;
    if (b.type === 'bullet') return `- ${c}`;
    if (b.type === 'quote' || b.type === 'callout') return `> ${c}`;
    if (b.type === 'toggle') return `>> ${c}${b.body ? '\n' + b.body : ''}`;
    if (b.type === 'divider') return '---';
    return c;
  }).join('\n');
}

function editableTextToBlocks(raw) {
  const lines = String(raw || '').split(/\r?\n/);
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();
    if (/^---+$/.test(t)) out.push({ id: generateId('b'), type: 'divider', content: '' });
    else if (/^###\s+/.test(t)) out.push({ id: generateId('b'), type: 'h3', content: t.replace(/^###\s+/, '') });
    else if (/^##\s+/.test(t)) out.push({ id: generateId('b'), type: 'h2', content: t.replace(/^##\s+/, '') });
    else if (/^#\s+/.test(t)) out.push({ id: generateId('b'), type: 'h1', content: t.replace(/^#\s+/, '') });
    else if (/^>>\s+/.test(t)) out.push({ id: generateId('b'), type: 'toggle', open: true, content: t.replace(/^>>\s+/, ''), body: '' });
    else if (/^[-*]\s+\[([ xX])\]\s*/.test(t)) out.push({ id: generateId('b'), type: 'todo', checked: /^[-*]\s+\[[xX]\]/.test(t), content: t.replace(/^[-*]\s+\[[ xX]\]\s*/, '') });
    else if (/^[-*]\s+/.test(t)) out.push({ id: generateId('b'), type: 'bullet', content: t.replace(/^[-*]\s+/, '') });
    else if (/^>\s+/.test(t)) out.push({ id: generateId('b'), type: 'quote', content: t.replace(/^>\s+/, '') });
    else out.push({ id: generateId('b'), type: 'paragraph', content: line });
  }
  return out.length > 0 ? out : [{ id: generateId('b'), type: 'paragraph', content: '' }];
}

function renderSplitNotePane() {
  if (!pkSplitPaneOpen || typeof state === 'undefined') return;
  const sel = document.getElementById('pkSplitNoteSelect');
  const titleInp = document.getElementById('pkSplitTitleInput');
  const bodyEl = document.getElementById('pkSplitBodyTextarea');
  const metaEl = document.getElementById('pkSplitMetaLine');
  const lockMsg = document.getElementById('pkSplitEncryptedNotice');
  if (!sel || !titleInp || !bodyEl) return;

  sel.innerHTML = (state.notes || []).map(n =>
    `<option value="${escapeHtml(n.id)}" ${n.id === pkSplitNoteId ? 'selected' : ''}>${escapeHtml(n.title || 'Untitled')} [${escapeHtml(n.folder || 'General')}]</option>`
  ).join('');

  const note = (state.notes || []).find(n => n.id === pkSplitNoteId);
  if (!note) {
    // Reassign or close split pane if the split note was deleted
    const fallback = (state.notes || []).find(n => n.id !== state.activeNoteId) || state.notes[0];
    if (fallback) {
      pkSplitNoteId = fallback.id;
      sel.value = fallback.id;
    } else {
      closeSplitNotePane();
      return;
    }
  }
  const activeSplitNote = (state.notes || []).find(n => n.id === pkSplitNoteId);
  if (!activeSplitNote) return;

  titleInp.value = activeSplitNote.title || '';
  if (metaEl) {
    const status = activeSplitNote.properties && activeSplitNote.properties.status ? ` · ${activeSplitNote.properties.status}` : '';
    metaEl.textContent = `${activeSplitNote.folder || 'General'}${status} · ${(activeSplitNote.tags || []).map(t => '#' + t).join(' ') || 'No tags'}`;
  }

  const previewEl = document.getElementById('pkSplitPreviewArea');

  if (activeSplitNote.encryptedPayload) {
    bodyEl.classList.add('hidden');
    if (previewEl) previewEl.classList.add('hidden');
    if (lockMsg) lockMsg.classList.remove('hidden');
  } else {
    if (lockMsg) lockMsg.classList.add('hidden');
    if (pkSplitPreviewMode) {
      bodyEl.classList.add('hidden');
      if (previewEl) {
        previewEl.classList.remove('hidden');
        previewEl.innerHTML = renderSplitPreviewHTML(activeSplitNote);
      }
    } else {
      if (previewEl) previewEl.classList.add('hidden');
      bodyEl.classList.remove('hidden');
      if (document.activeElement !== bodyEl) {
        bodyEl.value = noteBlocksToEditableText(activeSplitNote);
      }
    }
  }
}

let pkSplitSaveTimer = null;
function handleSplitTitleInput(val) {
  const note = (state.notes || []).find(n => n.id === pkSplitNoteId);
  if (!note || note.encryptedPayload || note.locked) return;
  note.title = val || 'Untitled';
  note.updatedAt = new Date().toISOString();
  renderNoteTabsBar();
  if (typeof renderSidebar === 'function') renderSidebar();
  if (note.id === state.activeNoteId && typeof renderActiveDocument === 'function') renderActiveDocument();
  if (typeof persistState === 'function') persistState();
}

function handleSplitBodyInput(val) {
  const note = (state.notes || []).find(n => n.id === pkSplitNoteId);
  if (!note || note.encryptedPayload || note.locked) return;
  clearTimeout(pkSplitSaveTimer);
  pkSplitSaveTimer = setTimeout(() => {
    // Preserve sketch/table blocks while syncing markdown lines cleanly
    const specialBlocks = (note.blocks || []).filter(b => b.type === 'sketch' || b.type === 'table');
    note.blocks = [...editableTextToBlocks(val), ...specialBlocks];
    note.updatedAt = new Date().toISOString();
    if (note.id === state.activeNoteId && typeof renderBlocks === 'function') renderBlocks(note);
    if (typeof persistState === 'function') persistState();
  }, 220);
}

// ============================================================================
// 3. NOTION / OBSIDIAN NOTE PROPERTIES & YAML FRONTMATTER
// ============================================================================
function ensureNoteProperties(note) {
  if (!note) return null;
  if (!note.properties || typeof note.properties !== 'object') {
    note.properties = { status: '', priority: '', due: '', custom: [] };
  }
  if (!Array.isArray(note.properties.custom)) note.properties.custom = [];
  return note.properties;
}

function renderNotePropertiesBar() {
  const container = document.getElementById('pkNotePropertiesSection');
  if (!container) return;
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  if (!note) { container.innerHTML = ''; return; }
  const props = ensureNoteProperties(note);

  const statusOpts = PK_STATUS_OPTIONS.map(s =>
    `<option value="${s}" ${props.status === s ? 'selected' : ''}>${s || 'Status...'}</option>`
  ).join('');
  const prioOpts = PK_PRIORITY_OPTIONS.map(p =>
    `<option value="${p}" ${props.priority === p ? 'selected' : ''}>${p || 'Priority...'}</option>`
  ).join('');

  const customChips = props.custom.map((item, idx) => `
    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] font-mono text-[10px]">
      <span class="text-[var(--text-tertiary)] uppercase">${escapeHtml(item.key)}:</span>
      <span class="text-[var(--text-primary)]">${escapeHtml(item.value)}</span>
      <button type="button" onclick="removeCustomNoteProperty(${idx})" class="text-[var(--text-tertiary)] hover:text-rose-500 ml-0.5 cursor-pointer">x</button>
    </span>
  `).join('');

  container.innerHTML = `
    <div class="flex items-center flex-wrap gap-1.5 pt-1">
      <span class="font-mono text-[10.5px] text-[var(--text-tertiary)] flex items-center gap-1 shrink-0 mr-1">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="10" y2="18"/></svg>
        <span class="hidden sm:inline">PROPERTIES</span>
      </span>
      <select onchange="updateNoteProperty('status', this.value)" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] font-mono text-[10.5px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-vermilion)] cursor-pointer">
        ${statusOpts}
      </select>
      <select onchange="updateNoteProperty('priority', this.value)" class="px-2 py-0.5 rounded-[3px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] font-mono text-[10.5px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-vermilion)] cursor-pointer">
        ${prioOpts}
      </select>
      <input type="date"
             value="${escapeHtml(props.due || '')}"
             onchange="updateNoteProperty('due', this.value)"
             title="Due date"
             class="px-1.5 py-0.5 rounded-[3px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] font-mono text-[10.5px] text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-vermilion)]" />
      ${customChips}
      <button type="button" onclick="toggleAddCustomPropertyRow()" class="px-1.5 py-0.5 rounded-[3px] hover:bg-[var(--bg-panel)] font-mono text-[10px] text-[var(--text-tertiary)] hover:text-[var(--accent-vermilion)] cursor-pointer">+ Property</button>
    </div>
    <div id="pkCustomPropAddRow" class="hidden flex items-center flex-wrap gap-1.5 pt-1.5">
      <input type="text" id="pkCustomPropKey" placeholder="Key (e.g. Author, Course)" class="w-32 px-2 py-1 rounded-[3px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] font-mono text-[10.5px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-vermilion)]" />
      <input type="text" id="pkCustomPropVal" onkeydown="if(event.key==='Enter'){event.preventDefault();addCustomNoteProperty();}" placeholder="Value..." class="w-40 px-2 py-1 rounded-[3px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] font-mono text-[10.5px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-vermilion)]" />
      <button type="button" onclick="addCustomNoteProperty()" class="px-2.5 py-1 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-mono text-[10px] font-semibold cursor-pointer">Add</button>
    </div>
  `;
}

function updateNoteProperty(field, value) {
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note) return;
  const props = ensureNoteProperties(note);
  props[field] = value;
  note.updatedAt = new Date().toISOString();
  renderNoteTabsBar();
  if (typeof persistState === 'function') persistState();
}

function toggleAddCustomPropertyRow() {
  const row = document.getElementById('pkCustomPropAddRow');
  if (!row) return;
  row.classList.toggle('hidden');
  if (!row.classList.contains('hidden')) {
    const k = document.getElementById('pkCustomPropKey');
    if (k) k.focus();
  }
}

function addCustomNoteProperty() {
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note) return;
  const kEl = document.getElementById('pkCustomPropKey');
  const vEl = document.getElementById('pkCustomPropVal');
  const key = kEl ? kEl.value.trim().slice(0, 28) : '';
  const value = vEl ? vEl.value.trim().slice(0, 80) : '';
  if (!key || !value) return;
  const props = ensureNoteProperties(note);
  props.custom.push({ key, value });
  note.updatedAt = new Date().toISOString();
  renderNotePropertiesBar();
  if (typeof persistState === 'function') persistState();
}

function removeCustomNoteProperty(idx) {
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note) return;
  const props = ensureNoteProperties(note);
  props.custom.splice(idx, 1);
  note.updatedAt = new Date().toISOString();
  renderNotePropertiesBar();
  if (typeof persistState === 'function') persistState();
}

// ============================================================================
// 4. NOTION INTERACTIVE TOGGLE & EDITABLE TABLE BLOCK HANDLERS
// ============================================================================
function toggleCollapsibleBlock(blockId) {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  if (!note) return;
  const block = (note.blocks || []).find(b => b.id === blockId);
  if (!block) return;
  block.open = !block.open;
  if (typeof renderBlocks === 'function') renderBlocks(note);
  if (typeof persistState === 'function') persistState();
}

function handleToggleBodyInput(event, blockId) {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  if (!note || note.locked) return;
  const block = (note.blocks || []).find(b => b.id === blockId);
  if (!block) return;
  block.body = event.target.innerText || '';
  note.updatedAt = new Date().toISOString();
  if (typeof persistState === 'function') persistState();
}

function ensureTableRows(block) {
  if (!Array.isArray(block.rows) || block.rows.length === 0) {
    block.rows = [
      ['Column 1', 'Column 2', 'Column 3'],
      ['', '', ''],
      ['', '', '']
    ];
  }
  return block.rows;
}

function handleTableCellInput(event, blockId, rowIdx, colIdx) {
  const note = typeof getActiveNote === 'function' ? getActiveNote() : null;
  if (!note || note.locked) return;
  const block = (note.blocks || []).find(b => b.id === blockId);
  if (!block) return;
  const rows = ensureTableRows(block);
  if (rows[rowIdx]) {
    rows[rowIdx][colIdx] = (event.target.innerText || '').replace(/\r?\n/g, ' ').trim();
    note.updatedAt = new Date().toISOString();
    if (typeof persistState === 'function') persistState();
  }
}

function mutateTableBlock(blockId, action) {
  const note = typeof guardActiveNoteEditable === 'function' ? guardActiveNoteEditable() : null;
  if (!note) return;
  const block = (note.blocks || []).find(b => b.id === blockId);
  if (!block) return;
  if (typeof takeSnapshot === 'function') takeSnapshot('tableMutate');
  const rows = ensureTableRows(block);
  const cols = rows[0] ? rows[0].length : 3;

  if (action === 'addRow') {
    rows.push(new Array(cols).fill(''));
  } else if (action === 'delRow' && rows.length > 2) {
    rows.pop();
  } else if (action === 'addCol' && cols < 8) {
    rows.forEach((r, ri) => r.push(ri === 0 ? `Column ${cols + 1}` : ''));
  } else if (action === 'delCol' && cols > 2) {
    rows.forEach(r => r.pop());
  }
  note.updatedAt = new Date().toISOString();
  if (typeof renderBlocks === 'function') renderBlocks(note);
  if (typeof persistState === 'function') persistState();
}

// ============================================================================
// 5. NOTION VAULT DATABASE VIEW (TABLE + KANBAN BOARD BY STATUS)
// ============================================================================
function openDatabaseModal(mode) {
  if (mode === 'table' || mode === 'board') pkDatabaseMode = mode;
  pkDatabaseOpen = true;
  const bd = document.getElementById('pkDatabaseBackdrop');
  if (typeof openModalWithAnimation === 'function') openModalWithAnimation(bd);
  else if (bd) bd.classList.remove('hidden');
  renderDatabaseView();
}

function closeDatabaseModal(e) {
  if (e && e.target && e.target !== document.getElementById('pkDatabaseBackdrop') && e.target !== e.currentTarget) return;
  pkDatabaseOpen = false;
  if (typeof closeModalWithAnimation === 'function') {
    closeModalWithAnimation('pkDatabaseBackdrop');
  } else {
    const bd = document.getElementById('pkDatabaseBackdrop');
    if (bd) bd.classList.add('hidden');
  }
}

function setDatabaseViewMode(mode) {
  pkDatabaseMode = mode === 'board' ? 'board' : 'table';
  renderDatabaseView();
}

function setDatabaseSort(field) {
  pkDatabaseSort = field;
  renderDatabaseView();
}

function setDatabaseFolderFilter(folder) {
  pkDatabaseFolderFilter = folder || 'ALL';
  renderDatabaseView();
}

function getNoteWordCountQuick(note) {
  if (!note || note.encryptedPayload) return 0;
  const txt = (note.blocks || []).map(b => (b.content || '').replace(/<[^>]+>/g, ' ')).join(' ').trim();
  return txt ? txt.split(/\s+/).filter(Boolean).length : 0;
}

function dbUpdateNoteProp(noteId, field, value) {
  const note = (state.notes || []).find(n => n.id === noteId);
  if (!note) return;
  const props = ensureNoteProperties(note);
  props[field] = value;
  note.updatedAt = new Date().toISOString();
  if (typeof persistState === 'function') persistState();
  renderDatabaseView();
  if (note.id === state.activeNoteId) renderNotePropertiesBar();
  renderNoteTabsBar();
}

function dbMoveKanbanStatus(noteId, dir) {
  const cols = ['', 'Draft', 'In Progress', 'Review', 'Done'];
  const note = (state.notes || []).find(n => n.id === noteId);
  if (!note) return;
  const props = ensureNoteProperties(note);
  const curIdx = Math.max(0, cols.indexOf(props.status || ''));
  const nextIdx = Math.max(0, Math.min(cols.length - 1, curIdx + dir));
  dbUpdateNoteProp(noteId, 'status', cols[nextIdx]);
}

function renderDatabaseView() {
  const contentEl = document.getElementById('pkDatabaseContent');
  const folderSel = document.getElementById('pkDatabaseFolderSelect');
  const searchInp = document.getElementById('pkDatabaseSearchInput');
  const tabTable = document.getElementById('pkDbTabTable');
  const tabBoard = document.getElementById('pkDbTabBoard');
  const countEl = document.getElementById('pkDbCountLabel');
  if (!contentEl || typeof state === 'undefined') return;

  const activeTabCls = 'px-2.5 py-1 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer';
  const idleTabCls = 'px-2.5 py-1 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-[var(--text-secondary)] cursor-pointer';
  if (tabTable) tabTable.className = pkDatabaseMode === 'table' ? activeTabCls : idleTabCls;
  if (tabBoard) tabBoard.className = pkDatabaseMode === 'board' ? activeTabCls : idleTabCls;

  const folders = [...new Set((state.notes || []).map(n => n.folder || 'General'))].sort();
  if (folderSel) {
    folderSel.innerHTML = '<option value="ALL">All Collections</option>' +
      folders.map(f => `<option value="${escapeHtml(f)}" ${pkDatabaseFolderFilter === f ? 'selected' : ''}>${escapeHtml(f)}</option>`).join('');
  }

  const q = searchInp ? searchInp.value.trim().toLowerCase() : '';
  const prioWeight = { High: 3, Medium: 2, Low: 1, '': 0 };

  let notes = (state.notes || []).filter(n => {
    if (pkDatabaseFolderFilter !== 'ALL' && (n.folder || 'General') !== pkDatabaseFolderFilter) return false;
    if (!q) return true;
    const p = n.properties || {};
    return (n.title || '').toLowerCase().includes(q)
      || (n.folder || '').toLowerCase().includes(q)
      || (n.tags || []).join(' ').toLowerCase().includes(q)
      || (p.status || '').toLowerCase().includes(q)
      || (p.priority || '').toLowerCase().includes(q);
  });

  notes.sort((a, b) => {
    const pa = a.properties || {};
    const pb = b.properties || {};
    if (pkDatabaseSort === 'title') return (a.title || '').localeCompare(b.title || '');
    if (pkDatabaseSort === 'status') return (pa.status || 'zzz').localeCompare(pb.status || 'zzz');
    if (pkDatabaseSort === 'priority') return (prioWeight[pb.priority || ''] || 0) - (prioWeight[pa.priority || ''] || 0);
    if (pkDatabaseSort === 'due') return (pa.due || '9999-99-99').localeCompare(pb.due || '9999-99-99');
    if (pkDatabaseSort === 'words') return getNoteWordCountQuick(b) - getNoteWordCountQuick(a);
    return String(b.updatedAt || '').localeCompare(String(a.updatedAt || ''));
  });

  if (countEl) countEl.textContent = `${notes.length} note(s)`;

  if (pkDatabaseMode === 'table') {
    const rowsHtml = notes.map(n => {
      const p = ensureNoteProperties(n);
      const words = getNoteWordCountQuick(n);
      const updated = String(n.updatedAt || '').slice(0, 10) || '-';
      return `
        <tr class="border-b border-[var(--border-hairline)] hover:bg-[var(--bg-hover)]/60">
          <td class="py-2 px-3">
            <button type="button" onclick="closeDatabaseModal(); selectNote('${escapeHtml(n.id)}')" class="font-serif font-medium text-xs text-[var(--text-primary)] hover:text-[var(--accent-vermilion)] text-left cursor-pointer truncate max-w-[200px] block">
              ${n.encryptedPayload ? '[Vault] ' : ''}${escapeHtml(n.title || 'Untitled')}
            </button>
          </td>
          <td class="py-2 px-2 font-mono text-[10px] text-[var(--text-secondary)]">${escapeHtml(n.folder || 'General')}</td>
          <td class="py-2 px-2">
            <select onchange="dbUpdateNoteProp('${escapeHtml(n.id)}', 'status', this.value)" class="px-1.5 py-0.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)] font-mono text-[10px] text-[var(--text-primary)] cursor-pointer">
              ${PK_STATUS_OPTIONS.map(s => `<option value="${s}" ${p.status === s ? 'selected' : ''}>${s || 'Inbox'}</option>`).join('')}
            </select>
          </td>
          <td class="py-2 px-2">
            <select onchange="dbUpdateNoteProp('${escapeHtml(n.id)}', 'priority', this.value)" class="px-1.5 py-0.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)] font-mono text-[10px] text-[var(--text-primary)] cursor-pointer">
              ${PK_PRIORITY_OPTIONS.map(pr => `<option value="${pr}" ${p.priority === pr ? 'selected' : ''}>${pr || '-'}</option>`).join('')}
            </select>
          </td>
          <td class="py-2 px-2 font-mono text-[10px] text-[var(--text-tertiary)]">${escapeHtml(p.due || '-')}</td>
          <td class="py-2 px-2 font-mono text-[10px] text-[var(--text-tertiary)] text-right">${words}</td>
          <td class="py-2 px-2 font-mono text-[10px] text-[var(--text-tertiary)]">${updated}</td>
          <td class="py-2 px-2 text-right">
            <button type="button" onclick="closeDatabaseModal(); toggleSplitNotePane('${escapeHtml(n.id)}')" class="px-1.5 py-0.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)] font-mono text-[9.5px] text-[var(--text-secondary)] hover:text-[var(--accent-vermilion)] cursor-pointer">Split</button>
          </td>
        </tr>
      `;
    }).join('');

    contentEl.innerHTML = `
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-[var(--border-strong)] font-mono text-[9.5px] uppercase tracking-wider text-[var(--text-tertiary)]">
              <th class="py-2 px-3 cursor-pointer hover:text-[var(--text-primary)]" onclick="setDatabaseSort('title')">Note</th>
              <th class="py-2 px-2">Collection</th>
              <th class="py-2 px-2 cursor-pointer hover:text-[var(--text-primary)]" onclick="setDatabaseSort('status')">Status</th>
              <th class="py-2 px-2 cursor-pointer hover:text-[var(--text-primary)]" onclick="setDatabaseSort('priority')">Priority</th>
              <th class="py-2 px-2 cursor-pointer hover:text-[var(--text-primary)]" onclick="setDatabaseSort('due')">Due</th>
              <th class="py-2 px-2 text-right cursor-pointer hover:text-[var(--text-primary)]" onclick="setDatabaseSort('words')">Words</th>
              <th class="py-2 px-2 cursor-pointer hover:text-[var(--text-primary)]" onclick="setDatabaseSort('updated')">Modified</th>
              <th class="py-2 px-2 text-right">View</th>
            </tr>
          </thead>
          <tbody>${rowsHtml || '<tr><td colspan="8" class="py-8 text-center font-mono text-xs text-[var(--text-tertiary)]">No matching notes.</td></tr>'}</tbody>
        </table>
      </div>
    `;
  } else {
    // Kanban Board View grouped by Status
    const columns = [
      { key: '', label: 'Inbox' },
      { key: 'Draft', label: 'Draft' },
      { key: 'In Progress', label: 'In Progress' },
      { key: 'Review', label: 'Review' },
      { key: 'Done', label: 'Done' }
    ];
    contentEl.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        ${columns.map((col, ci) => {
          const colNotes = notes.filter(n => ((n.properties && n.properties.status) || '') === col.key);
          const cards = colNotes.map(n => {
            const p = n.properties || {};
            const prioCls = p.priority === 'High'
              ? 'text-rose-500 border-rose-500/40'
              : p.priority === 'Medium'
                ? 'text-[var(--accent-ochre)] border-[var(--accent-ochre)]/40'
                : 'text-[var(--text-tertiary)] border-[var(--border-hairline)]';
            return `
              <div class="p-2.5 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-hairline)] hover:border-[var(--border-strong)] space-y-2">
                <button type="button" onclick="closeDatabaseModal(); selectNote('${escapeHtml(n.id)}')" class="w-full text-left font-serif font-medium text-xs text-[var(--text-primary)] hover:text-[var(--accent-vermilion)] leading-snug cursor-pointer">
                  ${escapeHtml(n.title || 'Untitled')}
                </button>
                <div class="flex items-center flex-wrap gap-1 font-mono text-[9px] text-[var(--text-tertiary)]">
                  <span>${escapeHtml(n.folder || 'General')}</span>
                  ${p.priority ? `<span class="px-1 rounded border ${prioCls}">${escapeHtml(p.priority)}</span>` : ''}
                  ${p.due ? `<span>· ${escapeHtml(p.due)}</span>` : ''}
                </div>
                <div class="flex items-center justify-between pt-1 border-t border-[var(--border-hairline)] font-mono text-[9.5px]">
                  <button type="button" onclick="dbMoveKanbanStatus('${escapeHtml(n.id)}', -1)" ${ci === 0 ? 'disabled' : ''} class="px-1.5 py-0.5 rounded bg-[var(--bg-panel)] border border-[var(--border-hairline)] text-[var(--text-secondary)] disabled:opacity-30 cursor-pointer">&lt;</button>
                  <span class="text-[var(--text-tertiary)]">${getNoteWordCountQuick(n)}w</span>
                  <button type="button" onclick="dbMoveKanbanStatus('${escapeHtml(n.id)}', 1)" ${ci === columns.length - 1 ? 'disabled' : ''} class="px-1.5 py-0.5 rounded bg-[var(--bg-panel)] border border-[var(--border-hairline)] text-[var(--text-secondary)] disabled:opacity-30 cursor-pointer">&gt;</button>
                </div>
              </div>
            `;
          }).join('');
          return `
            <div class="p-2.5 rounded-lg bg-[var(--bg-panel)] border border-[var(--border-hairline)] flex flex-col gap-2 min-h-[220px]">
              <div class="flex items-center justify-between pb-1.5 border-b border-[var(--border-hairline)] font-mono text-[10px]">
                <span class="font-semibold uppercase tracking-wider text-[var(--text-primary)]">${col.label}</span>
                <span class="text-[var(--accent-vermilion)] font-semibold">${colNotes.length}</span>
              </div>
              <div class="space-y-2 flex-1">${cards || '<div class="py-6 text-center font-mono text-[9.5px] text-[var(--text-tertiary)]">Empty</div>'}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}

// ============================================================================
// KEYBOARD SHORTCUTS (Alt+\ Split, Alt+1..9 Switch Tabs)
// ============================================================================
document.addEventListener('keydown', (e) => {
  if (e.altKey && (e.key === '\\' || e.code === 'Backslash')) {
    e.preventDefault();
    toggleSplitNotePane();
    return;
  }
  if (e.altKey && e.key >= '1' && e.key <= '9') {
    const idx = Number(e.key) - 1;
    const tabs = ensureOpenTabsState();
    if (tabs[idx] && typeof selectNote === 'function') {
      e.preventDefault();
      selectNote(tabs[idx]);
    }
    return;
  }
  if (e.key === 'Escape' && pkDatabaseOpen) {
    closeDatabaseModal();
  }
});

// ============================================================================
// 6. PK MOTION ENGINE — AUTOMATIC 60FPS PURE-GPU OPEN & CLOSE ANIMATIONS
// Intercepts .classList hidden add/remove/toggle on all modals, sheets,
// popovers & overlays so EVERY panel animates smoothly on BOTH open AND close!
// ============================================================================
(function initPKMotionEngine() {
  const MOTION_REGISTRY = [
    // Center Modals (Spring Lift & Scale + Smooth Backdrop Fade)
    ['commandPaletteBackdrop', 'pk-motion-modal', 180],
    ['pkDatabaseBackdrop', 'pk-motion-modal', 180],
    ['voiceModelModalBackdrop', 'pk-motion-modal', 180],
    ['pkStudyDeckBackdrop', 'pk-motion-modal', 180],
    ['pkSoundscapeBackdrop', 'pk-motion-modal', 180],
    ['pkVaultPulseBackdrop', 'pk-motion-modal', 180],
    ['focusTimerModalBackdrop', 'pk-motion-modal', 180],
    ['templatesModalBackdrop', 'pk-motion-modal', 180],
    ['eventModalBackdrop', 'pk-motion-modal', 180],
    ['workspaceCustomizerModal', 'pk-motion-modal', 180],
    ['userGuideModal', 'pk-motion-modal', 180],
    ['linkNotePickerModal', 'pk-motion-modal', 180],
    ['startFreshModal', 'pk-motion-modal', 180],
    ['pwaInstallModal', 'pk-motion-modal', 180],
    ['expandedGraphModal', 'pk-motion-modal', 180],
    ['canvasCreateNoteModal', 'pk-motion-modal', 180],

    // Bottom Sheets (Slide Up / Slide Down + Backdrop Fade)
    ['mobileMoreSheetBackdrop', 'pk-motion-sheet', 190],

    // Floating Surfaces (Smooth Rise / Glide Down)
    ['pkScratchpadDrawer', 'pk-motion-float', 170],
    ['pkAudioReaderHUD', 'pk-motion-float', 170],
    ['pkDictationHUD', 'pk-motion-float', 170],
    ['pkSelectionReadBar', 'pk-motion-selection', 140],

    // Popovers, Menus & Collapsible Sub-Panels (Crisp Spring Pop / Tuck)
    ['pkFindReplaceBar', 'pk-motion-popover', 135],
    ['slashMenu', 'pk-motion-popover', 135],
    ['wikiLinkMenu', 'pk-motion-popover', 135],
    ['pkContextMenu', 'pk-motion-popover', 135],
    ['pkContextSubmenu', 'pk-motion-popover', 135],
    ['pkBlockTouchMenu', 'pk-motion-popover', 135],
    ['folderDropdownMenu', 'pk-motion-popover', 135],
    ['glyphPickerPopover', 'pk-motion-popover', 135],
    ['typographyPopover', 'pk-motion-popover', 135],
    ['noteActionsPopover', 'pk-motion-popover', 135],
    ['desktopToolsMenuPopover', 'pk-motion-popover', 135],
    ['calQuickAddPopover', 'pk-motion-popover', 135],
    ['calEventPreviewPopover', 'pk-motion-popover', 135],
    ['calDayOverflowPopover', 'pk-motion-popover', 135],
    ['pkGroqSettingsPanel', 'pk-motion-popover', 135],
    ['pkAiMemoryPanel', 'pk-motion-popover', 135],

    // Fullscreen Cinema Overlay (Zoom Fade)
    ['pkSpotlightOverlay', 'pk-motion-cinema', 190],

    // Mobile Sidebar Backdrops (Smooth Fade)
    ['mobileSidebarBackdrop', 'pk-motion-backdrop', 190],
    ['mobileInspectorBackdrop', 'pk-motion-backdrop', 190]
  ];

  function enhanceElementMotion(el, motionClass, closeDurationMs) {
    if (!el || el.__pkMotionEnhanced) return;
    el.__pkMotionEnhanced = true;

    const cl = el.classList;
    const origAdd = cl.add.bind(cl);
    const origRemove = cl.remove.bind(cl);
    const origToggle = cl.toggle.bind(cl);
    const origContains = cl.contains.bind(cl);

    // Strip ALL legacy keyframe/transition classes that conflict with smooth PK Motion transitions!
    origRemove('animate-backdrop', 'animate-menu', 'animate-modal-card', 'animate-cmd-card', 'transition-opacity', 'transition-all');
    if (el.firstElementChild) {
      el.firstElementChild.classList.remove('animate-modal-card', 'animate-cmd-card', 'animate-menu', 'animate-backdrop');
    }
    origAdd(motionClass);
    if (!origContains('hidden')) origAdd('pk-anim-open');

    let closeTimer = null;
    let raf1 = null;
    let raf2 = null;

    const clearPending = () => {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      if (raf1) { cancelAnimationFrame(raf1); raf1 = null; }
      if (raf2) { cancelAnimationFrame(raf2); raf2 = null; }
    };

    const playOpen = () => {
      clearPending();
      const wasHidden = origContains('hidden') || el.dataset.pkClosing === '1';
      el.dataset.pkClosing = '0';
      origRemove('hidden', 'pk-anim-closing');
      if (!wasHidden && origContains('pk-anim-open')) return;
      origRemove('pk-anim-open');
      // Double RAF guarantees the browser paints the start frame before springing open!
      raf1 = requestAnimationFrame(() => {
        raf1 = null;
        raf2 = requestAnimationFrame(() => {
          raf2 = null;
          if (el.dataset.pkClosing !== '1') {
            origAdd('pk-anim-open');
          }
        });
      });
    };

    const playClose = () => {
      if (origContains('hidden') && el.dataset.pkClosing !== '1') return;
      if (el.dataset.pkClosing === '1') return;
      clearPending();
      const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        el.dataset.pkClosing = '0';
        origRemove('pk-anim-open', 'pk-anim-closing');
        origAdd('hidden');
        return;
      }
      el.dataset.pkClosing = '1';
      origRemove('pk-anim-open');
      origAdd('pk-anim-closing');
      closeTimer = setTimeout(() => {
        closeTimer = null;
        if (el.dataset.pkClosing === '1') {
          el.dataset.pkClosing = '0';
          origRemove('pk-anim-closing');
          origAdd('hidden');
        }
      }, closeDurationMs);
    };

    try {
      cl.contains = function (token) {
        if (token === 'hidden' && el.dataset.pkClosing === '1') return true;
        return origContains(token);
      };

      cl.add = function (...tokens) {
        const rest = tokens.filter(t => t !== 'hidden');
        if (rest.length > 0) origAdd(...rest);
        if (tokens.includes('hidden')) playClose();
      };

      cl.remove = function (...tokens) {
        const rest = tokens.filter(t => t !== 'hidden');
        if (rest.length > 0) origRemove(...rest);
        if (tokens.includes('hidden')) playOpen();
      };

      cl.toggle = function (token, force) {
        if (token !== 'hidden') return origToggle(token, force);
        const isEffectivelyHidden = origContains('hidden') || el.dataset.pkClosing === '1';
        const shouldHide = force !== undefined ? !!force : !isEffectivelyHidden;
        if (shouldHide) {
          playClose();
          return true;
        } else {
          playOpen();
          return false;
        }
      };
    } catch (_) {}
  }

  function wireAll() {
    for (let i = 0; i < MOTION_REGISTRY.length; i++) {
      const [id, cls, dur] = MOTION_REGISTRY[i];
      const el = document.getElementById(id);
      if (el) enhanceElementMotion(el, cls, dur);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireAll);
  } else {
    wireAll();
  }
})();

