const GetSuccess = require("./ActionResult").GetSuccess;
const _logger = require("./logger");
const importAdmin = require('./import_admin').importAdmin
require("dotenv").config();

var express = require("express");
var app = express();
var cors = require("cors");

importAdmin();

var api_health = require("./routers/api_health");
var api_user = require("./routers/user");
var api_staff = require("./routers/staff");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Disable CORS
app.use(cors());

const NAMESPACE = "Server";

/** Log the request **/
app.use((req, res, next) => {
  console.log(
    _logger.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}] ===> ON CALL`)
  );

  res.on("finish", () => {
    console.log(
      _logger.info(
        NAMESPACE,
        `METHOD - [${req.method}], URL - [${req.url}], STATUS - [${res.statusCode}] ===> FINISH API`
      )
    );
  });

  next();
});

/** Rules of API **/
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return GetSuccess(res);
  }

  next();
});

//Use routes
api_health(app);
api_staff(app);

app.set("port", process.env.API_GATEWAY_PORT || 3000);
app.listen(app.get("port"), function () {
  console.log("API is running on port: " + app.get("port"));
});
