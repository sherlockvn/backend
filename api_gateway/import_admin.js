async function importAdmin() {
  var fs = require("fs");
  var filePath = "api_gateway/import_admin.json";

  var data;

  try {
    data = JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    // handle your file not found (or other error) here
    console.log(err);
    throw "File not found!!!";
  }

  const bcrypt = require("bcryptjs");
  const staff = require("../db").Staff;

  data.forEach(async (element) => {
    const existUser = await staff
      .find({
        email: element.email,
      })
      .limit(1);

    var hashPassword = await bcrypt.hash(element.password, 10);
    console.log("hashPassword : " + hashPassword);
    element.password = hashPassword
    console.log("existUser : " + existUser);
    console.log("This is element ", element);
    if (0 == existUser.length) {
      const output1 = await staff.updateOne(
        {
          email: element.email,
        },
        {
          $set: element, 
        },
        { upsert: true }
      );
    } else {
    }
  });
}

module.exports = {
  importAdmin,
};
