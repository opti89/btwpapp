// Simple service worker for offline caching (optional)
const CACHE_NAME = 'btpd-schedule-v1';
const FILES = ['/', '/index.html', '/style.css', '/manifest.json'];
self.addEventListener('install', (evt)=>{evt.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener('fetch', (evt)=>{evt.respondWith(caches.match(evt.request).then(r=>r || fetch(evt.request)));});
