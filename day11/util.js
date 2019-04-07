const fs = require('fs');
const path = require('path');
const url = require('url');

exports.staticpath = (...filepath)=>path.join(__dirname,...filepath)
exports.readfile = (filename)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(error,data)=>{
            if(error){
                reject(error.message);
                return;
            }
            resolve(data);
        })
    })
}
exports.writefile = (filename,text)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(filename,text,(error)=>{
            if(error){
                reject(error.message);
                return;
            }
            resolve({code:1,msg:'写入成功'});
        })
    })
}
exports.bodyParse = (req,res,next)=>{  //中间件
    if(req.method==='GET'){
        req.query = url.parse(req.url,true).query;
        next();
    }else{
        let data = '';
        req.on('data',chunk=>{
            data += chunk;
        })
        req.on('end',()=>{
            req.body = JSON.parse(data);
            next();
        })
    }
}


