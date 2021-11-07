const PATTERNS = {
  EMAIL:
    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
  PHONE: "[0]\\d{9}",
  CODE: "([a-zA-Z0-9_]*)",
  NUMBER: "[+-]?\\d+(\\.\\d+)?",
  USERNAME: "[\\w\\d]+",
  URL:
    "(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?",
  NAME: "[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđs']",
  PASSWORD: '[A-Za-z0-9!@#?$%^&*()_[]|:"{},.<>+=-]',
};

const REGEX = {
  // match single
  EMAIL: new RegExp(`^${PATTERNS.EMAIL}$`),
  PHONE: new RegExp(`^${PATTERNS.PHONE}$`),
  CODE: new RegExp(`^${PATTERNS.CODE}$`),
  NUMBER: new RegExp(`^${PATTERNS.NUMBER}$`),
  USERNAME: new RegExp(`^${PATTERNS.USERNAME}$`),
  URL: new RegExp(`${PATTERNS.URL}`),
  NAME: new RegExp(`${PATTERNS.NAME}+`),
  PASSWORD: new RegExp(`^${PATTERNS.PASSWORD}*$`),
  // match multiple
  EMAILS: new RegExp(
    `^${PATTERNS.EMAIL}\\s|\\s${PATTERNS.EMAIL}$|\\s${PATTERNS.EMAIL}\\s|^${PATTERNS.EMAIL}$`,
    "gi"
  ),
  PHONES: new RegExp(
    `^${PATTERNS.PHONE}\\s|\\s${PATTERNS.PHONE}$|\\s${PATTERNS.PHONE}\\s|^${PATTERNS.PHONE}$`,
    "g"
  ),
  CODES: new RegExp(
    `^${PATTERNS.CODE}\\s|\\s${PATTERNS.CODE}$|\\s${PATTERNS.CODE}\\s|^${PATTERNS.CODE}$`,
    "gi"
  ),
  NUMBERS: new RegExp(
    `^${PATTERNS.NUMBER}\\s|\\s${PATTERNS.NUMBER}$|\\s${PATTERNS.NUMBER}\\s|^${PATTERNS.NUMBER}$`,
    "g"
  ),
  USERNAMES: new RegExp(
    `^${PATTERNS.USERNAME}\\s|\\s${PATTERNS.USERNAME}$|\\s${PATTERNS.USERNAME}\\s|^${PATTERNS.USERNAME}$`,
    "gi"
  ),
  URLS: new RegExp(
    `^${PATTERNS.URL}\\s|\\s${PATTERNS.URL}$|\\s${PATTERNS.URL}\\s|^${PATTERNS.URL}$`,
    "gi"
  ),
  NAMES: new RegExp(
    `^${PATTERNS.NAME}\\s|\\s${PATTERNS.NAME}+$|\\s${PATTERNS.NAME}\\s|^${PATTERNS.NAME}+$`,
    "gi"
  ),
  PASSWORDS: new RegExp(
    `^${PATTERNS.PASSWORD}\\s|\\s${PATTERNS.PASSWORD}*$|\\s${PATTERNS.PASSWORD}\\s|^${PATTERNS.PASSWORD}*$`,
    "gi"
  ),
};

module.exports = {
  REGEX,
  PATTERNS,
};
