// PK Note — Progressive Web App Service Worker (Offline Support & Auto-Update Engine)
const CACHE_NAME = 'pk-note-v1.3.0';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './pk_note_workspace.html',
  './manifest.webmanifest',
  './favicon.svg',
  './pk-note-icon.svg',
  './pk-note-logo.svg',
  './pk-note-logo-dark.svg',
  './pk-note-logo-light.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', event => {
  // Activate immediately without waiting for older tabs to close
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS).catch(err => {
        console.warn('Pre-cache warning (assets will be cached on first request):', err);
      });
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          // Preserve transformers-cache so downloaded Kokoro-82M weights persist across app updates
          if (key.startsWith('pk-note-') && key !== CACHE_NAME) {
            console.log('Purging stale cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Let cross-origin model/CDN fetches (Hugging Face ONNX weights, esm.sh, etc.) pass straight through
  // so streaming download progress & Transformers.js browser CacheStorage work natively without duplication
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // 1. Navigation / HTML Document Requests: Network-First (Guarantees freshest version on refresh)
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Fall back to cached index.html when offline
          return caches.match(req).then(cached => cached || caches.match('./index.html'));
        })
    );
    return;
  }

  // 2. Static Assets & Icons: Stale-While-Revalidate
  event.respondWith(
    caches.match(req).then(cachedResponse => {
      const fetchPromise = fetch(req)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type !== 'opaque') {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {});

      return cachedResponse || fetchPromise;
    })
  );
});
