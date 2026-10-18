// Minimal offline support for the AHR Tenant Water Sharing App.
const CACHE='ahr-water-app-shell-v15';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./index.html','./icon-192.png','./icon-512.png','./manifest.webmanifest'])));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('ahr-water-app-shell-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]));});
self.addEventListener('fetch',e=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===location.origin){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));}});
