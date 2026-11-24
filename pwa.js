// فقط در نسخه‌ی وب: ثبت سرویس‌ورکر برای کار بدون اینترنت (در APK پل اندروید هست و این کار لازم نیست)
if ('serviceWorker' in navigator && !window.Step10) addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
