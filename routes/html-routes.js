//------dependencies-------
var path = require('path');


//-----exporting paths------
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'maptest.html'))
    });
}