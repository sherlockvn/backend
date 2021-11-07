const regex = require("./const").PATTERNS;
exports.validateLogin = function (info) {
  if ("email" in info && "password" in info ) {
    return true;
  } else {
    return false;
  }
};
