const {readFile,existsSync} = require('fs');
const readFileDate = (filepath)=>{
    let flag = existsSync(filepath); //判断文件是否存在
    return new Promise((resolve,reject)=>{
        if(flag){
            readFile(filepath,(error,data)=>{
                if(error){
                    reject(error.message);
                    return ;
                }
                resolve(data);
            })
        }else{
            reject({
                code:404,
                msg:'not find'
            })
        }
    })
}

module.exports = {readFileDate};