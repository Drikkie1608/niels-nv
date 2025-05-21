const CACHE_NAME = 'niels-nv-v1';
const urlsToCache = [
    '/niels-nv/',
    '/niels-nv/index.html',
    '/niels-nv/styles.css',
    '/niels-nv/script.js',
    '/niels-nv/icons/icon-192x192.png',
    '/niels-nv/icons/icon-512x512.png',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
}); 