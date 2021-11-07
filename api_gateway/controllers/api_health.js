const GetSuccess = require("../ActionResult").GetSuccess;
const NAMESPACE = "HEALTHController";


exports.get_health = async function (req, res) {
  GetSuccess(res, "API health fine");
};

