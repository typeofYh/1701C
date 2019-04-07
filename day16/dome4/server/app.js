const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const jsonpath =(filename)=>path.join(__dirname,'../mock/',filename);
app.get('/api/movieRoom',(req,res)=>{
    res.sendFile(jsonpath('movieRoom.json'))
})

app.get('/api/movieItem',(req,res)=>{
    let {id} = req.query; //影院id
    //读取所有影院数据
    //查找符合条件的    
    let data = JSON.parse(fs.readFileSync(jsonpath('movieItem.json'),'utf8'));
    res.send(data.filter(item=>item.movieroom.includes(id*1)));
})

app.listen(3000,()=>{
    console.log('后台已启动')
});