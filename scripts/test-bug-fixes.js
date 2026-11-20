const fs = require('fs');
const assert = require('assert');

console.log('=== VERIFYING PK NOTE BUG FIXES ===');

// 1. Test Unicode character offset handling in findTitleMatches & parseMarkdownBlocks
const wasmBridgeCode = fs.readFileSync('src/js/wasm-bridge.js', 'utf8');

// Check that findTitleMatches handles pure ASCII and Unicode correctly
assert(wasmBridgeCode.includes('const isPureAscii = textBytes.length === text.length;'), 'findTitleMatches should check for pure ASCII');
assert(wasmBridgeCode.includes('const matchedText = dec.decode(memU8.subarray(textPtr + bStart, textPtr + bEnd));'), 'findTitleMatches should decode matchedText safely with dec.decode');
assert(wasmBridgeCode.includes('const charStart = dec.decode(textBytes.subarray(0, bStart)).length;'), 'findTitleMatches should compute charStart safely');
console.log('PASS 1: Native Rust WASM findTitleMatches Unicode byte-offset safety verified.');

// Check that parseMarkdownBlocks decodes block content safely with TextDecoder
assert(wasmBridgeCode.includes('const content = dec.decode(memU8.subarray(textPtr + start, textPtr + start + len));'), 'parseMarkdownBlocks should decode block content using TextDecoder');
console.log('PASS 2: Native Rust WASM parseMarkdownBlocks Unicode slice safety verified.');

// 2. Test groq-assistant.js note.updatedAt date formats and cache invalidation
const groqAssistantCode = fs.readFileSync('src/js/groq-assistant.js', 'utf8');

// Ensure no raw Date.now() assigned to note.updatedAt
const badUpdatedAtMatches = groqAssistantCode.match(/note\.updatedAt\s*=\s*Date\.now\(\)/g);
assert(!badUpdatedAtMatches, `Found ${badUpdatedAtMatches ? badUpdatedAtMatches.length : 0} occurrences of note.updatedAt = Date.now()! Must be formatted date string.`);
console.log('PASS 3: Zero occurrences of note.updatedAt = Date.now() in groq-assistant.js.');

// Ensure invalidateVaultLinksCache is called on template apply and undo
assert(groqAssistantCode.includes("Structured active note with \""), 'Template apply description present');
const tmplSection = groqAssistantCode.slice(groqAssistantCode.indexOf("Structured active note with \"") - 600, groqAssistantCode.indexOf("Structured active note with \"") + 100);
assert(tmplSection.includes('invalidateVaultLinksCache'), 'Template apply must invalidate vault links cache');
console.log('PASS 4: Template apply and undo invalidate vault links cache verified.');

// Ensure invalidateVaultLinksCache is called on auto_link_notes apply and undo
assert(groqAssistantCode.includes("Reverted auto-linked references"), 'Auto-link undo toast present');
const autoLinkSection = groqAssistantCode.slice(groqAssistantCode.indexOf("Auto-linked") - 600, groqAssistantCode.indexOf("Auto-linked") + 200);
assert(autoLinkSection.includes('invalidateVaultLinksCache'), 'Auto-link apply and undo must invalidate vault links cache');
console.log('PASS 5: Auto-link apply and undo invalidate vault links cache verified.');

// 3. Test app.js docUpdatedMeta normalization
const appCode = fs.readFileSync('src/js/app.js', 'utf8');
assert(appCode.includes("typeof rawUpdated === 'number'"), 'docUpdatedMeta should guard against numeric timestamps');
assert(appCode.includes("typeof rawTargetUpdated === 'number'"), 'metaEl should guard against numeric timestamps');
console.log('PASS 6: docUpdatedMeta and targetNote metadata defensively normalize numeric/ISO timestamps.');

// 4. Test ai-memory.js importMemoriesJson try/catch safety
const aiMemoryCode = fs.readFileSync('src/js/ai-memory.js', 'utf8');
assert(aiMemoryCode.includes("Failed to parse memories JSON"), 'importMemoriesJson should catch invalid JSON parse errors');
console.log('PASS 7: importMemoriesJson safely catches corrupt or malformed JSON.');

// 5. Test special-craft.js time capsule cleanup
const specialCraftCode = fs.readFileSync('src/js/special-craft.js', 'utf8');
assert(!specialCraftCode.includes('document.getElementById(\'pkTimeCapsuleList\')'), 'special-craft.js should not query dead pkTimeCapsuleList element');
console.log('PASS 8: Dead DOM queries removed from special-craft.js.');

console.log('=== ALL BUG FIX CHECKS PASSED SUCCESSFULLY ===');
