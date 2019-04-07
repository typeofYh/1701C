const express = require('express'); //引入express
const app = express();  //生成express应用
const path = require('path');
const fs = require('fs');
const viewsPath = (filename='')=>path.join(__dirname,'views',filename);
const josnPath = (filename)=>path.join(__dirname,'mock',filename);
//设置express解析视图的根路径
app.set('views',viewsPath())
//设置express使用什么模板引擎来解析视图
app.set('views engine','ejs')
//设置静态资源文件的根路径
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    //1.路径
    //2.数据
    res.render('index.ejs',{
        nav:JSON.parse(fs.readFileSync(josnPath('nav.json'),'utf8'))
    })
})
const apiRoute = require('./routes/api.route')
//接口
app.use('/api',apiRoute);


//3.监听端口
app.listen(3000,()=>{
    console.log('port is 3000');
})