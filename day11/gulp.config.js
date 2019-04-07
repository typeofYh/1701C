const gulp = require('gulp');
const gulpScss = require('gulp-sass');// 编译sass
const gulpServer = require('gulp-webserver')     //gulp-webserver 
const url = require('url'); 
const {readfile,staticpath} = require('./util');
const bodyParse = require('body-parser');
const path = require('path');
const scsspath = './src/scss/*.{scss,sass}';
gulp.task('sass',()=>{
    return gulp.src(scsspath)
    .pipe(gulpScss())
    .pipe(gulp.dest('./src/css'))
})
gulp.task('changeSass',()=>{
    return gulp.watch(scsspath,gulp.series('sass'));
})
gulp.task('server',()=>{
    return gulp.src('./src')
    .pipe(gulpServer({
        port:8080,  //端口
        open:true, //打开
        // host:'127.0.0.1',  //域名
        // fallback:'index.html',  //返回的静态资源文件
        //key=value&key=value
        //bodyParse.urlencoded({extended:false})
        //{key:value,key:value}
        middleware:[
            bodyParse.urlencoded({extended:false}),
            bodyParse.json(),
            (req,res)=>{  //7
                if(req.url === '/favicon.ico'){
                    res.end('');
                    return;
                }
                let pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                if(!path.extname(pathname)){
                    //接口
                    switch(pathname){
                        case '/api/index':
                            console.log(req.body); //
                            console.log(req.query)
                            res.end(JSON.stringify({title:'apiindex'}))
                        break;
                        case '/api/login':
                        {
                            console.log(req.body);
                            res.end(JSON.stringify({title:'apilogin'}))
                        }
                        break;
                        case '/api/mes':
                        {
                            console.log(req.body);
                            res.end(JSON.stringify({title:'apimes'}))
                        }
                        break;
                    }
                }else{
                    //静态文件
                    readfile(staticpath('src',pathname)).then(fileContent=>{
                        res.end(fileContent);
                    })
                }
            }
        ]
    }))
})

gulp.task('dev',gulp.series('sass',gulp.parallel('changeSass','server')))  //development 开发环境


//上线 压缩 改名 jses6-es5 合并文件 

//压缩  js css

const gulpBabel = require('gulp-babel');
const gulpUglify = require('gulp-uglify');
const gulpCleanCss = require('gulp-clean-css');
//添加css前缀
const gulpAutoprefixer = require('gulp-autoprefixer');
//生成新的文件名称 和对应关系json
const gulpRev = require('gulp-rev');
//修改html中连接的文件名称
const gulpRevCollector = require('gulp-rev-collector');
const gulpHtml = require('gulp-htmlmin');
//合并文件
const gulpConcat = require('gulp-concat');
gulp.task('copyjs',()=>{
    return gulp.src('./src/js/axios.js')
    .pipe(gulp.dest('./dist/js/'));
})
gulp.task('copyimage',()=>{
    return gulp.src('./src/image/*.{jpg,png,gif}')
    .pipe(gulp.dest('./dist/image/'))
})

gulp.task('minjs',()=>{
    return gulp.src(['./src/**/*.js','!./src/js/axios.js'])
    .pipe(gulpBabel())
    .pipe(gulpUglify())
    .pipe(gulp.dest('./dist/'))
})
//压缩css
gulp.task('mincss',()=>{
    return gulp.src(['./src/**/*.css'])
    .pipe(gulpCleanCss())
    .pipe(gulpAutoprefixer({
        browsers:['last 2 versions']  //兼容最近的两个浏览内核
    }))
    .pipe(gulp.dest('./dist/'))
})
//压缩html
gulp.task('minhtml',()=>{
    return gulp.src(['./src/*.html'])
    .pipe(gulpHtml({
        collapseWhitespace:true
    }))
    .pipe(gulp.dest('./dist/'))
})
//改名
gulp.task('changefile',()=>{
   return gulp.src(['./dist/**/*','!./dist/js/axios.js','!./dist/*.html','!'+scsspath])
    .pipe(gulpRev())
    .pipe(gulp.dest('./dist/'))
    .pipe(gulpRev.manifest())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('changename',()=>{
    return gulp.src(['./dist/*.html','./rev-manifest.json'])
    .pipe(gulpRevCollector())
    .pipe(gulp.dest('./dist'))
})

gulp.task('build',gulp.series('copyjs','copyimage',gulp.parallel('minjs','mincss','minhtml'),'changefile','changename'))