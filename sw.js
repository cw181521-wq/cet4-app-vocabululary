const CACHE_NAME = 'morpho-pwa-v7';

// 核心离线静态资源列表
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
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] 正在预缓存核心离线静态资源...');
        return Promise.allSettled(
          STATIC_ASSETS.map(url => cache.add(url).catch(err => console.warn(`[SW] 跳过未找到的可选静态资源: ${url}`)))
        );
      })
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.warn('[SW] 预缓存静态资源部分失败 (离线仍可访问已缓存内容):', err);
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

  // 1. 过滤非 GET 请求、Chrome 扩展请求或跨域第三方请求 (只缓存本源同源静态资源)
  if (req.method !== 'GET' || !url.protocol.startsWith('http') || url.origin !== self.location.origin) {
    return;
  }

  // 2. 避免拦截 GitHub Gist 同步 API 或其它外部 API 请求
  if (url.hostname.includes('github.com') || url.hostname.includes('githubusercontent.com')) {
    return;
  }

  event.respondWith(
    fetch(req)
      .then((networkResp) => {
        // 如果网络请求成功且返回 200，则更新缓存
        if (networkResp && networkResp.status === 200) {
          const respClone = networkResp.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, respClone);
          });
        }
        return networkResp;
      })
      .catch(() => {
        // 网络异常 (离线断网) 时，回退读取本地离线缓存
        return caches.match(req).then((cachedResp) => {
          if (cachedResp) {
            return cachedResp;
          }
          // 如果离线访问主入口根路径未命中精确匹配，回退返回 index.html
          if (req.mode === 'navigate' || req.destination === 'document') {
            return caches.match('./index.html');
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
