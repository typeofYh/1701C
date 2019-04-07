const gulp = require('gulp');
const gulpWebserver = require('gulp-webserver');
gulp.task('views',()=>{
    return gulp.src('./views')
    .pipe(gulpWebserver({  //前端的静态服务
        port:8080,
        open:true,
        livereload:true,  //自动刷新浏览器
        fallback:'index.html',
        proxies:[   //设置代理 前后端分离 
            { //登陆接口
                target: 'http://localhost:3000/api/login', //目标
                source:'/api/login'  //源 在8080请求时写入的地址
            },
            { //注册接口
                target: 'http://localhost:3000/api/adduser', //目标
                source:'/api/adduser'  //源 在8080请求时写入的地址
            },
            { //验证码接口
                target: 'http://localhost:3000/api/getCode', //目标
                source:'/api/getCode'  //源 在8080请求时写入的地址
            },
            { //修改密码验证身份接口
                target: 'http://localhost:3000/api/checkuser', //目标
                source:'/api/checkuser'  //源 在8080请求时写入的地址
            }
        ]  
    }))
})