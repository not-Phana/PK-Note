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
