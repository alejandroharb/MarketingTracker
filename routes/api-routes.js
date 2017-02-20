var db = require('../models');
var NodeGeocoder = require('node-geocoder');
var geoJSON = require('geojson');
var options = {
    provider: 'google'
}
var geocoder = NodeGeocoder(options);

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBj7XdOzV55JxV5BBEVg0EZbTXv-Aw3ktk'
});

//---------temporary hard coded DATA------------
var data = [
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.760, lng: -95.3696 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.750, lng: -95.3693 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.7654, lng: -95.3695 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.7702, lng: -95.36981 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.75013, lng: -95.36932 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.76501, lng: -95.36953 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.7702, lng: -95.369865 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.7611, lng: -95.36973 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.7611, lng: -95.36972 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.761, lng: -95.36971 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.76121, lng: -95.36971 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.7612, lng: -95.36971 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.7611, lng: -95.36971 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.762, lng: -95.3680 },
  { name: 'Houston', category: 'Store', street: 'Market', lat: 29.764, lng: -95.3690 },
];


var geoData = geoJSON.parse(data, {Point: ['lat', 'lng']});

// console.log(geoData.features[0].geometry.coordinates);
var dataArr = geoData.features;

module.exports = function(app) {
    app.get('/api', function(req, res) {
        res.send(dataArr)
    })
}