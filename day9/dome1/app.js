const http = require('http');
const fs = require('fs');
const path = require('path');
const rootPath = (filename='')=>path.join(__dirname,'public',filename);

//http.createServer()
//创建http服务
let n = 0;
const Server = http.createServer((req,res)=>{
    //req 请求对象
    //res 响应对象
    //当发起请求时执行
    console.log(req.url);
    if(req.url === '/favicon.ico'){
        fs.readFile(rootPath('favicon.ico'),(error,data)=>{
            if(error){
                return ;
            }
            res.end(data) //返回结果 end方法内只能放字符串
        });
        return ;
    }
    if(req.url === '/'){
        fs.readFile(rootPath('index.html'),(error,data)=>{
            if(error){
                return ;
            }
            res.end(data) //返回结果 end方法内只能放字符串
        });
    }else{
        fs.readFile(rootPath(req.url),(error,data)=>{
            if(error){
                return ;
            }
            res.end(data) //返回结果 end方法内只能放字符串
        });
    }
    
})

//监听
Server.listen(8080,()=>{
    console.log('您的服务地址是:http://localhost:8080')
})


//http://localhost:8080/a/index.html

