const CACHE_NAME = "jk-joshi-v1";

self.addEventListener("install", function(event) {
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener("fetch", function(event) {
  // Google Apps Script लाई cache नगर्ने
});
