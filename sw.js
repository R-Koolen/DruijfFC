// Service worker for iFruijt — enables Add to Home Screen + offline shell.
// Strategy: network-first for static assets (picks up redeploys when online),
// fallback to cache when offline. API routes are never intercepted.
const CACHE = "ifruijt-v1";
const PRECACHE = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/main.css",
  "/index.css",
  "/index.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const { pathname } = new URL(req.url);
  // Never intercept API routes — always hit the network
  if (pathname.startsWith("/forum/api/") || pathname.startsWith("/polarsteps/api/")) return;

  e.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match("/")))
  );
});
