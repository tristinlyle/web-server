var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('Private route found!');
    next();
  },
  logger: function (req, res, next) {
    console.log('REQUESTING: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

module.exports = middleware;
