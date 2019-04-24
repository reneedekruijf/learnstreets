/* eslint-disable */

const L = require('leaflet');

const noLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd'
});

const labels = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const map = L.map('kaart', {
  center: [52.0939, 5.1067],
  zoom: 13,
  attributionControl: true,
  layers: [labels, noLabels]
});

const baseMaps = {
  'labels': labels,
  'noLables': noLabels
};

L.control.layers(baseMaps).addTo(map);
