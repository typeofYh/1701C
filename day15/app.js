const express = require('express');
const app = express();  //express 应用
const fs = require('fs');
const path = require('path');
const apiRouter = require('./route/api.route');
const loginRouter = require('./route/login.route')
// console.log(apiRouter);
app.use(express.static(path.join(__dirname,'public'))); //加载静态资源
app.use(express.urlencoded({extended:false})); //获取post请求参数 req.body
app.use(express.json()); //获取post请求参数 req.body

app.get('/',(req,res,next)=>{
    res.end(fs.readFileSync('./public/index.html'));
})

app.use('/api',apiRouter)

app.use('/login',loginRouter);

app.listen(3000,()=>{
    console.log('prot is 3000');
})

