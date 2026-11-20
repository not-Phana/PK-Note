const fs = require('fs');

const code = fs.readFileSync('src/js/groq-assistant.js', 'utf8');

const regex = /action(?:Type)?\s*===?\s*['"]([^'"]+)['"]/g;
let m;
const actions = new Set();
while ((m = regex.exec(code)) !== null) {
  actions.add(m[1]);
}

console.log(`Found ${actions.size} unique action types in groq-assistant.js:`);
console.log(Array.from(actions).sort());
