var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var middleware = require('./middleware.js');


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('Would you like to see info on us, visit SomeAddress!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Express server is running on Port ' + port + '!');
});
