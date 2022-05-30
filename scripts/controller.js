const fs = require("fs");

module.exports = (component, path) => {
    let controller = fs.readFileSync(`${__dirname}/../samples/controllers/index.js`, { encoding: "utf-8" });

    controller = controller.replace(/controller/g, component);
    controller = controller.replace(/index/g, component);

    const filePath = `${path}\\controllers\\${component}.js`;

    if(fs.existsSync(filePath)){
        console.log("The controller already exists in the path provided.");
        process.exit(0);
    }
    else{
        if(!fs.existsSync(`${path}\\controllers`)){
            fs.mkdirSync(`${path}\\controllers`);
        }
        fs.writeFileSync(filePath, controller, { flag: "wx" });
    }
}