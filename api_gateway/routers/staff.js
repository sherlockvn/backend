module.exports = function (app) {
    var controller = require("../controllers/staff.js");
  
    app.route("/staff/login").post(controller.login);
    app.route("/staff/add-user").post(controller.addUser)
  };