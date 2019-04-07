const fs = require('fs');
exports.readfile = (filepath)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,(error,data)=>{
            if(error){
                reject(error.message);
                return;
            }
            resolve(data.toString());
        })
    })
}