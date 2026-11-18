// =========================================================================
// 1. UNIFORM 1.5PX STROKE MONOCHROME SVG ICON REGISTRY (ZERO EMOJIS)
// =========================================================================
const SVG_GLYPHS = {
  pkLogo: `<svg class="w-3.5 h-3.5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 6.5V25.5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M8.5 6.5H16.5C19.5 6.5 22 8.9 22 12C22 15.1 19.5 17.5 16.5 17.5H8.5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 17.5L23.5 7.5" stroke="var(--accent-vermilion)" stroke-width="2.6" stroke-linecap="round"/><path d="M15 17.5L23.5 25.5" stroke="var(--accent-vermilion)" stroke-width="2.6" stroke-linecap="round"/></svg>`,
  document: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  compass: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  layers: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  terminal: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  bookmark: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  grid: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  link: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  alert: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  quote: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`,
  checkSquare: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  list: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  hash: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
  graph: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><line x1="8.2" y1="13.2" x2="15.8" y2="17.8"/><line x1="15.8" y1="6.2" x2="8.2" y2="10.8"/></svg>`,
  calendar: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="1"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  clock: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>`,
  pin: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  minus: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  sliders: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  archive: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
  volume: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  sun: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  sparkles: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  copy: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  chevronUp: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>`,
  chevronDown: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`
};

const GLYPH_KEYS = Object.keys(SVG_GLYPHS);

function getGlyphSVG(key) {
  return SVG_GLYPHS[key] || SVG_GLYPHS.document;
}

// Curated Editorial Ink Color Palette for Calendar Events
const EVENT_COLORS = [
  { key: 'vermilion', label: 'Vermilion Ink', hex: '#D95338', tintDark: 'rgba(217, 83, 56, 0.16)', tintLight: 'rgba(200, 70, 43, 0.11)' },
  { key: 'ochre',     label: 'Archival Ochre', hex: '#C49A45', tintDark: 'rgba(196, 154, 69, 0.16)', tintLight: 'rgba(168, 126, 45, 0.12)' },
  { key: 'slate',     label: 'Prussian Slate', hex: '#4A7C9B', tintDark: 'rgba(74, 124, 155, 0.18)', tintLight: 'rgba(74, 124, 155, 0.12)' },
  { key: 'sage',      label: 'Botanical Sage', hex: '#4D8B6F', tintDark: 'rgba(77, 139, 111, 0.18)', tintLight: 'rgba(77, 139, 111, 0.12)' },
  { key: 'plum',      label: 'Tyrian Plum',    hex: '#8C5A82', tintDark: 'rgba(140, 90, 130, 0.18)', tintLight: 'rgba(140, 90, 130, 0.12)' },
  { key: 'graphite',  label: 'Lead Graphite',  hex: '#6E6D68', tintDark: 'rgba(138, 138, 133, 0.16)', tintLight: 'rgba(110, 109, 104, 0.12)' },
];

function resolveEventColor(colorCode) {
  if (!colorCode) return EVENT_COLORS[0];
  const byHexOrKey = EVENT_COLORS.find(
    c => c.hex.toLowerCase() === colorCode.toLowerCase() || c.key === colorCode.toLowerCase()
  );
  if (byHexOrKey) return byHexOrKey;
  return {
    key: 'custom',
    label: 'Custom',
    hex: colorCode,
    tintDark: 'rgba(217, 83, 56, 0.15)',
    tintLight: 'rgba(200, 70, 43, 0.10)'
  };
}

// =========================================================================
// 2. TIMEZONE-SAFE DATE & ISO 8601 UTILITIES
// =========================================================================
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_NAMES_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_NAMES_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** Formats a local Date instance into canonical calendar date key "YYYY-MM-DD" without UTC shift */
function formatLocalDateKey(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, '0');
  const d = String(dateObj.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Parses "YYYY-MM-DD" into a local midnight Date object safely (never UTC midnight!) */
function parseLocalDateKey(dateKey) {
  const [y, m, d] = String(dateKey).split('-').map(Number);
  return new Date(y, (m || 1) - 1, d || 1, 0, 0, 0, 0);
}

/** Adds N calendar days to a "YYYY-MM-DD" string safely across DST transitions */
function addDaysToDateKey(dateKey, deltaDays) {
  const dt = parseLocalDateKey(dateKey);
  dt.setDate(dt.getDate() + deltaDays);
  return formatLocalDateKey(dt);
}

/** Computes integer calendar day difference (dateKeyB - dateKeyA) */
function diffDaysDateKeys(dateKeyA, dateKeyB) {
  const a = parseLocalDateKey(dateKeyA);
  const b = parseLocalDateKey(dateKeyB);
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((utcB - utcA) / 86400000);
}

/** Converts a UTC ISO 8601 timestamp into "YYYY-MM-DDTHH:mm" in local browser time for <input type="datetime-local"> */
function utcIsoToLocalInput(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${y}-${m}-${day}T${hh}:${mm}`;
}

/** Converts local "YYYY-MM-DDTHH:mm" input value into canonical UTC ISO 8601 string */
function localInputToUtcIso(localVal) {
  if (!localVal) return null;
  const [datePart, timePart = '00:00'] = localVal.split('T');
  const [y, m, d] = datePart.split('-').map(Number);
  const [hh, mm] = timePart.split(':').map(Number);
  const localDate = new Date(y, m - 1, d, hh || 0, mm || 0, 0, 0);
  if (isNaN(localDate.getTime())) return null;
  return localDate.toISOString();
}

/** Formats local hours/minutes as "09:30" */
function formatLocalTime24(dateObj) {
  const hh = String(dateObj.getHours()).padStart(2, '0');
  const mm = String(dateObj.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

/** Returns local browser timezone label, e.g. "Asia/Phnom_Penh (UTC+7)" */
function getLocalTimezoneBadgeLabel() {
  const now = new Date();
  const offsetMin = -now.getTimezoneOffset();
  const sign = offsetMin >= 0 ? '+' : '-';
  const absH = Math.floor(Math.abs(offsetMin) / 60);
  const absM = Math.abs(offsetMin) % 60;
  const offsetStr = absM ? `UTC${sign}${absH}:${String(absM).padStart(2, '0')}` : `UTC${sign}${absH}`;
  try {
    const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const shortCity = tzName ? tzName.split('/').pop().replace(/_/g, ' ') : '';
    return shortCity ? `${shortCity} · ${offsetStr}` : offsetStr;
  } catch {
    return offsetStr;
  }
}

/** Returns Monday-first week dates (7 Date objects) containing the given local Date */
function getWeekDatesMondayFirst(anchorDate) {
  const d = new Date(anchorDate.getFullYear(), anchorDate.getMonth(), anchorDate.getDate());
  const jsDay = d.getDay(); // 0=Sun..6=Sat
  const diffToMonday = jsDay === 0 ? -6 : 1 - jsDay;
  d.setDate(d.getDate() + diffToMonday);
  const week = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i);
    week.push(day);
  }
  return week;
}

/** Builds seed timed UTC ISO string from local dateKey + local hour/minute so sample events always align cleanly with user's local schedule */
function seedLocalTimeAsUtcIso(dateKey, hour, minute = 0) {
  const [y, m, d] = dateKey.split('-').map(Number);
  return new Date(y, m - 1, d, hour, minute, 0, 0).toISOString();
}

/**
 * Normalizes an event into local rendering boundaries:
 * - For all_day: startDateKey, endDateKey (inclusive)
 * - For timed: startDate (local Date), endDate (local Date; defaults to start + 60m if omitted/invalid)
 */
function normalizeEventRange(evt) {
  if (evt.all_day) {
    const startKey = String(evt.start_datetime).slice(0, 10);
    let endKey = evt.end_datetime ? String(evt.end_datetime).slice(0, 10) : startKey;
    if (endKey < startKey) endKey = startKey;
    return {
      allDay: true,
      startDateKey: startKey,
      endDateKey: endKey,
      isMultiDay: endKey > startKey
    };
  } else {
    const start = new Date(evt.start_datetime);
    let end = evt.end_datetime ? new Date(evt.end_datetime) : null;
    if (!end || isNaN(end.getTime()) || end <= start) {
      end = new Date(start.getTime() + 60 * 60 * 1000); // Graceful 1h fallback if end omitted
    }
    const startKey = formatLocalDateKey(start);
    // If end is exact local midnight 00:00 on next day, the visual span ends at 24:00 of previous day
    const endAdjustedForMidnight = new Date(end.getTime() - 1);
    const endKey = formatLocalDateKey(endAdjustedForMidnight);
    return {
      allDay: false,
      start,
      end,
      startDateKey: startKey,
      endDateKey: endKey,
      isMultiDay: endKey > startKey
    };
  }
}

// =========================================================================
// 3. PRE-LOADED ARCHIVAL KNOWLEDGE VAULT + INTEGRATED SCHEDULE EVENTS
// =========================================================================
const STORAGE_KEY = 'pk_note_vault_v3';

const TODAY_KEY = formatLocalDateKey(new Date());

function buildDefaultEvents() {
  return [
    {
      id: 'evt-welcome-setup',
      title: 'Welcome to PK Note',
      start_datetime: seedLocalTimeAsUtcIso(TODAY_KEY, 9, 0),
      end_datetime: seedLocalTimeAsUtcIso(TODAY_KEY, 10, 0),
      location: 'PK Note Workspace',
      color_code: '#D95338',
      all_day: false,
      linkedNoteId: 'note-welcome',
      notes: 'Getting started: test the block editor, explore Cmd+K, and organize your personal thoughts.'
    }
  ];
}

const DEFAULT_VAULT = {
  appMode: 'workspace', // 'workspace' | 'calendar'
  calendarView: 'month', // 'month' | 'week' | 'day' | 'year'
  calendarCursorDate: TODAY_KEY,
  calendarSelectedDate: TODAY_KEY,
  activeNoteId: 'note-welcome',
  theme: 'dark',
  fontStyle: 'sans',
  fontFamily: 'inter',
  fontSize: 'standard',
  headingFont: 'match',
  fontWeight: 'normal',
  textAlign: 'left',
  enableDropCap: false,
  bookIndent: false,
  enableLigatures: true,
  accentColor: 'vermilion',
  layoutWidth: 'standard', // 'standard' (680px) | 'wide' (860px) | 'ultrawide' (1080px) | 'full' (100%)
  lineSpacing: 'standard', // 'standard' | 'compact' | 'relaxed' | 'airy'
  showHeaderGrid: true,
  soundEnabled: !window.PK_LITE_MODE,
  ambientAura: true,
  cursorSpotlight: true,
  mechanicalTyping: true,
  zenMode: false,
  leftSidebarOpen: window.innerWidth >= 1024,
  rightSidebarOpen: window.innerWidth >= 1024,
  inspectorTab: 'graph',
  graphLocalOnly: false,
  folders: ['General', 'Projects', 'Daily Logs', 'Reading'],
  expandedFolders: {
    'General': true,
    'Projects': true,
    'Daily Logs': true,
    'Reading': true
  },
  events: buildDefaultEvents(),
  notes: [
    {
      id: 'note-welcome',
      code: 'DOC-01',
      title: 'Welcome to PK Note',
      glyph: 'pkLogo',
      folder: 'General',
      favorite: true,
      tags: ['welcome', 'guide', 'start'],
      updatedAt: TODAY_KEY,
      blocks: [
        {
          id: 'b-w1',
          type: 'callout',
          content: 'Welcome to PK Note — your personal knowledge environment and integrated chronology. Designed for deep thinking, focused writing, and linked notes without visual clutter.'
        },
        {
          id: 'b-w2',
          type: 'h2',
          content: 'Getting Started: Fast Shortcuts'
        },
        {
          id: 'b-w3',
          type: 'bullet',
          content: 'Press Cmd+K (or Ctrl+K) anywhere to open the Command Palette.'
        },
        {
          id: 'b-w4',
          type: 'bullet',
          content: 'Type / on an empty line to convert any block into Headings, Checklists, Quotes, or Code.'
        },
        {
          id: 'b-w5',
          type: 'bullet',
          content: 'Link ideas together with double brackets, such as [[Personal Knowledge Hub]] or [[Daily Log — ' + TODAY_KEY + ']].'
        },
        {
          id: 'b-w6',
          type: 'bullet',
          content: 'Drag handles, swipe blocks, or tap the top bar for Voice Dictation and Read Aloud.'
        },
        {
          id: 'b-w7',
          type: 'h2',
          content: 'Your Connected Vault'
        },
        {
          id: 'b-w8',
          type: 'paragraph',
          content: 'Notes and schedule are seamlessly linked. When you reference a document in your calendar, it updates your knowledge graph in the right inspector tab automatically.'
        }
      ]
    },
    {
      id: 'note-hub',
      code: 'DOC-02',
      title: 'Personal Knowledge Hub',
      glyph: 'layers',
      folder: 'Projects',
      favorite: true,
      tags: ['hub', 'projects', 'ideas'],
      updatedAt: TODAY_KEY,
      blocks: [
        {
          id: 'b-h1',
          type: 'paragraph',
          content: 'Use this hub to track your active projects, emerging thoughts, and key priorities.'
        },
        {
          id: 'b-h2',
          type: 'h2',
          content: 'Active Goals'
        },
        {
          id: 'b-h3',
          type: 'todo',
          checked: false,
          content: 'Create your first custom collection in the sidebar'
        },
        {
          id: 'b-h4',
          type: 'todo',
          checked: false,
          content: 'Add an event to the integrated calendar'
        },
        {
          id: 'b-h5',
          type: 'todo',
          checked: false,
          content: 'Connect ideas across notes with [[Welcome to PK Note]]'
        }
      ]
    },
    {
      id: 'note-daily-' + TODAY_KEY,
      code: 'DOC-03',
      title: 'Daily Log — ' + TODAY_KEY,
      glyph: 'calendar',
      folder: 'Daily Logs',
      favorite: true,
      tags: ['daily', 'log'],
      updatedAt: TODAY_KEY,
      blocks: [
        {
          id: 'b-d1',
          type: 'callout',
          content: 'Daily reflections, quick task capture, and chronological focus.'
        },
        {
          id: 'b-d2',
          type: 'h2',
          content: 'Today’s Focus'
        },
        {
          id: 'b-d3',
          type: 'todo',
          checked: false,
          content: 'Review today’s schedule in Calendar view'
        },
        {
          id: 'b-d4',
          type: 'todo',
          checked: false,
          content: 'Jot down top 3 priorities for the day'
        }
      ]
    }
  ]
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.notes) && parsed.notes.length > 0) {
        const merged = { ...DEFAULT_VAULT, ...parsed };
        if (Array.isArray(merged.events)) {
          merged.events = merged.events.filter(e => 
            !e.id.startsWith('evt-arch-') && 
            !e.id.startsWith('evt-morning-') && 
            !e.id.startsWith('evt-typography-') && 
            !e.id.startsWith('evt-storage-') && 
            !e.id.startsWith('evt-midnight-') && 
            !e.id.startsWith('evt-systems-') &&
            !e.id.startsWith('evt-field-') &&
            !e.id.startsWith('evt-publication-') &&
            !e.id.startsWith('evt-weekly-')
          );
          if (merged.events.length === 0) {
            merged.events = buildDefaultEvents();
          }
        } else {
          merged.events = buildDefaultEvents();
        }
        if (window.innerWidth < 1024) {
          merged.leftSidebarOpen = false;
          merged.rightSidebarOpen = false;
        }
        return merged;
      }
    }
    // If migrating from v2: check if user only had the old demo notes
    const legacyRaw = localStorage.getItem('pk_note_vault_v2') || localStorage.getItem('aether_archival_vault_v2');
    if (legacyRaw) {
      const leg = JSON.parse(legacyRaw);
      const isDemoVault = leg.notes && leg.notes.some(n => n.id === 'note-graph-arch' || n.id === 'note-typography');
      if (!isDemoVault && Array.isArray(leg.notes) && leg.notes.length > 0) {
        return {
          ...DEFAULT_VAULT,
          ...leg,
          events: (leg.events || []).filter(e => 
            !e.id.startsWith('evt-arch-') && 
            !e.id.startsWith('evt-morning-') &&
            !e.id.startsWith('evt-typography-') &&
            !e.id.startsWith('evt-storage-')
          )
        };
      }
    }
  } catch (e) {
    console.warn('Vault restore fallback:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_VAULT));
}


// =========================================================================
// 4. STATE MANAGEMENT & PERSISTENCE
// =========================================================================
let state = loadState();
let saveTimer = null;

// Ephemeral UI State
let sidebarSearchQuery = '';
let activeTagFilter = null;
let calendarSearchQuery = '';
let calendarColorFilter = null;
let miniCalCursorMonth = parseLocalDateKey(state.calendarCursorDate || TODAY_KEY);

let activeSlashBlockId = null;
let slashSelectedIndex = 0;
let activeWikiBlockId = null;
let wikiQuery = '';
let wikiSelectedIndex = 0;
let cmdSelectedIndex = 0;
let draggedBlockId = null;

// Calendar Drag & Modal State
let draggedCalendarEventId = null;
let draggedEventGrabOffsetMinutes = 0;
let selectedModalColor = EVENT_COLORS[0].hex;
let weekTimelineInitialScrollDone = false;

const SLASH_COMMANDS = [
  { type: 'paragraph', label: 'Paragraph', desc: 'Standard body text block', glyph: 'document', shortcut: '' },
  { type: 'h1', label: 'Heading 1', desc: 'Primary section heading', glyph: 'hash', shortcut: '#' },
  { type: 'h2', label: 'Heading 2', desc: 'Secondary section heading', glyph: 'hash', shortcut: '##' },
  { type: 'h3', label: 'Heading 3', desc: 'Tertiary subsection heading', glyph: 'hash', shortcut: '###' },
  { type: 'bullet', label: 'Bullet List', desc: 'Unordered archival list item', glyph: 'list', shortcut: '-' },
  { type: 'todo', label: 'Checklist Item', desc: 'Interactive task checkbox', glyph: 'checkSquare', shortcut: '[]' },
  { type: 'callout', label: 'Callout Block', desc: 'Left-ruled emphasis note', glyph: 'alert', shortcut: '>' },
  { type: 'quote', label: 'Blockquote', desc: 'Indented editorial citation', glyph: 'quote', shortcut: '"' },
  { type: 'code', label: 'Code Block', desc: 'Monospace syntax container', glyph: 'terminal', shortcut: '```' },
  { type: 'divider', label: 'Horizontal Rule', desc: '1px structural section break', glyph: 'minus', shortcut: '---' },
];

let pendingStateDirty = false;

function flushPersistStateNow() {
  if (!pendingStateDirty) return;
  clearTimeout(saveTimer);
  pendingStateDirty = false;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    const indicator = document.getElementById('saveIndicator');
    if (indicator) {
      indicator.innerHTML = `<span class="w-1.5 h-1.5 rounded-[1px] bg-[var(--text-tertiary)]"></span>SYNCED`;
    }
  } catch (e) {}
}

window.addEventListener('pagehide', flushPersistStateNow);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') flushPersistStateNow();
});

function persistState() {
  pendingStateDirty = true;
  const indicator = document.getElementById('saveIndicator');
  if (indicator) {
    indicator.innerHTML = `<span class="w-1.5 h-1.5 rounded-[1px] bg-[var(--accent-ochre)]"></span>SAVING`;
  }
  clearTimeout(saveTimer);
  const delayMs = window.PK_LITE_MODE ? 650 : 280;
  saveTimer = setTimeout(() => {
    const doSave = () => {
      flushPersistStateNow();
    };
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(doSave, { timeout: 1000 });
    } else {
      doSave();
    }
  }, delayMs);
}

function getActiveNote() {
  return state.notes.find(n => n.id === state.activeNoteId) || state.notes[0];
}

function generateId(prefix = 'id') {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

let pkLastToastMsg = '';
let pkLastToastTs = 0;

function showToast(message, tone = 'vermilion') {
  const msg = String(message || '').trim();
  if (!msg) return;
  const now = Date.now();
  // Prevent duplicate toast storms (e.g. rapid repeated network/sensor events)
  if (msg === pkLastToastMsg && (now - pkLastToastTs) < 2200) return;
  pkLastToastMsg = msg;
  pkLastToastTs = now;

  const container = document.getElementById('toastContainer');
  if (!container) return;
  while (container.children.length >= 2) {
    container.firstElementChild.remove();
  }
  const toast = document.createElement('div');
  const dotColor = tone === 'ochre' ? 'bg-[var(--accent-ochre)]' : 'bg-[var(--accent-vermilion)]';
  toast.className = 'px-3 py-1.5 popover-surface font-mono text-[11px] text-[var(--text-primary)] flex items-center gap-2 shadow-lg animate-toast-in';
  toast.innerHTML = `<span class="w-1.5 h-1.5 rounded-[1px] shrink-0 ${dotColor}"></span><span>${escapeHtml(msg)}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('animate-toast-in');
    toast.classList.add('animate-toast-out');
    setTimeout(() => toast.remove(), 220);
  }, 2400);
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// =========================================================================
// 5. MODE SWITCHING (NOTES WORKSPACE <-> INTEGRATED CALENDAR)
// =========================================================================
function setAppMode(mode) {
  state.appMode = mode === 'calendar' ? 'calendar' : 'workspace';
  if (window.innerWidth < 1024) {
    closeMobileSidebar();
    closeRightSidebar();
  }
  renderAll();
  persistState();
}

function setCalendarView(view) {
  if (!['month', 'week', 'day', 'year'].includes(view)) return;
  state.calendarView = view;
  state.appMode = 'calendar';
  if (view === 'week' || view === 'day') {
    weekTimelineInitialScrollDone = false;
  }
  renderAll();
  persistState();
}

// =========================================================================
// 6. WIKI-LINK SERIALIZATION & GRAPH EDGE EXTRACTION
// =========================================================================

// =========================================================================
// WIKILINK LIVE HOVER PREVIEW & IN-DOCUMENT KNOWLEDGE RADAR
// =========================================================================
let wikiPreviewTimer = null;

function showWikiLinkPreview(event, targetTitle) {
  if (!event || !targetTitle) return;
  clearTimeout(wikiPreviewTimer);

  const targetNote = state.notes.find(n => n.title.toLowerCase() === targetTitle.toLowerCase());
  const card = document.getElementById('wikiLinkPreviewCard');
  if (!card) return;

  const rect = event.target.getBoundingClientRect();
  const cardW = 320;
  let left = rect.left;
  if (left + cardW > window.innerWidth - 16) {
    left = window.innerWidth - cardW - 16;
  }
  let top = rect.bottom + 8;
  if (top + 160 > window.innerHeight) {
    top = Math.max(8, rect.top - 160);
  }
  card.style.left = `${Math.max(12, left)}px`;
  card.style.top = `${top}px`;

  const glyphEl = document.getElementById('wikiPreviewGlyph');
  const titleEl = document.getElementById('wikiPreviewTitle');
  const folderEl = document.getElementById('wikiPreviewFolder');
  const snippetEl = document.getElementById('wikiPreviewSnippet');
  const metaEl = document.getElementById('wikiPreviewMeta');
  const openBtn = document.getElementById('wikiPreviewOpenBtn');
  const unlinkBtn = document.getElementById('wikiPreviewUnlinkBtn');

  if (targetNote) {
    if (glyphEl) glyphEl.innerHTML = getGlyphSVG(targetNote.glyph);
    if (titleEl) titleEl.textContent = targetNote.title;
    if (folderEl) folderEl.textContent = targetNote.folder || 'General';

    // Extract excerpt from first blocks
    const textSnippets = (targetNote.blocks || [])
      .map(b => (b.content || '').replace(/\[\[|\]\]/g, ''))
      .filter(Boolean)
      .join(' · ');
    if (snippetEl) {
      snippetEl.textContent = textSnippets ? (textSnippets.slice(0, 140) + (textSnippets.length > 140 ? '…' : '')) : 'Empty document. Click to open and add thoughts.';
    }
    if (metaEl) {
      const words = textSnippets ? textSnippets.split(/\s+/).length : 0;
      metaEl.textContent = `${words} words · Modified ${targetNote.updatedAt || TODAY_KEY}`;
    }
    if (openBtn) {
      openBtn.onclick = () => { hideWikiLinkPreview(); selectNote(targetNote.id); };
    }
    if (unlinkBtn) {
      unlinkBtn.classList.remove('hidden');
      unlinkBtn.onclick = () => {
        hideWikiLinkPreview();
        disconnectNotes(state.activeNoteId, targetNote.id);
      };
    }
  } else {
    if (glyphEl) glyphEl.innerHTML = getGlyphSVG('document');
    if (titleEl) titleEl.textContent = targetTitle;
    if (folderEl) folderEl.textContent = 'Uncreated Note';
    if (snippetEl) snippetEl.textContent = 'This document has not been created yet. Click below to create it.';
    if (metaEl) metaEl.textContent = 'DOC (Seed link)';
    if (unlinkBtn) unlinkBtn.classList.add('hidden');
    if (openBtn) {
      openBtn.onclick = () => { hideWikiLinkPreview(); navigateToWikiTitle(null, targetTitle); };
    }
  }

  card.classList.remove('hidden');
}

function scheduleHideWikiLinkPreview() {
  clearTimeout(wikiPreviewTimer);
  wikiPreviewTimer = setTimeout(() => {
    hideWikiLinkPreview();
  }, 260);
}

function cancelHideWikiLinkPreview() {
  clearTimeout(wikiPreviewTimer);
}

function hideWikiLinkPreview() {
  clearTimeout(wikiPreviewTimer);
  const card = document.getElementById('wikiLinkPreviewCard');
  if (card) card.classList.add('hidden');
}

function renderDocKnowledgeRadar(note) {
  const radarEl = document.getElementById('docKnowledgeRadar');
  if (!radarEl || !note) return;

  const allLinks = computeVaultConnections();
  const linkedIds = new Set();
  allLinks.forEach(l => {
    if (l.source === note.id) linkedIds.add(l.target);
    if (l.target === note.id) linkedIds.add(l.source);
  });

  const linkedNotes = state.notes.filter(n => linkedIds.has(n.id));
  // Zero clutter: completely hide when there are no linked notes!
  if (linkedNotes.length === 0) {
    radarEl.innerHTML = '';
    radarEl.classList.add('hidden');
    return;
  }

  radarEl.classList.remove('hidden');
  const isLocked = !!note.locked;
  radarEl.innerHTML = `
    <div class="flex items-center flex-wrap gap-1.5">
      <span class="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] mr-1">Linked (${linkedNotes.length})</span>
      ${linkedNotes.map(n => `
        <div class="group/pill inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--bg-panel)] border border-[var(--border-hairline)] hover:border-[var(--accent-vermilion)] text-xs text-[var(--text-primary)] transition-colors">
          <button onclick="selectNote('${n.id}')" class="hover:underline font-serif text-[12px] truncate max-w-[160px] cursor-pointer">${escapeHtml(n.title)}</button>
          ${!isLocked ? `<button onclick="disconnectNotes('${note.id}', '${n.id}'); disconnectNotes('${n.id}', '${note.id}')" title="Unlink" class="opacity-60 hover:opacity-100 hover:text-red-500 text-[var(--text-tertiary)] transition-opacity cursor-pointer text-[10px]">✕</button>` : ''}
        </div>
      `).join('')}
      <button onclick="openRightInspector('graph')" class="ml-auto px-2 py-0.5 rounded-full hover:bg-[var(--bg-hover)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] font-mono text-[10px] transition-colors cursor-pointer">
        Graph
      </button>
    </div>
  `;
}
function renderRichBlockHTML(rawText) {
  if (!rawText) return '';
  const escaped = escapeHtml(rawText);
  return escaped.replace(/\[\[([^\]]+)\]\]/g, (match, title) => {
    const cleanTitle = title.trim();
    const target = state.notes.find(n => n.title.toLowerCase() === cleanTitle.toLowerCase());
    const statusClass = target ? '' : 'uncreated';
    return `<span class="wiki-link-ref ${statusClass}" contenteditable="false" data-wiki-target="${escapeHtml(cleanTitle)}" onmouseenter="showWikiLinkPreview(event, '${escapeHtml(cleanTitle).replace(/'/g, "\\'")}')" onmouseleave="scheduleHideWikiLinkPreview()" onclick="navigateToWikiTitle(event, '${escapeHtml(cleanTitle).replace(/'/g, "\\'")}')">[[${escapeHtml(cleanTitle)}]]</span>`;
  });
}

function serializeEditableBlock(el) {
  let result = '';
  el.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      result += node.textContent;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.classList && node.classList.contains('wiki-link-ref')) {
        const targetTitle = node.getAttribute('data-wiki-target') || node.innerText.replace(/^\[\[|\]\]$/g, '').trim();
        result += `[[${targetTitle}]]`;
      } else if (node.tagName === 'BR') {
        result += '\n';
      } else {
        result += serializeEditableBlock(node);
      }
    }
  });
  return result;
}

function computeVaultConnections() {
  const links = [];
  const titleMap = new Map();
  state.notes.forEach(n => titleMap.set(n.title.toLowerCase().trim(), n));

  state.notes.forEach(sourceNote => {
    const seenTargets = new Set();
    sourceNote.blocks.forEach(block => {
      const regex = /\[\[([^\]]+)\]\]/g;
      let match;
      while ((match = regex.exec(block.content || '')) !== null) {
        const targetTitle = match[1].trim().toLowerCase();
        const targetNote = titleMap.get(targetTitle);
        if (targetNote && targetNote.id !== sourceNote.id && !seenTargets.has(targetNote.id)) {
          seenTargets.add(targetNote.id);
          links.push({ source: sourceNote.id, target: targetNote.id });
        }
      }
    });
  });
  return links;
}

function navigateToWikiTitle(event, title) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const existing = state.notes.find(n => n.title.toLowerCase() === title.toLowerCase());
  if (existing) {
    state.appMode = 'workspace';
    selectNote(existing.id);
  } else {
    const nextNum = String(state.notes.length + 1).padStart(2, '0');
    const newNote = {
      id: generateId('note'),
      code: `DOC-${nextNum}`,
      title: title,
      glyph: 'document',
      folder: 'General',
      favorite: false,
      tags: ['seed'],
      updatedAt: TODAY_KEY,
      blocks: [
        { id: generateId('b'), type: 'paragraph', content: `Referenced from [[${getActiveNote().title}]].` }
      ]
    };
    state.notes.unshift(newNote);
    state.appMode = 'workspace';
    selectNote(newNote.id);
    showToast(`Created "${title}"`);
  }
}

// =========================================================================
// 7. MASTER RENDER PIPELINE (LAYOUT, SIDEBAR, EDITOR, CALENDAR, INSPECTOR)
// =========================================================================
function renderAll() {
  applyThemeAndLayout();
  renderSidebar();
  renderMiniCalendarWidget();
  if (state.appMode === 'calendar') {
    renderCalendarSystem();
  } else {
    renderActiveDocument();
    renderInspector();
  }
  if (typeof updateMobileUndoButtons === 'function') {
    updateMobileUndoButtons();
  }
  if (typeof applyNoteLockVisuals === 'function') {
    applyNoteLockVisuals(getActiveNote());
  }
}

function applyThemeAndLayout() {
  const html = document.documentElement;
  const sun = document.getElementById('iconSun');
  const moon = document.getElementById('iconMoon');
  if (state.theme === 'dark') {
    html.classList.add('dark');
    sun.classList.remove('hidden');
    moon.classList.add('hidden');
  } else {
    html.classList.remove('dark');
    sun.classList.add('hidden');
    moon.classList.remove('hidden');
  }

  // Left Sidebar visibility (Responsive desktop + mobile drawer)
  const left = document.getElementById('leftSidebar');
  const mobileBackdrop = document.getElementById('mobileSidebarBackdrop');
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    if (state.leftSidebarOpen) {
      left.style.width = '82vw';
      left.style.maxWidth = '300px';
      left.style.transform = 'translateX(0)';
      left.style.opacity = '1';
      mobileBackdrop.classList.remove('hidden');
    } else {
      left.style.transform = 'translateX(-100%)';
      mobileBackdrop.classList.add('hidden');
    }
  } else {
    mobileBackdrop.classList.add('hidden');
    left.style.maxWidth = '';
    left.style.transform = 'translateX(0)';
    if (state.leftSidebarOpen) {
      left.style.width = '16rem';
      left.style.opacity = '1';
    } else {
      left.style.width = '0px';
      left.style.opacity = '0';
    }
  }

  // App Mode Views & Header Controls
  const isCalendar = state.appMode === 'calendar';
  const docArea = document.getElementById('documentScrollArea');
  const calArea = document.getElementById('calendarViewport');
  const wsBread = document.getElementById('workspaceBreadcrumbNav');
  const calBread = document.getElementById('calendarBreadcrumbNav');
  const wsControls = document.getElementById('workspaceHeaderControls');
  const calControls = document.getElementById('calendarHeaderControls');
  const rightSidebar = document.getElementById('rightSidebar');

  // Mode Toggle Buttons (Sidebar & Top Bar)
  const activeClasses = ['bg-[var(--bg-panel)]', 'text-[var(--text-primary)]', 'border', 'border-[var(--border-hairline)]'];
  const inactiveClasses = ['text-[var(--text-secondary)]', 'hover:text-[var(--text-primary)]', 'border', 'border-transparent'];

  const modeBtnWs = document.getElementById('modeBtnWorkspace');
  const modeBtnCal = document.getElementById('modeBtnCalendar');
  const topTabWs = document.getElementById('topTabWorkspace');
  const topTabCal = document.getElementById('topTabCalendar');

  const wasCalendar = !calArea.classList.contains('hidden');
  if (isCalendar) {
    docArea.classList.add('hidden');
    calArea.classList.remove('hidden');
    if (!wasCalendar && !window.PK_LITE_MODE) {
      calArea.classList.remove('animate-view-fade');
      void calArea.offsetWidth;
      calArea.classList.add('animate-view-fade');
    }
    wsBread.classList.add('hidden');
    calBread.classList.remove('hidden');
    wsControls.classList.add('hidden');
    calControls.classList.remove('hidden');

    // Hide document graph inspector in calendar mode (calendar has its own right agenda inspector)
    rightSidebar.style.width = '0px';
    rightSidebar.style.opacity = '0';
    const inspectorBackdrop = document.getElementById('mobileInspectorBackdrop');
    if (inspectorBackdrop) inspectorBackdrop.classList.add('hidden');
    updateMobileNavState();

    modeBtnCal.className = 'flex items-center justify-center gap-1.5 py-1 px-2 rounded-[2px] font-mono text-[11px] font-medium transition-colors bg-[var(--bg-panel)] text-[var(--text-primary)] border border-[var(--border-hairline)]';
    modeBtnWs.className = 'flex items-center justify-center gap-1.5 py-1 px-2 rounded-[2px] font-mono text-[11px] font-medium transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent';

    topTabCal.className = 'px-2 py-0.5 rounded-[2px] font-mono text-[10px] uppercase transition-colors bg-[var(--bg-canvas)] text-[var(--text-primary)] border border-[var(--border-hairline)]';
    topTabWs.className = 'px-2 py-0.5 rounded-[2px] font-mono text-[10px] uppercase transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent';
  } else {
    docArea.classList.remove('hidden');
    calArea.classList.add('hidden');
    if (wasCalendar && !window.PK_LITE_MODE) {
      docArea.classList.remove('animate-view-fade');
      void docArea.offsetWidth;
      docArea.classList.add('animate-view-fade');
    }
    wsBread.classList.remove('hidden');
    calBread.classList.add('hidden');
    wsControls.classList.remove('hidden');
    calControls.classList.add('hidden');

    const isMobileScreen = window.innerWidth < 1024;
    const inspectorBackdrop = document.getElementById('mobileInspectorBackdrop');

    if (isMobileScreen) {
      rightSidebar.style.width = window.innerWidth < 640 ? '100%' : '20rem';
      if (state.rightSidebarOpen) {
        rightSidebar.style.transform = 'translateX(0)';
        rightSidebar.style.opacity = '1';
        if (inspectorBackdrop) inspectorBackdrop.classList.remove('hidden');
      } else {
        rightSidebar.style.transform = 'translateX(100%)';
        if (inspectorBackdrop) inspectorBackdrop.classList.add('hidden');
      }
    } else {
      if (inspectorBackdrop) inspectorBackdrop.classList.add('hidden');
      rightSidebar.style.transform = 'translateX(0)';
      if (state.rightSidebarOpen) {
        rightSidebar.style.width = '20rem';
        rightSidebar.style.opacity = '1';
      } else {
        rightSidebar.style.width = '0px';
        rightSidebar.style.opacity = '0';
      }
    }

    // Update Mobile Bottom Nav Active Highlighting
    updateMobileNavState();

    modeBtnWs.className = 'flex items-center justify-center gap-1.5 py-1 px-2 rounded-[2px] font-mono text-[11px] font-medium transition-colors bg-[var(--bg-panel)] text-[var(--text-primary)] border border-[var(--border-hairline)]';
    modeBtnCal.className = 'flex items-center justify-center gap-1.5 py-1 px-2 rounded-[2px] font-mono text-[11px] font-medium transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent';

    topTabWs.className = 'px-2 py-0.5 rounded-[2px] font-mono text-[10px] uppercase transition-colors bg-[var(--bg-canvas)] text-[var(--text-primary)] border border-[var(--border-hairline)]';
    topTabCal.className = 'px-2 py-0.5 rounded-[2px] font-mono text-[10px] uppercase transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent';
  }

  // Apply Accent Theme & Custom Inks
  applyAccentTheme(state.accentColor || 'vermilion', false);

  // Document Typography & Multi-Font Engine
  const blocksEl = document.getElementById('blocksContainer');
  const fontLabel = document.getElementById('fontToggleLabel');

  // Resolve Active Font
  const currentFontId = state.fontFamily || (state.fontStyle === 'serif' ? 'newsreader' : (state.fontStyle === 'mono' ? 'jetbrains' : 'inter'));
  const activeFontObj = (typeof AVAILABLE_FONTS !== 'undefined' ? AVAILABLE_FONTS.find(f => f.id === currentFontId) : null) || { id: 'inter', name: 'Inter', class: 'font-inter' };

  if (fontLabel) {
    fontLabel.textContent = activeFontObj.name.toUpperCase();
  }

  if (blocksEl) {
    if (typeof AVAILABLE_FONTS !== 'undefined') {
      AVAILABLE_FONTS.forEach(f => blocksEl.classList.remove(f.class));
    }
    blocksEl.classList.remove('font-serif', 'font-mono', 'font-sans');
    blocksEl.classList.add(activeFontObj.class);

    // Heading Font Pairing
    const headingFont = state.headingFont || 'match';
    const docTitle = document.getElementById('docTitleInput');
    if (docTitle) {
      docTitle.classList.remove(
        'font-serif', 'font-mono', 'font-inter', 'font-jakarta', 'font-outfit',
        'font-space-grotesk', 'font-newsreader', 'font-lora', 'font-garamond',
        'font-playfair', 'font-cinzel', 'font-jetbrains', 'font-fira', 'font-space-mono', 'font-lexend'
      );
      if (headingFont === 'match') {
        docTitle.classList.add(activeFontObj.class);
      } else if (typeof AVAILABLE_FONTS !== 'undefined') {
        const hFontObj = AVAILABLE_FONTS.find(f => f.id === headingFont);
        if (hFontObj) docTitle.classList.add(hFontObj.class);
      }
    }

    // Font Size Scale
    blocksEl.classList.remove('text-scale-small', 'text-scale-standard', 'text-scale-medium', 'text-scale-large', 'text-scale-xl');
    const sizeClass = (typeof FONT_SIZE_SCALES !== 'undefined' ? (FONT_SIZE_SCALES.find(s => s.id === state.fontSize) || FONT_SIZE_SCALES[1]).class : 'text-scale-standard');
    blocksEl.classList.add(sizeClass);

    // Line Spacing
    blocksEl.classList.remove('leading-[1.4]', 'leading-[1.6]', 'leading-[1.85]', 'leading-[2.1]');
    if (state.lineSpacing === 'compact') {
      blocksEl.classList.add('leading-[1.4]');
    } else if (state.lineSpacing === 'relaxed') {
      blocksEl.classList.add('leading-[1.85]');
    } else if (state.lineSpacing === 'airy') {
      blocksEl.classList.add('leading-[2.1]');
    } else {
      blocksEl.classList.add('leading-[1.6]');
    }

    // Text Alignment & Justification
    blocksEl.classList.remove('prose-justify', 'prose-left');
    if (state.textAlign === 'justify') {
      blocksEl.classList.add('prose-justify');
    } else {
      blocksEl.classList.add('prose-left');
    }

    // Drop Cap First Letter
    blocksEl.classList.remove('prose-drop-cap');
    if (state.enableDropCap) {
      blocksEl.classList.add('prose-drop-cap');
    }

    // Book Paragraph Indent
    blocksEl.classList.remove('prose-book-indent');
    if (state.bookIndent) {
      blocksEl.classList.add('prose-book-indent');
    }

    // Code Ligatures
    blocksEl.classList.remove('ligatures-off', 'ligatures-on');
    if (state.enableLigatures === false) {
      blocksEl.classList.add('ligatures-off');
    } else {
      blocksEl.classList.add('ligatures-on');
    }

    // Font Weight
    blocksEl.classList.remove('font-normal', 'font-medium', 'font-semibold');
    if (state.fontWeight === 'medium') {
      blocksEl.classList.add('font-medium');
    } else if (state.fontWeight === 'bold') {
      blocksEl.classList.add('font-semibold');
    } else {
      blocksEl.classList.add('font-normal');
    }
  }

  // Configurable Reading Measure Width
  const contentContainer = document.getElementById('documentContentContainer');
  if (contentContainer) {
    contentContainer.classList.remove('max-w-[680px]', 'max-w-[860px]', 'max-w-[1080px]', 'max-w-full');
    if (state.layoutWidth === 'wide') {
      contentContainer.classList.add('max-w-[860px]');
    } else if (state.layoutWidth === 'ultrawide') {
      contentContainer.classList.add('max-w-[1080px]');
    } else if (state.layoutWidth === 'full') {
      contentContainer.classList.add('max-w-full');
    } else {
      contentContainer.classList.add('max-w-[680px]');
    }
  }

  // Ruled Header Grid Band / Banner Visibility
  const gridBand = document.getElementById('ruledHeaderBand');
  if (gridBand) {
    const note = getActiveNote();
    if (note && note.banner && note.banner.value) {
      gridBand.classList.remove('hidden');
    } else if (state.showHeaderGrid) {
      gridBand.classList.remove('hidden');
    } else {
      gridBand.classList.add('hidden');
    }
  }
}

function renderSidebar() {
  // Update Today's Event Count Badge in Sidebar
  const todayEvents = getEventsForDateKey(TODAY_KEY);
  const badge = document.getElementById('sidebarTodayEventBadge');
  if (badge) badge.textContent = todayEvents.length;

  const q = sidebarSearchQuery.toLowerCase().trim();
  const filteredNotes = state.notes.filter(n => {
    const matchesQuery = !q ||
      n.title.toLowerCase().includes(q) ||
      (n.tags || []).some(t => t.toLowerCase().includes(q)) ||
      n.blocks.some(b => (b.content || '').toLowerCase().includes(q));
    const matchesTag = !activeTagFilter || (n.tags || []).includes(activeTagFilter);
    const matchesStarred = !activeStarredFilter || Boolean(n.favorite);
    return matchesQuery && matchesTag && matchesStarred;
  });

  // Update Starred Filter Button Style
  const starFilterBtn = document.getElementById('sidebarStarredFilterBtn');
  if (starFilterBtn) {
    if (activeStarredFilter) {
      starFilterBtn.className = 'px-1.5 py-0.5 rounded-[2px] font-mono text-[9px] border border-[var(--accent-ochre)] bg-[var(--accent-ochre)] text-black font-semibold transition-colors';
    } else {
      starFilterBtn.className = 'px-1.5 py-0.5 rounded-[2px] font-mono text-[9px] border border-[var(--border-hairline)] text-[var(--text-secondary)] hover:text-[var(--accent-ochre)] transition-colors';
    }
  }

  document.getElementById('sidebarTotalCount').textContent = filteredNotes.length;

  // 1. Pinned Notes
  const pinnedList = document.getElementById('pinnedList');
  const pinnedSection = document.getElementById('pinnedSection');
  const pinned = filteredNotes.filter(n => n.favorite);
  if (pinned.length === 0) {
    pinnedSection.classList.add('hidden');
  } else {
    pinnedSection.classList.remove('hidden');
    pinnedList.innerHTML = pinned.map(note => renderSidebarNoteRow(note)).join('');
  }

  // 2. Folder Directory Tree
  const folders = state.folders || ['General', 'Projects', 'Daily Logs', 'Reading'];
  const treeContainer = document.getElementById('folderTreeContainer');
  treeContainer.innerHTML = folders.map(folder => {
    const folderNotes = filteredNotes.filter(n => (n.folder || 'General') === folder);
    if ((q || activeTagFilter) && folderNotes.length === 0) return '';
    const isExpanded = state.expandedFolders[folder] !== false;
    return `
      <div class="space-y-0.5">
        <div data-folder-drop="${escapeHtml(folder)}"
             class="flex items-center justify-between px-1.5 py-1 rounded-[3px] hover:bg-[var(--bg-hover)] text-xs text-[var(--text-secondary)] group cursor-pointer transition-colors"
             onclick="toggleFolder('${escapeHtml(folder).replace(/'/g, "\\'")}')">
          <div class="flex items-center gap-1.5 min-w-0">
            <svg class="w-3 h-3 text-[var(--text-tertiary)] transition-transform duration-150 ${isExpanded ? 'rotate-90' : ''}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
            <span class="font-medium truncate text-[var(--text-primary)]/90">${escapeHtml(folder)}</span>
            <span class="font-mono text-[10px] text-[var(--text-tertiary)]">${folderNotes.length}</span>
          </div>
          <button onclick="event.stopPropagation(); createNewNote('${escapeHtml(folder).replace(/'/g, "\\'")}')" title="New note in ${escapeHtml(folder)}" class="opacity-0 group-hover:opacity-100 p-0.5 rounded-[2px] hover:bg-[var(--bg-canvas)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-opacity">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
        ${isExpanded ? `
          <div class="pl-3 ml-1.5 border-l border-[var(--border-hairline)] space-y-0.5">
            ${folderNotes.length > 0
              ? folderNotes.map(note => renderSidebarNoteRow(note)).join('')
              : `<div class="px-2 py-1 font-mono text-[10px] text-[var(--text-tertiary)]">Empty</div>`
            }
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  // 3. Vault Tags Index
  const tagCounts = new Map();
  state.notes.forEach(n => {
    (n.tags || []).forEach(t => tagCounts.set(t, (tagCounts.get(t) || 0) + 1));
  });
  const tagsListEl = document.getElementById('sidebarTagsList');
  const clearTagBtn = document.getElementById('clearTagFilterBtn');
  if (activeTagFilter) {
    clearTagBtn.classList.remove('hidden');
  } else {
    clearTagBtn.classList.add('hidden');
  }

  tagsListEl.innerHTML = Array.from(tagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => {
      const isSelected = activeTagFilter === tag;
      return `
        <button onclick="toggleTagFilter('${escapeHtml(tag)}')"
                class="px-1.5 py-0.5 rounded-[2px] font-mono text-[10px] border transition-colors ${
                  isSelected
                    ? 'bg-[var(--accent-vermilion)] text-white border-[var(--accent-vermilion)]'
                    : 'bg-[var(--bg-canvas)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
                }">
          #${escapeHtml(tag)} <span class="opacity-65">${count}</span>
        </button>
      `;
    }).join('');
}

function renderSidebarNoteRow(note) {
  const isActive = state.appMode === 'workspace' && note.id === state.activeNoteId;
  return `
    <button onclick="selectNote('${note.id}')"
            data-note-id="${note.id}"
            class="sidebar-note-btn w-full flex items-center gap-2 px-2 py-1.5 rounded-[3px] text-xs text-left group ${
              isActive
                ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] font-medium border-l-2 border-[var(--accent-vermilion)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] border-l-2 border-transparent'
            }">
      <span class="shrink-0 ${isActive ? 'text-[var(--accent-vermilion)]' : 'text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]'}">
        ${getGlyphSVG(note.glyph)}
      </span>
      <span class="truncate flex-1">${escapeHtml(note.title || 'Untitled Document')}</span>
    </button>
  `;
}

// =========================================================================
// 8. SIDEBAR MINI CALENDAR & UPCOMING AGENDA WIDGET
// =========================================================================
function shiftMiniCalMonth(delta) {
  miniCalCursorMonth = new Date(miniCalCursorMonth.getFullYear(), miniCalCursorMonth.getMonth() + delta, 1);
  renderMiniCalendarWidget();
}

function jumpMiniCalToday() {
  miniCalCursorMonth = parseLocalDateKey(TODAY_KEY);
  state.calendarCursorDate = TODAY_KEY;
  state.calendarSelectedDate = TODAY_KEY;
  renderMiniCalendarWidget();
  if (state.appMode === 'calendar') {
    renderCalendarSystem();
  }
  persistState();
}

function selectMiniCalDate(dateKey) {
  state.calendarSelectedDate = dateKey;
  state.calendarCursorDate = dateKey;
  state.appMode = 'calendar';
  if (window.innerWidth < 1024) {
    closeMobileSidebar();
    closeRightSidebar();
  }
  renderAll();
  persistState();
}

function renderMiniCalendarWidget() {
  const year = miniCalCursorMonth.getFullYear();
  const month = miniCalCursorMonth.getMonth();
  const labelEl = document.getElementById('miniCalMonthLabel');
  if (labelEl) {
    labelEl.textContent = `${MONTH_SHORT[month].toUpperCase()} ${year}`;
  }

  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Mon=0..Sun=6
  const gridStart = new Date(year, month, 1 - startOffset);

  const headerHtml = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    .map(d => `<span class="text-[9px] text-[var(--text-tertiary)] pb-0.5">${d}</span>`)
    .join('');

  let cellsHtml = '';
  for (let i = 0; i < 42; i++) {
    const d = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
    const key = formatLocalDateKey(d);
    const isCurrentMonth = d.getMonth() === month;
    const isToday = key === TODAY_KEY;
    const isSelected = key === state.calendarSelectedDate;
    const hasEvents = getEventsForDateKey(key).length > 0;

    let cellClass = 'h-5 flex flex-col items-center justify-center rounded-[2px] relative transition-colors ';
    if (isToday) {
      cellClass += 'bg-[var(--accent-vermilion)] text-white font-semibold';
    } else if (isSelected) {
      cellClass += 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)]';
    } else if (isCurrentMonth) {
      cellClass += 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]';
    } else {
      cellClass += 'text-[var(--text-tertiary)]/50 hover:bg-[var(--bg-hover)]';
    }

    cellsHtml += `
      <button onclick="selectMiniCalDate('${key}')" title="${key}" class="${cellClass}">
        <span class="leading-none">${d.getDate()}</span>
        ${hasEvents && !isToday ? `<span class="w-1 h-1 rounded-full bg-[var(--accent-ochre)] mt-[1px]"></span>` : ''}
      </button>
    `;
  }

  const gridEl = document.getElementById('miniCalGrid');
  if (gridEl) gridEl.innerHTML = headerHtml + cellsHtml;

  // Render Selected Date Mini-Agenda
  const selectedKey = state.calendarSelectedDate || TODAY_KEY;
  const dayEvents = getEventsForDateKey(selectedKey).slice(0, 3);
  const upcomingEl = document.getElementById('miniCalUpcoming');
  if (upcomingEl) {
    const dateLabel = selectedKey === TODAY_KEY ? 'TODAY' : selectedKey;
    if (dayEvents.length === 0) {
      upcomingEl.innerHTML = `
        <div class="flex items-center justify-between font-mono text-[9px] text-[var(--text-tertiary)]">
          <span>${dateLabel} · CLEAR</span>
          <button onclick="openEventModal({ dateKey: '${selectedKey}' })" class="text-[var(--accent-vermilion)] hover:underline">+ADD</button>
        </div>
      `;
    } else {
      upcomingEl.innerHTML = `
        <div class="font-mono text-[9px] text-[var(--text-tertiary)] pb-0.5">${dateLabel} (${getEventsForDateKey(selectedKey).length})</div>
        ${dayEvents.map(evt => {
          const col = resolveEventColor(evt.color_code);
          const norm = normalizeEventRange(evt);
          const timeTag = norm.allDay ? 'ALL DAY' : formatLocalTime24(norm.start);
          return `
            <button onclick="openEventModal({ eventId: '${evt.id}' })" class="w-full flex items-center gap-1.5 px-1 py-0.5 rounded-[2px] hover:bg-[var(--bg-hover)] text-left transition-colors">
              <span class="w-1.5 h-1.5 rounded-[1px] shrink-0" style="background-color: ${col.hex}"></span>
              <span class="font-mono text-[9px] text-[var(--text-tertiary)] shrink-0">${timeTag}</span>
              <span class="text-[10px] text-[var(--text-primary)] truncate">${escapeHtml(evt.title)}</span>
            </button>
          `;
        }).join('')}
      `;
    }
  }
}

// =========================================================================
// 9. INTEGRATED CALENDAR SYSTEM (MONTH / WEEK / DAY + OVERLAPS + DND)
// =========================================================================
function getFilteredEvents() {
  const q = calendarSearchQuery.toLowerCase().trim();
  return (state.events || []).filter(evt => {
    const matchesQuery = !q ||
      evt.title.toLowerCase().includes(q) ||
      (evt.location || '').toLowerCase().includes(q) ||
      (evt.notes || '').toLowerCase().includes(q);
    const matchesColor = !calendarColorFilter ||
      resolveEventColor(evt.color_code).key === calendarColorFilter;
    return matchesQuery && matchesColor;
  });
}

function getEventsForDateKey(dateKey) {
  return getFilteredEvents()
    .filter(evt => {
      const norm = normalizeEventRange(evt);
      return dateKey >= norm.startDateKey && dateKey <= norm.endDateKey;
    })
    .sort((a, b) => {
      if (a.all_day !== b.all_day) return a.all_day ? -1 : 1;
      return String(a.start_datetime).localeCompare(String(b.start_datetime));
    });
}

function handleCalendarFilter(val) {
  calendarSearchQuery = val;
  renderCalendarSystem();
}

function toggleCalendarColorFilter(colorKey) {
  calendarColorFilter = calendarColorFilter === colorKey ? null : colorKey;
  renderCalendarSystem();
}

function navigateCalendar(delta) {
  const cursor = parseLocalDateKey(state.calendarCursorDate || TODAY_KEY);
  if (state.calendarView === 'year') {
    cursor.setFullYear(cursor.getFullYear() + delta);
  } else if (state.calendarView === 'month') {
    cursor.setMonth(cursor.getMonth() + delta, 1);
  } else if (state.calendarView === 'week') {
    cursor.setDate(cursor.getDate() + delta * 7);
  } else {
    cursor.setDate(cursor.getDate() + delta);
  }
  const nextKey = formatLocalDateKey(cursor);
  state.calendarCursorDate = nextKey;
  state.calendarSelectedDate = nextKey;
  miniCalCursorMonth = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  renderAll();
  persistState();
}

function jumpCalendarToday() {
  state.calendarCursorDate = TODAY_KEY;
  state.calendarSelectedDate = TODAY_KEY;
  miniCalCursorMonth = parseLocalDateKey(TODAY_KEY);
  weekTimelineInitialScrollDone = false;
  renderAll();
  persistState();
}

function selectCalendarDate(dateKey, switchToDay = false) {
  state.calendarSelectedDate = dateKey;
  state.calendarCursorDate = dateKey;
  if (switchToDay) {
    state.calendarView = 'day';
    weekTimelineInitialScrollDone = false;
  }
  renderAll();
  persistState();
}

function renderCalendarSystem() {
  // Update Timezone Badge
  const tzBadge = document.getElementById('localTzBadge');
  if (tzBadge) tzBadge.textContent = getLocalTimezoneBadgeLabel();

  // Update View Switcher Buttons
  ['month', 'week', 'day', 'year'].forEach(v => {
    const btn = document.getElementById(`calViewBtn${v.charAt(0).toUpperCase() + v.slice(1)}`);
    if (!btn) return;
    if (state.calendarView === v) {
      btn.className = 'px-2.5 py-1 rounded-[2px] font-mono text-[11px] font-medium transition-colors bg-[var(--bg-panel)] text-[var(--text-primary)] border border-[var(--border-hairline)]';
    } else {
      btn.className = 'px-2.5 py-1 rounded-[2px] font-mono text-[11px] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent';
    }
  });

  // Update Color Filter Swatches
  const colorBar = document.getElementById('calendarColorFilterBar');
  if (colorBar) {
    colorBar.innerHTML = EVENT_COLORS.map(c => {
      const active = calendarColorFilter === c.key;
      return `
        <button onclick="toggleCalendarColorFilter('${c.key}')"
                title="Filter by ${c.label}"
                class="w-4 h-4 rounded-[2px] flex items-center justify-center transition-transform ${active ? 'ring-1 ring-offset-1 ring-[var(--text-primary)] scale-110' : 'opacity-75 hover:opacity-100'}"
                style="background-color: ${c.hex}">
          ${active ? '<span class="w-1.5 h-1.5 bg-white rounded-[1px]"></span>' : ''}
        </button>
      `;
    }).join('') + (calendarColorFilter ? `
      <button onclick="toggleCalendarColorFilter('${calendarColorFilter}')" class="ml-1 font-mono text-[9px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]">ALL</button>
    ` : '');
  }

  // Compute Period Title
  const cursor = parseLocalDateKey(state.calendarCursorDate || TODAY_KEY);
  let periodTitle = '';
  if (state.calendarView === 'year') {
    periodTitle = `${cursor.getFullYear()}`;
  } else if (state.calendarView === 'month') {
    periodTitle = `${MONTH_NAMES[cursor.getMonth()]} ${cursor.getFullYear()}`;
  } else if (state.calendarView === 'week') {
    const weekDays = getWeekDatesMondayFirst(cursor);
    const first = weekDays[0];
    const last = weekDays[6];
    if (first.getMonth() === last.getMonth()) {
      periodTitle = `${MONTH_SHORT[first.getMonth()]} ${first.getDate()} – ${last.getDate()}, ${last.getFullYear()}`;
    } else if (first.getFullYear() === last.getFullYear()) {
      periodTitle = `${MONTH_SHORT[first.getMonth()]} ${first.getDate()} – ${MONTH_SHORT[last.getMonth()]} ${last.getDate()}, ${last.getFullYear()}`;
    } else {
      periodTitle = `${MONTH_SHORT[first.getMonth()]} ${first.getDate()}, ${first.getFullYear()} – ${MONTH_SHORT[last.getMonth()]} ${last.getDate()}, ${last.getFullYear()}`;
    }
  } else {
    periodTitle = `${DAY_NAMES_FULL[cursor.getDay()]}, ${MONTH_NAMES[cursor.getMonth()]} ${cursor.getDate()}, ${cursor.getFullYear()}`;
  }

  document.getElementById('calendarPeriodHeading').textContent = periodTitle;
  document.getElementById('calendarBreadcrumbPeriod').textContent = periodTitle;

  // Render Active View Grid
  const gridContainer = document.getElementById('calendarGridContainer');
  if (state.calendarView === 'year') {
    renderYearMatrixView(gridContainer, cursor);
  } else if (state.calendarView === 'month') {
    renderMonthView(gridContainer, cursor);
  } else if (state.calendarView === 'week') {
    renderTimeGridView(gridContainer, getWeekDatesMondayFirst(cursor), 'week');
  } else {
    renderTimeGridView(gridContainer, [cursor], 'day');
  }

  // Update Tactical HUD Stats Bar
  const hudStats = document.getElementById('calendarHudStats');
  if (hudStats) {
    const filteredCount = getFilteredEvents().length;
    hudStats.innerHTML = `<span class="text-[var(--accent-vermilion)] font-medium">${filteredCount}</span> event${filteredCount === 1 ? '' : 's'} in index`;
  }

  // Render Right Contextual Day Agenda & Mobile Agenda Bar
  renderCalendarAgendaInspector();
  applyCalendarAgendaSidebarState();
}

// -------------------------------------------------------------------------
// 9A0. YEAR MATRIX VIEW (12-Month Tactical Grid with Event Density Heatmap)
// -------------------------------------------------------------------------
function renderYearMatrixView(container, cursorDate) {
  const year = cursorDate.getFullYear();
  const selectedKey = state.calendarSelectedDate || TODAY_KEY;

  const monthsHtml = [];
  for (let m = 0; m < 12; m++) {
    const firstOfMonth = new Date(year, m, 1);
    const startOffset = firstOfMonth.getDay() === 0 ? 6 : firstOfMonth.getDay() - 1; // Mon=0..Sun=6
    const daysInMonth = new Date(year, m + 1, 0).getDate();

    let monthEventCount = 0;
    const daysCells = [];

    // Leading blanks
    for (let b = 0; b < startOffset; b++) {
      daysCells.push('<div class="h-6 sm:h-7"></div>');
    }

    // Days
    for (let d = 1; d <= daysInMonth; d++) {
      const dateKey = `${year}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isToday = dateKey === TODAY_KEY;
      const isSelected = dateKey === selectedKey;
      const events = getEventsForDateKey(dateKey);
      if (events.length > 0) monthEventCount += events.length;

      let heatIndicator = '';
      if (events.length === 1) {
        heatIndicator = '<span class="w-1 h-1 rounded-full bg-[var(--accent-vermilion)] shrink-0"></span>';
      } else if (events.length >= 2 && events.length <= 3) {
        heatIndicator = '<span class="flex items-center gap-0.5"><span class="w-1 h-1 rounded-full bg-[var(--accent-vermilion)]"></span><span class="w-1 h-1 rounded-full bg-[var(--accent-vermilion)]"></span></span>';
      } else if (events.length > 3) {
        heatIndicator = '<span class="w-1.5 h-1.5 rounded-full bg-[var(--accent-vermilion)] ring-2 ring-[var(--accent-vermilion)]/30"></span>';
      }

      const cellClass = isToday
        ? 'border border-[var(--accent-vermilion)] text-[var(--accent-vermilion)] font-bold bg-[var(--accent-vermilion-tint)]/45'
        : isSelected
          ? 'border border-[var(--border-strong)] bg-[var(--bg-hover)] text-[var(--text-primary)] font-medium'
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]/70 border border-transparent';

      daysCells.push(`
        <button type="button"
                onclick="selectCalendarDate('${dateKey}', true)"
                title="${dateKey} · ${events.length} event(s)"
                class="h-6 sm:h-7 rounded-[3px] flex flex-col items-center justify-center transition-all cursor-pointer ${cellClass} relative group">
          <span class="text-[10px] leading-none">${d}</span>
          ${heatIndicator ? `<span class="mt-0.5 flex justify-center">${heatIndicator}</span>` : ''}
        </button>
      `);
    }

    // Trailing blanks
    const totalSlots = startOffset + daysInMonth;
    const trailingBlanks = (7 - (totalSlots % 7)) % 7;
    for (let t = 0; t < trailingBlanks; t++) {
      daysCells.push('<div class="h-6 sm:h-7"></div>');
    }

    monthsHtml.push(`
      <div class="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-panel)]/40 hover:border-[var(--border-strong)] p-3 transition-colors flex flex-col">
        <div class="flex items-center justify-between pb-2 border-b border-[var(--border-hairline)] mb-2">
          <button type="button"
                  onclick="state.calendarCursorDate='${year}-${String(m+1).padStart(2,'0')}-01'; setCalendarView('month')"
                  title="Open ${MONTH_NAMES[m]} view"
                  class="group/mbtn flex items-center gap-1 font-serif text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-vermilion)] transition-colors text-left cursor-pointer">
            <span>${MONTH_NAMES[m]}</span>
            <svg class="w-3 h-3 opacity-0 group-hover/mbtn:opacity-100 transition-opacity" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <span class="font-mono text-[9px] px-1.5 py-0.2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-[var(--text-tertiary)]">
            ${monthEventCount} evt
          </span>
        </div>
        <div class="grid grid-cols-7 gap-1 text-center font-mono text-[9px] text-[var(--text-tertiary)] mb-1 uppercase">
          <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
        </div>
        <div class="grid grid-cols-7 gap-1 font-mono">
          ${daysCells.join('')}
        </div>
      </div>
    `);
  }

  container.innerHTML = `
    <div class="flex-1 overflow-y-auto p-3.5 sm:p-5 bg-[var(--bg-canvas)]">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 max-w-7xl mx-auto">
        ${monthsHtml.join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// 9A. MONTHLY VIEW (7-Column Hairline Matrix + Multi-Day + Drag-and-Drop)
// -------------------------------------------------------------------------
function renderMonthView(container, cursorDate) {
  const year = cursorDate.getFullYear();
  const month = cursorDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay() === 0 ? 6 : firstOfMonth.getDay() - 1;
  const gridStart = new Date(year, month, 1 - startOffset);

  // Determine 5 or 6 rows dynamically so every day of the month fits cleanly
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = startOffset + daysInMonth > 35 ? 42 : 35;
  const numRows = totalCells / 7;

  const isDark = state.theme === 'dark';
  const selectedKey = state.calendarSelectedDate || TODAY_KEY;

  let weekdayHeader = `
    <div class="grid grid-cols-7 border-b border-[var(--border-hairline)] bg-[var(--bg-panel)] shrink-0">
      ${DAY_NAMES_SHORT.map(d => `
        <div class="px-2 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] border-r last:border-r-0 border-[var(--border-hairline)] text-center sm:text-left">
          ${d}
        </div>
      `).join('')}
    </div>
  `;

  let cellsHtml = '';
  for (let i = 0; i < totalCells; i++) {
    const d = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
    const dateKey = formatLocalDateKey(d);
    const isCurrentMonth = d.getMonth() === month;
    const isToday = dateKey === TODAY_KEY;
    const isSelected = dateKey === selectedKey;
    const dayEvents = getEventsForDateKey(dateKey);

    const maxVisible = window.innerWidth < 640 ? 2 : 3;
    const visibleEvents = dayEvents.slice(0, maxVisible);
    const overflowCount = dayEvents.length - visibleEvents.length;

    const eventsHtml = visibleEvents.map(evt => {
      const norm = normalizeEventRange(evt);
      const col = resolveEventColor(evt.color_code);
      const isStart = norm.startDateKey === dateKey;
      const isEnd = norm.endDateKey === dateKey;
      const isSpanning = norm.isMultiDay;

      const bgStyle = norm.allDay || isSpanning
        ? `background-color: ${isDark ? col.tintDark : col.tintLight}; border-left: 2px solid ${col.hex};`
        : `background-color: transparent;`;

      const timeLabel = (!norm.allDay && isStart) ? `<span class="font-mono text-[9px] text-[var(--text-tertiary)] shrink-0">${formatLocalTime24(norm.start)}</span>` : '';
      const spanTag = (isSpanning && !isStart) ? `<span class="font-mono text-[9px] text-[var(--text-tertiary)] shrink-0">↳</span>` : '';

      return `
        <div draggable="true"
             data-event-id="${evt.id}"
             ondragstart="handleMonthEventDragStart(event, '${evt.id}')"
             onclick="event.stopPropagation(); openEventPreview(event, '${evt.id}')"
             title="${escapeHtml(evt.title)}${evt.location ? ' · ' + escapeHtml(evt.location) : ''}"
             style="${bgStyle}"
             class="group/evt flex items-center gap-1 px-1.5 py-[2px] rounded-[2px] hover:bg-[var(--bg-hover)] cursor-pointer transition-colors text-[11px] leading-tight truncate">
          ${!norm.allDay && !isSpanning ? `<span class="w-1.5 h-1.5 rounded-[1px] shrink-0" style="background-color: ${col.hex}"></span>` : ''}
          ${spanTag}
          ${timeLabel}
          <span class="truncate text-[var(--text-primary)] font-medium">${escapeHtml(evt.title)}</span>
        </div>
      `;
    }).join('');

    const overflowHtml = overflowCount > 0 ? `
      <button onclick="event.stopPropagation(); openDayOverflowPopover(event, '${dateKey}')"
              class="w-full text-left px-1.5 py-0.5 font-mono text-[9px] text-[var(--accent-vermilion)] hover:underline transition-colors font-medium">
        +${overflowCount} more
      </button>
    ` : '';

    cellsHtml += `
      <div onclick="handleMonthCellClick(event, '${dateKey}')"
           data-date-key="${dateKey}"
           ondblclick="openEventModal({ dateKey: '${dateKey}' })"
           ondragover="handleMonthCellDragOver(event)"
           ondragleave="handleMonthCellDragLeave(event)"
           ondrop="handleMonthCellDrop(event, '${dateKey}')"
           class="group relative flex flex-col p-1 sm:p-1.5 border-r border-b border-[var(--border-hairline)] overflow-hidden cursor-pointer transition-colors ${
             isSelected ? 'bg-[var(--bg-panel)]/80' : isCurrentMonth ? 'bg-[var(--bg-canvas)] hover:bg-[var(--bg-panel)]/40' : 'bg-[var(--bg-panel)]/35 hover:bg-[var(--bg-panel)]/60'
           }">
        <div class="flex items-center justify-between mb-1 shrink-0">
          <button type="button"
                  onclick="event.stopPropagation(); drillDownToDay('${dateKey}')"
                  title="Zoom to ${dateKey} day view"
                  class="whitespace-nowrap font-mono text-[11px] leading-none px-1.5 py-0.5 rounded-[2px] cursor-pointer hover:scale-105 transition-transform ${
            isToday
              ? 'bg-[var(--accent-vermilion)] text-white font-semibold'
              : isSelected
                ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)]'
                : isCurrentMonth
                  ? 'text-[var(--text-primary)] hover:text-[var(--accent-vermilion)]'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
          }">
            ${d.getDate() === 1 && window.innerWidth >= 640 ? `${MONTH_SHORT[d.getMonth()]} 1` : d.getDate()}
          </button>

          <button onclick="event.stopPropagation(); openQuickAddPopover(event, { dateKey: '${dateKey}' })"
                  title="Quick create event on ${dateKey}"
                  class="opacity-0 group-hover:opacity-100 p-0.5 rounded-[2px] hover:bg-[var(--bg-hover)] text-[var(--text-tertiary)] hover:text-[var(--accent-vermilion)] transition-opacity">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>

        <div class="flex-1 space-y-0.5 overflow-hidden">
          ${eventsHtml}
          ${overflowHtml}
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    ${weekdayHeader}
    <div class="flex-1 grid grid-cols-7 overflow-y-auto" style="grid-template-rows: repeat(${numRows}, minmax(86px, 1fr));">
      ${cellsHtml}
    </div>
  `;
}

// -------------------------------------------------------------------------
// 9B. WEEKLY & DAILY TIMELINE VIEWS (24h Grid + Overlapping Clusters + DND)
// -------------------------------------------------------------------------
const HOUR_ROW_HEIGHT = 54; // px per hour

/**
 * Extracts timed segments for a single local calendar day (`dateKey`).
 * Handles events starting/ending on that day AND midnight-spanning / multi-day timed events
 * by clipping each segment to [00:00, 24:00] of `dateKey`.
 */
function getTimedSegmentsForDay(dateKey) {
  const dayStart = parseLocalDateKey(dateKey);
  const dayEnd = new Date(dayStart.getFullYear(), dayStart.getMonth(), dayStart.getDate() + 1, 0, 0, 0, 0);

  const segments = [];
  getFilteredEvents().forEach(evt => {
    if (evt.all_day) return;
    const norm = normalizeEventRange(evt);
    if (norm.end <= dayStart || norm.start >= dayEnd) return;

    const segStart = norm.start > dayStart ? norm.start : dayStart;
    const segEnd = norm.end < dayEnd ? norm.end : dayEnd;

    const startMin = (segStart - dayStart) / 60000;
    const endMin = Math.max(startMin + 20, (segEnd - dayStart) / 60000); // Min 20m visual height

    segments.push({
      event: evt,
      norm,
      startMin,
      endMin,
      startsBeforeDay: norm.start < dayStart,
      endsAfterDay: norm.end > dayEnd
    });
  });

  return layoutOverlappingSegments(segments);
}

/**
 * Sweeping-cluster column assignment for concurrent/overlapping events:
 * Groups overlapping intervals into connected components and assigns non-colliding column indices.
 */
function layoutOverlappingSegments(segments) {
  if (segments.length === 0) return [];
  const sorted = [...segments].sort((a, b) => a.startMin - b.startMin || (b.endMin - b.startMin) - (a.endMin - a.startMin));

  const clusters = [];
  let currentCluster = [];
  let clusterMaxEnd = -1;

  sorted.forEach(seg => {
    if (currentCluster.length === 0 || seg.startMin < clusterMaxEnd) {
      currentCluster.push(seg);
      clusterMaxEnd = Math.max(clusterMaxEnd, seg.endMin);
    } else {
      clusters.push(currentCluster);
      currentCluster = [seg];
      clusterMaxEnd = seg.endMin;
    }
  });
  if (currentCluster.length > 0) clusters.push(currentCluster);

  const laidOut = [];
  clusters.forEach(cluster => {
    const colEnds = []; // Tracks endMin of last item placed in each column
    cluster.forEach(seg => {
      let assignedCol = colEnds.findIndex(endVal => endVal <= seg.startMin);
      if (assignedCol === -1) {
        assignedCol = colEnds.length;
        colEnds.push(seg.endMin);
      } else {
        colEnds[assignedCol] = seg.endMin;
      }
      seg.colIndex = assignedCol;
    });
    const totalCols = colEnds.length;
    cluster.forEach(seg => {
      seg.totalCols = totalCols;
      laidOut.push(seg);
    });
  });

  return laidOut;
}

function renderTimeGridView(container, daysArray, mode) {
  const isDark = state.theme === 'dark';
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  // On narrow mobile screens (< 640px), show a clean 3-day focus window in Week mode so columns & events fit edge-to-edge without slicing!
  if (mode === 'week' && window.innerWidth < 640 && daysArray.length === 7) {
    const selKey = state.calendarSelectedDate || TODAY_KEY;
    let focusIdx = daysArray.findIndex(d => formatLocalDateKey(d) === selKey);
    if (focusIdx < 0) focusIdx = daysArray.findIndex(d => formatLocalDateKey(d) === TODAY_KEY);
    if (focusIdx < 0) focusIdx = 0;
    const startIdx = Math.max(0, Math.min(4, focusIdx - 1));
    daysArray = daysArray.slice(startIdx, startIdx + 3);
  }
  const numDays = daysArray.length;
  const minColWidthClass = 'min-w-0';

  // 1. Day Column Headers
  const dayHeadersHtml = daysArray.map(d => {
    const key = formatLocalDateKey(d);
    const isToday = key === TODAY_KEY;
    const isSelected = key === state.calendarSelectedDate;
    return `
      <div onclick="selectCalendarDate('${key}', false)"
           data-date-key="${key}"
           class="${minColWidthClass} flex-1 px-2 py-2 border-r last:border-r-0 border-[var(--border-hairline)] flex items-center justify-between cursor-pointer transition-colors ${
             isSelected ? 'bg-[var(--bg-elevated)]/60' : 'hover:bg-[var(--bg-hover)]/50'
           }">
        <div class="flex items-center gap-2">
          <span class="font-mono text-[10px] uppercase tracking-wider ${isToday ? 'text-[var(--accent-vermilion)] font-semibold' : 'text-[var(--text-tertiary)]'}">
            ${DAY_NAMES_SHORT[d.getDay() === 0 ? 6 : d.getDay() - 1]}
          </span>
          <button type="button"
                  onclick="event.stopPropagation(); drillDownToDay('${key}')"
                  title="Zoom to ${key} day timeline"
                  class="font-mono text-xs px-1.5 py-0.5 rounded-[2px] cursor-pointer hover:scale-105 transition-transform ${
            isToday ? 'bg-[var(--accent-vermilion)] text-white font-semibold' : 'text-[var(--text-primary)] hover:text-[var(--accent-vermilion)]'
          }">
            ${d.getDate()}
          </button>
        </div>
        <button onclick="event.stopPropagation(); openQuickAddPopover(event, { dateKey: '${key}', startHour: 9 })"
                title="Quick add event on ${key}"
                class="p-1 rounded-[2px] hover:bg-[var(--bg-hover)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </div>
    `;
  }).join('');

  // 2. All-Day Banner Strip
  const allDayCellsHtml = daysArray.map(d => {
    const key = formatLocalDateKey(d);
    const allDayEvts = getEventsForDateKey(key).filter(e => e.all_day);
    return `
      <div onclick="openEventModal({ dateKey: '${key}', allDay: true })"
           ondragover="handleMonthCellDragOver(event)"
           ondragleave="handleMonthCellDragLeave(event)"
           ondrop="handleMonthCellDrop(event, '${key}')"
           class="${minColWidthClass} flex-1 p-1 border-r last:border-r-0 border-[var(--border-hairline)] space-y-1 min-h-[28px] cursor-pointer hover:bg-[var(--bg-hover)]/35">
        ${allDayEvts.map(evt => {
          const col = resolveEventColor(evt.color_code);
          return `
            <div draggable="true"
                 data-event-id="${evt.id}"
                 ondragstart="handleMonthEventDragStart(event, '${evt.id}')"
                 onclick="event.stopPropagation(); openEventPreview(event, '${evt.id}')"
                 style="background-color: ${isDark ? col.tintDark : col.tintLight}; border-left: 2px solid ${col.hex};"
                 class="px-1.5 py-0.5 rounded-[2px] text-[11px] font-medium text-[var(--text-primary)] truncate hover:opacity-85">
              ${escapeHtml(evt.title)}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }).join('');

  // 3. 24-Hour Time Axis & Day Columns
  let timeAxisLabelsHtml = '';
  for (let h = 0; h < 24; h++) {
    const label = `${String(h).padStart(2, '0')}:00`;
    timeAxisLabelsHtml += `
      <div style="height: ${HOUR_ROW_HEIGHT}px;" class="relative border-b border-[var(--border-hairline)] pr-2 text-right">
        <span class="font-mono text-[10px] text-[var(--text-tertiary)] relative -top-2">${h === 0 ? '' : label}</span>
      </div>
    `;
  }

  const dayColumnsHtml = daysArray.map(d => {
    const key = formatLocalDateKey(d);
    const isToday = key === TODAY_KEY;
    const segments = getTimedSegmentsForDay(key);

    let hourSlotsHtml = '';
    for (let h = 0; h < 24; h++) {
      hourSlotsHtml += `
        <div style="height: ${HOUR_ROW_HEIGHT}px;"
             data-date-key="${key}"
             onclick="openQuickAddPopover(event, { dateKey: '${key}', startHour: ${h} })"
             ondblclick="openEventModal({ dateKey: '${key}', startHour: ${h} })"
             title="Click to schedule at ${String(h).padStart(2, '0')}:00"
             class="border-b border-[var(--border-hairline)] hover:bg-[var(--accent-vermilion-tint)]/50 transition-colors relative group z-0">
          <div class="w-full h-1/2 pointer-events-none" style="border-bottom: 1px dashed rgba(148, 148, 142, 0.14);"></div>
        </div>
      `;
    }

    const eventsOverlayHtml = segments.map(seg => {
      const evt = seg.event;
      const col = resolveEventColor(evt.color_code);
      const topPx = (seg.startMin / 60) * HOUR_ROW_HEIGHT;
      const heightPx = Math.max(22, ((seg.endMin - seg.startMin) / 60) * HOUR_ROW_HEIGHT - 2);
      const widthPct = 100 / seg.totalCols;
      const leftPct = seg.colIndex * widthPct;

      const timeRangeText = `${seg.startsBeforeDay ? '00:00' : formatLocalTime24(seg.norm.start)} – ${seg.endsAfterDay ? '24:00' : formatLocalTime24(seg.norm.end)}`;
      const linkedNote = evt.linkedNoteId ? state.notes.find(n => n.id === evt.linkedNoteId) : null;

      return `
        <div draggable="true"
             data-event-id="${evt.id}"
             ondragstart="handleTimelineEventDragStart(event, '${evt.id}')"
             onclick="event.stopPropagation(); openEventPreview(event, '${evt.id}')"
             style="top: ${topPx}px; height: ${heightPx}px; left: calc(${leftPct}% + 2px); width: calc(${widthPct}% - 4px); background-color: ${isDark ? col.tintDark : col.tintLight}; border-left: 2.5px solid ${col.hex};"
             class="absolute rounded-[3px] border border-[var(--border-strong)]/60 px-2 py-1 overflow-hidden cursor-pointer hover:brightness-110 transition-all z-10 flex flex-col justify-between shadow-sm">
          <div class="min-w-0">
            <div class="flex items-center justify-between gap-1">
              <span class="font-mono text-[10px] font-medium" style="color: ${col.hex}">${timeRangeText}</span>
              ${linkedNote ? `<span class="font-mono text-[9px] text-[var(--text-tertiary)] truncate hidden sm:inline">[[${escapeHtml(linkedNote.code || 'NOTE')}]]</span>` : ''}
            </div>
            <div class="text-xs font-medium text-[var(--text-primary)] truncate leading-snug">
              ${escapeHtml(evt.title)}
            </div>
            ${heightPx >= 48 && evt.location ? `
              <div class="text-[10px] text-[var(--text-secondary)] truncate mt-0.5 flex items-center gap-1">
                <span>· ${escapeHtml(evt.location)}</span>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Current Time Red Line Indicator on Today (Pulsing Radar + Laser + Time Chip)
    const nowH = now.getHours();
    const nowM = now.getMinutes();
    const nowTimeStr = `${String(nowH).padStart(2, '0')}:${String(nowM).padStart(2, '0')}`;
    const topPx = (nowMinutes / 60) * HOUR_ROW_HEIGHT;

    const currentTimeIndicator = isToday ? `
      <div id="liveTimelineIndicator_${key}" style="top: ${topPx}px;" class="now-pulse-line absolute left-0 right-0 z-30 pointer-events-none flex items-center">
        <span class="relative flex h-3 w-3 -ml-1.5 shrink-0 items-center justify-center">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-vermilion)] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-vermilion)] ring-2 ring-[var(--bg-canvas)]"></span>
        </span>
        <div class="flex-1 h-[2px] bg-gradient-to-r from-[var(--accent-vermilion)] via-[var(--accent-vermilion)] to-transparent opacity-90 shadow-[0_0_8px_rgba(235,94,85,0.4)]"></div>
        <span class="now-time-tag absolute -top-3.5 left-3 px-1 py-0.2 rounded font-mono text-[9px] font-bold bg-[var(--accent-vermilion)] text-white shadow select-none pointer-events-none">${nowTimeStr}</span>
      </div>
    ` : '';

    return `
      <div ondragover="handleTimelineColumnDragOver(event)"
           ondrop="handleTimelineColumnDrop(event, '${key}')"
           class="${minColWidthClass} flex-1 relative border-r last:border-r-0 border-[var(--border-hairline)] select-none">
        ${hourSlotsHtml}
        ${eventsOverlayHtml}
        ${currentTimeIndicator}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="flex-1 flex flex-col min-h-0 overflow-x-auto">
      <div class="min-w-full flex flex-col flex-1 min-h-0">
        <!-- Sticky Day Headers -->
        <div class="flex border-b border-[var(--border-hairline)] bg-[var(--bg-panel)] shrink-0">
          <div class="w-14 shrink-0 border-r border-[var(--border-hairline)] flex items-center justify-center font-mono text-[9px] text-[var(--text-tertiary)]">
            LOCAL
          </div>
          <div class="flex-1 flex">
            ${dayHeadersHtml}
          </div>
        </div>

        <!-- Sticky All-Day Strip -->
        <div class="flex border-b border-[var(--border-hairline)] bg-[var(--bg-canvas)] shrink-0">
          <div class="w-14 shrink-0 border-r border-[var(--border-hairline)] px-1.5 py-1 flex items-center justify-end font-mono text-[9px] text-[var(--text-tertiary)]">
            ALL-DAY
          </div>
          <div class="flex-1 flex">
            ${allDayCellsHtml}
          </div>
        </div>

        <!-- Scrollable 24-Hour Grid -->
        <div id="timelineScrollBody" class="flex-1 overflow-y-auto flex">
          <div class="w-14 shrink-0 border-r border-[var(--border-hairline)] bg-[var(--bg-panel)]/40 select-none relative">
            ${timeAxisLabelsHtml}
            ${daysArray.some(d => formatLocalDateKey(d) === TODAY_KEY) ? `
              <div id="liveTimeAxisPill" style="top: ${(nowMinutes / 60) * HOUR_ROW_HEIGHT - 8}px;" class="now-time-axis-pill absolute right-1 z-30 pointer-events-none px-1 py-0.2 rounded font-mono text-[9px] font-bold bg-[var(--accent-vermilion)] text-white shadow select-none">
                ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}
              </div>
            ` : ''}
          </div>
          <div class="flex-1 flex relative" style="height: ${24 * HOUR_ROW_HEIGHT}px;">
            ${dayColumnsHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  // Auto-scroll timeline to active daytime hours for ergonomic morning visibility
  if (!weekTimelineInitialScrollDone) {
    const scrollBody = document.getElementById('timelineScrollBody');
    if (scrollBody) {
      const currentHour = new Date().getHours();
      const targetHour = Math.max(7, Math.min(currentHour - 1, 18));
      scrollBody.scrollTop = targetHour * HOUR_ROW_HEIGHT;
      weekTimelineInitialScrollDone = true;
    }
  }
}

function updateLiveTimelineIndicators() {
  const now = new Date();
  const nowH = now.getHours();
  const nowM = now.getMinutes();
  const nowMinutes = nowH * 60 + nowM;
  const nowTimeStr = `${String(nowH).padStart(2, '0')}:${String(nowM).padStart(2, '0')}`;
  const topPx = (nowMinutes / 60) * HOUR_ROW_HEIGHT;

  document.querySelectorAll('.now-pulse-line').forEach(el => {
    el.style.top = `${topPx}px`;
    const tag = el.querySelector('.now-time-tag');
    if (tag) tag.textContent = nowTimeStr;
  });

  const axisPill = document.getElementById('liveTimeAxisPill');
  if (axisPill) {
    axisPill.style.top = `${topPx - 8}px`;
    axisPill.textContent = nowTimeStr;
  }
}

if (!window.calLiveClockTimer) {
  window.calLiveClockTimer = setInterval(() => {
    if (state.appMode === 'calendar' && (state.calendarView === 'week' || state.calendarView === 'day')) {
      updateLiveTimelineIndicators();
    }
  }, 30000);
}

// -------------------------------------------------------------------------
// 9C. CALENDAR DRAG-AND-DROP RESCHEDULING (MONTH & TIMELINE VIEWS)
// -------------------------------------------------------------------------
function handleMonthEventDragStart(e, eventId) {
  draggedCalendarEventId = eventId;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', eventId);
}

function handleMonthCellDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('cal-day-drop-target');
}

function handleMonthCellDragLeave(e) {
  e.currentTarget.classList.remove('cal-day-drop-target');
}

function handleMonthCellDrop(e, targetDateKey) {
  e.preventDefault();
  e.currentTarget.classList.remove('cal-day-drop-target');
  const eventId = draggedCalendarEventId || e.dataTransfer.getData('text/plain');
  draggedCalendarEventId = null;
  if (!eventId) return;

  const evt = state.events.find(item => item.id === eventId);
  if (!evt) return;

  const norm = normalizeEventRange(evt);
  const deltaDays = diffDaysDateKeys(norm.startDateKey, targetDateKey);
  if (deltaDays === 0) return;

  if (evt.all_day) {
    evt.start_datetime = addDaysToDateKey(norm.startDateKey, deltaDays);
    if (evt.end_datetime) {
      evt.end_datetime = addDaysToDateKey(norm.endDateKey, deltaDays);
    }
  } else {
    const newStart = new Date(norm.start.getFullYear(), norm.start.getMonth(), norm.start.getDate() + deltaDays, norm.start.getHours(), norm.start.getMinutes(), 0, 0);
    evt.start_datetime = newStart.toISOString();
    if (evt.end_datetime) {
      const durationMs = norm.end.getTime() - norm.start.getTime();
      evt.end_datetime = new Date(newStart.getTime() + durationMs).toISOString();
    }
  }

  state.calendarSelectedDate = targetDateKey;
  renderAll();
  persistState();
  showToast(`Rescheduled "${evt.title}" to ${targetDateKey}`);
}

function handleTimelineEventDragStart(e, eventId) {
  draggedCalendarEventId = eventId;
  const rect = e.currentTarget.getBoundingClientRect();
  const offsetY = Math.max(0, e.clientY - rect.top);
  draggedEventGrabOffsetMinutes = Math.round(((offsetY / HOUR_ROW_HEIGHT) * 60) / 15) * 15;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', eventId);
}

function handleTimelineColumnDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleTimelineColumnDrop(e, targetDateKey) {
  e.preventDefault();
  const eventId = draggedCalendarEventId || e.dataTransfer.getData('text/plain');
  draggedCalendarEventId = null;
  if (!eventId) return;

  const evt = state.events.find(item => item.id === eventId);
  if (!evt || evt.all_day) return;

  const rect = e.currentTarget.getBoundingClientRect();
  const dropY = Math.max(0, e.clientY - rect.top);
  const rawMinutes = (dropY / HOUR_ROW_HEIGHT) * 60 - draggedEventGrabOffsetMinutes;
  const snappedMinutes = Math.max(0, Math.min(23 * 60 + 45, Math.round(rawMinutes / 15) * 15));

  const targetHour = Math.floor(snappedMinutes / 60);
  const targetMinute = snappedMinutes % 60;

  const norm = normalizeEventRange(evt);
  const durationMs = norm.end.getTime() - norm.start.getTime();

  const targetDay = parseLocalDateKey(targetDateKey);
  const newStart = new Date(targetDay.getFullYear(), targetDay.getMonth(), targetDay.getDate(), targetHour, targetMinute, 0, 0);
  evt.start_datetime = newStart.toISOString();
  if (evt.end_datetime) {
    evt.end_datetime = new Date(newStart.getTime() + durationMs).toISOString();
  }

  state.calendarSelectedDate = targetDateKey;
  renderAll();
  persistState();
  showToast(`Moved "${evt.title}" to ${targetDateKey} ${formatLocalTime24(newStart)}`);
}

// -------------------------------------------------------------------------
// 9D. CONTEXTUAL DAY AGENDA INSPECTOR & DAILY LOG INTEGRATION
// -------------------------------------------------------------------------
function renderCalendarAgendaInspector() {
  const selectedKey = state.calendarSelectedDate || TODAY_KEY;
  const selectedDate = parseLocalDateKey(selectedKey);
  const dayEvents = getEventsForDateKey(selectedKey);
  const dailyNoteTitle = `Daily Log — ${selectedKey}`;
  const existingDailyNote = state.notes.find(n => n.title.toLowerCase() === dailyNoteTitle.toLowerCase());

  const headerLabel = `${DAY_NAMES_FULL[selectedDate.getDay()]}, ${MONTH_SHORT[selectedDate.getMonth()]} ${selectedDate.getDate()}`;

  // Calculate total scheduled duration
  let totalMins = 0;
  dayEvents.forEach(e => {
    const n = normalizeEventRange(e);
    if (!n.allDay && n.start && n.end) {
      totalMins += Math.max(0, (n.end.getTime() - n.start.getTime()) / 60000);
    }
  });
  const hoursScheduled = (totalMins / 60).toFixed(1);
  const durationBadge = totalMins > 0 ? `${hoursScheduled}h scheduled` : `${dayEvents.length} item(s)`;

  const eventsListHtml = dayEvents.length > 0
    ? dayEvents.map(evt => {
        const col = resolveEventColor(evt.color_code);
        const norm = normalizeEventRange(evt);
        const linkedNote = evt.linkedNoteId ? state.notes.find(n => n.id === evt.linkedNoteId) : null;
        const timeSummary = norm.allDay
          ? (norm.isMultiDay ? `ALL-DAY · ${norm.startDateKey} → ${norm.endDateKey}` : 'ALL-DAY')
          : `${formatLocalTime24(norm.start)} – ${formatLocalTime24(norm.end)}`;

        return `
          <div onclick="openEventPreview(event, '${evt.id}')"
               data-event-id="${evt.id}"
               class="group/agenda p-2.5 rounded-[3px] bg-[var(--bg-canvas)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] hover:border-[var(--border-strong)] cursor-pointer transition-colors space-y-1.5">
            <div class="flex items-center justify-between gap-2">
              <span class="inline-flex items-center gap-1.5 font-mono text-[10px]" style="color: ${col.hex}">
                <span class="w-2 h-2 rounded-[1px]" style="background-color: ${col.hex}"></span>
                ${timeSummary}
              </span>
              <div class="flex items-center gap-1 opacity-0 group-hover/agenda:opacity-100 transition-opacity">
                <button type="button" onclick="event.stopPropagation(); createMeetingNoteForEvent('${evt.id}')" class="px-1.5 py-0.5 rounded-[2px] bg-[var(--accent-vermilion-tint)] hover:bg-[var(--accent-vermilion)] hover:text-white text-[var(--accent-vermilion)] font-mono text-[9px]" title="Create or open meeting note">
                  ${linkedNote ? 'NOTE →' : '+ NOTE'}
                </button>
                <span class="font-mono text-[9px] text-[var(--text-tertiary)]">EDIT</span>
              </div>
            </div>
            <div class="text-xs font-medium text-[var(--text-primary)] leading-snug">${escapeHtml(evt.title)}</div>
            ${evt.location ? `
              <div class="flex items-center gap-1 text-[11px] text-[var(--text-secondary)] truncate">
                <span class="text-[var(--text-tertiary)] shrink-0">${getGlyphSVG('pin')}</span>
                <span class="truncate">${escapeHtml(evt.location)}</span>
              </div>
            ` : ''}
            ${linkedNote ? `
              <button onclick="event.stopPropagation(); state.appMode='workspace'; selectNote('${linkedNote.id}')"
                      class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[2px] bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] font-mono text-[10px] hover:underline">
                <span>[[${escapeHtml(linkedNote.title)}]]</span>
              </button>
            ` : ''}
          </div>
        `;
      }).join('')
    : `
      <div class="p-4 rounded-[3px] border border-dashed border-[var(--border-hairline)] text-center space-y-2">
        <div class="font-mono text-[10px] text-[var(--text-tertiary)]">NO EVENTS SCHEDULED</div>
        <button onclick="openQuickAddPopover(event, { dateKey: '${selectedKey}' })" class="px-2.5 py-1 rounded-[3px] bg-[var(--bg-canvas)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] font-mono text-[10px] text-[var(--accent-vermilion)] font-medium">
          + Schedule on ${selectedKey}
        </button>
      </div>
    `;

  const desktopInspector = document.getElementById('calendarAgendaContent');
  if (desktopInspector) {
    desktopInspector.innerHTML = `
      <div class="pb-3 border-b border-[var(--border-hairline)] space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">Selected Day Ledger</span>
          ${selectedKey === TODAY_KEY ? `<span class="font-mono text-[9px] px-1.5 py-0.5 rounded-[2px] bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)]">TODAY</span>` : ''}
        </div>
        <div class="flex items-baseline justify-between gap-2">
          <h3 class="font-serif text-lg font-medium text-[var(--text-primary)]">${headerLabel}</h3>
          <span class="font-mono text-[10px] text-[var(--text-tertiary)]">${durationBadge}</span>
        </div>
        <div class="pt-1 flex items-center gap-1.5">
          <button onclick="openQuickAddPopover(event, { dateKey: '${selectedKey}' })" class="flex-1 py-1.5 px-2 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-mono text-[10px] font-medium hover:opacity-90">
            + QUICK EVENT
          </button>
          <button onclick="openOrCreateDailyNoteForDate('${selectedKey}')" class="py-1.5 px-2 rounded-[3px] bg-[var(--bg-canvas)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] font-mono text-[10px] text-[var(--text-primary)]" title="Open or Create Daily Log Note">
            ${existingDailyNote ? 'OPEN LOG →' : '+ DAILY LOG'}
          </button>
        </div>
      </div>

      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">Agenda (${dayEvents.length})</span>
          <button onclick="setCalendarView('day')" class="font-mono text-[10px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Timeline →</button>
        </div>
        <div class="space-y-2">${eventsListHtml}</div>
      </div>
    `;
  }

  // Mobile Selected-Day Bottom Agenda Strip (< xl)
  const mobileBar = document.getElementById('mobileMonthAgendaBar');
  if (mobileBar) {
    mobileBar.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <span class="font-mono text-[10px] uppercase text-[var(--text-tertiary)]">${headerLabel}</span>
          <span class="font-mono text-[10px] px-1.5 py-0.2 bg-[var(--bg-canvas)] border border-[var(--border-hairline)] rounded-[2px] text-[var(--text-secondary)]">${dayEvents.length}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <button onclick="openOrCreateDailyNoteForDate('${selectedKey}')" class="px-2 py-0.5 rounded-[2px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] font-mono text-[10px] text-[var(--text-secondary)]">
            Daily Log
          </button>
          <button onclick="openQuickAddPopover(event, { dateKey: '${selectedKey}' })" class="px-2 py-0.5 rounded-[2px] bg-[var(--accent-vermilion)] text-white font-mono text-[10px]">
            + Event
          </button>
        </div>
      </div>
      ${dayEvents.length > 0 ? `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          ${dayEvents.map(evt => {
            const col = resolveEventColor(evt.color_code);
            const norm = normalizeEventRange(evt);
            return `
              <button onclick="openEventPreview(event, '${evt.id}')" class="flex items-center justify-between gap-2 p-2 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-left">
                <div class="flex items-center gap-2 min-w-0">
                  <span class="w-2 h-2 rounded-[1px] shrink-0" style="background-color: ${col.hex}"></span>
                  <span class="text-xs font-medium text-[var(--text-primary)] truncate">${escapeHtml(evt.title)}</span>
                </div>
                <span class="font-mono text-[10px] text-[var(--text-tertiary)] shrink-0">
                  ${norm.allDay ? 'ALL-DAY' : formatLocalTime24(norm.start)}
                </span>
              </button>
            `;
          }).join('')}
        </div>
      ` : `<div class="font-mono text-[10px] text-[var(--text-tertiary)]">No scheduled events on this date.</div>`}
    `;
  }
}

// =========================================================================
// 10. EVENT CREATION, EDITING, VALIDATION & DELETION MODAL
// =========================================================================
function openEventModal(options = {}) {
  const { eventId = null, dateKey = null, startHour = null, allDay = false } = options;
  const backdrop = document.getElementById('eventModalBackdrop');
  const headerTitle = document.getElementById('eventModalHeaderTitle');
  const idInput = document.getElementById('eventFormId');
  const titleInput = document.getElementById('eventFormTitle');
  const allDayCheckbox = document.getElementById('eventFormAllDay');
  const locationInput = document.getElementById('eventFormLocation');
  const notesInput = document.getElementById('eventFormNotes');
  const linkedNoteSelect = document.getElementById('eventFormLinkedNote');
  const deleteBtn = document.getElementById('eventDeleteBtn');
  const deleteConfirmGroup = document.getElementById('eventDeleteConfirmGroup');

  clearEventFormError();
  deleteConfirmGroup.classList.add('hidden');

  if (eventId) {
    const evt = state.events.find(e => e.id === eventId);
    if (!evt) return;

    headerTitle.textContent = 'Edit Scheduled Entry';
    idInput.value = evt.id;
    titleInput.value = evt.title;
    allDayCheckbox.checked = Boolean(evt.all_day);
    toggleEventAllDayFields(Boolean(evt.all_day), false);

    if (evt.all_day) {
      document.getElementById('eventFormStart').value = String(evt.start_datetime).slice(0, 10);
      document.getElementById('eventFormEnd').value = evt.end_datetime ? String(evt.end_datetime).slice(0, 10) : '';
    } else {
      document.getElementById('eventFormStart').value = utcIsoToLocalInput(evt.start_datetime);
      document.getElementById('eventFormEnd').value = evt.end_datetime ? utcIsoToLocalInput(evt.end_datetime) : '';
    }

    locationInput.value = evt.location || '';
    notesInput.value = evt.notes || '';
    linkedNoteSelect.value = evt.linkedNoteId || '';
    selectedModalColor = resolveEventColor(evt.color_code).hex;
    deleteBtn.classList.remove('hidden');
  } else {
    headerTitle.textContent = 'New Scheduled Entry';
    idInput.value = '';
    titleInput.value = '';
    allDayCheckbox.checked = Boolean(allDay);
    toggleEventAllDayFields(Boolean(allDay), false);

    const targetKey = dateKey || state.calendarSelectedDate || TODAY_KEY;
    if (allDay) {
      document.getElementById('eventFormStart').value = targetKey;
      document.getElementById('eventFormEnd').value = targetKey;
    } else {
      const hr = startHour !== null ? startHour : 9;
      const endHr = Math.min(23, hr + 1);
      const startStr = `${targetKey}T${String(hr).padStart(2, '0')}:00`;
      const endStr = `${targetKey}T${String(endHr).padStart(2, '0')}:00`;
      document.getElementById('eventFormStart').value = startStr;
      document.getElementById('eventFormEnd').value = endStr;
    }

    locationInput.value = '';
    notesInput.value = '';
    linkedNoteSelect.value = state.appMode === 'workspace' ? (state.activeNoteId || '') : '';
    selectedModalColor = EVENT_COLORS[0].hex;
    deleteBtn.classList.add('hidden');
  }

  renderEventLinkedNotesList(linkedNoteSelect.value || '');
  renderModalColorSwatches();
  toggleModalOpenNoteBtn();
  handleEventDateInputsChange();

  backdrop.classList.remove('hidden');
  const card = backdrop.querySelector('.animate-modal-card');
  if (card) {
    card.classList.remove('animate-modal-card');
    void card.offsetWidth;
    card.classList.add('animate-modal-card');
  }
  requestAnimationFrame(() => titleInput.focus());
}

function closeEventModal(e) {
  if (e && e.target !== document.getElementById('eventModalBackdrop')) return;
  document.getElementById('eventModalBackdrop').classList.add('hidden');
}

function toggleEventAllDayFields(isAllDay, convertExisting = true) {
  const startEl = document.getElementById('eventFormStart');
  const endEl = document.getElementById('eventFormEnd');
  const knob = document.getElementById('eventAllDayKnob');
  const tzNote = document.getElementById('eventModalTzNote');

  const prevStart = startEl.value;
  const prevEnd = endEl.value;

  if (isAllDay) {
    knob.style.transform = 'translateX(14px)';
    knob.style.backgroundColor = '#FFFFFF';
    tzNote.textContent = 'CANONICAL YYYY-MM-DD (TZ-INDEPENDENT)';
    startEl.type = 'date';
    endEl.type = 'date';
    if (convertExisting && prevStart) {
      startEl.value = prevStart.slice(0, 10);
    }
    if (convertExisting && prevEnd) {
      endEl.value = prevEnd.slice(0, 10);
    }
  } else {
    knob.style.transform = 'translateX(0px)';
    knob.style.backgroundColor = 'var(--text-secondary)';
    tzNote.textContent = 'LOCAL → UTC ISO 8601';
    startEl.type = 'datetime-local';
    endEl.type = 'datetime-local';
    if (convertExisting && prevStart && prevStart.length === 10) {
      startEl.value = `${prevStart}T09:00`;
    }
    if (convertExisting && prevEnd && prevEnd.length === 10) {
      endEl.value = `${prevEnd}T10:00`;
    }
  }
  handleEventDateInputsChange();
}

function clearEventEndField() {
  document.getElementById('eventFormEnd').value = '';
  handleEventDateInputsChange();
}

function renderModalColorSwatches() {
  const container = document.getElementById('eventColorSwatches');
  const headerDot = document.getElementById('eventModalColorIndicator');
  if (headerDot) headerDot.style.backgroundColor = selectedModalColor;

  container.innerHTML = EVENT_COLORS.map(c => {
    const isSelected = c.hex.toLowerCase() === selectedModalColor.toLowerCase();
    return `
      <button type="button"
              onclick="selectModalEventColor('${c.hex}')"
              title="${c.label}"
              style="background-color: ${c.hex};"
              class="w-6 h-6 rounded-[3px] flex items-center justify-center transition-transform ${
                isSelected ? 'ring-2 ring-offset-1 ring-[var(--text-primary)] scale-105' : 'opacity-80 hover:opacity-100'
              }">
        ${isSelected ? '<svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
      </button>
    `;
  }).join('');
}

function selectModalEventColor(hex) {
  selectedModalColor = hex;
  renderModalColorSwatches();
}

function toggleModalOpenNoteBtn() {
  const val = document.getElementById('eventFormLinkedNote').value;
  const btn = document.getElementById('eventFormOpenLinkedNoteBtn');
  if (val) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }
}

function openLinkedNoteFromModal() {
  const noteId = document.getElementById('eventFormLinkedNote').value;
  if (!noteId) return;
  closeEventModal();
  state.appMode = 'workspace';
  selectNote(noteId);
}

function clearEventFormError() {
  const msg = document.getElementById('eventFormValidationMsg');
  msg.classList.add('hidden');
  msg.textContent = '';
}

function showEventFormError(text) {
  const msg = document.getElementById('eventFormValidationMsg');
  msg.textContent = text;
  msg.classList.remove('hidden');
}

/** Live validation & overlap / multi-day detection preview inside the event modal */
function handleEventDateInputsChange() {
  clearEventFormError();
  const notice = document.getElementById('eventFormScheduleNotice');
  const isAllDay = document.getElementById('eventFormAllDay').checked;
  const startVal = document.getElementById('eventFormStart').value;
  const endVal = document.getElementById('eventFormEnd').value;
  const editingId = document.getElementById('eventFormId').value;

  if (!startVal) {
    notice.classList.add('hidden');
    return;
  }

  const notices = [];
  if (isAllDay) {
    if (endVal && endVal > startVal) {
      const spanDays = diffDaysDateKeys(startVal, endVal) + 1;
      notices.push(`Multi-day span (${spanDays} days inclusive)`);
    }
  } else {
    const startIso = localInputToUtcIso(startVal);
    const endIso = endVal ? localInputToUtcIso(endVal) : null;
    if (startIso) {
      const sDate = new Date(startIso);
      const eDate = endIso ? new Date(endIso) : new Date(sDate.getTime() + 3600000);
      if (!endVal) {
        notices.push('No end time specified (renders as 1h default block)');
      } else if (eDate >= sDate && formatLocalDateKey(new Date(eDate.getTime() - 1)) > formatLocalDateKey(sDate)) {
        notices.push('Spans across midnight / multiple local days');
      }

      // Check concurrent timed event overlaps
      if (eDate > sDate) {
        const overlaps = state.events.filter(other => {
          if (other.id === editingId || other.all_day) return false;
          const oNorm = normalizeEventRange(other);
          return sDate < oNorm.end && eDate > oNorm.start;
        });
        if (overlaps.length > 0) {
          notices.push(`Overlaps with ${overlaps.length} scheduled event${overlaps.length > 1 ? 's' : ''} (auto-columned)`);
        }
      }
    }
  }

  if (notices.length > 0) {
    notice.textContent = notices.join(' · ');
    notice.classList.remove('hidden');
  } else {
    notice.classList.add('hidden');
  }
}

function saveEventFromModal(e) {
  if (e) e.preventDefault();
  clearEventFormError();

  const id = document.getElementById('eventFormId').value.trim();
  const title = document.getElementById('eventFormTitle').value.trim();
  const isAllDay = document.getElementById('eventFormAllDay').checked;
  const startVal = document.getElementById('eventFormStart').value.trim();
  const endVal = document.getElementById('eventFormEnd').value.trim();
  const location = document.getElementById('eventFormLocation').value.trim();
  const notes = document.getElementById('eventFormNotes').value.trim();
  const linkedNoteId = document.getElementById('eventFormLinkedNote').value;

  if (!title) {
    showEventFormError('Please enter an event title.');
    document.getElementById('eventFormTitle').focus();
    return;
  }

  if (!startVal) {
    showEventFormError('Please select a valid start date/time.');
    return;
  }

  let start_datetime = '';
  let end_datetime = null;

  if (isAllDay) {
    start_datetime = startVal.slice(0, 10);
    if (endVal) {
      const cleanEnd = endVal.slice(0, 10);
      if (cleanEnd < start_datetime) {
        showEventFormError('End date cannot be earlier than start date.');
        return;
      }
      end_datetime = cleanEnd;
    }
  } else {
    const startIso = localInputToUtcIso(startVal);
    if (!startIso) {
      showEventFormError('Invalid start date/time format.');
      return;
    }
    start_datetime = startIso;

    if (endVal) {
      const endIso = localInputToUtcIso(endVal);
      if (!endIso) {
        showEventFormError('Invalid end date/time format.');
        return;
      }
      if (new Date(endIso) < new Date(startIso)) {
        showEventFormError('End time cannot be earlier than start time.');
        return;
      }
      end_datetime = endIso;
    }
  }

  const payload = {
    id: id || generateId('evt'),
    title,
    start_datetime,
    end_datetime,
    location,
    color_code: selectedModalColor,
    all_day: isAllDay,
    linkedNoteId: linkedNoteId || '',
    notes
  };

  if (id) {
    const idx = state.events.findIndex(item => item.id === id);
    if (idx !== -1) {
      state.events[idx] = payload;
    } else {
      state.events.push(payload);
    }
    showToast(`Updated "${title}"`);
  } else {
    state.events.push(payload);
    showToast(`Scheduled "${title}"`);
  }

  // Focus selected date on the newly saved event's start date
  const norm = normalizeEventRange(payload);
  state.calendarSelectedDate = norm.startDateKey;
  state.calendarCursorDate = norm.startDateKey;
  miniCalCursorMonth = parseLocalDateKey(norm.startDateKey);

  closeEventModal();
  renderAll();
  persistState();
}

function requestDeleteEvent() {
  document.getElementById('eventDeleteBtn').classList.add('hidden');
  document.getElementById('eventDeleteConfirmGroup').classList.remove('hidden');
}

function cancelDeleteEvent() {
  document.getElementById('eventDeleteConfirmGroup').classList.add('hidden');
  document.getElementById('eventDeleteBtn').classList.remove('hidden');
}

function confirmDeleteEvent() {
  const id = document.getElementById('eventFormId').value;
  if (!id) return;
  const target = state.events.find(e => e.id === id);
  const deletedTitle = target ? target.title : 'Event';
  state.events = state.events.filter(e => e.id !== id);
  closeEventModal();
  renderAll();
  persistState();
  showToast(`Deleted "${deletedTitle}"`, 'ochre');
}

// =========================================================================
// 11. DOCUMENT CANVAS RENDERING & BLOCK EDITOR INTERACTIONS
// =========================================================================
function renderActiveDocument() {
  const note = getActiveNote();
  if (!note) return;

  renderDocBanner(note);

  const contentContainer = document.getElementById('documentContentContainer');
  if (contentContainer) {
    contentContainer.classList.remove('animate-doc-glide');
    void contentContainer.offsetWidth;
    contentContainer.classList.add('animate-doc-glide');
  }

  document.getElementById('breadcrumbFolder').textContent = note.folder || 'General';
  document.getElementById('breadcrumbTitleText').textContent = note.title || 'Untitled Document';

  const favIcon = document.getElementById('favIcon');
  if (note.favorite) {
    favIcon.setAttribute('fill', 'currentColor');
    favIcon.classList.add('text-[var(--accent-ochre)]');
  } else {
    favIcon.setAttribute('fill', 'none');
    favIcon.classList.remove('text-[var(--accent-ochre)]');
  }

  document.getElementById('pageGlyphBtn').innerHTML = getGlyphSVG(note.glyph);
  document.getElementById('docIdStamp').textContent = note.code || 'DOC-00';

  const titleEl = document.getElementById('docTitleInput');
  if (document.activeElement !== titleEl) {
    titleEl.textContent = note.title;
  }

  renderFolderDropdownUI(note);

  document.getElementById('docUpdatedMeta').textContent = note.updatedAt || TODAY_KEY;
  updateWordCount(note);

  // Render Chronological Daily Log Stepper if viewing a Daily Log note
  const stepper = document.getElementById('dailyLogStepperBar');
  if (stepper) {
    const match = (note.title || '').match(/^Daily Log — (\d{4}-\d{2}-\d{2})$/i);
    if (match) {
      const currentKey = match[1];
      const curDate = parseLocalDateKey(currentKey);
      const prevDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() - 1);
      const nextDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() + 1);
      const prevKey = formatLocalDateKey(prevDate);
      const nextKey = formatLocalDateKey(nextDate);

      stepper.innerHTML = `
        <button onclick="openOrCreateDailyNoteForDate('${prevKey}')" class="flex items-center gap-1.5 px-2 py-1 rounded-[2px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-hairline)] transition-colors">
          <span>← ${MONTH_SHORT[prevDate.getMonth()]} ${prevDate.getDate()}</span>
        </button>
        <div class="flex items-center gap-1.5">
          <span class="font-mono text-[10px] uppercase text-[var(--text-tertiary)]">DAILY LOG CHRONOLOGY</span>
          ${currentKey === TODAY_KEY ? `
            <span class="px-1.5 py-0.5 rounded-[2px] bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] font-semibold text-[10px]">TODAY</span>
          ` : `
            <button onclick="openOrCreateDailyNoteForDate('${TODAY_KEY}')" class="text-[var(--accent-vermilion)] hover:underline text-[10px]">JUMP TO TODAY</button>
          `}
        </div>
        <button onclick="openOrCreateDailyNoteForDate('${nextKey}')" class="flex items-center gap-1.5 px-2 py-1 rounded-[2px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-hairline)] transition-colors">
          <span>${MONTH_SHORT[nextDate.getMonth()]} ${nextDate.getDate()} →</span>
        </button>
      `;
      stepper.classList.remove('hidden');
    } else {
      stepper.classList.add('hidden');
    }
  }

  const tagsContainer = document.getElementById('tagsContainer');
  tagsContainer.innerHTML = (note.tags || []).map(tag => `
    <span data-tag-pill="${escapeHtml(tag)}" class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[2px] font-mono text-[11px] bg-[var(--bg-panel)] text-[var(--text-secondary)] border border-[var(--border-hairline)] group select-none" style="touch-action: pan-x;">
      <span class="text-[var(--accent-vermilion)]">#</span>${escapeHtml(tag)}
      <button onclick="removeTag('${escapeHtml(tag)}')" class="ml-0.5 text-[var(--text-tertiary)] hover:text-[var(--accent-vermilion)] opacity-60 group-hover:opacity-100">×</button>
    </span>
  `).join('');

  renderBlocks(note);
}

function toggleMobileMetaLedger() {
  const ledger = document.getElementById('archivalMetadataLedger');
  const chev = document.getElementById('mobileMetaChevron');
  if (!ledger) return;
  const isHidden = ledger.classList.contains('hidden');
  ledger.classList.toggle('hidden', !isHidden);
  if (chev) chev.style.transform = isHidden ? 'rotate(180deg)' : '';
}

function updateWordCount(note) {
  const fullText = [note.title, ...note.blocks.map(b => b.content || '')].join(' ').trim();
  const words = fullText ? fullText.split(/\s+/).length : 0;
  document.getElementById('docWordCount').textContent = words;
  const mins = Math.max(1, Math.ceil(words / 220));
  const readEl = document.getElementById('docReadingTimeMeta');
  if (readEl) {
    readEl.textContent = `${mins} min read`;
  }
  const mobSummary = document.getElementById('mobileMetaSummaryText');
  if (mobSummary && note) {
    const tagCount = Array.isArray(note.tags) ? note.tags.length : 0;
    mobSummary.textContent = `${note.folder || 'General'} · ${mins} min read · ${tagCount} ${tagCount === 1 ? 'tag' : 'tags'}`;
  }
}

function renderBlocks(note) {
  const container = document.getElementById('blocksContainer');
  container.innerHTML = note.blocks.map((block, index) => renderSingleBlockHTML(block, index)).join('');
  renderDocKnowledgeRadar(note);
  if (typeof applyNoteLockVisuals === 'function') applyNoteLockVisuals(note);
}

function renderSingleBlockHTML(block) {
  const richContent = renderRichBlockHTML(block.content);

  const gutter = `
    <div class="opacity-60 sm:opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity flex items-center gap-0.5 pr-1 pt-1 select-none shrink-0 -ml-7 sm:-ml-11 w-7 sm:w-11 justify-end">
      <button onclick="insertBlockAfter('${block.id}')" title="Insert block below" class="p-0.5 rounded-[2px] hover:bg-[var(--bg-hover)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
      <button type="button" data-drag-handle="${block.id}" style="touch-action: none;" onclick="handleBlockHandleTap(event, '${block.id}')" title="Drag to reorder · Tap for block actions" class="p-1 sm:p-0.5 rounded-[2px] hover:bg-[var(--bg-hover)] text-[var(--text-tertiary)] hover:text-[var(--accent-vermilion)] cursor-grab active:cursor-grabbing">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="9" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="18" r="1"/></svg>
      </button>
    </div>
  `;

  let innerBlock = '';

  switch (block.type) {
    case 'h1':
      innerBlock = `
        <div contenteditable="true"
             data-block-id="${block.id}"
             data-placeholder="Heading 1"
             spellcheck="true"
             autocorrect="on"
             autocapitalize="sentences"
             autocomplete="on"
             onfocus="handleBlockFocus(event, '${block.id}')"
             oninput="handleBlockInput(event, '${block.id}')"
             onkeydown="handleBlockKeydown(event, '${block.id}')"
             onblur="handleBlockBlur(event, '${block.id}')"
             class="flex-1 font-serif text-2xl sm:text-[26px] font-medium tracking-tight text-[var(--text-primary)] mt-6 mb-1.5 leading-snug">${richContent}</div>
      `;
      break;

    case 'h2':
      innerBlock = `
        <div contenteditable="true"
             data-block-id="${block.id}"
             data-placeholder="Heading 2"
             spellcheck="true"
             autocorrect="on"
             autocapitalize="sentences"
             autocomplete="on"
             onfocus="handleBlockFocus(event, '${block.id}')"
             oninput="handleBlockInput(event, '${block.id}')"
             onkeydown="handleBlockKeydown(event, '${block.id}')"
             onblur="handleBlockBlur(event, '${block.id}')"
             class="flex-1 text-[17px] sm:text-[18px] font-semibold tracking-tight text-[var(--text-primary)] mt-5 mb-1 pb-1 border-b border-[var(--border-hairline)] leading-snug">${richContent}</div>
      `;
      break;

    case 'h3':
      innerBlock = `
        <div contenteditable="true"
             data-block-id="${block.id}"
             data-placeholder="Heading 3"
             spellcheck="true"
             autocorrect="on"
             autocapitalize="sentences"
             autocomplete="on"
             onfocus="handleBlockFocus(event, '${block.id}')"
             oninput="handleBlockInput(event, '${block.id}')"
             onkeydown="handleBlockKeydown(event, '${block.id}')"
             onblur="handleBlockBlur(event, '${block.id}')"
             class="flex-1 font-mono text-xs uppercase tracking-wider font-medium text-[var(--text-secondary)] mt-4 mb-0.5 leading-snug">${richContent}</div>
      `;
      break;

    case 'bullet':
      innerBlock = `
        <div class="flex-1 flex items-start gap-2.5 py-0.5">
          <span class="mt-2.5 w-1.5 h-1.5 rounded-[1px] bg-[var(--accent-vermilion)] shrink-0"></span>
          <div contenteditable="true"
               data-block-id="${block.id}"
               data-placeholder="List item..."
               spellcheck="true"
               autocorrect="on"
               autocapitalize="sentences"
               autocomplete="on"
               onfocus="handleBlockFocus(event, '${block.id}')"
               oninput="handleBlockInput(event, '${block.id}')"
               onkeydown="handleBlockKeydown(event, '${block.id}')"
               onblur="handleBlockBlur(event, '${block.id}')"
               class="flex-1 text-[15px] leading-[1.7] text-[var(--text-primary)]">${richContent}</div>
        </div>
      `;
      break;

    case 'todo':
      innerBlock = `
        <div class="flex-1 flex items-start gap-2.5 py-0.5">
          <button onclick="toggleTodoBlock('${block.id}')"
                  class="mt-1.5 w-3.5 h-3.5 rounded-[2px] border flex items-center justify-center transition-colors shrink-0 ${
                    block.checked
                      ? 'bg-[var(--accent-vermilion)] border-[var(--accent-vermilion)] text-white'
                      : 'border-[var(--border-strong)] hover:border-[var(--accent-vermilion)] bg-transparent'
                  }">
            ${block.checked ? '<svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
          </button>
          <div contenteditable="true"
               data-block-id="${block.id}"
               data-placeholder="Action item..."
               spellcheck="true"
               autocorrect="on"
               autocapitalize="sentences"
               autocomplete="on"
               onfocus="handleBlockFocus(event, '${block.id}')"
               oninput="handleBlockInput(event, '${block.id}')"
               onkeydown="handleBlockKeydown(event, '${block.id}')"
               onblur="handleBlockBlur(event, '${block.id}')"
               class="flex-1 text-[15px] leading-[1.7] ${block.checked ? 'line-through text-[var(--text-tertiary)]' : 'text-[var(--text-primary)]'}">${richContent}</div>
        </div>
      `;
      break;

    case 'callout':
      innerBlock = `
        <div class="flex-1 my-2.5 px-3.5 py-3 rounded-[3px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] border-l-2 border-l-[var(--accent-ochre)] flex items-start gap-3">
          <span class="text-[var(--accent-ochre)] mt-1 shrink-0">${getGlyphSVG('alert')}</span>
          <div contenteditable="true"
               data-block-id="${block.id}"
               data-placeholder="Marginalia or callout note..."
               spellcheck="true"
               autocorrect="on"
               autocapitalize="sentences"
               autocomplete="on"
               onfocus="handleBlockFocus(event, '${block.id}')"
               oninput="handleBlockInput(event, '${block.id}')"
               onkeydown="handleBlockKeydown(event, '${block.id}')"
               onblur="handleBlockBlur(event, '${block.id}')"
               class="flex-1 text-[14.5px] leading-[1.65] text-[var(--text-primary)]">${richContent}</div>
        </div>
      `;
      break;

    case 'quote':
      innerBlock = `
        <div class="flex-1 my-2.5 pl-4 border-l-2 border-[var(--border-strong)] py-0.5">
          <div contenteditable="true"
               data-block-id="${block.id}"
               data-placeholder="Citation or excerpt..."
               spellcheck="true"
               autocorrect="on"
               autocapitalize="sentences"
               autocomplete="on"
               onfocus="handleBlockFocus(event, '${block.id}')"
               oninput="handleBlockInput(event, '${block.id}')"
               onkeydown="handleBlockKeydown(event, '${block.id}')"
               onblur="handleBlockBlur(event, '${block.id}')"
               class="font-serif italic text-[16.5px] leading-[1.65] text-[var(--text-secondary)]">${richContent}</div>
        </div>
      `;
      break;

    case 'code':
      innerBlock = `
        <div class="flex-1 my-3 rounded-[3px] bg-[var(--code-bg)] border border-[var(--border-hairline)] overflow-hidden font-mono">
          <div class="px-3 py-1 bg-[var(--bg-panel)] border-b border-[var(--border-hairline)] flex items-center justify-between text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
            <span>${escapeHtml(block.language || 'code')}</span>
            <button onclick="copyCodeBlock('${block.id}')" class="hover:text-[var(--text-primary)] transition-colors">COPY</button>
          </div>
          <pre contenteditable="true"
               data-block-id="${block.id}"
               data-placeholder="// Enter code or specification..."
               spellcheck="false"
               autocorrect="off"
               autocapitalize="none"
               autocomplete="off"
               onfocus="handleBlockFocus(event, '${block.id}')"
               oninput="handleCodeInput(event, '${block.id}')"
               onkeydown="handleCodeKeydown(event, '${block.id}')"
               class="p-3.5 text-[12.5px] leading-relaxed text-[var(--code-text)] overflow-x-auto focus:outline-none whitespace-pre">${escapeHtml(block.content || '')}</pre>
        </div>
      `;
      break;

    case 'divider':
      innerBlock = `
        <div class="flex-1 py-4 flex items-center">
          <div class="w-full h-[1px] bg-[var(--border-hairline)]"></div>
        </div>
      `;
      break;

    default:
      innerBlock = `
        <div contenteditable="true"
             data-block-id="${block.id}"
             data-placeholder="Write prose, type '/' for blocks, or '[[' to link..."
             spellcheck="true"
             autocorrect="on"
             autocapitalize="sentences"
             autocomplete="on"
             onfocus="handleBlockFocus(event, '${block.id}')"
             oninput="handleBlockInput(event, '${block.id}')"
             onkeydown="handleBlockKeydown(event, '${block.id}')"
             onblur="handleBlockBlur(event, '${block.id}')"
             class="flex-1 text-[15.5px] leading-[1.75] text-[var(--text-primary)] py-0.5">${richContent}</div>
      `;
  }

  return `
    <div class="block-row group relative flex items-start rounded-[2px]"
         data-row-id="${block.id}"
         draggable="true"
         ondragstart="handleBlockDragStart(event, '${block.id}')"
         ondragover="handleBlockDragOver(event, '${block.id}')"
         ondragleave="handleBlockDragLeave(event)"
         ondrop="handleBlockDrop(event, '${block.id}')">
      ${gutter}
      ${innerBlock}
    </div>
  `;
}

function handleTitleChange(newTitle) {
  recordTypingChange();
  const note = getActiveNote();
  note.title = newTitle.trim();
  note.updatedAt = TODAY_KEY;
  document.getElementById('breadcrumbTitleText').textContent = note.title || 'Untitled Document';
  updateWordCount(note);
  renderSidebar();
  renderInspector();
  persistState();
}

function handleTitleKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const note = getActiveNote();
    if (note.blocks.length > 0) {
      focusBlock(note.blocks[0].id, true);
    } else {
      appendBlockAtEnd();
    }
  }
}

function guardActiveNoteEditable(quiet = false) {
  const note = getActiveNote();
  if (!note) return null;
  if (note.locked) {
    if (!quiet) showToast('Note is locked — unlock to edit', 'ochre');
    return null;
  }
  return note;
}

function handleBlockInput(e, blockId) {
  const note = guardActiveNoteEditable(true);
  if (!note) return;
  recordTypingChange();
  const el = e.currentTarget;
  const block = note.blocks.find(b => b.id === blockId);
  if (!block) return;

  // Autocorrect check on typing delimiter, mobile input, or autocomplete
  if (e.data && /[\s.,!?;:]/.test(e.data)) {
    triggerAutocorrectCheck(el, blockId);
  } else if (e.inputType === 'insertText' && (!e.data || /[\s.,!?;:]$/.test(el.innerText))) {
    triggerAutocorrectCheck(el, blockId);
  }

  block.content = serializeEditableBlock(el);
  note.updatedAt = TODAY_KEY;
  updateWordCount(note);

  const plainText = el.innerText;
  const slashMatch = plainText.match(/(?:^|\s)\/([a-zA-Z0-9]*)$/);
  if (slashMatch) {
    openSlashMenu(blockId, el, slashMatch[1]);
  } else {
    closeSlashMenu();
  }

  const wikiMatch = plainText.match(/\[\[([^\]]*)$/);
  if (wikiMatch) {
    openWikiLinkMenu(blockId, el, wikiMatch[1]);
  } else {
    closeWikiLinkMenu();
  }

  renderInspector();
  persistState();
}

function handleCodeInput(e, blockId) {
  recordTypingChange();
  const note = getActiveNote();
  const block = note.blocks.find(b => b.id === blockId);
  if (block) {
    block.content = e.currentTarget.innerText;
    updateWordCount(note);
    persistState();
  }
}

function handleCodeKeydown(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    document.execCommand('insertText', false, '  ');
  }
}

function handleBlockBlur(e, blockId) {
  const note = getActiveNote();
  const block = note.blocks.find(b => b.id === blockId);
  if (block && block.type !== 'code' && block.type !== 'divider') {
    e.currentTarget.innerHTML = renderRichBlockHTML(block.content);
  }
}

function handleBlockKeydown(e, blockId) {
  const lockedCheck = getActiveNote();
  if (lockedCheck && lockedCheck.locked) {
    if (!e.ctrlKey && !e.metaKey && !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Escape', 'Tab'].includes(e.key)) {
      e.preventDefault();
      showToast('Note is locked — unlock to edit', 'ochre');
    }
    return;
  }
  // Check Autocorrect Backspace Undo before anything else
  if (e.key === 'Backspace') {
    if (checkAutocorrectUndoOnBackspace(e, blockId)) {
      return;
    }
  }

  // Check Autocorrect word delimiter trigger
  if (e.key === ' ' || e.key === '.' || e.key === ',' || e.key === '!' || e.key === '?' || e.key === ';' || e.key === ':') {
    const targetEl = e.currentTarget;
    setTimeout(() => triggerAutocorrectCheck(targetEl, blockId), 0);
  }

  if (!document.getElementById('slashMenu').classList.contains('hidden')) {
    if (e.key === 'ArrowDown') { e.preventDefault(); moveSlashSelection(1); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); moveSlashSelection(-1); return; }
    if (e.key === 'Enter') { e.preventDefault(); confirmSlashSelection(); return; }
    if (e.key === 'Escape') { e.preventDefault(); closeSlashMenu(); return; }
  }

  if (!document.getElementById('wikiLinkMenu').classList.contains('hidden')) {
    if (e.key === 'ArrowDown') { e.preventDefault(); moveWikiSelection(1); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); moveWikiSelection(-1); return; }
    if (e.key === 'Enter') { e.preventDefault(); confirmWikiSelection(); return; }
    if (e.key === 'Escape') { e.preventDefault(); closeWikiLinkMenu(); return; }
  }

  const note = getActiveNote();
  const idx = note.blocks.findIndex(b => b.id === blockId);
  if (idx === -1) return;
  const block = note.blocks[idx];

  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    const nextType = (block.type === 'todo' || block.type === 'bullet') ? block.type : 'paragraph';
    const newBlock = {
      id: generateId('b'),
      type: nextType,
      checked: false,
      content: ''
    };
    note.blocks.splice(idx + 1, 0, newBlock);
    renderBlocks(note);
    focusBlock(newBlock.id, true);
    persistState();
  }

  if (e.key === 'Backspace') {
    const text = e.currentTarget.innerText.trim();
    if (text === '') {
      if (block.type !== 'paragraph') {
        e.preventDefault();
        block.type = 'paragraph';
        renderBlocks(note);
        focusBlock(block.id, true);
        persistState();
      } else if (note.blocks.length > 1) {
        e.preventDefault();
        const prevBlock = note.blocks[Math.max(0, idx - 1)];
        note.blocks.splice(idx, 1);
        renderBlocks(note);
        focusBlock(prevBlock.id, false);
        persistState();
      }
    }
  }

  if (e.key === 'ArrowUp' && idx > 0) {
    const sel = window.getSelection();
    if (sel && sel.anchorOffset === 0) {
      e.preventDefault();
      focusBlock(note.blocks[idx - 1].id, false);
    }
  }
  if (e.key === 'ArrowDown' && idx < note.blocks.length - 1) {
    const sel = window.getSelection();
    if (sel && sel.anchorOffset >= e.currentTarget.innerText.length) {
      e.preventDefault();
      focusBlock(note.blocks[idx + 1].id, true);
    }
  }
}

function focusBlock(blockId, atStart = false) {
  requestAnimationFrame(() => {
    const el = document.querySelector(`[data-block-id="${blockId}"]`);
    if (!el) return;
    el.focus();
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(atStart);
    sel.removeAllRanges();
    sel.addRange(range);
  });
}

function insertBlockAfter(blockId) {
  const note = guardActiveNoteEditable();
  if (!note) return;
  takeSnapshot('insertBlockAfter');
  const idx = note.blocks.findIndex(b => b.id === blockId);
  const newBlock = { id: generateId('b'), type: 'paragraph', content: '' };
  note.blocks.splice(idx + 1, 0, newBlock);
  renderBlocks(note);
  focusBlock(newBlock.id, true);
  persistState();
}

function appendBlockAtEnd() {
  const note = guardActiveNoteEditable();
  if (!note) return;
  const last = note.blocks[note.blocks.length - 1];
  if (last && last.type === 'paragraph' && !last.content) {
    focusBlock(last.id, true);
    return;
  }
  takeSnapshot('appendBlockAtEnd');
  const newBlock = { id: generateId('b'), type: 'paragraph', content: '' };
  note.blocks.push(newBlock);
  renderBlocks(note);
  focusBlock(newBlock.id, true);
  persistState();
}

function deleteBlock(blockId) {
  const note = guardActiveNoteEditable();
  if (!note) return;
  takeSnapshot('deleteBlock');
  if (note.blocks.length <= 1) {
    note.blocks[0].content = '';
    note.blocks[0].type = 'paragraph';
  } else {
    note.blocks = note.blocks.filter(b => b.id !== blockId);
  }
  renderBlocks(note);
  renderInspector();
  persistState();
}

function toggleTodoBlock(blockId) {
  const note = guardActiveNoteEditable();
  if (!note) return;
  takeSnapshot('toggleTodoBlock');
  const block = note.blocks.find(b => b.id === blockId);
  if (block) {
    block.checked = !block.checked;
    if (block.checked) {
      playPopSound();
      const btn = document.querySelector(`[onclick="toggleTodoBlock('${blockId}')"]`);
      if (btn) {
        const rect = btn.getBoundingClientRect();
        triggerCelebration(rect.left + rect.width / 2, rect.top + rect.height / 2, 26);
      } else {
        triggerCelebration(window.innerWidth / 2, window.innerHeight / 2, 26);
      }
    } else {
      playMechanicalClick(0.8);
    }
    renderBlocks(note);
    persistState();
  }
}

function copyCodeBlock(blockId) {
  const note = getActiveNote();
  const block = note.blocks.find(b => b.id === blockId);
  if (!block) return;
  const temp = document.createElement('textarea');
  temp.value = block.content || '';
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
  showToast('Code copied to clipboard');
}

function handleBlockDragStart(e, blockId) {
  const note = getActiveNote();
  if (note && note.locked) {
    e.preventDefault();
    return;
  }
  draggedBlockId = blockId;
  e.dataTransfer.effectAllowed = 'move';
}
function handleBlockDragOver(e, targetBlockId) {
  e.preventDefault();
  if (!draggedBlockId || draggedBlockId === targetBlockId) return;
  const row = e.currentTarget;
  const rect = row.getBoundingClientRect();
  const isTop = e.clientY < rect.top + rect.height / 2;
  row.classList.toggle('drag-over-top', isTop);
  row.classList.toggle('drag-over-bottom', !isTop);
}
function handleBlockDragLeave(e) {
  e.currentTarget.classList.remove('drag-over-top', 'drag-over-bottom');
}
function handleBlockDrop(e, targetBlockId) {
  e.preventDefault();
  const row = e.currentTarget;
  const rect = row.getBoundingClientRect();
  const insertBefore = e.clientY < rect.top + rect.height / 2;
  row.classList.remove('drag-over-top', 'drag-over-bottom');

  if (!draggedBlockId || draggedBlockId === targetBlockId) return;
  const note = guardActiveNoteEditable();
  if (!note) { draggedBlockId = null; return; }
  const fromIdx = note.blocks.findIndex(b => b.id === draggedBlockId);
  if (fromIdx === -1) return;
  const [moved] = note.blocks.splice(fromIdx, 1);
  let toIdx = note.blocks.findIndex(b => b.id === targetBlockId);
  if (!insertBefore) toIdx += 1;
  note.blocks.splice(toIdx, 0, moved);
  draggedBlockId = null;
  renderBlocks(note);
  persistState();
}

// Slash Command Menu
let filteredSlashItems = [...SLASH_COMMANDS];

function openSlashMenu(blockId, anchorEl, filterQuery = '') {
  activeSlashBlockId = blockId;
  const q = filterQuery.toLowerCase();
  filteredSlashItems = SLASH_COMMANDS.filter(item =>
    item.label.toLowerCase().includes(q) || item.type.toLowerCase().includes(q)
  );
  if (filteredSlashItems.length === 0) {
    closeSlashMenu();
    return;
  }
  slashSelectedIndex = 0;

  const menu = document.getElementById('slashMenu');
  const rect = anchorEl.getBoundingClientRect();
  menu.style.left = `${Math.min(window.innerWidth - 275, Math.max(16, rect.left))}px`;
  const spaceBelow = window.innerHeight - rect.bottom;
  if (spaceBelow < 290) {
    menu.style.top = 'auto';
    menu.style.bottom = `${window.innerHeight - rect.top + 4}px`;
  } else {
    menu.style.bottom = 'auto';
    menu.style.top = `${rect.bottom + 4}px`;
  }

  renderSlashMenuItems();
  menu.classList.remove('hidden');
  menu.classList.remove('animate-menu');
  void menu.offsetWidth;
  menu.classList.add('animate-menu');
}

function renderSlashMenuItems() {
  const container = document.getElementById('slashMenuItems');
  container.innerHTML = filteredSlashItems.map((item, idx) => `
    <button onclick="applySlashCommand('${item.type}')"
            onmouseenter="slashSelectedIndex = ${idx}; renderSlashMenuItems()"
            class="w-full flex items-center justify-between px-2 py-1.5 rounded-[3px] text-left transition-colors ${
              idx === slashSelectedIndex ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
            }">
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="w-6 h-6 rounded-[2px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-center justify-center text-[var(--accent-vermilion)] shrink-0">
          ${getGlyphSVG(item.glyph)}
        </span>
        <div class="truncate">
          <div class="text-xs font-medium text-[var(--text-primary)]">${item.label}</div>
          <div class="text-[10px] text-[var(--text-tertiary)] truncate">${item.desc}</div>
        </div>
      </div>
      ${item.shortcut ? `<kbd class="font-mono text-[10px] text-[var(--text-tertiary)]">${item.shortcut}</kbd>` : ''}
    </button>
  `).join('');
}

function moveSlashSelection(delta) {
  slashSelectedIndex = (slashSelectedIndex + delta + filteredSlashItems.length) % filteredSlashItems.length;
  renderSlashMenuItems();
}

function confirmSlashSelection() {
  const chosen = filteredSlashItems[slashSelectedIndex];
  if (chosen) applySlashCommand(chosen.type);
}

function applySlashCommand(newType) {
  if (!activeSlashBlockId) return;
  const note = guardActiveNoteEditable();
  if (!note) return;
  const block = note.blocks.find(b => b.id === activeSlashBlockId);
  if (block) {
    block.content = (block.content || '').replace(/(?:^|\s)\/[a-zA-Z0-9]*$/, '').trim();
    block.type = newType;
    if (newType === 'code' && !block.language) block.language = 'typescript';
  }
  const targetId = activeSlashBlockId;
  closeSlashMenu();
  renderBlocks(note);
  if (newType !== 'divider') {
    focusBlock(targetId, false);
  }
  renderInspector();
  persistState();
}

function closeSlashMenu() {
  document.getElementById('slashMenu').classList.add('hidden');
  activeSlashBlockId = null;
}

// Wiki-Link Autocomplete (`[[`)
let filteredWikiNotes = [];

function openWikiLinkMenu(blockId, anchorEl, query) {
  activeWikiBlockId = blockId;
  wikiQuery = query;
  document.getElementById('wikiQueryLabel').textContent = `[[${query}]]`;

  const q = query.toLowerCase().trim();
  filteredWikiNotes = state.notes.filter(n =>
    n.id !== state.activeNoteId &&
    (n.title.toLowerCase().includes(q) || (n.tags || []).some(t => t.toLowerCase().includes(q)))
  );

  wikiSelectedIndex = 0;
  const menu = document.getElementById('wikiLinkMenu');
  const rect = anchorEl.getBoundingClientRect();
  menu.style.left = `${Math.min(window.innerWidth - 300, Math.max(16, rect.left))}px`;
  menu.style.top = `${Math.min(window.innerHeight - 250, rect.bottom + 4)}px`;

  renderWikiLinkMenuItems();
  menu.classList.remove('hidden');
  menu.classList.remove('animate-menu');
  void menu.offsetWidth;
  menu.classList.add('animate-menu');
}

function renderWikiLinkMenuItems() {
  const container = document.getElementById('wikiLinkMenuItems');
  let html = filteredWikiNotes.map((n, idx) => `
    <button onclick="insertWikiLink('${escapeHtml(n.title).replace(/'/g, "\\'")}')"
            onmouseenter="wikiSelectedIndex = ${idx}; renderWikiLinkMenuItems()"
            class="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-[3px] text-left transition-colors ${
              idx === wikiSelectedIndex ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
            }">
      <span class="text-[var(--accent-vermilion)] shrink-0">${getGlyphSVG(n.glyph)}</span>
      <div class="min-w-0 flex-1">
        <div class="text-xs font-medium text-[var(--text-primary)] truncate">${escapeHtml(n.title)}</div>
        <div class="font-mono text-[10px] text-[var(--text-tertiary)] truncate">${escapeHtml(n.folder)}</div>
      </div>
    </button>
  `).join('');

  if (wikiQuery.trim().length > 0) {
    html += `
      <button onclick="insertWikiLink('${escapeHtml(wikiQuery.trim()).replace(/'/g, "\\'")}')"
              class="w-full flex items-center gap-2 px-2 py-1.5 rounded-[3px] text-left font-mono text-[11px] text-[var(--accent-vermilion)] hover:bg-[var(--bg-elevated)] border-t border-[var(--border-hairline)] mt-1 pt-1.5">
        <span>+ CREATE</span>
        <span class="truncate">"${escapeHtml(wikiQuery.trim())}"</span>
      </button>
    `;
  }

  if (!html) {
    html = `<div class="px-2.5 py-2 font-mono text-[11px] text-[var(--text-tertiary)]">Type title to link...</div>`;
  }
  container.innerHTML = html;
}

function moveWikiSelection(delta) {
  if (filteredWikiNotes.length === 0) return;
  wikiSelectedIndex = (wikiSelectedIndex + delta + filteredWikiNotes.length) % filteredWikiNotes.length;
  renderWikiLinkMenuItems();
}

function confirmWikiSelection() {
  if (filteredWikiNotes[wikiSelectedIndex]) {
    insertWikiLink(filteredWikiNotes[wikiSelectedIndex].title);
  } else if (wikiQuery.trim()) {
    insertWikiLink(wikiQuery.trim());
  }
}

function insertWikiLink(targetTitle) {
  if (!activeWikiBlockId) return;
  const note = getActiveNote();
  const block = note.blocks.find(b => b.id === activeWikiBlockId);
  if (block) {
    block.content = (block.content || '').replace(/\[\[[^\]]*$/, `[[${targetTitle}]] `);
  }
  const targetId = activeWikiBlockId;
  closeWikiLinkMenu();
  renderBlocks(note);
  focusBlock(targetId, false);
  renderInspector();
  persistState();
}

function closeWikiLinkMenu() {
  document.getElementById('wikiLinkMenu').classList.add('hidden');
  activeWikiBlockId = null;
}

// =========================================================================
// 12. NOTE, FOLDER & VIEWPORT CONTROLS
// =========================================================================
function selectNote(noteId) {
  state.activeNoteId = noteId;
  state.appMode = 'workspace';
  if (window.innerWidth < 1024) {
    closeMobileSidebar();
    closeRightSidebar();
  }
  closeSlashMenu();
  closeWikiLinkMenu();
  renderAll();
  reheatGraph();
  persistState();
  if (typeof takeSnapshot === 'function') {
    const currentStack = getNoteUndoStack(noteId);
    if (currentStack.length === 0) takeSnapshot('note-opened');
  }
  if (typeof updateMobileUndoButtons === 'function') {
    updateMobileUndoButtons();
  }
  if (typeof applyNoteLockVisuals === 'function') {
    applyNoteLockVisuals(getActiveNote());
  }
}

function createNewNote(folder = 'General') {
  const nextNum = String(state.notes.length + 1).padStart(2, '0');
  const newNote = {
    id: generateId('note'),
    code: `DOC-${nextNum}`,
    title: 'Untitled Working Note',
    glyph: 'document',
    folder: folder,
    favorite: false,
    tags: ['draft'],
    updatedAt: TODAY_KEY,
    blocks: [
      { id: generateId('b'), type: 'paragraph', content: '' }
    ]
  };
  state.notes.unshift(newNote);
  state.expandedFolders[folder] = true;
  selectNote(newNote.id);
  requestAnimationFrame(() => {
    const titleEl = document.getElementById('docTitleInput');
    titleEl.focus();
    document.execCommand('selectAll', false, null);
  });
  showToast('Created new document');
}

function promptNewFolder() {
  const bar = document.getElementById('newFolderBar');
  bar.classList.toggle('hidden');
  if (!bar.classList.contains('hidden')) {
    const input = document.getElementById('newFolderInput');
    input.value = '';
    input.focus();
  }
}

function handleNewFolderKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    confirmNewFolder();
  } else if (e.key === 'Escape') {
    document.getElementById('newFolderBar').classList.add('hidden');
  }
}

function confirmNewFolder() {
  const input = document.getElementById('newFolderInput');
  const name = input.value.trim();
  if (!name) return;
  state.folders = state.folders || ['General', 'Projects', 'Daily Logs', 'Reading'];
  if (!state.folders.includes(name)) {
    state.folders.push(name);
  }
  state.expandedFolders[name] = true;
  document.getElementById('newFolderBar').classList.add('hidden');
  renderSidebar();
  renderActiveDocument();
  persistState();
  showToast(`Folder "${name}" added`);
}

function openOrCreateDailyNote() {
  openOrCreateDailyNoteForDate(TODAY_KEY);
}

function openOrCreateDailyNoteForDate(dateKey) {
  const dailyTitle = `Daily Log — ${dateKey}`;
  let daily = state.notes.find(n => n.title.toLowerCase() === dailyTitle.toLowerCase());
  if (!daily) {
    const nextNum = String(state.notes.length + 1).padStart(2, '0');
    const dayEvents = getEventsForDateKey(dateKey);
    const agendaBlocks = dayEvents.map(evt => ({
      id: generateId('b'),
      type: 'todo',
      checked: false,
      content: `${evt.all_day ? '[ALL-DAY]' : formatLocalTime24(new Date(evt.start_datetime))} ${evt.title}${evt.location ? ' (' + evt.location + ')' : ''}`
    }));

    daily = {
      id: generateId('note'),
      code: `DOC-${nextNum}`,
      title: dailyTitle,
      glyph: 'calendar',
      folder: 'Daily Logs',
      favorite: false,
      tags: ['daily', 'log'],
      updatedAt: dateKey,
      blocks: [
        { id: generateId('b'), type: 'callout', content: `Field log and schedule notes for ${dateKey}:` },
        ...(agendaBlocks.length > 0 ? agendaBlocks : [{ id: generateId('b'), type: 'todo', checked: false, content: '' }])
      ]
    };
    state.notes.unshift(daily);
  }
  state.expandedFolders['Daily Logs'] = true;
  state.appMode = 'workspace';
  selectNote(daily.id);
  showToast(`Opened ${dailyTitle}`, 'ochre');
}

function deleteActiveNote() {
  const note = guardActiveNoteEditable();
  if (!note) return;
  if (state.notes.length <= 1) {
    showToast('Cannot delete the final document in vault', 'ochre');
    return;
  }
  lastDeletedNote = JSON.parse(JSON.stringify(note));
  const deletedTitle = note.title;
  state.notes = state.notes.filter(n => n.id !== note.id);
  state.activeNoteId = state.notes[0].id;
  renderAll();
  persistState();
  showToast(`Deleted "${deletedTitle}" · tap Undo to restore`, 'ochre');
}

function toggleFavoriteActiveNote() {
  const note = getActiveNote();
  note.favorite = !note.favorite;
  const favBtn = document.getElementById('favBtn');
  if (favBtn) {
    favBtn.classList.remove('star-pop');
    void favBtn.offsetWidth;
    favBtn.classList.add('star-pop');
    if (note.favorite) {
      playChimeSound();
      const rect = favBtn.getBoundingClientRect();
      triggerCelebration(rect.left + rect.width / 2, rect.top + rect.height / 2, 34);
    } else {
      playMechanicalClick(0.85);
    }
  }
  renderSidebar();
  renderActiveDocument();
  persistState();
  showToast(note.favorite ? 'Pinned to index' : 'Unpinned from index', 'ochre');
}

function updateNoteFolder(newFolder) {
  const note = guardActiveNoteEditable();
  if (!note) { renderActiveDocument(); return; }
  note.folder = newFolder;
  state.expandedFolders[newFolder] = true;
  renderSidebar();
  renderActiveDocument();
  persistState();
}

function handleTagKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const note = guardActiveNoteEditable();
    if (!note) return;
    const val = e.currentTarget.value.trim().replace(/^#/, '').toLowerCase();
    if (!val) return;
    note.tags = note.tags || [];
    if (!note.tags.includes(val)) {
      note.tags.push(val);
    }
    e.currentTarget.value = '';
    renderSidebar();
    renderActiveDocument();
    persistState();
  }
}

function removeTag(tag) {
  const note = guardActiveNoteEditable();
  if (!note) return;
  note.tags = (note.tags || []).filter(t => t !== tag);
  renderSidebar();
  renderActiveDocument();
  persistState();
}

function handleSidebarFilter(val) {
  sidebarSearchQuery = val;
  renderSidebar();
}

function toggleTagFilter(tag) {
  activeTagFilter = activeTagFilter === tag ? null : tag;
  renderSidebar();
}

function clearTagFilter() {
  activeTagFilter = null;
  renderSidebar();
}

function toggleGlyphPicker(e) {
  e.stopPropagation();
  const pop = document.getElementById('glyphPickerPopover');
  const grid = document.getElementById('glyphGrid');
  grid.innerHTML = GLYPH_KEYS.map(key => `
    <button onclick="setPageGlyph('${key}')" class="p-1.5 rounded-[2px] hover:bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--accent-vermilion)] flex items-center justify-center transition-colors">
      ${getGlyphSVG(key)}
    </button>
  `).join('');
  pop.classList.toggle('hidden');
}

function setPageGlyph(glyphKey) {
  const note = getActiveNote();
  note.glyph = glyphKey;
  document.getElementById('glyphPickerPopover').classList.add('hidden');
  renderSidebar();
  renderActiveDocument();
  persistState();
}

function toggleFolder(folder) {
  state.expandedFolders[folder] = state.expandedFolders[folder] === false;
  renderSidebar();
  persistState();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  renderAll();
  persistState();
}

function toggleFontStyle() {
  state.fontStyle = state.fontStyle === 'sans' ? 'serif' : 'sans';
  applyThemeAndLayout();
  persistState();
}

function toggleHeaderGrid() {
  state.showHeaderGrid = !state.showHeaderGrid;
  applyThemeAndLayout();
  persistState();
}

function toggleLeftSidebar() {
  state.leftSidebarOpen = !state.leftSidebarOpen;
  if (state.leftSidebarOpen && window.innerWidth < 1024) {
    state.rightSidebarOpen = false;
  }
  applyThemeAndLayout();
  persistState();
}

function closeMobileSidebar() {
  state.leftSidebarOpen = false;
  applyThemeAndLayout();
}

function toggleRightSidebar() {
  state.rightSidebarOpen = !state.rightSidebarOpen;
  if (state.rightSidebarOpen && window.innerWidth < 1024) {
    state.leftSidebarOpen = false;
  }
  applyThemeAndLayout();
  if (state.rightSidebarOpen && state.appMode === 'workspace') {
    requestAnimationFrame(() => {
      resizeGraphCanvas();
      if (typeof ensureGraphLoopRunning === 'function') ensureGraphLoopRunning();
    });
  }
  persistState();
}

function openRightInspector(tab) {
  state.appMode = 'workspace';
  state.rightSidebarOpen = true;
  if (window.innerWidth < 1024) state.leftSidebarOpen = false;
  switchInspectorTab(tab);
  renderAll();
  requestAnimationFrame(() => {
    resizeGraphCanvas();
    if (typeof ensureGraphLoopRunning === 'function') ensureGraphLoopRunning();
  });
}

// =========================================================================
// 13. RIGHT CONTEXTUAL INSPECTOR: BACKLINKS, OUTLINE & GRAPH
// =========================================================================
function switchInspectorTab(tab) {
  state.inspectorTab = tab;
  ['graph', 'links', 'outline'].forEach(t => {
    const panel = document.getElementById(`inspectorTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const btn = document.getElementById(`tabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (t === tab) {
      panel.classList.remove('hidden');
      btn.classList.add('bg-[var(--bg-panel)]', 'text-[var(--text-primary)]', 'border-[var(--border-hairline)]');
      btn.classList.remove('text-[var(--text-secondary)]', 'border-transparent');
    } else {
      panel.classList.add('hidden');
      btn.classList.remove('bg-[var(--bg-panel)]', 'text-[var(--text-primary)]', 'border-[var(--border-hairline)]');
      btn.classList.add('text-[var(--text-secondary)]', 'border-transparent');
    }
  });
  if (tab === 'graph') {
    requestAnimationFrame(() => {
      resizeGraphCanvas();
      if (typeof ensureGraphLoopRunning === 'function') ensureGraphLoopRunning();
    });
  }
  persistState();
}

function renderInspector() {
  const activeNote = getActiveNote();
  if (!activeNote) return;
  const allLinks = computeVaultConnections();

  const incoming = [];
  const unlinked = [];
  const activeTitleLower = activeNote.title.toLowerCase().trim();

  state.notes.forEach(other => {
    if (other.id === activeNote.id) return;
    other.blocks.forEach(block => {
      const text = block.content || '';
      const explicitRegex = new RegExp(`\\[\\[${escapeRegExp(activeNote.title)}\\]\\]`, 'i');
      if (explicitRegex.test(text)) {
        incoming.push({ note: other, snippet: text });
      } else if (activeTitleLower.length > 3 && text.toLowerCase().includes(activeTitleLower)) {
        unlinked.push({ note: other, blockId: block.id, snippet: text });
      }
    });
  });

  document.getElementById('backlinkBadge').textContent = incoming.length;
  document.getElementById('linkedMentionsCount').textContent = incoming.length;
  document.getElementById('unlinkedMentionsCount').textContent = unlinked.length;

  const linkedListEl = document.getElementById('linkedMentionsList');
  linkedListEl.innerHTML = incoming.length > 0
    ? incoming.map(item => `
        <div onclick="selectNote('${item.note.id}')" data-note-id="${item.note.id}" class="p-2.5 rounded-[3px] bg-[var(--bg-canvas)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] hover:border-[var(--border-strong)] cursor-pointer transition-colors space-y-1">
          <div class="flex items-center gap-1.5 text-xs font-medium text-[var(--text-primary)]">
            <span class="text-[var(--accent-vermilion)]">${getGlyphSVG(item.note.glyph)}</span>
            <span class="truncate">${escapeHtml(item.note.title)}</span>
          </div>
          <p class="text-[11px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed">${escapeHtml(item.snippet)}</p>
        </div>
      `).join('')
    : `<div class="p-3 rounded-[3px] border border-dashed border-[var(--border-hairline)] text-center font-mono text-[10px] text-[var(--text-tertiary)]">NO INCOMING LINKS</div>`;

  const unlinkedListEl = document.getElementById('unlinkedMentionsList');
  unlinkedListEl.innerHTML = unlinked.length > 0
    ? unlinked.map(item => `
        <div class="p-2.5 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1.5">
          <div class="flex items-center justify-between gap-2">
            <span onclick="selectNote('${item.note.id}')" class="text-xs font-medium text-[var(--text-primary)] hover:underline cursor-pointer flex items-center gap-1.5 truncate">
              <span class="text-[var(--text-tertiary)]">${getGlyphSVG(item.note.glyph)}</span>${escapeHtml(item.note.title)}
            </span>
            <button onclick="convertUnlinkedMention('${item.note.id}', '${item.blockId}')" class="px-1.5 py-0.5 rounded-[2px] bg-[var(--accent-vermilion-tint)] hover:bg-[var(--accent-vermilion)] text-[var(--accent-vermilion)] hover:text-white font-mono text-[10px] transition-colors shrink-0">
              LINK
            </button>
          </div>
          <p class="text-[11px] text-[var(--text-tertiary)] line-clamp-2">${escapeHtml(item.snippet)}</p>
        </div>
      `).join('')
    : `<div class="font-mono text-[10px] text-[var(--text-tertiary)]">None detected</div>`;

  const connectedIds = new Set();
  allLinks.forEach(l => {
    if (l.source === activeNote.id) connectedIds.add(l.target);
    if (l.target === activeNote.id) connectedIds.add(l.source);
  });
  const quickLinksEl = document.getElementById('graphQuickLinks');
  const connectedNotes = state.notes.filter(n => connectedIds.has(n.id));
  
  let quickHTML = `
    <div class="flex items-center justify-between pb-1.5 border-b border-[var(--border-hairline)] mb-1.5">
      <span class="font-mono text-[10px] uppercase text-[var(--text-tertiary)] tracking-wider">Linked Notes (${connectedNotes.length})</span>
      <button onclick="openLinkNotePicker('${activeNote.id}')" title="Link another note by mouse" class="px-2 py-0.5 rounded-[2px] bg-[var(--accent-vermilion-tint)] hover:bg-[var(--accent-vermilion)] text-[var(--accent-vermilion)] hover:text-white font-mono text-[10px] transition-colors flex items-center gap-1 cursor-pointer">
        <span>+ Link Note</span>
      </button>
    </div>
  `;
  if (connectedNotes.length > 0) {
    quickHTML += connectedNotes.map(n => `
      <div class="group/adj flex items-center justify-between px-2 py-1 rounded-[3px] hover:bg-[var(--bg-hover)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
        <button onclick="selectNote('${n.id}')" data-note-id="${n.id}" class="flex-1 flex items-center gap-2 truncate text-left cursor-pointer">
          <span class="text-[var(--accent-ochre)]">${getGlyphSVG(n.glyph)}</span>
          <span class="truncate">${escapeHtml(n.title)}</span>
        </button>
        <div class="flex items-center gap-1 shrink-0">
          <button onclick="disconnectNotes('${activeNote.id}', '${n.id}')" title="Unlink (removes [[${escapeHtml(n.title)}]])" class="opacity-0 group-hover/adj:opacity-100 p-0.5 rounded-[2px] hover:bg-red-500/15 text-[var(--text-tertiary)] hover:text-red-500 transition-all cursor-pointer">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <span class="font-mono text-[10px] text-[var(--text-tertiary)]">→</span>
        </div>
      </div>
    `).join('');
  } else {
    quickHTML += `
      <div class="p-2.5 rounded-[3px] bg-[var(--bg-canvas)] border border-dashed border-[var(--border-hairline)] text-center space-y-1">
        <div class="font-mono text-[11px] text-[var(--text-tertiary)]">No linked notes yet.</div>
        <div class="text-[10px] text-[var(--text-tertiary)]">Drag between nodes on graph or click <button onclick="openLinkNotePicker('${activeNote.id}')" class="underline text-[var(--accent-vermilion)] cursor-pointer font-medium">+ Link Note</button></div>
      </div>
    `;
  }
  quickLinksEl.innerHTML = quickHTML;

  const edgeCountStr = `${allLinks.length} edges`;
  const edgeStatsEl = document.getElementById('graphEdgeStats');
  if (edgeStatsEl) edgeStatsEl.textContent = edgeCountStr;
  const expEdgeStatsEl = document.getElementById('expGraphEdgeStats');
  if (expEdgeStatsEl) expEdgeStatsEl.textContent = edgeCountStr;

  const headings = activeNote.blocks.filter(b => ['h1', 'h2', 'h3'].includes(b.type) && b.content.trim());
  const outlineEl = document.getElementById('outlineList');
  outlineEl.innerHTML = headings.length > 0
    ? headings.map(h => {
        const indent = h.type === 'h1' ? 'pl-1.5 font-medium text-[var(--text-primary)]' : h.type === 'h2' ? 'pl-3.5 text-[var(--text-secondary)]' : 'pl-6 font-mono text-[11px] text-[var(--text-tertiary)]';
        return `
          <button onclick="scrollToBlock('${h.id}')" class="w-full text-left py-1.5 px-2 rounded-[3px] hover:bg-[var(--bg-hover)] text-xs hover:text-[var(--text-primary)] truncate transition-colors ${indent}">
            ${escapeHtml(h.content.replace(/\[\[|\]\]/g, ''))}
          </button>
        `;
      }).join('')
    : `<div class="p-3 rounded-[3px] border border-dashed border-[var(--border-hairline)] text-center font-mono text-[10px] text-[var(--text-tertiary)]">ADD HEADINGS TO INDEX</div>`;

  syncGraphNodes();
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function convertUnlinkedMention(sourceNoteId, blockId) {
  const activeNote = getActiveNote();
  const sourceNote = state.notes.find(n => n.id === sourceNoteId);
  if (!sourceNote) return;
  const block = sourceNote.blocks.find(b => b.id === blockId);
  if (!block) return;
  const regex = new RegExp(`(${escapeRegExp(activeNote.title)})`, 'i');
  block.content = block.content.replace(regex, `[[${activeNote.title}]]`);
  renderInspector();
  persistState();
  showToast(`Linked reference in "${sourceNote.title}"`);
}

function scrollToBlock(blockId) {
  const el = document.querySelector(`[data-row-id="${blockId}"]`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('bg-[var(--accent-vermilion-tint)]');
    setTimeout(() => el.classList.remove('bg-[var(--accent-vermilion-tint)]'), 850);
  }
}

// =========================================================================
// 14. INTERACTIVE TOPOLOGY GRAPH & MOUSE CONNECTION ENGINE
// =========================================================================
let graphNodes = [];
let hoveredNode = null;
let draggedNode = null;
let dragMoved = false;
let dragStartPos = { x: 0, y: 0 };

// Pan & Zoom Engine State
let graphPan = { x: 0, y: 0 };
let graphZoom = 1.0;
let isPanning = false;
let panStart = { x: 0, y: 0 };

// Mouse Link & Connection Engine State
let graphToolMode = 'move'; // 'move' | 'connect'
let connectingSourceNode = null;
let connectingCurrentPos = { x: 0, y: 0, screenX: 0, screenY: 0 };
let connectingTargetNode = null;
let hoveredEdge = null;
let connectorHandleHovered = false;

// Expanded Fullscreen Studio State
let isExpandedGraphOpen = false;
let expandedGraphFilter = '';
let linkPickerSourceId = null;

// --- A. DATA LINKING ENGINE: "IT WORK LIKE I TYPE" ---
function connectNotes(sourceId, targetId, makeBidirectional = false, screenX = null, screenY = null) {
  if (!sourceId || !targetId || sourceId === targetId) return false;
  const sourceNote = state.notes.find(n => n.id === sourceId);
  const targetNote = state.notes.find(n => n.id === targetId);
  if (!sourceNote || !targetNote) return false;

  const targetTitleClean = targetNote.title.trim();
  const wikiRegex = new RegExp(`\\[\\[\\s*${escapeRegExp(targetTitleClean)}\\s*\\]\\]`, 'i');
  let alreadyLinked = sourceNote.blocks.some(b => wikiRegex.test(b.content || ''));

  let insertedInSource = false;
  if (!alreadyLinked) {
    // Natural Insertion: Append to last paragraph or create a new paragraph block
    if (sourceNote.blocks.length === 0) {
      sourceNote.blocks.push({ id: generateId('b'), type: 'paragraph', content: `[[${targetTitleClean}]]` });
      insertedInSource = true;
    } else {
      const lastBlock = sourceNote.blocks[sourceNote.blocks.length - 1];
      if (lastBlock && lastBlock.type === 'paragraph' && (!lastBlock.content || lastBlock.content.trim() === '')) {
        lastBlock.content = `[[${targetTitleClean}]]`;
        insertedInSource = true;
      } else if (lastBlock && lastBlock.type === 'paragraph' && lastBlock.content.length < 80 && !lastBlock.content.includes('\n')) {
        lastBlock.content = `${lastBlock.content.trimEnd()} [[${targetTitleClean}]]`;
        insertedInSource = true;
      } else {
        sourceNote.blocks.push({
          id: generateId('b'),
          type: 'paragraph',
          content: `Related: [[${targetTitleClean}]]`
        });
        insertedInSource = true;
      }
    }
    sourceNote.updatedAt = TODAY_KEY;
  }

  if (makeBidirectional) {
    const sourceTitleClean = sourceNote.title.trim();
    const reverseRegex = new RegExp(`\\[\\[\\s*${escapeRegExp(sourceTitleClean)}\\s*\\]\\]`, 'i');
    const targetAlreadyLinked = targetNote.blocks.some(b => reverseRegex.test(b.content || ''));
    if (!targetAlreadyLinked) {
      if (targetNote.blocks.length === 0) {
        targetNote.blocks.push({ id: generateId('b'), type: 'paragraph', content: `[[${sourceTitleClean}]]` });
      } else {
        const last = targetNote.blocks[targetNote.blocks.length - 1];
        if (last && last.type === 'paragraph' && (!last.content || last.content.trim() === '')) {
          last.content = `[[${sourceTitleClean}]]`;
        } else {
          targetNote.blocks.push({
            id: generateId('b'),
            type: 'paragraph',
            content: `Related: [[${sourceTitleClean}]]`
          });
        }
      }
      targetNote.updatedAt = TODAY_KEY;
    }
  }

  // If active note was updated, re-render blocks immediately so user sees the wikilink appear!
  const activeId = state.activeNoteId;
  if (activeId === sourceNote.id || activeId === targetNote.id) {
    renderBlocks(getActiveNote());
    updateWordCount(getActiveNote());
  }

  // Haptic Micro-audio & Visual Celebration
  playPopSound();
  playChimeSound();
  if (screenX != null && screenY != null) {
    triggerCelebration(screenX, screenY, 32);
  } else {
    triggerCelebration(window.innerWidth / 2, window.innerHeight / 2, 28);
  }

  if (alreadyLinked) {
    showToast(`Already linked: "${sourceNote.title}" & "${targetNote.title}"`);
  } else {
    showToast(`Linked "${sourceNote.title}" ↔ "${targetNote.title}" (inserted [[${targetTitleClean}]])`);
  }

  persistState();
  renderInspector();
  syncGraphNodes();
  reheatGraph();
  return true;
}

function disconnectNotes(sourceId, targetId) {
  const sourceNote = state.notes.find(n => n.id === sourceId);
  const targetNote = state.notes.find(n => n.id === targetId);
  if (!sourceNote || !targetNote) return false;

  const targetRegex = new RegExp(`\\[\\[\\s*${escapeRegExp(targetNote.title.trim())}\\s*\\]\\]`, 'gi');
  const sourceRegex = new RegExp(`\\[\\[\\s*${escapeRegExp(sourceNote.title.trim())}\\s*\\]\\]`, 'gi');

  let removedCount = 0;
  sourceNote.blocks.forEach(b => {
    if (b.content && targetRegex.test(b.content)) {
      b.content = b.content.replace(targetRegex, '').replace(/\bRelated:\s*$/i, '').trim();
      removedCount++;
    }
  });

  targetNote.blocks.forEach(b => {
    if (b.content && sourceRegex.test(b.content)) {
      b.content = b.content.replace(sourceRegex, '').replace(/\bRelated:\s*$/i, '').trim();
      removedCount++;
    }
  });

  const activeId = state.activeNoteId;
  if (activeId === sourceNote.id || activeId === targetNote.id) {
    renderBlocks(getActiveNote());
    updateWordCount(getActiveNote());
  }

  playMechanicalClick(0.75);
  showToast(`Unlinked "${sourceNote.title}" & "${targetNote.title}" (removed link)`);

  persistState();
  renderInspector();
  syncGraphNodes();
  reheatGraph();
  return true;
}

// --- B. GRAPH TOOL MODES & CONTROLS ---
function setGraphToolMode(mode) {
  graphToolMode = mode;
  const isMove = mode === 'move';
  
  const moveBtns = [document.getElementById('graphToolMoveBtn'), document.getElementById('expGraphToolMoveBtn')];
  const linkBtns = [document.getElementById('graphToolConnectBtn'), document.getElementById('expGraphToolConnectBtn')];

  moveBtns.forEach(b => {
    if (!b) return;
    b.className = isMove
      ? 'px-2 py-0.5 rounded-[2px] font-mono text-[10px] flex items-center gap-1 transition-all bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold shadow-xs cursor-pointer'
      : 'px-2 py-0.5 rounded-[2px] font-mono text-[10px] flex items-center gap-1 transition-all text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer';
  });

  linkBtns.forEach(b => {
    if (!b) return;
    b.className = !isMove
      ? 'px-2 py-0.5 rounded-[2px] font-mono text-[10px] flex items-center gap-1 transition-all bg-[var(--accent-vermilion)] text-white font-semibold shadow-xs cursor-pointer'
      : 'px-2 py-0.5 rounded-[2px] font-mono text-[10px] flex items-center gap-1 transition-all text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer';
  });

  if (mode === 'connect') {
    showToast('Link Mode: Drag or click between notes to create [[links]]');
  }
}

function toggleGraphToolMode() {
  setGraphToolMode(graphToolMode === 'connect' ? 'move' : 'connect');
}

function toggleGraphScope() {
  state.graphLocalOnly = !state.graphLocalOnly;
  const label = state.graphLocalOnly ? 'Local' : 'Global';
  const b1 = document.getElementById('graphScopeBtn');
  if (b1) b1.textContent = label;
  const b2 = document.getElementById('expGraphScopeBtn');
  if (b2) b2.textContent = label;
  syncGraphNodes();
  reheatGraph();
  showToast(`Graph Scope: ${label} View`);
}

function fitGraphView() {
  graphPan = { x: 0, y: 0 };
  graphZoom = 1.0;
  updateGraphZoomBadges();
  reheatGraph();
}

function zoomGraphStep(delta) {
  graphZoom = Math.min(2.8, Math.max(0.35, graphZoom + delta));
  updateGraphZoomBadges();
}

function updateGraphZoomBadges() {
  const pct = `${Math.round(graphZoom * 100)}%`;
  const b1 = document.getElementById('graphZoomBadge');
  if (b1) b1.textContent = pct;
  const b2 = document.getElementById('expGraphZoomBadge');
  if (b2) b2.textContent = pct;
}

function startConnectionFromNode(node) {
  connectingSourceNode = node;
  connectingCurrentPos = { x: node.x, y: node.y, screenX: window.innerWidth / 2, screenY: window.innerHeight / 2 };
  connectingTargetNode = null;
  showGraphConnectionHUD(node.title);
  playMechanicalClick(1.0);
}

function cancelGraphConnection() {
  connectingSourceNode = null;
  connectingTargetNode = null;
  hideGraphConnectionHUD();
  playMechanicalClick(0.7);
}

function showGraphConnectionHUD(sourceTitle) {
  const msg = `Connecting from "${sourceTitle}" · Click or drag to target note`;
  const hud1 = document.getElementById('graphCanvasHUD');
  const text1 = document.getElementById('graphCanvasHUDText');
  if (hud1 && text1) {
    text1.textContent = msg;
    hud1.classList.remove('hidden');
  }
  const hud2 = document.getElementById('expGraphHUD');
  const text2 = document.getElementById('expGraphHUDText');
  if (hud2 && text2) {
    text2.textContent = msg;
    hud2.classList.remove('hidden');
  }
}

function hideGraphConnectionHUD() {
  const hud1 = document.getElementById('graphCanvasHUD');
  if (hud1) hud1.classList.add('hidden');
  const hud2 = document.getElementById('expGraphHUD');
  if (hud2) hud2.classList.add('hidden');
}

// --- C. LINK NOTE FAST PICKER MODAL ---
function openLinkNotePicker(sourceId) {
  linkPickerSourceId = sourceId || state.activeNoteId;
  const sourceNote = state.notes.find(n => n.id === linkPickerSourceId);
  const sub = document.getElementById('linkNotePickerSubtitle');
  if (sub && sourceNote) {
    sub.textContent = `Insert [[wikilink]] into "${sourceNote.title}"`;
  }
  const modal = document.getElementById('linkNotePickerModal');
  if (modal) {
    modal.classList.remove('hidden');
    const input = document.getElementById('linkNotePickerSearch');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 60);
    }
    renderLinkNotePickerResults('');
  }
}

function closeLinkNotePicker() {
  const modal = document.getElementById('linkNotePickerModal');
  if (modal) modal.classList.add('hidden');
  linkPickerSourceId = null;
}

function filterLinkNotePicker(query) {
  renderLinkNotePickerResults(query);
}

function renderLinkNotePickerResults(query) {
  const resEl = document.getElementById('linkNotePickerResults');
  if (!resEl) return;
  const q = (query || '').toLowerCase().trim();
  const sourceNote = state.notes.find(n => n.id === linkPickerSourceId);
  if (!sourceNote) return;

  const allLinks = computeVaultConnections();
  const connectedTargets = new Set();
  allLinks.forEach(l => {
    if (l.source === sourceNote.id) connectedTargets.add(l.target);
    if (l.target === sourceNote.id) connectedTargets.add(l.source);
  });

  const candidates = state.notes.filter(n => n.id !== sourceNote.id && (!q || n.title.toLowerCase().includes(q)));

  if (candidates.length === 0) {
    resEl.innerHTML = `<div class="p-4 text-center font-mono text-xs text-[var(--text-tertiary)]">No matching documents found.</div>`;
    return;
  }

  resEl.innerHTML = candidates.map(n => {
    const isLinked = connectedTargets.has(n.id);
    return `
      <div class="flex items-center justify-between p-2 rounded-[3px] hover:bg-[var(--bg-hover)] text-xs transition-colors">
        <div class="flex items-center gap-2 truncate pr-2">
          <span class="text-[var(--accent-ochre)]">${getGlyphSVG(n.glyph)}</span>
          <span class="font-medium text-[var(--text-primary)] truncate">${escapeHtml(n.title)}</span>
          <span class="font-mono text-[9px] text-[var(--text-tertiary)]">${escapeHtml(n.folder || 'General')}</span>
        </div>
        <div class="shrink-0 flex items-center gap-1.5">
          ${isLinked ? `
            <span class="font-mono text-[10px] text-emerald-500 font-semibold px-1.5 py-0.5 rounded-[2px] bg-emerald-500/10">✓ Linked</span>
            <button onclick="disconnectNotes('${sourceNote.id}', '${n.id}'); renderLinkNotePickerResults('${escapeHtml(q)}');" title="Unlink" class="px-1.5 py-0.5 rounded-[2px] hover:bg-red-500/15 text-red-500 font-mono text-[10px] cursor-pointer">Unlink</button>
          ` : `
            <button onclick="connectNotes('${sourceNote.id}', '${n.id}', false); closeLinkNotePicker();" class="px-2.5 py-1 rounded-[2px] bg-[var(--accent-vermilion)] hover:bg-[var(--accent-vermilion-hover)] text-white font-mono text-[10px] font-semibold transition-colors cursor-pointer flex items-center gap-1">
              <span>+ Link</span>
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

// --- D. EXPANDED FULLSCREEN GRAPH STUDIO ---
function openExpandedGraphModal() {
  isExpandedGraphOpen = true;
  const modal = document.getElementById('expandedGraphModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  resizeExpandedGraphCanvas();
  fitGraphView();
  setGraphToolMode(graphToolMode);
  if (typeof ensureGraphLoopRunning === 'function') ensureGraphLoopRunning();
  playWhooshSound();
}

function closeExpandedGraphModal() {
  isExpandedGraphOpen = false;
  const modal = document.getElementById('expandedGraphModal');
  if (modal) modal.classList.add('hidden');
  cancelGraphConnection();
}

function handleExpandedGraphSearch(query) {
  expandedGraphFilter = (query || '').toLowerCase().trim();
}

function centerNodeInView(node) {
  const canvas = document.getElementById('knowledgeGraphCanvas');
  if (!canvas || !node) return;
  const w = canvas.clientWidth || 300;
  const h = canvas.clientHeight || 280;
  graphPan.x = (w / 2) - (node.x * graphZoom);
  graphPan.y = (h / 2) - (node.y * graphZoom);
  updateGraphZoomBadges();
  showToast(`Centered on "${node.title}"`);
}

// --- E. FORCE-DIRECTED PHYSICS & NODE COORDINATES ---
function syncGraphNodes() {
  const canvas = document.getElementById('knowledgeGraphCanvas');
  const w = canvas ? (canvas.clientWidth || 300) : 300;
  const h = canvas ? (canvas.clientHeight || 280) : 280;

  const allLinks = computeVaultConnections();
  let visibleNotes = state.notes;

  if (state.graphLocalOnly) {
    const neighborIds = new Set([state.activeNoteId]);
    allLinks.forEach(l => {
      if (l.source === state.activeNoteId) neighborIds.add(l.target);
      if (l.target === state.activeNoteId) neighborIds.add(l.source);
    });
    visibleNotes = state.notes.filter(n => neighborIds.has(n.id));
  }

  const existingMap = new Map(graphNodes.map(n => [n.id, n]));
  graphNodes = visibleNotes.map((note, idx) => {
    const prev = existingMap.get(note.id);
    const angle = (idx / Math.max(1, visibleNotes.length)) * Math.PI * 2;
    return {
      id: note.id,
      title: note.title,
      x: prev ? prev.x : w / 2 + Math.cos(angle) * 78,
      y: prev ? prev.y : h / 2 + Math.sin(angle) * 78,
      vx: prev ? prev.vx : 0,
      vy: prev ? prev.vy : 0,
    };
  });
}

function reheatGraph() {
  const canvas = document.getElementById('knowledgeGraphCanvas');
  const w = canvas ? (canvas.clientWidth || 300) : 300;
  const h = canvas ? (canvas.clientHeight || 280) : 280;
  graphNodes.forEach((n, idx) => {
    const angle = (idx / Math.max(1, graphNodes.length)) * Math.PI * 2;
    n.vx += Math.cos(angle) * 2.4;
    n.vy += Math.sin(angle) * 2.4;
    if (n.id === state.activeNoteId) {
      n.x = (w / 2);
      n.y = (h / 2);
    }
  });
}

function resizeGraphCanvas() {
  const wrapper = document.getElementById('graphCanvasWrapper');
  const canvas = document.getElementById('knowledgeGraphCanvas');
  if (!wrapper || !canvas) return;
  const dpr = window.PK_LITE_MODE ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  const rect = wrapper.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function resizeExpandedGraphCanvas() {
  const wrapper = document.getElementById('expandedGraphCanvasWrapper');
  const canvas = document.getElementById('expandedKnowledgeGraphCanvas');
  if (!wrapper || !canvas) return;
  const dpr = window.PK_LITE_MODE ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  const rect = wrapper.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

// --- F. MOUSE & POINTER INTERACTION CONTROLLER ---
function getGraphPointerPos(canvas, e) {
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
  const canvasX = clientX - rect.left;
  const canvasY = clientY - rect.top;
  return {
    x: (canvasX - graphPan.x) / graphZoom,
    y: (canvasY - graphPan.y) / graphZoom,
    canvasX,
    canvasY,
    screenX: clientX,
    screenY: clientY
  };
}

function findNodeAt(pos) {
  for (let i = graphNodes.length - 1; i >= 0; i--) {
    const n = graphNodes[i];
    const dx = pos.x - n.x;
    const dy = pos.y - n.y;
    const hitRadius = (n.id === state.activeNoteId ? 16 : 14);
    if (dx * dx + dy * dy <= hitRadius * hitRadius) return n;
  }
  return null;
}

function findConnectorHandleAt(pos, node) {
  if (!node) return false;
  const hx = node.x + 18;
  const hy = node.y;
  const dx = pos.x - hx;
  const dy = pos.y - hy;
  return (dx * dx + dy * dy <= 81); // 9px radius
}

function distToSegment(p, v, w) {
  const l2 = (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
  if (l2 === 0) return Math.hypot(p.x - v.x, p.y - v.y);
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p.x - (v.x + t * (w.x - v.x)), p.y - (v.y + t * (w.y - v.y)));
}

function findEdgeAt(pos, edges, nodeMap) {
  for (const e of edges) {
    const s = nodeMap.get(e.source);
    const t = nodeMap.get(e.target);
    if (!s || !t) continue;
    const dist = distToSegment(pos, s, t);
    if (dist <= 7 / graphZoom) {
      return { edge: e, source: s, target: t };
    }
  }
  return null;
}

// --- GRAPH NODE HOVER CARD & CANVAS NOTE CREATOR ---
let graphHoverCardTimer = null;
let canvasCreateCoords = { gx: 0, gy: 0 };
let isCuttingGesture = false;
let cutStart = null;
let cutCurrent = null;

function showGraphNodeHoverCard(canvas, node, canvasX, canvasY) {
  clearTimeout(graphHoverCardTimer);
  const card = document.getElementById('graphNodeHoverCard');
  if (!card || !node) return;

  const rect = canvas.getBoundingClientRect();
  const cardW = 280;
  let left = canvasX + 16;
  if (left + cardW > rect.width - 12) {
    left = canvasX - cardW - 16;
  }
  let top = canvasY - 20;
  if (top + 130 > rect.height) {
    top = Math.max(12, rect.height - 140);
  }
  card.style.left = `${Math.max(10, left)}px`;
  card.style.top = `${Math.max(10, top)}px`;

  const note = state.notes.find(n => n.id === node.id);
  if (!note) return;

  const glyphEl = document.getElementById('graphNodeCardGlyph');
  const titleEl = document.getElementById('graphNodeCardTitle');
  const folderEl = document.getElementById('graphNodeCardFolder');
  const snippetEl = document.getElementById('graphNodeCardSnippet');
  const statsEl = document.getElementById('graphNodeCardStats');
  const openBtn = document.getElementById('graphNodeCardOpenBtn');
  const linkBtn = document.getElementById('graphNodeCardLinkBtn');

  if (glyphEl) glyphEl.innerHTML = getGlyphSVG(note.glyph);
  if (titleEl) titleEl.textContent = note.title;
  if (folderEl) folderEl.textContent = note.folder || 'General';

  const allLinks = computeVaultConnections();
  const inCount = allLinks.filter(l => l.target === note.id).length;
  const outCount = allLinks.filter(l => l.source === note.id).length;
  if (statsEl) statsEl.textContent = `${inCount} incoming · ${outCount} outgoing`;

  const textSnippets = (note.blocks || [])
    .map(b => (b.content || '').replace(/\[\[|\]\]/g, ''))
    .filter(Boolean)
    .join(' · ');
  if (snippetEl) {
    snippetEl.textContent = textSnippets ? (textSnippets.slice(0, 110) + (textSnippets.length > 110 ? '…' : '')) : 'Empty document.';
  }

  if (openBtn) {
    openBtn.onclick = () => { hideGraphNodeHoverCard(); selectNote(note.id); };
  }
  if (linkBtn) {
    linkBtn.onclick = () => {
      hideGraphNodeHoverCard();
      connectNotes(state.activeNoteId, note.id);
    };
  }

  card.classList.remove('hidden');
}

function hideGraphNodeHoverCard() {
  clearTimeout(graphHoverCardTimer);
  const card = document.getElementById('graphNodeHoverCard');
  if (card) card.classList.add('hidden');
}

function promptCreateNoteAtCanvas(gx, gy, screenX, screenY) {
  canvasCreateCoords = { gx, gy, screenX, screenY };
  const modal = document.getElementById('canvasCreateNoteModal');
  const input = document.getElementById('canvasCreateNoteTitle');
  if (modal && input) {
    input.value = '';
    modal.classList.remove('hidden');
    setTimeout(() => input.focus(), 60);
  }
}

function closeCanvasCreateNoteModal() {
  const modal = document.getElementById('canvasCreateNoteModal');
  if (modal) modal.classList.add('hidden');
}

function confirmCanvasCreateNote() {
  const input = document.getElementById('canvasCreateNoteTitle');
  const autoLinkCheckbox = document.getElementById('canvasCreateNoteAutoLink');
  const title = (input?.value || '').trim() || 'Untitled Note';

  const nextNum = String(state.notes.length + 1).padStart(2, '0');
  const newNote = {
    id: generateId('note'),
    code: `DOC-${nextNum}`,
    title: title,
    glyph: 'document',
    folder: 'General',
    favorite: false,
    tags: [],
    updatedAt: TODAY_KEY,
    blocks: [
      { id: generateId('b'), type: 'paragraph', content: '' }
    ]
  };

  state.notes.unshift(newNote);

  // Auto-link with active note if checked
  const activeNote = getActiveNote();
  if (autoLinkCheckbox && autoLinkCheckbox.checked && activeNote && activeNote.id !== newNote.id) {
    connectNotes(activeNote.id, newNote.id, false);
  }

  closeCanvasCreateNoteModal();
  persistState();
  renderAll();
  selectNote(newNote.id);

  // Position the node at the double-clicked canvas coordinates
  setTimeout(() => {
    const found = graphNodes.find(n => n.id === newNote.id);
    if (found) {
      found.x = canvasCreateCoords.gx;
      found.y = canvasCreateCoords.gy;
    }
    reheatGraph();
  }, 50);

  playPopSound();
  triggerCelebration(canvasCreateCoords.screenX || window.innerWidth / 2, canvasCreateCoords.screenY || window.innerHeight / 2, 34);
  showToast(`Created & Placed "${newNote.title}" on Graph!`);
}

// Geometry helper: do two line segments intersect?
function linesIntersect(p1, p2, p3, p4) {
  function ccw(A, B, C) {
    return (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x);
  }
  return ccw(p1, p3, p4) !== ccw(p2, p3, p4) && ccw(p1, p2, p3) !== ccw(p1, p2, p4);
}

function setupCanvasInteractions(canvas, isExpanded = false) {
  if (!canvas) return;

  // Double-click empty space creates note at that spot!
  canvas.addEventListener('dblclick', e => {
    const pos = getGraphPointerPos(canvas, e);
    const hit = findNodeAt(pos);
    if (!hit) {
      promptCreateNoteAtCanvas(pos.x, pos.y, pos.screenX, pos.screenY);
    }
  });

  canvas.addEventListener('pointerdown', e => {
    if (e.button === 2) return; // Right click handled by context menu

    const pos = getGraphPointerPos(canvas, e);
    const allLinks = computeVaultConnections();
    const nodeMap = new Map(graphNodes.map(n => [n.id, n]));

    // Check if Laser Slicing Gesture (Holding Alt or D key while dragging)
    if (e.altKey) {
      isCuttingGesture = true;
      cutStart = { x: pos.x, y: pos.y };
      cutCurrent = { x: pos.x, y: pos.y };
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = 'crosshair';
      return;
    }

    // Check if middle click: pan mode
    if (e.button === 1) {
      isPanning = true;
      panStart = { x: pos.screenX - graphPan.x, y: pos.screenY - graphPan.y };
      canvas.setPointerCapture(e.pointerId);
      return;
    }

    // Check if clicking connector handle on hovered node
    if (hoveredNode && findConnectorHandleAt(pos, hoveredNode)) {
      hideGraphNodeHoverCard();
      startConnectionFromNode(hoveredNode);
      canvas.setPointerCapture(e.pointerId);
      return;
    }

    const hit = findNodeAt(pos);
    if (hit) {
      hideGraphNodeHoverCard();
      // If in connect mode or holding Shift: start connection wire!
      if (graphToolMode === 'connect' || e.shiftKey) {
        startConnectionFromNode(hit);
        canvas.setPointerCapture(e.pointerId);
        return;
      }

      // Otherwise normal drag node
      draggedNode = hit;
      dragMoved = false;
      dragStartPos = { x: pos.x, y: pos.y };
      canvas.setPointerCapture(e.pointerId);
      return;
    }

    // Check if clicked an edge to unlink
    const hitEdge = findEdgeAt(pos, allLinks, nodeMap);
    if (hitEdge) {
      disconnectNotes(hitEdge.edge.source, hitEdge.edge.target);
      return;
    }

    // Dragging empty space pans canvas
    hideGraphNodeHoverCard();
    isPanning = true;
    panStart = { x: pos.screenX - graphPan.x, y: pos.screenY - graphPan.y };
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener('pointermove', e => {
    const pos = getGraphPointerPos(canvas, e);
    const allLinks = computeVaultConnections();
    const nodeMap = new Map(graphNodes.map(n => [n.id, n]));

    // Laser Slicing Gesture
    if (isCuttingGesture && cutStart) {
      cutCurrent = { x: pos.x, y: pos.y };
      canvas.style.cursor = 'crosshair';
      return;
    }

    if (isPanning) {
      graphPan.x = pos.screenX - panStart.x;
      graphPan.y = pos.screenY - panStart.y;
      canvas.style.cursor = 'grabbing';
      return;
    }

    if (connectingSourceNode) {
      connectingCurrentPos = { x: pos.x, y: pos.y, screenX: pos.screenX, screenY: pos.screenY };
      const candidate = findNodeAt(pos);
      connectingTargetNode = (candidate && candidate.id !== connectingSourceNode.id) ? candidate : null;
      canvas.style.cursor = connectingTargetNode ? 'copy' : 'crosshair';
      return;
    }

    if (draggedNode) {
      const distMoved = Math.hypot(pos.x - dragStartPos.x, pos.y - dragStartPos.y);
      if (distMoved > 3) dragMoved = true;
      draggedNode.x = pos.x;
      draggedNode.y = pos.y;
      draggedNode.vx = 0;
      draggedNode.vy = 0;
      return;
    }

    // Idle hover
    const prevHovered = hoveredNode;
    hoveredNode = findNodeAt(pos);
    connectorHandleHovered = hoveredNode ? findConnectorHandleAt(pos, hoveredNode) : false;
    hoveredEdge = !hoveredNode ? findEdgeAt(pos, allLinks, nodeMap) : null;

    if (hoveredNode && hoveredNode !== prevHovered && !connectingSourceNode && !draggedNode) {
      clearTimeout(graphHoverCardTimer);
      graphHoverCardTimer = setTimeout(() => {
        if (hoveredNode && !connectingSourceNode && !draggedNode) {
          showGraphNodeHoverCard(canvas, hoveredNode, pos.canvasX, pos.canvasY);
        }
      }, 240);
    } else if (!hoveredNode) {
      hideGraphNodeHoverCard();
    }

    if (connectorHandleHovered) {
      canvas.style.cursor = 'crosshair';
    } else if (hoveredNode) {
      canvas.style.cursor = (graphToolMode === 'connect') ? 'crosshair' : 'pointer';
    } else if (hoveredEdge) {
      canvas.style.cursor = 'pointer';
    } else {
      canvas.style.cursor = 'grab';
    }
  });

  canvas.addEventListener('pointerup', e => {
    const pos = getGraphPointerPos(canvas, e);

    // Finish Laser Slicing Gesture
    if (isCuttingGesture && cutStart && cutCurrent) {
      const allLinks = computeVaultConnections();
      const nodeMap = new Map(graphNodes.map(n => [n.id, n]));
      let slicedCount = 0;

      allLinks.forEach(edge => {
        const s = nodeMap.get(edge.source);
        const t = nodeMap.get(edge.target);
        if (s && t && linesIntersect(cutStart, cutCurrent, s, t)) {
          disconnectNotes(edge.source, edge.target);
          slicedCount++;
        }
      });

      if (slicedCount > 0) {
        playMechanicalClick(1.25);
        showToast(`Sliced & unlinked ${slicedCount} connection(s)`);
      }
      isCuttingGesture = false;
      cutStart = null;
      cutCurrent = null;
      canvas.style.cursor = 'grab';
      return;
    }

    if (isPanning) {
      isPanning = false;
      canvas.style.cursor = 'grab';
    }

    if (connectingSourceNode) {
      if (connectingTargetNode && connectingTargetNode.id !== connectingSourceNode.id) {
        connectNotes(connectingSourceNode.id, connectingTargetNode.id, false, pos.screenX, pos.screenY);
      } else {
        playMechanicalClick(0.85);
      }
      cancelGraphConnection();
      return;
    }

    if (draggedNode) {
      if (!dragMoved) {
        selectNote(draggedNode.id);
      }
      draggedNode = null;
    }
  });

  // Mouse Wheel Zoom
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    hideGraphNodeHoverCard();
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const zoomDelta = e.deltaY < 0 ? 1.12 : 0.89;
    const newZoom = Math.min(2.8, Math.max(0.35, graphZoom * zoomDelta));
    
    graphPan.x = mouseX - (mouseX - graphPan.x) * (newZoom / graphZoom);
    graphPan.y = mouseY - (mouseY - graphPan.y) * (newZoom / graphZoom);
    graphZoom = newZoom;
    updateGraphZoomBadges();
  }, { passive: false });
}

function initGraphInteractions() {
  const canvasSidebar = document.getElementById('knowledgeGraphCanvas');
  if (canvasSidebar) setupCanvasInteractions(canvasSidebar, false);

  const canvasExpanded = document.getElementById('expandedKnowledgeGraphCanvas');
  if (canvasExpanded) setupCanvasInteractions(canvasExpanded, true);

  window.addEventListener('resize', () => {
    resizeGraphCanvas();
    if (isExpandedGraphOpen) resizeExpandedGraphCanvas();
    applyThemeAndLayout();
  });

  // Escape key to cancel connection or close expanded graph
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      hideGraphNodeHoverCard();
      hideWikiLinkPreview();
      if (connectingSourceNode) {
        cancelGraphConnection();
      } else if (isExpandedGraphOpen) {
        closeExpandedGraphModal();
      } else if (linkPickerSourceId) {
        closeLinkNotePicker();
      }
    }
  });
}

// --- G. RENDER GRAPH WITH DEGREE SCALING, DIRECTIONAL ARROWS & LASER SLICE ---
function drawGraphOnCanvas(canvas, isExpanded = false) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (w <= 0 || h <= 0) return;

  const allLinks = computeVaultConnections();
  const nodeMap = new Map(graphNodes.map(n => [n.id, n]));
  const activeEdges = allLinks.filter(l => nodeMap.has(l.source) && nodeMap.has(l.target));

  ctx.save();
  ctx.clearRect(0, 0, w, h);

  // Apply Pan & Zoom Transform
  ctx.translate(graphPan.x, graphPan.y);
  ctx.scale(graphZoom, graphZoom);

  const isDark = state.theme === 'dark';

  // 1. Archival Coordinate Grid Lines
  ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.035)' : 'rgba(24,24,23,0.045)';
  ctx.lineWidth = 1 / graphZoom;
  const startX = -graphPan.x / graphZoom - 40;
  const endX = (w - graphPan.x) / graphZoom + 40;
  const startY = -graphPan.y / graphZoom - 40;
  const endY = (h - graphPan.y) / graphZoom + 40;

  for (let gx = Math.floor(startX / 24) * 24; gx < endX; gx += 24) {
    ctx.beginPath();
    ctx.moveTo(gx, startY);
    ctx.lineTo(gx, endY);
    ctx.stroke();
  }
  for (let gy = Math.floor(startY / 24) * 24; gy < endY; gy += 24) {
    ctx.beginPath();
    ctx.moveTo(startX, gy);
    ctx.lineTo(endX, gy);
    ctx.stroke();
  }

  // 2. Focused & Neighbor Node Sets
  const focusId = hoveredNode ? hoveredNode.id : state.activeNoteId;
  const neighborSet = new Set([focusId]);
  activeEdges.forEach(e => {
    if (e.source === focusId) neighborSet.add(e.target);
    if (e.target === focusId) neighborSet.add(e.source);
  });

  // 3. Render Topology Edges with Directional Arrows & Energy Pulses
  const now = performance.now();
  activeEdges.forEach(edge => {
    const s = nodeMap.get(edge.source);
    const t = nodeMap.get(edge.target);
    if (!s || !t) return;

    const isHighlighted = edge.source === focusId || edge.target === focusId;
    const isHovered = hoveredEdge && hoveredEdge.edge === edge;

    // Base Line
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(t.x, t.y);

    if (isHovered) {
      ctx.strokeStyle = '#EF4444'; // Red hover for unlink cue
      ctx.lineWidth = 3.2 / graphZoom;
    } else if (isHighlighted) {
      ctx.strokeStyle = isDark ? '#D95338' : '#C8462B';
      ctx.lineWidth = 1.8 / graphZoom;
    } else {
      ctx.strokeStyle = isDark ? '#383838' : '#D0CDC5';
      ctx.lineWidth = 1.1 / graphZoom;
    }
    ctx.stroke();

    // Directional Arrowheads (Point from source -> target reference)
    const dx = t.x - s.x;
    const dy = t.y - s.y;
    const dist = Math.hypot(dx, dy) || 1;
    const ux = dx / dist;
    const uy = dy / dist;
    const arrowDist = 0.58;
    const ax = s.x + dx * arrowDist;
    const ay = s.y + dy * arrowDist;
    const arrowSize = (isHighlighted ? 4.5 : 3.5) / graphZoom;

    ctx.beginPath();
    ctx.moveTo(ax + ux * arrowSize, ay + uy * arrowSize);
    ctx.lineTo(ax - uy * (arrowSize * 0.75) - ux * arrowSize, ay + ux * (arrowSize * 0.75) - uy * arrowSize);
    ctx.lineTo(ax + uy * (arrowSize * 0.75) - ux * arrowSize, ay - ux * (arrowSize * 0.75) - uy * arrowSize);
    ctx.closePath();
    ctx.fillStyle = isHovered ? '#EF4444' : (isHighlighted ? (isDark ? '#D95338' : '#C8462B') : (isDark ? '#5A5A55' : '#AAA79E'));
    ctx.fill();

    // Subtle Living Energy Pulse (Particle moving along edge)
    if (isHighlighted) {
      const pulseOffset = ((now * 0.0006) % 1);
      const px = s.x + dx * pulseOffset;
      const py = s.y + dy * pulseOffset;
      ctx.beginPath();
      ctx.arc(px, py, 2 / graphZoom, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#F59E0B' : '#D97706';
      ctx.fill();
    }

    // If edge is hovered, render scissors unlink badge at midpoint
    if (isHovered) {
      const midX = (s.x + t.x) / 2;
      const midY = (s.y + t.y) / 2;
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.arc(midX, midY, 7 / graphZoom, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = `bold ${9 / graphZoom}px sans-serif`;
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✂', midX, midY);
    }
  });

  // 4. Render Active Live Connection Wire
  if (connectingSourceNode) {
    const s = { x: connectingSourceNode.x, y: connectingSourceNode.y };
    const t = connectingTargetNode
      ? { x: connectingTargetNode.x, y: connectingTargetNode.y }
      : connectingCurrentPos;

    ctx.beginPath();
    const cpX1 = s.x + (t.x - s.x) * 0.45;
    const cpX2 = s.x + (t.x - s.x) * 0.55;
    ctx.moveTo(s.x, s.y);
    ctx.bezierCurveTo(cpX1, s.y, cpX2, t.y, t.x, t.y);
    ctx.strokeStyle = connectingTargetNode ? 'rgba(16, 185, 129, 0.4)' : 'rgba(217, 83, 56, 0.35)';
    ctx.lineWidth = 6 / graphZoom;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.bezierCurveTo(cpX1, s.y, cpX2, t.y, t.x, t.y);
    ctx.strokeStyle = connectingTargetNode ? '#10B981' : '#D95338';
    ctx.lineWidth = 2.4 / graphZoom;
    ctx.setLineDash([8 / graphZoom, 5 / graphZoom]);
    ctx.lineDashOffset = -performance.now() * 0.035;
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.arc(t.x, t.y, (connectingTargetNode ? 7 : 4) / graphZoom, 0, Math.PI * 2);
    ctx.fillStyle = connectingTargetNode ? '#10B981' : '#D95338';
    ctx.fill();

    if (connectingTargetNode) {
      ctx.beginPath();
      ctx.arc(t.x, t.y, 22 / graphZoom, 0, Math.PI * 2);
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 2 / graphZoom;
      ctx.stroke();

      const badgeText = `Link with [[${connectingTargetNode.title}]]`;
      ctx.font = `600 ${11 / graphZoom}px "JetBrains Mono", monospace`;
      ctx.textAlign = 'center';
      const textW = ctx.measureText(badgeText).width;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
      ctx.fillRect(t.x - textW / 2 - 8, t.y - 28 / graphZoom, textW + 16, 20 / graphZoom);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(badgeText, t.x, t.y - 14 / graphZoom);
    }
  }

  // 5. Render Laser Slicing Cut Line (If cutting gesture active)
  if (isCuttingGesture && cutStart && cutCurrent) {
    ctx.beginPath();
    ctx.moveTo(cutStart.x, cutStart.y);
    ctx.lineTo(cutCurrent.x, cutCurrent.y);
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
    ctx.lineWidth = 8 / graphZoom;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cutStart.x, cutStart.y);
    ctx.lineTo(cutCurrent.x, cutCurrent.y);
    ctx.strokeStyle = '#EF4444';
    ctx.lineWidth = 2.5 / graphZoom;
    ctx.stroke();

    // Laser Tip Glow
    ctx.beginPath();
    ctx.arc(cutCurrent.x, cutCurrent.y, 5 / graphZoom, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
  }

  // 6. Render Nodes with Dynamic Degree Sizing & Hub Auras
  graphNodes.forEach(n => {
    const isActive = n.id === state.activeNoteId;
    const isHovered = hoveredNode && hoveredNode.id === n.id;
    const isNeighbor = neighborSet.has(n.id);
    const isConnectingSource = connectingSourceNode && connectingSourceNode.id === n.id;
    const isConnectingTarget = connectingTargetNode && connectingTargetNode.id === n.id;
    
    const isSearchMatch = expandedGraphFilter ? n.title.toLowerCase().includes(expandedGraphFilter) : true;
    const nodeOpacity = isSearchMatch ? 1 : 0.2;

    // Degree Centrality: Scale radius with number of connections
    const connectionCount = activeEdges.filter(e => e.source === n.id || e.target === n.id).length;
    const dynamicBonus = Math.min(6.5, connectionCount * 1.3);
    const baseRadius = isActive ? 6.5 : (isHovered ? 6 : 4.5);
    const radius = (baseRadius + dynamicBonus) / (graphZoom > 1.4 ? 1.15 : 1);

    ctx.save();
    ctx.globalAlpha = nodeOpacity;

    // Hub Aura Rings for central notes (3+ connections)
    if (connectionCount >= 3) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius + (6 / graphZoom), 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.28)' : 'rgba(217, 119, 6, 0.22)';
      ctx.lineWidth = 1 / graphZoom;
      ctx.stroke();
    }

    // Active / Hover Aura Halo
    if (isActive || isHovered || isConnectingSource || isConnectingTarget) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius + (5 / graphZoom), 0, Math.PI * 2);
      ctx.strokeStyle = isConnectingTarget ? '#10B981' : (isActive || isConnectingSource ? '#D95338' : '#C49A45');
      ctx.lineWidth = 1.6 / graphZoom;
      ctx.stroke();
    }

    // Main Node Circle
    ctx.beginPath();
    ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = isActive || isConnectingSource
      ? (isDark ? '#D95338' : '#C8462B')
      : isConnectingTarget
        ? '#10B981'
        : isNeighbor
          ? (isDark ? '#C49A45' : '#A87E2D')
          : (isDark ? '#5C5C58' : '#96948E');
    ctx.fill();

    // 7. Connector Ring & "+" Handle on Hovered Node
    if (isHovered && !connectingSourceNode && !isCuttingGesture) {
      const hx = n.x + radius + 10;
      const hy = n.y;
      const isHandleHovered = connectorHandleHovered;
      
      ctx.beginPath();
      ctx.arc(hx, hy, (isHandleHovered ? 8.5 : 7) / graphZoom, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#D95338' : '#C8462B';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.2 / graphZoom;
      ctx.stroke();

      ctx.font = `bold ${9 / graphZoom}px sans-serif`;
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('+', hx, hy);
    }

    // Node Title Label
    const shortTitle = n.title.length > 22 ? n.title.slice(0, 21) + '…' : n.title;
    ctx.font = `${isActive || isHovered || connectionCount >= 3 ? '600' : '400'} ${10 / graphZoom}px "JetBrains Mono", monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillStyle = isActive || isHovered || isConnectingTarget
      ? (isDark ? '#ECECE9' : '#181817')
      : isNeighbor
        ? (isDark ? '#A3A39E' : '#4A4945')
        : (isDark ? '#666661' : '#8A8882');
    ctx.fillText(shortTitle, n.x, n.y + radius + (8 / graphZoom));

    ctx.restore();
  });

  ctx.restore();
}

let graphLoopRafId = null;
let graphLastFrameTs = 0;

function ensureGraphLoopRunning() {
  if (graphLoopRafId || document.hidden) return;
  const isSidebarActive = state.appMode === 'workspace' && state.rightSidebarOpen && state.inspectorTab === 'graph';
  const isExpandedActive = isExpandedGraphOpen;
  if (!isSidebarActive && !isExpandedActive) return;
  graphLoopRafId = requestAnimationFrame(runGraphLoop);
}

function runGraphLoop(ts) {
  graphLoopRafId = null;
  if (document.hidden) return;

  const isSidebarActive = state.appMode === 'workspace' && state.rightSidebarOpen && state.inspectorTab === 'graph';
  const isExpandedActive = isExpandedGraphOpen;

  // CRITICAL FOR 2019 PHONES: Stop waking up CPU when Graph is closed! (0.0% idle CPU!)
  if (!isSidebarActive && !isExpandedActive) return;

  // Throttle graph animation to ~30fps on Lite/Mobile phones to keep SoC cool & fast
  if (window.PK_LITE_MODE && ts && (ts - graphLastFrameTs) < 32) {
    graphLoopRafId = requestAnimationFrame(runGraphLoop);
    return;
  }
  graphLastFrameTs = ts || performance.now();

  const canvasSidebar = document.getElementById('knowledgeGraphCanvas');
  const canvasExpanded = document.getElementById('expandedKnowledgeGraphCanvas');

  if (graphNodes.length > 0) {
    const refCanvas = isExpandedActive ? canvasExpanded : canvasSidebar;
    const w = refCanvas ? (refCanvas.clientWidth || 300) : 300;
    const h = refCanvas ? (refCanvas.clientHeight || 280) : 280;

    const allLinks = computeVaultConnections();
    const nodeMap = new Map(graphNodes.map(n => [n.id, n]));
    const activeEdges = allLinks.filter(l => nodeMap.has(l.source) && nodeMap.has(l.target));

    const centerX = w / 2;
    const centerY = h / 2;

    // Native Rust WebAssembly Force Simulation Physics (5-15x faster, zero-GC) with seamless JS fallback
    const wasmEnergy = (window.PKWasm && window.PKWasm.ready)
      ? window.PKWasm.stepGraphPhysics(graphNodes, activeEdges, centerX, centerY, draggedNode ? draggedNode.id : null)
      : null;

    if (wasmEnergy === null) {
      for (let i = 0; i < graphNodes.length; i++) {
        const a = graphNodes[i];
        a.vx += (centerX - a.x) * 0.007;
        a.vy += (centerY - a.y) * 0.007;
        for (let j = i + 1; j < graphNodes.length; j++) {
          const b = graphNodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy + 0.1;
          const force = 1450 / distSq;
          const dist = Math.sqrt(distSq);
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          a.vx += fx;
          a.vy += fy;
          b.vx -= fx;
          b.vy -= fy;
        }
      }

      activeEdges.forEach(edge => {
        const s = nodeMap.get(edge.source);
        const t = nodeMap.get(edge.target);
        if (!s || !t) return;
        const dx = t.x - s.x;
        const dy = t.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const spring = (dist - 94) * 0.035;
        const fx = (dx / dist) * spring;
        const fy = (dy / dist) * spring;
        s.vx += fx;
        s.vy += fy;
        t.vx -= fx;
        t.vy -= fy;
      });

      graphNodes.forEach(n => {
        if (draggedNode && draggedNode.id === n.id) return;
        n.vx *= 0.82;
        n.vy *= 0.82;
        n.x += n.vx;
        n.y += n.vy;
      });
    }

    // Draw on Active Viewport(s)
    if (isSidebarActive && canvasSidebar) {
      drawGraphOnCanvas(canvasSidebar, false);
    }
    if (isExpandedActive && canvasExpanded) {
      drawGraphOnCanvas(canvasExpanded, true);
    }
  }

  graphLoopRafId = requestAnimationFrame(runGraphLoop);
}

// =========================================================================
// 15. GLOBAL COMMAND PALETTE (`Cmd/Ctrl + K`)
// =========================================================================
let cmdItems = [];
let cmdActiveScope = 'all'; // 'all' | 'actions' | 'notes' | 'calendar'

function setCmdScope(scope) {
  cmdActiveScope = scope;
  ['all', 'actions', 'notes', 'calendar'].forEach(s => {
    const btn = document.getElementById('cmdScope' + s.charAt(0).toUpperCase() + s.slice(1));
    if (btn) {
      if (s === scope) {
        btn.className = 'px-2.5 py-0.5 rounded-[3px] transition-colors bg-[var(--bg-elevated)] text-[var(--text-primary)] font-medium border border-[var(--border-hairline)]';
      } else {
        btn.className = 'px-2.5 py-0.5 rounded-[3px] transition-colors text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] border border-transparent';
      }
    }
  });
  const input = document.getElementById('commandPaletteInput');
  renderCommandPaletteResults(input ? input.value : '');
}

function openCommandPalette() {
  playWhooshSound();
  const backdrop = document.getElementById('commandPaletteBackdrop');
  const card = backdrop.querySelector('.animate-cmd-card');
  const input = document.getElementById('commandPaletteInput');
  backdrop.classList.remove('hidden');
  if (card) {
    card.classList.remove('animate-cmd-card');
    void card.offsetWidth;
    card.classList.add('animate-cmd-card');
  }
  input.value = '';
  setCmdScope('all');
  renderCommandPaletteResults('');
  requestAnimationFrame(() => input.focus());
}

function closeCommandPalette(e) {
  if (e && e.target !== document.getElementById('commandPaletteBackdrop')) return;
  document.getElementById('commandPaletteBackdrop').classList.add('hidden');
}

function promptStartFresh() {
  closeCommandPalette();
  const modal = document.getElementById('startFreshModal');
  if (modal) modal.classList.remove('hidden');
}

function closeStartFreshModal() {
  const modal = document.getElementById('startFreshModal');
  if (modal) modal.classList.add('hidden');
}

function executeStartFresh() {
  closeStartFreshModal();
  try {
    localStorage.removeItem('aether_archival_vault_v2');
    localStorage.removeItem('pk_note_vault_v2');
    localStorage.removeItem('pk_note_vault_v3');
  } catch (e) {}
  state = JSON.parse(JSON.stringify(DEFAULT_VAULT));
  persistState();
  renderAll();
  showToast('Workspace reset: started fresh with clean PK Note template');
}

function renderCommandPaletteResults(query) {
  const q = query.toLowerCase().trim();

  const allActions = [
    { kind: 'action', label: 'Graph: Switch to Mouse Link Mode', hint: 'Connect notes with mouse by dragging or clicking', glyph: 'graph', shortcut: 'Link', run: () => { setGraphToolMode('connect'); openRightInspector('graph'); } },
    { kind: 'action', label: 'Graph: Switch to Move / Pan Mode', hint: 'Reposition graph vertices and pan canvas', glyph: 'graph', shortcut: 'Move', run: () => { setGraphToolMode('move'); openRightInspector('graph'); } },
    { kind: 'action', label: 'Graph: Expand Fullscreen Graph Studio', hint: 'Spacious fullscreen topology canvas with search & zoom', glyph: 'grid', shortcut: 'Studio', run: () => openExpandedGraphModal() },
    { kind: 'action', label: 'Graph: Fit & Center View', hint: 'Reset zoom and center all nodes', glyph: 'compass', shortcut: 'Fit', run: () => fitGraphView() },
    { kind: 'action', label: 'Graph: Connect Document (Link Picker)', hint: 'Insert wikilink to another note by mouse', glyph: 'link', shortcut: 'Connect', run: () => openLinkNotePicker() },
    { kind: 'action', label: 'Toggle Zen Focus Mode', hint: 'Distraction-free writing sanctuary with block focus', glyph: 'alert', shortcut: '⌘D', run: () => toggleZenMode() },
    { kind: 'action', label: 'Toggle Tactile Haptic Audio', hint: 'Mechanical switch & chime micro-feedback', glyph: 'sliders', shortcut: 'Audio', run: () => toggleSoundSetting() },
    { kind: 'action', label: 'Toggle Dynamic Ambient Aura', hint: 'Breathing atmospheric hero glow lighting', glyph: 'sliders', shortcut: 'Aura', run: () => toggleAmbientAura() },
    { kind: 'action', label: 'Trigger Confetti Celebration', hint: 'Physics particle burst celebration', glyph: 'sparkles', shortcut: 'Burst', run: () => triggerCelebration(window.innerWidth / 2, window.innerHeight / 2, 60) },
    { kind: 'action', label: 'Toggle Magnetic Cursor Spotlight', hint: 'Luminous ambient spotlight following cursor', glyph: 'sun', shortcut: 'Spotlight', run: () => toggleCursorSpotlight() },
    { kind: 'action', label: 'Toggle Mechanical Typing Audio', hint: 'Tactile switch audio feedback while typing', glyph: 'terminal', shortcut: 'Typing', run: () => toggleMechanicalTyping() },
    { kind: 'action', label: 'Voice Synthesis Studio: Kokoro-82M Voices', hint: 'Switch Cute, Female & Male Kokoro-82M voices, speed & tone', glyph: 'sliders', shortcut: 'Voice', run: () => openVoiceModelModal() },
    { kind: 'action', label: 'Read Document Aloud (Kokoro-82M Voice)', hint: 'Natural neural audiobook speech from active note or selection', glyph: 'volume', shortcut: 'Voice', run: () => toggleReadingNoteAloud() },
    { kind: 'action', label: 'Stop Voice Reading', hint: 'Halt active speech synthesizer audio reader', glyph: 'volume', shortcut: 'Stop', run: () => stopReadingAloud() },
    { kind: 'action', label: 'Voice Dictation: Talk to Write Notes', hint: 'Speak naturally on phone or PC to transcribe text into your note', glyph: 'volume', shortcut: 'Mic', run: () => toggleVoiceDictation() },
    { kind: 'action', label: 'Find & Replace in Active Note', hint: 'Search text across all blocks with match navigation & replace all', glyph: 'search', shortcut: 'Ctrl+H', run: () => openFindReplaceBar() },
    { kind: 'action', label: 'Note Templates Gallery', hint: 'Create or insert structured Meeting, Journal, Study, Project & Book templates', glyph: 'document', shortcut: 'Tpl', run: () => openTemplatesModal() },
    { kind: 'action', label: 'Pomodoro Focus Timer', hint: '25m / 50m study & deep work timer with chime & session tracker', glyph: 'clock', shortcut: 'Timer', run: () => openFocusTimerModal() },
    { kind: 'action', label: 'Import Markdown File (.md / .txt)', hint: 'Import external Markdown notes with headings, todos & code blocks', glyph: 'document', shortcut: 'Import', run: () => triggerMarkdownImport() },
    { kind: 'action', label: 'Toggle Read-Only Note Lock', hint: 'Protect active document from accidental edits while reading', glyph: 'alert', shortcut: 'Lock', run: () => toggleNoteLock() },
    { kind: 'action', label: 'Customize Workspace & Appearance', hint: 'Banners, theme inks, width & guarded settings', glyph: 'sliders', shortcut: 'Theme', run: () => openCustomizerModal() },
    { kind: 'action', label: 'Calendar: Export to iCalendar (.ics)', hint: 'Download RFC 5545 standard .ics file for Apple/Google/Outlook', glyph: 'calendar', shortcut: 'E', run: () => exportCalendarToICS() },
    { kind: 'action', label: 'Calendar: Year Matrix View', hint: '12-month activity heatmap overview', glyph: 'calendar', shortcut: 'Y', run: () => setCalendarView('year') },
    { kind: 'action', label: 'Calendar: Month View', hint: 'Editorial 7-column hairline grid', glyph: 'calendar', shortcut: 'M', run: () => setCalendarView('month') },
    { kind: 'action', label: 'Calendar: Week Timeline View', hint: 'Hourly schedule grid with concurrency columns', glyph: 'calendar', shortcut: 'W', run: () => setCalendarView('week') },
    { kind: 'action', label: 'Calendar: Day Timeline View', hint: 'Detailed single-day schedule inspector', glyph: 'calendar', shortcut: 'D', run: () => setCalendarView('day') },
    { kind: 'action', label: 'Calendar: Jump to Today', hint: 'Reset calendar cursor to current date', glyph: 'calendar', shortcut: 'T', run: () => jumpCalendarToday() },
    { kind: 'action', label: 'Change Document Banner', hint: 'Set gradient, pattern, photo or custom URL', glyph: 'document', shortcut: 'Cover', run: () => openCustomizerModal('banner') },
    { kind: 'action', label: 'Typography: Open Reading & Font Studio', hint: 'Customize fonts, measure, size & styling', glyph: 'quote', shortcut: 'Font', run: () => openCustomizerModal('layout') },
    { kind: 'action', label: 'Typography: Increase Font Size (A+)', hint: 'Step body scale larger', glyph: 'sliders', shortcut: 'A+', run: () => stepFontSize(1) },
    { kind: 'action', label: 'Typography: Decrease Font Size (A-)', hint: 'Step body scale smaller', glyph: 'sliders', shortcut: 'A-', run: () => stepFontSize(-1) },
    { kind: 'action', label: 'Typography: Toggle Justified Text Alignment', hint: 'Switch between Left and Justified book layout', glyph: 'document', shortcut: 'Justify', run: () => toggleTextAlign() },
    { kind: 'action', label: 'Typography: Toggle Drop Cap First Letter', hint: 'Editorial initial letter flourish', glyph: 'quote', shortcut: 'DropCap', run: () => toggleDropCap() },
    { kind: 'action', label: 'Typography: Toggle Book Paragraph Indent', hint: 'First-line paragraph indent', glyph: 'document', shortcut: 'Indent', run: () => toggleBookIndent() },
    { kind: 'action', label: 'Cycle Document Width (680px / 860px / Full)', hint: 'Adjust reading measure and layout width', glyph: 'grid', shortcut: 'Width', run: () => cycleLayoutWidth() },
    { kind: 'action', label: 'Open User Guide & Handbook', hint: 'Comprehensive features, instructions & tips', glyph: 'alert', shortcut: '?', run: () => openUserGuideModal() },
    { kind: 'action', label: 'Export Active Note as Markdown', hint: 'Download .md file with blocks and metadata', glyph: 'document', shortcut: '', run: () => exportCurrentNoteMarkdown() },
    { kind: 'action', label: 'Print Note / Save as PDF', hint: 'Clean editorial paper and PDF export', glyph: 'document', shortcut: '⌘P', run: () => printCurrentNote() },
    { kind: 'action', label: 'Backup Vault (Export JSON)', hint: 'Complete snapshot of notes, schedule & tags', glyph: 'sliders', shortcut: '', run: () => exportVaultBackupJSON() },
    { kind: 'action', label: 'Restore Vault from Backup', hint: 'Import and restore JSON vault snapshot', glyph: 'sliders', shortcut: '', run: () => triggerVaultRestoreFile() },
    { kind: 'action', label: 'Filter Starred Notes', hint: 'Show or hide pinned notes in sidebar', glyph: 'tag', shortcut: '', run: () => toggleStarredSidebarFilter() },
    { kind: 'action', label: 'Toggle Autocorrect', hint: 'Enable or disable natural typo & spelling correction', glyph: 'sliders', shortcut: '', run: () => toggleAutocorrectSetting() },
    { kind: 'action', label: 'New Working Note', hint: 'Create blank document in General', glyph: 'document', shortcut: '⌘N', run: () => createNewNote('General') },
    { kind: 'action', label: 'Open Today’s Daily Log', hint: 'Daily capture & priorities', glyph: 'calendar', shortcut: 'T', run: () => openOrCreateDailyNote() },
    { kind: 'action', label: 'Create Calendar Event', hint: 'Schedule new entry in chronology', glyph: 'clock', shortcut: '+', run: () => openEventModal() },
    { kind: 'action', label: 'Open Calendar: Month View', hint: '7-column chronology grid', glyph: 'grid', shortcut: 'Month', run: () => setCalendarView('month') },
    { kind: 'action', label: 'Open Calendar: Week View', hint: '7-day hourly schedule view', glyph: 'calendar', shortcut: 'Week', run: () => setCalendarView('week') },
    { kind: 'action', label: 'Open Calendar: Day View', hint: '24-hour daily timeline view', glyph: 'clock', shortcut: 'Day', run: () => setCalendarView('day') },
    { kind: 'action', label: `Switch to ${state.theme === 'dark' ? 'Archival Vellum (Light)' : 'Obsidian Carbon (Dark)'}`, hint: 'Theme', glyph: 'sliders', shortcut: 'Theme', run: () => toggleTheme() },
    { kind: 'action', label: `Switch Prose to ${state.fontStyle === 'sans' ? 'Editorial Serif' : 'Geometric Sans'}`, hint: 'Typography', glyph: 'quote', shortcut: 'Font', run: () => toggleFontStyle() },
    { kind: 'action', label: 'Inspect Topology Graph', hint: 'Interactive force-directed link graph', glyph: 'graph', shortcut: 'Graph', run: () => openRightInspector('graph') },
    { kind: 'action', label: 'Start Fresh (Reset Workspace)', hint: 'Clear demo clutter & reset to clean PK Note template', glyph: 'archive', shortcut: 'Reset', danger: true, run: () => promptStartFresh() },
  ];

  const allNotes = state.notes.map(n => ({
    kind: 'note',
    id: n.id,
    label: n.title || 'Untitled Document',
    hint: `${n.code || 'DOC'} · ${n.folder || 'General'}`,
    folder: n.folder || 'General',
    glyph: n.glyph || 'document',
    rawText: `${n.title} ${n.folder} ${(n.tags || []).join(' ')} ${n.blocks.map(b => b.content || '').join(' ')}`.toLowerCase(),
    run: () => selectNote(n.id)
  }));

  const allEvents = (state.events || []).map(evt => {
    const norm = normalizeEventRange(evt);
    const timeHint = norm.allDay ? `${norm.startDateKey} · All-Day` : `${norm.startDateKey} · ${formatLocalTime24(norm.start)}`;
    return {
      kind: 'event',
      id: evt.id,
      label: evt.title,
      hint: `${timeHint}${evt.location ? ' · ' + evt.location : ''}`,
      colorDot: evt.color_code || '#D95338',
      dateKey: norm.startDateKey,
      isUpcoming: norm.startDateKey >= TODAY_KEY,
      rawText: `${evt.title} ${evt.location || ''} ${evt.notes || ''} ${norm.startDateKey}`.toLowerCase(),
      run: () => {
        state.appMode = 'calendar';
        state.calendarSelectedDate = norm.startDateKey;
        state.calendarCursorDate = norm.startDateKey;
        renderAll();
        openEventModal({ eventId: evt.id });
      }
    };
  });

  // Native Rust WebAssembly Fuzzy Ranking (falls back to substring match if WASM unavailable)
  const useWasmFuzzy = !!(q && window.PKWasm && window.PKWasm.ready);
  const rankByQuery = (list, getText) => {
    if (!q) return list;
    if (!useWasmFuzzy) return list.filter(item => getText(item).toLowerCase().includes(q));
    const scored = [];
    for (let i = 0; i < list.length; i++) {
      const s = window.PKWasm.fuzzyScore(q, getText(list[i]));
      if (s >= 0) scored.push({ item: list[i], s });
    }
    scored.sort((a, b) => b.s - a.s);
    return scored.map(x => x.item);
  };
  let filteredActions = rankByQuery(allActions, a => `${a.label} ${a.hint}`);
  let filteredNotes = rankByQuery(allNotes, n => n.rawText);
  let filteredEvents = !q ? allEvents.filter(e => e.isUpcoming) : rankByQuery(allEvents, e => e.rawText);

  // Apply Scope Filters
  if (cmdActiveScope === 'actions') {
    filteredNotes = [];
    filteredEvents = [];
  } else if (cmdActiveScope === 'notes') {
    filteredActions = [];
    filteredEvents = [];
  } else if (cmdActiveScope === 'calendar') {
    filteredActions = [];
    filteredNotes = [];
  }

  // If query is empty and scope is 'all', curate top quick actions, pinned notes, and today's schedule
  if (!q && cmdActiveScope === 'all') {
    filteredActions = allActions.slice(0, 5); // Top 5 quick actions
    filteredNotes = allNotes.slice(0, 4);    // Top 4 notes
    filteredEvents = allEvents.filter(e => e.dateKey === TODAY_KEY).slice(0, 3); // Today's events
  }

  // Build structured sections
  const sections = [];
  if (filteredActions.length > 0) {
    sections.push({ title: 'QUICK ACTIONS', items: filteredActions });
  }
  if (filteredNotes.length > 0) {
    sections.push({ title: 'DOCUMENTS', items: filteredNotes });
  }
  if (filteredEvents.length > 0) {
    sections.push({ title: q ? 'SCHEDULE & EVENTS' : 'TODAY’S SCHEDULE', items: filteredEvents });
  }

  // Flatten items with global indexing
  cmdItems = [];
  sections.forEach(sec => {
    sec.items.forEach(item => {
      item.flatIndex = cmdItems.length;
      cmdItems.push(item);
    });
  });

  cmdSelectedIndex = 0;
  const container = document.getElementById('commandPaletteResults');

  if (cmdItems.length === 0) {
    container.innerHTML = `
      <div class="py-10 text-center space-y-2 select-none">
        <div class="font-mono text-xs text-[var(--text-tertiary)] uppercase tracking-wider">No matches found for "${escapeHtml(query)}"</div>
        <p class="text-[11px] text-[var(--text-secondary)]">Try searching for note titles, block text, or type another command.</p>
      </div>
    `;
    return;
  }

  let htmlOutput = '';
  sections.forEach(sec => {
    htmlOutput += `
      <div class="px-2 pt-2.5 pb-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] select-none">
        <span>${sec.title}</span>
        <span>${sec.items.length}</span>
      </div>
    `;
    sec.items.forEach(item => {
      const isSelected = item.flatIndex === cmdSelectedIndex;
      const iconEl = item.colorDot
        ? `<span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${item.colorDot}"></span>`
        : `<span class="shrink-0 ${item.danger ? 'text-[var(--accent-vermilion)]' : 'text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)]'}">${getGlyphSVG(item.glyph)}</span>`;

      const rightBadge = item.shortcut
        ? `<kbd class="font-mono text-[10px] text-[var(--text-secondary)] px-1.5 py-0.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)]">${escapeHtml(item.shortcut)}</kbd>`
        : (item.folder ? `<span class="font-mono text-[10px] text-[var(--text-tertiary)]">${escapeHtml(item.folder)}</span>` : '');

      htmlOutput += `
        <button onclick="executeCommandItem(${item.flatIndex})"
                onmouseenter="cmdSelectedIndex = ${item.flatIndex}; updateCommandSelectionUI()"
                data-cmd-idx="${item.flatIndex}"
                class="w-full flex items-center justify-between px-2.5 py-2 rounded-[4px] text-left transition-colors cursor-pointer group ${
                  isSelected
                    ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-hairline)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] border border-transparent'
                }">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="w-5 h-5 flex items-center justify-center shrink-0">
              ${iconEl}
            </span>
            <div class="truncate">
              <div class="text-xs font-medium text-[var(--text-primary)] truncate">${escapeHtml(item.label)}</div>
              <div class="text-[11px] text-[var(--text-tertiary)] truncate leading-tight mt-0.5">${escapeHtml(item.hint)}</div>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0 ml-2">
            ${rightBadge}
          </div>
        </button>
      `;
    });
  });

  container.innerHTML = htmlOutput;
}

function updateCommandSelectionUI() {
  document.querySelectorAll('[data-cmd-idx]').forEach((el, idx) => {
    if (idx === cmdSelectedIndex) {
      el.classList.add('bg-[var(--bg-elevated)]', 'text-[var(--text-primary)]', 'border-[var(--border-hairline)]', 'shadow-sm');
      el.classList.remove('text-[var(--text-secondary)]', 'border-transparent');
      el.scrollIntoView({ block: 'nearest' });
    } else {
      el.classList.remove('bg-[var(--bg-elevated)]', 'text-[var(--text-primary)]', 'border-[var(--border-hairline)]', 'shadow-sm');
      el.classList.add('text-[var(--text-secondary)]', 'border-transparent');
    }
  });
}

function handleCommandPaletteKeydown(e) {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (cmdItems.length > 0) {
      cmdSelectedIndex = (cmdSelectedIndex + 1) % cmdItems.length;
      updateCommandSelectionUI();
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (cmdItems.length > 0) {
      cmdSelectedIndex = (cmdSelectedIndex - 1 + cmdItems.length) % cmdItems.length;
      updateCommandSelectionUI();
    }
  } else if (e.key === 'Tab') {
    e.preventDefault();
    const scopes = ['all', 'actions', 'notes', 'calendar'];
    const nextIdx = (scopes.indexOf(cmdActiveScope) + (e.shiftKey ? -1 : 1) + scopes.length) % scopes.length;
    setCmdScope(scopes[nextIdx]);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    executeCommandItem(cmdSelectedIndex);
  } else if (e.key === 'Escape') {
    e.preventDefault();
    document.getElementById('commandPaletteBackdrop').classList.add('hidden');
  }
}

function executeCommandItem(idx) {
  const item = cmdItems[idx];
  document.getElementById('commandPaletteBackdrop').classList.add('hidden');
  if (item && item.run) item.run();
}

// =========================================================================
// 16. GLOBAL KEYBOARD SHORTCUTS & INITIALIZATION
// =========================================================================
document.addEventListener('keydown', e => {
  // Cmd/Ctrl + Z: Undo & Redo (Universal document & mobile shortcut)
  if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key.toLowerCase() === 'z') {
    const tag = (document.activeElement && document.activeElement.tagName) || '';
    const isInput = tag === 'INPUT' || tag === 'TEXTAREA';
    if (!isInput && state.appMode === 'workspace') {
      e.preventDefault();
      performUndo();
      return;
    }
  }
  if (((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'z') ||
      ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'y')) {
    const tag = (document.activeElement && document.activeElement.tagName) || '';
    const isInput = tag === 'INPUT' || tag === 'TEXTAREA';
    if (!isInput && state.appMode === 'workspace') {
      e.preventDefault();
      performRedo();
      return;
    }
  }

  // Cmd/Ctrl + K: Command Palette
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    const backdrop = document.getElementById('commandPaletteBackdrop');
    if (backdrop.classList.contains('hidden')) {
      openCommandPalette();
    } else {
      backdrop.classList.add('hidden');
    }
    return;
  }

  // Cmd/Ctrl + \: Toggle Left Sidebar
  if ((e.metaKey || e.ctrlKey) && e.key === '\\') {
    e.preventDefault();
    toggleLeftSidebar();
    return;
  }

  // Modal Shortcuts
  const modalOpen = !document.getElementById('eventModalBackdrop').classList.contains('hidden');
  if (modalOpen) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeEventModal();
    } else if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      saveEventFromModal();
    }
    return;
  }

  // Calendar View Shortcuts when not typing in an input/textarea/contenteditable
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  const isEditingText = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (document.activeElement && document.activeElement.isContentEditable);

  if (!isEditingText && state.appMode === 'calendar') {
    const key = e.key.toLowerCase();
    if (key === 'm') { e.preventDefault(); setCalendarView('month'); }
    else if (key === 'w') { e.preventDefault(); setCalendarView('week'); }
    else if (key === 'd') { e.preventDefault(); setCalendarView('day'); }
    else if (key === 'y') { e.preventDefault(); setCalendarView('year'); }
    else if (key === 't') { e.preventDefault(); jumpCalendarToday(); }
    else if (key === 'l') { e.preventDefault(); toggleCalendarAgendaSidebar(); }
    else if (key === 'c' || key === 'n') { e.preventDefault(); openEventModal(); }
    else if (key === 'e') { e.preventDefault(); exportCalendarToICS(); }
    else if (e.key === '[' || e.key === 'ArrowLeft') { e.preventDefault(); navigateCalendar(-1); }
    else if (e.key === ']' || e.key === 'ArrowRight') { e.preventDefault(); navigateCalendar(1); }
  }
});

document.addEventListener('click', e => {
  const folderCont = document.getElementById('folderDropdownContainer');
  const eventLinkedCont = document.getElementById('eventLinkedNoteContainer');
  if (folderCont && !folderCont.contains(e.target)) {
    closeFolderDropdown();
  }
  if (eventLinkedCont && !eventLinkedCont.contains(e.target)) {
    closeEventLinkedNoteDropdown();
  }

  const glyphPop = document.getElementById('glyphPickerPopover');
  const glyphBtn = document.getElementById('pageGlyphBtn');
  if (!glyphPop.contains(e.target) && !glyphBtn.contains(e.target)) {
    glyphPop.classList.add('hidden');
  }
  const slashMenu = document.getElementById('slashMenu');
  if (!slashMenu.contains(e.target)) {
    closeSlashMenu();
  }
  const wikiMenu = document.getElementById('wikiLinkMenu');
  if (!wikiMenu.contains(e.target)) {
    closeWikiLinkMenu();
  }
});


// =========================================================================
// 17. MOBILE NAVIGATION, DRAWERS & TOUCH WORKSPACE CONTROLS
// =========================================================================
function closeRightSidebar() {
  state.rightSidebarOpen = false;
  applyThemeAndLayout();
  persistState();
}

function mobileNavSelect(action) {
  if (action === 'notes') {
    if (state.appMode !== 'workspace') {
      setAppMode('workspace');
      closeMobileSidebar();
      closeRightSidebar();
    } else if (state.rightSidebarOpen) {
      // Returning from Graph/Inspector back to Notes cleanly closes Graph instead of opening left drawer!
      closeRightSidebar();
    } else {
      toggleLeftSidebar();
    }
  } else if (action === 'calendar') {
    setAppMode('calendar');
    closeMobileSidebar();
    closeRightSidebar();
  } else if (action === 'graph') {
    if (state.appMode === 'workspace' && state.rightSidebarOpen) {
      // Tapping GRAPH while already open cleanly toggles it closed!
      closeRightSidebar();
    } else {
      state.appMode = 'workspace';
      closeMobileSidebar();
      openRightInspector('graph');
    }
  }
  updateMobileNavState();
}

function updateMobileNavState() {
  const navNotes = document.getElementById('mobileNavNotes');
  const navCal = document.getElementById('mobileNavCalendar');
  const navGraph = document.getElementById('mobileNavGraph');
  if (!navNotes || !navCal || !navGraph) return;

  const isCal = state.appMode === 'calendar';
  const isGraphOpen = !isCal && state.rightSidebarOpen;

  if (isCal) {
    navCal.className = 'flex flex-col items-center justify-center gap-0.5 py-1 px-3 text-[var(--accent-vermilion)] font-medium transition-colors';
    navNotes.className = 'flex flex-col items-center justify-center gap-0.5 py-1 px-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors';
    navGraph.className = 'flex flex-col items-center justify-center gap-0.5 py-1 px-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors';
  } else if (isGraphOpen) {
    navGraph.className = 'flex flex-col items-center justify-center gap-0.5 py-1 px-3 text-[var(--accent-ochre)] font-medium transition-colors';
    navNotes.className = 'flex flex-col items-center justify-center gap-0.5 py-1 px-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors';
    navCal.className = 'flex flex-col items-center justify-center gap-0.5 py-1 px-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors';
  } else {
    navNotes.className = 'flex flex-col items-center justify-center gap-0.5 py-1 px-3 text-[var(--accent-vermilion)] font-medium transition-colors';
    navCal.className = 'flex flex-col items-center justify-center gap-0.5 py-1 px-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors';
    navGraph.className = 'flex flex-col items-center justify-center gap-0.5 py-1 px-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors';
  }
}

function openMobileQuickMenu() {
  if (window.innerWidth < 768) {
    closeMobileSidebar();
    closeRightSidebar();
  }
  const el = document.getElementById('mobileQuickMenuBackdrop');
  if (el) el.classList.remove('hidden');
}

function closeMobileQuickMenu() {
  const el = document.getElementById('mobileQuickMenuBackdrop');
  if (el) el.classList.add('hidden');
}

function appendTodoAtEnd() {
  setAppMode('workspace');
  closeMobileSidebar();
  closeRightSidebar();
  const note = guardActiveNoteEditable();
  if (!note) return;
  takeSnapshot('appendTodoAtEnd');
  const newBlock = {
    id: generateId('b'),
    type: 'todo',
    checked: false,
    content: ''
  };
  note.blocks.push(newBlock);
  renderBlocks(note);
  focusBlock(newBlock.id, true);
  persistState();
  showToast('Todo block added');
}

// =========================================================================
// 18. PROGRESSIVE WEB APP (PWA) INSTALLATION & OFFLINE ENGINE
// =========================================================================
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btn = document.getElementById('pwaInstallBtn');
  if (btn) btn.classList.remove('hidden');
});

function openInstallModal() {
  const modal = document.getElementById('pwaInstallModal');
  const instructions = document.getElementById('pwaInstallInstructions');
  const triggerBtn = document.getElementById('pwaInstallTriggerBtn');
  
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

  if (isStandalone) {
    instructions.innerHTML = '<strong>PK Note is already installed</strong> and running in standalone native app mode!';
    triggerBtn.style.display = 'none';
  } else if (isIOS) {
    instructions.innerHTML = 'To install on iPhone / iPad: Tap the <strong>Share</strong> button <svg class="inline w-3.5 h-3.5 -mt-0.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg> at the bottom of Safari, then select <strong>Add to Home Screen</strong> [+]';
    triggerBtn.style.display = 'none';
  } else if (deferredInstallPrompt) {
    instructions.textContent = 'Click Install App to install PK Note directly on your computer or mobile phone.';
    triggerBtn.style.display = 'inline-block';
  } else {
    instructions.innerHTML = 'To install on desktop: Click the <strong>Install</strong> icon in your browser address bar (Edge / Chrome / Brave) or use the browser menu &rarr; <em>Apps &rarr; Install PK Note</em>.';
    triggerBtn.style.display = 'none';
  }
  modal.classList.remove('hidden');
}

function closeInstallModal() {
  document.getElementById('pwaInstallModal').classList.add('hidden');
}

function triggerPwaInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(() => {
      deferredInstallPrompt = null;
      closeInstallModal();
    });
  }
}

// =========================================================================
// 19. BESPOKE SWISS DROPDOWNS & CUSTOM SELECTION CONTROLLERS (ZERO OS SELECTS)
// =========================================================================
function toggleFolderDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('folderDropdownMenu');
  const chevron = document.getElementById('folderDropdownChevron');
  const isClosed = menu.classList.contains('hidden');
  closeAllCustomDropdowns();
  if (isClosed) {
    menu.classList.remove('hidden');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
    const note = getActiveNote();
    renderFolderDropdownUI(note);
  }
}

function closeFolderDropdown() {
  const menu = document.getElementById('folderDropdownMenu');
  const chevron = document.getElementById('folderDropdownChevron');
  const newFolderBox = document.getElementById('dropdownNewFolderBox');
  const addBtn = document.getElementById('dropdownAddFolderBtn');
  if (menu) menu.classList.add('hidden');
  if (chevron) chevron.style.transform = 'rotate(0deg)';
  if (newFolderBox) newFolderBox.classList.add('hidden');
  if (addBtn) addBtn.classList.remove('hidden');
}

function renderFolderDropdownUI(note) {
  const label = document.getElementById('folderDropdownLabel');
  const hiddenInput = document.getElementById('folderSelect');
  const container = document.getElementById('folderDropdownItems');
  const countEl = document.getElementById('folderDropdownCount');
  if (!label || !container) return;

  const currentFolder = (note && note.folder) || 'General';
  label.textContent = currentFolder;
  if (hiddenInput) hiddenInput.value = currentFolder;

  const folders = state.folders || ['General', 'Projects', 'Daily Logs', 'Reading'];
  if (countEl) countEl.textContent = `${folders.length} collections`;

  container.innerHTML = folders.map((f, idx) => {
    const isActive = f === currentFolder;
    const count = state.notes.filter(n => n.folder === f).length;
    return `
      <button onclick="selectFolderByIndex(${idx})"
              class="w-full flex items-center justify-between px-2.5 py-1.5 rounded-[3px] text-left transition-colors ${
                isActive
                  ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] font-medium'
                  : 'text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
              }">
        <div class="flex items-center gap-2 min-w-0">
          <svg class="w-3.5 h-3.5 ${isActive ? 'text-[var(--accent-vermilion)]' : 'text-[var(--accent-ochre)]'} shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>
          <span class="truncate text-xs font-mono">${escapeHtml(f)}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="font-mono text-[10px] text-[var(--text-tertiary)]">${count}</span>
          ${isActive ? `<svg class="w-3.5 h-3.5 text-[var(--accent-vermilion)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
        </div>
      </button>
    `;
  }).join('');
}

function selectFolderByIndex(idx) {
  const folders = state.folders || ['General', 'Projects', 'Daily Logs', 'Reading'];
  if (folders[idx]) {
    selectFolderFromDropdown(folders[idx]);
  }
}

function selectFolderFromDropdown(folderName) {
  closeFolderDropdown();
  updateNoteFolder(folderName);
}

function showDropdownNewFolderInput(e) {
  if (e) e.stopPropagation();
  document.getElementById('dropdownNewFolderBox').classList.remove('hidden');
  document.getElementById('dropdownAddFolderBtn').classList.add('hidden');
  const input = document.getElementById('dropdownNewFolderInput');
  input.value = '';
  input.focus();
}

function handleDropdownNewFolderKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    confirmDropdownNewFolder();
  } else if (e.key === 'Escape') {
    e.preventDefault();
    document.getElementById('dropdownNewFolderBox').classList.add('hidden');
    document.getElementById('dropdownAddFolderBtn').classList.remove('hidden');
  }
}

function confirmDropdownNewFolder() {
  const input = document.getElementById('dropdownNewFolderInput');
  const name = input.value.trim();
  if (!name) return;
  if (!state.folders.includes(name)) {
    state.folders.push(name);
  }
  selectFolderFromDropdown(name);
  showToast(`Collection "${name}" created`);
}

// --- Linked Note Custom Picker in Event Modal ---
let eventLinkedNoteFilterQuery = '';

function toggleEventLinkedNoteDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('eventLinkedNoteMenu');
  const chevron = document.getElementById('eventLinkedNoteChevron');
  const isClosed = menu.classList.contains('hidden');
  closeAllCustomDropdowns();
  if (isClosed) {
    menu.classList.remove('hidden');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
    const input = document.getElementById('eventLinkedNoteFilterInput');
    if (input) {
      input.value = '';
      eventLinkedNoteFilterQuery = '';
      input.focus();
    }
    const currentId = document.getElementById('eventFormLinkedNote').value;
    renderEventLinkedNotesList(currentId);
  }
}

function closeEventLinkedNoteDropdown() {
  const menu = document.getElementById('eventLinkedNoteMenu');
  const chevron = document.getElementById('eventLinkedNoteChevron');
  if (menu) menu.classList.add('hidden');
  if (chevron) chevron.style.transform = 'rotate(0deg)';
}

function filterEventLinkedNotes(query) {
  eventLinkedNoteFilterQuery = (query || '').toLowerCase();
  const currentId = document.getElementById('eventFormLinkedNote').value;
  renderEventLinkedNotesList(currentId);
}

function renderEventLinkedNotesList(selectedNoteId) {
  const container = document.getElementById('eventLinkedNoteItems');
  const hiddenInput = document.getElementById('eventFormLinkedNote');
  const display = document.getElementById('eventLinkedNoteDisplay');
  const clearBtn = document.getElementById('eventLinkedNoteClearBtn');
  const openBtn = document.getElementById('eventFormOpenLinkedNoteBtn');
  if (!container || !hiddenInput) return;

  hiddenInput.value = selectedNoteId || '';

  // Update trigger button presentation
  const activeNote = state.notes.find(n => n.id === selectedNoteId);
  if (activeNote) {
    display.innerHTML = `
      <svg class="w-3.5 h-3.5 text-[var(--accent-vermilion)] shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      <span class="font-mono text-[10px] text-[var(--text-tertiary)]">${escapeHtml(activeNote.code || 'DOC')}</span>
      <span class="truncate font-medium text-xs text-[var(--text-primary)]">${escapeHtml(activeNote.title || 'Untitled')}</span>
    `;
    if (clearBtn) clearBtn.classList.remove('hidden');
    if (openBtn) openBtn.classList.remove('hidden');
  } else {
    display.innerHTML = `
      <svg class="w-3.5 h-3.5 text-[var(--text-tertiary)] shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      <span class="truncate text-[var(--text-tertiary)] font-mono text-[11px]">— None (Unlinked) —</span>
    `;
    if (clearBtn) clearBtn.classList.add('hidden');
    if (openBtn) openBtn.classList.add('hidden');
  }

  // Filter notes
  const q = eventLinkedNoteFilterQuery;
  const matched = state.notes.filter(n => {
    if (!q) return true;
    return (n.title && n.title.toLowerCase().includes(q)) ||
           (n.code && n.code.toLowerCase().includes(q)) ||
           (n.folder && n.folder.toLowerCase().includes(q));
  });

  let itemsHtml = `
    <button onclick="selectEventLinkedNote('')"
            class="w-full flex items-center justify-between px-2 py-1.5 rounded-[3px] text-left transition-colors ${
              !selectedNoteId ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] font-medium' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
            }">
      <span class="font-mono text-[11px]">— None (Unlinked) —</span>
      ${!selectedNoteId ? `<svg class="w-3.5 h-3.5 text-[var(--accent-vermilion)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
    </button>
  `;

  if (matched.length === 0) {
    itemsHtml += `<div class="px-2 py-2 text-center text-[10px] font-mono text-[var(--text-tertiary)]">No matching documents</div>`;
  } else {
    itemsHtml += matched.map(n => {
      const isSelected = n.id === selectedNoteId;
      return `
        <button onclick="selectEventLinkedNote('${n.id}')"
                class="w-full flex items-center justify-between px-2 py-1.5 rounded-[3px] text-left transition-colors ${
                  isSelected ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] font-medium' : 'text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
                }">
          <div class="flex items-center gap-2 min-w-0">
            <span class="shrink-0 ${isSelected ? 'text-[var(--accent-vermilion)]' : 'text-[var(--text-tertiary)]'}">${getGlyphSVG(n.glyph)}</span>
            <span class="font-mono text-[10px] text-[var(--text-tertiary)] shrink-0">${escapeHtml(n.code || 'DOC')}</span>
            <span class="truncate text-xs font-medium">${escapeHtml(n.title || 'Untitled')}</span>
          </div>
          <div class="flex items-center gap-1.5 shrink-0 ml-2">
            <span class="font-mono text-[9px] text-[var(--text-tertiary)]">${escapeHtml(n.folder || '')}</span>
            ${isSelected ? `<svg class="w-3.5 h-3.5 text-[var(--accent-vermilion)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
          </div>
        </button>
      `;
    }).join('');
  }

  container.innerHTML = itemsHtml;
}

function selectEventLinkedNote(noteId) {
  closeEventLinkedNoteDropdown();
  renderEventLinkedNotesList(noteId);
  toggleModalOpenNoteBtn();
}

function clearEventLinkedNote(e) {
  if (e) e.stopPropagation();
  selectEventLinkedNote('');
}

function closeAllCustomDropdowns() {
  closeFolderDropdown();
  closeEventLinkedNoteDropdown();
}

window.addEventListener('load', () => {
  // Collapse sidebar by default on mobile viewports so canvas has full width
  if (window.innerWidth < 768) {
    state.leftSidebarOpen = false;
  }
  renderAll();
  switchInspectorTab(state.inspectorTab || 'graph');
  initGraphInteractions();
  resizeGraphCanvas();
  ensureGraphLoopRunning();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) ensureGraphLoopRunning();
  });

  // Register Progressive Web App Service Worker with instant auto-update check
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        reg.update();
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                showToast('Update available · Reloading latest version...', 'vermilion');
                setTimeout(() => window.location.reload(), 1200);
              }
            });
          }
        });
      })
      .catch(() => {});
  }
});
  

// 20. CONTEXTUAL NATIVE APP ENGINE (ZERO BROWSER SLOP)
// =========================================================================
let activeContextMenuBlockId = null;
let activeContextMenuNoteId = null;
let activeContextMenuEventId = null;
let activeContextMenuDateKey = null;
let activeSubmenuTimeout = null;
let contextFocusedIdx = -1;

// Tactical Right-Click Sonar Wave & Micro-Spark Shockwave
function triggerRightClickShockwave(x, y) {
  const container = document.getElementById('pkContextMenuShockwaveContainer');
  if (!container) return;

  const wave = document.createElement('div');
  wave.className = 'pk-sonar-wave';
  wave.style.left = `${x}px`;
  wave.style.top = `${y}px`;

  for (let i = 0; i < 6; i++) {
    const angle = (i * 60) * (Math.PI / 180);
    const dist = 18 + Math.random() * 12;
    const px = Math.cos(angle) * dist;
    const py = Math.sin(angle) * dist;
    const spark = document.createElement('span');
    spark.className = 'pk-sonar-spark';
    spark.style.setProperty('--tx', `${px}px`);
    spark.style.setProperty('--ty', `${py}px`);
    wave.appendChild(spark);
  }

  container.appendChild(wave);
  setTimeout(() => wave.remove(), 600);
}

// =========================================================================
// 14. KOKORO-82M NEURAL & ON-DEVICE VOICE SYNTHESIS STUDIO ENGINE
//     100% Client-Side WASM/ONNX — Zero Server Required (Phone & Desktop)
// =========================================================================
const KOKORO_MODEL_ID = 'onnx-community/Kokoro-82M-v1.0-ONNX';
// Official browser-targeted ESM bundle (avoids esm.sh Node fs.readFile crash!)
const KOKORO_ESM_URL = 'https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/dist/kokoro.web.js';
const KOKORO_ESM_FALLBACK_URL = 'https://unpkg.com/kokoro-js@1.2.1/dist/kokoro.web.js';

// Official Kokoro-82M v1.0 Voice Roster — Pure Studio-Natural Human Voices (Zero Robotic Pitch Artifacts)
const KOKORO_VOICE_CATALOG = [
  // Cute / Youthful Voices (Built on Kokoro's Grade A/A-/B- human voices within the pure ±1.3-semitone lifelike zone)
  { id: 'cute_mimi',   baseVoice: 'af_bella',  defaultPitch: 1.08, name: 'Mimi',     gender: 'female', category: 'cute', accent: 'US', lang: 'en-US', grade: 'CUTE', style: 'Sweet, petite & natural' },
  { id: 'cute_yuki',   baseVoice: 'af_heart',  defaultPitch: 1.06, name: 'Yuki',     gender: 'female', category: 'cute', accent: 'US', lang: 'en-US', grade: 'CUTE', style: 'Soft, silky & lifelike' },
  { id: 'cute_hana',   baseVoice: 'af_bella',  defaultPitch: 1.04, name: 'Hana',     gender: 'female', category: 'cute', accent: 'US', lang: 'en-US', grade: 'CUTE', style: 'Warm, expressive & bright' },
  { id: 'cute_koko',   baseVoice: 'af_nicole', defaultPitch: 1.07, name: 'Koko',     gender: 'female', category: 'cute', accent: 'US', lang: 'en-US', grade: 'CUTE', style: 'Gentle, whisper-soft & cozy' },
  { id: 'cute_lumi',   baseVoice: 'bf_emma',   defaultPitch: 1.06, name: 'Lumi',     gender: 'female', category: 'cute', accent: 'UK', lang: 'en-GB', grade: 'CUTE', style: 'Bright, natural British' },
  { id: 'cute_sora',   baseVoice: 'af_heart',  defaultPitch: 1.03, name: 'Sora',     gender: 'female', category: 'cute', accent: 'US', lang: 'en-US', grade: 'CUTE', style: 'Youthful, pure human' },

  // Female Voices (Strictly Top-Grade Studio-Natural US & UK Human Voices Only — Zero Robotic/Low-Grade Voices)
  { id: 'af_heart',    baseVoice: 'af_heart',    defaultPitch: 1.0, name: 'Heart',    gender: 'female', category: 'female', accent: 'US', lang: 'en-US', grade: 'A',  style: 'Flagship Warm & Natural' },
  { id: 'af_bella',    baseVoice: 'af_bella',    defaultPitch: 1.0, name: 'Bella',    gender: 'female', category: 'female', accent: 'US', lang: 'en-US', grade: 'A-', style: 'Expressive & Engaging' },
  { id: 'af_nicole',   baseVoice: 'af_nicole',   defaultPitch: 1.0, name: 'Nicole',   gender: 'female', category: 'female', accent: 'US', lang: 'en-US', grade: 'B-', style: 'Studio Whisper-Clear' },
  { id: 'bf_emma',     baseVoice: 'bf_emma',     defaultPitch: 1.0, name: 'Emma',     gender: 'female', category: 'female', accent: 'UK', lang: 'en-GB', grade: 'B-', style: 'British Crisp & Poised' },
  { id: 'af_aoede',    baseVoice: 'af_aoede',    defaultPitch: 1.0, name: 'Aoede',    gender: 'female', category: 'female', accent: 'US', lang: 'en-US', grade: 'C+', style: 'Melodic & Smooth' },
  { id: 'af_kore',     baseVoice: 'af_kore',     defaultPitch: 1.0, name: 'Kore',     gender: 'female', category: 'female', accent: 'US', lang: 'en-US', grade: 'C+', style: 'Clear & Balanced' },
  { id: 'af_sarah',    baseVoice: 'af_sarah',    defaultPitch: 1.0, name: 'Sarah',    gender: 'female', category: 'female', accent: 'US', lang: 'en-US', grade: 'C+', style: 'Calm Conversational' },

  // Male Voices (Strictly Top-Grade Studio-Natural US Human Voices Only)
  { id: 'am_michael',  baseVoice: 'am_michael',  defaultPitch: 1.0, name: 'Michael',  gender: 'male',   category: 'male',   accent: 'US', lang: 'en-US', grade: 'C+', style: 'Natural Warm Narrator' },
  { id: 'am_fenrir',   baseVoice: 'am_fenrir',   defaultPitch: 1.0, name: 'Fenrir',   gender: 'male',   category: 'male',   accent: 'US', lang: 'en-US', grade: 'C+', style: 'Deep Authoritative' },
  { id: 'am_puck',     baseVoice: 'am_puck',     defaultPitch: 1.0, name: 'Puck',     gender: 'male',   category: 'male',   accent: 'US', lang: 'en-US', grade: 'C+', style: 'Dynamic & Expressive' }
];

// Studio-master Float32 PCM into a clean 16-bit WAV Blob:
// trims awkward digital silence, removes DC offset, gently tames metallic vocoder buzz on q8,
// normalizes smoothly to -1.5 dBFS, and applies click-free 14ms cosine fade-in/out!
function encodePcmToWavBlob(float32Samples, sampleRate, applyWarmthFilter = true) {
  const sr = Math.max(8000, Math.min(96000, Math.round(sampleRate || 24000)));
  const srcLen = float32Samples.length;
  if (srcLen === 0) return new Blob([], { type: 'audio/wav' });

  // Fast Path: Native Rust WebAssembly Studio-Master Float32 -> Int16 Pipeline
  const wasmI16 = (window.PKWasm && window.PKWasm.ready)
    ? window.PKWasm.masterPcmToI16(float32Samples, sr, applyWarmthFilter)
    : null;

  if (wasmI16 && wasmI16.length > 0) {
    const numSamples = wasmI16.length;
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);
    const writeStr = (off, str) => {
      for (let i = 0; i < str.length; i++) view.setUint8(off + i, str.charCodeAt(i));
    };
    writeStr(0, 'RIFF');
    view.setUint32(4, 36 + numSamples * 2, true);
    writeStr(8, 'WAVE');
    writeStr(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sr, true);
    view.setUint32(28, sr * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeStr(36, 'data');
    view.setUint32(40, numSamples * 2, true);
    new Int16Array(buffer, 44, numSamples).set(wasmI16);
    return new Blob([buffer], { type: 'audio/wav' });
  }

  // Fallback JS Path (if opened over file:// without WASM fetch)
  const leadMargin = Math.min(Math.floor(sr * 0.07), Math.floor(srcLen / 6));
  const tailMargin = Math.min(Math.floor(sr * 0.09), Math.floor(srcLen / 6));
  let start = 0;
  let end = srcLen - 1;
  while (start < srcLen - 1 && Math.abs(float32Samples[start]) < 0.0006) start++;
  while (end > start && Math.abs(float32Samples[end]) < 0.0006) end--;
  start = Math.max(0, start - leadMargin);
  end = Math.min(srcLen - 1, end + tailMargin);
  const numSamples = Math.max(1, end - start + 1);

  // 2. Copy slice + remove DC offset
  const buf = new Float32Array(numSamples);
  let mean = 0;
  for (let i = 0; i < numSamples; i++) {
    const v = float32Samples[start + i];
    buf[i] = v;
    mean += v;
  }
  mean /= numSamples;
  for (let i = 0; i < numSamples; i++) buf[i] -= mean;

  // 3. Gentle Analog Warmth De-Harshing Filter (removes metallic high-freq quantization buzz!)
  if (applyWarmthFilter && numSamples > 4) {
    let prev = buf[0];
    const alpha = 0.78;
    for (let i = 1; i < numSamples; i++) {
      prev = prev + alpha * (buf[i] - prev);
      buf[i] = prev;
    }
  }

  // 4. Studio Peak Normalization to -1.5 dBFS (0.84) + click-free 14ms cosine fades
  let peak = 0;
  for (let i = 0; i < numSamples; i++) {
    const a = Math.abs(buf[i]);
    if (a > peak) peak = a;
  }
  const normGain = peak > 0.01 ? Math.min(2.2, 0.84 / peak) : 1.0;
  const fadeSamples = Math.min(Math.floor(sr * 0.014), Math.floor(numSamples / 6));

  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);
  const writeStr = (offset, str) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  };
  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sr, true);
  view.setUint32(28, sr * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, numSamples * 2, true);

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    let env = 1.0;
    if (fadeSamples > 1) {
      if (i < fadeSamples) env = 0.5 * (1 - Math.cos(Math.PI * i / fadeSamples));
      else if (i > numSamples - fadeSamples) env = 0.5 * (1 - Math.cos(Math.PI * (numSamples - i) / fadeSamples));
    }
    const s = Math.max(-1, Math.min(1, buf[i] * normGain * env));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    offset += 2;
  }
  return new Blob([buffer], { type: 'audio/wav' });
}

// Generate Kokoro-82M audio in its optimal pure-human prosody zone (zero chipmunk/vocoder artifacts!)
async function generateKokoroWavBlob(tts, text, voiceMeta, userRate = 1.0, userPitch = 1.0) {
  const pitch = Math.max(0.90, Math.min(1.14, Number(userPitch) || voiceMeta.defaultPitch || 1.0));
  const baseId = voiceMeta.baseVoice || voiceMeta.id || 'af_heart';
  // Keep Kokoro's internal generation speed strictly inside its natural human zone (0.90..1.22)!
  const compensatedSpeed = Math.max(0.90, Math.min(1.22, (Number(userRate) || 1.0) / Math.pow(pitch, 0.65)));
  const rawAudio = await tts.generate(text, { voice: baseId, speed: compensatedSpeed });

  const nativeSr = rawAudio.sampling_rate || 24000;
  const targetSr = Math.abs(pitch - 1.0) < 0.01 ? nativeSr : Math.round(nativeSr * pitch);
  const isQuantized = (getVoiceSettings().kokoroQuant || 'fp16') === 'q8';
  return encodePcmToWavBlob(rawAudio.audio, targetSr, isQuantized);
}

let localVoiceModels = [];
let activeVoiceGenderFilter = 'all'; // 'all' | 'male' | 'female'
let voiceSearchFilter = '';
let speechSentenceQueue = [];
let currentSpeechQueueIndex = 0;
let isSpeechAudioActive = false;
let isSpeechAudioPaused = false;
let currentActiveUtterance = null;
let speechPlaybackSessionId = 0;

// Kokoro-82M Neural Engine Runtime State
let kokoroTTSInstance = null;
let kokoroLoadedQuant = null;
let kokoroLoadPromise = null;
let kokoroEngineState = 'idle'; // 'idle' | 'loading' | 'ready' | 'error'
let kokoroLoadProgressPct = 0;
let kokoroLoadStatusText = '';
let kokoroIsCachedLocally = false;
let kokoroPrefetchMap = new Map(); // queueIndex -> Promise<{ url, duration }>
let kokoroActiveObjectUrl = null;
let kokoroPauseTimer = null;
let pkKokoroAudioEl = null;
let pkKokoroAudioUnlocked = false;
let pkVoiceAudioCtx = null;
let pkVoiceAudioSource = null;
const SILENT_WAV_DATA_URI = 'data:audio/wav;base64,UklGRsQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

function getKokoroAudioElement() {
  if (!pkKokoroAudioEl) {
    pkKokoroAudioEl = document.createElement('audio');
    pkKokoroAudioEl.id = 'pkKokoroAudioElement';
    pkKokoroAudioEl.preload = 'auto';
    pkKokoroAudioEl.volume = 1.0;
    pkKokoroAudioEl.muted = false;
    pkKokoroAudioEl.style.display = 'none';
    pkKokoroAudioEl.setAttribute('playsinline', '');
    pkKokoroAudioEl.setAttribute('webkit-playsinline', '');
    if (document.body) document.body.appendChild(pkKokoroAudioEl);
  }
  return pkKokoroAudioEl;
}

function stopVoiceAudioCtxSource() {
  if (pkVoiceAudioSource) {
    try { pkVoiceAudioSource.onended = null; pkVoiceAudioSource.stop(); } catch (_) {}
    pkVoiceAudioSource = null;
  }
}

// Dual-unlock HTML5 <audio> AND Web Audio AudioContext synchronously inside the user's tap gesture!
// IMPORTANT: Only call for Kokoro playback (NEVER during speechSynthesis, so Android AudioFocus isn't stolen!)
function unlockMobileAudioElement() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      if (!pkVoiceAudioCtx) pkVoiceAudioCtx = new AudioCtx();
      if (pkVoiceAudioCtx.state === 'suspended') {
        pkVoiceAudioCtx.resume().catch(() => {});
      }
      // Play 1-sample silent buffer synchronously inside tap gesture (required by older Android/iOS Chrome!)
      const silentBuf = pkVoiceAudioCtx.createBuffer(1, 1, 22050);
      const src = pkVoiceAudioCtx.createBufferSource();
      src.buffer = silentBuf;
      src.connect(pkVoiceAudioCtx.destination);
      src.start(0);
    }
  } catch (_) {}

  if (pkKokoroAudioUnlocked) return;
  try {
    const audio = getKokoroAudioElement();
    audio.muted = false;
    audio.volume = 1.0;
    audio.src = SILENT_WAV_DATA_URI;
    const p = audio.play();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        audio.pause();
        pkKokoroAudioUnlocked = true;
      }).catch(() => {});
    } else {
      pkKokoroAudioUnlocked = true;
    }
  } catch (_) {}
}

// Plays WAV via <audio>; if Android Chrome/iOS Safari rejects <audio>.play() after a long download,
// seamlessly plays through the already-unlocked Web Audio AudioContext (ZERO NotAllowedError!).
async function playKokoroUrlOrBlob(url, blob, onEnded, onError) {
  stopVoiceAudioCtxSource();
  const audio = getKokoroAudioElement();
  audio.onended = onEnded || null;
  audio.onerror = onError || null;
  audio.src = url;
  try {
    await audio.play();
    return true;
  } catch (playErr) {
    if (blob && pkVoiceAudioCtx) {
      try {
        if (pkVoiceAudioCtx.state === 'suspended') await pkVoiceAudioCtx.resume();
        const ab = await blob.arrayBuffer();
        const decoded = await pkVoiceAudioCtx.decodeAudioData(ab.slice(0));
        const src = pkVoiceAudioCtx.createBufferSource();
        src.buffer = decoded;
        src.connect(pkVoiceAudioCtx.destination);
        src.onended = () => {
          if (pkVoiceAudioSource === src) pkVoiceAudioSource = null;
          if (typeof onEnded === 'function') onEnded();
        };
        pkVoiceAudioSource = src;
        src.start(0);
        return true;
      } catch (_) {}
    }
    throw playErr;
  }
}

function getVoiceSettings() {
  if (!state.voiceSettings) {
    const isCompactPhone = typeof window !== 'undefined' && window.innerWidth < 1024;
    state.voiceSettings = {
      engine: 'device',          // 'device' (Instant Natural · 0 MB) | 'kokoro' (Offline AI · Mimi, Heart, etc.)
      kokoroVoiceId: 'cute_mimi', // Natural expressive Kokoro voice
      kokoroQuant: isCompactPhone ? 'q8' : 'fp16', // q8 on phones (crash-safe) | fp16 Studio HD on desktop
      voiceURI: '',
      voiceName: '',
      rate: 1.0,
      pitch: 1.0,
      genderFilter: 'all',
      autoScroll: true
    };
  }
  // One-time recovery on Android phones previously auto-switched to Kokoro when Chromium Android voices were filtered out
  const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent || '');
  if (isAndroid && !state.voiceSettings.voiceAndroidSoundFixV4) {
    state.voiceSettings.voiceAndroidSoundFixV4 = true;
    if (kokoroEngineState !== 'ready') {
      state.voiceSettings.engine = 'device';
    }
  }
  if (!state.voiceSettings.engine) state.voiceSettings.engine = 'device';
  if (!state.voiceSettings.kokoroVoiceId || !KOKORO_VOICE_CATALOG.some(v => v.id === state.voiceSettings.kokoroVoiceId)) {
    state.voiceSettings.kokoroVoiceId = 'cute_mimi';
  }
  if (window.PK_LITE_MODE) {
    state.voiceSettings.kokoroQuant = 'q8';
  } else if (state.voiceSettings.kokoroQuant !== 'fp16' && state.voiceSettings.kokoroQuant !== 'q8') {
    state.voiceSettings.kokoroQuant = 'fp16';
  }
  // Migrate any old extreme chipmunk pitch values (> 1.14) back into the pure natural human range
  if (typeof state.voiceSettings.pitch === 'number' && state.voiceSettings.pitch > 1.14) {
    state.voiceSettings.pitch = 1.06;
  }
  if (typeof state.voiceSettings.pitch === 'number' && state.voiceSettings.pitch < 0.90) {
    state.voiceSettings.pitch = 0.94;
  }
  return state.voiceSettings;
}

function getSelectedKokoroVoice() {
  const settings = getVoiceSettings();
  return KOKORO_VOICE_CATALOG.find(v => v.id === settings.kokoroVoiceId) || KOKORO_VOICE_CATALOG[0];
}

async function requestPersistentBrowserStorage() {
  try {
    if (navigator.storage && typeof navigator.storage.persist === 'function') {
      const already = navigator.storage.persisted ? await navigator.storage.persisted() : false;
      if (!already) await navigator.storage.persist();
    }
  } catch (_) {}
}

async function checkKokoroCacheStatus() {
  try {
    if (!('caches' in window)) return false;
    const settings = getVoiceSettings();
    const targetQuant = (window.PK_LITE_MODE || settings.kokoroQuant === 'q8') ? 'q8' : 'fp16';
    const cache = await caches.open('transformers-cache');
    const keys = await cache.keys();
    // Verify the actual .onnx model file for the active precision is cached (not just a small JSON config)
    const quantPattern = targetQuant === 'q8' ? 'quantized' : 'fp16';
    kokoroIsCachedLocally = keys.some(req => {
      const u = (req.url || '').toLowerCase();
      return u.includes('kokoro-82m') && u.includes('.onnx') && (u.includes(quantPattern) || u.includes(targetQuant));
    }) || keys.some(req => {
      const u = (req.url || '').toLowerCase();
      return u.includes('kokoro-82m') && u.includes('.onnx');
    });
    updateKokoroEngineUI();
    return kokoroIsCachedLocally;
  } catch (e) {
    return false;
  }
}

function updateKokoroEngineUI() {
  const settings = getVoiceSettings();
  const isKokoro = settings.engine === 'kokoro';

  // Engine switcher tabs
  const tabKokoro = document.getElementById('voiceEngineTabKokoro');
  const tabDevice = document.getElementById('voiceEngineTabDevice');
  if (tabKokoro && tabDevice) {
    if (isKokoro) {
      tabKokoro.className = 'flex-1 py-2 px-2.5 rounded-md font-mono text-[11px] transition-all cursor-pointer flex items-center justify-center gap-1.5 font-semibold bg-[var(--accent-vermilion)] text-white shadow-xs';
      tabDevice.className = 'flex-1 py-2 px-2.5 rounded-md font-mono text-[11px] transition-all cursor-pointer flex items-center justify-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]';
    } else {
      tabKokoro.className = 'flex-1 py-2 px-2.5 rounded-md font-mono text-[11px] transition-all cursor-pointer flex items-center justify-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]';
      tabDevice.className = 'flex-1 py-2 px-2.5 rounded-md font-mono text-[11px] transition-all cursor-pointer flex items-center justify-center gap-1.5 font-semibold bg-[var(--accent-vermilion)] text-white shadow-xs';
    }
  }

  // Status dot & headline
  const dot = document.getElementById('voiceStatusDot');
  const countEl = document.getElementById('detectedVoicesCount');
  const subEl = document.getElementById('voiceEngineBannerSub');
  const quantWrap = document.getElementById('kokoroQuantToggleWrap');
  const preloadBtn = document.getElementById('kokoroPreloadBtn');
  const progressWrap = document.getElementById('kokoroProgressWrap');
  const progressBar = document.getElementById('kokoroProgressBar');
  const progressPct = document.getElementById('kokoroProgressPct');
  const progressLabel = document.getElementById('kokoroProgressLabel');
  const pitchWrap = document.getElementById('voicePitchControlWrap');
  const searchInput = document.getElementById('voiceSearchInput');

  if (quantWrap) quantWrap.classList.toggle('hidden', !isKokoro);
  const qFp16Btn = document.getElementById('kokoroQuantFp16Btn');
  const qQ8Btn = document.getElementById('kokoroQuantQ8Btn');
  if (qFp16Btn && qQ8Btn) {
    const isHD = settings.kokoroQuant !== 'q8';
    qFp16Btn.className = isHD
      ? 'px-2 py-0.5 rounded-[3px] font-mono text-[10px] font-semibold bg-[var(--accent-vermilion)] text-white cursor-pointer'
      : 'px-2 py-0.5 rounded-[3px] font-mono text-[10px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-hairline)] cursor-pointer';
    qQ8Btn.className = !isHD
      ? 'px-2 py-0.5 rounded-[3px] font-mono text-[10px] font-semibold bg-[var(--accent-vermilion)] text-white cursor-pointer'
      : 'px-2 py-0.5 rounded-[3px] font-mono text-[10px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-hairline)] cursor-pointer';
  }
  if (pitchWrap) {
    pitchWrap.style.opacity = '1';
  }
  if (searchInput) {
    searchInput.placeholder = isKokoro
      ? 'Search voices (e.g. Mimi, Yuki, Heart, Bella, Michael)...'
      : 'Search natural voices (e.g. Google, Ava, Samantha)...';
  }

  if (isKokoro) {
    const cuteCount = KOKORO_VOICE_CATALOG.filter(v => v.category === 'cute').length;
    const maleCount = KOKORO_VOICE_CATALOG.filter(v => v.gender === 'male').length;
    const femaleCount = KOKORO_VOICE_CATALOG.filter(v => v.category === 'female').length;

    if (kokoroEngineState === 'ready' && kokoroTTSInstance) {
      if (dot) dot.className = 'w-2 h-2 rounded-full bg-emerald-500 shrink-0';
      if (countEl) countEl.textContent = `Kokoro-82M Ready · ${cuteCount} Cute, ${femaleCount} Female, ${maleCount} Male`;
      if (subEl) subEl.textContent = 'On-Device Neural WASM · Cached offline · Zero server';
      if (preloadBtn) preloadBtn.classList.add('hidden');
      if (progressWrap) progressWrap.classList.add('hidden');
    } else if (kokoroEngineState === 'loading') {
      if (dot) dot.className = 'w-2 h-2 rounded-full bg-amber-500 shrink-0';
      if (countEl) countEl.textContent = 'Loading Kokoro-82M Weights...';
      if (subEl) subEl.textContent = kokoroLoadStatusText || 'Caching model on device (one-time)...';
      if (preloadBtn) preloadBtn.classList.add('hidden');
      if (progressWrap) progressWrap.classList.remove('hidden');
      if (progressBar) progressBar.style.width = `${Math.max(4, Math.min(100, kokoroLoadProgressPct))}%`;
      if (progressPct) progressPct.textContent = `${Math.round(kokoroLoadProgressPct)}%`;
      if (progressLabel) progressLabel.textContent = kokoroLoadStatusText || 'Preparing Kokoro-82M runtime...';
    } else if (kokoroEngineState === 'error') {
      if (dot) dot.className = 'w-2 h-2 rounded-full bg-rose-500 shrink-0';
      if (countEl) countEl.textContent = `Kokoro-82M Load Interrupted`;
      if (subEl) subEl.textContent = kokoroLoadStatusText || 'Check connection for first cache, or switch to Device Native.';
      if (preloadBtn) {
        preloadBtn.classList.remove('hidden');
        preloadBtn.textContent = 'Retry Load';
      }
      if (progressWrap) progressWrap.classList.add('hidden');
    } else {
      if (dot) dot.className = 'w-2 h-2 rounded-full bg-emerald-500 shrink-0';
      if (countEl) countEl.textContent = `Kokoro-82M · ${cuteCount} Cute, ${femaleCount} Female, ${maleCount} Male`;
      if (subEl) {
        subEl.textContent = kokoroIsCachedLocally
          ? 'Cached on your device · Fast offline startup · Zero server'
          : 'Runs on phone & PC with zero server · Auto-caches once';
      }
      if (preloadBtn) {
        preloadBtn.classList.remove('hidden');
        preloadBtn.textContent = kokoroIsCachedLocally ? 'Warm Up' : 'Load Model';
      }
      if (progressWrap) progressWrap.classList.add('hidden');
    }
  } else {
    const voices = loadDetectedVoiceModels();
    const neuralCount = voices.filter(v => scoreNaturalDeviceVoice(v) >= 90).length;
    const maleCount = voices.filter(v => classifyVoiceGender(v) === 'male').length;
    const femaleCount = voices.filter(v => classifyVoiceGender(v) === 'female').length;
    if (dot) dot.className = 'w-2 h-2 rounded-full bg-emerald-500 shrink-0';
    if (countEl) {
      countEl.textContent = neuralCount > 0
        ? `Instant Natural · ${neuralCount} Neural HD (${voices.length} total)`
        : `Instant Voices · ${femaleCount} Female, ${maleCount} Male (0 MB)`;
    }
    if (subEl) subEl.textContent = 'Zero download · Plays instantly · Best natural voices ranked first';
    if (preloadBtn) preloadBtn.classList.add('hidden');
    if (progressWrap) progressWrap.classList.add('hidden');
  }
}

function setVoiceEngine(engine) {
  const settings = getVoiceSettings();
  if (settings.engine === engine) return;
  stopReadingAloud();
  settings.engine = engine;
  renderVoiceCardsList();
  updateVoiceStudioHUDLabels();
  pendingStateDirty = true;
  flushPersistStateNow();
  if (engine === 'kokoro') {
    requestPersistentBrowserStorage();
    checkKokoroCacheStatus();
    showToast('Switched to Offline AI (Kokoro-82M)');
  } else {
    showToast('Switched to Instant Natural (0 MB)');
  }
}

function updateKokoroHudProgress(visible, pct = 0) {
  const track = document.getElementById('pkAudioHudProgressTrack');
  const bar = document.getElementById('pkAudioHudProgressBar');
  const instantBtn = document.getElementById('pkAudioHudInstantBtn');
  if (track) track.classList.toggle('hidden', !visible);
  if (bar) bar.style.width = `${Math.max(4, Math.min(100, pct))}%`;
  if (instantBtn) instantBtn.classList.toggle('hidden', !visible);
}

// Allows instant zero-wait playback ONLY if a verified natural 0 MB voice is available (never robotic!)
function switchToInstantDevicePlayback() {
  if (!('speechSynthesis' in window)) {
    showToast('Instant natural voice not supported on this browser', 'ochre');
    return;
  }
  loadDetectedVoiceModels(true);
  const naturalVoice = getSelectedVoiceModel();
  if (!naturalVoice) {
    showToast('No natural 0 MB voice on this device — keeping Offline AI (Kokoro)', 'ochre');
    return;
  }

  const savedQueue = [...speechSentenceQueue];
  const savedIdx = currentSpeechQueueIndex;
  const savedLabel = document.getElementById('pkAudioReaderLabel')?.textContent || 'Reading note...';
  const settings = getVoiceSettings();
  settings.engine = 'device';
  persistState();
  updateKokoroEngineUI();
  updateKokoroHudProgress(false, 0);

  if (savedQueue.length > 0) {
    speechPlaybackSessionId++;
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      lastSpeechCancelTs = Date.now();
      window.speechSynthesis.cancel();
    }
    speechSentenceQueue = savedQueue;
    currentSpeechQueueIndex = Math.min(savedIdx, savedQueue.length - 1);
    isSpeechAudioActive = true;
    isSpeechAudioPaused = false;
    const hud = document.getElementById('pkAudioReaderHUD');
    const label = document.getElementById('pkAudioReaderLabel');
    if (hud) hud.classList.remove('hidden');
    if (label) label.textContent = savedLabel;
    updateVoiceStudioHUDLabels();
    updateHeaderReadAloudState();
    playNextDeviceSpeechSentence(speechPlaybackSessionId);
    showToast('Switched to Instant Natural Voice (0 MB)');
  } else {
    startReadingActiveNoteAloud();
  }
}

function setKokoroQuant(quant) {
  // On 2019 / low-RAM phones, enforce crash-safe q8 (fp16 156 MB + ~450 MB RAM OOM-crashes mobile tabs!)
  const next = (window.PK_LITE_MODE || quant === 'q8') ? 'q8' : 'fp16';
  const settings = getVoiceSettings();
  if (window.PK_LITE_MODE && quant === 'fp16') {
    showToast('Using Fast q8 (88 MB) on phone to prevent memory crashes', 'ochre');
  }
  if (settings.kokoroQuant === next) return;
  settings.kokoroQuant = next;
  kokoroTTSInstance = null;
  kokoroLoadPromise = null;
  kokoroLoadedQuant = null;
  kokoroEngineState = 'idle';
  clearKokoroPrefetchCache();
  persistState();
  updateKokoroEngineUI();
  showToast(next === 'fp16'
    ? 'Studio HD (fp16 · 156 MB) selected — purest human warmth'
    : 'Fast Mode (q8 · 88 MB) selected — crash-safe mobile mode');
}

let kokoroWorker = null;
let kokoroWorkerReqId = 0;
const kokoroWorkerPending = new Map();
let kokoroWorkerLastUiTs = 0;

function terminateKokoroWorker() {
  if (kokoroWorker) {
    try { kokoroWorker.terminate(); } catch (_) {}
    kokoroWorker = null;
  }
  kokoroWorkerPending.forEach(({ reject }) => reject(new Error('Worker stopped')));
  kokoroWorkerPending.clear();
}

function getOrCreateKokoroWorker(expectedMB, alreadyCached) {
  if (kokoroWorker) return kokoroWorker;
  if (typeof Worker === 'undefined' || location.protocol === 'file:') return null;
  try {
    const w = new Worker('./js/kokoro-worker.js', { type: 'module' });
    w.onmessage = (ev) => {
      const d = ev.data || {};
      if (d.type === 'reply') {
        const entry = kokoroWorkerPending.get(d.id);
        if (!entry) return;
        kokoroWorkerPending.delete(d.id);
        if (d.ok) entry.resolve(d);
        else entry.reject(new Error(d.error || 'Kokoro worker error'));
        return;
      }
      if (d.type === 'progress') {
        const activeVoiceName = getSelectedKokoroVoice().name;
        let hudStatus = null;
        if (d.status === 'progress') {
          const isMain = (d.file || '').includes('.onnx');
          const pct = typeof d.progress === 'number' ? d.progress : (d.total ? (d.loaded / d.total) * 100 : 0);
          if (isMain && d.total > 1000000) {
            const loadedMB = (d.loaded / (1024 * 1024)).toFixed(0);
            const totalMB = (d.total / (1024 * 1024)).toFixed(0);
            kokoroLoadProgressPct = Math.max(8, Math.min(98, pct));
            kokoroLoadStatusText = alreadyCached
              ? `Loading from cache ${Math.round(kokoroLoadProgressPct)}%...`
              : `Downloading ${Math.round(kokoroLoadProgressPct)}% (${loadedMB}/${totalMB} MB)`;
            hudStatus = alreadyCached
              ? `Loading cache ${Math.round(kokoroLoadProgressPct)}%`
              : `${Math.round(kokoroLoadProgressPct)}% · ${loadedMB}/${totalMB} MB`;
          } else {
            if (kokoroLoadProgressPct < 12) kokoroLoadProgressPct = 10;
            kokoroLoadStatusText = alreadyCached ? `Loading ${activeVoiceName}...` : 'Preparing neural voice...';
            hudStatus = kokoroLoadStatusText;
          }
        } else if (d.status === 'done' && (d.file || '').includes('.onnx')) {
          kokoroLoadProgressPct = 99;
          kokoroLoadStatusText = `Warming up ${activeVoiceName} neural voice...`;
          hudStatus = `Warming up ${activeVoiceName}...`;
        } else if (d.status === 'ready') {
          kokoroLoadProgressPct = 100;
          kokoroLoadStatusText = 'Kokoro-82M Ready (Cached Offline)';
          hudStatus = `${activeVoiceName} Ready!`;
        }
        const now = performance.now();
        if (now - kokoroWorkerLastUiTs > 140 || d.status === 'done' || d.status === 'ready') {
          kokoroWorkerLastUiTs = now;
          updateKokoroEngineUI();
          updateKokoroHudProgress(true, kokoroLoadProgressPct);
          if (hudStatus) updateVoiceStudioHUDLabels(hudStatus);
        }
      }
    };
    w.onerror = () => {
      terminateKokoroWorker();
    };
    kokoroWorker = w;
    return w;
  } catch (_) {
    return null;
  }
}

function callKokoroWorker(worker, payload) {
  return new Promise((resolve, reject) => {
    const id = ++kokoroWorkerReqId;
    kokoroWorkerPending.set(id, { resolve, reject });
    worker.postMessage({ ...payload, id });
  });
}

// Low-RAM Phone Anti-Crash Memory Guard: never hold Kokoro-82M + Whisper AI in WASM RAM simultaneously!
function releaseUnusedAIEngines(keepEngine) {
  if (!window.PK_LITE_MODE) return;
  if (keepEngine !== 'kokoro' && (kokoroTTSInstance || kokoroWorker)) {
    terminateKokoroWorker();
    kokoroTTSInstance = null;
    kokoroLoadPromise = null;
    kokoroEngineState = 'idle';
    clearKokoroPrefetchCache();
    if (typeof kokoroAuditionCache !== 'undefined') {
      kokoroAuditionCache.forEach(url => { try { URL.revokeObjectURL(url); } catch (e) {} });
      kokoroAuditionCache.clear();
    }
  }
  if (keepEngine !== 'whisper' && typeof pkWhisperPipeline !== 'undefined' && pkWhisperPipeline) {
    pkWhisperPipeline = null;
    pkWhisperLoadPromise = null;
  }
}

async function ensureKokoroEngineLoaded(onProgressCallback = null) {
  releaseUnusedAIEngines('kokoro');
  const settings = getVoiceSettings();
  const targetQuant = (window.PK_LITE_MODE || settings.kokoroQuant === 'q8') ? 'q8' : 'fp16';

  if (kokoroTTSInstance && kokoroLoadedQuant === targetQuant && kokoroEngineState === 'ready') {
    updateKokoroHudProgress(false, 100);
    return kokoroTTSInstance;
  }

  if (kokoroLoadPromise && kokoroLoadedQuant === targetQuant) {
    updateKokoroHudProgress(true, kokoroLoadProgressPct);
    return kokoroLoadPromise;
  }

  kokoroLoadedQuant = targetQuant;
  kokoroEngineState = 'loading';
  kokoroLoadProgressPct = 4;
  kokoroLoadStatusText = 'Connecting to Kokoro-82M runtime...';
  updateKokoroEngineUI();
  updateKokoroHudProgress(true, 4);
  updateVoiceStudioHUDLabels('Loading runtime...');

  const fileProgressMap = new Map();
  let lastUiUpdateTs = 0;

  kokoroLoadPromise = (async () => {
    try {
      // Request persistent browser storage so Android Chrome does NOT evict the cached Kokoro AI model!
      requestPersistentBrowserStorage();
      const alreadyCached = await checkKokoroCacheStatus();
      const expectedMB = targetQuant === 'fp16' ? 156 : 88;
      const activeVoiceName = getSelectedKokoroVoice().name;

      // FAST PATH: Run Kokoro-82M in a dedicated off-main-thread Web Worker (0ms UI lag, locked 60fps on 2019 phones!)
      const worker = getOrCreateKokoroWorker(expectedMB, alreadyCached);
      if (worker) {
        kokoroLoadProgressPct = alreadyCached ? 45 : 8;
        kokoroLoadStatusText = alreadyCached
          ? `Loading ${activeVoiceName} from device cache (0 MB download)...`
          : `Downloading Kokoro-82M (${expectedMB} MB once)...`;
        updateKokoroEngineUI();
        updateKokoroHudProgress(true, kokoroLoadProgressPct);
        updateVoiceStudioHUDLabels(alreadyCached ? `Loading ${activeVoiceName}...` : `Downloading (${expectedMB} MB once)...`);

        await callKokoroWorker(worker, { type: 'init', dtype: targetQuant });

        const workerProxy = {
          isWorkerProxy: true,
          async generate(text, opts = {}) {
            const w = getOrCreateKokoroWorker(expectedMB, true);
            if (!w) throw new Error('Kokoro worker unavailable');
            const res = await callKokoroWorker(w, {
              type: 'generate',
              dtype: targetQuant,
              text,
              voice: opts.voice || 'af_heart',
              speed: opts.speed || 1.0
            });
            return { audio: new Float32Array(res.audio), sampling_rate: res.sampleRate || 24000 };
          }
        };

        kokoroTTSInstance = workerProxy;
        kokoroEngineState = 'ready';
        kokoroLoadProgressPct = 100;
        kokoroIsCachedLocally = true;
        kokoroLoadStatusText = 'Kokoro-82M Ready (Off-Thread · Cached Offline)';
        updateKokoroEngineUI();
        updateKokoroHudProgress(false, 100);
        updateVoiceStudioHUDLabels();
        return workerProxy;
      }

      // FALLBACK PATH (file:// local open without HTTP server): In-page KokoroTTS
      let mod = null;
      try {
        mod = await import(KOKORO_ESM_URL);
      } catch (cdnErr) {
        mod = await import(KOKORO_ESM_FALLBACK_URL);
      }
      const { KokoroTTS } = mod;
      if (!KokoroTTS) throw new Error('KokoroTTS export not found');

      kokoroLoadProgressPct = alreadyCached ? 45 : 8;
      kokoroLoadStatusText = alreadyCached
        ? `Loading ${activeVoiceName} from device cache (0 MB download)...`
        : (targetQuant === 'fp16'
            ? 'Downloading Kokoro-82M Studio HD (156 MB once)...'
            : 'Downloading Kokoro-82M Fast q8 (88 MB once)...');
      updateKokoroEngineUI();
      updateKokoroHudProgress(true, kokoroLoadProgressPct);
      updateVoiceStudioHUDLabels(alreadyCached ? `Loading ${activeVoiceName} from cache...` : `Downloading 8% (0/${expectedMB} MB)`);

      const tts = await KokoroTTS.from_pretrained(KOKORO_MODEL_ID, {
        dtype: targetQuant,
        device: 'wasm',
        progress_callback: (info) => {
          if (!info) return;
          const fileKey = info.file || info.name || 'model';
          let hudStatus = null;

          if (info.status === 'progress') {
            const isMainModel = fileKey.includes('.onnx');
            const pct = typeof info.progress === 'number'
              ? info.progress
              : (info.total ? (info.loaded / info.total) * 100 : 0);

            if (isMainModel && info.total > 1000000) {
              const loadedMB = (info.loaded / (1024 * 1024)).toFixed(0);
              const totalMB = (info.total / (1024 * 1024)).toFixed(0);
              kokoroLoadProgressPct = Math.max(8, Math.min(98, pct));
              kokoroLoadStatusText = alreadyCached
                ? `Loading from cache ${Math.round(kokoroLoadProgressPct)}%...`
                : `Downloading ${Math.round(kokoroLoadProgressPct)}% (${loadedMB}/${totalMB} MB)`;
              hudStatus = alreadyCached
                ? `Loading cache ${Math.round(kokoroLoadProgressPct)}%`
                : `${Math.round(kokoroLoadProgressPct)}% · ${loadedMB}/${totalMB} MB`;
            } else {
              fileProgressMap.set(fileKey, { loaded: info.loaded || pct, total: info.total || 100 });
              if (kokoroLoadProgressPct < 12) kokoroLoadProgressPct = 10;
              kokoroLoadStatusText = alreadyCached
                ? `Loading ${activeVoiceName} voice data...`
                : `Preparing tokenizer (${fileKey.split('/').pop()})...`;
              hudStatus = alreadyCached ? `Loading ${activeVoiceName}...` : 'Preparing tokenizer...';
            }
          } else if (info.status === 'done') {
            if (fileKey.includes('.onnx')) {
              kokoroLoadProgressPct = 99;
              kokoroLoadStatusText = `Warming up ${activeVoiceName} neural engine...`;
              hudStatus = `Warming up ${activeVoiceName}...`;
            }
          } else if (info.status === 'ready') {
            kokoroLoadProgressPct = 100;
            kokoroLoadStatusText = 'Kokoro-82M Ready (Cached Offline)';
            hudStatus = `${activeVoiceName} Ready!`;
          }

          // Throttle DOM updates to ~8fps so phone downloads run at max speed without jank
          const now = performance.now();
          if (now - lastUiUpdateTs > 120 || info.status === 'done' || info.status === 'ready') {
            lastUiUpdateTs = now;
            updateKokoroEngineUI();
            updateKokoroHudProgress(true, kokoroLoadProgressPct);
            if (hudStatus) updateVoiceStudioHUDLabels(hudStatus);
            if (typeof onProgressCallback === 'function') {
              onProgressCallback(kokoroLoadProgressPct, kokoroLoadStatusText);
            }
          }
        }
      });

      kokoroTTSInstance = tts;
      kokoroEngineState = 'ready';
      kokoroLoadProgressPct = 100;
      kokoroIsCachedLocally = true;
      kokoroLoadStatusText = 'Kokoro-82M Ready (Cached Offline)';
      updateKokoroEngineUI();
      updateKokoroHudProgress(false, 100);
      updateVoiceStudioHUDLabels();
      return tts;
    } catch (err) {
      console.error('Kokoro-82M load error:', err);
      kokoroEngineState = 'error';
      kokoroLoadPromise = null;
      kokoroLoadStatusText = (err && err.message) ? err.message.slice(0, 72) : 'Failed to load Kokoro-82M weights';
      updateKokoroEngineUI();
      updateKokoroHudProgress(false, 0);
      throw err;
    }
  })();

  return kokoroLoadPromise;
}

async function preloadKokoroModelFromUI() {
  unlockMobileAudioElement();
  showToast('Loading Kokoro-82M neural model into browser cache...', 'ochre');
  try {
    await ensureKokoroEngineLoaded();
    showToast('Kokoro-82M Ready! Cached offline on your device.');
    playChimeSound();
  } catch (e) {
    showToast('Could not download Kokoro-82M. Check network or use Device Native.', 'ochre');
  }
}

// =========================================================================
// NATURAL TEXT NORMALIZATION & SENTENCE CHUNKING (FOR NATURAL SPEECH)
// =========================================================================
// Real letter-by-letter acronyms that SHOULD be spelled out; all other
// ALL-CAPS words with vowels (e.g. "KON", "NOTE", "HELLO", "WORK") are
// converted to Title Case so Kokoro & Device TTS pronounce them as real words!
const TRUE_SPELLED_ACRONYMS = new Set([
  'AI', 'ML', 'DL', 'NLP', 'LLM', 'API', 'SDK', 'CLI', 'GUI', 'UI', 'UX',
  'OS', 'PC', 'CPU', 'GPU', 'NPU', 'TPU', 'RAM', 'ROM', 'SSD', 'HDD',
  'USB', 'HDMI', 'URL', 'URI', 'HTTP', 'HTTPS', 'HTML', 'CSS', 'JS', 'TS',
  'JSX', 'TSX', 'SQL', 'XML', 'YAML', 'CSV', 'PDF', 'PNG', 'JPG', 'JPEG',
  'GIF', 'SVG', 'MP3', 'MP4', 'WAV', 'TTS', 'STT', 'ASR', 'PWA', 'VPN',
  'DNS', 'TCP', 'UDP', 'IP', 'SSH', 'SSL', 'TLS', 'FTP', 'JWT', 'AWS',
  'GCP', 'CI', 'CD', 'PR', 'QA', 'DB', 'DOM', 'CDN', 'SEO', 'VR', 'AR',
  'XR', 'RGB', 'FPS', 'DPI', 'LED', 'LCD', 'OLED', 'HDR', 'NFC', 'GPS',
  'LTE', 'SMS', 'SIM', 'QR', 'ID', 'UUID', 'PK',
  'US', 'USA', 'UK', 'EU', 'UN', 'FBI', 'CIA', 'NSA', 'FDA', 'CDC',
  'CEO', 'CTO', 'CFO', 'COO', 'VP', 'HR', 'IT', 'ROI', 'KPI', 'B2B', 'B2C',
  'FAQ', 'DIY', 'FYI', 'BTW', 'VIP', 'RSVP', 'ETA', 'ASAP', 'ATM', 'TV',
  'DVD', 'FM', 'AM', 'PM', 'BC', 'AD', 'BCE', 'CE', 'IQ', 'EQ', 'MD',
  'RN', 'JD', 'MBA', 'BA', 'BS', 'MS', 'NY', 'LA', 'SF', 'DC', 'OK',
  'OMG', 'BRB', 'TBD', 'TBA'
]);

function normalizeUppercaseWordsForNaturalSpeech(text) {
  if (!text) return '';
  // Match ALL-CAPS words of 2+ letters (including possessives like KON'S)
  return text.replace(/\b([A-Z]{2,})('S)?\b/g, (match, word, possessive) => {
    // Keep real acronyms (AI, API, PK, USA, etc.) uppercase so they read naturally
    if (TRUE_SPELLED_ACRONYMS.has(word)) {
      return possessive ? `${word}'s` : word;
    }
    // Keep short consonant-only clusters (no vowels A/E/I/O/U/Y, e.g. TXT, BBC, CNN) uppercase
    if (word.length <= 4 && !/[AEIOUY]/.test(word)) {
      return possessive ? `${word}'s` : word;
    }
    // Pronounceable ALL-CAPS word (e.g. KON, KUROSAKI, NOTE, TODO, IMPORTANT) -> Title Case
    // Prevents espeak/Kokoro & Device TTS from spelling "KON" out as "K O N"!
    const titleCased = word.charAt(0) + word.slice(1).toLowerCase();
    return possessive ? `${titleCased}'s` : titleCased;
  });
}

function normalizeTextForNaturalSpeech(rawText) {
  if (!rawText) return '';
  let text = String(rawText);

  // 1. Decode common HTML entities and strip HTML tags WITHOUT clobbering existing ? or ! punctuation!
  text = text
    .replace(/([.!?])\s*(?:<br\s*\/?>|<\/(?:p|div|li|h[1-6]|blockquote)>)/gi, '$1 ')
    .replace(/<br\s*\/?>/gi, '. ')
    .replace(/<\/(p|div|li|h[1-6]|blockquote)>/gi, '. ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, ' and ')
    .replace(/&lt;/gi, ' less than ')
    .replace(/&gt;/gi, ' greater than ')
    .replace(/&quot;|[“”«»]/g, '"')
    .replace(/&#39;|&apos;|[‘’]/g, "'")
    .replace(/&mdash;|—/g, ', ')
    .replace(/&ndash;|–/g, ' to ');

  // 2. Clean PK Note / Markdown syntax cleanly so Kokoro reads human prose
  text = text
    // Wikilinks: [[Target|Alias]] -> Alias, [[Target]] -> Target
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    // Markdown links: [Label](url) -> Label
    .replace(/\[([^\]]+)\]\((?:[^)]+)\)/g, '$1')
    // Bare URLs: https://domain.com/path -> domain.com
    .replace(/https?:\/\/(?:www\.)?([a-zA-Z0-9.-]+)(?:\/[^\s]*)?/g, 'link to $1')
    // Strip markdown headings, blockquotes, checkboxes, list bullets
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s*>\s?/gm, '')
    .replace(/^\s*[-*+]\s+\[[ xX]\]\s*/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    // Strip bold / italic / strikethrough / inline code markers without losing text
    .replace(/```[\s\S]*?```/g, ' code block. ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/~~([^~]+)~~/g, '$1');

  // 3. Remove emojis & pictographic glyphs that disrupt neural phonemizers
  text = text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, ' ');

  // 4. Expand symbols & common abbreviations for natural pronunciation
  text = text
    .replace(/\be\.g\.,?\s*/gi, 'for example, ')
    .replace(/\bi\.e\.,?\s*/gi, 'that is, ')
    .replace(/\betc\./gi, 'et cetera.')
    .replace(/\bvs\.?\s+/gi, 'versus ')
    .replace(/\bapprox\.?\s+/gi, 'approximately ')
    .replace(/\bw\/\s+/gi, 'with ')
    .replace(/\bw\/o\s+/gi, 'without ')
    .replace(/\band\/or\b/gi, 'and or')
    .replace(/(\b[a-zA-Z]{2,})\/([a-zA-Z]{2,}\b)/g, '$1 or $2')
    .replace(/\s*=>\s*/g, ', resulting in ')
    .replace(/\s*(?:->|→)\s*/g, ', leading to ')
    .replace(/\s*&\s*/g, ' and ')
    .replace(/(\d)\s*%/g, '$1 percent')
    .replace(/\s*\+\s*/g, ' plus ')
    .replace(/[#*_~\\|{}[\]<>]/g, ' ');

  // 5. Fix ALL-CAPS words (e.g. KON -> Kon, NOTE -> Note) so they are spoken as natural words
  text = normalizeUppercaseWordsForNaturalSpeech(text);

  // 6. Preserve expressive punctuation (?, !, ...) & conversational phrasing so questions truly sound like questions!
  text = text
    // Turn parenthetical asides "(like this)" into natural spoken commas ", like this,"
    .replace(/\(\s*([^()]{2,80}?)\s*\)/g, ', $1, ')
    // Unwrap quotes cleanly around dialogue/questions ("Why?" -> Why?) so phonemizers attach rising pitch directly to the final word!
    .replace(/"([^"]+)"/g, '$1')
    .replace(/([?!])["']+/g, '$1')
    .replace(/["']+([?!])/g, '$1')
    .replace(/\s+([,.;:!?])/g, '$1')
    // Preserve natural ellipses (...) while NEVER letting a period overwrite ? or !
    .replace(/\.{3,}|…/g, '\u2026')
    .replace(/([.!?]{2,})/g, (cluster) => {
      if (cluster.includes('?')) return '?';
      if (cluster.includes('!')) return '!';
      return '.';
    })
    .replace(/\u2026/g, '...')
    .replace(/,\s*,+/g, ',')
    .replace(/\s+/g, ' ')
    .trim();

  return text;
}

function splitTextIntoNaturalChunks(cleanText, maxChunkChars = 300) {
  if (!cleanText) return [];

  // Protect common honorifics/abbreviations so sentence splitting doesn't break after Dr. / Mr. / Ms.
  const protectedText = cleanText.replace(/\b(Mr|Mrs|Ms|Dr|Prof|Sr|Jr|St|No|Fig)\./g, '$1\u0000');

  // Split on terminal sentence punctuation followed by whitespace (keep ... intact)
  const rawSentences = protectedText
    .split(/(?<=[.!?])(?<!\.\.\.)\s+/)
    .map(s => s.replace(/\u0000/g, '.').trim())
    .filter(Boolean);

  // Group short adjacent flat statements into cohesive breath groups,
  // BUT keep every question (?) and exclamation (!) as its OWN expressive prosody turn
  // so the voice cleanly lifts pitch on every "?" and energizes every "!"!
  const groupedSentences = [];
  let breathGroup = '';
  for (const s of rawSentences) {
    const punctuated = ensureTerminalPunctuation(s);
    const isExpressive = /[?!]$/.test(punctuated);
    if (isExpressive) {
      if (breathGroup) {
        groupedSentences.push(breathGroup);
        breathGroup = '';
      }
      groupedSentences.push(punctuated);
      continue;
    }
    if (!breathGroup) {
      breathGroup = punctuated;
    } else if ((breathGroup.length + 1 + punctuated.length) <= maxChunkChars) {
      breathGroup += ' ' + punctuated;
    } else {
      groupedSentences.push(breathGroup);
      breathGroup = punctuated;
    }
  }
  if (breathGroup) groupedSentences.push(breathGroup);

  const finalChunks = [];
  for (const sentence of groupedSentences) {
    if (sentence.length <= maxChunkChars) {
      finalChunks.push(ensureTerminalPunctuation(sentence));
    } else {
      // Gently break long sentences at natural clause boundaries (; : ,) so Kokoro breathes naturally
      const clauses = sentence.split(/(?<=[;:,])\s+/);
      let current = '';
      for (const clause of clauses) {
        if (!clause) continue;
        if ((current + ' ' + clause).trim().length <= maxChunkChars) {
          current = (current + ' ' + clause).trim();
        } else {
          if (current) finalChunks.push(ensureTerminalPunctuation(current));
          if (clause.length <= maxChunkChars) {
            current = clause;
          } else {
            // Fallback word-level split for extremely long unpunctuated runs
            const words = clause.split(/\s+/);
            let sub = '';
            for (const w of words) {
              if ((sub + ' ' + w).trim().length <= maxChunkChars) {
                sub = (sub + ' ' + w).trim();
              } else {
                if (sub) finalChunks.push(ensureTerminalPunctuation(sub));
                sub = w;
              }
            }
            current = sub;
          }
        }
      }
      if (current) finalChunks.push(ensureTerminalPunctuation(current));
    }
  }
  return finalChunks;
}

function ensureTerminalPunctuation(text) {
  const trimmed = (text || '').trim();
  if (!trimmed) return '';
  if (/[.!?]$/.test(trimmed)) return trimmed;
  if (/[,;:]$/.test(trimmed)) return trimmed;
  return trimmed + '.';
}

// =========================================================================
// DEVICE NATIVE SPEECH SYNTHESIS HELPERS (INSTANT FALLBACK ENGINE)
// =========================================================================
function classifyVoiceGender(voice) {
  if (!voice) return 'neutral';
  const name = (voice.name || '').toLowerCase();
  if (name.includes('female')) return 'female';
  if (name.includes('male') && !name.includes('female')) return 'male';

  const femaleKeywords = [
    'zira', 'jenny', 'aria', 'ava', 'emma', 'sonia', 'libby', 'maisie', 'michelle', 'ana',
    'samantha', 'zoe', 'nicky', 'karen', 'susan', 'hazel', 'victoria', 'catherine', 'alice',
    'elena', 'eva', 'fiona', 'moira', 'veena', 'tessa', 'serena', 'anna', 'kathy', 'princess',
    'vicki', 'kate', 'sarah', 'linda', 'clara', 'stephanie', 'lucia', 'laura', 'helena',
    'marie', 'camille', 'amira', 'julie', 'en-us-x-tpd', 'en-gb-x-gba', 'en-gb-x-gbc'
  ];
  if (femaleKeywords.some(k => name.includes(k))) return 'female';

  const maleKeywords = [
    'david', 'mark', 'george', 'daniel', 'arthur', 'oliver', 'guy', 'andrew', 'brian',
    'christopher', 'eric', 'steffan', 'ryan', 'roger', 'stefan', 'thomas', 'paul', 'aaron',
    'alex', 'fred', 'ralph', 'bruce', 'junior', 'albert', 'tom', 'james', 'john', 'robert',
    'william', 'richard', 'charles', 'bernard', 'damien', 'jorge', 'alva', 'diego',
    'en-us-x-sfg', 'en-us-x-iol', 'en-gb-x-gbb', 'en-gb-x-gbd'
  ];
  if (maleKeywords.some(k => name.includes(k))) return 'male';

  return 'neutral';
}

// Rank built-in zero-download voices so ultra-natural Neural/Premium/Enhanced/Google voices ALWAYS come first
// and old robotic legacy voices (eSpeak, David Desktop, Compact, novelty voices) sink to the bottom!
function scoreNaturalDeviceVoice(voice) {
  if (!voice) return -999;
  const name = (voice.name || '').toLowerCase();
  const lang = (voice.lang || '').toLowerCase();
  let score = 0;

  // Prefer user's primary English locale first
  if (lang === 'en-us' || lang === 'en_us') score += 28;
  else if (lang === 'en-gb' || lang === 'en_gb') score += 24;
  else if (lang.startsWith('en')) score += 16;

  // Top-tier Neural / Natural / Premium / Enhanced / Android Network voices (zero download, genuinely human!)
  const uri = (voice.voiceURI || '').toLowerCase();
  if (name.includes('natural')) score += 130;
  if (name.includes('neural')) score += 125;
  if (name.includes('multilingual')) score += 20;
  if (name.includes('online') || uri.includes('-network') || voice.localService === false) score += 45;
  if (name.includes('premium') || name.includes('enhanced') || name.includes('siri')) score += 115;
  if (name.includes('wavenet') || name.includes('studio')) score += 105;
  if (name.includes('google us english') || name.includes('google uk english')) score += 92;
  else if (name.includes('google') || /en-[a-z]{2}-x-/.test(uri)) score += 75;
  if (voice.default) score += 12;

  // Favorite ultra-natural flagship voices on Edge / Apple / Android
  if (/\b(ava|aria|jenny|emma|sonia|samantha|zoe|nicky|guy|andrew|brian)\b/.test(name)) score += 22;

  // Strongly penalize old robotic/novelty voices so they are NEVER auto-picked!
  if (/(espeak|compact|eloquence|albert|bahh|bells|boing|bubbles|cellos|fred|good news|jester|organ|ralph|superstar|trinoids|wobble|zarvox|bad news|hysterical|pipe organ|whisper)/.test(name)) {
    score -= 120;
  }
  if ((name.includes('david') || name.includes('zira') || name.includes('mark')) && !name.includes('natural') && !name.includes('neural')) {
    score -= 45;
  }
  return score;
}

const IS_ANDROID_BROWSER = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent || '');

// ZERO-ROBOTIC-VOICE STRICT FILTER:
// Blocks EVERY robotic/legacy/compact voice across all OSes, while properly recognizing Chromium Android's
// locale-named Google Speech Services voices (since Chromium Android hardcodes localService=true & hides metadata).
function isExplicitlyRoboticVoice(voice) {
  if (!voice) return true;
  const name = (voice.name || '').toLowerCase();
  const uri = (voice.voiceURI || '').toLowerCase();
  const combined = `${name} ${uri}`;
  if (/(espeak|compact|eloquence|flite|festival|pico|mbrola|sapi|samsung|desktop|-local\b|albert|bad news|bahh|bells|boing|bubbles|cellos|eddy|flo|fred|good news|grandma|grandpa|hysterical|jester|junior|kathy|organ|pipe organ|princess|ralph|reed|rocko|sandy|shelley|superstar|trinoids|vicki|whisper|wobble|zarvox)/.test(combined)) {
    return true;
  }
  if (name.includes('microsoft') && !/(natural|neural|online)/.test(combined)) {
    return true;
  }
  return false;
}

function isTier1NaturalVoice(voice) {
  if (!voice || isExplicitlyRoboticVoice(voice)) return false;
  const name = (voice.name || '').toLowerCase();
  const uri = (voice.voiceURI || '').toLowerCase();
  const combined = `${name} ${uri}`;

  // Genuine cloud/network neural voices (Edge Online Natural, Chrome Google Cloud, Android -network)
  if (voice.localService === false) return true;

  // Genuine high-definition local neural/enhanced voices (Apple Premium/Enhanced/Siri, Neural, Natural, WaveNet, Studio)
  if (/(natural|neural|online|premium|enhanced|siri|wavenet|studio|multilingual|-network\b)/.test(combined)) {
    return true;
  }

  // Chromium on Android (TtsPlatformImplAndroid) hardcodes localService=true and exposes Google Speech Services
  // simply as locale display names like "English United States" / "English (United States)" without "Natural".
  if (IS_ANDROID_BROWSER) {
    const lang = (voice.lang || '').toLowerCase();
    if (lang.startsWith('en') || voice.default) return true;
  }

  return false;
}

// Strictly identify & remove EVERY robotic / legacy / compact / un-enhanced system voice from PK Note!
function isRoboticSystemVoice(voice) {
  return !isTier1NaturalVoice(voice);
}

let voicesCacheReady = false;
let voicesChangedDebounceTimer = null;
let suppressVoicesChangedUntil = 0;

function loadDetectedVoiceModels(forceRefresh = false) {
  if (!('speechSynthesis' in window)) return [];
  if (voicesCacheReady && !forceRefresh && localVoiceModels.length > 0) {
    return localVoiceModels;
  }
  const rawVoices = window.speechSynthesis.getVoices();
  if (rawVoices && rawVoices.length > 0) {
    const userLangPrefix = (navigator.language || 'en').slice(0, 2).toLowerCase();
    // Prefer cloud/network voices exclusively when present; on Android also allow Chromium's non-robotic Google locale voices!
    const valid = rawVoices.filter(v => isTier1NaturalVoice(v));
    const cloudOrNeural = valid.filter(v =>
      v.localService === false || /(natural|neural|online|premium|enhanced|siri|wavenet|studio|-network\b)/i.test(`${v.name} ${v.voiceURI}`)
    );
    const naturalAll = (cloudOrNeural.length > 0 ? cloudOrNeural : valid)
      .sort((a, b) => scoreNaturalDeviceVoice(b) - scoreNaturalDeviceVoice(a));

    const primaryLang = naturalAll.filter(v => {
      const l = (v.lang || '').toLowerCase();
      return l.startsWith('en') || l.startsWith(userLangPrefix);
    });
    const cap = window.PK_LITE_MODE ? 14 : 24;
    localVoiceModels = (primaryLang.length > 0 ? primaryLang : naturalAll).slice(0, cap);
    voicesCacheReady = true;
  }
  return localVoiceModels;
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    // CRITICAL FOR 2019 ANDROID PHONES: Ignore spurious onvoiceschanged fired during speechSynthesis.speak/cancel!
    if (Date.now() < suppressVoicesChangedUntil) return;
    clearTimeout(voicesChangedDebounceTimer);
    voicesChangedDebounceTimer = setTimeout(() => {
      loadDetectedVoiceModels(true);
      updateVoiceStudioHUDLabels();
      const modal = document.getElementById('voiceModelModalBackdrop');
      if (modal && !modal.classList.contains('hidden') && getVoiceSettings().engine === 'device') {
        renderVoiceCardsList();
      }
    }, 450);
  };
  setTimeout(() => loadDetectedVoiceModels(true), 150);
}

function getSelectedVoiceModel() {
  const settings = getVoiceSettings();
  const voices = loadDetectedVoiceModels();
  if (!voices || voices.length === 0) return null;

  if (settings.voiceURI) {
    const found = voices.find(v => v.voiceURI === settings.voiceURI);
    if (found) return found;
  }
  if (settings.voiceName) {
    const found = voices.find(v => v.name === settings.voiceName);
    if (found) return found;
  }
  // Voices are already sorted by scoreNaturalDeviceVoice() — pick the #1 highest-rated natural human voice!
  if (settings.genderFilter === 'male') {
    const male = voices.find(v => classifyVoiceGender(v) === 'male' && v.lang && v.lang.startsWith('en'));
    if (male) return male;
  } else if (settings.genderFilter === 'female' || settings.genderFilter === 'cute') {
    const female = voices.find(v => classifyVoiceGender(v) === 'female' && v.lang && v.lang.startsWith('en'));
    if (female) return female;
  }

  return voices.find(v => v.lang && v.lang.startsWith('en')) || voices[0];
}

// =========================================================================
// VOICE SYNTHESIS STUDIO MODAL CONTROLS
// =========================================================================
function openVoiceModelModal() {
  loadDetectedVoiceModels(!voicesCacheReady);
  // Populate inputs & cards BEFORE unhiding backdrop -> zero forced reflows, zero CSS transition storms, <10ms open!
  syncVoiceStudioInputs();
  renderVoiceCardsList();
  const backdrop = document.getElementById('voiceModelModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('hidden');
  }
  if (getVoiceSettings().engine === 'kokoro') {
    checkKokoroCacheStatus();
  }
}

function closeVoiceModelModal() {
  const backdrop = document.getElementById('voiceModelModalBackdrop');
  if (backdrop) backdrop.classList.add('hidden');
}

function syncVoiceStudioInputs() {
  const settings = getVoiceSettings();
  const rateSlider = document.getElementById('voiceRateSlider');
  const rateDisp = document.getElementById('voiceRateDisplay');
  if (rateSlider && rateDisp) {
    rateSlider.value = settings.rate || 1.0;
    rateDisp.textContent = `${Number(settings.rate || 1.0).toFixed(2)}x`;
  }

  const pitchSlider = document.getElementById('voicePitchSlider');
  const pitchDisp = document.getElementById('voicePitchDisplay');
  if (pitchSlider && pitchDisp) {
    pitchSlider.value = settings.pitch || 1.0;
    pitchDisp.textContent = formatVoicePitchLabel(Number(settings.pitch || 1.0));
  }

  const karaokeToggle = document.getElementById('voiceKaraokeToggle');
  if (karaokeToggle) {
    karaokeToggle.checked = settings.autoScroll !== false;
  }

  setVoiceGenderFilter(settings.genderFilter || 'all', false, false);
}

function formatVoicePitchLabel(p) {
  if (p < 0.96) return `Deep (${p.toFixed(2)})`;
  if (p <= 1.02) return `Natural (${p.toFixed(2)})`;
  if (p <= 1.06) return `Soft (${p.toFixed(2)})`;
  if (p <= 1.10) return `Sweet (${p.toFixed(2)})`;
  return `Petite (${p.toFixed(2)})`;
}

function setVoiceGenderFilter(filter, render = true, shouldPersist = true) {
  activeVoiceGenderFilter = filter;
  const settings = getVoiceSettings();
  settings.genderFilter = filter;
  if (shouldPersist) persistState();

  ['all', 'cute', 'female', 'male'].forEach(f => {
    const btn = document.getElementById(`voiceFilter${f.charAt(0).toUpperCase() + f.slice(1)}`);
    if (btn) {
      if (f === filter) {
        btn.className = 'py-1.5 px-2 rounded font-mono text-[11px] transition-colors cursor-pointer text-center font-semibold bg-[var(--bg-panel)] text-[var(--text-primary)] border border-[var(--border-strong)] shadow-xs';
      } else {
        btn.className = 'py-1.5 px-2 rounded font-mono text-[11px] transition-colors cursor-pointer text-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent';
      }
    }
  });

  if (render) renderVoiceCardsList();
}

let voiceSearchDebounceTimer = null;
function handleVoiceSearchInput(query) {
  voiceSearchFilter = (query || '').toLowerCase().trim();
  clearTimeout(voiceSearchDebounceTimer);
  voiceSearchDebounceTimer = setTimeout(() => {
    renderVoiceCardsList();
  }, 120);
}

function handleVoiceRateChange(val) {
  const rate = parseFloat(val);
  const settings = getVoiceSettings();
  settings.rate = rate;
  const rateDisp = document.getElementById('voiceRateDisplay');
  if (rateDisp) rateDisp.textContent = `${rate.toFixed(2)}x`;
  const ratePill = document.getElementById('pkAudioRatePill');
  if (ratePill) ratePill.textContent = `${rate.toFixed(2)}x`;
  persistState();
}

function setVoiceRatePreset(preset) {
  const slider = document.getElementById('voiceRateSlider');
  if (slider) slider.value = preset;
  handleVoiceRateChange(preset);
}

function handleVoicePitchChange(val) {
  const pitch = parseFloat(val);
  const settings = getVoiceSettings();
  settings.pitch = pitch;
  const pitchDisp = document.getElementById('voicePitchDisplay');
  if (pitchDisp) {
    pitchDisp.textContent = formatVoicePitchLabel(pitch);
  }
  persistState();
}

function setVoicePitchPreset(preset) {
  const slider = document.getElementById('voicePitchSlider');
  if (slider) slider.value = preset;
  handleVoicePitchChange(preset);
}

function handleVoiceKaraokeToggle(checked) {
  const settings = getVoiceSettings();
  settings.autoScroll = checked;
  persistState();
}

function cycleAudioReaderRate() {
  const settings = getVoiceSettings();
  const rates = [1.0, 1.15, 1.3, 0.85];
  const cur = settings.rate || 1.0;
  let nextIdx = 0;
  for (let i = 0; i < rates.length; i++) {
    if (Math.abs(rates[i] - cur) < 0.05) {
      nextIdx = (i + 1) % rates.length;
      break;
    }
  }
  const newRate = rates[nextIdx];
  settings.rate = newRate;
  persistState();
  const ratePill = document.getElementById('pkAudioRatePill');
  if (ratePill) ratePill.textContent = `${newRate}x`;
  const slider = document.getElementById('voiceRateSlider');
  if (slider) slider.value = newRate;
  const disp = document.getElementById('voiceRateDisplay');
  if (disp) disp.textContent = `${newRate.toFixed(2)}x`;
  showToast(`Playback speed: ${newRate}x`, 'ochre');
}

let lastRenderedDeviceVoices = [];
const kokoroAuditionCache = new Map(); // cacheKey -> objectUrl for 0ms instant re-audition!
let kokoroAuditionTimer = null;
let isKokoroSynthesizingAudition = false;

// Zero-DOM-Rebuild Selection Highlighter (< 0.1ms! Never triggers Tailwind CDN MutationObserver recompile!)
function highlightSelectedVoiceCardInPlace(attrName, activeValue) {
  const container = document.getElementById('voiceCardsList');
  if (!container) return;
  const cards = container.children;
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const isNowSelected = card.getAttribute(attrName) === String(activeValue);
    const wasSelected = card.getAttribute('data-selected') === '1';
    if (isNowSelected === wasSelected) continue;

    card.setAttribute('data-selected', isNowSelected ? '1' : '0');
    card.style.borderColor = isNowSelected ? 'var(--accent-vermilion)' : '';
    card.style.backgroundColor = isNowSelected ? 'var(--accent-vermilion-tint)' : '';
    const avatar = card.querySelector('[data-voice-avatar]');
    if (avatar) {
      avatar.style.backgroundColor = isNowSelected ? 'var(--accent-vermilion)' : '';
      avatar.style.color = isNowSelected ? '#ffffff' : '';
      avatar.style.borderColor = isNowSelected ? 'var(--accent-vermilion)' : '';
    }
  }
}

function selectKokoroVoice(voiceId, autoAudition = false) {
  const voice = KOKORO_VOICE_CATALOG.find(v => v.id === voiceId);
  if (!voice) return;
  const settings = getVoiceSettings();
  settings.engine = 'kokoro';
  settings.kokoroVoiceId = voice.id;
  const targetPitch = voice.defaultPitch || 1.0;
  settings.pitch = targetPitch;

  // Instant in-place highlight (< 0.1ms, ZERO innerHTML rebuild, ZERO Tailwind JIT freeze!)
  highlightSelectedVoiceCardInPlace('data-kokoro-voice', voice.id);
  const pitchSlider = document.getElementById('voicePitchSlider');
  const pitchDisp = document.getElementById('voicePitchDisplay');
  if (pitchSlider) pitchSlider.value = targetPitch;
  if (pitchDisp) pitchDisp.textContent = formatVoicePitchLabel(targetPitch);

  updateVoiceStudioHUDLabels();
  if (typeof pkHaptic === 'function') pkHaptic(6);
  const tag = voice.category === 'cute' ? 'Cute' : (voice.gender === 'male' ? 'Male' : 'Female');
  showToast(`Selected ${voice.name} (${tag} · ${voice.accent})`);
  pendingStateDirty = true;
  flushPersistStateNow();
  clearKokoroPrefetchCache();

  // Only run Kokoro WASM synthesis when user explicitly taps "Test" — never freeze UI while switching!
  if (autoAudition) {
    unlockMobileAudioElement();
    if (kokoroAuditionTimer) clearTimeout(kokoroAuditionTimer);
    kokoroAuditionTimer = setTimeout(() => {
      kokoroAuditionTimer = null;
      testKokoroVoice(voice.id);
    }, 40);
  }
}

function selectDeviceVoiceByIndex(idx) {
  const chosen = lastRenderedDeviceVoices[idx];
  if (!chosen) return;
  const settings = getVoiceSettings();
  settings.engine = 'device';
  settings.voiceURI = chosen.voiceURI;
  settings.voiceName = chosen.name;

  // Instant in-place highlight (< 0.1ms, ZERO innerHTML rebuild, ZERO getVoices() IPC freeze, ZERO Android speechSynthesis lockup!)
  highlightSelectedVoiceCardInPlace('data-device-idx', idx);
  updateVoiceStudioHUDLabels();
  if (typeof pkHaptic === 'function') pkHaptic(6);
  showToast(`Selected ${chosen.name.slice(0, 28)} — tap Test to preview`);
  persistState();
}

function testDeviceVoiceByIndex(idx) {
  const chosen = lastRenderedDeviceVoices[idx];
  if (chosen) testDeviceVoice(chosen);
}

function renderVoiceCardsList() {
  const container = document.getElementById('voiceCardsList');
  if (!container) return;
  const settings = getVoiceSettings();
  updateKokoroEngineUI();

  if (settings.engine === 'kokoro') {
    const selected = getSelectedKokoroVoice();
    let filtered = KOKORO_VOICE_CATALOG;

    if (activeVoiceGenderFilter === 'cute') {
      filtered = filtered.filter(v => v.category === 'cute');
    } else if (activeVoiceGenderFilter === 'male') {
      filtered = filtered.filter(v => v.gender === 'male');
    } else if (activeVoiceGenderFilter === 'female') {
      filtered = filtered.filter(v => v.gender === 'female');
    }

    if (voiceSearchFilter) {
      filtered = filtered.filter(v =>
        v.name.toLowerCase().includes(voiceSearchFilter) ||
        v.id.toLowerCase().includes(voiceSearchFilter) ||
        v.style.toLowerCase().includes(voiceSearchFilter) ||
        v.accent.toLowerCase().includes(voiceSearchFilter) ||
        v.category.toLowerCase().includes(voiceSearchFilter) ||
        v.gender.toLowerCase().includes(voiceSearchFilter)
      );
    }

    const badgeCount = document.getElementById('voiceFilterCountBadge');
    if (badgeCount) badgeCount.textContent = `${filtered.length} voices`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="py-6 text-center text-[var(--text-tertiary)] font-mono text-[11px] space-y-1">
          <div>No matching Kokoro-82M voices found.</div>
          <button onclick="setVoiceGenderFilter('all')" class="text-[var(--accent-vermilion)] underline cursor-pointer">Show All Voices</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(v => {
      const isSelected = selected && selected.id === v.id;
      const isCute = v.category === 'cute';
      const isMale = v.gender === 'male';
      const roleBadge = isCute
        ? '<span class="px-1.5 py-0.5 rounded-[2px] bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] font-mono text-[9px] font-semibold">CUTE</span>'
        : isMale
          ? '<span class="px-1.5 py-0.5 rounded-[2px] bg-blue-500/12 text-blue-500 font-mono text-[9px] font-semibold">MALE</span>'
          : '<span class="px-1.5 py-0.5 rounded-[2px] bg-rose-500/12 text-rose-500 font-mono text-[9px] font-semibold">FEMALE</span>';

      const initial = (v.name || 'V').charAt(0).toUpperCase();

      return `
        <div onclick="selectKokoroVoice('${escapeHtml(v.id)}', false)"
             data-kokoro-voice="${escapeHtml(v.id)}"
             data-selected="${isSelected ? '1' : '0'}"
             style="${isSelected ? 'border-color: var(--accent-vermilion); background-color: var(--accent-vermilion-tint);' : ''}"
             class="group p-2.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] hover:border-[var(--border-strong)] cursor-pointer flex items-center justify-between gap-2">
          <div class="flex items-center gap-2.5 min-w-0">
            <span data-voice-avatar style="${isSelected ? 'background-color: var(--accent-vermilion); color: #ffffff; border-color: var(--accent-vermilion);' : ''}" class="w-7 h-7 rounded-full flex items-center justify-center font-serif text-xs font-semibold shrink-0 bg-[var(--bg-panel)] text-[var(--text-secondary)] border border-[var(--border-hairline)]">
              ${escapeHtml(initial)}
            </span>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <span class="font-serif font-semibold text-xs text-[var(--text-primary)] truncate">${escapeHtml(v.name)}</span>
                <span class="px-1 py-0.2 rounded bg-[var(--bg-panel)] border border-[var(--border-hairline)] font-mono text-[9px] text-[var(--text-tertiary)]">${escapeHtml(v.accent)}</span>
              </div>
              <div class="flex items-center gap-1.5 font-mono text-[10px] text-[var(--text-tertiary)] truncate">
                <span>${escapeHtml(v.style)}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            ${roleBadge}
            <button onclick="event.stopPropagation(); selectKokoroVoice('${escapeHtml(v.id)}', true)"
                    title="Audition ${escapeHtml(v.name)}"
                    class="px-2 py-1 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--accent-vermilion)] border border-[var(--border-hairline)] hover:border-[var(--accent-vermilion)] text-[10px] font-mono text-[var(--text-secondary)] hover:text-white transition-colors cursor-pointer">
              Test
            </button>
          </div>
        </div>
      `;
    }).join('');
    return;
  }

  // Device Native Voices View
  const voices = loadDetectedVoiceModels();
  const selected = getSelectedVoiceModel();

  let filtered = voices;
  if (activeVoiceGenderFilter === 'male') {
    filtered = filtered.filter(v => classifyVoiceGender(v) === 'male');
  } else if (activeVoiceGenderFilter === 'female' || activeVoiceGenderFilter === 'cute') {
    filtered = filtered.filter(v => classifyVoiceGender(v) === 'female');
  }

  if (voiceSearchFilter) {
    filtered = filtered.filter(v =>
      (v.name || '').toLowerCase().includes(voiceSearchFilter) ||
      (v.lang || '').toLowerCase().includes(voiceSearchFilter)
    );
  }

  const badgeCount = document.getElementById('voiceFilterCountBadge');
  if (badgeCount) badgeCount.textContent = `${filtered.length} natural voices`;

  if (filtered.length === 0) {
    const totalNatural = voices.length;
    container.innerHTML = totalNatural === 0
      ? `
        <div class="py-6 px-3 text-center text-[var(--text-tertiary)] font-mono text-[11px] space-y-2.5">
          <div class="text-[var(--text-primary)] font-serif text-xs">No natural 0 MB voices found in this browser</div>
          <div class="text-[10px] leading-relaxed">All robotic legacy system voices (David, Zira, eSpeak, etc.) have been removed. Use <span class="text-[var(--text-primary)]">Offline AI (Kokoro)</span> for studio human voices, or open PK Note in Edge / Chrome / Safari.</div>
          <button onclick="setVoiceEngine('kokoro')" class="px-3 py-1.5 rounded-md bg-[var(--accent-vermilion)] text-white font-mono text-[10px] font-semibold cursor-pointer">Switch to Offline AI (Kokoro)</button>
        </div>
      `
      : `
        <div class="py-6 text-center text-[var(--text-tertiary)] font-mono text-[11px] space-y-1">
          <div>No matching natural voices found.</div>
          <button onclick="setVoiceGenderFilter('all')" class="text-[var(--accent-vermilion)] underline cursor-pointer">Show All Natural Voices</button>
        </div>
      `;
    return;
  }

  lastRenderedDeviceVoices = filtered;
  container.innerHTML = filtered.map((v, idx) => {
    const isSelected = selected && (selected.voiceURI === v.voiceURI || selected.name === v.name);
    const gender = classifyVoiceGender(v);
    const natScore = scoreNaturalDeviceVoice(v);
    const qualityTag = natScore >= 110
      ? '<span class="px-1 py-0.2 rounded bg-emerald-500/15 text-emerald-500 font-mono text-[9px] font-semibold">NEURAL</span>'
      : natScore >= 85
        ? '<span class="px-1 py-0.2 rounded bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] font-mono text-[9px] font-semibold">HD</span>'
        : '';
    const genderBadge = gender === 'male' ? '<span class="px-1.5 py-0.5 rounded-[2px] bg-blue-500/10 text-blue-500 font-mono text-[9px] font-semibold">MALE</span>' :
                        gender === 'female' ? '<span class="px-1.5 py-0.5 rounded-[2px] bg-rose-500/10 text-rose-500 font-mono text-[9px] font-semibold">FEMALE</span>' :
                        '<span class="px-1.5 py-0.5 rounded-[2px] bg-emerald-500/10 text-emerald-500 font-mono text-[9px] font-semibold">NATURAL</span>';
    const initial = (v.name || 'V').trim().charAt(0).toUpperCase();

    return `
      <div onclick="selectDeviceVoiceByIndex(${idx})"
           data-device-idx="${idx}"
           data-selected="${isSelected ? '1' : '0'}"
           style="${isSelected ? 'border-color: var(--accent-vermilion); background-color: var(--accent-vermilion-tint);' : ''}"
           class="group p-2.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] hover:border-[var(--border-strong)] cursor-pointer flex items-center justify-between gap-2.5">
        <div class="flex items-center gap-2.5 min-w-0">
          <span data-voice-avatar style="${isSelected ? 'background-color: var(--accent-vermilion); color: #ffffff; border-color: var(--accent-vermilion);' : ''}" class="w-6 h-6 rounded-full flex items-center justify-center font-serif text-xs font-semibold shrink-0 bg-[var(--bg-panel)] text-[var(--text-secondary)] border border-[var(--border-hairline)]">
            ${escapeHtml(initial)}
          </span>
          <div class="min-w-0 flex-1">
            <div class="font-serif font-medium text-xs text-[var(--text-primary)] truncate">${escapeHtml(v.name)}</div>
            <div class="flex items-center flex-wrap gap-1.5 mt-0.5 font-mono text-[9.5px] text-[var(--text-tertiary)]">
              <span>${escapeHtml(v.lang)}</span>
              ${qualityTag}
              ${genderBadge}
              <span>0 MB</span>
            </div>
          </div>
        </div>
        <div class="flex items-center shrink-0">
          <button onclick="event.stopPropagation(); testDeviceVoiceByIndex(${idx})"
                  title="Audition Natural Voice"
                  class="px-2.5 py-1 rounded-[4px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] hover:border-[var(--border-strong)] text-[10px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
            Test
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// =========================================================================
// AUDITION / TEST VOICE (KOKORO-82M & DEVICE)
// =========================================================================
async function testKokoroVoice(voiceId = null) {
  stopReadingAloud();
  unlockMobileAudioElement();
  const sessionId = ++speechPlaybackSessionId;
  const settings = getVoiceSettings();
  const targetId = voiceId || settings.kokoroVoiceId || 'af_heart';
  const voiceMeta = KOKORO_VOICE_CATALOG.find(v => v.id === targetId) || KOKORO_VOICE_CATALOG[0];

  const customInput = document.getElementById('voiceCustomTestInput');
  const customRaw = customInput ? customInput.value.trim() : '';
  // Keep default audition short & natural (~7 words) so synthesis is 4x faster and never freezes UI!
  const rawSample = customRaw || (voiceMeta.category === 'cute'
    ? `Hi Kon! I'm ${voiceMeta.name}, ready to read your notes.`
    : `Hi Kon, I'm ${voiceMeta.name}. Ready whenever you are.`);
  const sampleText = ensureTerminalPunctuation(normalizeTextForNaturalSpeech(rawSample));
  const rate = settings.rate || 1.0;
  const pitch = settings.pitch || voiceMeta.defaultPitch || 1.0;
  const cacheKey = `${settings.kokoroQuant}|${voiceMeta.id}|${rate.toFixed(2)}|${pitch.toFixed(2)}|${sampleText}`;

  // 0ms Instant Replay if already auditioned this session!
  if (kokoroAuditionCache.has(cacheKey)) {
    const cachedUrl = kokoroAuditionCache.get(cacheKey);
    const audio = getKokoroAudioElement();
    audio.onended = null;
    audio.src = cachedUrl;
    audio.play().catch(() => {});
    showToast(`Auditioning ${voiceMeta.name} (${voiceMeta.accent})`);
    return;
  }

  if (isKokoroSynthesizingAudition) {
    showToast(`Finishing previous preview — tap Test again in a moment`, 'ochre');
    return;
  }

  showToast(
    kokoroEngineState === 'ready'
      ? `Preparing ${voiceMeta.name}...`
      : (kokoroIsCachedLocally
          ? `Warming up cached ${voiceMeta.name} (0 MB)...`
          : `Downloading AI engine once for ${voiceMeta.name}...`),
    'ochre'
  );

  // Yield 2 frames BEFORE WASM runs so the UI button & selection highlight paint smoothly at 60fps!
  await new Promise(r => requestAnimationFrame(() => setTimeout(r, 24)));
  if (sessionId !== speechPlaybackSessionId) return;

  isKokoroSynthesizingAudition = true;
  try {
    const tts = await ensureKokoroEngineLoaded();
    if (sessionId !== speechPlaybackSessionId) return;

    const blob = await generateKokoroWavBlob(tts, sampleText, voiceMeta, rate, pitch);
    if (sessionId !== speechPlaybackSessionId) return;

    const url = URL.createObjectURL(blob);
    // Cache up to 12 auditions for 0ms instant switching!
    if (kokoroAuditionCache.size >= 12) {
      const oldestKey = kokoroAuditionCache.keys().next().value;
      URL.revokeObjectURL(kokoroAuditionCache.get(oldestKey));
      kokoroAuditionCache.delete(oldestKey);
    }
    kokoroAuditionCache.set(cacheKey, url);

    await playKokoroUrlOrBlob(url, blob, null, null);
    showToast(`Auditioning ${voiceMeta.name} (${voiceMeta.accent})`);
  } catch (err) {
    console.warn('Kokoro audition error:', err);
    const msg = err && err.message ? err.message.slice(0, 60) : 'Audition failed';
    showToast(`Kokoro-82M error: ${msg}`, 'ochre');
  } finally {
    isKokoroSynthesizingAudition = false;
  }
}

let deviceAuditionTimer = null;

function testDeviceVoice(targetVoice = null) {
  if (!('speechSynthesis' in window)) {
    showToast('Speech synthesis not supported in this browser', 'ochre');
    return;
  }
  if (deviceAuditionTimer) {
    clearTimeout(deviceAuditionTimer);
    deviceAuditionTimer = null;
  }
  // Only cancel if actively speaking/pending (avoids Android TTS Binder IPC freeze when idle!)
  let didCancel = false;
  if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    suppressVoicesChangedUntil = Date.now() + 1800;
    lastSpeechCancelTs = Date.now();
    window.speechSynthesis.cancel();
    didCancel = true;
  }
  const settings = getVoiceSettings();
  const voice = targetVoice || getSelectedVoiceModel();
  if (!voice) {
    showToast('No natural 0 MB voice in this browser — switching to Offline AI (Kokoro)', 'ochre');
    setVoiceEngine('kokoro');
    return;
  }

  const customInput = document.getElementById('voiceCustomTestInput');
  const customRaw = customInput ? customInput.value.trim() : '';
  const text = normalizeTextForNaturalSpeech(
    customRaw || "Hi Kon, PK Note instant natural voice is ready with zero download."
  );
  const utterance = new SpeechSynthesisUtterance(text);
  if (voice) {
    utterance.voice = voice;
    if (voice.lang) utterance.lang = voice.lang;
  }
  utterance.rate = Math.max(0.75, Math.min(1.5, settings.rate || 1.0));
  utterance.pitch = Math.max(0.90, Math.min(1.14, settings.pitch || 1.0));
  currentActiveUtterance = utterance;

  const fireSpeak = () => {
    try {
      suppressVoicesChangedUntil = Date.now() + 1800;
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      window.speechSynthesis.speak(utterance);
    } catch (e) {}
  };

  if (didCancel) {
    deviceAuditionTimer = setTimeout(() => {
      deviceAuditionTimer = null;
      fireSpeak();
    }, 95);
  } else {
    fireSpeak();
  }
  showToast(`Auditioning: ${voice ? voice.name.slice(0, 26) : 'Instant Natural'}`);
}

function testSelectedVoice(targetVoice = null) {
  const settings = getVoiceSettings();
  if (settings.engine === 'kokoro' && !targetVoice) {
    testKokoroVoice(settings.kokoroVoiceId);
  } else {
    testDeviceVoice(targetVoice);
  }
}

function updateVoiceStudioHUDLabels(overrideStatus = null) {
  const label = document.getElementById('pkAudioReaderVoiceLabel');
  const ratePill = document.getElementById('pkAudioRatePill');
  const settings = getVoiceSettings();
  if (ratePill) ratePill.textContent = `${Number(settings.rate || 1.0).toFixed(2).replace(/\.00$/, '.0')}x`;
  if (!label) return;

  if (overrideStatus) {
    label.textContent = overrideStatus;
    return;
  }
  if (settings.engine === 'kokoro') {
    const kv = getSelectedKokoroVoice();
    label.textContent = `Kokoro-82M · ${kv.name}`;
  } else {
    const selected = getSelectedVoiceModel();
    if (selected) {
      label.textContent = selected.name.length > 22 ? selected.name.slice(0, 22) + '…' : selected.name;
    } else {
      label.textContent = 'Device Native';
    }
  }
}

// =========================================================================
// AUDIOBOOK DOCUMENT READING & GAPLESS KOKORO-82M PREFETCH PIPELINE
// =========================================================================
let lastHighlightedVoiceBlockId = null;

function removeVoiceHighlights() {
  lastHighlightedVoiceBlockId = null;
  document.querySelectorAll('.pk-voice-active-block').forEach(el => {
    el.classList.remove('pk-voice-active-block');
  });
}

function highlightVoiceBlock(blockId) {
  if (blockId && blockId === lastHighlightedVoiceBlockId) return;
  removeVoiceHighlights();
  if (!blockId) return;
  lastHighlightedVoiceBlockId = blockId;
  let targetEl = null;
  if (blockId === 'title') {
    targetEl = document.getElementById('docTitleInput');
  } else {
    targetEl = document.querySelector(`[data-block-id="${blockId}"]`);
  }
  if (targetEl) {
    targetEl.classList.add('pk-voice-active-block');
    targetEl.scrollIntoView({ behavior: window.PK_LITE_MODE ? 'auto' : 'smooth', block: 'nearest' });
  }
}

function clearKokoroPrefetchCache() {
  kokoroPrefetchMap.forEach(promise => {
    if (promise && typeof promise.then === 'function') {
      promise.then(res => {
        if (res && res.url) URL.revokeObjectURL(res.url);
      }).catch(() => {});
    }
  });
  kokoroPrefetchMap.clear();
  if (kokoroActiveObjectUrl) {
    URL.revokeObjectURL(kokoroActiveObjectUrl);
    kokoroActiveObjectUrl = null;
  }
  if (kokoroPauseTimer) {
    clearTimeout(kokoroPauseTimer);
    kokoroPauseTimer = null;
  }
}

let kokoroSynthChain = Promise.resolve();
let kokoroPrefetchDelayTimer = null;

function synthesizeKokoroChunk(index, sessionId) {
  if (kokoroPrefetchMap.has(index)) {
    return kokoroPrefetchMap.get(index);
  }
  const item = speechSentenceQueue[index];
  if (!item) return Promise.resolve(null);

  const settings = getVoiceSettings();
  const voiceMeta = getSelectedKokoroVoice();
  const trimmedTxt = (item.text || '').trim();
  const isQuestion = /\?$/.test(trimmedTxt);
  const isExclamation = /!$/.test(trimmedTxt);
  const baseRate = settings.rate || 1.0;
  const speed = isQuestion ? baseRate * 0.96
              : isExclamation ? baseRate * 1.03
              : item.isHeading ? baseRate * 0.95
              : baseRate;
  const pitch = settings.pitch || voiceMeta.defaultPitch || 1.0;

  // Strictly serialize Kokoro WASM inference (1 at a time) + yield a frame so UI & audio never freeze!
  const promise = (kokoroSynthChain = kokoroSynthChain.catch(() => {}).then(async () => {
    if (sessionId !== speechPlaybackSessionId) return null;
    await new Promise(r => setTimeout(r, 16));
    if (sessionId !== speechPlaybackSessionId) return null;
    const tts = await ensureKokoroEngineLoaded();
    if (sessionId !== speechPlaybackSessionId) return null;
    const blob = await generateKokoroWavBlob(tts, item.text, voiceMeta, speed, pitch);
    if (sessionId !== speechPlaybackSessionId) return null;
    const url = URL.createObjectURL(blob);
    return { url, blob };
  }));

  kokoroPrefetchMap.set(index, promise);
  return promise;
}

async function playNextKokoroSentence(sessionId) {
  if (sessionId !== speechPlaybackSessionId || !isSpeechAudioActive || isSpeechAudioPaused) return;
  if (currentSpeechQueueIndex >= speechSentenceQueue.length) {
    stopReadingAloud();
    showToast('Finished reading document');
    return;
  }

  const idx = currentSpeechQueueIndex;
  const item = speechSentenceQueue[idx];
  const settings = getVoiceSettings();

  if (settings.autoScroll !== false) {
    highlightVoiceBlock(item.blockId);
  }

  const kv = getSelectedKokoroVoice();
  if (!kokoroPrefetchMap.has(idx)) {
    updateVoiceStudioHUDLabels(
      kokoroEngineState === 'ready'
        ? `Kokoro-82M · ${kv.name} (synthesizing...)`
        : `Loading Kokoro-82M...`
    );
  }

  try {
    const result = await synthesizeKokoroChunk(idx, sessionId);
    kokoroPrefetchMap.delete(idx);

    if (sessionId !== speechPlaybackSessionId || !isSpeechAudioActive) {
      if (result && result.url) URL.revokeObjectURL(result.url);
      return;
    }
    if (!result || !result.url) {
      currentSpeechQueueIndex++;
      playNextKokoroSentence(sessionId);
      return;
    }

    updateVoiceStudioHUDLabels(`Kokoro-82M · ${kv.name} (${idx + 1}/${speechSentenceQueue.length})`);

    if (kokoroActiveObjectUrl) {
      URL.revokeObjectURL(kokoroActiveObjectUrl);
    }
    kokoroActiveObjectUrl = result.url;

    const onEndedHandler = () => {
      if (sessionId !== speechPlaybackSessionId || !isSpeechAudioActive) return;
      if (kokoroActiveObjectUrl === result.url) {
        URL.revokeObjectURL(result.url);
        kokoroActiveObjectUrl = null;
      }
      if (!isSpeechAudioPaused) {
        // Expressive narrator pauses: thoughtful beat after questions (?), crisp beat after (!), longer after headings
        const trimmedTxt = (item.text || '').trim();
        const pauseMs = item.isHeading ? 380
                      : /\?$/.test(trimmedTxt) ? 320
                      : /!$/.test(trimmedTxt) ? 240
                      : 175;
        kokoroPauseTimer = setTimeout(() => {
          if (sessionId === speechPlaybackSessionId && isSpeechAudioActive && !isSpeechAudioPaused) {
            currentSpeechQueueIndex++;
            playNextKokoroSentence(sessionId);
          }
        }, pauseMs);
      }
    };

    const onErrorHandler = (err) => {
      console.warn('Kokoro audio playback error:', err);
      if (sessionId === speechPlaybackSessionId && isSpeechAudioActive && !isSpeechAudioPaused) {
        currentSpeechQueueIndex++;
        playNextKokoroSentence(sessionId);
      }
    };

    if (!isSpeechAudioPaused) {
      try {
        await playKokoroUrlOrBlob(result.url, result.blob, onEndedHandler, onErrorHandler);
        // Only prefetch next 1 sentence AFTER current audio starts playing (zero 2019-phone CPU lockup!)
        if (idx + 1 < speechSentenceQueue.length) {
          if (kokoroPrefetchDelayTimer) clearTimeout(kokoroPrefetchDelayTimer);
          kokoroPrefetchDelayTimer = setTimeout(() => {
            kokoroPrefetchDelayTimer = null;
            if (sessionId === speechPlaybackSessionId && isSpeechAudioActive && !isSpeechAudioPaused) {
              synthesizeKokoroChunk(idx + 1, sessionId).catch(() => {});
            }
          }, window.PK_LITE_MODE ? 250 : 80);
        }
      } catch (playErr) {
        if (playErr && (playErr.name === 'NotAllowedError' || String(playErr).includes('play()'))) {
          // Mobile autoplay gesture expired while downloading — pause cleanly instead of ambushing with robotic OS voice!
          isSpeechAudioPaused = true;
          const pauseIcon = document.getElementById('pkAudioPauseIcon');
          const playIcon = document.getElementById('pkAudioPlayIcon');
          if (pauseIcon) pauseIcon.classList.add('hidden');
          if (playIcon) playIcon.classList.remove('hidden');
          updateVoiceStudioHUDLabels(`Ready · Tap Play (${kv.name})`);
          showToast('Kokoro-82M ready — tap Play on the bar to listen');
          return;
        }
        throw playErr;
      }
    }
  } catch (err) {
    if (sessionId !== speechPlaybackSessionId) return;
    console.warn('Kokoro synthesis error:', err);
    stopReadingAloud();
    const reason = err && err.message ? err.message.slice(0, 64) : 'Unknown runtime error';
    showToast(`Kokoro-82M error: ${reason}`, 'ochre');
  }
}

let lastSpeechCancelTs = 0;
let deviceSpeakTimer = null;
let deviceStartWatchdog = null;
let deviceKeepAliveInterval = null;

function clearDeviceSpeechTimers() {
  if (deviceSpeakTimer) { clearTimeout(deviceSpeakTimer); deviceSpeakTimer = null; }
  if (deviceStartWatchdog) { clearTimeout(deviceStartWatchdog); deviceStartWatchdog = null; }
  if (deviceKeepAliveInterval) { clearInterval(deviceKeepAliveInterval); deviceKeepAliveInterval = null; }
}

function playNextDeviceSpeechSentence(sessionId) {
  if (sessionId !== speechPlaybackSessionId || !isSpeechAudioActive || isSpeechAudioPaused) return;
  if (currentSpeechQueueIndex >= speechSentenceQueue.length) {
    stopReadingAloud();
    showToast('Finished reading document');
    return;
  }

  clearDeviceSpeechTimers();
  const idx = currentSpeechQueueIndex;
  const item = speechSentenceQueue[idx];
  const settings = getVoiceSettings();
  let voice = getSelectedVoiceModel();
  if (!voice) {
    loadDetectedVoiceModels(true);
    voice = getSelectedVoiceModel();
  }
  const rawVoiceList = ('speechSynthesis' in window) ? window.speechSynthesis.getVoices() : [];
  const allowAndroidPendingBind = IS_ANDROID_BROWSER && rawVoiceList.length === 0;

  // ZERO ROBOTIC FALLBACK on desktop/non-Android (or Android with only robotic voices):
  // Seamlessly hand off to off-main-thread Kokoro-82M Neural AI right away so the user's tap reads immediately!
  if (!allowAndroidPendingBind && (!voice || !isTier1NaturalVoice(voice))) {
    unlockMobileAudioElement();
    settings.engine = 'kokoro';
    persistState();
    updateKokoroEngineUI();
    showToast('Using Kokoro-82M Natural AI Voice');
    playNextKokoroSentence(sessionId);
    return;
  }

  if (settings.autoScroll !== false) {
    highlightVoiceBlock(item.blockId);
  }

  const shortName = voice && voice.name
    ? voice.name.replace(/Microsoft\s+|Online\s*\(Natural\)\s*-\s*English.*/gi, '').trim().slice(0, 18) || voice.name.slice(0, 18)
    : 'Natural';
  updateVoiceStudioHUDLabels(`${shortName} (${idx + 1}/${speechSentenceQueue.length})`);

  // Expressive prosody micro-tuning for questions (?), exclamations (!), and headings
  const trimmedTxt = (item.text || '').trim();
  const isQuestion = /\?$/.test(trimmedTxt);
  const isExclamation = /!$/.test(trimmedTxt);
  const baseRate = settings.rate || 1.0;
  const basePitch = settings.pitch || 1.0;

  const utterance = new SpeechSynthesisUtterance(item.text);
  if (voice) {
    utterance.voice = voice;
    if (voice.lang) utterance.lang = voice.lang;
  } else {
    utterance.lang = navigator.language || 'en-US';
  }
  utterance.rate = Math.max(0.75, Math.min(1.5,
    isQuestion ? baseRate * 0.96
    : isExclamation ? baseRate * 1.03
    : item.isHeading ? baseRate * 0.95
    : baseRate
  ));
  utterance.pitch = Math.max(0.90, Math.min(1.16,
    isQuestion ? basePitch + 0.025
    : isExclamation ? basePitch + 0.015
    : basePitch
  ));

  let started = false;
  let finished = false;
  const advance = (delayMs = 130) => {
    if (finished) return;
    finished = true;
    clearDeviceSpeechTimers();
    if (sessionId !== speechPlaybackSessionId || !isSpeechAudioActive || isSpeechAudioPaused) return;
    kokoroPauseTimer = setTimeout(() => {
      if (sessionId === speechPlaybackSessionId && isSpeechAudioActive && !isSpeechAudioPaused) {
        currentSpeechQueueIndex++;
        playNextDeviceSpeechSentence(sessionId);
      }
    }, delayMs);
  };

  utterance.onstart = () => {
    started = true;
    if (deviceStartWatchdog) { clearTimeout(deviceStartWatchdog); deviceStartWatchdog = null; }
  };
  utterance.onend = () => advance(
    item.isHeading ? 340
    : isQuestion ? 300
    : isExclamation ? 220
    : 130
  );
  utterance.onerror = (err) => {
    const code = err && err.error ? err.error : '';
    if (code === 'canceled' || code === 'interrupted') return;
    advance(150);
  };

  currentActiveUtterance = utterance;

  const doSpeak = () => {
    if (sessionId !== speechPlaybackSessionId || !isSpeechAudioActive || isSpeechAudioPaused) return;
    suppressVoicesChangedUntil = Date.now() + 1800;
    try {
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      window.speechSynthesis.speak(utterance);

      // Watchdog: if Android/Chrome silently wedged before starting, nudge resume() once so it never stays silent!
      deviceStartWatchdog = setTimeout(() => {
        if (started || finished || sessionId !== speechPlaybackSessionId || !isSpeechAudioActive || isSpeechAudioPaused) return;
        try {
          if (window.speechSynthesis.paused) window.speechSynthesis.resume();
          if (!window.speechSynthesis.speaking && !window.speechSynthesis.pending) {
            window.speechSynthesis.speak(utterance);
          }
        } catch (_) {}
      }, 2200);

      // Chrome 15-second pause bug keep-alive (lightweight, only active while speaking)
      deviceKeepAliveInterval = setInterval(() => {
        if (sessionId !== speechPlaybackSessionId || !isSpeechAudioActive || isSpeechAudioPaused) {
          clearInterval(deviceKeepAliveInterval);
          deviceKeepAliveInterval = null;
          return;
        }
        try {
          if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
        } catch (_) {}
      }, 10000);
    } catch (e) {
      stopReadingAloud();
    }
  };

  // CRITICAL FOR CHROME / ANDROID: Never call speak() synchronously right after cancel() (silently drops speech!).
  const sinceCancel = Date.now() - lastSpeechCancelTs;
  if (sinceCancel < 95) {
    deviceSpeakTimer = setTimeout(() => {
      deviceSpeakTimer = null;
      doSpeak();
    }, 95 - sinceCancel);
  } else {
    doSpeak();
  }
}

function playNextSpeechSentence() {
  const settings = getVoiceSettings();
  const sessionId = speechPlaybackSessionId;
  if (settings.engine === 'kokoro') {
    playNextKokoroSentence(sessionId);
  } else {
    playNextDeviceSpeechSentence(sessionId);
  }
}

function readTextAloud(text, title = 'Selection') {
  const settings = getVoiceSettings();
  stopReadingAloud();
  // Only unlock HTML5/WebAudio for Kokoro — never steal Android AudioFocus when using Instant speechSynthesis!
  if (settings.engine === 'kokoro') unlockMobileAudioElement();

  const clean = normalizeTextForNaturalSpeech(text);
  const chunks = splitTextIntoNaturalChunks(clean, window.PK_LITE_MODE ? 150 : 185);
  if (chunks.length === 0) {
    showToast('No readable text selected', 'ochre');
    return;
  }

  if (settings.engine === 'device' && !('speechSynthesis' in window)) {
    settings.engine = 'kokoro';
    unlockMobileAudioElement();
  }

  speechSentenceQueue = chunks.map(c => ({
    text: c,
    blockId: null,
    label: title,
    isHeading: false
  }));
  currentSpeechQueueIndex = 0;
  speechPlaybackSessionId++;
  isSpeechAudioActive = true;
  isSpeechAudioPaused = false;

  const hud = document.getElementById('pkAudioReaderHUD');
  const label = document.getElementById('pkAudioReaderLabel');
  if (hud && label) {
    label.textContent = title.length > 24 ? title.slice(0, 24) + '…' : title;
    hud.classList.remove('hidden');
  }
  updateVoiceStudioHUDLabels();
  updateHeaderReadAloudState();
  playNextSpeechSentence();
}

function updateHeaderReadAloudState() {
  const btn = document.getElementById('headerReadAloudBtn');
  const label = document.getElementById('headerReadAloudLabel');
  const mobBtn = document.getElementById('mobileRibbonListenBtn');
  const mobLabel = document.getElementById('mobileRibbonListenLabel');

  if (btn) {
    if (isSpeechAudioActive) {
      btn.className = 'w-9 h-9 md:w-auto md:h-auto md:px-2 md:py-1 rounded-md md:rounded-[3px] bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border border-[var(--accent-vermilion)] transition-colors flex items-center justify-center gap-1 cursor-pointer animate-pulse';
      btn.title = 'Stop Reading Aloud';
      if (label) label.textContent = 'STOP';
    } else {
      btn.className = 'w-9 h-9 md:w-auto md:h-auto md:px-2 md:py-1 rounded-md md:rounded-[3px] text-[var(--text-secondary)] hover:text-[var(--accent-vermilion)] hover:bg-[var(--bg-hover)] border border-transparent hover:border-[var(--border-hairline)] transition-colors flex items-center justify-center gap-1 cursor-pointer';
      btn.title = 'Read Note Aloud (Kokoro-82M Voice)';
      if (label) label.textContent = 'LISTEN';
    }
  }
  if (mobBtn) {
    mobBtn.className = isSpeechAudioActive
      ? 'shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent-vermilion-tint)] border border-[var(--accent-vermilion)] text-[var(--accent-vermilion)] font-mono text-[11px] font-semibold active:scale-95 transition-all cursor-pointer'
      : 'shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--bg-panel)] border border-[var(--border-strong)] text-[var(--text-primary)] font-mono text-[11px] font-medium active:scale-95 transition-all cursor-pointer';
  }
  if (mobLabel) mobLabel.textContent = isSpeechAudioActive ? 'Stop' : 'Listen';
}

function toggleReadingNoteAloud() {
  if (isSpeechAudioActive) {
    stopReadingAloud();
  } else {
    startReadingActiveNoteAloud();
  }
}

function startReadingActiveNoteAloud() {
  const note = getActiveNote();
  if (!note) return;

  const settings = getVoiceSettings();
  if (settings.engine === 'device' && !('speechSynthesis' in window)) {
    settings.engine = 'kokoro';
  }

  stopReadingAloud();
  // Only unlock HTML5/WebAudio for Kokoro — never steal Android AudioFocus when using Instant speechSynthesis!
  if (settings.engine === 'kokoro') unlockMobileAudioElement();

  // Build clean, naturally normalized sentence queue from title & blocks
  const queue = [];
  const cleanTitle = normalizeTextForNaturalSpeech(note.title || '');
  if (cleanTitle) {
    queue.push({
      text: ensureTerminalPunctuation(cleanTitle),
      blockId: 'title',
      label: 'TITLE',
      isHeading: true
    });
  }

  (note.blocks || []).forEach(b => {
    if (!b.content || !b.content.trim()) return;
    const clean = normalizeTextForNaturalSpeech(b.content);
    if (!clean) return;
    const isHeading = ['h1', 'h2', 'h3'].includes(b.type);
    const chunks = splitTextIntoNaturalChunks(clean, window.PK_LITE_MODE ? 150 : 185);
    chunks.forEach((chunk, idx) => {
      queue.push({
        text: chunk,
        blockId: b.id,
        label: (b.type || 'TEXT').toUpperCase(),
        isHeading: isHeading && idx === chunks.length - 1
      });
    });
  });

  if (queue.length === 0) {
    showToast('Note has no text content to read', 'ochre');
    return;
  }

  speechSentenceQueue = queue;
  currentSpeechQueueIndex = 0;
  speechPlaybackSessionId++;
  isSpeechAudioActive = true;
  isSpeechAudioPaused = false;

  const hud = document.getElementById('pkAudioReaderHUD');
  const label = document.getElementById('pkAudioReaderLabel');
  if (hud && label) {
    label.textContent = note.title ? (note.title.length > 22 ? note.title.slice(0, 22) + '…' : note.title) : 'Reading note...';
    hud.classList.remove('hidden');
  }
  updateVoiceStudioHUDLabels();
  updateHeaderReadAloudState();
  playNextSpeechSentence();
}

function togglePauseReadingAloud() {
  if (!isSpeechAudioActive) return;
  const settings = getVoiceSettings();
  const pauseIcon = document.getElementById('pkAudioPauseIcon');
  const playIcon = document.getElementById('pkAudioPlayIcon');

  if (isSpeechAudioPaused) {
    isSpeechAudioPaused = false;
    if (pauseIcon) pauseIcon.classList.remove('hidden');
    if (playIcon) playIcon.classList.add('hidden');

    if (settings.engine === 'kokoro') {
      if (pkVoiceAudioSource && pkVoiceAudioCtx && pkVoiceAudioCtx.state === 'suspended') {
        pkVoiceAudioCtx.resume().catch(() => {});
      } else {
        const audio = getKokoroAudioElement();
        if (audio && audio.src && audio.paused && !audio.ended && audio.src !== SILENT_WAV_DATA_URI) {
          audio.play().catch(() => { playNextKokoroSentence(speechPlaybackSessionId); });
        } else {
          playNextKokoroSentence(speechPlaybackSessionId);
        }
      }
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
    showToast('Resumed reading');
  } else {
    isSpeechAudioPaused = true;
    if (pauseIcon) pauseIcon.classList.add('hidden');
    if (playIcon) playIcon.classList.remove('hidden');

    if (kokoroPauseTimer) {
      clearTimeout(kokoroPauseTimer);
      kokoroPauseTimer = null;
    }
    if (settings.engine === 'kokoro') {
      if (pkKokoroAudioEl) pkKokoroAudioEl.pause();
      if (pkVoiceAudioSource && pkVoiceAudioCtx && pkVoiceAudioCtx.state === 'running') {
        pkVoiceAudioCtx.suspend().catch(() => {});
      }
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
    showToast('Paused reading', 'ochre');
  }
}

function stopReadingAloud() {
  speechPlaybackSessionId++;
  clearDeviceSpeechTimers();
  stopVoiceAudioCtxSource();
  if (kokoroPrefetchDelayTimer) {
    clearTimeout(kokoroPrefetchDelayTimer);
    kokoroPrefetchDelayTimer = null;
  }
  if (deviceAuditionTimer) {
    clearTimeout(deviceAuditionTimer);
    deviceAuditionTimer = null;
  }
  if ('speechSynthesis' in window) {
    // CRITICAL FOR ANDROID: Only call cancel() when actually speaking/pending!
    // Calling cancel() when idle stalls Android TTS Binder IPC & triggers Chrome's silent-drop bug on the next speak()!
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      suppressVoicesChangedUntil = Date.now() + 1200;
      lastSpeechCancelTs = Date.now();
      window.speechSynthesis.cancel();
    }
  }
  if (pkKokoroAudioEl) {
    try {
      pkKokoroAudioEl.pause();
      pkKokoroAudioEl.onended = null;
      pkKokoroAudioEl.onerror = null;
      pkKokoroAudioEl.currentTime = 0;
    } catch (e) {}
  }
  clearKokoroPrefetchCache();

  isSpeechAudioActive = false;
  isSpeechAudioPaused = false;
  speechSentenceQueue = [];
  currentSpeechQueueIndex = 0;
  currentActiveUtterance = null;
  removeVoiceHighlights();

  const hud = document.getElementById('pkAudioReaderHUD');
  if (hud) hud.classList.add('hidden');
  updateKokoroHudProgress(false, 0);

  const pauseIcon = document.getElementById('pkAudioPauseIcon');
  const playIcon = document.getElementById('pkAudioPlayIcon');
  if (pauseIcon) pauseIcon.classList.remove('hidden');
  if (playIcon) playIcon.classList.add('hidden');
  updateHeaderReadAloudState();
}

function formatSelectionAsTodo() {
  const sel = window.getSelection().toString().trim();
  if (!sel) return;
  const note = getActiveNote();
  if (!note) return;
  const newBlock = {
    id: `blk-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    type: 'todo',
    content: sel,
    checked: false
  };
  note.blocks.push(newBlock);
  scheduleSave();
  renderBlocks();
  playPopSound();
  showToast('Created action item from selection', 'info');
}

function showSelectionStats() {
  const sel = window.getSelection().toString().trim();
  if (!sel) return;
  const chars = sel.length;
  const words = sel.split(/\s+/).filter(Boolean).length;
  const lines = sel.split('\n').length;
  const estMins = Math.max(1, Math.ceil(words / 200));
  showToast(`Selection: ${words} words · ${chars} chars · ${lines} lines · ~${estMins}m read`, 'info');
}

function moveBlockRelative(blockId, direction) {
  const note = getActiveNote();
  if (!note || !note.blocks) return;
  const idx = note.blocks.findIndex(b => b.id === blockId);
  if (idx === -1) return;
  const newIdx = idx + direction;
  if (newIdx < 0 || newIdx >= note.blocks.length) return;
  
  const temp = note.blocks[idx];
  note.blocks[idx] = note.blocks[newIdx];
  note.blocks[newIdx] = temp;
  
  scheduleSave();
  renderBlocks();
  playMechanicalClick(1.4);
  showToast(direction > 0 ? 'Moved block down' : 'Moved block up', 'info');
}

function toggleCursorSpotlight() {
  state.cursorSpotlight = !state.cursorSpotlight;
  const el = document.getElementById('pkCursorSpotlight');
  if (el) {
    el.style.opacity = state.cursorSpotlight ? '1' : '0';
  }
  scheduleSave();
  playMechanicalClick(1.2);
  showToast(`Magnetic Cursor Spotlight: ${state.cursorSpotlight ? 'ENABLED' : 'DISABLED'}`, 'info');
}

function toggleMechanicalTyping() {
  state.mechanicalTyping = !state.mechanicalTyping;
  scheduleSave();
  playMechanicalClick(1.5);
  showToast(`Mechanical Typing Sounds: ${state.mechanicalTyping ? 'ENABLED' : 'DISABLED'}`, 'info');
}

function quickContextAction(type) {
  playMechanicalClick(1.3);
  if (type === 'copy') {
    const sel = window.getSelection().toString().trim();
    if (sel) {
      navigator.clipboard.writeText(sel).then(() => showToast('Copied selection to clipboard', 'info'));
    } else if (activeContextMenuBlockId) {
      copyBlockContent(activeContextMenuBlockId);
    } else {
      copyActiveNoteMarkdown();
    }
  } else if (type === 'speak') {
    const sel = window.getSelection().toString().trim();
    if (sel) {
      readTextAloud(sel, 'Selection');
    } else {
      toggleReadingNoteAloud();
    }
  } else if (type === 'zen') {
    toggleZenMode();
  } else if (type === 'burst') {
    const menu = document.getElementById('pkContextMenu');
    const rect = menu ? menu.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2 };
    triggerCelebration(rect.left + 50, rect.top, 50);
  }
  closeContextMenu();
}

document.addEventListener('contextmenu', e => {
  // Shift + Right Click allows power-users to open the native browser inspect/menu
  if (e.shiftKey) return;

  e.preventDefault();
  closeContextMenu();

  // Trigger tactile sonar pulse & audio
  triggerRightClickShockwave(e.clientX, e.clientY);
  playContextMenuSound();
  if (navigator.vibrate) {
    navigator.vibrate([6, 10]);
  }

  const target = e.target;
  const blockEl = target.closest('[data-block-id]') || target.closest('.block-row');
  const noteEl = target.closest('[data-note-id]');
  const eventEl = target.closest('[data-event-id]');
  const dateCellEl = target.closest('[data-date-key]');
  const canvasEl = target.closest('#knowledgeGraphCanvas') || target.closest('#expandedKnowledgeGraphCanvas');
  const docAreaEl = target.closest('#documentScrollArea');

  let menuItems = [];
  let headerText = '';
  let badgeIcon = 'pkLogo';

  // CONTEXT A: Note Block or Text Selection
  if (blockEl || docAreaEl) {
    const blockId = blockEl ? (blockEl.getAttribute('data-block-id') || blockEl.id) : null;
    activeContextMenuBlockId = blockId;
    const note = getActiveNote();
    const block = note ? note.blocks.find(b => b.id === blockId) : null;
    const hasSelection = window.getSelection().toString().trim().length > 0;

    if (hasSelection) {
      const selText = window.getSelection().toString().trim();
      headerText = `SELECTION (${selText.length} CHARS)`;
      badgeIcon = 'quote';
      menuItems.push(
        { label: 'Bold', shortcut: '⌘B', icon: 'hash', action: () => document.execCommand('bold') },
        { label: 'Italic', shortcut: '⌘I', icon: 'quote', action: () => document.execCommand('italic') },
        { label: 'Inline Code', shortcut: '`', icon: 'terminal', action: () => formatSelectionWithCode() },
        { label: 'Link to Note', shortcut: '[[', icon: 'link', action: () => formatSelectionWithWikiLink() },
        { label: 'Turn into Action Checkbox', shortcut: '- [ ]', icon: 'checkSquare', action: () => formatSelectionAsTodo() },
        { label: 'Read Selection Aloud', shortcut: 'Speak', icon: 'volume', action: () => readTextAloud(selText, 'Selection') },
        { label: 'Selection Statistics', shortcut: 'Stats', icon: 'grid', action: () => showSelectionStats() },
        { type: 'divider' },
        { label: 'Copy Selection', shortcut: '⌘C', icon: 'copy', action: () => document.execCommand('copy') },
        { label: 'Cut Selection', shortcut: '⌘X', icon: 'minus', action: () => document.execCommand('cut') },
        { type: 'divider' }
      );
    } else {
      headerText = block ? `BLOCK: ${block.type.toUpperCase()}` : 'DOCUMENT';
      badgeIcon = block ? 'layers' : 'document';
    }

    if (block) {
      menuItems.push(
        {
          label: 'Turn Into',
          icon: 'layers',
          hasSubmenu: true,
          submenu: [
            { label: 'Paragraph', icon: 'document', action: () => convertBlockType(block.id, 'paragraph') },
            { label: 'Heading 1', icon: 'hash', action: () => convertBlockType(block.id, 'h1') },
            { label: 'Heading 2', icon: 'hash', action: () => convertBlockType(block.id, 'h2') },
            { label: 'Heading 3', icon: 'hash', action: () => convertBlockType(block.id, 'h3') },
            { label: 'Todo Checklist', icon: 'checkSquare', action: () => convertBlockType(block.id, 'todo') },
            { label: 'Bulleted List', icon: 'list', action: () => convertBlockType(block.id, 'bullet') },
            { label: 'Blockquote', icon: 'quote', action: () => convertBlockType(block.id, 'quote') },
            { label: 'Code Block', icon: 'terminal', action: () => convertBlockType(block.id, 'code') },
            { label: 'Callout', icon: 'alert', action: () => convertBlockType(block.id, 'callout') }
          ]
        },
        { label: 'Move Block Up', shortcut: 'Alt+↑', icon: 'chevronUp', action: () => moveBlockRelative(block.id, -1) },
        { label: 'Move Block Down', shortcut: 'Alt+↓', icon: 'chevronDown', action: () => moveBlockRelative(block.id, 1) },
        { label: 'Insert Block Above', shortcut: '⇧↵', icon: 'document', action: () => insertBlockBefore(block.id) },
        { label: 'Insert Block Below', shortcut: '↵', icon: 'document', action: () => insertBlockAfter(block.id) },
        { label: 'Duplicate Block', shortcut: '⌘D', icon: 'layers', action: () => duplicateBlock(block.id) },
        { label: 'Copy Markdown', icon: 'copy', action: () => copyBlockMarkdown(block.id) },
        { type: 'divider' },
        { label: 'Delete Block', shortcut: '⌫', icon: 'minus', danger: true, action: () => deleteBlock(block.id) }
      );
    } else {
      menuItems.push(
        { label: 'Append Block', shortcut: '+', icon: 'document', action: () => appendBlockAtEnd() },
        { label: 'Add Todo Item', shortcut: '[]', icon: 'checkSquare', action: () => appendTodoAtEnd() },
        { label: 'Read Note Aloud', shortcut: 'Voice', icon: 'volume', action: () => toggleReadingNoteAloud() },
        { label: 'Toggle Zen Focus Mode', shortcut: '⌘J', icon: 'compass', action: () => toggleZenMode() },
        { label: 'Open Command Palette', shortcut: '⌘K', icon: 'terminal', action: () => openCommandPalette() }
      );
    }
  }
  // CONTEXT B: Left Sidebar Note
  else if (noteEl) {
    const noteId = noteEl.getAttribute('data-note-id');
    activeContextMenuNoteId = noteId;
    const note = state.notes.find(n => n.id === noteId);
    if (!note) return;

    headerText = `DOC: ${note.title}`;
    badgeIcon = 'document';

    const folders = ['General', 'Projects', 'Daily Logs', 'Reading'];
    const folderSubmenu = folders.map(f => ({
      label: f,
      icon: 'archive',
      active: f === note.folder,
      action: () => moveNoteToFolder(note.id, f)
    }));

    menuItems.push(
      { label: 'Open Document', icon: 'document', action: () => selectNote(note.id) },
      { label: note.favorite ? 'Unpin from Index' : 'Pin to Index', icon: 'bookmark', action: () => toggleFavoriteNoteById(note.id) },
      { label: 'Read Document Aloud', icon: 'volume', action: () => { selectNote(note.id); toggleReadingNoteAloud(); } },
      { label: 'Move to Collection', icon: 'archive', hasSubmenu: true, submenu: folderSubmenu },
      { label: 'Duplicate Document', icon: 'layers', action: () => duplicateNoteById(note.id) },
      { label: 'Copy Wiki-Link', shortcut: '[[...]]', icon: 'link', action: () => copyNoteWikiLink(note.id) },
      { type: 'divider' },
      { label: 'Delete Document', icon: 'minus', danger: true, action: () => deleteNoteById(note.id) }
    );
  }
  // CONTEXT C: Calendar Event
  else if (eventEl) {
    const eventId = eventEl.getAttribute('data-event-id');
    activeContextMenuEventId = eventId;
    const evt = state.events.find(e => e.id === eventId);
    if (!evt) return;

    headerText = `EVENT: ${evt.title}`;
    badgeIcon = 'clock';

    const colorSubmenu = EVENT_COLORS.map(c => ({
      label: c.label,
      colorDot: c.hex,
      active: c.hex.toLowerCase() === (evt.color_code || '').toLowerCase(),
      action: () => changeEventColorById(evt.id, c.hex)
    }));

    menuItems.push(
      { label: 'Edit Event...', icon: 'clock', action: () => openEventModal({ eventId: evt.id }) },
      { label: 'Change Ink Color', icon: 'sliders', hasSubmenu: true, submenu: colorSubmenu },
      evt.linkedNoteId ? { label: 'Open Linked Document', icon: 'document', action: () => { state.appMode = 'workspace'; selectNote(evt.linkedNoteId); } } : null,
      { label: 'Duplicate Event', icon: 'layers', action: () => duplicateEventById(evt.id) },
      { label: 'Export to iCalendar (.ics)', icon: 'calendar', action: () => exportCalendarToICS() },
      { type: 'divider' },
      { label: 'Delete Event', icon: 'minus', danger: true, action: () => deleteEventById(evt.id) }
    );
    menuItems = menuItems.filter(Boolean);
  }
  // CONTEXT D: Calendar Day Cell
  else if (dateCellEl) {
    const dateKey = dateCellEl.getAttribute('data-date-key');
    activeContextMenuDateKey = dateKey;
    headerText = `SCHEDULE · ${dateKey}`;
    badgeIcon = 'calendar';

    menuItems.push(
      { label: 'Quick Add Event (Natural)', shortcut: 'C', icon: 'sparkles', action: () => openQuickAddPopover(e.clientX, e.clientY, dateKey) },
      { label: 'New Event on this Date', shortcut: '+', icon: 'calendar', action: () => openEventModal({ dateKey: dateKey }) },
      { label: 'View Day Timeline', icon: 'clock', action: () => { state.calendarSelectedDate = dateKey; state.calendarCursorDate = dateKey; setCalendarView('day'); } },
      { label: 'Open Daily Log', icon: 'document', action: () => openOrCreateDailyNote() },
      { label: 'Jump to Today', shortcut: 'T', icon: 'compass', action: () => jumpCalendarToday() }
    );
  }
  // CONTEXT E: Knowledge Graph Canvas
  else if (canvasEl) {
    const ptr = getGraphPointerPos(canvasEl, e);
    const hitNode = findNodeAt(ptr);
    const allLinks = computeVaultConnections();
    const nodeMap = new Map(graphNodes.map(n => [n.id, n]));
    const hitEdge = !hitNode ? findEdgeAt(ptr, allLinks, nodeMap) : null;

    if (hitNode) {
      headerText = `NODE: ${hitNode.title.toUpperCase()}`;
      badgeIcon = 'graph';
      const otherNotes = state.notes.filter(n => n.id !== hitNode.id);
      const connectSubmenu = otherNotes.slice(0, 10).map(n => ({
        label: `Link to "${n.title}"`,
        icon: 'link',
        action: () => connectNotes(hitNode.id, n.id)
      }));
      
      // Connected notes for unlinking
      const connectedWithHit = [];
      allLinks.forEach(l => {
        if (l.source === hitNode.id) connectedWithHit.push(l.target);
        if (l.target === hitNode.id) connectedWithHit.push(l.source);
      });
      const connectedUnique = [...new Set(connectedWithHit)];
      const unlinkSubmenu = connectedUnique.map(targetId => {
        const tn = state.notes.find(n => n.id === targetId);
        return tn ? {
          label: `Unlink from "${tn.title}"`,
          icon: 'minus',
          danger: true,
          action: () => disconnectNotes(hitNode.id, tn.id)
        } : null;
      }).filter(Boolean);

      menuItems.push(
        { label: 'Open Document', icon: 'document', action: () => selectNote(hitNode.id) },
        { label: 'Start Mouse Link Wire', shortcut: 'Drag', icon: 'link', action: () => startConnectionFromNode(hitNode) },
        { label: 'Connect to Note...', icon: 'link', hasSubmenu: true, submenu: connectSubmenu },
        unlinkSubmenu.length > 0 ? { label: 'Unlink from...', icon: 'minus', danger: true, hasSubmenu: true, submenu: unlinkSubmenu } : null,
        { type: 'divider' },
        { label: 'Center in View', icon: 'compass', action: () => centerNodeInView(hitNode) },
        { label: 'Copy Wiki-Link', shortcut: '[[...]]', icon: 'copy', action: () => copyNoteWikiLink(hitNode.id) }
      );
      menuItems = menuItems.filter(Boolean);
    } else if (hitEdge) {
      headerText = 'TOPOLOGY CONNECTION';
      badgeIcon = 'link';
      menuItems.push(
        { label: `Unlink: Remove [[${hitEdge.target.title}]]`, shortcut: '✂️', icon: 'minus', danger: true, action: () => disconnectNotes(hitEdge.source.id, hitEdge.target.id) },
        { label: 'Make Bidirectional Link (⇄)', icon: 'link', action: () => connectNotes(hitEdge.target.id, hitEdge.source.id, true) },
        { type: 'divider' },
        { label: `Open "${hitEdge.source.title}"`, icon: 'document', action: () => selectNote(hitEdge.source.id) },
        { label: `Open "${hitEdge.target.title}"`, icon: 'document', action: () => selectNote(hitEdge.target.id) }
      );
    } else {
      headerText = 'TOPOLOGY GRAPH';
      badgeIcon = 'graph';
      menuItems.push(
        { label: `Tool: ${graphToolMode === 'connect' ? 'Switch to Move Mode' : 'Switch to Link Mode'}`, icon: 'sliders', action: () => toggleGraphToolMode() },
        { label: 'Fit / Center Graph in View', shortcut: 'F', icon: 'compass', action: () => fitGraphView() },
        { label: 'Reset Layout (Reheat)', shortcut: 'R', icon: 'graph', action: () => reheatGraph() },
        { label: `Scope: ${state.graphLocalOnly ? 'Switch to Global' : 'Switch to Local'}`, icon: 'layers', action: () => toggleGraphScope() },
        { label: 'Expand Fullscreen Graph Studio', shortcut: '⛶', icon: 'grid', action: () => openExpandedGraphModal() },
        { type: 'divider' },
        { label: 'Create New Note Here', shortcut: '⌘N', icon: 'document', action: () => createNewNote('General') }
      );
    }
  }
  // CONTEXT F: General Workspace Fallback
  else {
    headerText = 'PK NOTE WORKSPACE';
    badgeIcon = 'pkLogo';
    menuItems.push(
      { label: 'New Working Note', shortcut: '⌘N', icon: 'document', action: () => createNewNote('General') },
      { label: 'Quick Event (Natural Prompt)', shortcut: 'C', icon: 'calendar', action: () => openQuickAddPopover(e.clientX, e.clientY) },
      { label: 'Toggle Zen Focus Mode', shortcut: '⌘J', icon: 'compass', action: () => toggleZenMode() },
      { label: `Spotlight: ${state.cursorSpotlight ? 'Enabled' : 'Disabled'}`, icon: 'sun', action: () => toggleCursorSpotlight() },
      { label: `Mechanical Typing: ${state.mechanicalTyping ? 'Enabled' : 'Disabled'}`, icon: 'terminal', action: () => toggleMechanicalTyping() },
      { label: 'Typography Studio', shortcut: '⌘T', icon: 'sliders', action: () => openTypographyModal() },
      { label: 'Trigger Confetti Celebration', shortcut: 'Burst', icon: 'sparkles', action: () => triggerCelebration(e.clientX, e.clientY, 60) },
      { type: 'divider' },
      { label: state.appMode === 'workspace' ? 'Switch to Calendar' : 'Switch to Notes', icon: 'grid', action: () => setAppMode(state.appMode === 'workspace' ? 'calendar' : 'workspace') },
      { label: `Theme: ${state.theme === 'dark' ? 'Archival Vellum' : 'Obsidian Carbon'}`, icon: 'sliders', action: () => toggleTheme() },
      { label: 'Install PK Note App', icon: 'layers', action: () => openInstallModal() },
      { type: 'divider' },
      { label: 'Start Fresh (Reset Workspace)', icon: 'minus', danger: true, action: () => promptStartFresh() }
    );
  }

  renderAndPositionContextMenu(e.clientX, e.clientY, headerText, menuItems, badgeIcon);
});

function renderAndPositionContextMenu(x, y, headerText, items, badgeIcon = 'pkLogo') {
  const menu = document.getElementById('pkContextMenu');
  const headerEl = document.getElementById('pkContextMenuHeader');
  const itemsEl = document.getElementById('pkContextMenuItems');
  const badgeEl = document.getElementById('pkContextMenuBadgeIcon');
  if (!menu || !itemsEl) return;

  if (badgeEl) {
    badgeEl.innerHTML = getGlyphSVG(badgeIcon);
  }

  if (headerText) {
    headerEl.textContent = headerText;
    headerEl.classList.remove('hidden');
  } else {
    headerEl.classList.add('hidden');
  }

  itemsEl.innerHTML = items.map((item, idx) => {
    if (item.type === 'divider') {
      return '<div class="h-[1px] bg-[var(--border-hairline)] my-1"></div>';
    }

    const iconHtml = item.icon
      ? `<span class="shrink-0 ${item.danger ? 'text-[var(--accent-vermilion)]' : 'text-[var(--text-tertiary)]'}">${getGlyphSVG(item.icon)}</span>`
      : (item.colorDot ? `<span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${item.colorDot}"></span>` : '');

    const shortcutHtml = item.shortcut
      ? `<span class="font-mono text-[9px] text-[var(--text-tertiary)]">${item.shortcut}</span>`
      : (item.hasSubmenu ? '<svg class="w-3 h-3 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>' : '');

    return `
      <button type="button"
              data-menu-idx="${idx}"
              style="--item-idx: ${idx};"
              onmouseenter="handleContextItemHover(event, ${idx})"
              onclick="executeContextAction(${idx})"
              class="pk-context-item w-full flex items-center justify-between px-2 py-1.5 rounded-[4px] text-left transition-colors cursor-pointer ${
                item.danger
                  ? 'text-[var(--accent-vermilion)] hover:bg-[var(--accent-vermilion-tint)]'
                  : 'text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
              }">
        <div class="flex items-center gap-2 min-w-0">
          ${iconHtml}
          <span class="truncate text-xs">${escapeHtml(item.label)}</span>
        </div>
        ${shortcutHtml}
      </button>
    `;
  }).join('');

  // Store items on element for execution
  menu._items = items;
  contextFocusedIdx = -1;

  menu.style.display = 'block';
  menu.classList.remove('hidden');

  // Re-trigger luxury spring entry animation
  menu.classList.remove('pk-context-animate');
  void menu.offsetWidth;
  menu.classList.add('pk-context-animate');

  // Boundary detection
  const menuRect = menu.getBoundingClientRect();
  const winW = window.innerWidth;
  const winH = window.innerHeight;

  let posX = x;
  let posY = y;

  if (posX + menuRect.width > winW - 12) {
    posX = winW - menuRect.width - 12;
  }
  if (posY + menuRect.height > winH - 12) {
    posY = winH - menuRect.height - 12;
  }

  menu.style.left = `${Math.max(10, posX)}px`;
  menu.style.top = `${Math.max(10, posY)}px`;
}

function executeContextAction(idx) {
  const menu = document.getElementById('pkContextMenu');
  if (!menu || !menu._items) return;
  const item = menu._items[idx];
  if (item && item.action) {
    closeContextMenu();
    playMechanicalClick(1.2);
    item.action();
  }
}

function handleContextItemHover(e, idx) {
  const menu = document.getElementById('pkContextMenu');
  if (!menu || !menu._items) return;
  const item = menu._items[idx];
  clearTimeout(activeSubmenuTimeout);

  if (item && item.hasSubmenu && item.submenu) {
    const itemEl = e.currentTarget;
    const rect = itemEl.getBoundingClientRect();
    renderContextSubmenu(rect.right - 2, rect.top - 4, item.submenu);
  } else {
    closeContextSubmenu();
  }
}

function renderContextSubmenu(x, y, items) {
  const sub = document.getElementById('pkContextSubmenu');
  const itemsEl = document.getElementById('pkContextSubmenuItems');
  if (!sub || !itemsEl) return;

  itemsEl.innerHTML = items.map((subItem, sIdx) => {
    const iconHtml = subItem.icon
      ? `<span class="shrink-0 text-[var(--text-tertiary)]">${getGlyphSVG(subItem.icon)}</span>`
      : (subItem.colorDot ? `<span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${subItem.colorDot}"></span>` : '');

    return `
      <button type="button"
              style="--item-idx: ${sIdx};"
              onclick="executeSubmenuAction(${sIdx})"
              class="pk-context-item w-full flex items-center justify-between px-2 py-1.5 rounded-[4px] text-left text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors cursor-pointer text-xs">
        <div class="flex items-center gap-2 min-w-0">
          ${iconHtml}
          <span class="truncate">${escapeHtml(subItem.label)}</span>
        </div>
        ${subItem.active ? `<svg class="w-3.5 h-3.5 text-[var(--accent-vermilion)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
      </button>
    `;
  }).join('');

  sub._items = items;
  sub.style.display = 'block';
  sub.classList.remove('hidden');

  sub.classList.remove('pk-context-animate');
  void sub.offsetWidth;
  sub.classList.add('pk-context-animate');

  const subRect = sub.getBoundingClientRect();
  const winW = window.innerWidth;
  const winH = window.innerHeight;

  let subX = x;
  let subY = y;

  if (subX + subRect.width > winW - 10) {
    subX = x - subRect.width - 10;
  }
  if (subY + subRect.height > winH - 10) {
    subY = winH - subRect.height - 10;
  }

  sub.style.left = `${Math.max(10, subX)}px`;
  sub.style.top = `${Math.max(10, subY)}px`;
}

function executeSubmenuAction(sIdx) {
  const sub = document.getElementById('pkContextSubmenu');
  if (!sub || !sub._items) return;
  const item = sub._items[sIdx];
  if (item && item.action) {
    closeContextMenu();
    playMechanicalClick(1.2);
    item.action();
  }
}

function closeContextSubmenu() {
  const sub = document.getElementById('pkContextSubmenu');
  if (sub) {
    sub.classList.add('hidden');
    sub.style.display = 'none';
  }
}

function closeContextMenu() {
  const menu = document.getElementById('pkContextMenu');
  if (menu) {
    menu.classList.add('hidden');
    menu.style.display = 'none';
  }
  closeContextSubmenu();
  contextFocusedIdx = -1;
}

function updateContextFocus(newIdx) {
  const menu = document.getElementById('pkContextMenu');
  if (!menu || !menu._items) return;
  const buttons = Array.from(menu.querySelectorAll('#pkContextMenuItems button[data-menu-idx]'));
  if (buttons.length === 0) return;

  if (newIdx < 0) newIdx = buttons.length - 1;
  if (newIdx >= buttons.length) newIdx = 0;

  contextFocusedIdx = newIdx;
  buttons.forEach((btn, i) => {
    if (i === contextFocusedIdx) {
      btn.classList.add('bg-[var(--bg-hover)]', 'ring-1', 'ring-[var(--accent-vermilion)]/40');
      btn.scrollIntoView({ block: 'nearest' });
      const itemIdx = parseInt(btn.getAttribute('data-menu-idx'), 10);
      handleContextItemHover({ currentTarget: btn }, itemIdx);
    } else {
      btn.classList.remove('bg-[var(--bg-hover)]', 'ring-1', 'ring-[var(--accent-vermilion)]/40');
    }
  });
  playMechanicalClick(1.8);
}

// Dismiss on click outside
document.addEventListener('click', e => {
  const menu = document.getElementById('pkContextMenu');
  const sub = document.getElementById('pkContextSubmenu');
  if (menu && !menu.contains(e.target) && (!sub || !sub.contains(e.target))) {
    closeContextMenu();
  }
});

// Keyboard navigation within context menu & global escape
document.addEventListener('keydown', e => {
  const menu = document.getElementById('pkContextMenu');
  if (menu && !menu.classList.contains('hidden') && menu.style.display !== 'none') {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      updateContextFocus(contextFocusedIdx + 1);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      updateContextFocus(contextFocusedIdx - 1);
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      const buttons = Array.from(menu.querySelectorAll('#pkContextMenuItems button[data-menu-idx]'));
      if (buttons[contextFocusedIdx]) {
        const idx = parseInt(buttons[contextFocusedIdx].getAttribute('data-menu-idx'), 10);
        executeContextAction(idx);
      }
      return;
    }
    if (e.key === 'ArrowRight') {
      const sub = document.getElementById('pkContextSubmenu');
      if (sub && !sub.classList.contains('hidden')) {
        e.preventDefault();
        const subButtons = Array.from(sub.querySelectorAll('#pkContextSubmenuItems button'));
        if (subButtons[0]) subButtons[0].focus();
        return;
      }
    }
    if (e.key === 'ArrowLeft') {
      const sub = document.getElementById('pkContextSubmenu');
      if (sub && !sub.classList.contains('hidden')) {
        e.preventDefault();
        closeContextSubmenu();
        return;
      }
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      closeContextMenu();
      return;
    }
  }
});

// Ambient Cursor Spotlight Pointermove Listener (Desktop mouse only — disabled on touch/lite phones!)
let cursorRaf = null;
if (!window.PK_LITE_MODE) {
  window.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || state.cursorSpotlight === false) return;
    if (cursorRaf) return;
    cursorRaf = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
      cursorRaf = null;
    });
  }, { passive: true });
}

// Tactile Mechanical Typing Audio Listener (Skipped on Lite mobile mode to prevent audio-node GC stutter)
document.addEventListener('keydown', e => {
  if (window.PK_LITE_MODE || state.soundEnabled === false || state.mechanicalTyping === false) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const target = e.target;
  const isEditable = target && (
    target.isContentEditable ||
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.closest('[contenteditable="true"]')
  );
  if (!isEditable) return;
  playTypingSound(e.key);
}, { passive: true });

window.addEventListener('resize', () => {
  const m = document.getElementById('pkContextMenu');
  if (m && !m.classList.contains('hidden')) closeContextMenu();
});
window.addEventListener('scroll', () => {
  const m = document.getElementById('pkContextMenu');
  if (m && !m.classList.contains('hidden')) closeContextMenu();
}, true);

    // Context Action Implementations
function formatSelectionWithCode() {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;
  const text = sel.toString();
  if (text) {
    document.execCommand('insertText', false, '`' + text + '`');
  }
}

function formatSelectionWithWikiLink() {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;
  const text = sel.toString();
  if (text) {
    document.execCommand('insertText', false, '[[' + text + ']]');
  }
}

function convertBlockType(blockId, targetType) {
  const note = guardActiveNoteEditable();
  if (!note) return;
  takeSnapshot('convertBlockType');
  const block = note.blocks.find(b => b.id === blockId);
  if (block) {
    block.type = targetType;
    renderBlocks(note);
    focusBlock(block.id, true);
    persistState();
    showToast(`Converted to ${targetType}`);
  }
}

function insertBlockBefore(blockId) {
  const note = guardActiveNoteEditable();
  if (!note) return;
  takeSnapshot('insertBlockBefore');
  const idx = note.blocks.findIndex(b => b.id === blockId);
  if (idx !== -1) {
    const newBlock = { id: generateId('b'), type: 'paragraph', content: '' };
    note.blocks.splice(idx, 0, newBlock);
    renderBlocks(note);
    focusBlock(newBlock.id, true);
    persistState();
  }
}

function duplicateBlock(blockId) {
  const note = guardActiveNoteEditable();
  if (!note) return;
  const idx = note.blocks.findIndex(b => b.id === blockId);
  if (idx !== -1) {
    const orig = note.blocks[idx];
    const copyBlock = { ...orig, id: generateId('b') };
    note.blocks.splice(idx + 1, 0, copyBlock);
    renderBlocks(note);
    focusBlock(copyBlock.id, true);
    persistState();
    showToast('Block duplicated');
  }
}

function copyBlockMarkdown(blockId) {
  const note = getActiveNote();
  const block = note.blocks.find(b => b.id === blockId);
  if (block) {
    navigator.clipboard.writeText(block.content || '').then(() => {
      showToast('Copied block content to clipboard');
    });
  }
}

function toggleFavoriteNoteById(noteId) {
  const note = state.notes.find(n => n.id === noteId);
  if (note) {
    note.favorite = !note.favorite;
    renderSidebar();
    persistState();
    showToast(note.favorite ? `Pinned "${note.title}"` : `Unpinned "${note.title}"`, 'ochre');
  }
}

function moveNoteToFolder(noteId, targetFolder) {
  const note = state.notes.find(n => n.id === noteId);
  if (note) {
    note.folder = targetFolder;
    state.expandedFolders[targetFolder] = true;
    renderSidebar();
    if (state.activeNoteId === noteId) {
      renderActiveDocument();
    }
    persistState();
    showToast(`Moved to "${targetFolder}"`);
  }
}

function duplicateNoteById(noteId) {
  const note = state.notes.find(n => n.id === noteId);
  if (!note) return;
  const nextNum = String(state.notes.length + 1).padStart(2, '0');
  const copyNote = {
    ...JSON.parse(JSON.stringify(note)),
    id: generateId('note'),
    code: `DOC-${nextNum}`,
    title: `${note.title} (Copy)`,
    updatedAt: TODAY_KEY
  };
  state.notes.push(copyNote);
  selectNote(copyNote.id);
  showToast(`Duplicated "${copyNote.title}"`);
}

function copyNoteWikiLink(noteId) {
  const note = state.notes.find(n => n.id === noteId);
  if (!note) return;
  const link = `[[${note.title}]]`;
  navigator.clipboard.writeText(link).then(() => {
    showToast(`Copied ${link}`);
  });
}

function deleteNoteById(noteId) {
  if (state.notes.length <= 1) {
    showToast('Cannot delete final document', 'ochre');
    return;
  }
  const note = state.notes.find(n => n.id === noteId);
  const title = note ? note.title : 'Document';
  state.notes = state.notes.filter(n => n.id !== noteId);
  if (state.activeNoteId === noteId) {
    state.activeNoteId = state.notes[0].id;
  }
  renderAll();
  persistState();
  showToast(`Deleted "${title}"`);
}

function changeEventColorById(eventId, hexColor) {
  const evt = state.events.find(e => e.id === eventId);
  if (evt) {
    evt.color_code = hexColor;
    renderCalendarSystem();
    persistState();
    showToast('Color updated');
  }
}

function duplicateEventById(eventId) {
  const evt = state.events.find(e => e.id === eventId);
  if (!evt) return;
  const copyEvt = {
    ...JSON.parse(JSON.stringify(evt)),
    id: generateId('evt'),
    title: `${evt.title} (Copy)`
  };
  state.events.push(copyEvt);
  renderCalendarSystem();
  persistState();
  showToast(`Duplicated "${copyEvt.title}"`);
}

function deleteEventById(eventId) {
  const evt = state.events.find(e => e.id === eventId);
  const title = evt ? evt.title : 'Event';
  state.events = state.events.filter(e => e.id !== eventId);
  renderCalendarSystem();
  persistState();
  showToast(`Deleted "${title}"`);
}


// =========================================================================
// 9C. EFFORTLESS SCHEDULING ENGINE (QUICK-ADD, PREVIEWS, OVERFLOW & DRILLDOWN)
// =========================================================================
let quickAddSelectedColor = '#D95338';
let quickAddActiveDateKey = TODAY_KEY;
let activePreviewEventId = null;

function handleMonthCellClick(e, dateKey) {
  if (e.target.closest('[data-event-id]') || e.target.closest('button')) return;
  selectCalendarDate(dateKey, false);
  openQuickAddPopover(e, { dateKey: dateKey });
}

function drillDownToDay(dateKey) {
  state.calendarSelectedDate = dateKey;
  state.calendarCursorDate = dateKey;
  setCalendarView('day');
  showToast(`Zoomed to ${dateKey} day timeline`);
}

function toggleCalendarAgendaSidebar() {
  const currentlyOpen = state.calendarAgendaOpen === undefined ? (window.innerWidth >= 1024) : (state.calendarAgendaOpen !== false);
  state.calendarAgendaOpen = !currentlyOpen;
  applyCalendarAgendaSidebarState();
  persistState();
}

function applyCalendarAgendaSidebarState() {
  const sidebar = document.getElementById('calendarAgendaSidebar');
  const btn = document.getElementById('calToggleAgendaBtn');
  const isCompact = window.innerWidth < 1024;
  const isOpen = state.calendarAgendaOpen === undefined ? !isCompact : (state.calendarAgendaOpen !== false);
  if (sidebar) {
    if (isOpen) {
      sidebar.classList.remove('hidden', 'lg:flex');
      sidebar.classList.add('flex');
      if (isCompact) {
        sidebar.classList.add('fixed', 'right-0', 'top-[52px]', 'bottom-[56px]', 'z-40', 'shadow-2xl', 'max-w-[85vw]');
      } else {
        sidebar.classList.remove('fixed', 'right-0', 'top-[52px]', 'bottom-[56px]', 'z-40', 'shadow-2xl', 'max-w-[85vw]');
      }
    } else {
      sidebar.classList.add('hidden');
      sidebar.classList.remove('flex', 'lg:flex', 'fixed', 'right-0', 'top-[52px]', 'bottom-[56px]', 'z-40', 'shadow-2xl', 'max-w-[85vw]');
    }
  }
  if (btn) {
    if (isOpen) {
      btn.classList.add('bg-[var(--bg-elevated)]', 'text-[var(--text-primary)]', 'border-[var(--border-strong)]');
    } else {
      btn.classList.remove('bg-[var(--bg-elevated)]', 'text-[var(--text-primary)]', 'border-[var(--border-strong)]');
    }
  }
}

// -------------------------------------------------------------------------
// NATURAL LANGUAGE EVENT QUICK-PARSER
// -------------------------------------------------------------------------
function parseNaturalLanguageEvent(inputStr, baseDateKey = null) {
  if (!inputStr || !inputStr.trim()) return null;
  let text = inputStr.trim();
  const now = new Date();
  const base = baseDateKey ? parseLocalDateKey(baseDateKey) : new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let targetDate = new Date(base.getTime());
  let startTimeStr = '09:00';
  let endTimeStr = '10:00';
  let isAllDay = false;
  let location = '';

  // 1. Location match: "in <place>", "via <service>"
  const locMatch = text.match(/\b(?:in|via)\s+([A-Za-z0-9\s#\-\.]+?)(?=\s+(?:at\s+\d|on|for|from|to|tomorrow|today|next|$)|$)/i);
  if (locMatch) {
    location = locMatch[1].trim();
    text = text.replace(locMatch[0], ' ');
  }

  // 2. Relative dates
  if (/\b(today|tonight)\b/i.test(text)) {
    targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    text = text.replace(/\b(today|tonight)\b/gi, ' ');
  } else if (/\btomorrow\b/i.test(text)) {
    targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    text = text.replace(/\btomorrow\b/gi, ' ');
  } else if (/\byesterday\b/i.test(text)) {
    targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    text = text.replace(/\byesterday\b/gi, ' ');
  } else {
    const dowNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dowRegex = new RegExp(`\\b(?:(next|this|on)\\s+)?(${dowNames.join('|')})\\b`, 'i');
    const dowMatch = text.match(dowRegex);
    if (dowMatch) {
      const modifier = (dowMatch[1] || '').toLowerCase();
      const dayName = dowMatch[2].toLowerCase();
      const targetDow = dowNames.indexOf(dayName);
      const currentDow = now.getDay();
      let diff = targetDow - currentDow;
      if (diff <= 0 || modifier === 'next') diff += 7;
      targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + diff);
      text = text.replace(dowMatch[0], ' ');
    } else {
      const isoMatch = text.match(/\b(\d{4})-(\d{2})-(\d{2})\b/);
      if (isoMatch) {
        targetDate = new Date(parseInt(isoMatch[1], 10), parseInt(isoMatch[2], 10) - 1, parseInt(isoMatch[3], 10));
        text = text.replace(isoMatch[0], ' ');
      } else {
        const monthNames = ['jan(?:uary)?', 'feb(?:ruary)?', 'mar(?:ch)?', 'apr(?:il)?', 'may', 'jun(?:e)?', 'jul(?:y)?', 'aug(?:ust)?', 'sep(?:tember)?', 'oct(?:ober)?', 'nov(?:ember)?', 'dec(?:ember)?'];
        const dateMatch = text.match(new RegExp(`\\b(${monthNames.join('|')})\\s+(\\d{1,2})(?:st|nd|rd|th)?\\b`, 'i'));
        if (dateMatch) {
          const mStr = dateMatch[1].slice(0, 3).toLowerCase();
          const shortMonths = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
          const mIdx = shortMonths.indexOf(mStr);
          const dayNum = parseInt(dateMatch[2], 10);
          targetDate = new Date(now.getFullYear(), mIdx, dayNum);
          text = text.replace(dateMatch[0], ' ');
        }
      }
    }
  }

  // 3. All Day
  if (/\ball[\s-]day\b/i.test(text)) {
    isAllDay = true;
    text = text.replace(/\ball[\s-]day\b/gi, ' ');
  }

  // 4. Duration
  let parsedStartHour = null;
  let parsedStartMin = 0;
  let parsedEndHour = null;
  let parsedEndMin = 0;
  let durationMinutes = null;

  const durMatch = text.match(/\bfor\s+(\d+(?:\.\d+)?)\s*(h|hr|hrs|hour|hours|m|min|mins|minutes)\b/i);
  if (durMatch) {
    const val = parseFloat(durMatch[1]);
    const unit = durMatch[2].toLowerCase();
    if (unit.startsWith('h')) {
      durationMinutes = Math.round(val * 60);
    } else {
      durationMinutes = Math.round(val);
    }
    text = text.replace(durMatch[0], ' ');
  }

  // 5. Time Range
  const rangeMatch = text.match(/\b(?:at\s+)?(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\s*(?:-|–|to)\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/i);
  if (rangeMatch) {
    let sh = parseInt(rangeMatch[1], 10);
    let sm = rangeMatch[2] ? parseInt(rangeMatch[2], 10) : 0;
    const sAmpm = (rangeMatch[3] || rangeMatch[6] || '').toLowerCase();

    let eh = parseInt(rangeMatch[4], 10);
    let em = rangeMatch[5] ? parseInt(rangeMatch[5], 10) : 0;
    const eAmpm = (rangeMatch[6] || sAmpm).toLowerCase();

    if (sAmpm === 'pm' && sh < 12) sh += 12;
    if (sAmpm === 'am' && sh === 12) sh = 0;
    if (eAmpm === 'pm' && eh < 12) eh += 12;
    if (eAmpm === 'am' && eh === 12) eh = 0;

    parsedStartHour = sh;
    parsedStartMin = sm;
    parsedEndHour = eh;
    parsedEndMin = em;
    text = text.replace(rangeMatch[0], ' ');
  } else {
    const singleTimeMatch = text.match(/\b(?:at\s+)?(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b|\bat\s+(\d{1,2}):(\d{2})\b/i);
    if (singleTimeMatch) {
      if (singleTimeMatch[1] !== undefined) {
        let h = parseInt(singleTimeMatch[1], 10);
        let m = singleTimeMatch[2] ? parseInt(singleTimeMatch[2], 10) : 0;
        const ampm = (singleTimeMatch[3] || '').toLowerCase();
        if (ampm === 'pm' && h < 12) h += 12;
        if (ampm === 'am' && h === 12) h = 0;
        parsedStartHour = h;
        parsedStartMin = m;
      } else {
        parsedStartHour = parseInt(singleTimeMatch[4], 10);
        parsedStartMin = parseInt(singleTimeMatch[5], 10);
      }
      text = text.replace(singleTimeMatch[0], ' ');
    }
  }

  if (parsedStartHour !== null) {
    startTimeStr = `${String(parsedStartHour).padStart(2, '0')}:${String(parsedStartMin).padStart(2, '0')}`;
    if (parsedEndHour !== null) {
      endTimeStr = `${String(parsedEndHour).padStart(2, '0')}:${String(parsedEndMin).padStart(2, '0')}`;
    } else if (durationMinutes !== null) {
      const endTotalMins = parsedStartHour * 60 + parsedStartMin + durationMinutes;
      const eh = Math.min(23, Math.floor(endTotalMins / 60));
      const em = endTotalMins % 60;
      endTimeStr = `${String(eh).padStart(2, '0')}:${String(em).padStart(2, '0')}`;
    } else {
      const eh = Math.min(23, parsedStartHour + 1);
      endTimeStr = `${String(eh).padStart(2, '0')}:${String(parsedStartMin).padStart(2, '0')}`;
    }
  } else if (durationMinutes !== null) {
    const endTotalMins = 9 * 60 + durationMinutes;
    const eh = Math.min(23, Math.floor(endTotalMins / 60));
    const em = endTotalMins % 60;
    startTimeStr = '09:00';
    endTimeStr = `${String(eh).padStart(2, '0')}:${String(em).padStart(2, '0')}`;
  }

  let cleanTitle = text.replace(/\s+/g, ' ').trim();
  cleanTitle = cleanTitle.replace(/^(?:at|on|for|in|-)\s+/i, '');
  cleanTitle = cleanTitle.replace(/\s+(?:at|on|for|in|-)$/i, '');
  if (!cleanTitle) cleanTitle = 'New Event';

  const dateKey = formatLocalDateKey(targetDate);

  return {
    title: cleanTitle,
    dateKey: dateKey,
    startTime: startTimeStr,
    endTime: endTimeStr,
    isAllDay: isAllDay,
    location: location
  };
}

function handleQuickAddNaturalInput(val) {
  const feedback = document.getElementById('quickAddNaturalFeedback');
  const feedbackText = document.getElementById('quickAddNaturalFeedbackText');
  if (!val || !val.trim()) {
    if (feedback) feedback.classList.add('hidden');
    return;
  }
  const parsed = parseNaturalLanguageEvent(val, quickAddActiveDateKey);
  if (!parsed) {
    if (feedback) feedback.classList.add('hidden');
    return;
  }

  const titleInput = document.getElementById('quickAddTitle');
  const dateLabel = document.getElementById('quickAddDateLabel');
  const allDayCheck = document.getElementById('quickAddAllDay');
  const startTimeInput = document.getElementById('quickAddStartTime');
  const endTimeInput = document.getElementById('quickAddEndTime');
  const timeRow = document.getElementById('quickAddTimeRow');

  if (titleInput && parsed.title) titleInput.value = parsed.title;
  if (parsed.dateKey) {
    quickAddActiveDateKey = parsed.dateKey;
    if (dateLabel) dateLabel.textContent = parsed.dateKey;
  }
  if (allDayCheck) {
    allDayCheck.checked = Boolean(parsed.isAllDay);
    if (timeRow) timeRow.classList.toggle('hidden', Boolean(parsed.isAllDay));
  }
  if (!parsed.isAllDay) {
    if (startTimeInput && parsed.startTime) startTimeInput.value = parsed.startTime;
    if (endTimeInput && parsed.endTime) endTimeInput.value = parsed.endTime;
  }

  if (feedback && feedbackText) {
    feedback.classList.remove('hidden');
    const timeBadge = parsed.isAllDay ? 'All-Day' : `${parsed.startTime} – ${parsed.endTime}`;
    feedbackText.textContent = `${parsed.dateKey} · ${timeBadge}${parsed.location ? ' · ' + parsed.location : ''}`;
  }
}

function handleQuickAddNaturalKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const val = e.target.value.trim();
    if (val) {
      handleQuickAddNaturalInput(val);
      submitQuickAddEvent(e);
    }
  }
}

function openQuickAddPopover(e, options = {}) {
  closeEventPreviewPopover();
  closeDayOverflowPopover();

  const { dateKey = null, startHour = null, allDay = false } = options;
  quickAddActiveDateKey = dateKey || state.calendarSelectedDate || TODAY_KEY;
  quickAddSelectedColor = EVENT_COLORS[0].hex;

  const popover = document.getElementById('calQuickAddPopover');
  const titleInput = document.getElementById('quickAddTitle');
  const naturalInput = document.getElementById('quickAddNaturalInput');
  const naturalFeedback = document.getElementById('quickAddNaturalFeedback');
  const dateLabel = document.getElementById('quickAddDateLabel');
  const allDayCheck = document.getElementById('quickAddAllDay');
  const timeRow = document.getElementById('quickAddTimeRow');
  const startTimeInput = document.getElementById('quickAddStartTime');
  const endTimeInput = document.getElementById('quickAddEndTime');
  const colorDotsCont = document.getElementById('quickAddColorDots');
  const colorIndicator = document.getElementById('quickAddColorIndicator');

  if (!popover || !titleInput) return;

  titleInput.value = '';
  if (naturalInput) naturalInput.value = '';
  if (naturalFeedback) naturalFeedback.classList.add('hidden');
  dateLabel.textContent = quickAddActiveDateKey;
  allDayCheck.checked = Boolean(allDay);
  timeRow.classList.toggle('hidden', Boolean(allDay));

  const hr = startHour !== null ? startHour : 9;
  const endHr = Math.min(23, hr + 1);
  startTimeInput.value = `${String(hr).padStart(2, '0')}:00`;
  endTimeInput.value = `${String(endHr).padStart(2, '0')}:00`;

  colorIndicator.style.backgroundColor = quickAddSelectedColor;
  colorDotsCont.innerHTML = EVENT_COLORS.map(c => `
    <button type="button"
            onclick="selectQuickAddColor('${c.hex}')"
            title="${c.label}"
            style="background-color: ${c.hex};"
            class="w-5 h-5 rounded-full flex items-center justify-center transition-transform cursor-pointer ${
              c.hex.toLowerCase() === quickAddSelectedColor.toLowerCase() ? 'ring-2 ring-offset-1 ring-[var(--text-primary)] scale-110' : 'opacity-80 hover:opacity-100'
            }">
    </button>
  `).join('');

  popover.style.display = 'block';
  popover.classList.remove('hidden');

  const popRect = popover.getBoundingClientRect();
  const clientX = e && e.clientX ? e.clientX : window.innerWidth / 2;
  const clientY = e && e.clientY ? e.clientY : window.innerHeight / 3;

  let posX = clientX - popRect.width / 2;
  let posY = clientY + 12;

  if (posX < 10) posX = 10;
  if (posX + popRect.width > window.innerWidth - 10) {
    posX = window.innerWidth - popRect.width - 10;
  }
  if (posY + popRect.height > window.innerHeight - 10) {
    posY = Math.max(10, clientY - popRect.height - 12);
  }

  popover.style.left = `${posX}px`;
  popover.style.top = `${posY}px`;

  requestAnimationFrame(() => {
    if (naturalInput) naturalInput.focus();
    else titleInput.focus();
  });
}

function toggleQuickAddAllDay(isAllDay) {
  const timeRow = document.getElementById('quickAddTimeRow');
  if (timeRow) timeRow.classList.toggle('hidden', isAllDay);
}

function selectQuickAddColor(hex) {
  quickAddSelectedColor = hex;
  document.getElementById('quickAddColorIndicator').style.backgroundColor = hex;
  const dots = document.getElementById('quickAddColorDots');
  dots.querySelectorAll('button').forEach(btn => {
    if (btn.style.backgroundColor === hex) {
      btn.classList.add('ring-2', 'ring-offset-1', 'ring-[var(--text-primary)]', 'scale-110');
      btn.classList.remove('opacity-80');
    } else {
      btn.classList.remove('ring-2', 'ring-offset-1', 'ring-[var(--text-primary)]', 'scale-110');
      btn.classList.add('opacity-80');
    }
  });
}

function closeQuickAddPopover() {
  const popover = document.getElementById('calQuickAddPopover');
  if (popover) {
    popover.classList.add('hidden');
    popover.style.display = 'none';
  }
}

function submitQuickAddEvent(e) {
  if (e) e.preventDefault();
  const title = document.getElementById('quickAddTitle').value.trim();
  if (!title) return;

  const isAllDay = document.getElementById('quickAddAllDay').checked;
  let start_datetime = '';
  let end_datetime = null;

  if (isAllDay) {
    start_datetime = quickAddActiveDateKey;
    end_datetime = quickAddActiveDateKey;
  } else {
    const sTime = document.getElementById('quickAddStartTime').value || '09:00';
    const eTime = document.getElementById('quickAddEndTime').value || '10:00';
    start_datetime = localInputToUtcIso(`${quickAddActiveDateKey}T${sTime}`);
    end_datetime = localInputToUtcIso(`${quickAddActiveDateKey}T${eTime}`);
  }

  let location = '';
  const naturalInput = document.getElementById('quickAddNaturalInput');
  if (naturalInput && naturalInput.value.trim()) {
    const parsed = parseNaturalLanguageEvent(naturalInput.value.trim(), quickAddActiveDateKey);
    if (parsed && parsed.location) location = parsed.location;
  }

  const newEvt = {
    id: generateId('evt'),
    title: title,
    start_datetime: start_datetime,
    end_datetime: end_datetime,
    location: location,
    color_code: quickAddSelectedColor,
    all_day: isAllDay,
    linkedNoteId: state.appMode === 'workspace' ? (state.activeNoteId || '') : '',
    notes: ''
  };

  state.events.push(newEvt);
  state.calendarSelectedDate = quickAddActiveDateKey;
  state.calendarCursorDate = quickAddActiveDateKey;

  closeQuickAddPopover();
  renderAll();
  persistState();
  showToast(`Scheduled "${title}"`);
}

function quickAddOpenFullModal() {
  const title = document.getElementById('quickAddTitle').value.trim();
  const isAllDay = document.getElementById('quickAddAllDay').checked;
  const sTime = document.getElementById('quickAddStartTime').value || '09:00';
  const [h] = sTime.split(':').map(Number);

  closeQuickAddPopover();
  openEventModal({ dateKey: quickAddActiveDateKey, startHour: h || 9, allDay: isAllDay });
  if (title) {
    document.getElementById('eventFormTitle').value = title;
  }
}

// =========================================================================
// EVENT DETAILS PREVIEW CARD CONTROLLER
// =========================================================================
function openEventPreview(e, eventId) {
  if (e && e.stopPropagation) e.stopPropagation();
  closeQuickAddPopover();
  closeDayOverflowPopover();

  activePreviewEventId = eventId;
  const evt = state.events.find(item => item.id === eventId);
  if (!evt) return;

  const popover = document.getElementById('calEventPreviewPopover');
  const titleEl = document.getElementById('previewEventTitle');
  const timeEl = document.getElementById('previewEventTime');
  const colorBar = document.getElementById('previewEventColorBar');
  const locRow = document.getElementById('previewEventLocationRow');
  const locText = document.getElementById('previewEventLocation');
  const linkRow = document.getElementById('previewEventLinkedNoteRow');
  const linkBtn = document.getElementById('previewEventLinkedNoteBtn');
  const notesRow = document.getElementById('previewEventNotesRow');
  const notesText = document.getElementById('previewEventNotes');

  if (!popover) return;

  const col = resolveEventColor(evt.color_code);
  const norm = normalizeEventRange(evt);

  titleEl.textContent = evt.title;
  colorBar.style.backgroundColor = col.hex;

  const timeSummary = norm.allDay
    ? (norm.isMultiDay ? `All-Day · ${norm.startDateKey} → ${norm.endDateKey}` : `All-Day · ${norm.startDateKey}`)
    : `${norm.startDateKey} · ${formatLocalTime24(norm.start)} – ${formatLocalTime24(norm.end)}`;
  timeEl.textContent = timeSummary;

  if (evt.location) {
    locText.textContent = evt.location;
    locRow.classList.remove('hidden');
  } else {
    locRow.classList.add('hidden');
  }

  if (evt.linkedNoteId) {
    const note = state.notes.find(n => n.id === evt.linkedNoteId);
    if (note) {
      linkBtn.textContent = `[[${note.title}]]`;
      linkRow.classList.remove('hidden');
    } else {
      linkRow.classList.add('hidden');
    }
  } else {
    linkRow.classList.add('hidden');
  }

  if (evt.notes && evt.notes.trim()) {
    notesText.textContent = evt.notes;
    notesRow.classList.remove('hidden');
  } else {
    notesRow.classList.add('hidden');
  }

  const noteBtnText = document.getElementById('previewMeetingNoteBtnText');
  if (noteBtnText) {
    noteBtnText.textContent = evt.linkedNoteId ? 'Open Note' : '+ Note';
  }

  popover.style.display = 'block';
  popover.classList.remove('hidden');

  const popRect = popover.getBoundingClientRect();
  let posX = window.innerWidth / 2 - popRect.width / 2;
  let posY = window.innerHeight / 3;

  if (e) {
    const targetEl = (e.currentTarget || e.target);
    if (targetEl && targetEl.getBoundingClientRect) {
      const targetRect = targetEl.getBoundingClientRect();
      posX = targetRect.left;
      posY = targetRect.bottom + 6;
      if (posX + popRect.width > window.innerWidth - 10) {
        posX = window.innerWidth - popRect.width - 10;
      }
      if (posY + popRect.height > window.innerHeight - 10) {
        posY = Math.max(10, targetRect.top - popRect.height - 6);
      }
    } else if (e.clientX !== undefined) {
      posX = e.clientX;
      posY = e.clientY + 6;
    }
  }

  popover.style.left = `${Math.max(10, posX)}px`;
  popover.style.top = `${Math.max(10, posY)}px`;
}

function closeEventPreviewPopover() {
  const popover = document.getElementById('calEventPreviewPopover');
  if (popover) {
    popover.classList.add('hidden');
    popover.style.display = 'none';
  }
  activePreviewEventId = null;
}

function previewEditEvent() {
  const id = activePreviewEventId;
  closeEventPreviewPopover();
  if (id) openEventModal({ eventId: id });
}

function previewDuplicateEvent() {
  const id = activePreviewEventId;
  closeEventPreviewPopover();
  if (id) duplicateEventById(id);
}

function previewDeleteEvent() {
  const id = activePreviewEventId;
  closeEventPreviewPopover();
  if (id) deleteEventById(id);
}

function previewOpenLinkedNote() {
  const id = activePreviewEventId;
  const evt = state.events.find(item => item.id === id);
  closeEventPreviewPopover();
  if (evt && evt.linkedNoteId) {
    state.appMode = 'workspace';
    selectNote(evt.linkedNoteId);
  }
}

// -------------------------------------------------------------------------
// 1-CLICK STRUCTURED MEETING NOTE GENERATOR
// -------------------------------------------------------------------------
function createMeetingNoteForEvent(eventId) {
  closeEventPreviewPopover();
  const evt = state.events.find(e => e.id === eventId);
  if (!evt) return;

  if (evt.linkedNoteId) {
    const existing = state.notes.find(n => n.id === evt.linkedNoteId);
    if (existing) {
      state.appMode = 'workspace';
      selectNote(existing.id);
      renderAll();
      showToast(`Opened linked meeting note: [[${existing.title}]]`);
      return;
    }
  }

  const norm = normalizeEventRange(evt);
  const timeStr = norm.allDay
    ? (norm.isMultiDay ? `${norm.startDateKey} → ${norm.endDateKey} (All-Day)` : `${norm.startDateKey} (All-Day)`)
    : `${norm.startDateKey} ${formatLocalTime24(norm.start)} – ${formatLocalTime24(norm.end)}`;

  const noteId = generateId('note');
  const noteTitle = `Meeting: ${evt.title} (${norm.startDateKey})`;

  const newNote = {
    id: noteId,
    title: noteTitle,
    folderId: state.folders[0]?.id || 'f_general',
    tags: ['meeting', 'calendar'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    blocks: [
      {
        id: generateId('b'),
        type: 'callout',
        content: `**Meeting Overview**\n- **Event:** ${evt.title}\n- **Date & Time:** ${timeStr}\n- **Location:** ${evt.location || 'Remote / Unspecified'}\n- **Calendar Reference:** Event #${evt.id}`
      },
      {
        id: generateId('b'),
        type: 'heading2',
        content: 'Agenda & Discussion'
      },
      {
        id: generateId('b'),
        type: 'bullet',
        content: 'Key discussion item 1'
      },
      {
        id: generateId('b'),
        type: 'bullet',
        content: 'Key discussion item 2'
      },
      {
        id: generateId('b'),
        type: 'heading2',
        content: 'Action Items'
      },
      {
        id: generateId('b'),
        type: 'todo',
        content: 'Follow up on key decisions with attendees',
        checked: false
      },
      {
        id: generateId('b'),
        type: 'todo',
        content: 'Share meeting minutes & documentation',
        checked: false
      },
      {
        id: generateId('b'),
        type: 'heading2',
        content: 'Notes & Key Takeaways'
      },
      {
        id: generateId('b'),
        type: 'paragraph',
        content: evt.notes ? evt.notes : 'Document meeting minutes, decisions, and outcomes here...'
      }
    ]
  };

  state.notes.unshift(newNote);
  evt.linkedNoteId = noteId;
  persistState();
  state.appMode = 'workspace';
  selectNote(noteId);
  renderAll();
  showToast('Created & linked Meeting Note');
}

function previewCreateMeetingNote() {
  if (activePreviewEventId) {
    createMeetingNoteForEvent(activePreviewEventId);
  }
}

// -------------------------------------------------------------------------
// RFC 5545 iCALENDAR (.ICS) EXPORT ENGINE
// -------------------------------------------------------------------------
function exportCalendarToICS() {
  const events = state.events || [];
  if (events.length === 0) {
    showToast('No events in calendar to export');
    return;
  }

  function escapeIcsText(str) {
    if (!str) return '';
    return String(str)
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n');
  }

  function formatIcsDateTime(isoStr, isAllDay = false) {
    if (!isoStr) return '';
    if (isAllDay) {
      const clean = isoStr.split('T')[0].replace(/-/g, '');
      return `;VALUE=DATE:${clean}`;
    }
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return '';
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    const h = String(d.getUTCHours()).padStart(2, '0');
    const min = String(d.getUTCMinutes()).padStart(2, '0');
    const s = String(d.getUTCSeconds()).padStart(2, '0');
    return `:${y}${m}${day}T${h}${min}${s}Z`;
  }

  const now = new Date();
  const dtStamp = formatIcsDateTime(now.toISOString(), false).replace(':', '');

  let ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//PK Note//Archival Knowledge Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:PK Note Calendar'
  ];

  events.forEach(evt => {
    const norm = normalizeEventRange(evt);
    ics.push('BEGIN:VEVENT');
    ics.push(`UID:${evt.id}@pknote.local`);
    ics.push(`DTSTAMP:${dtStamp}`);
    if (norm.allDay) {
      ics.push(`DTSTART${formatIcsDateTime(norm.startDateKey, true)}`);
      const nextDay = parseLocalDateKey(norm.endDateKey);
      nextDay.setDate(nextDay.getDate() + 1);
      ics.push(`DTEND${formatIcsDateTime(formatLocalDateKey(nextDay), true)}`);
    } else {
      ics.push(`DTSTART${formatIcsDateTime(norm.start.toISOString(), false)}`);
      ics.push(`DTEND${formatIcsDateTime(norm.end.toISOString(), false)}`);
    }
    ics.push(`SUMMARY:${escapeIcsText(evt.title)}`);
    if (evt.location) {
      ics.push(`LOCATION:${escapeIcsText(evt.location)}`);
    }
    let desc = evt.notes || '';
    if (evt.linkedNoteId) {
      const linked = state.notes.find(n => n.id === evt.linkedNoteId);
      if (linked) {
        desc += `\nLinked Note: [[${linked.title}]]`;
      }
    }
    if (desc.trim()) {
      ics.push(`DESCRIPTION:${escapeIcsText(desc.trim())}`);
    }
    ics.push('STATUS:CONFIRMED');
    ics.push('END:VEVENT');
  });

  ics.push('END:VCALENDAR');

  const icsString = ics.join('\r\n');
  const blob = new Blob([icsString], { type: 'text/calendar;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pk-note-calendar-${TODAY_KEY}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Exported ${events.length} event${events.length === 1 ? '' : 's'} to .ics`);
}

// =========================================================================
// DAY OVERFLOW POPOVER CONTROLLER (+X more)
// =========================================================================
function openDayOverflowPopover(e, dateKey) {
  if (e && e.stopPropagation) e.stopPropagation();
  closeQuickAddPopover();
  closeEventPreviewPopover();

  const popover = document.getElementById('calDayOverflowPopover');
  const heading = document.getElementById('overflowDateHeading');
  const badge = document.getElementById('overflowCountBadge');
  const list = document.getElementById('overflowEventsList');
  const zoomBtn = document.getElementById('overflowZoomDayBtn');
  const addBtn = document.getElementById('overflowAddEventBtn');

  if (!popover || !list) return;

  const events = getEventsForDateKey(dateKey);
  heading.textContent = dateKey;
  badge.textContent = `${events.length} events`;

  zoomBtn.onclick = () => { closeDayOverflowPopover(); drillDownToDay(dateKey); };
  addBtn.onclick = (evt) => { closeDayOverflowPopover(); openQuickAddPopover(evt, { dateKey }); };

  list.innerHTML = events.map(evt => {
    const col = resolveEventColor(evt.color_code);
    const norm = normalizeEventRange(evt);
    const timeStr = norm.allDay ? 'All-day' : `${formatLocalTime24(norm.start)} – ${formatLocalTime24(norm.end)}`;
    return `
      <button type="button"
              onclick="openEventPreview(event, '${evt.id}')"
              class="w-full flex items-center justify-between p-2 rounded-[3px] bg-[var(--bg-canvas)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-left transition-colors cursor-pointer group">
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-2 h-2 rounded-full shrink-0" style="background-color: ${col.hex}"></span>
          <div class="truncate">
            <div class="text-xs font-medium text-[var(--text-primary)] truncate">${escapeHtml(evt.title)}</div>
            <div class="font-mono text-[10px] text-[var(--text-tertiary)]">${timeStr}</div>
          </div>
        </div>
        <span class="font-mono text-[9px] text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)]">VIEW</span>
      </button>
    `;
  }).join('');

  popover.style.display = 'block';
  popover.classList.remove('hidden');

  const popRect = popover.getBoundingClientRect();
  let posX = window.innerWidth / 2 - popRect.width / 2;
  let posY = window.innerHeight / 3;

  if (e) {
    const targetEl = (e.currentTarget || e.target);
    if (targetEl && targetEl.getBoundingClientRect) {
      const targetRect = targetEl.getBoundingClientRect();
      posX = targetRect.left;
      posY = targetRect.bottom + 6;
      if (posX + popRect.width > window.innerWidth - 10) {
        posX = window.innerWidth - popRect.width - 10;
      }
      if (posY + popRect.height > window.innerHeight - 10) {
        posY = Math.max(10, targetRect.top - popRect.height - 6);
      }
    } else if (e.clientX !== undefined) {
      posX = e.clientX;
      posY = e.clientY + 6;
    }
  }

  popover.style.left = `${Math.max(10, posX)}px`;
  popover.style.top = `${Math.max(10, posY)}px`;
}

function closeDayOverflowPopover() {
  const popover = document.getElementById('calDayOverflowPopover');
  if (popover) {
    popover.classList.add('hidden');
    popover.style.display = 'none';
  }
}

// Dismiss floating popovers on outside click or Escape
document.addEventListener('click', e => {
  const quickAdd = document.getElementById('calQuickAddPopover');
  const preview = document.getElementById('calEventPreviewPopover');
  const overflow = document.getElementById('calDayOverflowPopover');

  if (quickAdd && !quickAdd.classList.contains('hidden') && !quickAdd.contains(e.target)) {
    closeQuickAddPopover();
  }
  if (preview && !preview.classList.contains('hidden') && !preview.contains(e.target)) {
    closeEventPreviewPopover();
  }
  if (overflow && !overflow.classList.contains('hidden') && !overflow.contains(e.target)) {
    closeDayOverflowPopover();
  }
});


// =========================================================================
// 22. USER GUIDE, VAULT BACKUP / RESTORE, MARKDOWN EXPORT & DAILY LOG STEPPER
// =========================================================================

let activeStarredFilter = false;

// --- A. USER GUIDE HANDBOOK MODAL CONTROLLER ---
const USER_GUIDE_CONTENT = {
  overview: `
    <div class="space-y-4">
      <div class="p-3.5 rounded-[4px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] border-l-2 border-l-[var(--accent-vermilion)] space-y-1">
        <h3 class="font-serif text-base font-semibold text-[var(--text-primary)]">Welcome to PK Note</h3>
        <p class="text-xs text-[var(--text-secondary)] leading-normal">
          PK Note is a fast, local-first personal knowledge workspace and integrated chronology. Your ideas, documents, and calendar are linked bi-directionally without cloud silos or tracking.
        </p>
      </div>

      <div class="space-y-2">
        <h4 class="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">The Dual Workspace Model</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-vermilion)] font-mono">
              <span>DOCUMENT WORKSPACE</span>
            </div>
            <p class="text-xs">Deep, focused writing using modular blocks, live bi-directional <code class="text-[var(--accent-vermilion)] font-mono">[[WikiLinks]]</code>, and an interactive 2D Knowledge Graph.</p>
          </div>
          <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-ochre)] font-mono">
              <span>CONNECTED CHRONOLOGY</span>
            </div>
            <p class="text-xs">Integrated Month, Week, and Day calendar timelines. Schedule events, link notes directly to agenda items, and maintain a seamless Daily Log.</p>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <h4 class="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">Core Principles</h4>
        <ul class="space-y-1.5 list-disc list-inside text-xs">
          <li><strong>Local-First & Private:</strong> Everything is stored securely in your browser storage. You own 100% of your notes and data.</li>
          <li><strong>Zero Friction:</strong> Single-click to add calendar events, inline previews, and fast keyboard shortcuts (<kbd>⌘K</kbd>, <kbd>⌘N</kbd>, <kbd>/</kbd>, <kbd>[[</kbd>).</li>
          <li><strong>Cross-Platform PWA:</strong> Fully installable as an offline desktop application or mobile phone app.</li>
        </ul>
      </div>
    </div>
  `,

  writing: `
    <div class="space-y-4">
      <div class="space-y-1">
        <h3 class="font-serif text-base font-semibold text-[var(--text-primary)]">Writing & Modular Blocks</h3>
        <p class="text-xs text-[var(--text-secondary)]">Every note is composed of flexible, draggable content blocks. You can reorder, convert, and format them effortlessly.</p>
      </div>

      <div class="space-y-2">
        <h4 class="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">1. Converting Blocks with Slash Commands (/)</h4>
        <p class="text-xs">Type <code class="px-1.5 py-0.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)] font-mono text-[var(--accent-vermilion)]">/</code> on any line to open the block converter:</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
          <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)]"><strong>/h1</strong> · Heading 1</div>
          <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)]"><strong>/h2</strong> · Heading 2</div>
          <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)]"><strong>/h3</strong> · Heading 3</div>
          <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)]"><strong>/bullet</strong> · List item</div>
          <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)]"><strong>/todo</strong> · Checklist</div>
          <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)]"><strong>/code</strong> · Code block</div>
          <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)]"><strong>/quote</strong> · Blockquote</div>
          <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)]"><strong>/callout</strong> · Accent note</div>
          <div class="p-2 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)]"><strong>/divider</strong> · Rule (---)</div>
        </div>
      </div>

      <div class="space-y-2">
        <h4 class="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">2. Natural Autocorrect & Backspace Undo</h4>
        <p class="text-xs">PK Note fixes frequent typos (e.g. <em>teh &rarr; the</em>, <em>dont &rarr; don't</em>, <em>cant &rarr; can't</em>, <em>i &rarr; I</em>) and capitalizes sentence starts automatically. If you didn't want the correction:</p>
        <ul class="space-y-1 list-disc list-inside text-xs">
          <li><strong>Backspace to Undo:</strong> Hit <kbd class="px-1 py-0.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-hairline)] font-mono">Backspace</kbd> immediately to revert back to your exact typed letters.</li>
          <li><strong>Floating Chip:</strong> Click the floating undo chip (<code class="font-mono text-[var(--accent-vermilion)]">the [undo] "teh"</code>) to revert and save the word to your accepted dictionary.</li>
          <li><strong>Toggle Autocorrect:</strong> Open Command Palette (<kbd>⌘K</kbd>) &rarr; select <em>Toggle Autocorrect</em>.</li>
        </ul>
      </div>

      <div class="space-y-2">
        <h4 class="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">3. Mobile Formatting Accessory Toolbar</h4>
        <p class="text-xs">When typing on your phone, a compact formatting bar sits right above the virtual keyboard with 1-tap buttons for <strong>H1</strong>, <strong>H2</strong>, <strong>• Bullet</strong>, <strong>Todo</strong>, <strong>[[ WikiLink</strong>, and <strong>DONE</strong>.</p>
      </div>
    </div>
  `,

  calendar: `
    <div class="space-y-4">
      <div class="space-y-1">
        <h3 class="font-serif text-base font-semibold text-[var(--text-primary)]">Connected Chronology & Calendaring</h3>
        <p class="text-xs text-[var(--text-secondary)]">A calendar built specifically for thinkers and writers, seamlessly connecting scheduled events to your knowledge notes.</p>
      </div>

      <div class="space-y-2.5">
        <h4 class="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">Key Capabilities</h4>
        <div class="space-y-2">
          <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1">
            <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">1. Natural Language Event Parser & Quick-Add</div>
            <p class="text-xs">Single-click any day or slot, or press <kbd>C</kbd>. Type naturally, e.g. <code class="font-mono text-[var(--accent-vermilion)]">"Team sync tomorrow at 3pm for 45m in Room B"</code>. Date, start time, end time, duration, and location are automatically extracted and populated in real time.</p>
          </div>

          <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1">
            <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">2. 12-Month Year Matrix View & Density Heatmap</div>
            <p class="text-xs">Press <kbd>Y</kbd> to view all 12 months at a glance. Each date square indicates schedule density with glowing vermilion activity dots. Click any month heading to open its Month view, or click any day to jump straight to its 24-hour timeline.</p>
          </div>

          <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1">
            <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">3. 1-Click Meeting Note Generator</div>
            <p class="text-xs">Click any event in the calendar or in the Day Agenda Ledger and click <code class="font-mono text-[var(--accent-vermilion)]">+ Note</code>. PK Note instantly synthesizes a structured meeting document with pre-filled time callouts, agenda topics, and action item checkboxes, bidirectionally linked to the event.</p>
          </div>

          <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1">
            <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">4. RFC 5545 iCalendar (.ics) Sync & Export</div>
            <p class="text-xs">Click <code class="font-mono text-[var(--text-primary)]">Export .ics</code> or press <kbd>E</kbd> in calendar mode to download a standardized <code class="font-mono">.ics</code> file containing your complete schedule, compatible with Apple Calendar, Google Calendar, and Microsoft Outlook.</p>
          </div>

          <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1">
            <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">5. Live "Now" Timeline Radar & Laser Line</div>
            <p class="text-xs">In Week and Day timeline views, the current time is rendered with an animated radar ping dot, laser line, and floating digital clock badge that updates automatically every 30 seconds.</p>
          </div>

          <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1">
            <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">2. Event Details Preview Card</div>
            <p class="text-xs">Single-click any scheduled event to view time, location, and linked note shortcut. Edit, Duplicate, or Delete with 1 click without opening a full-screen form.</p>
          </div>

          <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1">
            <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">3. 1-Click Day Drilldown</div>
            <p class="text-xs">Click any date number badge (e.g. <em>17</em>) in Month or Week view to instantly zoom into that date's 24-hour detailed Day Timeline.</p>
          </div>

          <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1">
            <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">4. Daily Log Journal Stepper</div>
            <p class="text-xs">Every day has an associated Daily Log note. When viewing a Daily Log, use the top stepper bar (<code class="font-mono">← Yesterday</code> | <code class="font-mono">Today</code> | <code class="font-mono">Tomorrow →</code>) to flip through daily notes like a journal.</p>
          </div>
        </div>
      </div>
    </div>
  `,

  graph: `
    <div class="space-y-4">
      <div class="space-y-1">
        <h3 class="font-serif text-base font-semibold text-[var(--text-primary)]">Knowledge Graph & Bi-directional Links</h3>
        <p class="text-xs text-[var(--text-secondary)]">Turn isolated notes into an organic, visual web of interconnected thoughts.</p>
      </div>

      <div class="space-y-3">
        <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1.5">
          <h4 class="font-mono text-xs font-semibold text-[var(--text-primary)]">1. Linking Notes with [[WikiLinks]]</h4>
          <p class="text-xs">Type <code class="font-mono text-[var(--accent-vermilion)]">[[</code> anywhere in a note. A dropdown lists your existing vault documents. Press <kbd>Enter</kbd> to insert. A bi-directional link is instantly forged between both documents.</p>
        </div>

        <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1.5">
          <h4 class="font-mono text-xs font-semibold text-[var(--text-primary)]">2. Interactive 2D Topology Graph</h4>
          <p class="text-xs">Open the Right Inspector and select the <strong>GRAPH</strong> tab to explore your ideas visually:</p>
          <ul class="space-y-1 list-disc list-inside text-xs">
            <li><strong>Pan & Zoom:</strong> Drag the canvas to pan, scroll to zoom in/out.</li>
            <li><strong>Interactive Nodes:</strong> Hover over any node to highlight linked connections. Click any node to jump directly to that note!</li>
            <li><strong>Local vs. Global Scope:</strong> Click the scope toggle button to switch between viewing your whole vault or only the immediate neighborhood of your active note.</li>
          </ul>
        </div>

        <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1.5">
          <h4 class="font-mono text-xs font-semibold text-[var(--text-primary)]">3. Backlinks & Table of Contents</h4>
          <p class="text-xs">The <strong>LINKS</strong> tab automatically displays all incoming backlinks (notes that cite this document) and outgoing references. The <strong>OUTLINE</strong> tab generates an instant jumpable table of contents from your headers.</p>
        </div>
      </div>
    </div>
  `,

  shortcuts: `
    <div class="space-y-4">
      <div class="space-y-1">
        <h3 class="font-serif text-base font-semibold text-[var(--text-primary)]">Keyboard Shortcuts & Pro Tips</h3>
        <p class="text-xs text-[var(--text-secondary)]">Keyboard-driven efficiency for fast archival work.</p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left font-mono text-xs border border-[var(--border-hairline)] rounded-[3px]">
          <thead class="bg-[var(--bg-canvas)] text-[var(--text-tertiary)] border-b border-[var(--border-hairline)]">
            <tr>
              <th class="p-2">SHORTCUT</th>
              <th class="p-2">ACTION</th>
              <th class="p-2">CONTEXT</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border-hairline)]">
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">⌘K / Ctrl+K</td>
              <td class="p-2 text-[var(--text-primary)]">Open Command Palette (Swiss Spotlight)</td>
              <td class="p-2 text-[var(--text-tertiary)]">Global</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">⌘N / Ctrl+N</td>
              <td class="p-2 text-[var(--text-primary)]">Create New Working Note</td>
              <td class="p-2 text-[var(--text-tertiary)]">Global</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">? (Shift+/)</td>
              <td class="p-2 text-[var(--text-primary)]">Open Handbook & User Guide</td>
              <td class="p-2 text-[var(--text-tertiary)]">Global</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">T</td>
              <td class="p-2 text-[var(--text-primary)]">Jump to Today / Open Today's Daily Log</td>
              <td class="p-2 text-[var(--text-tertiary)]">Global</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">M / W / D / Y</td>
              <td class="p-2 text-[var(--text-primary)]">Switch to Month / Week / Day / Year Matrix View</td>
              <td class="p-2 text-[var(--text-tertiary)]">Calendar</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">C / N</td>
              <td class="p-2 text-[var(--text-primary)]">Quick Add / Create New Calendar Event</td>
              <td class="p-2 text-[var(--text-tertiary)]">Calendar</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">L</td>
              <td class="p-2 text-[var(--text-primary)]">Toggle Day Agenda Ledger Sidebar</td>
              <td class="p-2 text-[var(--text-tertiary)]">Calendar</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">E</td>
              <td class="p-2 text-[var(--text-primary)]">Export Calendar to iCalendar (.ics)</td>
              <td class="p-2 text-[var(--text-tertiary)]">Calendar</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">[ / ]</td>
              <td class="p-2 text-[var(--text-primary)]">Navigate to Previous / Next Period</td>
              <td class="p-2 text-[var(--text-tertiary)]">Calendar</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">/</td>
              <td class="p-2 text-[var(--text-primary)]">Open Slash Block Formatting Menu</td>
              <td class="p-2 text-[var(--text-tertiary)]">Editor</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">[[</td>
              <td class="p-2 text-[var(--text-primary)]">Open Wiki-Link Note Connector</td>
              <td class="p-2 text-[var(--text-tertiary)]">Editor</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">Backspace</td>
              <td class="p-2 text-[var(--text-primary)]">Undo last autocorrection</td>
              <td class="p-2 text-[var(--text-tertiary)]">Editor</td>
            </tr>
            <tr>
              <td class="p-2 text-[var(--accent-vermilion)] font-bold">Esc</td>
              <td class="p-2 text-[var(--text-primary)]">Close popover, modal, or menu</td>
              <td class="p-2 text-[var(--text-tertiary)]">Global</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="p-3.5 rounded-[4px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1.5">
        <h4 class="font-mono text-xs font-semibold text-[var(--text-primary)]">Data Safety & Backups</h4>
        <p class="text-xs">Click the export icon in the header to <strong>Export Markdown (.md)</strong>, <strong>Print to PDF</strong>, or <strong>Backup Vault (JSON)</strong>. You can restore your entire vault at any time using <em>Restore from Backup</em>.</p>
      </div>
    </div>
  `
};

function openUserGuideModal(initialTab = 'overview') {
  playWhooshSound();
  const modal = document.getElementById('userGuideModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  const card = modal.querySelector('.animate-modal-card');
  if (card) {
    card.classList.remove('animate-modal-card');
    void card.offsetWidth;
    card.classList.add('animate-modal-card');
  }
  switchUserGuideTab(initialTab);
}

function closeUserGuideModal() {
  const modal = document.getElementById('userGuideModal');
  if (modal) modal.classList.add('hidden');
}

function switchUserGuideTab(tabKey) {
  const contentEl = document.getElementById('guideContentArea');
  if (!contentEl) return;

  const tabs = ['overview', 'writing', 'calendar', 'graph', 'shortcuts'];
  tabs.forEach(t => {
    const btn = document.getElementById(`guideTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (btn) {
      if (t === tabKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });

  contentEl.innerHTML = USER_GUIDE_CONTENT[tabKey] || USER_GUIDE_CONTENT.overview;
  contentEl.classList.remove('animate-tab-content');
  void contentEl.offsetWidth;
  contentEl.classList.add('animate-tab-content');
  contentEl.scrollTop = 0;
}

// --- B. NOTE ACTIONS & VAULT EXPORT / BACKUP / RESTORE ---
function openNoteActionsMenu(e) {
  if (e) e.stopPropagation();
  const popover = document.getElementById('noteActionsPopover');
  if (!popover) return;

  popover.classList.remove('hidden');
  popover.style.display = 'block';

  const targetBtn = e && (e.currentTarget || e.target);
  const rect = targetBtn && targetBtn.getBoundingClientRect ? targetBtn.getBoundingClientRect() : { right: window.innerWidth - 20, bottom: 44 };

  let posX = rect.right - 256;
  let posY = rect.bottom + 6;

  if (posX < 10) posX = 10;
  if (posX + 256 > window.innerWidth - 10) posX = window.innerWidth - 266;

  popover.style.left = `${posX}px`;
  popover.style.top = `${posY}px`;
}

function closeNoteActionsMenu() {
  const popover = document.getElementById('noteActionsPopover');
  if (popover) {
    popover.classList.add('hidden');
    popover.style.display = 'none';
  }
}

function exportCurrentNoteMarkdown() {
  const note = getActiveNote();
  if (!note) return;

  const lines = [];
  lines.push('---');
  lines.push('title: "' + (note.title || '').replace(/"/g, '\\"') + '"');
  lines.push('code: "' + (note.code || '') + '"');
  lines.push('folder: "' + (note.folder || 'General') + '"');
  lines.push('updated: "' + (note.updatedAt || TODAY_KEY) + '"');
  if (Array.isArray(note.tags) && note.tags.length > 0) {
    lines.push('tags: [' + note.tags.map(t => '"' + t + '"').join(', ') + ']');
  }
  lines.push('---');
  lines.push('');

  (note.blocks || []).forEach(b => {
    const c = b.content || '';
    switch (b.type) {
      case 'h1': lines.push('# ' + c, ''); break;
      case 'h2': lines.push('## ' + c, ''); break;
      case 'h3': lines.push('### ' + c, ''); break;
      case 'bullet': lines.push('- ' + c); break;
      case 'todo': lines.push((b.checked ? '- [x] ' : '- [ ] ') + c); break;
      case 'quote': lines.push('> ' + c, ''); break;
      case 'callout': lines.push('> [!NOTE]', '> ' + c, ''); break;
      case 'code': lines.push('```' + (b.language || ''), c, '```', ''); break;
      case 'divider': lines.push('---', ''); break;
      default: lines.push(c, ''); break;
    }
  });

  const markdownText = lines.join('\n');
  const filename = `${(note.title || 'untitled').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'note'}.md`;

  downloadBlob(markdownText, 'text/markdown;charset=utf-8', filename);
  showToast(`Exported "${note.title}" as Markdown (.md)`);
}

function printCurrentNote() {
  window.print();
}

function exportVaultBackupJSON() {
  const backupData = {
    app: 'PK Note',
    version: '3.0.0',
    exportedAt: new Date().toISOString(),
    vault: JSON.parse(JSON.stringify(state))
  };

  const jsonStr = JSON.stringify(backupData, null, 2);
  const filename = `pk-note-vault-backup-${TODAY_KEY}.json`;

  downloadBlob(jsonStr, 'application/json;charset=utf-8', filename);
  showToast('Vault backup downloaded (.json)');
}

function triggerVaultRestoreFile() {
  const input = document.getElementById('vaultRestoreFileInput');
  if (input) {
    input.value = '';
    input.click();
  }
}

function handleVaultFileImport(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      const vault = parsed.vault || parsed;
      if (!vault || !Array.isArray(vault.notes) || vault.notes.length === 0) {
        showToast('Invalid backup file: notes missing', 'vermilion');
        return;
      }

      const noteCount = vault.notes.length;
      const eventCount = Array.isArray(vault.events) ? vault.events.length : 0;
      const confirmRestore = confirm(`Restore vault backup?\n\nThis will restore ${noteCount} notes and ${eventCount} calendar events.`);
      if (!confirmRestore) return;

      state = {
        ...DEFAULT_VAULT,
        ...vault
      };
      persistState();
      renderAll();
      showToast(`Restored vault: ${noteCount} notes, ${eventCount} events!`);
    } catch (err) {
      console.error('Vault import error:', err);
      showToast('Failed to parse backup JSON file', 'vermilion');
    }
  };
  reader.readAsText(file);
}

function downloadBlob(content, mimeType, filename) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --- C. STARRED / FAVORITES SIDEBAR FILTER ---
function toggleStarredSidebarFilter() {
  activeStarredFilter = !activeStarredFilter;
  renderSidebar();
  showToast(activeStarredFilter ? 'Filter: Starred notes only' : 'Showing all notes');
}

// Dismiss note actions popover & user guide modal on outside click or Esc
document.addEventListener('click', (e) => {
  const noteActions = document.getElementById('noteActionsPopover');
  if (noteActions && !noteActions.classList.contains('hidden') && !noteActions.contains(e.target) && !e.target.closest('#noteActionsBtn')) {
    closeNoteActionsMenu();
  }

  const typoPopover = document.getElementById('typographyPopover');
  if (typoPopover && !typoPopover.classList.contains('hidden') && !typoPopover.contains(e.target) && !e.target.closest('#fontToggleBtn')) {
    closeTypographyPopover();
  }

  const guideModal = document.getElementById('userGuideModal');
  if (guideModal && !guideModal.classList.contains('hidden') && e.target === guideModal) {
    closeUserGuideModal();
  }
});

// Global '?' shortcut for User Guide
document.addEventListener('keydown', (e) => {
  if (e.key === '?' && !e.ctrlKey && !e.metaKey && !e.altKey) {
    const isEditing = document.activeElement && (
      document.activeElement.isContentEditable || 
      document.activeElement.tagName === 'INPUT' || 
      document.activeElement.tagName === 'TEXTAREA'
    );
    if (!isEditing) {
      e.preventDefault();
      openUserGuideModal();
    }
  }
});



// =========================================================================
// 21. ADVANCED AUTOCORRECT ENGINE & MOBILE ERGONOMICS (PRECISION & FUZZY)
// =========================================================================

// Comprehensive High-Frequency Dictionary of English Contractions, Common Misspellings & Transpositions
const AUTOCORRECT_DICTIONARY = {
  // Common Contractions without apostrophe
  'dont': "don't", 'cant': "can't", 'wont': "won't", 'didnt': "didn't",
  'isnt': "isn't", 'arent': "aren't", 'couldnt': "couldn't", 'wouldnt': "wouldn't",
  'shouldnt': "shouldn't", 'youre': "you're", 'theyre': "they're", 'weve': "we've",
  'ive': "I've", 'im': "I'm", 'id': "I'd", 'thats': "that's", 'whats': "what's",
  'theres': "there's", 'heres': "here's", 'hasnt': "hasn't", 'havent': "haven't",
  'wasnt': "wasn't", 'werent': "weren't", 'lets': "let's", 'hows': "how's",
  'whos': "who's", 'wheres': "where's", 'doesnt': "doesn't", 'mustnt': "mustn't",
  'hadnt': "hadn't", 'aint': "ain't", 'youll': "you'll", 'theyll': "they'll",
  'theyve': "they've", 'youve': "you've", 'couldve': "could've", 'wouldve': "would've",
  'shouldve': "should've", 'mightve': "might've", 'mustve': "must've",
  'youd': "you'd", 'theyd': "they'd", 'wed': "we'd",

  // Common Typographical Errors & Misspellings
  'corret': 'correct', 'corretly': 'correctly', 'corretion': 'correction',
  'corretions': 'corrections', 'correting': 'correcting', 'correted': 'corrected',
  'somtimes': 'sometimes', 'sometim': 'sometime', 'sometiems': 'sometimes',
  'somethign': 'something', 'somthing': 'something', 'anythign': 'anything',
  'notihng': 'nothing', 'everyting': 'everything',
  'teh': 'the', 'taht': 'that', 'waht': 'what', 'adn': 'and', 'nad': 'and',
  'fo': 'of', 'ot': 'to', 'ti': 'it', 'si': 'is', 'ahve': 'have', 'haev': 'have',
  'hvae': 'have', 'woudl': 'would', 'coudl': 'could', 'shoudl': 'should',
  'becuase': 'because', 'beacuse': 'because', 'becasue': 'because', 'bause': 'because',
  'definately': 'definitely', 'definatly': 'definitely', 'definitly': 'definitely',
  'seperate': 'separate', 'seperately': 'separately', 'seperation': 'separation',
  'occured': 'occurred', 'occuring': 'occurring', 'occurence': 'occurrence',
  'recieve': 'receive', 'recieved': 'received', 'recieving': 'receiving',
  'untill': 'until', 'truely': 'truly', 'wierd': 'weird', 'wierdly': 'weirdly',
  'beleive': 'believe', 'beleif': 'belief', 'neccessary': 'necessary',
  'necesary': 'necessary', 'necessery': 'necessary', 'goverment': 'government',
  'enviroment': 'environment', 'tommorow': 'tomorrow', 'tommorrow': 'tomorrow',
  'tomorow': 'tomorrow', 'accomodate': 'accommodate', 'accomodation': 'accommodation',
  'calender': 'calendar', 'calandar': 'calendar',
  'embarass': 'embarrass', 'embarassed': 'embarrassed', 'embarassing': 'embarrassing',
  'mispell': 'misspell', 'mispelled': 'misspelled', 'peice': 'piece',
  'freind': 'friend', 'freinds': 'friends', 'acheive': 'achieve',
  'acheived': 'achieved', 'acheivement': 'achievement', 'relevent': 'relevant',
  'writting': 'writing', 'begining': 'beginning', 'thier': 'their',
  'alot': 'a lot', 'noone': 'no one', 'everytime': 'every time',
  'infront': 'in front', 'aswell': 'as well', 'existance': 'existence',
  'maintainance': 'maintenance', 'arguement': 'argument',
  'privilege': 'privilege', 'privelege': 'privilege',
  'suprise': 'surprise', 'suprised': 'surprised',
  'succesful': 'successful', 'succesfully': 'successfully',
  'pronounciation': 'pronunciation', 'refered': 'referred', 'refering': 'referring',
  'guarentee': 'guarantee', 'possession': 'possession', 'posession': 'possession',
  'possesion': 'possession', 'comming': 'coming', 'accross': 'across',
  'basicly': 'basically', 'completly': 'completely', 'dissapear': 'disappear',
  'dissappoint': 'disappoint', 'fourty': 'forty', 'finaly': 'finally',
  'heigth': 'height', 'independant': 'independent', 'knowlege': 'knowledge',
  'libary': 'library', 'milennium': 'millennium', 'millenium': 'millennium',
  'noticable': 'noticeable', 'persue': 'pursue', 'rythm': 'rhythm',
  'rhythim': 'rhythm', 'tendancy': 'tendency', 'tatoo': 'tattoo',
  'unfortunatly': 'unfortunately', 'wich': 'which', 'whitch': 'which',
  'alwasy': 'always', 'alway': 'always', 'beutiful': 'beautiful',
  'developement': 'development', 'happended': 'happened', 'lenght': 'length',
  'strenght': 'strength', 'probelm': 'problem', 'porblem': 'problem',
  'funciton': 'function', 'fucntion': 'function', 'udpate': 'update',
  'upadte': 'update', 'chaneg': 'change', 'cahnge': 'change',
  'retrun': 'return', 'exmaple': 'example', 'widnow': 'window',
  'messgae': 'message', 'mesage': 'message', 'docuemnt': 'document',
  'documetn': 'document', 'schdule': 'schedule', 'scheudle': 'schedule',
  'remidner': 'reminder', 'remidners': 'reminders', 'diffrent': 'different',
  'familar': 'familiar', 'foriegn': 'foreign', 'interupt': 'interrupt',
  'neccessity': 'necessity', 'publically': 'publicly', 'questionaire': 'questionnaire',
  'realy': 'really', 'reciept': 'receipt', 'restarant': 'restaurant',
  'restaraunt': 'restaurant', 'sensative': 'sensitive', 'therfore': 'therefore',
  'threshhold': 'threshold', 'unconscious': 'unconscious', 'usally': 'usually',
  'usuallly': 'usually', 'visable': 'visible', 'whereever': 'wherever',
  'whithout': 'without', 'witout': 'without', 'wrok': 'work', 'owrk': 'work'
};

// High-frequency target vocabulary for Distance-1 Levenshtein matching
const FUZZY_VOCABULARY = [
  'about', 'after', 'again', 'against', 'always', 'another', 'because', 'before',
  'between', 'calendar', 'change', 'could', 'different', 'document', 'enough',
  'example', 'first', 'friend', 'function', 'great', 'important', 'message',
  'nothing', 'number', 'people', 'problem', 'really', 'remember', 'return',
  'schedule', 'screen', 'second', 'should', 'something', 'sometimes', 'still',
  'their', 'there', 'things', 'thought', 'through', 'together', 'update',
  'without', 'window', 'words', 'world', 'would', 'write', 'writing', 'correct'
];

// Tracking for Undo and Throttle
let lastAutocorrect = null;
let autocorrectUndoTimeout = null;
let activeEditingBlockId = null;
let lastAutocorrectCheckTime = 0;
let lastAutocorrectTargetEl = null;

// Build Accepted Legitimate Vocabulary Set (names, tags, folders, vault words)
function getAcceptedVocabulary() {
  const set = new Set([
    'pk', 'note', 'zettelkasten', 'vellum', 'obsidian', 'phana', 'kurosaki',
    'aether', 'html', 'css', 'js', 'svg', 'cli', 'api', 'url', 'pwa', 'doc',
    'evt', 'cmd', 'h1', 'h2', 'h3', 'todo', 'log', 'v1', 'v2', 'v3'
  ]);

  if (window.state && Array.isArray(state.notes)) {
    state.notes.forEach(n => {
      if (n.title) {
        n.title.toLowerCase().split(/[^\w']+/).forEach(w => { if (w.length > 2) set.add(w); });
      }
      if (Array.isArray(n.tags)) {
        n.tags.forEach(t => set.add(t.toLowerCase()));
      }
    });
  }

  if (window.state && Array.isArray(state.folders)) {
    state.folders.forEach(f => {
      f.toLowerCase().split(/[^\w']+/).forEach(w => { if (w.length > 2) set.add(w); });
    });
  }

  if (window.state && Array.isArray(state.acceptedCustomWords)) {
    state.acceptedCustomWords.forEach(w => set.add(w.toLowerCase()));
  }

  return set;
}

function matchCasing(source, target) {
  if (source === source.toUpperCase() && source.length > 1) {
    return target.toUpperCase();
  }
  if (source[0] === source[0].toUpperCase()) {
    return target[0].toUpperCase() + target.slice(1);
  }
  return target;
}

// Fast Damerau-Levenshtein check (distance <= 1)
function isDistanceOne(s1, s2) {
  const lenDiff = Math.abs(s1.length - s2.length);
  if (lenDiff > 1 || s1 === s2) return false;
  if (s1[0] !== s2[0] && (s1.length < 2 || s2.length < 2 || s1[0] !== s2[1] || s1[1] !== s2[0])) {
    return false;
  }
  let i = 0, j = 0, diffs = 0;
  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      diffs++;
      if (diffs > 1) return false;
      if (i + 1 < s1.length && j + 1 < s2.length && s1[i] === s2[j + 1] && s1[i + 1] === s2[j]) {
        i += 2;
        j += 2;
        continue;
      }
      if (s1.length > s2.length) {
        i++;
      } else if (s1.length < s2.length) {
        j++;
      } else {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  if (i < s1.length || j < s2.length) diffs++;
  return diffs === 1;
}

// Resolve spelling or typographical match with morphology
function resolveWordCorrection(wordLower) {
  // 1. Direct dictionary lookup
  if (AUTOCORRECT_DICTIONARY[wordLower]) {
    return AUTOCORRECT_DICTIONARY[wordLower];
  }

  // 2. Morphological suffix resolution (e.g. corretly -> correct + ly)
  const suffixes = ['ly', 'ing', 'ed', 's', 'es', 'ment', 'tion'];
  for (const suffix of suffixes) {
    if (wordLower.endsWith(suffix) && wordLower.length > suffix.length + 2) {
      const base = wordLower.slice(0, -suffix.length);
      if (AUTOCORRECT_DICTIONARY[base]) {
        const targetBase = AUTOCORRECT_DICTIONARY[base];
        return targetBase + suffix;
      }
    }
  }

  // 3. Fast Distance-1 fuzzy matching against core vocabulary
  if (wordLower.length >= 4 && wordLower.length <= 12) {
    for (const candidate of FUZZY_VOCABULARY) {
      if (isDistanceOne(wordLower, candidate)) {
        return candidate;
      }
    }
  }

  return null;
}

function triggerAutocorrectCheck(el, blockId) {
  if (!el || state.autocorrectEnabled === false) return false;

  // Throttle rapid duplicate checks within 25ms
  const now = Date.now();
  if (lastAutocorrectTargetEl === el && now - lastAutocorrectCheckTime < 25) {
    return false;
  }
  lastAutocorrectCheckTime = now;
  lastAutocorrectTargetEl = el;

  // Guard checks: code block, code tag, monospace element
  if (el.closest('pre, code, .font-mono')) return false;
  if (blockId) {
    const note = getActiveNote();
    const blk = note.blocks.find(b => b.id === blockId);
    if (blk && (blk.type === 'code' || blk.type === 'divider')) return false;
  }

  const sel = window.getSelection();
  if (!sel || !sel.rangeCount) return false;
  const range = sel.getRangeAt(0);
  if (!range.collapsed) return false;

  let node = range.startContainer;
  let offset = range.startOffset;

  // Drill down if caret is placed on an element container
  if (node.nodeType === Node.ELEMENT_NODE) {
    if (offset > 0 && node.childNodes[offset - 1]) {
      let child = node.childNodes[offset - 1];
      while (child && child.lastChild) child = child.lastChild;
      if (child && child.nodeType === Node.TEXT_NODE) {
        node = child;
        offset = node.textContent.length;
      }
    }
  }

  if (!node || node.nodeType !== Node.TEXT_NODE) return false;

  const text = node.textContent;
  const textBefore = text.slice(0, offset);

  // Extract the word preceding the delimiter
  const match = textBefore.match(/(?:^|[\s\(\[\{"'“‘—–])([a-zA-Z0-9']+)([\s.,!?;:\)\]\}"'”’])$/);
  if (!match) return false;

  const rawWord = match[1];
  const delimiter = match[2];
  const wordStartInText = offset - rawWord.length - delimiter.length;
  const wordLower = rawWord.toLowerCase();

  // Guard checks: numbers, URLs, emails, wiki links, tags
  if (/\d/.test(rawWord) || rawWord.includes('http') || rawWord.includes('@') || rawWord.startsWith('#')) return false;

  const accepted = getAcceptedVocabulary();
  if (accepted.has(wordLower)) return false;

  let correctedWord = null;

  // Check spelling / contraction / fuzzy dictionary
  const resolved = resolveWordCorrection(wordLower);
  if (resolved) {
    correctedWord = matchCasing(rawWord, resolved);
  } else if (rawWord === 'i') {
    // Standalone lowercase 'i' -> 'I'
    correctedWord = 'I';
  }

  // Sentence start capitalization check
  const preceding = text.slice(0, wordStartInText).trim();
  const isBlockStart = wordStartInText === 0 || preceding === '';
  const isSentenceStart = isBlockStart || /[.!?]\s*$/.test(preceding);

  if (isSentenceStart) {
    if (correctedWord) {
      correctedWord = correctedWord[0].toUpperCase() + correctedWord.slice(1);
    } else if (rawWord === rawWord.toLowerCase() && rawWord.length > 1 && !resolveWordCorrection(wordLower)) {
      // Capitalize start of sentence word
      correctedWord = rawWord[0].toUpperCase() + rawWord.slice(1);
    }
  }

  if (!correctedWord || correctedWord === rawWord) return false;

  // Safe DOM Replacement using Range
  const replaceRange = document.createRange();
  replaceRange.setStart(node, wordStartInText);
  replaceRange.setEnd(node, offset);

  sel.removeAllRanges();
  sel.addRange(replaceRange);

  const replacementText = correctedWord + delimiter;
  let replaced = false;
  try {
    replaced = document.execCommand('insertText', false, replacementText);
  } catch (err) {
    replaced = false;
  }

  if (!replaced) {
    // Fallback: direct textNode slicing
    const beforeWord = text.slice(0, wordStartInText);
    const afterDelimiter = text.slice(offset);
    const newText = beforeWord + replacementText + afterDelimiter;
    node.textContent = newText;

    const newCursorPos = beforeWord.length + replacementText.length;
    const newRange = document.createRange();
    newRange.setStart(node, Math.min(newCursorPos, node.textContent.length));
    newRange.setEnd(node, Math.min(newCursorPos, node.textContent.length));
    sel.removeAllRanges();
    sel.addRange(newRange);
  }

  // Save Undo State
  lastAutocorrect = {
    node,
    rawWord,
    correctedWord,
    position: wordStartInText,
    delimiterLength: delimiter.length,
    blockId: blockId || null,
    timestamp: Date.now()
  };

  // Show floating Undo Chip
  showAutocorrectUndoChip(correctedWord, rawWord);

  // Persist active note changes
  if (blockId) {
    const note = getActiveNote();
    const block = note.blocks.find(b => b.id === blockId);
    if (block) {
      block.content = serializeEditableBlock(el);
      updateWordCount(note);
      persistState();
    }
  } else if (el.id === 'docTitleInput') {
    const note = getActiveNote();
    note.title = el.innerText.trim();
    const breadcrumb = document.getElementById('breadcrumbTitleText');
    if (breadcrumb) breadcrumb.textContent = note.title || 'Untitled Document';
    renderSidebar();
    persistState();
  }

  return true;
}

function checkAutocorrectUndoOnBackspace(e, blockId) {
  if (!lastAutocorrect || (Date.now() - lastAutocorrect.timestamp > 4000)) {
    return false;
  }

  const sel = window.getSelection();
  if (!sel || !sel.rangeCount) return false;
  const range = sel.getRangeAt(0);

  if (range.startContainer === lastAutocorrect.node) {
    const expectedOffset = lastAutocorrect.position + lastAutocorrect.correctedWord.length + lastAutocorrect.delimiterLength;
    if (range.startOffset === expectedOffset) {
      e.preventDefault();
      undoLastAutocorrection();
      return true;
    }
  }
  return false;
}

function showAutocorrectUndoChip(corrected, raw) {
  const chip = document.getElementById('pkAutocorrectChip');
  const curWordEl = document.getElementById('pkAutocorrectCurrentWord');
  const origWordEl = document.getElementById('pkAutocorrectOriginalWord');

  if (!chip || !curWordEl || !origWordEl) return;

  curWordEl.textContent = corrected;
  origWordEl.textContent = `"${raw}"`;
  chip.style.display = 'flex';
  chip.classList.remove('animate-chip-out');
  chip.classList.add('animate-chip-in');

  const sel = window.getSelection();
  if (sel && sel.rangeCount) {
    const rect = sel.getRangeAt(0).getBoundingClientRect();
    let posX = Math.max(12, rect.left - 24);
    let posY = rect.top - 36;
    if (posY < 10) posY = rect.bottom + 8;
    if (posX + 180 > window.innerWidth) posX = window.innerWidth - 190;

    chip.style.left = `${posX}px`;
    chip.style.top = `${posY}px`;
  }

  clearTimeout(autocorrectUndoTimeout);
  autocorrectUndoTimeout = setTimeout(() => {
    hideAutocorrectUndoChip();
  }, 4000);
}

function hideAutocorrectUndoChip() {
  const chip = document.getElementById('pkAutocorrectChip');
  if (chip && chip.style.display !== 'none') {
    chip.classList.remove('animate-chip-in');
    chip.classList.add('animate-chip-out');
    setTimeout(() => {
      chip.style.display = 'none';
      chip.classList.remove('animate-chip-out');
    }, 180);
  }
}

function undoLastAutocorrection() {
  if (!lastAutocorrect) return;
  const { node, rawWord, correctedWord, position, delimiterLength, blockId } = lastAutocorrect;
  hideAutocorrectUndoChip();

  // Learn accepted word so user is never interrupted again
  state.acceptedCustomWords = state.acceptedCustomWords || [];
  if (!state.acceptedCustomWords.includes(rawWord.toLowerCase())) {
    state.acceptedCustomWords.push(rawWord.toLowerCase());
    persistState();
  }

  if (node && node.textContent) {
    const text = node.textContent;
    if (text.substr(position, correctedWord.length) === correctedWord) {
      const newText = text.slice(0, position) + rawWord + text.slice(position + correctedWord.length);
      node.textContent = newText;

      const sel = window.getSelection();
      const newRange = document.createRange();
      const cursor = position + rawWord.length + delimiterLength;
      newRange.setStart(node, Math.min(cursor, newText.length));
      newRange.setEnd(node, Math.min(cursor, newText.length));
      sel.removeAllRanges();
      sel.addRange(newRange);

      if (blockId) {
        const note = getActiveNote();
        const block = note.blocks.find(b => b.id === blockId);
        if (block) {
          const el = document.querySelector(`[data-block-id="${blockId}"]`);
          if (el) block.content = serializeEditableBlock(el);
          updateWordCount(note);
          persistState();
        }
      } else {
        const titleEl = document.getElementById('docTitleInput');
        if (titleEl) {
          const note = getActiveNote();
          note.title = titleEl.innerText.trim();
          const breadcrumb = document.getElementById('breadcrumbTitleText');
          if (breadcrumb) breadcrumb.textContent = note.title || 'Untitled Document';
          renderSidebar();
          persistState();
        }
      }
      showToast(`Reverted to "${rawWord}"`);
    }
  }
  lastAutocorrect = null;
}

function handleTitleInputAutocorrect(e) {
  if ((e.data && /[\s.,!?;:]/.test(e.data)) || e.inputType === 'insertText') {
    const el = document.getElementById('docTitleInput');
    if (el) triggerAutocorrectCheck(el, null);
  }
}

function toggleAutocorrectSetting() {
  state.autocorrectEnabled = state.autocorrectEnabled === false ? true : false;
  persistState();
  showToast(`Autocorrect: ${state.autocorrectEnabled ? 'ENABLED' : 'DISABLED'}`);
}

// =========================================================================
// MOBILE KEYBOARD ACCESSORY BAR & TOUCH CONTROLLERS
// =========================================================================
function handleBlockFocus(e, blockId) {
  activeEditingBlockId = blockId;
  if (window.innerWidth < 768) {
    showMobileAccessoryBar();
    // Ensure the active block is visible above virtual keyboard
    setTimeout(() => {
      const el = e.currentTarget;
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  }
}

const NON_TEXT_INPUT_TYPES = new Set(['checkbox', 'radio', 'range', 'button', 'submit', 'reset', 'file', 'color', 'hidden', 'image']);
let mobileBaseViewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
let isMobileVirtualKeyboardOpen = false;
let mobileNavRestoreTimer = null;

function isTypingElement(el) {
  if (!el || el === document.body || el === document.documentElement) return false;
  if (el.isContentEditable) return true;
  const tag = el.tagName;
  if (tag === 'TEXTAREA') return !el.readOnly && !el.disabled;
  if (tag === 'INPUT') {
    const type = (el.type || 'text').toLowerCase();
    return !NON_TEXT_INPUT_TYPES.has(type) && !el.readOnly && !el.disabled;
  }
  return false;
}

function setMobileBottomNavHidden(hidden) {
  const nav = document.getElementById('mobileBottomNav');
  if (!nav) return;
  if (hidden) {
    nav.classList.add('pk-nav-hidden', 'translate-y-full');
    nav.style.display = 'none';
  } else {
    nav.classList.remove('pk-nav-hidden', 'translate-y-full');
    nav.style.display = '';
  }
}

function syncMobileBottomNavVisibility() {
  const typing = isTypingElement(document.activeElement) || isMobileVirtualKeyboardOpen;
  setMobileBottomNavHidden(typing);
}

function showMobileAccessoryBar() {
  const bar = document.getElementById('mobileKeyboardAccessoryBar');
  if (bar) {
    bar.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
    bar.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
  }
  setMobileBottomNavHidden(true);
}

function hideMobileAccessoryBar() {
  const bar = document.getElementById('mobileKeyboardAccessoryBar');
  if (bar) {
    bar.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
    bar.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
  }
  syncMobileBottomNavVisibility();
}

// Hide mobile bottom nav immediately whenever user focuses ANY editable block, title, or text input
document.addEventListener('focusin', (e) => {
  if (window.innerWidth >= 768) return;
  if (isTypingElement(e.target)) {
    clearTimeout(mobileNavRestoreTimer);
    setMobileBottomNavHidden(true);
  }
}, true);

// Restore mobile bottom nav cleanly once focus leaves all text inputs (debounced so switching blocks never flickers)
document.addEventListener('focusout', () => {
  if (window.innerWidth >= 768) return;
  clearTimeout(mobileNavRestoreTimer);
  mobileNavRestoreTimer = setTimeout(() => {
    if (!isTypingElement(document.activeElement)) {
      isMobileVirtualKeyboardOpen = false;
      hideMobileAccessoryBar();
    } else {
      syncMobileBottomNavVisibility();
    }
  }, 120);
}, true);

function applyMobileBlockFormat(type) {
  const note = guardActiveNoteEditable();
  if (!note || !note.blocks || note.blocks.length === 0) return;
  const blockId = activeEditingBlockId || note.blocks[note.blocks.length - 1].id;
  const block = note.blocks.find(b => b.id === blockId);
  if (!block) return;

  takeSnapshot('applyMobileBlockFormat');
  block.type = type;
  if (type === 'todo') block.checked = false;
  renderBlocks(note);
  focusBlock(blockId, true);
  persistState();
  showToast(`Converted to ${type.toUpperCase()}`);
}

function insertMobileWikiLink() {
  const note = guardActiveNoteEditable();
  if (!note || !note.blocks || note.blocks.length === 0) return;
  const blockId = activeEditingBlockId || note.blocks[note.blocks.length - 1].id;
  const el = document.querySelector(`[data-block-id="${blockId}"]`);
  if (!el) return;
  if (document.activeElement !== el) focusBlock(blockId, true);
  document.execCommand('insertText', false, '[[');
  openWikiLinkMenu(blockId, el, '');
}

function openMobileSlashMenu() {
  const note = guardActiveNoteEditable();
  if (!note) return;
  let blockId = activeEditingBlockId;
  if (!blockId && note.blocks && note.blocks.length > 0) {
    blockId = note.blocks[note.blocks.length - 1].id;
  }
  if (!blockId) return;
  const el = document.querySelector(`[data-block-id="${blockId}"]`);
  if (el) {
    openSlashMenu(blockId, el, '');
  }
}

function applyMobileInlineFormat(kind) {
  const note = guardActiveNoteEditable();
  if (!note) return;
  if (kind === 'bold') {
    takeSnapshot('mobileBold');
    document.execCommand('bold', false, null);
    showToast('Bold toggled');
  } else if (kind === 'italic') {
    takeSnapshot('mobileItalic');
    document.execCommand('italic', false, null);
    showToast('Italic toggled');
  } else if (kind === 'code') {
    if (typeof formatSelectionWithCode === 'function') {
      formatSelectionWithCode();
    } else {
      document.execCommand('insertText', false, '`code`');
    }
  }
  scheduleSave();
}

function mobileReadSelectionOrNote() {
  const sel = window.getSelection ? window.getSelection().toString().trim() : '';
  if (sel) {
    readTextAloud(sel, 'Selected Text');
  } else {
    toggleReadingNoteAloud();
  }
}

function dismissMobileKeyboard() {
  if (document.activeElement && document.activeElement.blur) {
    document.activeElement.blur();
  }
  hideMobileAccessoryBar();
}

// Dismiss accessory bar when clicking outside editor on mobile
document.addEventListener('click', (e) => {
  if (window.innerWidth >= 768) return;
  const isEditable = e.target.closest('[contenteditable="true"], input, textarea');
  const isAccessory = e.target.closest('#mobileKeyboardAccessoryBar');
  if (!isEditable && !isAccessory) {
    hideMobileAccessoryBar();
  }
});

// Viewport resize & scroll handling (Pins mobile accessory bar above soft keyboard & keeps bottom nav hidden while typing!)
if (window.visualViewport) {
  const syncKeyboardBar = () => {
    const vv = window.visualViewport;
    if (vv.height > mobileBaseViewportHeight) {
      mobileBaseViewportHeight = vv.height;
    }
    const heightDrop = mobileBaseViewportHeight - vv.height;
    isMobileVirtualKeyboardOpen = window.innerWidth < 768 && heightDrop > 130;
    syncMobileBottomNavVisibility();

    const bar = document.getElementById('mobileKeyboardAccessoryBar');
    if (!bar) return;
    const keyboardOffset = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop));
    bar.style.bottom = `${keyboardOffset}px`;
    if (!bar.classList.contains('pointer-events-none')) {
      const activeEl = document.querySelector(`[data-block-id="${activeEditingBlockId}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };
  window.visualViewport.addEventListener('resize', syncKeyboardBar);
  window.visualViewport.addEventListener('scroll', syncKeyboardBar);
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      mobileBaseViewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      isMobileVirtualKeyboardOpen = false;
      syncMobileBottomNavVisibility();
    }, 300);
  });
}


  // =========================================================================
  // 16. WORKSPACE & DOCUMENT CUSTOMIZER ENGINE (BANNERS, THEMES, GUARDED RAILS)
  // =========================================================================
  const ACCENT_THEMES = [
    { id: 'vermilion', name: 'Archival Vermilion', light: '#C8462B', dark: '#D95338', tintLight: 'rgba(200, 70, 43, 0.08)', tintDark: 'rgba(217, 83, 56, 0.12)' },
    { id: 'cobalt',    name: 'Blueprint Cobalt',   light: '#1D4ED8', dark: '#3B82F6', tintLight: 'rgba(29, 78, 216, 0.08)',  tintDark: 'rgba(59, 130, 246, 0.14)' },
    { id: 'emerald',   name: 'Forest Emerald',     light: '#047857', dark: '#10B981', tintLight: 'rgba(4, 120, 87, 0.08)',   tintDark: 'rgba(16, 185, 129, 0.14)' },
    { id: 'amber',     name: 'Warm Ochre',         light: '#B45309', dark: '#F59E0B', tintLight: 'rgba(180, 83, 9, 0.08)',   tintDark: 'rgba(245, 158, 11, 0.14)' },
    { id: 'violet',    name: 'Imperial Violet',    light: '#6D28D9', dark: '#8B5CF6', tintLight: 'rgba(109, 40, 217, 0.08)', tintDark: 'rgba(139, 92, 246, 0.14)' },
    { id: 'rose',      name: 'Crimson Rose',       light: '#BE123C', dark: '#F43F5E', tintLight: 'rgba(190, 18, 60, 0.08)',  tintDark: 'rgba(244, 63, 94, 0.14)' },
    { id: 'carbon',    name: 'Monochrome Carbon',  light: '#374151', dark: '#9CA3AF', tintLight: 'rgba(55, 65, 81, 0.08)',   tintDark: 'rgba(156, 163, 175, 0.14)' }
  ];

  const BANNER_GRADIENTS = [
    { id: 'vermilion_sunset', name: 'Vermilion Sunset', value: 'linear-gradient(135deg, #C8462B 0%, #D97706 50%, #A87E2D 100%)' },
    { id: 'obsidian_space',   name: 'Obsidian Starlight', value: 'linear-gradient(135deg, #18181B 0%, #27272A 50%, #09090B 100%)' },
    { id: 'prussian_blue',    name: 'Prussian Blueprint', value: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #0284C7 100%)' },
    { id: 'botanical_green',  name: 'Botanical Emerald', value: 'linear-gradient(135deg, #064E3B 0%, #059669 50%, #10B981 100%)' },
    { id: 'imperial_violet',  name: 'Imperial Amethyst', value: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #A855F7 100%)' },
    { id: 'vintage_vellum',   name: 'Vintage Parchment', value: 'linear-gradient(135deg, #FDFBF7 0%, #F4EDE4 50%, #E2DFD9 100%)' },
    { id: 'nordic_slate',     name: 'Nordic Slate', value: 'linear-gradient(135deg, #334155 0%, #475569 50%, #0F172A 100%)' },
    { id: 'crimson_dusk',     name: 'Crimson Dusk', value: 'linear-gradient(135deg, #881337 0%, #E11D48 50%, #BE123C 100%)' }
  ];

  const BANNER_PATTERNS = [
    { id: 'pat_millimeter', name: 'Millimeter Drafting', value: 'linear-gradient(to right, rgba(138,138,133,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(138,138,133,0.18) 1px, transparent 1px)', patternSize: '20px 20px', bgColor: '#161616' },
    { id: 'pat_isometric',  name: 'Isometric Mesh', value: 'linear-gradient(30deg, rgba(138,138,133,0.14) 12%, transparent 12.5%, transparent 87%, rgba(138,138,133,0.14) 87.5%), linear-gradient(150deg, rgba(138,138,133,0.14) 12%, transparent 12.5%, transparent 87%, rgba(138,138,133,0.14) 87.5%)', patternSize: '40px 70px', bgColor: '#181818' },
    { id: 'pat_contour',    name: 'Topographic Waves', value: 'repeating-radial-gradient(circle at 0 0, transparent 0, rgba(138,138,133,0.12) 10px, transparent 20px)', patternSize: 'auto', bgColor: '#141414' },
    { id: 'pat_dots',       name: 'Carbon Dot Matrix', value: 'radial-gradient(rgba(138,138,133,0.25) 1.2px, transparent 1.2px)', patternSize: '14px 14px', bgColor: '#191919' },
    { id: 'pat_crosshatch', name: 'Diagonal Crosshatch', value: 'repeating-linear-gradient(45deg, rgba(138,138,133,0.12), rgba(138,138,133,0.12) 1px, transparent 1px, transparent 12px)', patternSize: 'auto', bgColor: '#171717' },
    { id: 'pat_linen',      name: 'Japanese Woven Linen', value: 'linear-gradient(90deg, rgba(138,138,133,0.12) 50%, transparent 50%), linear-gradient(rgba(138,138,133,0.12) 50%, transparent 50%)', patternSize: '6px 6px', bgColor: '#1C1B19' }
  ];

  const BANNER_PHOTOS = [
    { id: 'photo_library', name: 'Archival Library', url: 'https://images.unsplash.com/photo-1507842229451-7f01be8610ce?auto=format&fit=crop&w=1200&q=80' },
    { id: 'photo_arch',    name: 'Swiss Concrete', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80' },
    { id: 'photo_pine',    name: 'Misty Alpine Pine', url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80' },
    { id: 'photo_nebula',  name: 'Deep Nebula', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80' },
    { id: 'photo_studio',  name: 'Drafting Studio', url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80' },
    { id: 'photo_ink',     name: 'Fluid Marble Ink', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80' }
  ];

  function renderDocBanner(note) {
    const bannerBg = document.getElementById('ruledHeaderBand');
    const removeBtn = document.getElementById('docBannerRemoveBtn');
    const actionLabel = document.getElementById('docBannerActionLabel');
    const quickBannerText = document.getElementById('quickBannerText');
    if (!bannerBg) return;

    const banner = note && note.banner;
    if (banner && banner.value) {
      const hClass = banner.height === 'compact' ? 'h-32' : (banner.height === 'cinematic' ? 'h-64 sm:h-72' : 'h-48 sm:h-52');
      bannerBg.className = `w-full ${hClass} border-b border-[var(--border-hairline)] bg-cover bg-center transition-all duration-300 relative overflow-hidden animate-banner-in`;
      
      if (banner.type === 'pattern' || banner.type === 'preset' || banner.type === 'gradient') {
        bannerBg.style.backgroundImage = banner.value;
        bannerBg.style.backgroundColor = banner.bgColor || '';
        bannerBg.style.backgroundSize = banner.patternSize || 'auto';
      } else {
        bannerBg.style.backgroundImage = `url("${banner.value}")`;
        bannerBg.style.backgroundColor = '';
        bannerBg.style.backgroundSize = 'cover';
      }

      bannerBg.innerHTML = `<div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[var(--bg-canvas)] opacity-90 pointer-events-none"></div>`;
      if (removeBtn) removeBtn.classList.remove('hidden');
      if (actionLabel) actionLabel.textContent = 'Change Banner';
      if (quickBannerText) quickBannerText.textContent = 'Change Banner';
    } else {
      bannerBg.className = `w-full ${state.showHeaderGrid ? 'h-16 archival-ruled-band' : 'h-8'} border-b border-[var(--border-hairline)] transition-all relative`;
      bannerBg.style.backgroundImage = '';
      bannerBg.style.backgroundColor = '';
      bannerBg.innerHTML = '';
      if (removeBtn) removeBtn.classList.add('hidden');
      if (actionLabel) actionLabel.textContent = 'Add Banner';
      if (quickBannerText) quickBannerText.textContent = 'Add Banner';
    }
  }

  function applyNoteBanner(bannerData) {
    const note = getActiveNote();
    if (!note) return;
    note.banner = {
      height: (note.banner && note.banner.height) || 'standard',
      ...bannerData
    };
    renderDocBanner(note);
    persistState();
    showToast('Document banner updated');
    if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
      switchCustomizerTab('banner');
    }
  }

  function removeActiveDocBanner() {
    const note = getActiveNote();
    if (!note) return;
    delete note.banner;
    renderDocBanner(note);
    persistState();
    showToast('Document banner removed');
    if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
      switchCustomizerTab('banner');
    }
  }

  function setBannerHeight(heightKey) {
    const note = getActiveNote();
    if (!note || !note.banner) return;
    note.banner.height = heightKey;
    renderDocBanner(note);
    persistState();
    showToast(`Banner height set to ${heightKey.toUpperCase()}`);
    switchCustomizerTab('banner');
  }

  function applyBannerUrlInput() {
    const input = document.getElementById('bannerCustomUrlInput');
    if (!input || !input.value.trim()) return;
    applyNoteBanner({
      type: 'url',
      value: input.value.trim()
    });
  }

  function triggerBannerUpload() {
    const fileInput = document.getElementById('noteBannerFileInput');
    if (fileInput) fileInput.click();
  }

  function handleBannerFileUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showToast('Please select an image file', 'vermilion');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      applyNoteBanner({
        type: 'upload',
        value: event.target.result
      });
      showToast('Uploaded image banner');
    };
    reader.readAsDataURL(file);
  }

  function applyAccentTheme(themeIdOrHex, shouldPersist = true) {
    const isDark = state.theme === 'dark';
    let color = isDark ? '#D95338' : '#C8462B';
    let tint = isDark ? 'rgba(217, 83, 56, 0.12)' : 'rgba(200, 70, 43, 0.08)';

    const preset = ACCENT_THEMES.find(t => t.id === themeIdOrHex);
    if (preset) {
      color = isDark ? preset.dark : preset.light;
      tint = isDark ? preset.tintDark : preset.tintLight;
      state.accentColor = preset.id;
    } else if (typeof themeIdOrHex === 'string' && themeIdOrHex.startsWith('#')) {
      color = themeIdOrHex;
      state.accentColor = themeIdOrHex;
      const r = parseInt(themeIdOrHex.slice(1, 3), 16) || 200;
      const g = parseInt(themeIdOrHex.slice(3, 5), 16) || 70;
      const b = parseInt(themeIdOrHex.slice(5, 7), 16) || 43;
      tint = `rgba(${r}, ${g}, ${b}, ${isDark ? 0.14 : 0.09})`;
    } else {
      state.accentColor = 'vermilion';
      const def = ACCENT_THEMES[0];
      color = isDark ? def.dark : def.light;
      tint = isDark ? def.tintDark : def.tintLight;
    }

    document.documentElement.style.setProperty('--accent-vermilion', color);
    document.documentElement.style.setProperty('--accent-vermilion-tint', tint);
    if (shouldPersist) {
      persistState();
      showToast(`Applied accent: ${preset ? preset.name : color}`);
    }
  }


// =========================================================================
// 22. COMPREHENSIVE TYPOGRAPHY & MULTI-FONT ENGINE
// =========================================================================

const AVAILABLE_FONTS = [
  // Sans-Serif / Clean Modernist
  { id: 'inter', name: 'Inter', category: 'Sans', family: "'Inter', -apple-system, sans-serif", class: 'font-inter', desc: 'Swiss precision neo-grotesque' },
  { id: 'jakarta', name: 'Plus Jakarta', category: 'Sans', family: "'Plus Jakarta Sans', sans-serif", class: 'font-jakarta', desc: 'Modern geometric humanist sans' },
  { id: 'outfit', name: 'Outfit', category: 'Sans', family: "'Outfit', sans-serif", class: 'font-outfit', desc: 'Airy, contemporary minimalist' },
  { id: 'spaceGrotesk', name: 'Space Grotesk', category: 'Sans', family: "'Space Grotesk', sans-serif", class: 'font-space-grotesk', desc: 'Brutalist tech-forward grotesque' },

  // Editorial Serif / Literary Publishing
  { id: 'newsreader', name: 'Newsreader', category: 'Serif', family: "'Newsreader', Georgia, serif", class: 'font-newsreader', desc: 'Continuous literary book prose' },
  { id: 'lora', name: 'Lora', category: 'Serif', family: "'Lora', Georgia, serif", class: 'font-lora', desc: 'Calligraphic contemporary curves' },
  { id: 'garamond', name: 'EB Garamond', category: 'Serif', family: "'EB Garamond', Georgia, serif", class: 'font-garamond', desc: 'Classical Renaissance humanist type' },
  { id: 'playfair', name: 'Playfair', category: 'Serif', family: "'Playfair Display', Georgia, serif", class: 'font-playfair', desc: 'High-contrast luxury editorial' },
  { id: 'cinzel', name: 'Cinzel', category: 'Serif', family: "'Cinzel', serif", class: 'font-cinzel', desc: 'Classical Roman inscriptional monument' },

  // Technical Monospace & Drafting
  { id: 'jetbrains', name: 'JetBrains Mono', category: 'Mono', family: "'JetBrains Mono', monospace", class: 'font-jetbrains', desc: 'Developer monospace with ligatures' },
  { id: 'fira', name: 'Fira Code', category: 'Mono', family: "'Fira Code', monospace", class: 'font-fira', desc: 'Mozilla programmer ligature mono' },
  { id: 'spaceMono', name: 'Space Mono', category: 'Mono', family: "'Space Mono', monospace", class: 'font-space-mono', desc: 'Mathematical geometric monospace' },

  // High Legibility & Dyslexia-Friendly
  { id: 'lexend', name: 'Lexend Deca', category: 'Legibility', family: "'Lexend', sans-serif", class: 'font-lexend', desc: 'Designed for reduced reading fatigue' }
];

const HEADING_FONT_PAIRINGS = [
  { id: 'match', name: 'Unified Match', desc: 'Headings match body typeface' },
  { id: 'newsreader', name: 'Newsreader Book', desc: 'Warm literary serif titles' },
  { id: 'playfair', name: 'Playfair Luxury', desc: 'Dramatic high-contrast titles' },
  { id: 'garamond', name: 'Renaissance Garamond', desc: 'Timeless scholarship title aesthetics' },
  { id: 'cinzel', name: 'Roman Cinzel', desc: 'Monumental Roman capital headings' },
  { id: 'spaceGrotesk', name: 'Space Grotesk', desc: 'Architectural tech headings' },
  { id: 'jetbrains', name: 'JetBrains Mono', desc: 'Engineering & drafting headings' }
];

const FONT_SIZE_SCALES = [
  { id: 'small', label: '13.5px', name: 'Compact', class: 'text-scale-small' },
  { id: 'standard', label: '15px', name: 'Standard', class: 'text-scale-standard' },
  { id: 'medium', label: '16.5px', name: 'Medium', class: 'text-scale-medium' },
  { id: 'large', label: '18px', name: 'Spacious', class: 'text-scale-large' },
  { id: 'xl', label: '20px', name: 'Focus XL', class: 'text-scale-xl' }
];

let currentTypographyCategory = 'All';

function getActiveFontObject() {
  const currentId = state.fontFamily || (state.fontStyle === 'serif' ? 'newsreader' : (state.fontStyle === 'mono' ? 'jetbrains' : 'inter'));
  return AVAILABLE_FONTS.find(f => f.id === currentId) || AVAILABLE_FONTS[0];
}

const loadedExtraFonts = new Set(['inter', 'newsreader', 'jetbrains']);
function ensureExtraFontLoaded(font) {
  if (!font || loadedExtraFonts.has(font.id)) return;
  loadedExtraFonts.add(font.id);
  const familyParam = encodeURIComponent(font.name).replace(/%20/g, '+');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${familyParam}:wght@400;500;600;700&display=swap`;
  document.head.appendChild(link);
}

function applyFontFamily(fontId) {
  const font = AVAILABLE_FONTS.find(f => f.id === fontId);
  if (!font) return;
  ensureExtraFontLoaded(font);
  state.fontFamily = font.id;
  state.fontStyle = font.category.toLowerCase();
  applyThemeAndLayout();
  persistState();
  showToast(`Typography set to ${font.name}`);
  renderTypographyPopover();
  if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
    switchCustomizerTab('layout');
  }
}

function applyFontSize(sizeId) {
  state.fontSize = sizeId;
  applyThemeAndLayout();
  persistState();
  const scale = FONT_SIZE_SCALES.find(s => s.id === sizeId);
  showToast(`Body scale: ${scale ? scale.name : sizeId}`);
  renderTypographyPopover();
  if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
    switchCustomizerTab('layout');
  }
}

function stepFontSize(delta) {
  const currentIdx = FONT_SIZE_SCALES.findIndex(s => s.id === (state.fontSize || 'standard'));
  const newIdx = Math.max(0, Math.min(FONT_SIZE_SCALES.length - 1, (currentIdx === -1 ? 1 : currentIdx) + delta));
  applyFontSize(FONT_SIZE_SCALES[newIdx].id);
}

function applyHeadingFont(hId) {
  state.headingFont = hId;
  applyThemeAndLayout();
  persistState();
  showToast(`Heading pairing: ${hId}`);
  renderTypographyPopover();
  if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
    switchCustomizerTab('layout');
  }
}

function toggleTextAlign() {
  state.textAlign = state.textAlign === 'justify' ? 'left' : 'justify';
  applyThemeAndLayout();
  persistState();
  showToast(`Alignment: ${state.textAlign.toUpperCase()}`);
  renderTypographyPopover();
  if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
    switchCustomizerTab('layout');
  }
}

function toggleDropCap() {
  state.enableDropCap = !state.enableDropCap;
  applyThemeAndLayout();
  persistState();
  showToast(`Drop Cap: ${state.enableDropCap ? 'ENABLED' : 'DISABLED'}`);
  renderTypographyPopover();
  if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
    switchCustomizerTab('layout');
  }
}

function toggleBookIndent() {
  state.bookIndent = !state.bookIndent;
  applyThemeAndLayout();
  persistState();
  showToast(`Paragraph Indent: ${state.bookIndent ? 'ENABLED' : 'DISABLED'}`);
  renderTypographyPopover();
  if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
    switchCustomizerTab('layout');
  }
}

function toggleLigatures() {
  state.enableLigatures = state.enableLigatures === false ? true : false;
  applyThemeAndLayout();
  persistState();
  showToast(`Ligatures: ${state.enableLigatures ? 'ENABLED' : 'DISABLED'}`);
  renderTypographyPopover();
  if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
    switchCustomizerTab('layout');
  }
}

function toggleTypographyPopover(e) {
  if (e) e.stopPropagation();
  const popover = document.getElementById('typographyPopover');
  if (!popover) return;
  if (!popover.classList.contains('hidden')) {
    closeTypographyPopover();
    return;
  }
  renderTypographyPopover();
  popover.classList.remove('hidden');
  popover.classList.remove('animate-menu');
  void popover.offsetWidth;
  popover.classList.add('animate-menu');

  const btn = document.getElementById('fontToggleBtn');
  if (btn) {
    const rect = btn.getBoundingClientRect();
    let left = Math.max(16, rect.left - 160);
    if (left + 360 > window.innerWidth) left = window.innerWidth - 376;
    popover.style.left = `${left}px`;
    popover.style.top = `${rect.bottom + 6}px`;
  }
}

function closeTypographyPopover() {
  const popover = document.getElementById('typographyPopover');
  if (popover) popover.classList.add('hidden');
}

function setTypographyCategory(cat) {
  currentTypographyCategory = cat;
  renderTypographyPopover();
}

function renderTypographyPopover() {
  const popover = document.getElementById('typographyPopover');
  if (!popover) return;

  const activeFont = getActiveFontObject();
  const currentSize = state.fontSize || 'standard';
  const currentSpacing = state.lineSpacing || 'standard';
  const currentWidth = state.layoutWidth || 'standard';
  const isJustified = state.textAlign === 'justify';
  const hasDropCap = !!state.enableDropCap;
  const hasIndent = !!state.bookIndent;
  const hasLigatures = state.enableLigatures !== false;
  const currentHeading = state.headingFont || 'match';

  const categories = ['All', 'Sans', 'Serif', 'Mono', 'Legibility'];
  const filteredFonts = currentTypographyCategory === 'All' 
    ? AVAILABLE_FONTS 
    : AVAILABLE_FONTS.filter(f => f.category === currentTypographyCategory);

  popover.innerHTML = `
    <div class="p-3 select-none">
      <!-- Header -->
      <div class="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border-hairline)]">
        <div class="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">
          <svg class="w-3.5 h-3.5 text-[var(--accent-vermilion)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <polyline points="4 7 4 4 20 4 20 7"></polyline>
            <line x1="9" y1="20" x2="15" y2="20"></line>
            <line x1="12" y1="4" x2="12" y2="20"></line>
          </svg>
          <span>TYPOGRAPHY & READING</span>
        </div>
        <button onclick="closeTypographyPopover()" class="p-1 rounded text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <!-- Category Filters -->
      <div class="flex items-center gap-1 overflow-x-auto pb-1 mb-2 scrollbar-none">
        ${categories.map(cat => `
          <button onclick="setTypographyCategory('${cat}')" class="px-2 py-0.5 rounded-[3px] font-mono text-[10px] transition-colors ${
            currentTypographyCategory === cat
              ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)]'
              : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] border border-transparent'
          }">
            ${cat.toUpperCase()}
          </button>
        `).join('')}
      </div>

      <!-- Typeface List -->
      <div class="max-h-48 overflow-y-auto space-y-1 pr-0.5 mb-3 scrollbar-none">
        ${filteredFonts.map(font => {
          const isSelected = activeFont.id === font.id;
          return `
            <button onclick="applyFontFamily('${font.id}')"
                    class="w-full flex items-center justify-between px-2.5 py-1.5 rounded-[4px] border text-left transition-all ${
                      isSelected
                        ? 'bg-[var(--bg-canvas)] border-[var(--accent-vermilion)] shadow-sm'
                        : 'bg-transparent border-transparent hover:bg-[var(--bg-hover)] hover:border-[var(--border-hairline)]'
                    }">
              <div class="flex items-center gap-2 min-w-0">
                <span class="text-sm ${font.class} ${isSelected ? 'text-[var(--accent-vermilion)] font-semibold' : 'text-[var(--text-primary)]'}">
                  ${font.name}
                </span>
                <span class="font-mono text-[9px] uppercase px-1 py-0.2 rounded bg-[var(--bg-panel)] border border-[var(--border-hairline)] text-[var(--text-tertiary)]">
                  ${font.category}
                </span>
              </div>
              <span class="font-mono text-[10px] text-[var(--text-tertiary)] truncate ml-2">
                ${font.desc}
              </span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- Size & Stepper -->
      <div class="pb-2 mb-2 border-b border-[var(--border-hairline)]">
        <div class="flex items-center justify-between mb-1.5 font-mono text-[10px] uppercase text-[var(--text-tertiary)]">
          <span>Body Scale</span>
          <div class="flex items-center gap-1">
            <button onclick="stepFontSize(-1)" class="w-5 h-5 rounded border border-[var(--border-hairline)] hover:bg-[var(--bg-hover)] flex items-center justify-center font-mono text-[10px]" title="Decrease size">A-</button>
            <button onclick="stepFontSize(1)" class="w-5 h-5 rounded border border-[var(--border-hairline)] hover:bg-[var(--bg-hover)] flex items-center justify-center font-mono text-[10px] font-bold" title="Increase size">A+</button>
          </div>
        </div>
        <div class="grid grid-cols-5 gap-1">
          ${FONT_SIZE_SCALES.map(s => `
            <button onclick="applyFontSize('${s.id}')" class="py-1 rounded-[3px] border font-mono text-[10px] transition-colors ${
              currentSize === s.id
                ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)] font-medium'
                : 'bg-[var(--bg-canvas)] text-[var(--text-secondary)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
            }">
              ${s.label}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Line Height & Layout Width -->
      <div class="grid grid-cols-2 gap-2 pb-2 mb-2 border-b border-[var(--border-hairline)]">
        <!-- Line Height -->
        <div>
          <div class="font-mono text-[10px] uppercase text-[var(--text-tertiary)] mb-1">Density</div>
          <div class="grid grid-cols-2 gap-1">
            ${[
              { id: 'compact', label: '1.4' },
              { id: 'standard', label: '1.6' },
              { id: 'relaxed', label: '1.85' },
              { id: 'airy', label: '2.1' }
            ].map(item => `
              <button onclick="applyLineSpacing('${item.id}')" class="py-1 rounded-[3px] border font-mono text-[10px] transition-colors ${
                currentSpacing === item.id
                  ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)] font-medium'
                  : 'bg-[var(--bg-canvas)] text-[var(--text-secondary)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
              }">
                ${item.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Measure Width -->
        <div>
          <div class="font-mono text-[10px] uppercase text-[var(--text-tertiary)] mb-1">Canvas Width</div>
          <div class="grid grid-cols-2 gap-1">
            ${[
              { id: 'standard', label: '680px' },
              { id: 'wide', label: '860px' },
              { id: 'ultrawide', label: '1080px' },
              { id: 'full', label: 'Full' }
            ].map(item => `
              <button onclick="applyLayoutWidth('${item.id}')" class="py-1 rounded-[3px] border font-mono text-[10px] transition-colors ${
                currentWidth === item.id
                  ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)] font-medium'
                  : 'bg-[var(--bg-canvas)] text-[var(--text-secondary)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
              }">
                ${item.label}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Editorial Features Matrix -->
      <div class="grid grid-cols-2 gap-1.5 mb-2.5">
        <button onclick="toggleTextAlign()" class="flex items-center justify-between px-2 py-1.5 rounded-[3px] border font-mono text-[10px] transition-colors ${
          isJustified
            ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)]'
            : 'bg-[var(--bg-canvas)] text-[var(--text-secondary)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
        }">
          <span>JUSTIFY TEXT</span>
          <span>${isJustified ? 'ON' : 'OFF'}</span>
        </button>

        <button onclick="toggleDropCap()" class="flex items-center justify-between px-2 py-1.5 rounded-[3px] border font-mono text-[10px] transition-colors ${
          hasDropCap
            ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)]'
            : 'bg-[var(--bg-canvas)] text-[var(--text-secondary)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
        }">
          <span>DROP CAP</span>
          <span>${hasDropCap ? 'ON' : 'OFF'}</span>
        </button>

        <button onclick="toggleBookIndent()" class="flex items-center justify-between px-2 py-1.5 rounded-[3px] border font-mono text-[10px] transition-colors ${
          hasIndent
            ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)]'
            : 'bg-[var(--bg-canvas)] text-[var(--text-secondary)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
        }">
          <span>BOOK INDENT</span>
          <span>${hasIndent ? 'ON' : 'OFF'}</span>
        </button>

        <button onclick="toggleLigatures()" class="flex items-center justify-between px-2 py-1.5 rounded-[3px] border font-mono text-[10px] transition-colors ${
          hasLigatures
            ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)]'
            : 'bg-[var(--bg-canvas)] text-[var(--text-secondary)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
        }">
          <span>LIGATURES</span>
          <span>${hasLigatures ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      <!-- Bottom Shortcut to Full Studio -->
      <div class="pt-2 border-t border-[var(--border-hairline)] flex items-center justify-between font-mono text-[10px]">
        <span class="text-[var(--text-tertiary)]">Heading Pairing: <strong class="text-[var(--text-primary)]">${currentHeading.toUpperCase()}</strong></span>
        <button onclick="closeTypographyPopover(); openCustomizerModal('layout');" class="text-[var(--accent-vermilion)] hover:underline flex items-center gap-1">
          <span>Full Studio</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  `;
}

  function applyLayoutWidth(widthKey) {
    state.layoutWidth = widthKey;
    applyThemeAndLayout();
    persistState();
    showToast(`Document measure set to ${widthKey.toUpperCase()}`);
    if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
      switchCustomizerTab('layout');
    }
  }

  function cycleLayoutWidth() {
    const next = state.layoutWidth === 'standard' ? 'wide' : (state.layoutWidth === 'wide' ? 'full' : 'standard');
    applyLayoutWidth(next);
  }

  function applyLineSpacing(spacingKey) {
    state.lineSpacing = spacingKey;
    applyThemeAndLayout();
    persistState();
    showToast(`Line spacing set to ${spacingKey.toUpperCase()}`);
    if (!document.getElementById('workspaceCustomizerModal').classList.contains('hidden')) {
      switchCustomizerTab('layout');
    }
  }

  function resetVisualCustomizationsToDefault() {
    state.accentColor = 'vermilion';
    state.layoutWidth = 'standard';
    state.lineSpacing = 'standard';
    state.fontStyle = 'sans';
    state.showHeaderGrid = true;
    const note = getActiveNote();
    if (note && note.banner) {
      delete note.banner;
    }
    applyAccentTheme('vermilion');
    applyThemeAndLayout();
    renderActiveDocument();
    persistState();
    showToast('All visual customizations reset to default archival vellum');
    switchCustomizerTab('guarded');
  }

  function openCustomizerModal(tab = 'banner') {
    playWhooshSound();
    const modal = document.getElementById('workspaceCustomizerModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    const card = modal.querySelector('.animate-modal-card');
    if (card) {
      card.classList.remove('animate-modal-card');
      void card.offsetWidth;
      card.classList.add('animate-modal-card');
    }
    switchCustomizerTab(tab);
  }

  function closeCustomizerModal() {
    const modal = document.getElementById('workspaceCustomizerModal');
    if (modal) modal.classList.add('hidden');
  }

  function switchCustomizerTab(tabKey) {
    const contentEl = document.getElementById('customizerContentArea');
    if (!contentEl) return;

    const tabs = ['banner', 'theme', 'layout', 'guarded'];
    tabs.forEach(t => {
      const btn = document.getElementById(`customizerTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
      if (btn) {
        if (t === tabKey) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    });

    contentEl.classList.remove('animate-tab-content');
    void contentEl.offsetWidth;
    contentEl.classList.add('animate-tab-content');

    const note = getActiveNote() || { title: 'Document', banner: null };
    const activeBanner = note.banner;
    const currentHeight = (activeBanner && activeBanner.height) || 'standard';

    if (tabKey === 'banner') {
      contentEl.innerHTML = `
        <div class="space-y-6">
          <!-- Active Note Banner Status -->
          <div class="p-4 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-center justify-between">
            <div>
              <div class="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">Active Document</div>
              <div class="font-serif text-sm font-semibold text-[var(--text-primary)] mt-0.5 truncate max-w-sm">${escapeHtml(note.title || 'Untitled Document')}</div>
              <div class="font-mono text-[11px] text-[var(--text-secondary)] mt-1">
                Status: <span class="${activeBanner ? 'text-[var(--accent-vermilion)] font-semibold' : 'text-[var(--text-tertiary)]'}">${activeBanner ? 'Custom Banner Active' : 'Default Ruled Header Band'}</span>
              </div>
            </div>
            ${activeBanner ? `
              <button onclick="removeActiveDocBanner()" class="px-3 py-1.5 rounded-[3px] bg-red-600/10 hover:bg-red-600/20 text-red-500 font-mono text-xs border border-red-500/20 transition-colors cursor-pointer flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                <span>Remove Banner</span>
              </button>
            ` : ''}
          </div>

          <!-- Banner Height Setting -->
          <div>
            <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Banner Height</label>
            <div class="grid grid-cols-3 gap-2">
              ${['compact', 'standard', 'cinematic'].map(h => `
                <button onclick="setBannerHeight('${h}')" class="px-3 py-2 rounded-[3px] text-xs font-mono border transition-all text-center cursor-pointer ${
                  currentHeight === h
                    ? 'bg-[var(--accent-vermilion-tint)] border-[var(--accent-vermilion)] text-[var(--accent-vermilion)] font-semibold'
                    : 'bg-[var(--bg-canvas)] border-[var(--border-hairline)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                }">
                  ${h === 'compact' ? 'Compact (130px)' : (h === 'standard' ? 'Standard (190px)' : 'Cinematic (270px)')}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Presets 1: Archival Gradients -->
          <div>
            <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Preset Archival Gradients</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              ${BANNER_GRADIENTS.map(bg => `
                <button onclick="applyNoteBanner({ type: 'gradient', value: '${bg.value}' })" class="group relative h-16 rounded-[4px] overflow-hidden border border-[var(--border-hairline)] hover:border-[var(--border-strong)] transition-all cursor-pointer shadow-sm text-left">
                  <div class="w-full h-full" style="background: ${bg.value}"></div>
                  <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-2">
                    <span class="text-white font-mono text-[10px] font-medium drop-shadow">${bg.name}</span>
                  </div>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Presets 2: Architectural Patterns (100% Offline) -->
          <div>
            <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Tactile Architectural Patterns (Offline)</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              ${BANNER_PATTERNS.map(pat => `
                <button onclick="applyNoteBanner({ type: 'pattern', value: '${pat.value}', patternSize: '${pat.patternSize}', bgColor: '${pat.bgColor}' })" class="group relative h-16 rounded-[4px] overflow-hidden border border-[var(--border-hairline)] hover:border-[var(--border-strong)] transition-all cursor-pointer shadow-sm text-left">
                  <div class="w-full h-full" style="background-image: ${pat.value}; background-size: ${pat.patternSize}; background-color: ${pat.bgColor};"></div>
                  <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-2">
                    <span class="text-white font-mono text-[10px] font-medium drop-shadow">${pat.name}</span>
                  </div>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Presets 3: Curated Photography -->
          <div>
            <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Curated Art & Architecture</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              ${BANNER_PHOTOS.map(ph => `
                <button onclick="applyNoteBanner({ type: 'url', value: '${ph.url}' })" class="group relative h-20 rounded-[4px] overflow-hidden border border-[var(--border-hairline)] hover:border-[var(--border-strong)] transition-all cursor-pointer shadow-sm text-left">
                  <img src="${ph.url}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="${ph.name}" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-2">
                    <span class="text-white font-mono text-[10px] font-medium drop-shadow">${ph.name}</span>
                  </div>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Custom URL & File Upload -->
          <div class="p-4 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-3">
            <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">Custom Image URL or Device Upload</label>
            <div class="flex items-center gap-2">
              <input id="bannerCustomUrlInput" type="url" placeholder="https://images.unsplash.com/photo-..." class="flex-1 px-3 py-1.5 rounded-[3px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none" />
              <button onclick="applyBannerUrlInput()" class="px-3 py-1.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer">
                Apply URL
              </button>
            </div>
            <div class="pt-2 border-t border-[var(--border-hairline)] flex items-center justify-between">
              <span class="font-mono text-[11px] text-[var(--text-secondary)]">Or choose an image from your device:</span>
              <button onclick="triggerBannerUpload()" class="px-3 py-1.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-xs font-mono text-[var(--text-primary)] transition-colors cursor-pointer">
                Upload from Computer...
              </button>
            </div>
          </div>
        </div>
      `;
    } else if (tabKey === 'theme') {
      contentEl.innerHTML = `
        <div class="space-y-6">
          <!-- Accent Colors Palette -->
          <div>
            <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Palette Ink & Accent Color</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              ${ACCENT_THEMES.map(theme => {
                const isActive = state.accentColor === theme.id || (!state.accentColor && theme.id === 'vermilion');
                const color = state.theme === 'dark' ? theme.dark : theme.light;
                return `
                  <button onclick="applyAccentTheme('${theme.id}')" class="p-2.5 rounded-md border flex items-center gap-2.5 transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-[var(--bg-canvas)] border-[var(--accent-vermilion)] shadow-sm'
                      : 'bg-[var(--bg-canvas)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
                  }">
                    <div class="w-5 h-5 rounded-full shrink-0 shadow-xs" style="background-color: ${color}"></div>
                    <div class="min-w-0">
                      <div class="font-mono text-xs font-medium text-[var(--text-primary)] truncate">${theme.name}</div>
                      <div class="font-mono text-[10px] text-[var(--text-tertiary)] uppercase">${theme.id}</div>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>
            <!-- Custom Hex Color -->
            <div class="mt-3 p-3 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-[var(--text-secondary)]">Custom Ink Hex:</span>
                <input type="color" id="customColorPicker" value="${typeof state.accentColor === 'string' && state.accentColor.startsWith('#') ? state.accentColor : '#D95338'}" onchange="applyAccentTheme(this.value)" class="w-7 h-7 rounded border border-[var(--border-hairline)] cursor-pointer bg-transparent" />
              </div>
              <span class="font-mono text-[11px] text-[var(--text-tertiary)]">Dynamically styles links, active tabs & highlights</span>
            </div>
          </div>

          <!-- Atmospheric & Sensory Controls -->
          <div class="p-4 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-3">
            <div class="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">Atmospheric & Sensory Controls</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button onclick="toggleAmbientAura()" class="p-2.5 rounded border border-[var(--border-hairline)] hover:border-[var(--border-strong)] flex items-center justify-between text-left cursor-pointer transition-colors bg-[var(--bg-panel)]">
                <div>
                  <div class="font-mono text-xs text-[var(--text-primary)]">Ambient Breathing Aura</div>
                  <div class="font-mono text-[10px] text-[var(--text-tertiary)]">Luminous hero backdrop glow</div>
                </div>
                <span class="font-mono text-[10px] px-1.5 py-0.5 rounded ${state.ambientAura ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'} font-semibold">${state.ambientAura ? 'ON' : 'OFF'}</span>
              </button>
              <button onclick="toggleCursorSpotlight()" class="p-2.5 rounded border border-[var(--border-hairline)] hover:border-[var(--border-strong)] flex items-center justify-between text-left cursor-pointer transition-colors bg-[var(--bg-panel)]">
                <div>
                  <div class="font-mono text-xs text-[var(--text-primary)]">Cursor Ambient Spotlight</div>
                  <div class="font-mono text-[10px] text-[var(--text-tertiary)]">Magnetic dynamic canvas glow</div>
                </div>
                <span class="font-mono text-[10px] px-1.5 py-0.5 rounded ${state.cursorSpotlight ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'} font-semibold">${state.cursorSpotlight ? 'ON' : 'OFF'}</span>
              </button>
              <button onclick="toggleMechanicalTyping()" class="p-2.5 rounded border border-[var(--border-hairline)] hover:border-[var(--border-strong)] flex items-center justify-between text-left cursor-pointer transition-colors bg-[var(--bg-panel)]">
                <div>
                  <div class="font-mono text-xs text-[var(--text-primary)]">Mechanical Typing Sound</div>
                  <div class="font-mono text-[10px] text-[var(--text-tertiary)]">Tactile switch audio while typing</div>
                </div>
                <span class="font-mono text-[10px] px-1.5 py-0.5 rounded ${state.mechanicalTyping ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'} font-semibold">${state.mechanicalTyping ? 'ON' : 'OFF'}</span>
              </button>
              <button onclick="toggleSoundSetting()" class="p-2.5 rounded border border-[var(--border-hairline)] hover:border-[var(--border-strong)] flex items-center justify-between text-left cursor-pointer transition-colors bg-[var(--bg-panel)]">
                <div>
                  <div class="font-mono text-xs text-[var(--text-primary)]">Tactile Haptic Audio</div>
                  <div class="font-mono text-[10px] text-[var(--text-tertiary)]">Clicks, chimes & sonar feedback</div>
                </div>
                <span class="font-mono text-[10px] px-1.5 py-0.5 rounded ${state.soundEnabled !== false ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'} font-semibold">${state.soundEnabled !== false ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </div>

          <!-- Theme Mode -->
          <div>
            <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Workspace Theme Mode</label>
            <div class="grid grid-cols-2 gap-3">
              <button onclick="if(state.theme !== 'dark') toggleTheme()" class="p-3.5 rounded-md border text-left transition-all cursor-pointer ${
                state.theme === 'dark'
                  ? 'bg-[var(--bg-canvas)] border-[var(--accent-vermilion)] shadow-sm'
                  : 'bg-[var(--bg-canvas)] border-[var(--border-hairline)] opacity-70 hover:opacity-100'
              }">
                <div class="flex items-center gap-2 mb-1">
                  <div class="w-3.5 h-3.5 rounded-full bg-[#181817] border border-white/20"></div>
                  <span class="font-serif font-semibold text-xs text-[var(--text-primary)]">Obsidian Carbon (Dark)</span>
                </div>
                <p class="font-mono text-[10px] text-[var(--text-tertiary)]">Deep tactile darkroom interface with hairline contrast.</p>
              </button>

              <button onclick="if(state.theme === 'dark') toggleTheme()" class="p-3.5 rounded-md border text-left transition-all cursor-pointer ${
                state.theme !== 'dark'
                  ? 'bg-[var(--bg-canvas)] border-[var(--accent-vermilion)] shadow-sm'
                  : 'bg-[var(--bg-canvas)] border-[var(--border-hairline)] opacity-70 hover:opacity-100'
              }">
                <div class="flex items-center gap-2 mb-1">
                  <div class="w-3.5 h-3.5 rounded-full bg-[#F9F8F6] border border-black/20"></div>
                  <span class="font-serif font-semibold text-xs text-[var(--text-primary)]">Archival Vellum (Light)</span>
                </div>
                <p class="font-mono text-[10px] text-[var(--text-tertiary)]">Warm historical paper and library drafting aesthetic.</p>
              </button>
            </div>
          </div>

          <!-- Architectural Ruled Header Band -->
          <div class="p-3.5 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-center justify-between">
            <div>
              <div class="font-serif font-semibold text-xs text-[var(--text-primary)]">Architectural Header Grid Band</div>
              <div class="font-mono text-[10px] text-[var(--text-tertiary)]">Show drafting grid band above documents when no banner is set.</div>
            </div>
            <button onclick="toggleHeaderGrid(); switchCustomizerTab('theme');" class="px-3 py-1.5 rounded-[3px] border font-mono text-xs transition-colors cursor-pointer ${
              state.showHeaderGrid ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)]' : 'bg-[var(--bg-panel)] text-[var(--text-tertiary)] border-[var(--border-hairline)]'
            }">
              ${state.showHeaderGrid ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>
        </div>
      `;
} else if (tabKey === 'layout') {
      const activeFontId = state.fontFamily || (state.fontStyle === 'serif' ? 'newsreader' : (state.fontStyle === 'mono' ? 'jetbrains' : 'inter'));
      const currentSize = state.fontSize || 'standard';
      const currentSpacing = state.lineSpacing || 'standard';
      const currentWidth = state.layoutWidth || 'standard';
      const currentHeading = state.headingFont || 'match';
      const isJustified = state.textAlign === 'justify';
      const hasDropCap = !!state.enableDropCap;
      const hasIndent = !!state.bookIndent;
      const hasLigatures = state.enableLigatures !== false;
      const currentWeight = state.fontWeight || 'normal';

      contentEl.innerHTML = `
        <div class="space-y-6">
          <!-- Prose Typeface Collection -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <label class="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">Curated Typeface Collection (13 Typefaces)</label>
              <span class="font-mono text-[10px] text-[var(--text-tertiary)]">Active: <strong class="text-[var(--accent-vermilion)]">${activeFontId.toUpperCase()}</strong></span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-72 overflow-y-auto pr-1">
              ${AVAILABLE_FONTS.map(font => {
                const isSelected = activeFontId === font.id;
                return `
                  <button onclick="applyFontFamily('${font.id}')"
                          class="p-3 rounded-md border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[var(--bg-canvas)] border-[var(--accent-vermilion)] shadow-sm ring-1 ring-[var(--accent-vermilion)]'
                              : 'bg-[var(--bg-canvas)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
                          }">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-base ${font.class} font-semibold ${isSelected ? 'text-[var(--accent-vermilion)]' : 'text-[var(--text-primary)]'}">
                        ${font.name}
                      </span>
                      <span class="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[var(--bg-panel)] border border-[var(--border-hairline)] text-[var(--text-tertiary)]">
                        ${font.category}
                      </span>
                    </div>
                    <div class="text-xs ${font.class} text-[var(--text-secondary)] mb-1 leading-snug truncate">
                      The quick brown fox jumps over the lazy dog.
                    </div>
                    <div class="font-mono text-[10px] text-[var(--text-tertiary)] leading-tight">${font.desc}</div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Heading Font Pairing Engine -->
          <div>
            <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold mb-2">Heading Typeface Pairing</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              ${HEADING_FONT_PAIRINGS.map(hp => {
                const isSelected = currentHeading === hp.id;
                return `
                  <button onclick="applyHeadingFont('${hp.id}')"
                          class="p-2.5 rounded-md border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[var(--bg-canvas)] border-[var(--accent-vermilion)] shadow-sm'
                              : 'bg-[var(--bg-canvas)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
                          }">
                    <div class="font-mono text-xs font-semibold ${isSelected ? 'text-[var(--accent-vermilion)]' : 'text-[var(--text-primary)]'} mb-0.5">${hp.name}</div>
                    <div class="font-mono text-[10px] text-[var(--text-tertiary)] leading-tight">${hp.desc}</div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Body Scale & Line Height Density -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Body Font Size -->
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">Body Font Size Scale</label>
                <div class="flex items-center gap-1">
                  <button onclick="stepFontSize(-1)" class="w-5 h-5 rounded border border-[var(--border-hairline)] hover:bg-[var(--bg-hover)] flex items-center justify-center font-mono text-[10px]" title="Decrease size">A-</button>
                  <button onclick="stepFontSize(1)" class="w-5 h-5 rounded border border-[var(--border-hairline)] hover:bg-[var(--bg-hover)] flex items-center justify-center font-mono text-[10px] font-bold" title="Increase size">A+</button>
                </div>
              </div>
              <div class="grid grid-cols-5 gap-1.5">
                ${FONT_SIZE_SCALES.map(s => `
                  <button onclick="applyFontSize('${s.id}')"
                          class="py-2 px-1 rounded-md border text-center transition-all cursor-pointer ${
                            currentSize === s.id
                              ? 'bg-[var(--accent-vermilion-tint)] border-[var(--accent-vermilion)] text-[var(--accent-vermilion)] font-medium shadow-sm'
                              : 'bg-[var(--bg-canvas)] border-[var(--border-hairline)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                          }">
                    <div class="font-mono text-xs font-semibold">${s.label}</div>
                    <div class="font-mono text-[9px] text-[var(--text-tertiary)]">${s.name}</div>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Line Spacing / Density -->
            <div>
              <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold mb-1.5">Line Spacing / Density</label>
              <div class="grid grid-cols-4 gap-1.5">
                ${[
                  { id: 'compact', name: '1.4', label: 'Compact' },
                  { id: 'standard', name: '1.6', label: 'Standard' },
                  { id: 'relaxed', name: '1.85', label: 'Relaxed' },
                  { id: 'airy', name: '2.1', label: 'Airy' }
                ].map(s => `
                  <button onclick="applyLineSpacing('${s.id}')"
                          class="py-2 px-1 rounded-md border text-center transition-all cursor-pointer ${
                            currentSpacing === s.id
                              ? 'bg-[var(--accent-vermilion-tint)] border-[var(--accent-vermilion)] text-[var(--accent-vermilion)] font-medium shadow-sm'
                              : 'bg-[var(--bg-canvas)] border-[var(--border-hairline)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                          }">
                    <div class="font-mono text-xs font-semibold">${s.name}</div>
                    <div class="font-mono text-[9px] text-[var(--text-tertiary)]">${s.label}</div>
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Document Canvas Reading Measure Width -->
          <div>
            <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold mb-2">Reading Measure & Canvas Width</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              ${[
                { id: 'standard', name: 'Standard (680px)', desc: 'Optimal typographic reading measure' },
                { id: 'wide', name: 'Wide (860px)', desc: 'Spacious for tables & wide code blocks' },
                { id: 'ultrawide', name: 'Studio (1080px)', desc: 'Extended multi-column studio canvas' },
                { id: 'full', name: 'Full Width (Fluid)', desc: 'Edge-to-edge adaptive margins' }
              ].map(w => `
                <button onclick="applyLayoutWidth('${w.id}')"
                        class="p-3 rounded-md border text-left transition-all cursor-pointer ${
                          currentWidth === w.id
                            ? 'bg-[var(--bg-canvas)] border-[var(--accent-vermilion)] shadow-sm'
                            : 'bg-[var(--bg-canvas)] border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
                        }">
                  <div class="font-mono text-xs font-semibold text-[var(--text-primary)] mb-1">${w.name}</div>
                  <div class="font-mono text-[10px] text-[var(--text-tertiary)] leading-snug">${w.desc}</div>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Editorial Publishing & Typesetting Features -->
          <div>
            <label class="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold mb-2">Editorial Publishing Flourishes</label>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              <!-- Justify Alignment -->
              <div class="p-3 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-center justify-between">
                <div>
                  <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">Justify Alignment</div>
                  <div class="font-mono text-[10px] text-[var(--text-tertiary)]">Hyphenated book margins</div>
                </div>
                <button onclick="toggleTextAlign()" class="px-2.5 py-1 rounded-[3px] border font-mono text-[10px] transition-colors cursor-pointer ${
                  isJustified ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)]' : 'bg-[var(--bg-panel)] text-[var(--text-tertiary)] border-[var(--border-hairline)]'
                }">
                  ${isJustified ? 'ON' : 'OFF'}
                </button>
              </div>

              <!-- Drop Cap First Letter -->
              <div class="p-3 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-center justify-between">
                <div>
                  <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">Drop Cap Letter</div>
                  <div class="font-mono text-[10px] text-[var(--text-tertiary)]">Literary initial flourish</div>
                </div>
                <button onclick="toggleDropCap()" class="px-2.5 py-1 rounded-[3px] border font-mono text-[10px] transition-colors cursor-pointer ${
                  hasDropCap ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)]' : 'bg-[var(--bg-panel)] text-[var(--text-tertiary)] border-[var(--border-hairline)]'
                }">
                  ${hasDropCap ? 'ON' : 'OFF'}
                </button>
              </div>

              <!-- Book Paragraph Indent -->
              <div class="p-3 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-center justify-between">
                <div>
                  <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">Book Indent</div>
                  <div class="font-mono text-[10px] text-[var(--text-tertiary)]">First-line 1.5em indent</div>
                </div>
                <button onclick="toggleBookIndent()" class="px-2.5 py-1 rounded-[3px] border font-mono text-[10px] transition-colors cursor-pointer ${
                  hasIndent ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)]' : 'bg-[var(--bg-panel)] text-[var(--text-tertiary)] border-[var(--border-hairline)]'
                }">
                  ${hasIndent ? 'ON' : 'OFF'}
                </button>
              </div>

              <!-- Code & Ligatures Toggle -->
              <div class="p-3 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-center justify-between">
                <div>
                  <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">Code Ligatures</div>
                  <div class="font-mono text-[10px] text-[var(--text-tertiary)]">Programming ligatures</div>
                </div>
                <button onclick="toggleLigatures()" class="px-2.5 py-1 rounded-[3px] border font-mono text-[10px] transition-colors cursor-pointer ${
                  hasLigatures ? 'bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border-[var(--accent-vermilion)]' : 'bg-[var(--bg-panel)] text-[var(--text-tertiary)] border-[var(--border-hairline)]'
                }">
                  ${hasLigatures ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (tabKey === 'guarded') {
      contentEl.innerHTML = `
        <div class="space-y-6">
          <!-- Safety Philosophy Notice -->
          <div class="p-4 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)]">
            <div class="flex items-center gap-2 mb-2 text-[var(--text-primary)]">
              <div class="w-5 h-5 rounded-[2px] bg-emerald-500/10 text-emerald-500 flex items-center justify-center"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
              <h3 class="font-serif text-sm font-semibold">Protected Core Architecture & Guardrails</h3>
            </div>
            <p class="text-xs text-[var(--text-secondary)] leading-relaxed">
              PK Note strictly isolates visual customizations (covers, accents, widths, fonts) from the foundational data layer. Your core documents, block hierarchy, calendar chronology, and data backups cannot be compromised or broken by aesthetic settings.
            </p>
          </div>

          <!-- Guarded Checklist -->
          <div class="space-y-2.5">
            <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-start gap-3">
              <svg class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <div>
                <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">Zero Data Alteration</div>
                <div class="font-mono text-[11px] text-[var(--text-tertiary)]">Block contents, markdown structures, checklists, and document titles remain untouched.</div>
              </div>
            </div>

            <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-start gap-3">
              <svg class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <div>
                <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">Bi-directional Graph & Wikilink Integrity</div>
                <div class="font-mono text-[11px] text-[var(--text-tertiary)]">Links ([[...]]), tags (#tag), and knowledge graph traversal are permanently preserved.</div>
              </div>
            </div>

            <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-start gap-3">
              <svg class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <div>
                <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">Protected Calendar Chronology</div>
                <div class="font-mono text-[11px] text-[var(--text-tertiary)]">Events, timeblocks, ISO timestamps, and daily log relationships operate independently.</div>
              </div>
            </div>

            <div class="p-3 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-start gap-3">
              <svg class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <div>
                <div class="font-mono text-xs font-semibold text-[var(--text-primary)]">Global Shortcut Access</div>
                <div class="font-mono text-[11px] text-[var(--text-tertiary)]">Universal keybindings (Cmd+K, Cmd+N, Cmd+S, Cmd+P, Esc) remain locked and reliable.</div>
              </div>
            </div>
          </div>

          <!-- Revert to Default Section -->
          <div class="p-4 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-center justify-between">
            <div>
              <div class="font-serif font-semibold text-xs text-[var(--text-primary)]">Reset Visual Styles to Default</div>
              <div class="font-mono text-[10px] text-[var(--text-tertiary)]">Reverts accent, width, typography, and banners to factory Archival Vermilion.</div>
            </div>
            <button onclick="resetVisualCustomizationsToDefault()" class="px-3.5 py-1.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--accent-vermilion-tint)] text-[var(--accent-vermilion)] border border-[var(--accent-vermilion)] font-mono text-xs font-medium transition-colors cursor-pointer">
              ↺ Reset Defaults
            </button>
          </div>
        </div>
      `;
    }
  }


  // =========================================================================
  // 17. 1000X COOLER ENGINE: HAPTIC AUDIO, CONFETTI, ZEN FOCUS, AURA & 3D TILT
  // =========================================================================
  function getAudioContext() {
    if (!window._pkAudioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        window._pkAudioCtx = new AudioCtx();
      }
    }
    if (window._pkAudioCtx && window._pkAudioCtx.state === 'suspended') {
      window._pkAudioCtx.resume().catch(() => {});
    }
    return window._pkAudioCtx;
  }

  function playContextMenuSound() {
    if (state.soundEnabled === false) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      // Layer 1: Crisp tactile pop
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(560, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.038);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.045);

      // Layer 2: Subtle acoustic glass harmonic
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1180, ctx.currentTime + 0.008);
      osc2.frequency.exponentialRampToValueAtTime(840, ctx.currentTime + 0.12);
      gain2.gain.setValueAtTime(0.028, ctx.currentTime + 0.008);
      gain2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.13);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(ctx.currentTime + 0.008);
      osc2.stop(ctx.currentTime + 0.13);
    } catch (e) {}
  }

  function playTypingSound(key) {
    if (state.soundEnabled === false || state.mechanicalTyping === false) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      let baseFreq = 390;
      let duration = 0.024;
      let vol = 0.03;

      if (key === 'Enter') {
        baseFreq = 260;
        duration = 0.042;
        vol = 0.05;
      } else if (key === ' ') {
        baseFreq = 320;
        duration = 0.032;
        vol = 0.04;
      } else if (key === 'Backspace') {
        baseFreq = 440;
        duration = 0.022;
        vol = 0.025;
      }

      const jitter = 0.94 + Math.random() * 0.12;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(baseFreq * jitter, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110 * jitter, ctx.currentTime + duration);

      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0005, ctx.currentTime + duration + 0.005);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration + 0.005);
    } catch (e) {}
  }

  function playMechanicalClick(pitch = 1.0) {
    if (state.soundEnabled === false) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const jitter = 0.96 + Math.random() * 0.08;
      osc.frequency.setValueAtTime(440 * pitch * jitter, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140 * pitch, ctx.currentTime + 0.018);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0005, ctx.currentTime + 0.022);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.022);
    } catch (e) {}
  }

  function playPopSound() {
    if (state.soundEnabled === false) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(280, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.035);
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0005, ctx.currentTime + 0.045);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.045);
    } catch (e) {}
  }

  function playChimeSound() {
    if (state.soundEnabled === false) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.045);
        gain.gain.setValueAtTime(0.04, ctx.currentTime + i * 0.045);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.045 + 0.32);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.045);
        osc.stop(ctx.currentTime + i * 0.045 + 0.32);
      });
    } catch (e) {}
  }

  function playWhooshSound() {
    if (state.soundEnabled === false) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(190, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(380, ctx.currentTime + 0.075);
      gain.gain.setValueAtTime(0.022, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0005, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  }

  function toggleSoundSetting() {
    state.soundEnabled = state.soundEnabled === false ? true : false;
    updateSoundIconUI();
    persistState();
    if (state.soundEnabled) {
      playPopSound();
      showToast('Tactile Haptic Audio ENABLED');
    } else {
      showToast('Tactile Haptic Audio MUTED');
    }
  }

  function updateSoundIconUI() {
    const onIcon = document.getElementById('soundOnIcon');
    const offIcon = document.getElementById('soundOffIcon');
    if (!onIcon || !offIcon) return;
    if (state.soundEnabled === false) {
      onIcon.classList.add('hidden');
      offIcon.classList.remove('hidden');
    } else {
      onIcon.classList.remove('hidden');
      offIcon.classList.add('hidden');
    }
  }

  // --- PARTICLE CONFETTI CELEBRATION ENGINE ---
  let pkParticles = [];
  let pkAnimFrame = null;

  function triggerCelebration(originX, originY, count = 35) {
    if (window.PK_LITE_MODE) return;
    const canvas = document.getElementById('celebrationCanvas');
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const rootStyle = getComputedStyle(document.documentElement);
    const accent = rootStyle.getPropertyValue('--accent-vermilion').trim() || '#D95338';
    const colors = [accent, '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#FFFFFF'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.5 + Math.random() * 6.5;
      pkParticles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3.0,
        size: 3 + Math.random() * 4.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: 0.015 + Math.random() * 0.012,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 14,
        isCircle: Math.random() > 0.65
      });
    }

    if (!pkAnimFrame) {
      animateCelebrationCanvas();
    }
  }

  function animateCelebrationCanvas() {
    const canvas = document.getElementById('celebrationCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pkParticles = pkParticles.filter(p => p.alpha > 0.02);
    pkParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.16; // Gravity
      p.vx *= 0.985; // Air resistance
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      if (p.isCircle) {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      }
      ctx.restore();
    });

    if (pkParticles.length > 0) {
      pkAnimFrame = requestAnimationFrame(animateCelebrationCanvas);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pkAnimFrame = null;
    }
  }

  // --- ZEN FOCUS MODE ENGINE ---
  function toggleZenMode() {
    state.zenMode = !state.zenMode;
    const hud = document.getElementById('zenModeIndicator');
    if (state.zenMode) {
      document.body.classList.add('zen-active');
      if (hud) hud.classList.remove('hidden');
      playChimeSound();
      showToast('Zen Focus Mode Activated (Esc or Cmd+D to exit)');
    } else {
      document.body.classList.remove('zen-active');
      if (hud) hud.classList.add('hidden');
      playMechanicalClick(1.1);
      showToast('Exited Zen Focus Mode');
    }
  }

  // --- DYNAMIC AMBIENT AURA GLOW TOGGLE ---
  function toggleAmbientAura() {
    state.ambientAura = state.ambientAura === false ? true : false;
    const aura = document.getElementById('ambientAuraGlow');
    if (aura) {
      if (state.ambientAura) {
        aura.classList.remove('hidden');
      } else {
        aura.classList.add('hidden');
      }
    }
    persistState();
    showToast(`Ambient Atmospheric Aura ${state.ambientAura ? 'ENABLED' : 'DISABLED'}`);
  }

  // --- LIVE READING PROGRESS BAR & 3D TILT ENGINE (Throttled & Zero-Reflow on Mobile!) ---
  function init1000xCoolerEffects() {
    updateSoundIconUI();
    if (state.ambientAura === false || window.PK_LITE_MODE) {
      const aura = document.getElementById('ambientAuraGlow');
      if (aura) aura.classList.add('hidden');
    }

    // rAF-Throttled Scroll Progress Listener (Zero scroll jank on 2019 phones!)
    const scrollArea = document.getElementById('documentScrollArea');
    if (scrollArea) {
      let scrollProgRaf = null;
      scrollArea.addEventListener('scroll', () => {
        if (scrollProgRaf) return;
        scrollProgRaf = requestAnimationFrame(() => {
          scrollProgRaf = null;
          const maxScroll = scrollArea.scrollHeight - scrollArea.clientHeight;
          const pct = maxScroll > 5 ? (scrollArea.scrollTop / maxScroll) * 100 : 0;
          const bar = document.getElementById('docReadingProgressBar');
          if (bar) bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
          const badge = document.getElementById('docScrollProgressBadge');
          if (badge) badge.textContent = `${Math.round(pct)}%`;
        });
      }, { passive: true });
    }

    // 3D Tilt Physics on Banner Container (Desktop mouse only — skipped on mobile!)
    const bannerContainer = document.getElementById('docBannerContainer');
    if (bannerContainer && !window.PK_LITE_MODE) {
      bannerContainer.classList.add('tilt-card');
      bannerContainer.addEventListener('mousemove', (e) => {
        const note = getActiveNote();
        if (!note || !note.banner) return;
        const rect = bannerContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -3.5;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3.5;
        bannerContainer.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      });
      bannerContainer.addEventListener('mouseleave', () => {
        bannerContainer.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      });
    }

    // Global Keydown for Zen Mode (Cmd+D / Esc) — removed duplicate key-click audio!
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        toggleZenMode();
        return;
      }
      if (e.key === 'Escape' && state.zenMode) {
        toggleZenMode();
        return;
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init1000xCoolerEffects);
  } else {
    setTimeout(init1000xCoolerEffects, 50);
  }


function openMobileMoreSheet() {
  const active = getActiveNote();
  const titleEl = document.getElementById('mobileSheetDocTitle');
  if (titleEl && active) {
    titleEl.textContent = active.title || 'Untitled Document';
  }
  const voiceBadge = document.getElementById('mobileSheetVoiceBadge');
  if (voiceBadge) {
    const settings = getVoiceSettings();
    if (settings.engine === 'kokoro') {
      const kv = getSelectedKokoroVoice();
      const role = kv.category === 'cute' ? 'Cute' : (kv.gender === 'male' ? 'Male' : 'Female');
      voiceBadge.textContent = `${kv.name} · ${role}`;
    } else {
      const dv = getSelectedVoiceModel();
      voiceBadge.textContent = dv ? dv.name.slice(0, 18) : 'Device Native';
    }
  }
  const readLabel = document.getElementById('mobileSheetReadBtnLabel');
  if (readLabel) {
    readLabel.textContent = isSpeechAudioActive ? 'Stop Reading' : 'Read Note Aloud';
  }
  const sheet = document.getElementById('mobileMoreSheetBackdrop');
  if (sheet) {
    sheet.classList.remove('hidden');
    playWhooshSound();
  }
}

function closeMobileMoreSheet() {
  const sheet = document.getElementById('mobileMoreSheetBackdrop');
  if (sheet) sheet.classList.add('hidden');
}


// =========================================================================
// MOBILE & DOCUMENT UNDO / REDO HISTORY ENGINE
// =========================================================================
const noteUndoStacks = new Map();
const noteRedoStacks = new Map();
let isUndoRedoOperation = false;
let typingSnapshotTimer = null;
let isTypingBurst = false;
let lastDeletedNote = null;

function getNoteUndoStack(noteId) {
  if (!noteUndoStacks.has(noteId)) noteUndoStacks.set(noteId, []);
  return noteUndoStacks.get(noteId);
}

function getNoteRedoStack(noteId) {
  if (!noteRedoStacks.has(noteId)) noteRedoStacks.set(noteId, []);
  return noteRedoStacks.get(noteId);
}

function takeSnapshot(reason = '') {
  if (isUndoRedoOperation) return;
  const note = getActiveNote();
  if (!note) return;
  const stack = getNoteUndoStack(note.id);
  const snap = {
    title: note.title,
    blocks: JSON.parse(JSON.stringify(note.blocks)),
    timestamp: Date.now()
  };

  if (stack.length > 0) {
    const last = stack[stack.length - 1];
    if (last.title === snap.title && JSON.stringify(last.blocks) === JSON.stringify(snap.blocks)) {
      return;
    }
  }

  stack.push(snap);
  const maxSnaps = window.PK_LITE_MODE ? 15 : 40;
  if (stack.length > maxSnaps) stack.shift();
  noteRedoStacks.set(note.id, []);
  updateMobileUndoButtons();
}

function recordTypingChange() {
  if (isUndoRedoOperation) return;
  if (!isTypingBurst) {
    takeSnapshot('typing-start');
    isTypingBurst = true;
  }
  clearTimeout(typingSnapshotTimer);
  typingSnapshotTimer = setTimeout(() => {
    isTypingBurst = false;
    takeSnapshot('typing-end');
  }, 600);
}

function performUndo() {
  // 1. If autocorrect undo is active, revert autocorrect first
  if (typeof lastAutocorrect !== 'undefined' && lastAutocorrect) {
    undoLastAutocorrection();
    showToast('↶ Autocorrect undone', 'ochre');
    updateMobileUndoButtons();
    return;
  }

  // 2. If a note was deleted recently, restore it
  if (lastDeletedNote) {
    const restored = lastDeletedNote;
    lastDeletedNote = null;
    state.notes.unshift(restored);
    state.activeNoteId = restored.id;
    renderAll();
    persistState();
    showToast(`↶ Restored "${restored.title}"`);
    if (typeof playMechanicalClick === 'function') playMechanicalClick(0.8);
    updateMobileUndoButtons();
    return;
  }

  const note = getActiveNote();
  if (!note) return;
  const undoStack = getNoteUndoStack(note.id);
  const redoStack = getNoteRedoStack(note.id);

  if (undoStack.length === 0) {
    if (document.activeElement && document.activeElement.isContentEditable) {
      const executed = document.execCommand('undo');
      if (executed) {
        showToast('↶ Undone');
        return;
      }
    }
    showToast('Nothing to undo', 'ochre');
    return;
  }

  const currentSnap = {
    title: note.title,
    blocks: JSON.parse(JSON.stringify(note.blocks)),
    timestamp: Date.now()
  };
  redoStack.push(currentSnap);
  if (redoStack.length > 40) redoStack.shift();

  const prevSnap = undoStack.pop();
  isUndoRedoOperation = true;

  note.title = prevSnap.title;
  note.blocks = JSON.parse(JSON.stringify(prevSnap.blocks));
  note.updatedAt = TODAY_KEY;

  const titleInput = document.getElementById('docTitleInput');
  if (titleInput) titleInput.innerText = note.title;
  const breadcrumbTitle = document.getElementById('breadcrumbTitleText');
  if (breadcrumbTitle) breadcrumbTitle.textContent = note.title || 'Untitled Document';

  renderBlocks(note);
  updateWordCount(note);
  renderInspector();
  persistState();

  isUndoRedoOperation = false;
  updateMobileUndoButtons();

  if (typeof playMechanicalClick === 'function') playMechanicalClick(0.7);
  showToast('↶ Undone');
}

function performRedo() {
  const note = getActiveNote();
  if (!note) return;
  const undoStack = getNoteUndoStack(note.id);
  const redoStack = getNoteRedoStack(note.id);

  if (redoStack.length === 0) {
    showToast('Nothing to redo', 'ochre');
    return;
  }

  const currentSnap = {
    title: note.title,
    blocks: JSON.parse(JSON.stringify(note.blocks)),
    timestamp: Date.now()
  };
  undoStack.push(currentSnap);

  const nextSnap = redoStack.pop();
  isUndoRedoOperation = true;

  note.title = nextSnap.title;
  note.blocks = JSON.parse(JSON.stringify(nextSnap.blocks));
  note.updatedAt = TODAY_KEY;

  const titleInput = document.getElementById('docTitleInput');
  if (titleInput) titleInput.innerText = note.title;
  const breadcrumbTitle = document.getElementById('breadcrumbTitleText');
  if (breadcrumbTitle) breadcrumbTitle.textContent = note.title || 'Untitled Document';

  renderBlocks(note);
  updateWordCount(note);
  renderInspector();
  persistState();

  isUndoRedoOperation = false;
  updateMobileUndoButtons();

  if (typeof playMechanicalClick === 'function') playMechanicalClick(0.7);
  showToast('↷ Redone');
}

function updateMobileUndoButtons() {
  const note = getActiveNote();
  if (!note) return;
  const undoStack = getNoteUndoStack(note.id);
  const redoStack = getNoteRedoStack(note.id);

  const headerUndoBtn = document.getElementById('mobileHeaderUndoBtn');
  if (headerUndoBtn) {
    headerUndoBtn.style.opacity = (undoStack.length > 0 || lastDeletedNote) ? '1' : '0.45';
  }

  const accUndoBtn = document.getElementById('mobileUndoBtn');
  if (accUndoBtn) {
    accUndoBtn.style.opacity = undoStack.length > 0 ? '1' : '0.45';
  }

  const accRedoBtn = document.getElementById('mobileRedoBtn');
  if (accRedoBtn) {
    accRedoBtn.style.opacity = redoStack.length > 0 ? '1' : '0.45';
  }
}


// =========================================================================
// 18. POWER PRODUCTIVITY SUITE (100% Client-Side, Zero Server, Zero Emoji)
//     Dictation · Find & Replace · Templates · Focus Timer · MD Import · Lock
// =========================================================================

// --- 18A. REMADE REAL-TIME ON-DEVICE VOICE-TO-TEXT STREAMING ENGINE ---
//     100% Client-Side · Zero Server · Zero "network" Error Loops · Works Offline & Hears Whispers
//     Streams live words directly into your note & HUD as you talk via background Web Worker + Whisper AI
const WHISPER_STT_ESM_URL = 'https://esm.sh/@huggingface/transformers@3.5.1';
const WHISPER_STT_MODEL_ID = 'onnx-community/whisper-tiny.en';

const DICTATION_GAIN_LEVELS = [
  { id: 'whisper', gain: 4.5, maxBoost: 48, label: 'Whisper +15dB', desc: 'Whisper pre-amp (+15dB)' },
  { id: 'ultra',   gain: 8.5, maxBoost: 90, label: 'Ultra +22dB',   desc: 'Ultra-quiet whisper (+22dB)' },
  { id: 'normal',  gain: 1.4, maxBoost: 18, label: 'Normal 1.0x',   desc: 'Standard studio mic' }
];

let pkDictationGainIdx = 0;        // Defaults to Whisper +15dB
let isDictationActive = false;
let isDictationBusy = false;       // True while Whisper Worker/pipeline is running an inference pass
let pkDictClosing = false;

// Web Audio Capture & 60fps Acoustic Waveform State
let pkDictAudioCtx = null;
let pkDictMediaStream = null;
let pkDictGainNode = null;
let pkDictAnalyser = null;
let pkDictCaptureNode = null;      // AudioWorkletNode (primary) or ScriptProcessorNode (fallback)
let pkDictWaveAnimId = null;
let pkDictTimerInterval = null;
let pkDictStreamInterval = null;
let pkDictStartedAt = 0;
let pkDictSampleRate = 48000;

// Rolling Real-Time Utterance Buffer + Adaptive Noise-Floor VAD
let pkStreamChunks = [];
let pkStreamSamples = 0;
let pkLastTranscribedSamples = 0;
let pkSpeechHeard = false;
let pkSpeechStartTs = 0;
let pkLastSpeechTs = 0;
let pkNoiseFloor = 0.04;
let pkRawMicPeakRecent = 0;

// Real-Time Live Note Binding State (words stream directly into this block!)
let pkLiveNoteId = null;
let pkLiveBlockId = null;
let pkLiveBlockBaseText = '';
let pkSessionCommittedText = '';
let pkCurrentDraftText = '';

// On-Device Whisper AI Pipeline Singleton (~39 MB q8 WASM, cached offline once in browser CacheStorage)
let pkWhisperPipeline = null;
let pkWhisperLoadPromise = null;

function updateDictationGainUI() {
  const cfg = DICTATION_GAIN_LEVELS[pkDictationGainIdx] || DICTATION_GAIN_LEVELS[0];
  const pill = document.getElementById('pkDictationGainPill');
  if (pill) pill.textContent = cfg.label;
}

function cycleDictationWhisperGain() {
  pkDictationGainIdx = (pkDictationGainIdx + 1) % DICTATION_GAIN_LEVELS.length;
  const cfg = DICTATION_GAIN_LEVELS[pkDictationGainIdx];
  if (pkDictGainNode && pkDictAudioCtx) {
    pkDictGainNode.gain.setTargetAtTime(cfg.gain, pkDictAudioCtx.currentTime, 0.04);
  }
  pkNoiseFloor = 0.04;
  updateDictationGainUI();
  const sigEl = document.getElementById('pkDictationSignalLabel');
  if (sigEl) sigEl.textContent = cfg.desc;
  if (typeof pkHaptic === 'function') pkHaptic(8);
  showToast(`Mic sensitivity: ${cfg.label}`);
}

function setDictationProgress(visible, pct = 0, statusText = null) {
  const track = document.getElementById('pkDictationProgressTrack');
  const bar = document.getElementById('pkDictationProgressBar');
  const statusBadge = document.getElementById('pkDictationStatusBadge');
  if (track) track.classList.toggle('hidden', !visible);
  if (bar) bar.style.width = `${Math.max(5, Math.min(100, pct))}%`;
  if (statusText && statusBadge) statusBadge.textContent = statusText;
}

function renderDictationLivePreview() {
  const preview = document.getElementById('pkDictationPreview');
  if (!preview) return;
  const committed = pkSessionCommittedText.trim();
  const draft = pkCurrentDraftText.trim();

  if (!committed && !draft) {
    if (!pkWhisperPipeline) {
      preview.innerHTML = '<span class="text-[var(--text-tertiary)] italic">Loading offline speech AI (cached once ~39 MB) — go ahead and speak or whisper now...</span>';
    } else {
      preview.innerHTML = '<span class="text-[var(--text-tertiary)] italic">Start speaking or whispering — words stream live here and directly into your note...</span>';
    }
    return;
  }

  const committedHtml = committed ? `<span class="text-[var(--text-primary)]">${escapeHtml(committed)}</span>` : '';
  const sep = committed && draft ? ' ' : '';
  const draftHtml = draft
    ? `<span class="text-[var(--accent-vermilion)] italic">${escapeHtml(draft)}</span><span class="inline-block w-[2px] h-[13px] ml-0.5 align-middle bg-[var(--accent-vermilion)] animate-pulse"></span>`
    : '<span class="inline-block w-[2px] h-[13px] ml-1 align-middle bg-[var(--accent-vermilion)]/60 animate-pulse"></span>';

  preview.innerHTML = committedHtml + sep + draftHtml;
  preview.scrollTop = preview.scrollHeight;
}

async function ensureWhisperEngineReady() {
  if (typeof releaseUnusedAIEngines === 'function') releaseUnusedAIEngines('whisper');
  if (pkWhisperPipeline) return pkWhisperPipeline;
  if (pkWhisperLoadPromise) return pkWhisperLoadPromise;

  setDictationProgress(true, 10, 'LOADING AI...');
  const sigEl = document.getElementById('pkDictationSignalLabel');
  if (sigEl) sigEl.textContent = 'Caching offline AI once (~39 MB) — keep speaking...';
  let lastTs = 0;

  pkWhisperLoadPromise = (async () => {
    try {
      const mod = await import(WHISPER_STT_ESM_URL);
      if (mod && mod.env) {
        mod.env.allowLocalModels = false;
        mod.env.useBrowserCache = true;
      }
      const asr = await mod.pipeline('automatic-speech-recognition', WHISPER_STT_MODEL_ID, {
        dtype: 'q8',
        device: 'wasm',
        progress_callback: (info) => {
          if (!info) return;
          const now = performance.now();
          if (info.status === 'progress' && (now - lastTs > 140)) {
            lastTs = now;
            const pct = Math.max(10, Math.min(98, Math.round(typeof info.progress === 'number' ? info.progress : 25)));
            setDictationProgress(true, pct, `LOADING ${pct}%`);
            const s = document.getElementById('pkDictationSignalLabel');
            if (s && isDictationActive) s.textContent = `Caching offline AI once (${pct}%) — keep speaking`;
          }
        }
      });
      pkWhisperPipeline = asr;
      setDictationProgress(false, 100, isDictationActive ? 'LIVE STREAM' : 'READY');
      const s = document.getElementById('pkDictationSignalLabel');
      if (s && isDictationActive) s.textContent = 'AI ready · speak or whisper — words appear live';
      const tag = document.getElementById('pkDictationEngineTag');
      if (tag) tag.textContent = 'Offline AI · Ready';
      renderDictationLivePreview();
      // Immediately stream any speech recorded while the model was loading!
      if (isDictationActive && pkStreamSamples > Math.floor(pkDictSampleRate * 0.45)) {
        runLiveTranscriptionPass(false);
      }
      return asr;
    } catch (err) {
      pkWhisperLoadPromise = null;
      setDictationProgress(false, 0);
      throw err;
    }
  })();
  return pkWhisperLoadPromise;
}

async function transcribeFloat32WithWhisper(pcm16k) {
  const asr = await ensureWhisperEngineReady();
  if (!asr) throw new Error('Speech AI unavailable');
  const out = await asr(pcm16k, { chunk_length_s: 30, stride_length_s: 5 });
  return (out && out.text) ? out.text : '';
}

// Resample clean Float32 PCM to 16 kHz + Linear Whisper Peak Lift (zero harsh clipping, hears -40dB whispers!)
function buildWhisperNormalized16kPCM(chunks, sourceSampleRate) {
  let totalLen = 0;
  for (const c of chunks) totalLen += c.length;
  if (totalLen === 0) return { pcm: new Float32Array(0), peak: 0 };

  const merged = new Float32Array(totalLen);
  let offset = 0;
  for (const c of chunks) {
    merged.set(c, offset);
    offset += c.length;
  }

  const cfgGain = DICTATION_GAIN_LEVELS[pkDictationGainIdx] || DICTATION_GAIN_LEVELS[0];
  if (window.PKWasm && window.PKWasm.ready) {
    const wasmRes = window.PKWasm.resampleAndNormalizePcm(merged, sourceSampleRate, cfgGain.maxBoost || 48);
    if (wasmRes) return wasmRes;
  }

  const targetRate = 16000;
  const ratio = sourceSampleRate / targetRate;
  const outLen = Math.max(1, Math.floor(merged.length / ratio));
  const resampled = new Float32Array(outLen);
  for (let i = 0; i < outLen; i++) {
    const srcIdx = i * ratio;
    const idx0 = Math.floor(srcIdx);
    const idx1 = Math.min(merged.length - 1, idx0 + 1);
    const frac = srcIdx - idx0;
    resampled[i] = merged[idx0] * (1 - frac) + merged[idx1] * frac;
  }

  // Remove DC offset so quiet phone mics normalize accurately
  let mean = 0;
  for (let i = 0; i < resampled.length; i++) mean += resampled[i];
  mean /= resampled.length;

  let peak = 0;
  for (let i = 0; i < resampled.length; i++) {
    resampled[i] -= mean;
    const a = Math.abs(resampled[i]);
    if (a > peak) peak = a;
  }

  if (peak > 0.00016) {
    const cfg = DICTATION_GAIN_LEVELS[pkDictationGainIdx] || DICTATION_GAIN_LEVELS[0];
    const scale = Math.min(cfg.maxBoost || 48, 0.85 / peak);
    for (let i = 0; i < resampled.length; i++) {
      const v = resampled[i] * scale;
      resampled[i] = v > 0.94 ? 0.94 + Math.tanh((v - 0.94) * 2) * 0.05
                   : v < -0.94 ? -0.94 + Math.tanh((v + 0.94) * 2) * 0.05
                   : v;
    }
  }
  return { pcm: resampled, peak };
}

function formatSpokenDictationText(rawText) {
  if (!rawText) return '';
  let text = String(rawText)
    // Strip Whisper non-speech bracket/parenthesis hallucinations
    .replace(/\[(?:BLANK_AUDIO|SILENCE|NOISE|MUSIC|INAUDIBLE|APPLAUSE|LAUGHTER|BELL|BEEP)[^\]]*\]/gi, ' ')
    .replace(/\((?:silence|inaudible|whispering|music|background noise|applause|laughter|sighs|clears throat|static|clicking|footsteps)[^)]*\)/gi, ' ')
    // Spoken punctuation commands
    .replace(/\b(?:new paragraph|next paragraph|new line)\b/gi, '\n')
    .replace(/\s+\b(?:period|full stop)\b/gi, '.')
    .replace(/\s+\bcomma\b/gi, ',')
    .replace(/\s+\bquestion mark\b/gi, '?')
    .replace(/\s+\b(?:exclamation mark|exclamation point)\b/gi, '!')
    .replace(/\s+\bcolon\b/gi, ':')
    .replace(/[ \t]+([.,?!:])/g, '$1')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
  if (/^[.,!?\-_\s]+$/.test(text)) return '';
  // Filter well-known Whisper silence hallucinations on pure room noise
  if (/^(?:you\.?|thank you\.?|thanks for watching\.?|bye\.?|okay\.?|hmm\.?|uh\.?|um\.?)$/i.test(text) && pkRawMicPeakRecent < 0.0005) {
    return '';
  }
  return text;
}

// Bind / Prepare the Live Note Block so text streams directly into the note in real time!
function prepareLiveDictationBlock(forceNewParagraph = false) {
  const note = getActiveNote();
  if (!note || note.locked) return null;
  pkLiveNoteId = note.id;

  let targetBlock = null;
  if (!forceNewParagraph && pkLiveBlockId) {
    targetBlock = note.blocks.find(b => b.id === pkLiveBlockId);
  }
  if (!forceNewParagraph && !targetBlock && typeof activeEditingBlockId !== 'undefined' && activeEditingBlockId) {
    const activeBlk = note.blocks.find(b => b.id === activeEditingBlockId);
    if (activeBlk && activeBlk.type !== 'divider') targetBlock = activeBlk;
  }
  if (!forceNewParagraph && !targetBlock) {
    const last = note.blocks[note.blocks.length - 1];
    if (last && last.type === 'paragraph' && (!last.content || !last.content.trim())) {
      targetBlock = last;
    }
  }
  if (!targetBlock) {
    targetBlock = { id: generateId('b'), type: 'paragraph', content: '' };
    note.blocks.push(targetBlock);
    renderBlocks(note);
  }

  pkLiveBlockId = targetBlock.id;
  pkLiveBlockBaseText = (targetBlock.content || '').trim();
  highlightLiveDictationBlock(pkLiveBlockId, true);
  return targetBlock;
}

function highlightLiveDictationBlock(blockId, active) {
  document.querySelectorAll('.pk-dict-live-block').forEach(el => {
    el.classList.remove('pk-dict-live-block');
    el.style.borderLeft = '';
    el.style.paddingLeft = '';
    el.style.backgroundColor = '';
  });
  if (!active || !blockId) return;
  const row = document.querySelector(`[data-row-id="${blockId}"]`);
  if (row) {
    row.classList.add('pk-dict-live-block');
    row.style.borderLeft = '2px solid var(--accent-vermilion)';
    row.style.paddingLeft = '8px';
    row.style.backgroundColor = 'var(--accent-vermilion-tint)';
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Write real-time partial OR committed text straight into the active note block!
function applyLiveDictationToNote(spokenText, isFinalCommit = false) {
  const note = getActiveNote();
  if (!note || note.locked) return;
  const cleaned = formatSpokenDictationText(spokenText);
  if (!cleaned) return;

  if (!pkLiveBlockId || pkLiveNoteId !== note.id) {
    prepareLiveDictationBlock(false);
  }
  let blk = note.blocks.find(b => b.id === pkLiveBlockId);
  if (!blk) {
    blk = prepareLiveDictationBlock(false);
    if (!blk) return;
  }

  const paragraphs = cleaned.split('\n').map(p => p.trim()).filter(Boolean);
  if (paragraphs.length === 0) return;

  const formatSentence = (str, punctuate) => {
    let s = str.charAt(0).toUpperCase() + str.slice(1);
    if (punctuate && !/[.!?]$/.test(s)) s += '.';
    return s;
  };

  const firstPart = formatSentence(paragraphs[0], isFinalCommit);
  blk.content = pkLiveBlockBaseText ? `${pkLiveBlockBaseText} ${firstPart}` : firstPart;

  if (isFinalCommit) {
    if (typeof takeSnapshot === 'function') takeSnapshot('voice-dictation');
    pkLiveBlockBaseText = blk.content.trim();
    // If user said "new paragraph" / "new line", create additional paragraph blocks cleanly
    for (let i = 1; i < paragraphs.length; i++) {
      const nb = { id: generateId('b'), type: 'paragraph', content: formatSentence(paragraphs[i], true) };
      note.blocks.push(nb);
      pkLiveBlockId = nb.id;
      pkLiveBlockBaseText = nb.content;
    }
    pkSessionCommittedText = pkSessionCommittedText
      ? `${pkSessionCommittedText} ${paragraphs.map(p => formatSentence(p, true)).join(' ')}`
      : paragraphs.map(p => formatSentence(p, true)).join(' ');
    pkCurrentDraftText = '';
  } else {
    pkCurrentDraftText = firstPart;
  }

  note.updatedAt = TODAY_KEY;
  renderBlocks(note);
  if (typeof updateWordCount === 'function') updateWordCount(note);
  if (isFinalCommit) persistState();
  if (isDictationActive) highlightLiveDictationBlock(pkLiveBlockId, true);
  renderDictationLivePreview();
}

function pushCapturedPCMChunk(float32Chunk) {
  if (!isDictationActive) return;
  const copy = new Float32Array(float32Chunk);
  // Track recent raw mic peak so we know when real audio arrived
  let chunkPeak = 0;
  for (let i = 0; i < copy.length; i += 4) {
    const a = Math.abs(copy[i]);
    if (a > chunkPeak) chunkPeak = a;
  }
  pkRawMicPeakRecent = Math.max(pkRawMicPeakRecent * 0.85, chunkPeak);

  if (pkStreamSamples < pkDictSampleRate * 16) {
    pkStreamChunks.push(copy);
    pkStreamSamples += copy.length;
  }
}

// Start Mic Capture using AudioContext CREATED SYNCHRONOUSLY inside user tap gesture!
async function attachMicCaptureToContext(ctx) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error('Microphone API unavailable in this browser');
  }

  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: true,
        channelCount: 1
      }
    });
  } catch (e) {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  }
  if (!isDictationActive) {
    stream.getTracks().forEach(t => t.stop());
    return false;
  }

  pkDictMediaStream = stream;
  if (ctx.state === 'suspended') {
    try { await ctx.resume(); } catch (e) {}
  }
  pkDictSampleRate = ctx.sampleRate || 48000;

  const source = ctx.createMediaStreamSource(stream);

  // 1. Clean 80 Hz high-pass filter (removes breath pops & low rumble)
  const highPass = ctx.createBiquadFilter();
  highPass.type = 'highpass';
  highPass.frequency.value = 80;
  source.connect(highPass);

  // 2. Visual Waveform & Adaptive VAD Branch (+5dB vocal presence + Whisper boost)
  const presence = ctx.createBiquadFilter();
  presence.type = 'peaking';
  presence.frequency.value = 2800;
  presence.Q.value = 1.1;
  presence.gain.value = 5.0;

  const gain = ctx.createGain();
  const gainCfg = DICTATION_GAIN_LEVELS[pkDictationGainIdx] || DICTATION_GAIN_LEVELS[0];
  gain.gain.value = gainCfg.gain;
  pkDictGainNode = gain;

  const analyser = ctx.createAnalyser();
  analyser.fftSize = 128;
  analyser.smoothingTimeConstant = 0.72;
  pkDictAnalyser = analyser;

  highPass.connect(presence);
  presence.connect(gain);
  gain.connect(analyser);

  // 3. Modern AudioWorklet PCM Capture (zero-glitch on iOS Safari & Android Chrome!) with ScriptProcessor fallback
  pkStreamChunks = [];
  pkStreamSamples = 0;
  pkLastTranscribedSamples = 0;

  let workletAttached = false;
  if (ctx.audioWorklet && typeof AudioWorkletNode !== 'undefined' && location.protocol !== 'file:') {
    try {
      const workletCode = `
        class PKDictPCMProcessor extends AudioWorkletProcessor {
          process(inputs) {
            const input = inputs && inputs[0] && inputs[0][0];
            if (input && input.length) {
              this.port.postMessage(input.slice());
            }
            return true;
          }
        }
        registerProcessor('pk-dict-pcm', PKDictPCMProcessor);
      `;
      const wBlob = new Blob([workletCode], { type: 'application/javascript' });
      const wUrl = URL.createObjectURL(wBlob);
      await ctx.audioWorklet.addModule(wUrl);
      URL.revokeObjectURL(wUrl);

      if (!isDictationActive) return false;
      const workletNode = new AudioWorkletNode(ctx, 'pk-dict-pcm');
      workletNode.port.onmessage = (ev) => {
        if (ev.data) pushCapturedPCMChunk(ev.data);
      };
      const keepAlive = ctx.createGain();
      keepAlive.gain.value = 0.00001;
      highPass.connect(workletNode);
      workletNode.connect(keepAlive);
      keepAlive.connect(ctx.destination);
      pkDictCaptureNode = workletNode;
      workletAttached = true;
    } catch (wErr) {
      workletAttached = false;
    }
  }

  if (!workletAttached && typeof ctx.createScriptProcessor === 'function') {
    const proc = ctx.createScriptProcessor(4096, 1, 1);
    const keepAlive = ctx.createGain();
    keepAlive.gain.value = 0.00001;
    proc.onaudioprocess = (ev) => {
      const ch = ev.inputBuffer.getChannelData(0);
      if (ch && ch.length) pushCapturedPCMChunk(ch);
    };
    highPass.connect(proc);
    proc.connect(keepAlive);
    keepAlive.connect(ctx.destination);
    pkDictCaptureNode = proc;
  }

  startDictationWaveformLoop();
  return true;
}

function stopMicCapture() {
  if (pkDictWaveAnimId) {
    cancelAnimationFrame(pkDictWaveAnimId);
    pkDictWaveAnimId = null;
  }
  if (pkDictCaptureNode) {
    try { pkDictCaptureNode.disconnect(); } catch (e) {}
    pkDictCaptureNode = null;
  }
  if (pkDictMediaStream) {
    pkDictMediaStream.getTracks().forEach(t => { try { t.stop(); } catch (e) {} });
    pkDictMediaStream = null;
  }
  if (pkDictAudioCtx) {
    try { pkDictAudioCtx.close(); } catch (e) {}
    pkDictAudioCtx = null;
  }
  pkDictGainNode = null;
  pkDictAnalyser = null;
}

// Real-Time Rolling Streaming Transcription Pass (updates HUD + Note live WHILE YOU TALK!)
async function runLiveTranscriptionPass(shouldCommit = false) {
  if (isDictationBusy) return;
  const minSamples = Math.floor(pkDictSampleRate * 0.45);
  if (pkStreamSamples < minSamples) {
    if (shouldCommit) {
      pkStreamChunks = [];
      pkStreamSamples = 0;
      pkLastTranscribedSamples = 0;
      pkSpeechHeard = false;
    }
    return;
  }

  // Skip redundant partial pass if no new audio arrived since last pass
  if (!shouldCommit && (pkStreamSamples - pkLastTranscribedSamples) < Math.floor(pkDictSampleRate * 0.45)) {
    return;
  }

  const snapshotChunks = pkStreamChunks.slice();
  const snapshotSamples = pkStreamSamples;
  const sr = pkDictSampleRate;

  if (shouldCommit) {
    // Immediately reset rolling buffer so user's NEXT sentence records cleanly in parallel!
    pkStreamChunks = [];
    pkStreamSamples = 0;
    pkLastTranscribedSamples = 0;
    pkSpeechHeard = false;
    pkSpeechStartTs = Date.now();
  } else {
    pkLastTranscribedSamples = snapshotSamples;
  }

  const { pcm, peak } = buildWhisperNormalized16kPCM(snapshotChunks, sr);
  if (pcm.length < 3200 || peak <= 0.00016) return;

  isDictationBusy = true;
  const statusBadge = document.getElementById('pkDictationStatusBadge');
  const sigLabel = document.getElementById('pkDictationSignalLabel');
  const modelReady = !!pkWhisperPipeline;
  if (statusBadge && modelReady) statusBadge.textContent = shouldCommit ? 'COMMITTING' : 'STREAMING';
  if (sigLabel && modelReady) sigLabel.textContent = 'Streaming words live into note...';

  try {
    const rawText = await transcribeFloat32WithWhisper(pcm);
    const cleaned = formatSpokenDictationText(rawText);
    if (cleaned) {
      applyLiveDictationToNote(cleaned, shouldCommit);
      if (shouldCommit && typeof pkHaptic === 'function') pkHaptic(10);
    }
  } catch (err) {
    console.warn('Real-time dictation pass error:', err);
    const s = document.getElementById('pkDictationSignalLabel');
    if (s) s.textContent = 'Offline AI needs internet once to download (~39 MB)';
  } finally {
    isDictationBusy = false;
    if (isDictationActive && !pkDictClosing) {
      const sb = document.getElementById('pkDictationStatusBadge');
      if (sb && pkWhisperPipeline) sb.textContent = 'LIVE STREAM';
    }
  }
}

function startDictationWaveformLoop() {
  const canvas = document.getElementById('pkDictationWaveCanvas');
  const hud = document.getElementById('pkDictationHUD');
  const sigLabel = document.getElementById('pkDictationSignalLabel');
  if (!canvas || !pkDictAnalyser) return;

  const dpr = window.PK_LITE_MODE ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  const dataArr = new Uint8Array(pkDictAnalyser.frequencyBinCount);
  const barCount = 34;
  const smoothBars = new Float32Array(barCount);
  const peakCaps = new Float32Array(barCount);
  pkSpeechHeard = false;
  pkSpeechStartTs = 0;
  pkLastSpeechTs = 0;
  pkNoiseFloor = 0.045;

  const draw = () => {
    if (!isDictationActive || !pkDictAnalyser) return;
    pkDictWaveAnimId = requestAnimationFrame(draw);

    const cssW = canvas.clientWidth || 320;
    const cssH = canvas.clientHeight || 40;
    if (canvas.width !== Math.round(cssW * dpr) || canvas.height !== Math.round(cssH * dpr)) {
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
    }

    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    pkDictAnalyser.getByteFrequencyData(dataArr);
    let sum = 0;
    for (let i = 1; i < Math.min(38, dataArr.length); i++) sum += dataArr[i];
    const avgNorm = sum / (37 * 255);
    const visualEnergy = Math.min(1, Math.pow(avgNorm * 2.15, 0.60));

    // Adaptive ambient noise-floor tracker so +15dB / +22dB boost NEVER traps VAD!
    const speechThreshold = Math.min(0.62, Math.max(0.055, pkNoiseFloor * 1.5 + 0.035));
    const nowTs = Date.now();
    if (visualEnergy <= speechThreshold) {
      pkNoiseFloor = pkNoiseFloor * 0.96 + visualEnergy * 0.04;
    } else {
      pkNoiseFloor = Math.min(0.36, pkNoiseFloor * 0.997 + visualEnergy * 0.003);
      if (!pkSpeechHeard) pkSpeechStartTs = nowTs;
      pkSpeechHeard = true;
      pkLastSpeechTs = nowTs;
    }

    // Luminous reactive glow around the Dictation Studio capsule
    if (hud) {
      const glowAlpha = (0.14 + visualEnergy * 0.38).toFixed(2);
      hud.style.boxShadow = `0 18px 45px rgba(0,0,0,0.42), 0 0 ${Math.round(14 + visualEnergy * 26)}px rgba(200, 70, 43, ${glowAlpha})`;
    }

    const modelReady = !!pkWhisperPipeline;
    if (sigLabel && modelReady && !isDictationBusy) {
      if (visualEnergy > speechThreshold) {
        sigLabel.textContent = visualEnergy > 0.22 ? 'Voice live · streaming text...' : 'Soft whisper heard · streaming...';
      } else {
        sigLabel.textContent = 'Listening — speak or whisper naturally';
      }
    }

    // Symmetrical studio waveform bars + floating peak-hold micro-caps
    const midY = cssH / 2;
    ctx.fillStyle = 'rgba(148, 148, 142, 0.16)';
    ctx.fillRect(0, midY - 0.5, cssW, 1);

    const gap = 3;
    const barW = Math.max(2.5, (cssW - gap * (barCount - 1)) / barCount);
    const halfBars = Math.floor(barCount / 2);
    const grad = ctx.createLinearGradient(0, 0, cssW, 0);
    grad.addColorStop(0, 'rgba(200, 70, 43, 0.42)');
    grad.addColorStop(0.5, 'rgba(225, 86, 54, 1.0)');
    grad.addColorStop(1, 'rgba(200, 70, 43, 0.42)');

    for (let i = 0; i < barCount; i++) {
      const distFromCenter = Math.abs(i - halfBars);
      const binIdx = Math.min(dataArr.length - 1, 1 + Math.floor(distFromCenter * 1.4));
      const boosted = Math.pow(dataArr[binIdx] / 255, 0.55);
      const envelope = 1 - (distFromCenter / (halfBars + 3)) * 0.44;
      const targetH = Math.max(3, Math.min(cssH - 6, boosted * envelope * (cssH - 6)));

      smoothBars[i] = targetH > smoothBars[i]
        ? smoothBars[i] + (targetH - smoothBars[i]) * 0.56
        : smoothBars[i] + (targetH - smoothBars[i]) * 0.22;

      if (smoothBars[i] > peakCaps[i]) peakCaps[i] = smoothBars[i];
      else peakCaps[i] = Math.max(smoothBars[i], peakCaps[i] - 0.35);

      const barH = smoothBars[i];
      const x = i * (barW + gap);
      const y = midY - barH / 2;

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH, barW / 2);
      ctx.fill();

      if (peakCaps[i] > 8) {
        const capOffset = peakCaps[i] / 2 + 2;
        ctx.fillStyle = 'rgba(235, 138, 72, 0.85)';
        ctx.fillRect(x, Math.max(1, midY - capOffset), barW, 1.5);
        ctx.fillRect(x, Math.min(cssH - 2.5, midY + capOffset - 1.5), barW, 1.5);
      }
    }
  };

  draw();
}

function toggleVoiceDictation() {
  if (isDictationActive) {
    stopVoiceDictation(true);
  } else {
    startVoiceDictation();
  }
}

async function startVoiceDictation() {
  if (state.appMode !== 'workspace') setAppMode('workspace');
  const note = getActiveNote();
  if (note && note.locked) {
    showToast('Unlock note before dictating', 'ochre');
    return;
  }
  if (typeof stopReadingAloud === 'function') stopReadingAloud();

  // CRITICAL FOR MOBILE (iOS Safari & Android Chrome):
  // Create & resume AudioContext SYNCHRONOUSLY inside the tap gesture BEFORE any await!
  let syncAudioCtx = null;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      syncAudioCtx = new AudioCtx();
      syncAudioCtx.resume().catch(() => {});
    }
  } catch (e) {}

  isDictationActive = true;
  isDictationBusy = false;
  pkDictClosing = false;
  pkDictStartedAt = Date.now();
  pkStreamChunks = [];
  pkStreamSamples = 0;
  pkLastTranscribedSamples = 0;
  pkSessionCommittedText = '';
  pkCurrentDraftText = '';
  pkLiveBlockId = null;
  pkLiveBlockBaseText = '';
  pkRawMicPeakRecent = 0;

  const hud = document.getElementById('pkDictationHUD');
  const timerEl = document.getElementById('pkDictationTimer');
  const mobileBtn = document.getElementById('mobileDictateBtn');
  const desktopBtn = document.getElementById('desktopDictateBtn');
  if (hud) hud.classList.remove('hidden');
  if (timerEl) timerEl.textContent = '00:00';
  if (mobileBtn) mobileBtn.classList.add('border-[var(--accent-vermilion)]', 'text-[var(--accent-vermilion)]');
  if (desktopBtn) desktopBtn.classList.add('text-[var(--accent-vermilion)]', 'bg-[var(--accent-vermilion-tint)]');
  updateDictationGainUI();
  prepareLiveDictationBlock(false);
  renderDictationLivePreview();

  if (pkDictTimerInterval) clearInterval(pkDictTimerInterval);
  pkDictTimerInterval = setInterval(() => {
    if (!isDictationActive) return;
    const secs = Math.floor((Date.now() - pkDictStartedAt) / 1000);
    if (timerEl) timerEl.textContent = formatTimerMMSS(secs);
  }, 500);

  try {
    if (!syncAudioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      syncAudioCtx = new AudioCtx();
    }
    pkDictAudioCtx = syncAudioCtx;
    await attachMicCaptureToContext(syncAudioCtx);

    // Start loading / warming up on-device Whisper AI Worker immediately
    ensureWhisperEngineReady().catch((err) => {
      console.warn('Whisper AI init error:', err);
      const s = document.getElementById('pkDictationSignalLabel');
      if (s) s.textContent = 'Connect to internet once to cache offline AI (~39 MB)';
    });

    // Continuous Real-Time Streaming Scheduler (fires every 850ms so words appear LIVE as you speak!)
    if (pkDictStreamInterval) clearInterval(pkDictStreamInterval);
    pkDictStreamInterval = setInterval(() => {
      if (!isDictationActive || pkDictClosing || isDictationBusy) return;
      if (!pkWhisperPipeline) return;
      const now = Date.now();
      const minSamples = Math.floor(pkDictSampleRate * 0.5);
      if (pkStreamSamples < minSamples) return;

      const quietMs = pkLastSpeechTs ? (now - pkLastSpeechTs) : 0;
      const spokenMs = pkSpeechStartTs ? (now - pkSpeechStartTs) : 0;

      if (pkSpeechHeard && (quietMs > 1150 || spokenMs > 10500)) {
        // Sentence paused or hit 10.5s -> commit finalized sentence & start next fresh!
        runLiveTranscriptionPass(true);
      } else if (pkSpeechHeard || pkRawMicPeakRecent > 0.0005) {
        // Still speaking -> stream real-time live words into HUD + active note!
        runLiveTranscriptionPass(false);
      }
    }, 850);

    if (typeof pkHaptic === 'function') pkHaptic(10);
  } catch (err) {
    console.warn('Voice dictation mic error:', err);
    showToast('Allow microphone permission to use Voice Dictation', 'ochre');
    cleanupVoiceDictationUI();
  }
}

async function dictationInsertNewParagraph() {
  if (!isDictationActive) return;
  if (pkStreamSamples > Math.floor(pkDictSampleRate * 0.35)) {
    await runLiveTranscriptionPass(true);
  }
  prepareLiveDictationBlock(true);
  if (typeof pkHaptic === 'function') pkHaptic(8);
  showToast('Started new paragraph');
}

function clearCurrentDictationDraft() {
  pkStreamChunks = [];
  pkStreamSamples = 0;
  pkLastTranscribedSamples = 0;
  pkSpeechHeard = false;
  pkCurrentDraftText = '';
  const note = getActiveNote();
  if (note && pkLiveBlockId) {
    const blk = note.blocks.find(b => b.id === pkLiveBlockId);
    if (blk) {
      blk.content = pkLiveBlockBaseText;
      renderBlocks(note);
      if (typeof updateWordCount === 'function') updateWordCount(note);
      highlightLiveDictationBlock(pkLiveBlockId, true);
    }
  }
  renderDictationLivePreview();
  if (typeof pkHaptic === 'function') pkHaptic(8);
}

function cleanupVoiceDictationUI() {
  isDictationActive = false;
  isDictationBusy = false;
  pkDictClosing = false;
  if (pkDictTimerInterval) { clearInterval(pkDictTimerInterval); pkDictTimerInterval = null; }
  if (pkDictStreamInterval) { clearInterval(pkDictStreamInterval); pkDictStreamInterval = null; }
  stopMicCapture();
  setDictationProgress(false, 0);
  highlightLiveDictationBlock(null, false);

  const hud = document.getElementById('pkDictationHUD');
  if (hud) {
    hud.classList.add('hidden');
    hud.style.boxShadow = '';
  }
  const mobileBtn = document.getElementById('mobileDictateBtn');
  if (mobileBtn) mobileBtn.classList.remove('border-[var(--accent-vermilion)]', 'text-[var(--accent-vermilion)]');
  const desktopBtn = document.getElementById('desktopDictateBtn');
  if (desktopBtn) desktopBtn.classList.remove('text-[var(--accent-vermilion)]', 'bg-[var(--accent-vermilion-tint)]');
}

async function stopVoiceDictation(flushFinal = true) {
  if (!isDictationActive || pkDictClosing) {
    cleanupVoiceDictationUI();
    return;
  }
  pkDictClosing = true;
  if (pkDictStreamInterval) { clearInterval(pkDictStreamInterval); pkDictStreamInterval = null; }

  // Finalize any trailing words cleanly before closing so nothing is lost
  if (flushFinal && pkStreamSamples > Math.floor(pkDictSampleRate * 0.35) && pkWhisperPipeline) {
    const statusBadge = document.getElementById('pkDictationStatusBadge');
    if (statusBadge) statusBadge.textContent = 'FINALIZING';
    // Wait briefly if a background pass is finishing
    for (let i = 0; i < 30 && isDictationBusy; i++) {
      await new Promise(r => setTimeout(r, 120));
    }
    if (pkStreamSamples > Math.floor(pkDictSampleRate * 0.35)) {
      await runLiveTranscriptionPass(true);
    }
  } else if (flushFinal && pkCurrentDraftText.trim()) {
    applyLiveDictationToNote(pkCurrentDraftText.trim(), true);
  }
  cleanupVoiceDictationUI();
}

// --- 18B. FIND & REPLACE INSIDE ACTIVE NOTE (Ctrl+H / Cmd+Shift+F) ---
let pkFindCaseSensitive = false;
let pkFindMatches = []; // [{ blockId, index }]
let pkFindActiveIdx = -1;

function openFindReplaceBar() {
  const bar = document.getElementById('pkFindReplaceBar');
  if (!bar) return;
  bar.classList.remove('hidden');
  const input = document.getElementById('pkFindInput');
  if (input) {
    const sel = window.getSelection ? window.getSelection().toString().trim() : '';
    if (sel && sel.length < 60 && !sel.includes('\n')) input.value = sel;
    input.focus();
    input.select();
  }
  runNoteFind();
}

function closeFindReplaceBar() {
  const bar = document.getElementById('pkFindReplaceBar');
  if (bar) bar.classList.add('hidden');
  clearFindHighlights();
  pkFindMatches = [];
  pkFindActiveIdx = -1;
}

function clearFindHighlights() {
  document.querySelectorAll('.pk-find-match-block').forEach(el => {
    el.classList.remove('pk-find-match-block');
    el.style.outline = '';
    el.style.outlineOffset = '';
  });
}

function toggleFindCaseSensitive() {
  pkFindCaseSensitive = !pkFindCaseSensitive;
  const btn = document.getElementById('pkFindCaseBtn');
  if (btn) {
    btn.className = pkFindCaseSensitive
      ? 'px-2 py-1.5 rounded-[3px] bg-[var(--accent-vermilion-tint)] border border-[var(--accent-vermilion)] font-mono text-[10px] text-[var(--accent-vermilion)] font-semibold cursor-pointer'
      : 'px-2 py-1.5 rounded-[3px] bg-[var(--bg-canvas)] border border-[var(--border-hairline)] font-mono text-[10px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer';
  }
  runNoteFind();
}

function escapeRegexStr(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function runNoteFind() {
  clearFindHighlights();
  const note = getActiveNote();
  const query = document.getElementById('pkFindInput')?.value || '';
  const countEl = document.getElementById('pkFindMatchCount');
  pkFindMatches = [];
  pkFindActiveIdx = -1;

  if (!note || !query) {
    if (countEl) countEl.textContent = '0 / 0';
    return;
  }

  const flags = pkFindCaseSensitive ? 'g' : 'gi';
  const rx = new RegExp(escapeRegexStr(query), flags);

  (note.blocks || []).forEach(b => {
    const text = b.content || '';
    let m;
    rx.lastIndex = 0;
    while ((m = rx.exec(text)) !== null) {
      pkFindMatches.push({ blockId: b.id, start: m.index, len: m[0].length });
      if (m[0].length === 0) break;
    }
  });

  if (pkFindMatches.length > 0) {
    pkFindActiveIdx = 0;
    highlightActiveFindMatch();
  }
  if (countEl) {
    countEl.textContent = pkFindMatches.length > 0 ? `${pkFindActiveIdx + 1} / ${pkFindMatches.length}` : '0 / 0';
  }
}

function highlightActiveFindMatch() {
  clearFindHighlights();
  if (pkFindActiveIdx < 0 || pkFindActiveIdx >= pkFindMatches.length) return;
  const match = pkFindMatches[pkFindActiveIdx];
  const el = document.querySelector(`[data-block-id="${match.blockId}"]`);
  if (el) {
    el.classList.add('pk-find-match-block');
    el.style.outline = '1.5px solid var(--accent-vermilion)';
    el.style.outlineOffset = '3px';
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  const countEl = document.getElementById('pkFindMatchCount');
  if (countEl) countEl.textContent = `${pkFindActiveIdx + 1} / ${pkFindMatches.length}`;
}

function jumpNoteFindMatch(delta) {
  if (pkFindMatches.length === 0) return;
  pkFindActiveIdx = (pkFindActiveIdx + delta + pkFindMatches.length) % pkFindMatches.length;
  highlightActiveFindMatch();
}

function replaceCurrentFindMatch() {
  const note = getActiveNote();
  if (!note || note.locked) {
    if (note && note.locked) showToast('Note is locked (read-only)', 'ochre');
    return;
  }
  if (pkFindActiveIdx < 0 || pkFindActiveIdx >= pkFindMatches.length) return;
  const replacement = document.getElementById('pkReplaceInput')?.value ?? '';
  const match = pkFindMatches[pkFindActiveIdx];
  const block = note.blocks.find(b => b.id === match.blockId);
  if (!block) return;

  if (typeof takeSnapshot === 'function') takeSnapshot('find-replace-one');
  block.content = block.content.slice(0, match.start) + replacement + block.content.slice(match.start + match.len);
  note.updatedAt = TODAY_KEY;
  renderBlocks(note);
  persistState();
  runNoteFind();
  showToast('Replaced 1 match');
}

function replaceAllFindMatches() {
  const note = getActiveNote();
  if (!note || note.locked) {
    if (note && note.locked) showToast('Note is locked (read-only)', 'ochre');
    return;
  }
  const query = document.getElementById('pkFindInput')?.value || '';
  const replacement = document.getElementById('pkReplaceInput')?.value ?? '';
  if (!query || pkFindMatches.length === 0) {
    showToast('No matches to replace', 'ochre');
    return;
  }

  const count = pkFindMatches.length;
  if (typeof takeSnapshot === 'function') takeSnapshot('find-replace-all');
  const flags = pkFindCaseSensitive ? 'g' : 'gi';
  const rx = new RegExp(escapeRegexStr(query), flags);

  (note.blocks || []).forEach(b => {
    if (b.content) b.content = b.content.replace(rx, () => replacement);
  });

  note.updatedAt = TODAY_KEY;
  renderBlocks(note);
  if (typeof updateWordCount === 'function') updateWordCount(note);
  persistState();
  runNoteFind();
  showToast(`Replaced ${count} matches (Undo available)`);
}

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'h') {
    e.preventDefault();
    openFindReplaceBar();
  }
});

// --- 18C. SMART NOTE TEMPLATES GALLERY ---
const NOTE_TEMPLATES = [
  {
    id: 'tpl_meeting',
    title: 'Meeting Notes',
    category: 'Work',
    desc: 'Attendees, agenda, discussion points & action items',
    tags: ['meeting', 'work'],
    blocks: [
      { type: 'h2', content: 'Meeting Details' },
      { type: 'bullet', content: 'Date: ' + new Date().toLocaleDateString() },
      { type: 'bullet', content: 'Attendees: ' },
      { type: 'h2', content: 'Agenda & Key Points' },
      { type: 'paragraph', content: 'Summarize core decisions and context discussed.' },
      { type: 'h2', content: 'Action Items' },
      { type: 'todo', content: 'Follow up on key deliverables', checked: false },
      { type: 'todo', content: 'Share summary notes with team', checked: false }
    ]
  },
  {
    id: 'tpl_journal',
    title: 'Daily Journal & Reflection',
    category: 'Personal',
    desc: 'Top 3 priorities, thoughts & end-of-day review',
    tags: ['journal', 'daily'],
    blocks: [
      { type: 'h2', content: 'Top 3 Priorities Today' },
      { type: 'todo', content: 'Priority 1: ', checked: false },
      { type: 'todo', content: 'Priority 2: ', checked: false },
      { type: 'todo', content: 'Priority 3: ', checked: false },
      { type: 'h2', content: 'Notes & Observations' },
      { type: 'paragraph', content: 'Capture ideas, conversations, and insights from the day.' },
      { type: 'h2', content: 'Evening Review' },
      { type: 'quote', content: 'What went well today, and what can improve tomorrow?' }
    ]
  },
  {
    id: 'tpl_study',
    title: 'Study & Lecture Notes',
    category: 'Learning',
    desc: 'Core concepts, key terms, summary & review questions',
    tags: ['study', 'notes'],
    blocks: [
      { type: 'h2', content: 'Core Concept' },
      { type: 'paragraph', content: 'Explain the main topic in your own words.' },
      { type: 'h2', content: 'Key Terms & Definitions' },
      { type: 'bullet', content: 'Term 1 — Definition and example' },
      { type: 'bullet', content: 'Term 2 — Definition and example' },
      { type: 'h2', content: 'Review Questions' },
      { type: 'todo', content: 'Test recall on main concepts without looking', checked: false }
    ]
  },
  {
    id: 'tpl_project',
    title: 'Project Plan & Milestones',
    category: 'Planning',
    desc: 'Objective, scope, milestone checklist & open risks',
    tags: ['project', 'plan'],
    blocks: [
      { type: 'h2', content: 'Objective' },
      { type: 'paragraph', content: 'Define what success looks like for this project.' },
      { type: 'h2', content: 'Milestones' },
      { type: 'todo', content: 'Phase 1: Research & architecture', checked: false },
      { type: 'todo', content: 'Phase 2: Core implementation', checked: false },
      { type: 'todo', content: 'Phase 3: Testing & launch', checked: false },
      { type: 'h2', content: 'Open Risks & Questions' },
      { type: 'bullet', content: 'Potential blockers or dependencies to watch' }
    ]
  },
  {
    id: 'tpl_book',
    title: 'Book / Article Summary',
    category: 'Reading',
    desc: 'Source metadata, core thesis, takeaways & quotes',
    tags: ['reading', 'summary'],
    blocks: [
      { type: 'h2', content: 'Source & Author' },
      { type: 'bullet', content: 'Author: ' },
      { type: 'bullet', content: 'Core Thesis: ' },
      { type: 'h2', content: 'Key Takeaways' },
      { type: 'bullet', content: 'Takeaway 1: ' },
      { type: 'bullet', content: 'Takeaway 2: ' },
      { type: 'h2', content: 'Notable Passage' },
      { type: 'quote', content: 'Record a memorable quote or argument here.' }
    ]
  },
  {
    id: 'tpl_checklist',
    title: 'Quick Checklist',
    category: 'Tasks',
    desc: 'Clean grouped action list ready to check off',
    tags: ['tasks', 'checklist'],
    blocks: [
      { type: 'h2', content: 'Must Do' },
      { type: 'todo', content: 'First task', checked: false },
      { type: 'todo', content: 'Second task', checked: false },
      { type: 'h2', content: 'Later' },
      { type: 'todo', content: 'Optional task', checked: false }
    ]
  }
];

function openTemplatesModal() {
  const list = document.getElementById('templatesGalleryList');
  if (list) {
    list.innerHTML = NOTE_TEMPLATES.map(t => `
      <div class="p-3 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-hairline)] hover:border-[var(--border-strong)] transition-colors space-y-2">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <div class="font-serif font-semibold text-xs text-[var(--text-primary)]">${escapeHtml(t.title)}</div>
            <div class="font-mono text-[10px] text-[var(--text-tertiary)] mt-0.5">${escapeHtml(t.desc)}</div>
          </div>
          <span class="px-1.5 py-0.5 rounded-[2px] bg-[var(--bg-panel)] border border-[var(--border-hairline)] font-mono text-[9px] text-[var(--text-tertiary)] uppercase shrink-0">${escapeHtml(t.category)}</span>
        </div>
        <div class="flex items-center gap-1.5 pt-1 font-mono text-[10px]">
          <button onclick="applyNoteTemplate('${t.id}', 'new')" class="flex-1 py-1.5 px-2.5 rounded-[3px] bg-[var(--accent-vermilion)] hover:opacity-90 text-white font-medium cursor-pointer transition-opacity">New Note</button>
          <button onclick="applyNoteTemplate('${t.id}', 'append')" class="flex-1 py-1.5 px-2.5 rounded-[3px] bg-[var(--bg-panel)] hover:bg-[var(--bg-hover)] border border-[var(--border-hairline)] text-[var(--text-primary)] cursor-pointer transition-colors">Insert in Current</button>
        </div>
      </div>
    `).join('');
  }
  const backdrop = document.getElementById('templatesModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('hidden');
    playWhooshSound();
  }
}

function closeTemplatesModal() {
  const backdrop = document.getElementById('templatesModalBackdrop');
  if (backdrop) backdrop.classList.add('hidden');
}

function applyNoteTemplate(templateId, mode = 'new') {
  const tpl = NOTE_TEMPLATES.find(t => t.id === templateId);
  if (!tpl) return;

  const freshBlocks = tpl.blocks.map(b => ({
    id: generateId('b'),
    type: b.type,
    content: b.content,
    ...(b.type === 'todo' ? { checked: !!b.checked } : {})
  }));

  if (mode === 'append') {
    const note = getActiveNote();
    if (!note) return;
    if (note.locked) {
      showToast('Unlock note before inserting a template', 'ochre');
      return;
    }
    if (typeof takeSnapshot === 'function') takeSnapshot('insert-template');
    note.blocks.push(...freshBlocks);
    note.updatedAt = TODAY_KEY;
    renderBlocks(note);
    if (typeof updateWordCount === 'function') updateWordCount(note);
    persistState();
    closeTemplatesModal();
    showToast(`Inserted "${tpl.title}" template`);
    return;
  }

  const nextNum = String(state.notes.length + 1).padStart(2, '0');
  const folder = (getActiveNote() && getActiveNote().folder) || 'General';
  const newNote = {
    id: generateId('note'),
    code: `DOC-${nextNum}`,
    title: tpl.title,
    glyph: 'document',
    folder,
    favorite: false,
    tags: [...tpl.tags],
    updatedAt: TODAY_KEY,
    blocks: freshBlocks
  };
  state.notes.unshift(newNote);
  state.expandedFolders[folder] = true;
  closeTemplatesModal();
  selectNote(newNote.id);
  showToast(`Created "${tpl.title}" from template`);
}

// --- 18D. POMODORO FOCUS TIMER (25m / 50m / 5m / 15m) ---
let pkFocusTimerSecondsLeft = 25 * 60;
let pkFocusTimerDurationSecs = 25 * 60;
let pkFocusTimerMode = 'Focus';
let pkFocusTimerRunning = false;
let pkFocusTimerInterval = null;
let pkFocusSessionsDone = 0;

function formatTimerMMSS(secs) {
  const s = Math.max(0, Math.floor(secs));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
}

function syncFocusTimerUI() {
  const formatted = formatTimerMMSS(pkFocusTimerSecondsLeft);
  const mainClock = document.getElementById('focusTimerMainClock');
  const hudClock = document.getElementById('pkFocusTimerHudClock');
  const desktopLabel = document.getElementById('desktopFocusTimerLabel');
  const startBtn = document.getElementById('focusTimerStartBtn');
  const modeEl = document.getElementById('focusTimerModeLabel');
  const sessionsEl = document.getElementById('focusTimerSessionsBadge');
  const pauseIcon = document.getElementById('pkTimerHudPauseIcon');
  const playIcon = document.getElementById('pkTimerHudPlayIcon');
  const dot = document.getElementById('pkFocusTimerDot');

  if (mainClock) mainClock.textContent = formatted;
  if (hudClock) hudClock.textContent = formatted;
  if (desktopLabel) desktopLabel.textContent = pkFocusTimerRunning ? formatted : 'TIMER';
  if (startBtn) startBtn.textContent = pkFocusTimerRunning ? 'Pause' : (pkFocusTimerSecondsLeft < pkFocusTimerDurationSecs ? 'Resume' : 'Start Focus');
  if (modeEl) modeEl.textContent = `${pkFocusTimerMode} Session`;
  if (sessionsEl) sessionsEl.textContent = `Completed sessions today: ${pkFocusSessionsDone}`;
  if (pauseIcon) pauseIcon.classList.toggle('hidden', !pkFocusTimerRunning);
  if (playIcon) playIcon.classList.toggle('hidden', pkFocusTimerRunning);
  if (dot) dot.className = pkFocusTimerRunning ? 'w-2 h-2 rounded-full bg-[var(--accent-vermilion)] animate-pulse shrink-0' : 'w-2 h-2 rounded-full bg-[var(--text-tertiary)] shrink-0';
}

function openFocusTimerModal() {
  syncFocusTimerUI();
  const backdrop = document.getElementById('focusTimerModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('hidden');
    playWhooshSound();
  }
}

function closeFocusTimerModal() {
  const backdrop = document.getElementById('focusTimerModalBackdrop');
  if (backdrop) backdrop.classList.add('hidden');
}

function setFocusTimerPreset(mins, label) {
  if (pkFocusTimerInterval) {
    clearInterval(pkFocusTimerInterval);
    pkFocusTimerInterval = null;
  }
  pkFocusTimerRunning = false;
  pkFocusTimerDurationSecs = mins * 60;
  pkFocusTimerSecondsLeft = mins * 60;
  pkFocusTimerMode = label;

  [25, 50, 5, 15].forEach(p => {
    const b = document.getElementById(`timerPreset${p}`);
    if (!b) return;
    b.className = p === mins
      ? 'py-1.5 rounded bg-[var(--bg-panel)] text-[var(--text-primary)] font-semibold border border-[var(--border-strong)] cursor-pointer'
      : 'py-1.5 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent cursor-pointer';
  });
  syncFocusTimerUI();
}

function toggleFocusTimerPause() {
  const hud = document.getElementById('pkFocusTimerHUD');
  if (pkFocusTimerRunning) {
    pkFocusTimerRunning = false;
    if (pkFocusTimerInterval) {
      clearInterval(pkFocusTimerInterval);
      pkFocusTimerInterval = null;
    }
    syncFocusTimerUI();
    return;
  }

  if (pkFocusTimerSecondsLeft <= 0) {
    pkFocusTimerSecondsLeft = pkFocusTimerDurationSecs;
  }
  pkFocusTimerRunning = true;
  if (hud) hud.classList.remove('hidden');
  syncFocusTimerUI();

  pkFocusTimerInterval = setInterval(() => {
    pkFocusTimerSecondsLeft--;
    syncFocusTimerUI();
    if (pkFocusTimerSecondsLeft <= 0) {
      clearInterval(pkFocusTimerInterval);
      pkFocusTimerInterval = null;
      pkFocusTimerRunning = false;
      if (pkFocusTimerMode === 'Focus' || pkFocusTimerMode === 'Deep Work') {
        pkFocusSessionsDone++;
      }
      syncFocusTimerUI();
      if (typeof playChimeSound === 'function') playChimeSound();
      showToast(`${pkFocusTimerMode} session complete!`);
    }
  }, 1000);
}

function resetFocusTimer() {
  if (pkFocusTimerInterval) {
    clearInterval(pkFocusTimerInterval);
    pkFocusTimerInterval = null;
  }
  pkFocusTimerRunning = false;
  pkFocusTimerSecondsLeft = pkFocusTimerDurationSecs;
  syncFocusTimerUI();
}

function hideFocusTimerHUD() {
  resetFocusTimer();
  const hud = document.getElementById('pkFocusTimerHUD');
  if (hud) hud.classList.add('hidden');
}

// --- 18E. IMPORT MARKDOWN (.md / .txt) FILE ---
function triggerMarkdownImport() {
  const input = document.getElementById('pkMarkdownImportInput');
  if (input) {
    input.value = '';
    input.click();
  }
}

function parseMarkdownToBlocks(mdText) {
  const lines = String(mdText || '').replace(/\r\n/g, '\n').split('\n');
  let title = '';
  let tags = ['imported'];
  let i = 0;

  // Parse optional YAML frontmatter
  if (lines[0] && lines[0].trim() === '---') {
    i = 1;
    while (i < lines.length && lines[i].trim() !== '---') {
      const line = lines[i];
      const tMatch = line.match(/^title:\s*["']?(.+?)["']?\s*$/i);
      if (tMatch) title = tMatch[1].trim();
      const tagMatch = line.match(/^tags:\s*\[(.+)\]/i);
      if (tagMatch) {
        tags = tagMatch[1].split(',').map(s => s.replace(/["'\s]/g, '')).filter(Boolean);
      }
      i++;
    }
    if (i < lines.length && lines[i].trim() === '---') i++;
  }

  const blocks = [];
  let inCode = false;
  let codeLines = [];

  for (; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('```')) {
      if (inCode) {
        blocks.push({ id: generateId('b'), type: 'code', content: codeLines.join('\n') });
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeLines.push(line);
      continue;
    }

    const trimmed = line.trim();
    if (!trimmed) continue;

    if (/^---+$|^\*\*\*+$/.test(trimmed)) {
      blocks.push({ id: generateId('b'), type: 'divider', content: '' });
    } else if (/^#\s+/.test(trimmed)) {
      const hText = trimmed.replace(/^#\s+/, '').trim();
      if (!title) title = hText;
      else blocks.push({ id: generateId('b'), type: 'h1', content: hText });
    } else if (/^##\s+/.test(trimmed)) {
      blocks.push({ id: generateId('b'), type: 'h2', content: trimmed.replace(/^##\s+/, '').trim() });
    } else if (/^###\s+/.test(trimmed)) {
      blocks.push({ id: generateId('b'), type: 'h3', content: trimmed.replace(/^###\s+/, '').trim() });
    } else if (/^[-*+]\s+\[([ xX])\]\s*/.test(trimmed)) {
      const m = trimmed.match(/^[-*+]\s+\[([ xX])\]\s*(.*)$/);
      blocks.push({ id: generateId('b'), type: 'todo', content: m[2].trim(), checked: m[1].toLowerCase() === 'x' });
    } else if (/^[-*+]\s+/.test(trimmed)) {
      blocks.push({ id: generateId('b'), type: 'bullet', content: trimmed.replace(/^[-*+]\s+/, '').trim() });
    } else if (/^>\s?/.test(trimmed)) {
      blocks.push({ id: generateId('b'), type: 'quote', content: trimmed.replace(/^>\s?/, '').trim() });
    } else {
      blocks.push({ id: generateId('b'), type: 'paragraph', content: trimmed });
    }
  }

  if (inCode && codeLines.length > 0) {
    blocks.push({ id: generateId('b'), type: 'code', content: codeLines.join('\n') });
  }
  if (blocks.length === 0) {
    blocks.push({ id: generateId('b'), type: 'paragraph', content: '' });
  }

  return { title, tags, blocks };
}

function handleMarkdownFileImport(event) {
  const file = event && event.target && event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result || '';
    const parsed = parseMarkdownToBlocks(text);
    const fallbackTitle = file.name.replace(/\.(md|markdown|txt)$/i, '');
    const nextNum = String(state.notes.length + 1).padStart(2, '0');
    const folder = (getActiveNote() && getActiveNote().folder) || 'General';
    const newNote = {
      id: generateId('note'),
      code: `DOC-${nextNum}`,
      title: parsed.title || fallbackTitle || 'Imported Note',
      glyph: 'document',
      folder,
      favorite: false,
      tags: parsed.tags.length > 0 ? parsed.tags : ['imported'],
      updatedAt: TODAY_KEY,
      blocks: parsed.blocks
    };
    state.notes.unshift(newNote);
    state.expandedFolders[folder] = true;
    selectNote(newNote.id);
    showToast(`Imported "${newNote.title}" (${parsed.blocks.length} blocks)`);
  };
  reader.readAsText(file);
}

// --- 18F. READ-ONLY NOTE LOCK (Complete UI & Mutation Lockdown) ---
function applyNoteLockVisuals(note) {
  const locked = !!(note && note.locked);
  const badge = document.getElementById('headerNoteLockBadge');
  if (badge) {
    badge.classList.toggle('hidden', !locked);
    badge.classList.toggle('inline-flex', locked);
  }
  const mobileLockLabel = document.getElementById('mobileSheetLockLabel');
  if (mobileLockLabel) {
    mobileLockLabel.textContent = locked ? 'Unlock Note' : 'Lock Note';
  }
  const titleEl = document.getElementById('docTitleInput');
  if (titleEl) {
    titleEl.setAttribute('contenteditable', locked ? 'false' : 'true');
  }
  // Lock every block editable surface + hide empty placeholder prompts + hide gutter "+" and 6-dot drag handles!
  document.querySelectorAll('#blocksContainer [data-block-id]').forEach(el => {
    el.setAttribute('contenteditable', locked ? 'false' : 'true');
    if (locked) {
      if (el.hasAttribute('data-placeholder')) {
        el.setAttribute('data-saved-placeholder', el.getAttribute('data-placeholder'));
        el.removeAttribute('data-placeholder');
      }
    } else if (el.hasAttribute('data-saved-placeholder')) {
      el.setAttribute('data-placeholder', el.getAttribute('data-saved-placeholder'));
      el.removeAttribute('data-saved-placeholder');
    }
  });
  document.querySelectorAll('#blocksContainer .block-row').forEach(row => {
    row.setAttribute('draggable', locked ? 'false' : 'true');
    const gutter = row.firstElementChild;
    if (gutter && gutter.querySelector('[data-drag-handle]')) {
      gutter.classList.toggle('hidden', locked);
    }
  });
  // Hide bottom write bars, tag inputs, tag delete buttons, and disable folder select while locked
  const newTagInput = document.getElementById('newTagInput');
  if (newTagInput) newTagInput.classList.toggle('hidden', locked);
  document.querySelectorAll('#tagsContainer button').forEach(b => b.classList.toggle('hidden', locked));
  const folderSel = document.getElementById('docFolderSelect');
  if (folderSel) folderSel.disabled = locked;
  const mobWriteBar = document.getElementById('mobileBottomWriteBar');
  if (mobWriteBar) mobWriteBar.classList.toggle('hidden', locked);
  const deskAppendZone = document.getElementById('desktopAppendZone');
  if (deskAppendZone) deskAppendZone.classList.toggle('hidden', locked);
}

function toggleNoteLock() {
  const note = getActiveNote();
  if (!note) return;
  note.locked = !note.locked;
  renderDocKnowledgeRadar(note);
  applyNoteLockVisuals(note);
  persistState();
  if (typeof playMechanicalClick === 'function') playMechanicalClick(0.95);
  showToast(note.locked ? 'Note locked (read-only mode)' : 'Note unlocked for editing');
}

// =========================================================================
// 19. FINGER-FIRST TOUCH, DRAG, DROP & GESTURE ENGINE
//     Block Drag-Drop · Draggable HUDs · Graph Pinch/Long-Press ·
//     Swipe-Down Sheets · Edge-Swipe Sidebars · Calendar/Todo/Multi-Finger
// =========================================================================
function pkHaptic(ms = 12) {
  try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {}
}

// --- 19A. SAFE BLOCK HANDLE TAP MENU + TRUE TOUCH/POINTER BLOCK DRAG & DROP ---
let pkTouchMenuBlockId = null;
let pkBlockDragState = null;
let pkSuppressNextHandleClick = false;

function closeBlockTouchMenu() {
  const menu = document.getElementById('pkBlockTouchMenu');
  if (menu) menu.classList.add('hidden');
  pkTouchMenuBlockId = null;
}

function handleBlockHandleTap(e, blockId) {
  if (e) e.stopPropagation();
  if (pkSuppressNextHandleClick) {
    pkSuppressNextHandleClick = false;
    return;
  }
  const note = getActiveNote();
  if (note && note.locked) {
    showToast('Note is locked (read-only)', 'ochre');
    return;
  }
  const menu = document.getElementById('pkBlockTouchMenu');
  if (!menu) return;
  if (pkTouchMenuBlockId === blockId && !menu.classList.contains('hidden')) {
    closeBlockTouchMenu();
    return;
  }
  pkTouchMenuBlockId = blockId;
  menu.classList.remove('hidden');

  const btnRect = e && e.currentTarget ? e.currentTarget.getBoundingClientRect() : { left: 20, bottom: 120 };
  const menuW = menu.offsetWidth || 210;
  const left = Math.max(8, Math.min(window.innerWidth - menuW - 8, btnRect.left));
  const top = Math.max(52, Math.min(window.innerHeight - 60, btnRect.bottom + 6));
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  pkHaptic(8);
}

function moveTouchMenuBlock(delta) {
  if (!pkTouchMenuBlockId) return;
  const note = getActiveNote();
  if (!note || note.locked) return;
  const idx = note.blocks.findIndex(b => b.id === pkTouchMenuBlockId);
  const targetIdx = idx + delta;
  if (idx < 0 || targetIdx < 0 || targetIdx >= note.blocks.length) {
    closeBlockTouchMenu();
    return;
  }
  if (typeof takeSnapshot === 'function') takeSnapshot('move-block');
  const [moved] = note.blocks.splice(idx, 1);
  note.blocks.splice(targetIdx, 0, moved);
  note.updatedAt = TODAY_KEY;
  renderBlocks(note);
  persistState();
  pkHaptic(10);
  closeBlockTouchMenu();
}

function duplicateTouchMenuBlock() {
  if (!pkTouchMenuBlockId) return;
  if (typeof duplicateBlock === 'function') {
    duplicateBlock(pkTouchMenuBlockId);
  }
  pkHaptic(10);
  closeBlockTouchMenu();
}

function deleteTouchMenuBlock() {
  if (!pkTouchMenuBlockId) return;
  const id = pkTouchMenuBlockId;
  closeBlockTouchMenu();
  deleteBlock(id);
  pkHaptic(14);
}

document.addEventListener('pointerdown', (e) => {
  const menu = document.getElementById('pkBlockTouchMenu');
  if (menu && !menu.classList.contains('hidden')) {
    if (!e.target.closest('#pkBlockTouchMenu') && !e.target.closest('[data-drag-handle]')) {
      closeBlockTouchMenu();
    }
  }

  const handle = e.target.closest('[data-drag-handle]');
  if (!handle || e.button === 2) return;
  const note = getActiveNote();
  if (!note || note.locked) return;

  const blockId = handle.getAttribute('data-drag-handle');
  const row = handle.closest('.block-row');
  if (!row) return;

  pkBlockDragState = {
    pointerId: e.pointerId,
    blockId,
    row,
    startX: e.clientX,
    startY: e.clientY,
    active: false,
    ghost: null,
    targetIndex: -1
  };
}, { passive: true });

document.addEventListener('pointermove', (e) => {
  if (!pkBlockDragState || e.pointerId !== pkBlockDragState.pointerId) return;

  const dx = e.clientX - pkBlockDragState.startX;
  const dy = e.clientY - pkBlockDragState.startY;

  if (!pkBlockDragState.active) {
    if (Math.hypot(dx, dy) < 7) return;
    pkBlockDragState.active = true;
    pkSuppressNextHandleClick = true;
    closeBlockTouchMenu();
    pkHaptic(12);

    const rect = pkBlockDragState.row.getBoundingClientRect();
    const ghost = document.createElement('div');
    ghost.className = 'fixed pointer-events-none z-[936] rounded-lg border border-[var(--accent-vermilion)] bg-[var(--bg-panel)]/95 shadow-2xl px-3 py-2 text-xs text-[var(--text-primary)] truncate backdrop-blur-md';
    ghost.style.width = `${Math.min(rect.width, window.innerWidth - 32)}px`;
    ghost.style.left = `${Math.max(16, rect.left)}px`;
    ghost.style.top = `${e.clientY - 20}px`;
    const textPreview = (pkBlockDragState.row.innerText || 'Block').trim().slice(0, 72);
    ghost.textContent = textPreview || 'Moving block...';
    document.body.appendChild(ghost);
    pkBlockDragState.ghost = ghost;
    pkBlockDragState.row.style.opacity = '0.35';
  }

  if (e.cancelable) e.preventDefault();

  if (pkBlockDragState.ghost) {
    pkBlockDragState.ghost.style.top = `${e.clientY - 20}px`;
  }

  // Auto-scroll editor container near top/bottom viewport edges
  const scroller = document.getElementById('editorScrollArea') || document.querySelector('main');
  if (scroller) {
    if (e.clientY < 95) scroller.scrollTop -= 10;
    else if (e.clientY > window.innerHeight - 95) scroller.scrollTop += 10;
  }

  // Compute exact insertion index & draw vermilion drop indicator line
  const rows = Array.from(document.querySelectorAll('#blocksContainer .block-row'));
  const dropLine = document.getElementById('pkBlockDropLine');
  if (rows.length === 0 || !dropLine) return;

  let insertIdx = rows.length;
  let lineY = rows[rows.length - 1].getBoundingClientRect().bottom + 2;
  const baseRect = rows[0].getBoundingClientRect();

  for (let i = 0; i < rows.length; i++) {
    const r = rows[i].getBoundingClientRect();
    const midY = r.top + r.height / 2;
    if (e.clientY < midY) {
      insertIdx = i;
      lineY = r.top - 2;
      break;
    }
  }

  pkBlockDragState.targetIndex = insertIdx;
  dropLine.style.left = `${Math.max(12, baseRect.left)}px`;
  dropLine.style.width = `${Math.min(baseRect.width, window.innerWidth - 24)}px`;
  dropLine.style.top = `${lineY}px`;
  dropLine.classList.remove('hidden');
}, { passive: false });

function finishBlockTouchDrag(e) {
  if (!pkBlockDragState || (e && e.pointerId !== pkBlockDragState.pointerId)) return;
  const st = pkBlockDragState;
  pkBlockDragState = null;

  if (st.ghost) st.ghost.remove();
  if (st.row) st.row.style.opacity = '';
  const dropLine = document.getElementById('pkBlockDropLine');
  if (dropLine) dropLine.classList.add('hidden');

  if (!st.active || st.targetIndex < 0) return;
  setTimeout(() => { pkSuppressNextHandleClick = false; }, 60);

  const note = getActiveNote();
  if (!note || note.locked) return;
  const fromIdx = note.blocks.findIndex(b => b.id === st.blockId);
  if (fromIdx < 0) return;

  let toIdx = st.targetIndex;
  if (toIdx > fromIdx) toIdx--;
  if (toIdx === fromIdx) return;

  if (typeof takeSnapshot === 'function') takeSnapshot('touch-reorder-block');
  const [moved] = note.blocks.splice(fromIdx, 1);
  note.blocks.splice(toIdx, 0, moved);
  note.updatedAt = TODAY_KEY;
  renderBlocks(note);
  persistState();
  pkHaptic(14);
  if (typeof playMechanicalClick === 'function') playMechanicalClick(0.9);
  showToast('Reordered block');
}

document.addEventListener('pointerup', finishBlockTouchDrag);
document.addEventListener('pointercancel', finishBlockTouchDrag);

// --- 19B. DRAGGABLE FLOATING WIDGETS (Move HUDs Anywhere With Your Finger!) ---
function makeFloatingWidgetDraggable(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.style.touchAction = 'none';

  let drag = null;
  let lastTapTs = 0;

  // Double-tap widget body to snap back to default centered/docked position
  el.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button, input, textarea, select, a, label')) return;
    const now = Date.now();
    if (now - lastTapTs < 300) {
      el.style.left = '';
      el.style.top = '';
      el.style.right = '';
      el.style.bottom = '';
      el.style.margin = '';
      lastTapTs = 0;
      pkHaptic(8);
      showToast('Widget position reset');
      return;
    }
    lastTapTs = now;

    const rect = el.getBoundingClientRect();
    drag = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      origLeft: rect.left,
      origTop: rect.top,
      moved: false
    };
  });

  window.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;

    drag.moved = true;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const nextLeft = Math.max(6, Math.min(window.innerWidth - w - 6, drag.origLeft + dx));
    const nextTop = Math.max(6, Math.min(window.innerHeight - h - 6, drag.origTop + dy));

    el.style.margin = '0';
    el.style.right = 'auto';
    el.style.bottom = 'auto';
    el.style.left = `${nextLeft}px`;
    el.style.top = `${nextTop}px`;
  });

  const endDrag = (e) => {
    if (drag && e.pointerId === drag.pointerId) drag = null;
  };
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
}

// --- 19C. KNOWLEDGE GRAPH MULTI-TOUCH: 2-FINGER PINCH-ZOOM, LONG-PRESS LINK, DOUBLE-TAP CREATE ---
function attachGraphFingerGestures(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  let pinchState = null;
  let longPressTimer = null;
  let touchStartInfo = null;
  let lastEmptyTapTs = 0;

  canvas.addEventListener('touchstart', (e) => {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }

    // 2-Finger Pinch-to-Zoom + 2-Finger Pan
    if (e.touches.length === 2) {
      if (e.cancelable) e.preventDefault();
      const t1 = e.touches[0], t2 = e.touches[1];
      const rect = canvas.getBoundingClientRect();
      const midX = (t1.clientX + t2.clientX) / 2 - rect.left;
      const midY = (t1.clientY + t2.clientY) / 2 - rect.top;
      pinchState = {
        startDist: Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY) || 1,
        startZoom: graphZoom,
        startPanX: graphPan.x,
        startPanY: graphPan.y,
        startMidX: midX,
        startMidY: midY
      };
      return;
    }

    // 1-Finger: Long-press on a node to start connection wire OR double-tap empty canvas to create note
    if (e.touches.length === 1) {
      const t = e.touches[0];
      const pos = getGraphPointerPos(canvas, t);
      touchStartInfo = { x: t.clientX, y: t.clientY, pos };
      const hit = findNodeAt(pos);

      if (hit) {
        longPressTimer = setTimeout(() => {
          longPressTimer = null;
          if (typeof draggedNode !== 'undefined') draggedNode = null;
          if (typeof startConnectionFromNode === 'function') {
            startConnectionFromNode(hit);
            pkHaptic(20);
            showToast(`Drag finger from "${hit.title}" to another note to link`);
          }
        }, 420);
      } else {
        const now = Date.now();
        if (now - lastEmptyTapTs < 320 && typeof promptCreateNoteAtCanvas === 'function') {
          lastEmptyTapTs = 0;
          pkHaptic(10);
          promptCreateNoteAtCanvas(pos.x, pos.y, pos.screenX, pos.screenY);
        } else {
          lastEmptyTapTs = now;
        }
      }
    }
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (pinchState && e.touches.length === 2) {
      if (e.cancelable) e.preventDefault();
      const t1 = e.touches[0], t2 = e.touches[1];
      const rect = canvas.getBoundingClientRect();
      const midX = (t1.clientX + t2.clientX) / 2 - rect.left;
      const midY = (t1.clientY + t2.clientY) / 2 - rect.top;
      const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY) || 1;
      const scaleRatio = dist / pinchState.startDist;
      const nextZoom = Math.max(0.35, Math.min(3.0, pinchState.startZoom * scaleRatio));

      // Keep the world point under the pinch midpoint anchored smoothly
      const worldX = (pinchState.startMidX - pinchState.startPanX) / pinchState.startZoom;
      const worldY = (pinchState.startMidY - pinchState.startPanY) / pinchState.startZoom;
      graphZoom = nextZoom;
      graphPan.x = midX - worldX * nextZoom;
      graphPan.y = midY - worldY * nextZoom;
      if (typeof updateGraphZoomBadges === 'function') updateGraphZoomBadges();
      return;
    }

    if (longPressTimer && touchStartInfo && e.touches.length === 1) {
      const t = e.touches[0];
      if (Math.hypot(t.clientX - touchStartInfo.x, t.clientY - touchStartInfo.y) > 10) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    }
  }, { passive: false });

  const endTouch = (e) => {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
    if (e.touches.length < 2) pinchState = null;
  };
  canvas.addEventListener('touchend', endTouch);
  canvas.addEventListener('touchcancel', endTouch);
}

// --- 19D. SWIPE-DOWN-TO-DISMISS ON ALL MOBILE BOTTOM SHEETS ---
function attachSwipeDownDismiss(backdropId, closeFn) {
  const backdrop = document.getElementById(backdropId);
  if (!backdrop) return;
  const sheet = backdrop.firstElementChild;
  if (!sheet) return;

  let swipe = null;

  sheet.addEventListener('touchstart', (e) => {
    if (window.innerWidth >= 640 || e.touches.length !== 1) return;
    const scrollArea = sheet.querySelector('.overflow-y-auto');
    // Allow swipe-down when touching header or when scrolled to top
    const inScroll = scrollArea && scrollArea.contains(e.target);
    if (inScroll && scrollArea.scrollTop > 4) return;
    swipe = {
      startY: e.touches[0].clientY,
      dy: 0,
      active: false
    };
  }, { passive: true });

  sheet.addEventListener('touchmove', (e) => {
    if (!swipe || e.touches.length !== 1) return;
    const dy = e.touches[0].clientY - swipe.startY;
    if (dy <= 6) return;
    swipe.active = true;
    swipe.dy = dy;
    sheet.style.transition = 'none';
    sheet.style.transform = `translateY(${dy}px)`;
  }, { passive: true });

  const finishSwipe = () => {
    if (!swipe) return;
    const dy = swipe.dy;
    const wasActive = swipe.active;
    swipe = null;
    if (!wasActive) return;

    sheet.style.transition = 'transform 0.18s ease-out';
    if (dy > 75) {
      sheet.style.transform = `translateY(100%)`;
      pkHaptic(8);
      setTimeout(() => {
        sheet.style.transition = '';
        sheet.style.transform = '';
        closeFn();
      }, 170);
    } else {
      sheet.style.transform = 'translateY(0)';
      setTimeout(() => { sheet.style.transition = ''; sheet.style.transform = ''; }, 180);
    }
  };
  sheet.addEventListener('touchend', finishSwipe);
  sheet.addEventListener('touchcancel', finishSwipe);
}

// --- 19E. EDGE-SWIPE SIDEBARS, CALENDAR FLICK, TODO SWIPE-TO-CHECK & 2/3-FINGER UNDO/REDO ---
(function initGlobalFingerGestures() {
  let gesture = null;
  let multiTap = null;

  document.addEventListener('touchstart', (e) => {
    const targetEl = e.target && e.target.nodeType === 1 ? e.target : (e.target && e.target.parentElement ? e.target.parentElement : null);

    // Multi-finger Undo (2-finger tap) / Redo (3-finger tap) on editor canvas
    if ((e.touches.length === 2 || e.touches.length === 3) && !(targetEl && targetEl.closest('canvas'))) {
      multiTap = {
        fingers: e.touches.length,
        startTs: Date.now(),
        pts: Array.from(e.touches).map(t => ({ x: t.clientX, y: t.clientY })),
        moved: false
      };
      gesture = null;
      return;
    }

    if (e.touches.length !== 1) { gesture = null; return; }
    // Skip global swipes if inside graph canvas, sliders, or open modals
    if (targetEl && targetEl.closest('canvas, input[type="range"], [data-drag-handle], #voiceModelModalBackdrop, #mobileMoreSheetBackdrop, #templatesModalBackdrop, #focusTimerModalBackdrop')) {
      gesture = null;
      return;
    }

    const t = e.touches[0];
    gesture = {
      startX: t.clientX,
      startY: t.clientY,
      startTs: Date.now(),
      target: targetEl,
      todoRow: targetEl ? targetEl.closest('.block-row') : null
    };
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (multiTap) {
      for (let i = 0; i < Math.min(e.touches.length, multiTap.pts.length); i++) {
        if (Math.hypot(e.touches[i].clientX - multiTap.pts[i].x, e.touches[i].clientY - multiTap.pts[i].y) > 16) {
          multiTap.moved = true;
        }
      }
    }
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    // Complete 2-finger / 3-finger tap -> Undo / Redo
    if (multiTap && e.touches.length === 0) {
      const dt = Date.now() - multiTap.startTs;
      const fingers = multiTap.fingers;
      const moved = multiTap.moved;
      multiTap = null;
      if (!moved && dt < 280) {
        if (fingers === 2 && typeof performUndo === 'function') {
          performUndo();
          pkHaptic(10);
        } else if (fingers === 3 && typeof performRedo === 'function') {
          performRedo();
          pkHaptic(12);
        }
      }
      return;
    }

    if (!gesture || e.changedTouches.length === 0) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - gesture.startX;
    const dy = t.clientY - gesture.startY;
    const dt = Date.now() - gesture.startTs;
    const g = gesture;
    gesture = null;

    // Require horizontal deliberate swipe
    if (dt > 550 || Math.abs(dx) < 55 || Math.abs(dy) > Math.abs(dx) * 0.65) return;

    const W = window.innerWidth;

    // 1. Edge-swipe on Mobile / Tablet (< 1024px) for Left Vault Sidebar & Right Inspector
    if (W < 1024) {
      if (state.leftSidebarOpen && dx < -60) {
        closeMobileSidebar();
        pkHaptic(8);
        return;
      }
      if (state.rightSidebarOpen && dx > 60) {
        closeRightSidebar();
        pkHaptic(8);
        return;
      }
      if (!state.leftSidebarOpen && !state.rightSidebarOpen && g.startX < 30 && dx > 55) {
        toggleLeftSidebar();
        pkHaptic(10);
        return;
      }
      if (!state.leftSidebarOpen && !state.rightSidebarOpen && g.startX > W - 30 && dx < -55) {
        toggleRightSidebar();
        pkHaptic(10);
        return;
      }
    }

    // 2. Calendar Horizontal Flick -> Next / Previous Month, Week, or Day
    if (state.appMode === 'calendar' && typeof navigateCalendar === 'function') {
      navigateCalendar(dx < 0 ? 1 : -1);
      pkHaptic(8);
      return;
    }

    // (Todo & paragraph horizontal sliding is handled smoothly by Section 20D live spring-physics!)
  }, { passive: true });
})();

// Initialize all finger-first widgets, graph touch, and swipe-down sheets
function initFingerControlEngine() {
  makeFloatingWidgetDraggable('pkAudioReaderHUD');
  makeFloatingWidgetDraggable('pkFocusTimerHUD');
  makeFloatingWidgetDraggable('pkDictationHUD');
  makeFloatingWidgetDraggable('pkFindReplaceBar');

  attachGraphFingerGestures('knowledgeGraphCanvas');
  attachGraphFingerGestures('expandedKnowledgeGraphCanvas');

  attachSwipeDownDismiss('mobileMoreSheetBackdrop', closeMobileMoreSheet);
  attachSwipeDownDismiss('voiceModelModalBackdrop', closeVoiceModelModal);
  attachSwipeDownDismiss('templatesModalBackdrop', closeTemplatesModal);
  attachSwipeDownDismiss('focusTimerModalBackdrop', closeFocusTimerModal);
  attachSwipeDownDismiss('mobileQuickMenuBackdrop', closeMobileQuickMenu);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFingerControlEngine);
} else {
  initFingerControlEngine();
}

// =========================================================================
// 20. MAGNETIC FINGER-PHYSICS & FULL-APP DRAG/DROP SUITE
//     Touch Ripples · Sidebar Note Drag-Drop · Calendar Event Finger Drag ·
//     Live Spring Block Slide · Header Flick Note Switch · Tag Flick
// =========================================================================

// --- 20A. MINIMALIST SWISS VERMILION MICRO-RING TOUCH RIPPLE ---
function pkSpawnTouchRipple(x, y, color = 'var(--accent-vermilion)') {
  try {
    const ring = document.createElement('div');
    ring.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 14px;
      height: 14px;
      margin-left: -7px;
      margin-top: -7px;
      border-radius: 9999px;
      border: 1.5px solid ${color};
      pointer-events: none;
      z-index: 9999;
      opacity: 0.9;
      transform: scale(0.6);
      transition: transform 0.36s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.36s ease-out;
    `;
    document.body.appendChild(ring);
    requestAnimationFrame(() => {
      ring.style.transform = 'scale(3.6)';
      ring.style.opacity = '0';
    });
    setTimeout(() => ring.remove(), 380);
  } catch (e) {}
}

// --- 20B. FINGER DRAG & DROP NOTES IN SIDEBAR (REORDER & MOVE ACROSS FOLDERS!) ---
(function initSidebarNoteFingerDragDrop() {
  let noteDrag = null;
  let holdTimer = null;

  function clearSidebarDropHighlights() {
    document.querySelectorAll('.pk-folder-drop-hot').forEach(el => {
      el.classList.remove('pk-folder-drop-hot');
      el.style.outline = '';
      el.style.backgroundColor = '';
    });
    const line = document.getElementById('pkBlockDropLine');
    if (line) line.classList.add('hidden');
  }

  function activateNoteDrag(x, y) {
    if (!noteDrag || noteDrag.active) return;
    noteDrag.active = true;
    pkHaptic(14);
    pkSpawnTouchRipple(x, y);

    const ghost = document.createElement('div');
    ghost.className = 'fixed pointer-events-none z-[990] px-3 py-2 rounded-lg bg-[var(--bg-panel)]/95 border border-[var(--accent-vermilion)] shadow-2xl font-serif text-xs font-medium text-[var(--text-primary)] truncate max-w-[230px] backdrop-blur-md';
    ghost.textContent = noteDrag.title || 'Moving note...';
    ghost.style.left = `${Math.max(8, x - 90)}px`;
    ghost.style.top = `${Math.max(8, y - 22)}px`;
    document.body.appendChild(ghost);
    noteDrag.ghost = ghost;
    noteDrag.btn.style.opacity = '0.35';
  }

  document.addEventListener('pointerdown', (e) => {
    if (e.button === 2) return;
    const targetEl = e.target && e.target.nodeType === 1 ? e.target : e.target?.parentElement;
    const btn = targetEl ? targetEl.closest('.sidebar-note-btn[data-note-id]') : null;
    if (!btn) return;

    const noteId = btn.getAttribute('data-note-id');
    const note = state.notes.find(n => n.id === noteId);
    if (!note) return;

    noteDrag = {
      pointerId: e.pointerId,
      noteId,
      title: note.title || 'Untitled',
      btn,
      startX: e.clientX,
      startY: e.clientY,
      active: false,
      ghost: null,
      targetFolder: null,
      targetNoteId: null,
      insertBefore: true
    };

    // Long-press 260ms lifts the note cleanly for finger drag-and-drop without blocking normal taps/scrolls
    holdTimer = setTimeout(() => {
      holdTimer = null;
      if (noteDrag) activateNoteDrag(noteDrag.startX, noteDrag.startY);
    }, 260);
  }, { passive: true });

  document.addEventListener('pointermove', (e) => {
    if (!noteDrag || e.pointerId !== noteDrag.pointerId) return;
    const dx = e.clientX - noteDrag.startX;
    const dy = e.clientY - noteDrag.startY;

    if (!noteDrag.active) {
      if (Math.hypot(dx, dy) > 10) {
        if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
        // Cancel if user is just scrolling the sidebar vertically before long-press
        noteDrag = null;
      }
      return;
    }

    if (e.cancelable) e.preventDefault();
    if (noteDrag.ghost) {
      noteDrag.ghost.style.left = `${Math.max(8, Math.min(window.innerWidth - 180, e.clientX - 80))}px`;
      noteDrag.ghost.style.top = `${Math.max(8, Math.min(window.innerHeight - 44, e.clientY - 22))}px`;
    }

    clearSidebarDropHighlights();
    noteDrag.targetFolder = null;
    noteDrag.targetNoteId = null;

    const under = document.elementFromPoint(e.clientX, e.clientY);
    if (!under) return;

    const folderEl = under.closest('[data-folder-drop]');
    if (folderEl) {
      noteDrag.targetFolder = folderEl.getAttribute('data-folder-drop');
      folderEl.classList.add('pk-folder-drop-hot');
      folderEl.style.outline = '1.5px solid var(--accent-vermilion)';
      folderEl.style.backgroundColor = 'var(--accent-vermilion-tint)';
      return;
    }

    const otherNoteBtn = under.closest('.sidebar-note-btn[data-note-id]');
    if (otherNoteBtn && otherNoteBtn.getAttribute('data-note-id') !== noteDrag.noteId) {
      const r = otherNoteBtn.getBoundingClientRect();
      noteDrag.targetNoteId = otherNoteBtn.getAttribute('data-note-id');
      noteDrag.insertBefore = e.clientY < (r.top + r.height / 2);
      const line = document.getElementById('pkBlockDropLine');
      if (line) {
        line.style.left = `${r.left}px`;
        line.style.width = `${r.width}px`;
        line.style.top = `${noteDrag.insertBefore ? r.top - 1 : r.bottom - 1}px`;
        line.classList.remove('hidden');
      }
    }
  }, { passive: false });

  function finishSidebarNoteDrag(e) {
    if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
    if (!noteDrag || (e && e.pointerId !== noteDrag.pointerId)) return;

    const st = noteDrag;
    noteDrag = null;
    if (st.ghost) st.ghost.remove();
    if (st.btn) st.btn.style.opacity = '';
    clearSidebarDropHighlights();

    if (!st.active) return;

    // Prevent the trailing click from re-selecting/closing sidebar accidentally
    const suppressClick = (ev) => { ev.stopPropagation(); ev.preventDefault(); };
    window.addEventListener('click', suppressClick, { capture: true, once: true });
    setTimeout(() => window.removeEventListener('click', suppressClick, { capture: true }), 80);

    const movingNote = state.notes.find(n => n.id === st.noteId);
    if (!movingNote) return;

    if (st.targetFolder) {
      movingNote.folder = st.targetFolder;
      state.expandedFolders[st.targetFolder] = true;
      renderSidebar();
      if (state.activeNoteId === movingNote.id) renderActiveNote();
      persistState();
      pkHaptic(16);
      if (e) pkSpawnTouchRipple(e.clientX, e.clientY);
      showToast(`Moved "${movingNote.title}" to ${st.targetFolder}`);
      return;
    }

    if (st.targetNoteId) {
      const fromIdx = state.notes.findIndex(n => n.id === st.noteId);
      const targetNote = state.notes.find(n => n.id === st.targetNoteId);
      if (fromIdx >= 0 && targetNote) {
        movingNote.folder = targetNote.folder || 'General';
        state.notes.splice(fromIdx, 1);
        let toIdx = state.notes.findIndex(n => n.id === st.targetNoteId);
        if (!st.insertBefore) toIdx++;
        state.notes.splice(toIdx, 0, movingNote);
        renderSidebar();
        persistState();
        pkHaptic(14);
        if (e) pkSpawnTouchRipple(e.clientX, e.clientY);
        showToast(`Reordered "${movingNote.title}"`);
      }
    }
  }

  document.addEventListener('pointerup', finishSidebarNoteDrag);
  document.addEventListener('pointercancel', finishSidebarNoteDrag);
  document.addEventListener('touchmove', (e) => {
    if (noteDrag && noteDrag.active && e.cancelable) e.preventDefault();
  }, { passive: false });
  document.addEventListener('contextmenu', (e) => {
    if (noteDrag && noteDrag.active) e.preventDefault();
  });
})();

// --- 20C. FINGER DRAG & DROP CALENDAR EVENTS ON MONTH GRID ---
(function initCalendarEventFingerDragDrop() {
  let calDrag = null;
  let holdTimer = null;

  function clearCalHighlights() {
    document.querySelectorAll('.pk-cal-drop-hot').forEach(el => {
      el.classList.remove('pk-cal-drop-hot');
      el.style.outline = '';
      el.style.outlineOffset = '';
    });
  }

  document.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') return; // Mouse already has native HTML5 drag on calendar
    const targetEl = e.target && e.target.nodeType === 1 ? e.target : e.target?.parentElement;
    const evtEl = targetEl ? targetEl.closest('[data-event-id]') : null;
    if (!evtEl) return;

    const eventId = evtEl.getAttribute('data-event-id');
    const evt = (state.events || []).find(item => item.id === eventId);
    if (!evt) return;

    calDrag = {
      pointerId: e.pointerId,
      eventId,
      title: evt.title || 'Event',
      el: evtEl,
      startX: e.clientX,
      startY: e.clientY,
      active: false,
      ghost: null,
      targetDateKey: null
    };

    holdTimer = setTimeout(() => {
      holdTimer = null;
      if (!calDrag) return;
      calDrag.active = true;
      pkHaptic(16);
      pkSpawnTouchRipple(calDrag.startX, calDrag.startY);

      const ghost = document.createElement('div');
      ghost.className = 'fixed pointer-events-none z-[990] px-2.5 py-1.5 rounded-md bg-[var(--accent-vermilion)] text-white shadow-2xl font-mono text-[10px] font-semibold truncate max-w-[180px]';
      ghost.textContent = calDrag.title;
      ghost.style.left = `${calDrag.startX - 50}px`;
      ghost.style.top = `${calDrag.startY - 26}px`;
      document.body.appendChild(ghost);
      calDrag.ghost = ghost;
      calDrag.el.style.opacity = '0.35';
    }, 240);
  }, { passive: true });

  document.addEventListener('pointermove', (e) => {
    if (!calDrag || e.pointerId !== calDrag.pointerId) return;
    if (!calDrag.active) {
      if (Math.hypot(e.clientX - calDrag.startX, e.clientY - calDrag.startY) > 10) {
        if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
        calDrag = null;
      }
      return;
    }
    if (e.cancelable) e.preventDefault();
    if (calDrag.ghost) {
      calDrag.ghost.style.left = `${e.clientX - 50}px`;
      calDrag.ghost.style.top = `${e.clientY - 28}px`;
    }
    clearCalHighlights();
    calDrag.targetDateKey = null;

    const under = document.elementFromPoint(e.clientX, e.clientY);
    const cell = under ? under.closest('[data-date-key]') : null;
    if (cell) {
      calDrag.targetDateKey = cell.getAttribute('data-date-key');
      cell.classList.add('pk-cal-drop-hot');
      cell.style.outline = '2px solid var(--accent-vermilion)';
      cell.style.outlineOffset = '-2px';
    }
  }, { passive: false });

  function finishCalDrag(e) {
    if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
    if (!calDrag || (e && e.pointerId !== calDrag.pointerId)) return;
    const st = calDrag;
    calDrag = null;
    if (st.ghost) st.ghost.remove();
    if (st.el) st.el.style.opacity = '';
    clearCalHighlights();

    if (!st.active) return;

    // Prevent trailing click from opening event preview right after dragging
    const suppressClick = (ev) => { ev.stopPropagation(); ev.preventDefault(); };
    window.addEventListener('click', suppressClick, { capture: true, once: true });
    setTimeout(() => window.removeEventListener('click', suppressClick, { capture: true }), 80);

    if (!st.targetDateKey) return;

    const evt = state.events.find(item => item.id === st.eventId);
    if (!evt) return;
    const norm = normalizeEventRange(evt);
    const deltaDays = diffDaysDateKeys(norm.startDateKey, st.targetDateKey);
    if (deltaDays === 0) return;

    if (evt.all_day) {
      evt.start_datetime = addDaysToDateKey(norm.startDateKey, deltaDays);
      if (evt.end_datetime) evt.end_datetime = addDaysToDateKey(norm.endDateKey, deltaDays);
    } else {
      const newStart = new Date(norm.start.getFullYear(), norm.start.getMonth(), norm.start.getDate() + deltaDays, norm.start.getHours(), norm.start.getMinutes(), 0, 0);
      evt.start_datetime = newStart.toISOString();
      if (evt.end_datetime) {
        const dur = norm.end.getTime() - norm.start.getTime();
        evt.end_datetime = new Date(newStart.getTime() + dur).toISOString();
      }
    }
    state.calendarSelectedDate = st.targetDateKey;
    renderAll();
    persistState();
    pkHaptic(16);
    if (e) pkSpawnTouchRipple(e.clientX, e.clientY);
    showToast(`Rescheduled "${evt.title}" to ${st.targetDateKey}`);
  }

  document.addEventListener('pointerup', finishCalDrag);
  document.addEventListener('pointercancel', finishCalDrag);
  document.addEventListener('touchmove', (e) => {
    if (calDrag && calDrag.active && e.cancelable) e.preventDefault();
  }, { passive: false });
  document.addEventListener('contextmenu', (e) => {
    if (calDrag && calDrag.active) e.preventDefault();
  });
})();

// --- 20D. LIVE SPRING-PHYSICS FINGER SLIDING ON ANY BLOCK ROW ---
//     Slide Right -> Complete/Reopen Todo (or Convert to Todo!)
//     Slide Left  -> Duplicate (-65px) or Delete (-125px, Undo supported!)
(function initLiveSpringBlockSliding() {
  let slide = null;
  const badge = document.getElementById('pkBlockSlideBadge');

  document.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    const targetEl = e.target && e.target.nodeType === 1 ? e.target : e.target?.parentElement;
    if (!targetEl || targetEl.closest('[data-drag-handle], input, button, canvas')) return;
    const row = targetEl.closest('#blocksContainer .block-row');
    if (!row) return;
    const note = getActiveNote();
    if (!note || note.locked) return;

    const t = e.touches[0];
    // Ignore screen-edge swipes reserved for Left/Right Sidebars
    if (t.clientX < 32 || t.clientX > window.innerWidth - 32) return;

    const rowId = row.getAttribute('data-row-id');
    const blk = note.blocks.find(b => b.id === rowId);
    if (!blk) return;

    slide = {
      row,
      blockId: rowId,
      blockType: blk.type,
      checked: !!blk.checked,
      startX: t.clientX,
      startY: t.clientY,
      dx: 0,
      lockedHoriz: false,
      aborted: false
    };
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!slide || slide.aborted || e.touches.length !== 1) return;
    const t = e.touches[0];
    const dx = t.clientX - slide.startX;
    const dy = t.clientY - slide.startY;

    if (!slide.lockedHoriz) {
      if (Math.abs(dy) > 14 && Math.abs(dy) > Math.abs(dx)) {
        slide.aborted = true;
        return;
      }
      if (Math.abs(dx) < 18) return;
      slide.lockedHoriz = true;
    }

    // Rubber-band damped offset so the block glides physically under your finger!
    const clamped = Math.max(-150, Math.min(110, dx * 0.72));
    slide.dx = dx;
    slide.row.style.transition = 'none';
    slide.row.style.transform = `translateX(${clamped}px)`;

    if (badge) {
      const r = slide.row.getBoundingClientRect();
      badge.style.top = `${Math.max(54, r.top + r.height / 2 - 12)}px`;
      if (dx > 62) {
        badge.textContent = slide.blockType === 'todo' ? (slide.checked ? 'Reopen' : 'Complete') : 'Make Todo';
        badge.style.left = '14px';
        badge.style.right = 'auto';
        badge.className = 'fixed pointer-events-none z-[945] px-2.5 py-1 rounded-full font-mono text-[10px] font-semibold uppercase tracking-wider shadow-lg backdrop-blur-md bg-emerald-600 text-white';
      } else if (dx < -120) {
        badge.textContent = 'Delete';
        badge.style.left = 'auto';
        badge.style.right = '14px';
        badge.className = 'fixed pointer-events-none z-[945] px-2.5 py-1 rounded-full font-mono text-[10px] font-semibold uppercase tracking-wider shadow-lg backdrop-blur-md bg-red-600 text-white';
      } else if (dx < -62) {
        badge.textContent = 'Duplicate';
        badge.style.left = 'auto';
        badge.style.right = '14px';
        badge.className = 'fixed pointer-events-none z-[945] px-2.5 py-1 rounded-full font-mono text-[10px] font-semibold uppercase tracking-wider shadow-lg backdrop-blur-md bg-[var(--accent-vermilion)] text-white';
      } else {
        badge.classList.add('hidden');
      }
    }
  }, { passive: true });

  const endSlide = (e) => {
    if (!slide) return;
    const st = slide;
    slide = null;
    if (badge) badge.classList.add('hidden');

    if (!st.lockedHoriz || st.aborted) return;

    // Smooth spring-back animation
    st.row.style.transition = 'transform 0.24s cubic-bezier(0.22, 1, 0.36, 1)';
    st.row.style.transform = 'translateX(0)';
    setTimeout(() => { st.row.style.transition = ''; st.row.style.transform = ''; }, 250);

    const note = getActiveNote();
    if (!note || note.locked) return;
    const blk = note.blocks.find(b => b.id === st.blockId);
    if (!blk) return;

    const touchPt = e && e.changedTouches && e.changedTouches[0];
    if (st.dx > 62) {
      if (typeof takeSnapshot === 'function') takeSnapshot('slide-right-block');
      if (blk.type === 'todo') {
        blk.checked = !blk.checked;
        showToast(blk.checked ? 'Marked task complete' : 'Reopened task');
      } else {
        blk.type = 'todo';
        blk.checked = false;
        showToast('Converted block to Todo');
      }
      note.updatedAt = TODAY_KEY;
      renderBlocks(note);
      persistState();
      pkHaptic(12);
      if (touchPt) pkSpawnTouchRipple(touchPt.clientX, touchPt.clientY, '#10B981');
    } else if (st.dx < -120) {
      deleteBlock(st.blockId);
      pkHaptic(16);
      if (touchPt) pkSpawnTouchRipple(touchPt.clientX, touchPt.clientY, '#EF4444');
    } else if (st.dx < -62) {
      if (typeof duplicateBlock === 'function') duplicateBlock(st.blockId);
      pkHaptic(10);
      if (touchPt) pkSpawnTouchRipple(touchPt.clientX, touchPt.clientY);
    }
  };

  document.addEventListener('touchend', endSlide, { passive: true });
  document.addEventListener('touchcancel', endSlide, { passive: true });
})();

// --- 20E. 1-THUMB HEADER FLICK TO FLIP BETWEEN NOTES ---
(function initHeaderNoteFlick() {
  const header = document.getElementById('topHeaderBar');
  if (!header) return;
  let startX = 0, startY = 0, tracking = false;

  header.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1 || state.appMode !== 'workspace') return;
    const targetEl = e.target && e.target.nodeType === 1 ? e.target : e.target?.parentElement;
    if (targetEl && targetEl.closest('button')) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    tracking = true;
  }, { passive: true });

  header.addEventListener('touchend', (e) => {
    if (!tracking || e.changedTouches.length === 0) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) < 55 || Math.abs(dy) > 40 || state.notes.length < 2) return;

    const curIdx = state.notes.findIndex(n => n.id === state.activeNoteId);
    if (curIdx < 0) return;
    const nextIdx = (curIdx + (dx < 0 ? 1 : -1) + state.notes.length) % state.notes.length;
    selectNote(state.notes[nextIdx].id);
    pkHaptic(10);
    pkSpawnTouchRipple(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    showToast(`Switched to "${state.notes[nextIdx].title || 'Untitled'}"`);
  }, { passive: true });
})();

// --- 20F. FLICK TAG PILLS UP/DOWN TO POP THEM OFF CLEANLY ---
(function initTagPillFlick() {
  let tagDrag = null;

  document.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    const note = getActiveNote();
    if (note && note.locked) return;
    const targetEl = e.target && e.target.nodeType === 1 ? e.target : e.target?.parentElement;
    const pill = targetEl ? targetEl.closest('[data-tag-pill]') : null;
    if (!pill || targetEl.closest('button')) return;
    tagDrag = {
      pill,
      tag: pill.getAttribute('data-tag-pill'),
      startY: e.touches[0].clientY,
      dy: 0
    };
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!tagDrag || e.touches.length !== 1) return;
    const dy = e.touches[0].clientY - tagDrag.startY;
    if (Math.abs(dy) < 10) return;
    tagDrag.dy = dy;
    tagDrag.pill.style.transition = 'none';
    tagDrag.pill.style.transform = `translateY(${dy}px) scale(${Math.max(0.7, 1 - Math.abs(dy) / 140)})`;
    tagDrag.pill.style.opacity = `${Math.max(0.2, 1 - Math.abs(dy) / 70)}`;
  }, { passive: true });

  const endTag = (e) => {
    if (!tagDrag) return;
    const st = tagDrag;
    tagDrag = null;
    if (Math.abs(st.dy) > 42 && typeof removeTag === 'function') {
      removeTag(st.tag);
      pkHaptic(10);
      const pt = e.changedTouches && e.changedTouches[0];
      if (pt) pkSpawnTouchRipple(pt.clientX, pt.clientY);
      showToast(`Removed #${st.tag}`);
    } else {
      st.pill.style.transition = 'transform 0.18s ease, opacity 0.18s ease';
      st.pill.style.transform = '';
      st.pill.style.opacity = '';
    }
  };
  document.addEventListener('touchend', endTag, { passive: true });
  document.addEventListener('touchcancel', endTag, { passive: true });
})();
