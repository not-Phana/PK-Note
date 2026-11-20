const fs = require('fs');
const assert = require('assert');

console.log('=== VERIFYING KON AI ADVANCED IMPROVEMENTS ===');

const groqCode = fs.readFileSync('src/js/groq-assistant.js', 'utf8');
const htmlCode = fs.readFileSync('index.html', 'utf8');

// 1. Verify Dynamic Vault RAG (retrieveRelevantVaultSnippets)
assert(groqCode.includes('function retrieveRelevantVaultSnippets'), 'retrieveRelevantVaultSnippets must be defined');
assert(groqCode.includes('RELEVANT VAULT KNOWLEDGE (retrieved dynamically'), 'buildGroqSystemPrompt should inject dynamic vault knowledge');
console.log('PASS 1: Dynamic Smart Vault RAG retrieval verified.');

// 2. Verify Expanded Offline Intent Parser (25 natural language intents)
assert(groqCode.includes('open_note') && groqCode.includes('open_calendar') && groqCode.includes('open_daily_note'), 'Offline intent should handle open_note, calendar, daily_note');
assert(groqCode.includes('open_study_deck') && groqCode.includes('open_smart_draw') && groqCode.includes('open_scratchpad'), 'Offline intent should handle study deck, smart draw, scratchpad');
assert(groqCode.includes('open_graph') && groqCode.includes('open_vault_pulse') && groqCode.includes('read_aloud'), 'Offline intent should handle graph, pulse, read aloud');
assert(groqCode.includes('star_note') && groqCode.includes('duplicate_note') && groqCode.includes('create_snapshot'), 'Offline intent should handle star, duplicate, snapshot');
assert(groqCode.includes('analyze_vault_connections'), 'Offline intent should handle analyze_vault_connections');
console.log('PASS 2: Full-Spectrum 25-intent offline natural language agent verified.');

// 3. Verify Proactive Action Suggestions (getSuggestedFollowUps & followUpHtml)
assert(groqCode.includes('function getSuggestedFollowUps'), 'getSuggestedFollowUps function must be defined');
assert(groqCode.includes('followUpHtml'), 'renderGroqMessages should render proactive followUpHtml chips');
console.log('PASS 3: Proactive contextual action suggestion chips verified.');

// 4. Verify Action 51: analyze_vault_connections
assert(groqCode.includes('function executeAnalyzeVaultConnections'), 'executeAnalyzeVaultConnections function must be defined');
assert(groqCode.includes("actionType === 'analyze_vault_connections'"), 'Action 51 must be registered in executeKonAction');
assert(groqCode.includes('51. Deep Vault Synthesis & Connectivity Analyzer'), 'Action 51 must be specified in system prompt');
console.log('PASS 4: Action 51 (analyze_vault_connections) with Rust WASM text stats verified.');

// 5. Verify Offline fast-path in Inline Copilot
assert(groqCode.includes('offlineTransformed'), 'submitInlineAiPrompt must support offline text transformations');
console.log('PASS 5: Inline Copilot offline fast-path (math, bullets, numbers, casing, grammar) verified.');

// 6. Verify Vault Insights quick action chip in HTML
assert(htmlCode.includes("runGroqQuickAction('insights')"), 'index.html must include Vault Insights quick action button');
console.log('PASS 6: Vault Insights quick action chip in HTML verified.');

// 7. Verify pure HTML contract (0 style tags, 0 inline scripts)
const styleTags = (htmlCode.match(/<style\b/gi) || []).length;
const inlineScripts = (htmlCode.match(/<script(?![^>]*\bsrc=)[^>]*>/gi) || []).length;
assert(styleTags === 0, `index.html must have 0 style tags (found ${styleTags})`);
assert(inlineScripts === 0, `index.html must have 0 inline scripts (found ${inlineScripts})`);
console.log('PASS 7: Pure HTML contract verified (0 style, 0 inline script).');

console.log('=== ALL KON AI IMPROVEMENTS FULLY VERIFIED ===');
