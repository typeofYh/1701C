//1.ctrl+c 读取文件
//2.ctrl+v 写入一个新文件
const {writeFile,readFile,readFileSync,writeFileSync} = require('fs');
function copyFile(filepath,targetFilePath){
    // let text = readFileSync(filepath);  //文件内容
    // writeFileSync(targetFilePath,text);
    readFile(filepath,'utf8',(error,data)=>{
        if(error){
            return ;
        }
        writeFile(targetFilePath,data,(error)=>{
            if(error){
                return ;
            }
            console.log('copy success');
        })
    })
}

// copyFile('./内置模块.txt','./d.txt');

function readf(filepath){
    return new Promise((resolve,reject)=>{
        readFile(filepath,(error,data)=>{
            if(error){
                reject(error);
                return ;
            }
            resolve(data.toString());
        })
    })
}
function template(target,options){
    readf(options.template).then(res=>{
        let html = res;
        let newhtml = html.replace('{style}',`<style>${readFileSync(options.style,'utf8')}</style>`).replace('{script}',`<script>${readFileSync(options.script,'utf8')}</script>`);
        writeFileSync(target,newhtml);
        console.log('写入成功');
    })
}

template('./a.html',{
    template:'./index.html',
    style:'./src/style.css',
    script:'./src/index.js'
});

