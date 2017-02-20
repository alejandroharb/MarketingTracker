var express = require('express');
var path = require('path');


var app = express();


//======database connection, models=========
var db = require('./models')


var PORT = process.env.PORT || 8080;

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