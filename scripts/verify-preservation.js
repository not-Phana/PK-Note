const fs = require('fs');

const appJs = fs.readFileSync('src/js/app.js', 'utf8');
const groqJs = fs.readFileSync('src/js/groq-assistant.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const checks = [
  // 1. Core Note Editor
  { name: 'Core Note Editor: renderBlocks', ok: appJs.includes('function renderBlocks(') },
  { name: 'Core Note Editor: getActiveNote', ok: appJs.includes('function getActiveNote(') },
  { name: 'Core Note Editor: selectNote', ok: appJs.includes('function selectNote(') },
  { name: 'Core Note Editor: persistState', ok: appJs.includes('function persistState(') },
  { name: 'Core Note Editor: getNoteUndoStack', ok: appJs.includes('function getNoteUndoStack(') },
  { name: 'Core Note Editor: blocksContainer DOM', ok: indexHtml.includes('id="blocksContainer"') },
  { name: 'Core Note Editor: docTitleInput DOM', ok: indexHtml.includes('id="docTitleInput"') },

  // 2. Calendar
  { name: 'Calendar: setCalendarView', ok: appJs.includes('function setCalendarView(') },
  { name: 'Calendar: renderCalendarSystem', ok: appJs.includes('function renderCalendarSystem(') },
  { name: 'Calendar: exportCalendarToICS', ok: appJs.includes('function exportCalendarToICS(') },
  { name: 'Calendar: calendarViewport DOM', ok: indexHtml.includes('id="calendarViewport"') },
  { name: 'Calendar: calendarGridContainer DOM', ok: indexHtml.includes('id="calendarGridContainer"') },
  { name: 'Calendar: eventModalBackdrop DOM', ok: indexHtml.includes('id="eventModalBackdrop"') },

  // 3. Smart Draw Studio
  { name: 'Smart Draw: openSmartDrawModal', ok: appJs.includes('function openSmartDrawModal(') },
  { name: 'Smart Draw: closeSmartDrawModal', ok: appJs.includes('function closeSmartDrawModal(') },
  { name: 'Smart Draw: smartDrawModal DOM', ok: indexHtml.includes('id="smartDrawModal"') },
  { name: 'Smart Draw: smartDrawCanvas DOM', ok: indexHtml.includes('id="smartDrawCanvas"') },
  { name: 'Smart Draw: Alt+D shortcut', ok: appJs.includes("toLowerCase() === 'd'") && appJs.includes('openSmartDrawModal') && !fs.readFileSync('src/js/obsidian-notion.js', 'utf8').includes("(e.key === 'd' || e.key === 'D')") },

  // 4. Kon AI
  { name: 'Kon AI: sendGroqPrompt', ok: groqJs.includes('async function sendGroqPrompt(') },
  { name: 'Kon AI: executeKonAction', ok: groqJs.includes('function executeKonAction(') },
  { name: 'Kon AI: Groq provider', ok: groqJs.includes("id: 'groq'") },
  { name: 'Kon AI: Gemini provider', ok: groqJs.includes("id: 'gemini'") },
  { name: 'Kon AI: OpenRouter provider', ok: groqJs.includes("id: 'openrouter'") },
  { name: 'Kon AI: Local provider', ok: groqJs.includes("id: 'local'") },
  { name: 'Kon AI: pkGroqAssistantPanel DOM', ok: indexHtml.includes('id="pkGroqAssistantPanel"') },
  { name: 'Kon AI: pkGroqAssistantBackdrop DOM', ok: indexHtml.includes('id="pkGroqAssistantBackdrop"') }
];

console.log('Preservation verification:');
let allOk = true;
checks.forEach(c => {
  console.log(' - ' + c.name + ': ' + (c.ok ? 'PASS' : 'FAIL'));
  if (!c.ok) allOk = false;
});
console.log('ALL PRESERVATIONS VERIFIED:', allOk);
if (!allOk) process.exit(1);
