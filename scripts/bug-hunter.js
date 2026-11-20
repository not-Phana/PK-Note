const fs = require('fs');

console.log('=== PK NOTE DEEP BUG HUNTER ===');

const html = fs.readFileSync('index.html', 'utf8');

const jsFiles = [
  'src/js/boot.js',
  'src/js/wasm-bridge.js',
  'src/js/app.js',
  'src/js/special-craft.js',
  'src/js/special-studio.js',
  'src/js/obsidian-notion.js',
  'src/js/groq-assistant.js'
];

let combinedJs = '';
jsFiles.forEach(f => {
  combinedJs += fs.readFileSync(f, 'utf8') + '\n';
});

// 1. Check all event handler function calls in HTML
const handlerRegex = /on[a-z]+="([^"]+)"/gi;
let match;
const calledFuncs = new Set();
const jsKeywords = ['if', 'while', 'for', 'switch', 'catch', 'with', 'return', 'typeof', 'delete', 'void'];
while ((match = handlerRegex.exec(html)) !== null) {
  // Strip string literals first so arguments like 'sqrt(x)' are not parsed as function calls
  const code = match[1].replace(/'(?:\\'|[^'])*'/g, "''").replace(/`(?:\\`|[^`])*`/g, "``");
  const fnMatches = code.match(/([a-zA-Z0-9_$]+)\s*\(/g) || [];
  fnMatches.forEach(fn => {
    const name = fn.replace('(', '').trim();
    if (!['event', 'stopPropagation', 'preventDefault', 'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'Boolean', 'Number', 'String', 'Array', 'JSON', 'Math', 'confirm', 'alert', ...jsKeywords].includes(name)) {
      calledFuncs.add(name);
    }
  });
}

console.log('Total event handler functions in index.html:', calledFuncs.size);
const missingFuncs = [];
for (const fn of calledFuncs) {
  const defRegex = new RegExp('(?:function\\s+' + fn + '\\b|window\\.' + fn + '\\s*=|const\\s+' + fn + '\\s*=|let\\s+' + fn + '\\s*=)');
  if (!defRegex.test(combinedJs)) {
    missingFuncs.push(fn);
  }
}
if (missingFuncs.length > 0) {
  console.error('CRITICAL BUG: Missing/undefined functions called from HTML:', missingFuncs);
  for (const fn of missingFuncs) {
    const lines = html.split('\n');
    lines.forEach((l, i) => {
      if (l.includes(fn + '(') && /on[a-z]+=/i.test(l)) {
        console.log(`Line ${i + 1}: ${l.trim()}`);
      }
    });
  }
} else {
  console.log('PASS: All HTML onclick/onchange/onkeydown handlers exist in JS.');
}

// 2. Check getElementById calls in JS that might be querying elements missing from HTML
const idRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
const usedIds = new Set();
while ((match = idRegex.exec(combinedJs)) !== null) {
  usedIds.add(match[1]);
}
console.log('Total getElementById calls in JS:', usedIds.size);

// Some IDs are created dynamically in template literals. Let's filter those out if they are defined in dynamic JS templates.
const missingIds = [];
for (const id of usedIds) {
  const inHtml = html.includes('id="' + id + '"') || html.includes("id='" + id + "'");
  const inDynamicJs = combinedJs.includes('id="${' + id + '}') || combinedJs.includes('id="' + id + '"') || combinedJs.includes("id='" + id + "'");
  if (!inHtml && !inDynamicJs) {
    missingIds.push(id);
  }
}

console.log('Missing DOM IDs queried in JS (potential null-pointer bugs):', missingIds);

// 3. Scan for potential runtime uncaught errors:
// e.g. .forEach on null/undefined, unhandled JSON.parse, unguarded localStorage
console.log('Checking unguarded JSON.parse calls in JS...');
const jsonParseRegex = /JSON\.parse\(([^)]+)\)/g;
let jsonCount = 0;
let unguardedJson = 0;
while ((match = jsonParseRegex.exec(combinedJs)) !== null) {
  jsonCount++;
}
console.log('Total JSON.parse calls:', jsonCount);

// 4. Check for broken or unclosed tags in index.html
const openDivs = (html.match(/<div\b/gi) || []).length;
const closeDivs = (html.match(/<\/div>/gi) || []).length;
console.log(`HTML <div> balance: ${openDivs} open vs ${closeDivs} close (${openDivs === closeDivs ? 'BALANCED' : 'IMBALANCE: ' + (openDivs - closeDivs)})`);

const openButtons = (html.match(/<button\b/gi) || []).length;
const closeButtons = (html.match(/<\/button>/gi) || []).length;
console.log(`HTML <button> balance: ${openButtons} open vs ${closeButtons} close (${openButtons === closeButtons ? 'BALANCED' : 'IMBALANCE: ' + (openButtons - closeButtons)})`);
