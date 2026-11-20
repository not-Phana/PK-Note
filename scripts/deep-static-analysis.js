const fs = require('fs');
const path = require('path');

const jsFiles = [
  'src/js/boot.js',
  'src/js/wasm-bridge.js',
  'src/js/app.js',
  'src/js/special-craft.js',
  'src/js/special-studio.js',
  'src/js/obsidian-notion.js',
  'src/js/ai-memory.js',
  'src/js/groq-assistant.js'
];

console.log('=== DEEP STATIC ANALYSIS FOR PK NOTE ===');

// Check syntax of each JS file
for (const file of jsFiles) {
  try {
    const code = fs.readFileSync(file, 'utf8');
    new Function(code);
    console.log(`PASS: ${file} parsed with Function constructor (valid JS syntax)`);
  } catch (err) {
    console.error(`SYNTAX ERROR in ${file}:`, err.message);
  }
}

// Check for common subtle bugs:
// 1. Array index out of bounds or slice without checking
// 2. Unhandled promise rejections in async functions
// 3. Typos in element queries
const html = fs.readFileSync('index.html', 'utf8');
const allIdsInHtml = new Set();
const idAttrRegex = /\bid=["']([^"']+)["']/g;
let m;
while ((m = idAttrRegex.exec(html)) !== null) {
  allIdsInHtml.add(m[1]);
}

console.log(`Found ${allIdsInHtml.size} unique element IDs in index.html`);

// Scan for document.querySelector('#...') in JS
for (const file of jsFiles) {
  const code = fs.readFileSync(file, 'utf8');
  const queryRegex = /document\.querySelector\(['"]#([a-zA-Z0-9_-]+)['"]\)/g;
  let qm;
  while ((qm = queryRegex.exec(code)) !== null) {
    const id = qm[1];
    if (!allIdsInHtml.has(id)) {
      console.warn(`WARN [${file}]: querySelector('#${id}') target not in index.html`);
    }
  }
}

// Check for potential duplicate function declarations or conflicting globals
const declaredFuncs = new Map();
for (const file of jsFiles) {
  const code = fs.readFileSync(file, 'utf8');
  const fnRegex = /(?:^|\n)\s*function\s+([a-zA-Z0-9_$]+)\s*\(/g;
  let fnm;
  while ((fnm = fnRegex.exec(code)) !== null) {
    const name = fnm[1];
    if (declaredFuncs.has(name)) {
      console.log(`NOTE: Function '${name}' declared in multiple files: ${declaredFuncs.get(name)} and ${file}`);
    } else {
      declaredFuncs.set(name, file);
    }
  }
}

// 4. Check unguarded direct member access on document.getElementById (e.g. document.getElementById('foo').classList / .value / .style)
console.log('\n--- Checking unguarded direct member access on document.getElementById(...) ---');
const directAccessRegex = /document\.getElementById\(['"]([a-zA-Z0-9_-]+)['"]\)\.([a-zA-Z0-9_$]+)/g;
for (const file of jsFiles) {
  const code = fs.readFileSync(file, 'utf8');
  let dam;
  while ((dam = directAccessRegex.exec(code)) !== null) {
    const id = dam[1];
    const prop = dam[2];
    if (!allIdsInHtml.has(id)) {
      // Check if ID is created dynamically in any JS file
      let foundInDynamic = false;
      for (const f of jsFiles) {
        const c = fs.readFileSync(f, 'utf8');
        if (c.includes(`id="${id}"`) || c.includes(`id='${id}'`)) {
          foundInDynamic = true;
          break;
        }
      }
      if (!foundInDynamic) {
        console.error(`CRITICAL DEREFERENCE BUG [${file}]: document.getElementById('${id}').${prop} will throw TypeError: null has no properties!`);
      }
    }
  }
}

// 5. Check variable assignment from getElementById and subsequent unguarded dereference
console.log('\n--- Checking variable assignments from missing IDs ---');
const assignRegex = /const\s+([a-zA-Z0-9_$]+)\s*=\s*document\.getElementById\(['"]([a-zA-Z0-9_-]+)['"]\);?/g;
for (const file of jsFiles) {
  const code = fs.readFileSync(file, 'utf8');
  let am;
  while ((am = assignRegex.exec(code)) !== null) {
    const varName = am[1];
    const id = am[2];
    if (!allIdsInHtml.has(id)) {
      let foundInDynamic = false;
      for (const f of jsFiles) {
        const c = fs.readFileSync(f, 'utf8');
        if (c.includes(`id="${id}"`) || c.includes(`id='${id}'`)) {
          foundInDynamic = true;
          break;
        }
      }
      if (!foundInDynamic) {
        console.log(`Missing ID in [${file}]: const ${varName} = document.getElementById('${id}')`);
      }
    }
  }
}


