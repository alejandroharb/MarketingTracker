var geoJSON = require('geojson');
var express = require('express');
var path = require('path');
var NodeGeocoder = require('node-geocoder');
var options = {
	provider: 'google'
}
var geocoder = NodeGeocoder(options);
var app = express();

var PORT = 3000;



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

// console.log(geoData.features);
var dataArr = geoData.features;

geocoder.geocode('3918 Atascocita Rd Houston, Texas 77396', function(err, res) {
	console.log(res)
})


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/api', function(req, res) {
	res.send(geoData);
})

app.listen(PORT, function() {console.log("listening on Port: " + PORT)})