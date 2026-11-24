// سرویس‌ورکر نسخه‌ی وب: همه‌ی فایل‌ها را بار اول ذخیره می‌کند تا برنامه بدون اینترنت باز شود.
// شماره‌ی نسخه و فهرست فایل‌ها (دو جای‌نگهدار پایین) را scripts/build-pwa.ps1 پر می‌کند؛ هر تغییر فایل = نسخه‌ی تازه، و کش قبلی پاک می‌شود.
// هیچ درخواستی به سایت دیگری نمی‌رود؛ داده‌های کاربر (localStorage/IndexedDB) اصلاً از اینجا رد نمی‌شوند.
const V = 'taraz-2132a7ab4611', F = ["./","app.css","app.js","audio/intro.wav","fonts/Vazirmatn-Bold.woff2","fonts/Vazirmatn-Regular.woff2","help.js","i18n.js","i18n-extra.js","icons/apple-touch-icon.png","icons/favicon-32.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","index.html","lib/lame.min.js","lib/xlsx.full.min.js","manifest.webmanifest","pwa.js"];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(F)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x != V).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method != 'GET' || new URL(r.url).origin != location.origin) return;
  e.respondWith(caches.open(V).then(c => c.match(r, { ignoreSearch: true }).then(m => m || (r.mode == 'navigate' ? c.match('./') : null)).then(m => m || fetch(r))));
});
