const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
//解析静态资源文件
app.use(express.static(path.join(__dirname,'public')))
//设置模板
app.set('views',path.join(__dirname,'views'))
//设置模板引擎
app.set('views engine','ejs')
//获取post请求参数
app.use(express.json());

app.get('/',(req,res)=>{
    let data = JSON.parse(fs.readFileSync(path.join(__dirname,'mock','list.json'),'utf8'));
    res.render('index.ejs',{
        data
    })
})
const apiRouter = require('./route/api.route')
app.use('/api',apiRouter);
app.listen(3000,()=>{
    console.log('port is 3000');
})
