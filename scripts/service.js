const fs = require("fs");

module.exports = (component, path) => {
    let controller = fs.readFileSync(`${__dirname}/../samples/services/index.js`, { encoding: "utf-8" });

    controller = controller.replace(/index/g, component);

    const filePath = `${path}\\services\\${component}.js`;

    if(fs.existsSync(filePath)){
        console.log("The service already exists in the path provided.");
        process.exit(0);
    }
    else{
        if(!fs.existsSync(`${path}\\services`)){
            fs.mkdirSync(`${path}\\services`);
        }
        fs.writeFileSync(filePath, controller, { flag: "wx" });
    }
}