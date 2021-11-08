const regex = require("./const").PATTERNS;
exports.validateLogin = function (info) {
  if ("email" in info && "password" in info) {
    return true;
  } else {
    return false;
  }
};

exports.validateUserSignUp = function (info) {
  if (
    "email" in info &&
    "phone_number" in info &&
    "first_name" in info &&
    "last_name" in info &&
    "password" in info &&
    "address" in info &&
    "dob" in info && 
    "gender" in info 
  ) {
    return true;
  } else {
    return false;
  }
};

exports.validateCompleteSignUp = function (info){
  if (
    "email" in info &&
    "code" in info 
  ) {
    return true;
  } else {
    return false;
  }
}
