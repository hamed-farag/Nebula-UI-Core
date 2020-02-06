var kssCommon = require("./kss-common-config");
kssCommon.destination = "../../docs";
kssCommon.css = [
    "https://fonts.googleapis.com/css?family=Lato",
    "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    "../dist/nebula-ui.css", 
    "../config/kss/customStyles/kss-hub.css"
];
module.exports = kssCommon;