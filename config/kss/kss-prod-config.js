var pkg = require("../../package.json");
var kssCommon = require("./kss-common-config");
kssCommon.destination = "../../dist/prod/nebula-ui/" + pkg.version + "/doc";
kssCommon.css = ["../nebula-ui.min.css"];
module.exports = kssCommon;