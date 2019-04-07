const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const listpath = path.join(__dirname,'../mock','list.json')
router.post('/addAddress',(req,res)=>{
    let {body} = req;
    //本地数组
    let data = JSON.parse(fs.readFileSync(listpath,'utf8'));
    data.push(body)
    fs.writeFile(listpath,JSON.stringify(data),(error)=>{
        if(error){
            res.send({
                code:0,
                msg:'error'
            })
            return ;
        }
        res.send({
            code:1,
            msg:'success'
        })
    })
    
})
router.get('/del',(req,res)=>{
    let {id} = req.query;
    let data = JSON.parse(fs.readFileSync(listpath,'utf8'));
    data.splice(id*1,1);
    fs.writeFile(listpath,JSON.stringify(data),(error)=>{
        if(error){
            res.send({
                code:0,
                msg:'error'
            })
            return ;
        }
        res.send({
            code:1,
            msg:'success'
        })
    })
})

module.exports = router;