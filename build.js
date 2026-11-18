const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const esbuild = require('esbuild');

const ROOT = __dirname;
const kb = bytes => (bytes / 1024).toFixed(1) + ' KB';

console.log('=== PK Note v2.0 Build (Pure HTML + Static CSS + Minified JS + Rust WASM) ===');

// 1. Compile Rust WebAssembly Core (if cargo is available)
try {
  execSync('cargo build --manifest-path rust-engine/Cargo.toml --release --target wasm32-unknown-unknown', {
    cwd: ROOT,
    stdio: 'pipe'
  });
  fs.mkdirSync(path.join(ROOT, 'wasm'), { recursive: true });
  fs.copyFileSync(
    path.join(ROOT, 'rust-engine/target/wasm32-unknown-unknown/release/pk_engine.wasm'),
    path.join(ROOT, 'wasm/pk_engine.wasm')
  );
  console.log('1. Rust WASM compiled -> wasm/pk_engine.wasm (' + kb(fs.statSync(path.join(ROOT, 'wasm/pk_engine.wasm')).size) + ')');
} catch (err) {
  console.warn('Rust WASM build skipped (using existing wasm/pk_engine.wasm):', err.message);
}

// 2. Compile Static Purged Minified Tailwind CSS (kills 350 KB Tailwind Play CDN runtime JS compiler!)
fs.mkdirSync(path.join(ROOT, 'css'), { recursive: true });
const twBin = path.join(ROOT, 'node_modules', '.bin', process.platform === 'win32' ? 'tailwindcss.cmd' : 'tailwindcss');
execSync(`"${twBin}" -i ./src/css/tailwind-input.css -o ./css/tailwind.min.css --minify`, {
  cwd: ROOT,
  stdio: 'inherit'
});
console.log('2. Tailwind CSS compiled -> css/tailwind.min.css (' + kb(fs.statSync(path.join(ROOT, 'css/tailwind.min.css')).size) + ')');

// 3. Minify Custom App CSS with esbuild
esbuild.buildSync({
  entryPoints: [path.join(ROOT, 'src/css/app.css')],
  outfile: path.join(ROOT, 'css/app.min.css'),
  minify: true,
  loader: { '.css': 'css' }
});
console.log('3. App CSS minified -> css/app.min.css (' + kb(fs.statSync(path.join(ROOT, 'css/app.min.css')).size) + ')');

// 4. Minify JS modules (preserve top-level global functions for HTML onclick handlers; strip all comments & dead whitespace)
fs.mkdirSync(path.join(ROOT, 'js'), { recursive: true });
const jsFiles = [
  ['src/js/boot.js', 'js/boot.min.js'],
  ['src/js/wasm-bridge.js', 'js/wasm-bridge.min.js'],
  ['src/js/app.js', 'js/app.min.js']
];
for (const [src, dst] of jsFiles) {
  const raw = fs.readFileSync(path.join(ROOT, src), 'utf8');
  const out = esbuild.transformSync(raw, {
    loader: 'js',
    minifyWhitespace: true,
    minifySyntax: true,
    minifyIdentifiers: false, // Keep global function names callable from HTML onclick attributes!
    legalComments: 'none',
    target: 'es2020'
  });
  fs.writeFileSync(path.join(ROOT, dst), out.code, 'utf8');
  console.log(`4. JS minified -> ${dst} (${kb(raw.length)} -> ${kb(out.code.length)})`);
}

// 5. Sync HTML workspace copies & verify ZERO <style> and ZERO inline <script>
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const styleTags = (html.match(/<style\b/gi) || []).length;
const inlineScripts = (html.match(/<script(?![^>]*\bsrc=)[^>]*>/gi) || []).length;
if (styleTags > 0 || inlineScripts > 0) {
  throw new Error(`Pure HTML check FAILED! Found ${styleTags} <style> tags and ${inlineScripts} inline <script> blocks!`);
}
fs.copyFileSync(path.join(ROOT, 'index.html'), path.join(ROOT, 'pk_note_workspace.html'));
fs.copyFileSync(path.join(ROOT, 'index.html'), path.join(ROOT, 'aether_archival_knowledge_calendar_workspace.html'));
console.log('5. Pure HTML verified & synced -> index.html (' + kb(html.length) + ', 0 <style>, 0 inline <script>)');
