module.exports = function (app) {
  var controller = require("../controllers/api_health.js");

  app.route("/health").get(controller.get_health);
};
