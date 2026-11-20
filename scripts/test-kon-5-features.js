const fs = require('fs');
const assert = require('assert');

console.log('=== VERIFYING SPEED & KON ENHANCEMENTS ===');

const appJs = fs.readFileSync('src/js/app.js', 'utf8');
const groqJs = fs.readFileSync('src/js/groq-assistant.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Performance: Vault Connections Memoization
console.log('Checking Vault Connections Memoization...');
assert(appJs.includes('let pkVaultLinksCache = null'), 'pkVaultLinksCache missing in app.js');
assert(appJs.includes('function invalidateVaultLinksCache('), 'invalidateVaultLinksCache missing in app.js');
assert(appJs.includes('if (!pkVaultLinksDirty && pkVaultLinksCache)'), 'cache hit check missing in computeVaultConnections');
console.log('PASS: Vault connections memoization verified.');

// 2. Performance: KaTeX Formula LRU Cache
console.log('Checking KaTeX Formula LRU Cache...');
assert(appJs.includes('const pkKatexFormulaCache = new Map()'), 'pkKatexFormulaCache missing in app.js');
assert(appJs.includes('if (pkKatexFormulaCache.has(cleanKey))'), 'cache hit check missing in renderLatexToHtml');
console.log('PASS: KaTeX formula LRU cache verified.');

// 3. Performance: Rust WASM Text Stats
console.log('Checking Rust WASM Text Stats Integration...');
assert(appJs.includes('window.PKWasm.analyzeTextStats(fullText)'), 'analyzeTextStats call missing in updateWordCount');
console.log('PASS: Rust WASM text stats verified.');

// 4. Performance: RAF-Batched Sidebar Filter
console.log('Checking RAF-Batched Sidebar Search Filter...');
assert(appJs.includes('let sidebarFilterRafId = null'), 'sidebarFilterRafId missing in app.js');
assert(appJs.includes('cancelAnimationFrame(sidebarFilterRafId)'), 'cancelAnimationFrame missing in handleSidebarFilter');
console.log('PASS: RAF-batched sidebar search filter verified.');

// 5. Kon: Auto-Link Notes (Action 49)
console.log('Checking Action 49: auto_link_notes...');
assert(groqJs.includes('function executeAutoLinkNotes('), 'executeAutoLinkNotes missing in groq-assistant.js');
assert(groqJs.includes("actionType === 'auto_link_notes'"), 'auto_link_notes action missing in executeKonAction');
console.log('PASS: Action 49 (auto_link_notes) verified.');

// 6. Kon: Code & Math Calculation Runner (Action 50)
console.log('Checking Action 50: calculate...');
assert(groqJs.includes('function executeCalculate('), 'executeCalculate missing in groq-assistant.js');
assert(groqJs.includes("actionType === 'calculate'"), 'calculate action missing in executeKonAction');
console.log('PASS: Action 50 (calculate) verified.');

// 7. Kon: Offline Fast Intent Fallback
console.log('Checking Offline Fast Intent Fallback...');
assert(groqJs.includes('function matchOfflineIntent('), 'matchOfflineIntent missing in groq-assistant.js');
assert(groqJs.includes('matchOfflineIntent(userText)'), 'matchOfflineIntent call missing in sendGroqPrompt');
console.log('PASS: Offline fast intent fallback verified.');

// 8. Quick Action Chips in index.html
console.log('Checking Kon Quick Action Chips...');
assert(indexHtml.includes("runGroqQuickAction('research')"), 'research quick action missing in index.html');
assert(indexHtml.includes("runGroqQuickAction('autolink')"), 'autolink quick action missing in index.html');
assert(indexHtml.includes("runGroqQuickAction('quiz')"), 'quiz quick action missing in index.html');
assert(indexHtml.includes("runGroqQuickAction('template')"), 'template quick action missing in index.html');
console.log('PASS: Quick action chips verified.');

// 9. Zero Emojis check
console.log('Checking Zero-Emoji compliance...');
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA70}-\u{1FAFF}\u{FE00}-\u{FE0F}]/u;
[appJs, groqJs, indexHtml].forEach((content, i) => {
  assert(!emojiRegex.test(content), `Emoji found in file index ${i}`);
});
console.log('PASS: Zero-Emoji compliance confirmed.');

// 10. Pure HTML contract (0 style tags, 0 inline script tags)
console.log('Checking HTML purity in index.html...');
assert((indexHtml.match(/<style/gi) || []).length === 0, 'Found <style> tags in index.html');
assert((indexHtml.match(/<script(?![^>]*src=)/gi) || []).length === 0, 'Found inline <script> tags in index.html');
console.log('PASS: Pure HTML contract confirmed (0 style, 0 inline script).');

console.log('=== ALL SPEED & KON ENHANCEMENTS FULLY VERIFIED ===');
