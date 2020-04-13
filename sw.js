self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('quiz-app-cache')
      .then(function(cache) {
        console.log('cache xcsdfsgsfd');
        return cache.addAll([
          '/',
          '/assets/quiz_app_log.png'
        ]);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
