const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api", "/auth/google"], {
      target: "https://alexisjcarr-emaily.herokuapp.com/auth/google" // TODO: Change this to development link when start work again
    })
  );
};
