const bcrypt = require("bcryptjs");

async function isAuth(db, info) {
  const existedUser = await db.find({ email: info.email }).limit(1);
  console.log(existedUser);
  if (
    existedUser.length != 0 &&
    (await bcrypt.compare(info.password, existedUser[0].password))
  ) {
    return existedUser;
  }
  return false;
}

async function isAuthStaff(info) {
  const db = require("../../db").Staff;
  if ((await isAuth(db, info)) == false) return false;
  return true;
}

async function isAuthPatient(info) {
  const db = require("../../db").Patient;
  const result = await isAuth(db, info);
  if (result == false || result.code != 0) return false;
  return true;
}

async function sendMail(emails, subject, text) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: emails, // Change to your recipient
    from: "thao.chip.0305@gmail.com", // Change to your verified sender
    subject: subject,
    text: text,
    html: `<strong>${text}</strong>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
function isIsoDate(str) {
  var d = new Date(str);
  return d.toISOString() === str;
}

module.exports = { isAuthPatient, isAuthStaff, sendMail, isIsoDate };
