const http = require('http');
const {join} = require('path');
const staticPath = (filename)=>join(__dirname,'../public',filename);
const {readFile} = require('fs');
const url = require('url');
//服务端
const server = http.createServer((req,res)=>{
    // 接受到请求才会触发
    //req 请求对象 浏览器主动发起请求时才会接受
    //res 响应对象 服务器向浏览器响应  不响应挂起 
    // /
    console.log('req.url',req.url);
    console.log('urlmodule',url.parse(req.url));
    let pathname = url.parse(req.url).pathname;
    if(pathname === '/favicon.ico'){
        res.end('');
        return;
    }
    if(pathname === '/'){
        readFile(staticPath('index.html'),(error,data)=>{
            if(error){
                return;
            }
            res.end(data);
        })
    }else{
        switch(pathname){
            case '/api/list':
                console.log(url.parse(req.url,true).query);
                res.end('111111');
            break;
        }
    }
}).listen(8000,()=>{
    console.log(server.address().port);
})

