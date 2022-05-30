const fs = require("fs");

module.exports = (component, path) => {
    let routes = fs.readFileSync(`${__dirname}/../samples/routes/index.js`, { encoding: "utf-8" });
    routes = routes.replace(/index/g, component);
    routes = routes.replace(/controller\b/g, component);

    const filePath = `${path}\\routes\\${component}.js`;

    if (fs.existsSync(filePath)) {
        console.log("The route already exists in the path provided.");
        process.exit(0);
    }
    else {
        if (!fs.existsSync(`${path}\\routes`)) {
            fs.mkdirSync(`${path}\\routes`, { recursive: true });
        }

        fs.writeFileSync(filePath, routes, { flag: "wx" });
    }
}