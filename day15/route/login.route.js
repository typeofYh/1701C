const express = require('express');
const router = express.Router();
router.post('/user',(req,res,next)=>{
    console.log(req.body);
    // console.log(res);
    //express 封装好的 可以接受任意类型
    //res.end 只能抛字符串
    res.send({title:'登陆成功'})
})
module.exports = router;
