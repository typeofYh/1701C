const express = require('express'); //express
const router = express.Router();  //路由级中间

router.get('/index',(req,res)=>{
    console.log(req.query);
    res.end(JSON.stringify({'title':'index'}))
})

router.get('/list',(req,res)=>{
    console.log('list');
    res.end(JSON.stringify({'title':'list'}))
})

router.post('/list',(req,res)=>{
    res.end(JSON.stringify({'title':'postlist'}))
})
module.exports = router;