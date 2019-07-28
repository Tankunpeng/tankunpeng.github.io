self.addEventListener('install', function(event) {
    // Perform install steps
    console.log(13221312)
});

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/gof/',
    '/arts/'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('install', function(event) {
    // Perform install steps
    console.log(13221312)
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
