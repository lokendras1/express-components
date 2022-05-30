const copyController = require("./scripts/controller");
const copyService = require("./scripts/service");

module.exports = (component, path, additional_path) => {
    copyController(component, path);
    copyService(component, path);
}