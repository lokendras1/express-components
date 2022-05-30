const copyController = require("./scripts/controller");
const copyService = require("./scripts/service");
const copyRoute = require("./scripts/route");

module.exports = (component, path) => {
    copyController(component, path);
    copyService(component, path);
    copyRoute(component, path);
}