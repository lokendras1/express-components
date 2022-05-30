#!/usr/bin/env node

const ecg = require("../");
const path = require("path");

const component_name = process.argv[2];
const additional_path = process.argv[3];

if(component_name){
    let dist = additional_path ? `${process.cwd()}\\${additional_path}` : process.cwd();
    dist = path.normalize(dist);
    
    ecg(component_name,dist, (additional_path && true));
}

else{
    console.error("Component name is required.");
}