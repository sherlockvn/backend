module.exports = function (app) {
    var controller = require("../controllers/user.js");
  
    app.route("/user/login").post(controller.login);
    app.route("/user/signup").post(controller.signup)
  };