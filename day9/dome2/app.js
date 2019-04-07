const {join,extname} = require('path');
const http = require("http")
//静态资源的根目录
const staticRoot = (filename)=>join(__dirname,'static',filename)
//读取文件的方法
const {readFileDate} = require('./file');
//
const server=http.createServer((req,res)=>{
    let {url} = req;
    if(url === '/favicon.ico'){ //网站图标
        res.end('');
        return;
    }
    let filename = url === '/' ? 'index.html' : url;
    if(extname(filename)){  //有后缀名是静态资源文件 
        let files = staticRoot(filename);
        readFileDate(files).then(data=>{
            res.end(data);
        },(error)=>{
            res.statusCode = 404;
            res.end(error.msg);
        });
    }else{  //接口  /  /api
        switch(url){
            case '/api/index':
                res.end(JSON.stringify(require('./mock/index')));
            break;
            case '/api/login':
                res.end(JSON.stringify(require('./mock/index')));
            break;
        }
    }
})
server.listen(3000,()=>{
    console.log('localhost:3000 start')
})