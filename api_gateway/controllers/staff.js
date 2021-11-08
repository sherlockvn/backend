const getResult = require("../ActionResult");
const NAMESPACE = "AccountsController";

const validateReq = require("../validateRequest/validateRequest");
const common = require("./common");

const jwt = require("jsonwebtoken");

exports.login = async function (req, res, next) {
  const info = req.body;
  if (!validateReq.validateLogin(info)) {
    const error = "In your email or password have specific character";
    return getResult.GetError(res, error);
  }
  if (await common.isAuthStaff(info)) {
    const accessToken = jwt.sign(info.email, process.env.ACCESS_TOKEN_SECRET);
    return getResult.GetSuccess(res, accessToken);
  }
  const error = "There is no staff in db";
  return getResult.GetError(res, error);
};

exports.addUser = async function (req, res, next) {};
