var express = require('express');
var app = express();
var port = 3000;

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('private route found!');
    next();
  },
  logger: function (req, res, next) {
    console.log('REQUESTING: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('Would you like to see info on us, visit SomeAddress!!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Express server is running on Port ' + port + '!');
});
