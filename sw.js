const CACHE_NAME = 'morpho-pwa-v3.2';
const ASSETS = [
  './manifest.json',
  './icon-192.png'
];

// 安装阶段：跳过等待并预缓存基础清单
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of ASSETS) {
        try {
          await cache.add(asset);
        } catch (_) {}
      }
    })
  );
});

// 激活阶段：清理所有旧版本缓存并立即接管页面
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 请求阶段：彻底解决 Service Worker 缓存锁死
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // 1. 严格放行跨域外部请求：绝不拦截 api.github.com、在线词典音频等
  if (url.origin !== self.location.origin) {
    return;
  }

  // 2. ★ 核心破除“更新不生效”：主文档采用 Network-First（网络优先）
  // 保证只要在线访问，必定从 GitHub Pages 获取最新部署的代码；离线时才使用缓存回退
  if (e.request.mode === 'navigate' || e.request.destination === 'document' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    e.respondWith(
      fetch(e.request).then((networkResp) => {
        if (networkResp && networkResp.status === 200) {
          const respClone = networkResp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, respClone));
        }
        return networkResp;
      }).catch(() => {
        return caches.match(e.request).then((cached) => cached || caches.match('./index.html') || caches.match('./'));
      })
    );
    return;
  }

  // 3. 其余静态资源（图标、字体等）采用 Stale-While-Revalidate 策略
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetchPromise = fetch(e.request).then((networkResp) => {
        if (networkResp && networkResp.status === 200) {
          const respClone = networkResp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, respClone));
        }
        return networkResp;
      }).catch(() => null);

      return cached || fetchPromise;
    })
  );
});
