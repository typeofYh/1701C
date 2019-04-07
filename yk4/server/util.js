const fs = require('fs');
const path = require('path');
exports.mockPath = (jsonname)=>path.join(__dirname,'../mock',jsonname);
exports.viewsPath = path.join(__dirname,'views');
exports.staticPath = path.join(__dirname,'public');

exports.read = (filepath)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,(error,data)=>{
            if(error){
                reject(error.message)
                return;
            }
            resolve(data.toString());
        })
    })
}