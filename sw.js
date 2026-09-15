// MorphoSyntax Pro - Service Worker (PWA Offline Engine)
const CACHE_NAME = 'morpho-pwa-v1.0.4';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './words_data.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Precache optional asset notice:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. GitHub API 云同步、外部在线音频发音直接透传网络，不走静态缓存
  if (
    url.hostname.includes('api.github.com') ||
    url.hostname.includes('dict.youdao.com') ||
    event.request.method !== 'GET'
  ) {
    return;
  }

  // 2. 本地静态资源优先使用缓存以实现极致断网离线秒开，同时后台平滑更新 (Stale-While-Revalidate)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
