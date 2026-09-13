const CACHE_NAME = 'morpho-pwa-v7';

// 核心离线静态资源列表 (容错预缓存)
const STATIC_ASSETS = [
  './',
  './index.html',
  './words_data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable.png'
];

// 安装阶段：预缓存核心静态资源
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] 正在预缓存核心离线静态资源...');
      // 容错式缓存：即使某一个文件不存在，也绝不阻断 SW 安装与 PWA 认定
      return Promise.allSettled(
        STATIC_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn(`[SW] 跳过未找到或可选的静态资源: ${url}`);
          })
        )
      );
    })
  );
});

// 激活阶段：清理旧版本缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[SW] 清理旧版本缓存:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 拦截请求：网络优先策略 (Network First, falling back to cache)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 1. 过滤非 GET 请求、Chrome 扩展请求或跨域第三方请求
  if (req.method !== 'GET' || !url.protocol.startsWith('http') || url.origin !== self.location.origin) {
    return;
  }

  // 2. 避免拦截 GitHub Gist 同步 API
  if (url.hostname.includes('github.com') || url.hostname.includes('githubusercontent.com')) {
    return;
  }

  // 3. 针对音频或发音资源：快速缓存与回退
  if (url.hostname.includes('dictvoice') || url.hostname.includes('gstatic.com') || url.pathname.endsWith('.mp3')) {
    event.respondWith(
      fetch(req).then((resp) => {
        if (resp && resp.status === 200) {
          const c = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, c));
        }
        return resp;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // 4. 标准网络优先策略
  event.respondWith(
    fetch(req)
      .then((networkResp) => {
        if (networkResp && networkResp.status === 200) {
          const respClone = networkResp.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, respClone);
          });
        }
        return networkResp;
      })
      .catch(() => {
        return caches.match(req).then((cachedResp) => {
          if (cachedResp) {
            return cachedResp;
          }
          if (req.mode === 'navigate' || req.destination === 'document') {
            return caches.match('./') || caches.match('./index.html');
          }
          return new Response('Offline: Network request failed and no cache available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
        });
      })
  );
});
