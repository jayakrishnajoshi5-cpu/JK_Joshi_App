const CACHE_NAME = "jk-joshi-v3";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",
  "./service-worker.js"
];

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME).then(cache => {

      return cache.addAll(ASSETS);

    })

  );

  self.skipWaiting();

});


self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))

      );

    })

  );

  self.clients.claim();

});


self.addEventListener("fetch", event => {

  event.respondWith(

    fetch(event.request)

      .then(response => {

        return response;

      })

      .catch(() => {

        return caches.match(event.request);

      })

  );

});
