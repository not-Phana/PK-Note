// Detect phones & older/low-RAM devices (e.g. 2019 phones with <=4GB RAM) BEFORE first paint
// to disable heavy GPU blurs, infinite animations & excess canvas VRAM!
(function () {
  var lowMem = typeof navigator !== 'undefined' && navigator.deviceMemory && navigator.deviceMemory <= 4;
  var lowCpu = typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  var isTouchPhone = typeof window !== 'undefined' && (window.innerWidth < 900 || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches));
  window.PK_LITE_MODE = !!(isTouchPhone || lowMem || lowCpu);
  if (window.PK_LITE_MODE) {
    document.documentElement.classList.add('pk-lite-gpu');
  }
})();
// Promote core Google Fonts stylesheet without blocking first paint (zero inline HTML JS)
(function () {
  var f = document.getElementById('pkCoreFonts');
  if (f) {
    if (f.sheet) f.media = 'all';
    else f.addEventListener('load', function () { f.media = 'all'; }, { once: true });
  }
})();

// Immediate cache-busting self-heal: guarantee NVIDIA tab is present even if served from stale PWA cache
(function () {
  function healProviderTabs() {
    var nvidia = document.getElementById('pkAiProviderTabNvidia');
    var gemini = document.getElementById('pkAiProviderTabGemini');
    if (!nvidia && gemini && gemini.parentElement) {
      var parent = gemini.parentElement;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.id = 'pkAiProviderTabNvidia';
      btn.setAttribute('onclick', "selectAiProvider('nvidia')");
      btn.title = 'NVIDIA NIM — Nemotron 3.5, Gemma 4, Mistral Large';
      btn.className = 'px-1 py-1.5 rounded-[3px] bg-[var(--accent-vermilion)] text-white font-semibold cursor-pointer truncate';
      btn.textContent = 'NVIDIA';
      parent.insertBefore(btn, gemini);
      parent.className = 'grid grid-cols-5 gap-1 font-mono text-[9.5px]';
      var header = parent.previousElementSibling;
      if (header && header.textContent) {
        header.textContent = 'AI Provider (Free, Cloud & Local)';
      }
      if ('caches' in window) {
        caches.keys().then(function (keys) {
          keys.forEach(function (k) {
            if (k.indexOf('pk-note-') === 0 && k !== 'pk-note-v3.0.23') caches.delete(k);
          });
        });
      }
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (regs) {
          regs.forEach(function (r) { r.update(); });
        });
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', healProviderTabs);
  } else {
    healProviderTabs();
  }
})();
