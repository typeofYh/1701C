const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
//设置视图根路径
app.set('views',path.resolve('views'))
//设置视图模板
app.set('views engine','ejs')
//设置静态资源文件根目录
app.use(express.static(path.resolve('views')));
//获取post请求参数
app.use(express.json());
app.get('/',(req,res)=>{
    let data = JSON.parse(fs.readFileSync(path.resolve('mock','data.json'),'utf8'));
    res.render('index.ejs',{
        data
    })
})
let addressRouter = require('./routes/addressRouter')
app.use('/address',addressRouter);


app.listen(3000,()=>{
    console.log('port is 3000');
})