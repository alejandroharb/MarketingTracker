var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");

var app = express();

//========handlebars setup=========
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//======database connection, models=========
var db = require('./models')


var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));



// geocoder.geocode('3918 Atascocita Rd Houston, Texas 77396', function(err, res) {
// 	console.log(res)
// })


//==========importing routes=============
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

db.sequelize.sync({ force: true }).then(function(){
  app.listen(PORT, function() {
    console.log("Listening on port: " + PORT)
  });
});