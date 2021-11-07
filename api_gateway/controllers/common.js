const bcrypt = require("bcryptjs");

async function isAuth(db, info) {
  const existedUser = await db.find({ email: info.email }).limit(1);
  console.log(existedUser)
  if (existedUser.length != 0) {
    return await bcrypt.compare(info.password, existedUser[0].password);
  }
  return false;
}

async function isAuthStaff(info) {
  const db = require("../../db").Staff;
  return await isAuth(db, info);
}

async function isAuthPatient(info) {
  const db = require("../../db").Patient;
  return await isAuth(db, info);
}

module.exports = { isAuthPatient, isAuthStaff };
