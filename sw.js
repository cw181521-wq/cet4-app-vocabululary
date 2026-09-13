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

// 1. 安装阶段：强行预缓存全部核心离线资源
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] 预缓存部分资源失败，降级为逐项安全添加:', err);
        return Promise.allSettled(STATIC_ASSETS.map(url => cache.add(url)));
      });
    })
  );
});

// 2. 激活阶段：立即接管页面并清除旧版缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. 请求拦截阶段：多策略容错机制
self.addEventListener('fetch', (event) => {
  // 仅拦截常规 GET 请求
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 避免拦截 GitHub Gist 同步 API 或其它外部 API 请求
  if (url.hostname.includes('github.com') || url.hostname.includes('githubusercontent.com')) return;

  // A. 导航请求（打开网页、刷新、PWA 点击启动）：网络优先，离线回退到 index.html（彻底杜绝离线恐龙白屏）
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkRes;
        })
        .catch(() => {
          return caches.match('./index.html') || caches.match('./');
        })
    );
    return;
  }

  // B. 外链真人发音音频拦截（修复跨域 Opaque 状态 0 与 Range 206 缓存抛错）
  if (url.hostname.includes('dictvoice') || url.hostname.includes('gstatic.com') || url.pathname.endsWith('./mp3') || url.pathname.endsWith('.mp3')) {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: false }).then((cached) => {
        if (cached) return cached;

        return fetch(event.request).then((networkRes) => {
          // 修复漏洞：支持跨域 opaque (status === 0) 或 200，但坚决跳过 206 Partial Content
          if (networkRes && (networkRes.status === 200 || networkRes.type === 'opaque') && networkRes.status !== 206) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkRes;
        }).catch(() => {
          // 离线时尝试匹配
          return caches.match(event.request);
        });
      })
    );
    return;
  }

  // C. 核心资源（JS/CSS/图片/Manifest）：Stale-While-Revalidate（缓存优先 + 后台静默刷新）
  event.respondWith(
    caches.match(event.request).then((cachedRes) => {
      const fetchPromise = fetch(event.request)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkRes;
        })
        .catch(() => {
          // 静默网络失败
        });

      return cachedRes || fetchPromise;
    })
  );
});
