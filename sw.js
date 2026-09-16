const CACHE_NAME = 'morpho-pwa-v2.1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './words_data.js'
];

// 安装阶段：容错缓存基础离线资产
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // 逐个缓存，单个资源 404 不会导致整个 PWA 安装失败
      for (const asset of ASSETS) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn('[SW] 资产预缓存跳过:', asset, err);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// 激活阶段：清理旧版本缓存
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 拦截请求阶段：安全隔离外部接口与音频流
self.addEventListener('fetch', (e) => {
  // 1. 仅处理 GET 请求
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // 2. 严格放行外部请求：绝不拦截 api.github.com、发音 CDN 等跨域网络请求
  if (url.origin !== self.location.origin) {
    return;
  }

  // 3. 仅对本站资源做离线处理
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;

      return fetch(e.request).then((resp) => {
        // 如果是同源有效文件，动态放入缓存
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, respClone));
        }
        return resp;
      }).catch((fetchErr) => {
        // 仅当用户是“在离线状态下刷新页面/打开网页”时，才回退到缓存的 index.html
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        throw fetchErr;
      });
    })
  );
});