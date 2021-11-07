const colors = require("colors");
const fs = require("fs");

colors.setTheme({
  info: "blue",
  warn: "yellow",
  debug: "cyan",
  error: "red",
});

const getTimeStamp = () => {
  return new Date().toISOString();
};

const info = (namespace, message) => {
  let timeStamp = getTimeStamp();
  return `[${timeStamp}] [${colors.info("INFO")}] [${namespace}] ${message}`;
};

const warning = (namespace, message, object) => {
  let timeStamp = getTimeStamp();
  return `[${timeStamp}] [${colors.warn("WARNING")}] [${namespace}] ${message}`;
};

const error = (namespace, message, object) => {
  let timeStamp = getTimeStamp();
  return `[${timeStamp}] [${colors.error("ERROR")}] [${namespace}] ${message}`;
};

const debug = (namespace, message) => {
  let timeStamp = getTimeStamp();
  return `[${timeStamp}] [${colors.debug("DEBUG")}] [${namespace}] ${message}`;
};

module.exports = {
  info,
  warning,
  error,
  debug,
};
