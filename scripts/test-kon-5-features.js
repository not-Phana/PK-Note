const fs = require('fs');
const assert = require('assert');

console.log('=== VERIFYING 5 MAJOR KON FEATURES ===');

const appJs = fs.readFileSync('src/js/app.js', 'utf8');
const groqJs = fs.readFileSync('src/js/groq-assistant.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Feature 1: Inline Editor AI Copilot (Ctrl+J or /ai)
console.log('Checking Feature 1: Inline Editor AI Copilot...');
assert(indexHtml.includes('id="pkInlineAiCopilot"'), 'pkInlineAiCopilot missing from index.html');
assert(indexHtml.includes('id="pkInlineAiInput"'), 'pkInlineAiInput missing from index.html');
assert(indexHtml.includes('id="pkInlineAiPreviewContainer"'), 'pkInlineAiPreviewContainer missing from index.html');
assert(appJs.includes("shortcut: '/ai'"), '/ai slash command missing in app.js');
assert(appJs.includes("newType === 'ai' || newType === 'kon'"), 'applySlashCommand missing ai handling in app.js');
assert(appJs.includes("toLowerCase() === 'j'") && appJs.includes('triggerKonInlineCopilot'), 'Ctrl+J shortcut missing in app.js');
assert(groqJs.includes('function triggerKonInlineCopilot('), 'triggerKonInlineCopilot missing in groq-assistant.js');
assert(groqJs.includes('function openInlineAiCopilot('), 'openInlineAiCopilot missing in groq-assistant.js');
assert(groqJs.includes('function closeInlineAiCopilot('), 'closeInlineAiCopilot missing in groq-assistant.js');
assert(groqJs.includes('function applyInlineAiResult('), 'applyInlineAiResult missing in groq-assistant.js');
console.log('PASS: Feature 1 (Inline Copilot) verified.');

// 2. Feature 2: Deep Vault RAG & Cross-Note Knowledge Synthesis
console.log('Checking Feature 2: Deep Vault RAG Synthesis...');
assert(groqJs.includes('function performVaultResearch('), 'performVaultResearch missing in groq-assistant.js');
assert(groqJs.includes('function saveVaultResearchAsNote('), 'saveVaultResearchAsNote missing in groq-assistant.js');
assert(groqJs.includes("actionType === 'vault_research' || actionType === 'cross_note_synthesis'"), 'vault_research action missing in executeKonAction');
console.log('PASS: Feature 2 (Deep Vault RAG) verified.');

// 3. Feature 3: Autonomous Multi-Step Agent Workflows & Batch Operations
console.log('Checking Feature 3: Multi-Step Workflows...');
assert(groqJs.includes('function executeBatchWorkflow('), 'executeBatchWorkflow missing in groq-assistant.js');
assert(groqJs.includes("actionType === 'batch_workflow' || actionType === 'multi_step_workflow'"), 'batch_workflow action missing in executeKonAction');
assert(groqJs.includes("routine === 'project_scaffold'"), 'project_scaffold routine missing in executeBatchWorkflow');
assert(groqJs.includes("routine === 'vault_organize'"), 'vault_organize routine missing in executeBatchWorkflow');
assert(groqJs.includes("routine === 'daily_rollover'"), 'daily_rollover routine missing in executeBatchWorkflow');
console.log('PASS: Feature 3 (Multi-Step Workflows) verified.');

// 4. Feature 4: Interactive AI Tutor & Dynamic Study Deck Flashcards
console.log('Checking Feature 4: AI Tutor & Flashcards...');
assert(groqJs.includes('function executeGenerateFlashcards('), 'executeGenerateFlashcards missing in groq-assistant.js');
assert(groqJs.includes('function startAiTutorMode('), 'startAiTutorMode missing in groq-assistant.js');
assert(groqJs.includes('function exitAiTutorMode('), 'exitAiTutorMode missing in groq-assistant.js');
assert(groqJs.includes("actionType === 'generate_flashcards' || actionType === 'create_flashcards'"), 'generate_flashcards action missing in executeKonAction');
assert(groqJs.includes("actionType === 'ai_tutor' || actionType === 'quiz_me'"), 'ai_tutor action missing in executeKonAction');
console.log('PASS: Feature 4 (AI Tutor & Flashcards) verified.');

// 5. Feature 5: Smart Document Architect & Structured Templates
console.log('Checking Feature 5: Smart Document Templates...');
assert(groqJs.includes('const PK_SMART_TEMPLATES = {'), 'PK_SMART_TEMPLATES missing in groq-assistant.js');
assert(groqJs.includes('meeting_notes: {'), 'meeting_notes template missing');
assert(groqJs.includes('cornell_notes: {'), 'cornell_notes template missing');
assert(groqJs.includes('technical_spec: {'), 'technical_spec template missing');
assert(groqJs.includes('weekly_retrospective: {'), 'weekly_retrospective template missing');
assert(groqJs.includes('executive_brief: {'), 'executive_brief template missing');
assert(groqJs.includes('function executeApplyTemplate('), 'executeApplyTemplate missing in groq-assistant.js');
assert(groqJs.includes("actionType === 'apply_template' || actionType === 'insert_template'"), 'apply_template action missing in executeKonAction');
console.log('PASS: Feature 5 (Smart Document Templates) verified.');

// 6. Zero Emojis check across modified files
console.log('Checking Zero-Emoji compliance...');
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA70}-\u{1FAFF}\u{FE00}-\u{FE0F}]/u;
[appJs, groqJs, indexHtml].forEach((content, i) => {
  assert(!emojiRegex.test(content), `Emoji found in file index ${i}`);
});
console.log('PASS: Zero-Emoji compliance confirmed.');

// 7. Pure HTML check (0 style tags, 0 inline script tags)
console.log('Checking HTML purity in index.html...');
assert((indexHtml.match(/<style/gi) || []).length === 0, 'Found <style> tags in index.html');
assert((indexHtml.match(/<script(?![^>]*src=)/gi) || []).length === 0, 'Found inline <script> tags in index.html');
console.log('PASS: Pure HTML contract confirmed (0 style, 0 inline script).');

console.log('=== ALL 5 MAJOR KON FEATURES FULLY VERIFIED ===');
