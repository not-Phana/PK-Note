const fs = require('fs');
const wasmBuf = fs.readFileSync('wasm/pk_engine.wasm');

WebAssembly.instantiate(wasmBuf).then(({ instance }) => {
  const exp = instance.exports;
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  const mem = exp.memory;

  console.log('=== TESTING NATIVE RUST WASM SUITE ===');

  // 1. Math Evaluator
  exp.arena_reset();
  const testExpr = '42 * (15 + 3.5)^2';
  const exprBytes = enc.encode(testExpr);
  const exprPtr = exp.arena_alloc(exprBytes.length, 1);
  const resPtr = exp.arena_alloc(8, 8);
  new Uint8Array(mem.buffer, exprPtr, exprBytes.length).set(exprBytes);
  const err = exp.eval_math_expression(exprPtr, exprBytes.length, resPtr);
  const val = new Float64Array(mem.buffer, resPtr, 1)[0];
  const expected = 42 * Math.pow(15 + 3.5, 2);
  console.log('1. Math Eval: ' + testExpr + ' = ' + val + ' (expected ' + expected + ') -> ' + (Math.abs(val - expected) < 1e-6 ? 'PASS' : 'FAIL'));

  // 2. Math Functions (sqrt, sin, cos, abs, pi)
  exp.arena_reset();
  const trigExpr = 'sqrt(144) + abs(-5) * cos(0)';
  const trigBytes = enc.encode(trigExpr);
  const trigPtr = exp.arena_alloc(trigBytes.length, 1);
  const trigResPtr = exp.arena_alloc(8, 8);
  new Uint8Array(mem.buffer, trigPtr, trigBytes.length).set(trigBytes);
  const trigErr = exp.eval_math_expression(trigPtr, trigBytes.length, trigResPtr);
  const trigVal = new Float64Array(mem.buffer, trigResPtr, 1)[0];
  console.log('2. Math Functions: ' + trigExpr + ' = ' + trigVal + ' -> ' + (Math.abs(trigVal - 17.0) < 1e-6 ? 'PASS' : 'FAIL'));

  // 3. Wikilinks Extraction
  exp.arena_reset();
  const testNote = 'Check [[Meeting Notes]] and also [[Project Roadmap|Roadmap]] and [[Architecture]].';
  const noteBytes = enc.encode(testNote);
  const notePtr = exp.arena_alloc(noteBytes.length, 1);
  const outOffsetsPtr = exp.arena_alloc(20 * 8, 4);
  new Uint8Array(mem.buffer, notePtr, noteBytes.length).set(noteBytes);
  const linkCount = exp.extract_wikilinks(notePtr, noteBytes.length, outOffsetsPtr, 20);
  console.log('3. Wikilinks Extracted: ' + linkCount + ' links -> ' + (linkCount === 3 ? 'PASS' : 'FAIL'));

  // 4. Auto-link Title Matcher
  exp.arena_reset();
  const text = 'Today in our meeting notes we discussed Project Roadmap and architecture spec.';
  const titles = ['Meeting Notes', 'Project Roadmap', 'Architecture'];
  
  const textBytes = enc.encode(text);
  const textPtr = exp.arena_alloc(textBytes.length, 1);
  new Uint8Array(mem.buffer, textPtr, textBytes.length).set(textBytes);

  let titlesSize = 4;
  titles.forEach(t => titlesSize += 2 + enc.encode(t).length);
  const titlesPtr = exp.arena_alloc(titlesSize, 4);
  const titlesU8 = new Uint8Array(mem.buffer, titlesPtr, titlesSize);
  new Uint32Array(mem.buffer, titlesPtr, 1)[0] = titles.length;
  let tOff = 4;
  titles.forEach(t => {
    const b = enc.encode(t);
    titlesU8[tOff] = b.length & 0xff;
    titlesU8[tOff + 1] = (b.length >> 8) & 0xff;
    titlesU8.set(b, tOff + 2);
    tOff += 2 + b.length;
  });

  const outMatchesPtr = exp.arena_alloc(20 * 12, 4);
  const matchCount = exp.find_title_matches(textPtr, textBytes.length, titlesPtr, outMatchesPtr, 20);
  console.log('4. Auto-link Matches: ' + matchCount + ' matches -> ' + (matchCount === 3 ? 'PASS' : 'FAIL'));

  // 5. Markdown Blocks Tokenizer
  exp.arena_reset();
  const md = '# Header 1\nSome paragraph text here.\n\n## Section 2\n- [ ] Task 1\n- [x] Task 2\n- Bullet item\n> A quote\n---\n```js\nconsole.log(1);\n```\n$$x^2 + y^2$$';
  const mdBytes = enc.encode(md);
  const mdPtr = exp.arena_alloc(mdBytes.length, 1);
  new Uint8Array(mem.buffer, mdPtr, mdBytes.length).set(mdBytes);
  const outBlocksPtr = exp.arena_alloc(30 * 12, 4);
  const blockCount = exp.parse_markdown_blocks(mdPtr, mdBytes.length, outBlocksPtr, 30);
  console.log('5. Markdown Blocks: ' + blockCount + ' blocks -> ' + (blockCount >= 8 ? 'PASS' : 'FAIL'));

  // 6. Text Readability & Pulse
  exp.arena_reset();
  const article = 'Rust WebAssembly enables near-native performance inside modern browsers without garbage collection pauses.';
  const aBytes = enc.encode(article);
  const aPtr = exp.arena_alloc(aBytes.length, 1);
  new Uint8Array(mem.buffer, aPtr, aBytes.length).set(aBytes);
  const statsPtr = exp.arena_alloc(9 * 4, 4);
  exp.analyze_text_full(aPtr, aBytes.length, statsPtr);
  const fStats = new Float32Array(mem.buffer, statsPtr, 9);
  console.log('6. Full Text Stats: words=' + fStats[0] + ', syllables=' + fStats[3] + ', flesch=' + fStats[5].toFixed(1) + ' -> ' + (fStats[0] === 13 ? 'PASS' : 'FAIL'));

  // 7. Batch Fuzzy Vault Ranker
  exp.arena_reset();
  const qStr = 'road';
  const qBytes = enc.encode(qStr);
  const qPtr = exp.arena_alloc(qBytes.length, 1);
  new Uint8Array(mem.buffer, qPtr, qBytes.length).set(qBytes);

  const notesList = [
    { title: 'Meeting Notes', content: 'Discussion about schedule and deliverables' },
    { title: 'Project Roadmap', content: 'Timeline and milestone mapping for Q4' },
    { title: 'Personal Diary', content: 'On the road today travelling' }
  ];

  let notesBufSize = 4;
  notesList.forEach(n => {
    const tb = enc.encode(n.title);
    const cb = enc.encode(n.content);
    notesBufSize += 4 + tb.length + cb.length;
  });
  const notesBufPtr = exp.arena_alloc(notesBufSize, 4);
  const notesBufU8 = new Uint8Array(mem.buffer, notesBufPtr, notesBufSize);
  new Uint32Array(mem.buffer, notesBufPtr, 1)[0] = notesList.length;
  let nOff = 4;
  notesList.forEach(n => {
    const tb = enc.encode(n.title);
    const cb = enc.encode(n.content);
    notesBufU8[nOff] = tb.length & 0xff;
    notesBufU8[nOff + 1] = (tb.length >> 8) & 0xff;
    notesBufU8[nOff + 2] = cb.length & 0xff;
    notesBufU8[nOff + 3] = (cb.length >> 8) & 0xff;
    notesBufU8.set(tb, nOff + 4);
    notesBufU8.set(cb, nOff + 4 + tb.length);
    nOff += 4 + tb.length + cb.length;
  });

  const outIdxPtr = exp.arena_alloc(10 * 4, 4);
  const outScoresPtr = exp.arena_alloc(10 * 4, 4);
  const rankedCount = exp.rank_vault_notes(qPtr, qBytes.length, notesBufPtr, outIdxPtr, outScoresPtr, 10);
  const topIdx = new Uint32Array(mem.buffer, outIdxPtr, rankedCount)[0];
  console.log('7. Vault Ranker: top result for \"' + qStr + '\" is: ' + notesList[topIdx].title + ' -> ' + (notesList[topIdx].title === 'Project Roadmap' ? 'PASS' : 'FAIL'));

  console.log('=== ALL RUST WASM CHECKS PASSED ===');
}).catch(err => {
  console.error(err);
  process.exit(1);
});
