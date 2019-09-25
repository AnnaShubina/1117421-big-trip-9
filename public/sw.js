const CACHE_NAME = `BIG_TRIP_V1.0`;

self.addEventListener(`install`, (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        `./`,
        `./index.html`,
        `./bundle.js`,
        `./css/style.css`,
        `./img/header-bg.png`,
        `./img/header-bg@2x.png`,
        `./img/logo.png`,
        `./img/icons/bus.png`,
        `./img/icons/check-in.png`,
        `./img/icons/drive.png`,
        `./img/icons/flight.png`,
        `./img/icons/restaurant.png`,
        `./img/icons/ship.png`,
        `./img/icons/sightseeing.png`,
        `./img/icons/taxi.png`,
        `./img/icons/train.png`,
        `./img/icons/transport.png`,
        `./img/icons/trip.png`,
      ]);
    }));
});

self.addEventListener('fetch', (evt) => {
    evt.respondWith(
      caches.match(evt.request)
        .then((response) => {
          console.log(`Find in cache`, {response});
          if (response) {
            return response;
          } else {
            return fetch(evt.request)
              .then(function(response) {
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(evt.request, response.clone()));
  
                return response.clone();
              });
          }
        })
        .catch((err) => console.error({err}))
    );
});