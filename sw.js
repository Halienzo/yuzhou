/**
 * Service Worker for 字道 ZiDao
 * Caches core assets for offline use
 * Textbook data files cached on-demand (not at install)
 */
const CACHE_NAME = 'zidao-v11';
const CORE_ASSETS = [
  './Chinese chars.html',
  './review_data.js',
  './review_en.js'
];

/* Pattern for textbook data files — cached on first access, not at install */
const TEXTBOOK_PATTERN = /textbook_g\d+s\d+\.js$/;

/* Install: cache core assets only */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

/* Activate: clean old caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

/* Fetch: cache-first for core assets, on-demand for textbooks, network-first for CDN */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  /* Only handle same-origin requests */
  if (url.origin !== location.origin) return;

  /* Cache-first for core assets */
  if (CORE_ASSETS.some(a => url.pathname.endsWith(a.replace('./', '')))) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => cached);

        return cached || fetchPromise;
      })
    );
    return;
  }

  /* On-demand caching for textbook data files — network-first, cache for offline */
  if (TEXTBOOK_PATTERN.test(url.pathname)) {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  /* Network-first for CDN resources (HanziWriter, fonts) */
  event.respondWith(
    fetch(event.request).then(response => {
      if (response.ok) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => caches.match(event.request))
  );
});
