const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const jsonPath = path.resolve('mock','data.json');
const getdata = ()=>JSON.parse(fs.readFileSync(jsonPath,'utf8'));
const writefile = (req,res,data)=>{
    fs.writeFile(jsonPath,JSON.stringify(data),(error)=>{
        if(error){
            res.send({
                code:0,
                mes:error.message
            })
            return;
        }
        res.send({
            code:1,
            mes:'successs'
        })
    })
}
router.get('/edit',(req,res)=>{
    let {id} = req.query;
    let data = getdata();
    let resulte = data.find(item=>item.id==id);
    if(resulte){
        res.send({code:1,...resulte})
    }else{
        res.send({
            code:0,
            msg:'暂无数据'
        })
    }
    
})
router.post('/changeEdit',(req,res)=>{
    let {body} = req;
    let data = getdata();
    let index = data.findIndex(item=>item.id==body.id);
    data[index] = body;
    writefile(req,res,data);
})

router.post('/add',(req,res)=>{
    let {body} = req;
    let data = getdata();
    data.push(body);
    data.forEach((item,i) => {
        item.id=i+1
    });
    writefile(req,res,data)
})

router.get('/del',(req,res)=>{
    let {id} = req.query;
    let data = getdata();
    data.splice(data.findIndex(item=>item.id==id),1);
    data.forEach((item,i) => {
        item.id=i+1
    });
    writefile(req,res,data);
})
module.exports = router;