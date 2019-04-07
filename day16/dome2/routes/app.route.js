const express = require('express');
const router = express.Router();
const fs = require('fs');
const userdata = './mock/user.json';
const getUserdata = ()=>{
    return JSON.parse(fs.readFileSync(userdata,'utf8')).user;
}
const finduser = (user,pwd,falg)=>{
    let userdata = getUserdata();
    if(falg==='login'){
        return userdata.find(item=>item.user===user && item.pwd===pwd)
    }else{
        return userdata.find(item=>item.user===user);
    }
    
}
router.post('/login',(req,res)=>{
    let {user,pwd} = req.body;
    let resUser = finduser(user,pwd,'login');
    if(resUser){
        res.send({
            code:1,
            msg:'success'
        })
    }else{
        res.send({
            code:0,
            msg:'用户名或密码输入有误'
        })
    }
})

router.post('/adduser',(req,res)=>{
    let {user,pwd} = req.body;  //用户传过来的密码
    let resUser = finduser(user,pwd,'adduser');
    let userData = getUserdata();
    if(resUser){ //用户存在
        res.send({
            code:0,
            msg:'用户已存在'
        })
    }else{  //用户不存在
        userData.push({user,pwd})
        fs.writeFile(userdata,JSON.stringify({user:userData}),(error)=>{
            if(error){
                res.send({
                    code:0,
                    msg:error.message
                })
                return ;
            }
            res.send({
                code:1,
                msg:'注册成功，请登陆！！'
            });
        })
    }
   
})
const str = 'qwertyuiopasdfghjklzxcvbnm';
let code = '';
router.post('/getCode',(req,res)=>{  //获取验证
    code = '';
    while(code.length<4){
        let i = Math.floor(Math.random()*str.length);
        let n = str[i];
        code.includes(n) ? (code += '') : (code += n);
    }
    res.send({code:1});
})

router.post('/checkuser',(req,res)=>{ //点击修改密码
    let {reworldVal,user} = req.body;
    //找用户
    let isUser = finduser(user);
    // console.log(isUser);
    //验证码输入正确 用户存在
    if(reworldVal === code && isUser){
        res.send({
            code:1,
            msg:'前往修改密码'
        })
    //用户存在 验证不正确
    }else if(isUser && reworldVal !== code){
        res.send({
            code:0,
            msg:'验证码输入有误'
        });
    }else{
        res.send({
            code:0,
            msg:'用户不存在请注册'
        });
    }
    
})  
module.exports = router;