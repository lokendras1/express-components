const fs = require("fs");

module.exports = (component, path) => {
    let test = fs.readFileSync(`${__dirname}/../samples/tests/index.test.js`, { encoding: "utf-8" });

    test = test.replace(/index/g, component);

    const filePath = `${path}\\tests\\${component}.test.js`;

    if (fs.existsSync(filePath)) {
        console.log("The test already exists in the path provided.");
        process.exit(0);
    }
    else {
        if (!fs.existsSync(`${path}\\tests`)) {
            fs.mkdirSync(`${path}\\tests`, { recursive: true });
        }
        fs.writeFileSync(filePath, test, { flag: "wx" });
    }
}