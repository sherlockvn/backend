const bcrypt = require("bcryptjs");

const getResult = require("../ActionResult");

const validateReq = require("../validateRequest/validateRequest");
const common = require("./common");
const emailMsg = require("./emailMsg");

exports.login = async function (req, res, next) {};

exports.signup = async function (req, res, next) {
  const info = req.body;
  if (!validateReq.validateUserSignUp(info)) {
    const error = "In your email or password have specific character";
    return getResult.GetError(res, error);
  }
  info.code = Math.floor(100000 + Math.random() * 900000);
  const hashPassword = await bcrypt.hash(info.password, 10);
  info.password = hashPassword;
  const db = require("../../db").Patient;
  try {
    const result = await db.create(info);
    const data = { _id: result._id };
    const mail = emailMsg.getValidateEmail(info.code);
    console.log(mail);
    await common.sendMail(info.email, mail.subject, mail.text);
    return getResult.GetSuccess(res, data);
  } catch (e) {
    return getResult.GetError(res, e);
  }
};

exports.completeSignup = async function (req, res, next) {
  const info = req.body;
  if (!validateReq.validateCompleteSignUp(info)) {
    const error = "In your email or code have specific character";
    return getResult.GetError(res, error);
  }
  const db = require("../../db").Patient;
  try {
    const diffTime = new Date(Date.now() - process.env.EXPIRED_CODE * 1000);
    const existedUser = await db
      .find({ email: info.email, updated_time: { $gte: diffTime } })
      .limit(1);
    if (existedUser.length == 0) {
      const error = "This email have not existed";
      return getResult.GetError(res, error);
    } else {
      if (info.code == existedUser[0].code) {
        const code = 0;
        await db.updateOne(
          { email: info.email },
          {
            code: code,
          }
        );
        const data = "Your Acc have successfull created";
        return getResult.GetSuccess(res, data);
      } else {
        const error = "Wrong code";
        return getResult.GetError(res, error);
      }
    }
  } catch (e) {}
};
