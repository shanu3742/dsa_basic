const path = require('path');
const fs_Proxy= require('./fs_proxy');
const fs = new fs_Proxy(require('fs'));

const mdFile = path.join(__dirname,'Readme.md');
// const textFile = path.join(__dirname,'Readme.txt');

const result = (err,data) =>{
    if(err){
        console.log('\x07');
        console.log(err);
        process.exit(0)
    }
    console.log('reading file');
    console.log(data)
}
fs.readFile(mdFile,'UTF-8',result);
// fs.readFile(textFile,'UTF-8',result)