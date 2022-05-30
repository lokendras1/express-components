const fs = require("fs");

module.exports = (component, path) => {
    let service = fs.readFileSync(`${__dirname}/../samples/services/index.js`, { encoding: "utf-8" });

    service = service.replace(/index/g, component);

    const filePath = `${path}\\services\\${component}.js`;

    if (fs.existsSync(filePath)) {
        console.log("The service already exists in the path provided.");
        process.exit(0);
    }
    else {
        if (!fs.existsSync(`${path}\\services`)) {
            fs.mkdirSync(`${path}\\services`, { recursive: true });
        }
        fs.writeFileSync(filePath, service, { flag: "wx" });
    }
}