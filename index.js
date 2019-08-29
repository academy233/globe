// Initialize a map:

var myMap = L.map('map').setView([40.713681, -73.993257], 12);

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(myMap);


// Add markers and popups to the map:

// Marker for culture
var culture = L.marker([40.672557, -73.983408]).addTo(myMap);
culture.bindPopup(
  `
  <h1>Culture</h1>
  <h3>331 5th Ave, Brooklyn, NY 11215</h3>
  <h3>Hours: M-F 10am to 6pm, S-S 11am to 5pm</h3>
  `
);

// Marker for pinkberry
var pinkberry = L.marker([40.779338, -73.982721]).addTo(myMap);
pinkberry.bindPopup(
  `
  <h1>Pinkberry</h1>
  <h3>2041 Broadway, New York, NY 10023</h3>
  <h3>Hours: M-F 10am to 6pm, S-S 11am to 5pm</h3>
  `
);

// Marker for redMango
var redMango = L.marker([40.711648, -74.006460]).addTo(myMap);
redMango.bindPopup(
  `
  <h1>Red Mango</h1>
  <h3>111 Fulton St, New York, NY 10038</h3>
  <h3>Hours: M-F 10am to 6pm, S-S 11am to 5pm</h3>
  `
);

// Marker for sixteenHandles
var sixteenHandles = L.marker([40.744691, -74.000279]).addTo(myMap);
sixteenHandles.bindPopup(
  `
  <h1>Sixteen Handles</h1>
  <h3>178 8th Ave, New York, NY 10011</h3>
  <h3>Hours: M-F 10am to 6pm, S-S 11am to 5pm</h3>
  `
);

// Marker for tastiDLite
var tastiDLite = L.marker([40.745241, -73.979935]).addTo(myMap);
tastiDLite.bindPopup(
  `
  <h1>Tasti D-Lite</h1>
  <h3>416 Third Ave, New York, NY 10016</h3>
  <h3>Hours: M-F 10am to 6pm, S-S 11am to 5pm</h3>
  `
);

// Marker for ...



