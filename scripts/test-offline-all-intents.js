const fs = require('fs');
const assert = require('assert');

// Extract matchOfflineIntent from groq-assistant.js and run it
const code = fs.readFileSync('src/js/groq-assistant.js', 'utf8');
const fnMatch = code.match(/function matchOfflineIntent\([\s\S]*?\n\}/);
assert(fnMatch, 'matchOfflineIntent must be found in code');

const matchOfflineIntent = new Function('text', fnMatch[0] + '; return matchOfflineIntent(text);');

console.log('Testing all 25 offline intents:');

const testCases = [
  ['dark mode', 'set_theme', { theme: 'dark' }],
  ['light theme', 'set_theme', { theme: 'light' }],
  ['serif font', 'set_font', { font: 'serif' }],
  ['sans font', 'set_font', { font: 'sans' }],
  ['open note Distributed Consensus', 'open_note', { query: 'Distributed Consensus' }],
  ['go to [[System Architecture]]', 'open_note', { query: 'System Architecture' }],
  ['create note titled Meeting Summary', 'create_note', { title: 'Meeting Summary' }],
  ["today's note", 'open_daily_note', {}],
  ['open calendar', 'open_calendar', {}],
  ['open study deck', 'open_study_deck', {}],
  ['open smart draw', 'open_smart_draw', {}],
  ['open scratchpad', 'open_scratchpad', {}],
  ['open knowledge graph', 'open_graph', {}],
  ['open vault pulse', 'open_vault_pulse', {}],
  ['read note', 'read_aloud', {}],
  ['stop reading', 'stop_speech', {}],
  ['star note', 'star_note', { favorite: true }],
  ['duplicate note', 'duplicate_note', {}],
  ['create snapshot named Milestone', 'create_snapshot', { label: 'Milestone' }],
  ['open settings', 'open_settings', {}],
  ['open command palette', 'open_command_palette', {}],
  ['toggle split view', 'toggle_split', {}],
  ['toggle sidebar', 'toggle_sidebar', {}],
  ['open soundscape', 'open_soundscape', {}],
  ['open math studio', 'open_math_studio', {}],
  ['export as markdown', 'export_note', { format: 'markdown' }],
  ['export as html', 'export_note', { format: 'html' }],
  ['check all todos', 'check_all_todos', {}],
  ['clear completed todos', 'clear_completed_todos', {}],
  ['add todo: Review PR', 'add_todos', { todos: ['Review PR'] }],
  ['meeting notes', 'apply_template', { template: 'meeting_notes' }],
  ['research quantum computing', 'vault_research', { query: 'quantum computing' }],
  ['auto-link notes', 'auto_link_notes', {}],
  ['calculate (1200 * 1.15) / 12', 'calculate', { expression: '(1200 * 1.15) / 12' }],
  ['analyze note', 'analyze_vault_connections', {}]
];

for (const [input, expectedAction, expectedFields] of testCases) {
  const res = matchOfflineIntent(input);
  assert(res, `Input "${input}" should match an offline intent`);
  assert.strictEqual(res.action, expectedAction, `Input "${input}" expected action "${expectedAction}", got "${res.action}"`);
  for (const [key, val] of Object.entries(expectedFields)) {
    assert.deepStrictEqual(res[key], val, `Input "${input}" field "${key}" expected ${JSON.stringify(val)}, got ${JSON.stringify(res[key])}`);
  }
  console.log(`PASS: "${input}" -> action: ${res.action}`);
}

console.log('=== ALL 35 OFFLINE INTENT TEST CASES PASSED ===');
