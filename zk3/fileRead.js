const fs = require('fs');
const path = require('path');
const floader = (filepath) => {
    let isFile = fs.statSync(filepath).isFile();
    let filename = path.parse(filepath).base; //最后的路径
    let singlePath = filepath;
    // let fileobj = {};
    if (isFile) { //文件
        return {isFile,filename,singlePath,children:null};
    } else { //文件夹
        //文件夹下面所有的文件接着读取
        return {isFile,filename,singlePath,children:fs.readdirSync(filepath).map(item=>floader(path.join(filepath,item)))}
    }
}


fs.writeFileSync('./floader.json',JSON.stringify(floader('./abc')));