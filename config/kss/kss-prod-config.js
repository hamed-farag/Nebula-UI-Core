var pkg = require("../../package.json");
var kssCommon = require("./kss-common-config");
kssCommon.destination = "../../dist/prod/nebula-ui/" + pkg.version + "/doc";
kssCommon.css = [
    "https://fonts.googleapis.com/css?family=Lato",
    "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    "../nebula-ui.min.css"
];
module.exports = kssCommon;