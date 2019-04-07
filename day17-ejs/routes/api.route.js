const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const josnPath = (filename)=>path.join(__dirname,'../mock',filename);
router.get('/smallnav',(req,res)=>{
    //获取get请求参数
    let {navId} = req.query;
    let smallNav = JSON.parse(fs.readFileSync(josnPath('smallnav.json'),'utf8'))
    res.send(smallNav.filter(item=>item.navId===navId*1));
})
router.get('/shoplist',(req,res)=>{ //商品列表
    //获取get请求参数
    let {typeId} = req.query;
    let shoplist = JSON.parse(fs.readFileSync(josnPath('shoplist.json'),'utf8'))
    res.send(shoplist.filter(item=>item.typeId===typeId*1));
})


module.exports = router;