const http = require('http');
const {join,extname} = require('path');
const staticPath = (filename)=>join('public',filename)
const fs = require('fs');
const {parse} = require('url');//处理url字符串

const Mock = require('mockjs');
const getfile =(filename,res)=>{  //文件
    filename = staticPath(filename);
    let flag = fs.existsSync(filename);
    if(flag){
        res.statusCode = 200;
        fs.readFile(filename,(error,data)=>{
            if(error){
                res.end(error.Message);
                return;
            }
            res.end(data);
        })
    }else{
        res.statusCode = 404;
        res.end('');
    }
}


const serverFun = (req,res)=>{
    // console.log('url',req.url);
    // console.log('urlparse',parse(req.url))
    let pathname = parse(req.url).pathname;
    //req请求 request
    //res响应 response
    //在浏览器按下回车默认访问localhost:8000 / 根路径
    //默认发起/favicon.ico请求
    if(req.url==='/favicon.ico'){
        res.end('');
        return ;
    }
    
    if(pathname === '/'){
        getfile('index.html',res)
        // res.end(file);
    }else if(extname(pathname)){
        getfile(pathname,res)
        // res.end(file)
    }else{
        //接口
        switch(pathname){
            case '/api/index':  //get通过url地址的查询字符串来请求
                console.log(parse(req.url,true).query)
                //{pageid:2,limit:20}
                const indexdata = Mock.mock({
                    'list|10':[{
                        title:'@ctitle',
                        image:'@image'
                    }]
                })
                res.end(JSON.stringify(indexdata));
            break;
            case '/api/login':  //post请求特点 数据量大 安全
                //zs 1234 
                //获取post请求的参数
                let data = '';
                req.on('data',(chunk)=>data+=chunk);  //一点一点接
                req.on('end',()=>{  //接完
                    data = JSON.parse(data); //字符串
                    res.end(data.name==='zs' && data.pwd==='1234' ? JSON.stringify({code:1,msg:'succcess'}) : JSON.stringify({code:0,msg:'用户名和密码输入有误'}));
                })
            break;
        }
    }
    
}
const server = http.createServer(serverFun);

server.listen(8000,()=>{
    console.log(`port is ${server.address().port}`)
})