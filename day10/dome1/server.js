const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');
const getParams = (req)=>{ //获取请求参数
    if(/^GET$/i.test(req.method)){
        return url.parse(req.url,true).query
    }else{
        return new Promise((resolve)=>{
            let data = '';
            req.on('data',chunk=>data+=chunk);
            req.on('end',()=>{
                resolve(JSON.parse(data));
            })
        })
    }
}
const server = http.createServer((req,res)=>{
    // request 请求
    // response 响应
    if(req.url === '/favicon.ico'){
        res.end('');
        return;
    }
    // console.log(req.url);  //http://localhost:3000 /path  ?1212  
    //3000端口后全部属于url
    // console.log(url.parse(req.url))
    let pathname = url.parse(req.url).pathname;
    pathname = pathname === '/' ? 'index.html' : pathname; //浏览器发起的请求地址
    let filename = path.join('./public/',pathname); //静态资源文件路径
    // let isFile = fs.statSync(filename).isFile(); //判断是否是静态资源文件
    if(path.extname(filename)){
        // console.log(pathname);
        //文件存在
        if(fs.existsSync(filename)){
            fs.readFile(filename,(error,data)=>{
                if(error){
                    res.statusCode = error.statusCode;
                    res.end(error.message);
                    return ;
                }
                res.end(data);
            })
        }else{
            res.statusCode = 404;
            res.end('');
        }
    }else{
        // console.log(req.method); //请求方式 GET POST
        
       switch(pathname){
           case '/api/list': //get 直接获取url
            //获取get请求参数
            console.log(getParams(req))  //get
            let {limit,pageid} = url.parse(req.url,true).query;
            let title = `list|${limit}`;
                let list = Mock.mock({
                    [title]:[{
                        title:'@ctitle',
                        image:'@image',
                        'id|+1':(pageid-1)*limit+1,
                        date:Date.now()
                    }]
                })
                res.end(JSON.stringify(list));
           break;
           case '/api/login':  //post 只有post请求时才需要ondata onend
            {
                getParams(req).then((data)=>{
                    res.end(JSON.stringify(data));
                })
                // let data = '';
                // req.on('data',chunk=>{
                //     data += chunk;
                // })
                // req.on('end',()=>{
                //     console.log(JSON.parse(data));
                // })
                
            }
           break;
           case '/api/aa':  //post
            {
                getParams(req).then((data)=>{
                    res.end(JSON.stringify(data));
                })
                // let data = '';
                // req.on('data',chunk=>{
                //     data += chunk;
                // })
                // req.on('end',()=>{
                //     console.log(JSON.parse(data));
                // })
                // res.end('11');
            }
           break;
       }
    }
});



//node.process nodejs的全局进程对象
server.listen(process.env.PORT || '8000',()=>{
    console.log(`port is ${server.address().port}`);
})
