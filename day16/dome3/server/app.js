const http = require('http');
const url = require('url');
const server = http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname
    res.writeHead(200,{  //设置headers 头信息
        'Access-Control-Allow-Origin':"http://localhost:8000"
    })
    switch(pathname){
        case '/api/index':
            res.end(JSON.stringify({title:'abc'}))
        break;
        default:
            res.statusCode = 404;
            res.end('')
        break;
    }
})

server.listen(3000,()=>{
    console.log('port is 3000')
})