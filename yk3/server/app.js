const express = require('express');
const app = express();
const {readfile} = require('./util');
const path = require('path')
const jsonPath = (filename)=>path.join(__dirname,'../mock',filename);
app.use(express.json());
app.get('/api/list',(req,res)=>{
    readfile(jsonPath('stories.json')).then(filedata=>{
        res.send(filedata)
    })
})
app.post('/api/login',(req,res)=>{
    let {user,pwd} = req.body;
    if(user==='zs' && pwd=="1234"){
        res.send({
            code:1,
            username:'zs',
            msg:'success'
        })
    }else{
        res.send({
            code:0,
            msg:'用户名或密码输入有误'
        })
    }
})

app.listen(3000,()=>{
    console.log('port is 300')
})