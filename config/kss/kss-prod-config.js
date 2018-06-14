var pkg = require("../../package.json");
var kssCommon = require("./kss-common-config");
kssCommon.destination = "../../dist/prod/" + pkg.version + "/doc";
module.exports = kssCommon