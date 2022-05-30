const copyController = require("./scripts/controller");
const copyService = require("./scripts/service");
const copyRoute = require("./scripts/route");
const copyTest = require("./scripts/test");

module.exports = (component, path) => {
    copyService(component, path);
    copyController(component, path);
    copyRoute(component, path);
    copyTest(component, path);
}