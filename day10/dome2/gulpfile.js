const gulp = require('gulp'); 
const gulpSass = require('gulp-sass');
const gulpUglify = require('gulp-uglify');
const gulpBabel = require('gulp-babel');  
const minCss = require('gulp-clean-css');
const minHtml = require('gulp-htmlmin');
const gulpRev = require('gulp-rev');  //重命名
const gulpRevCollector = require('gulp-rev-collector');
//跟babel配合来使用 使用babel7版本的插件  @babel/preset-env
//自己去百度 gulp压缩图片
//创建任务
//gulp.task(任务名,()=>{})
gulp.task('scss',()=>{
    //哪些文件需要处理
    return gulp.src('./src/sass/*.{scss,sass}')
    .pipe(gulpSass())
    //压缩css
    .pipe(minCss())
    .pipe(gulp.dest('./dist/css'))
})


gulp.task('minjs',()=>{  //
    return gulp.src('./src/js/*.js')
    //压缩之前把es6转为es5
    .pipe(gulpBabel())
    .pipe(gulpUglify())
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('minhtml',()=>{
    return gulp.src('./src/**/*.html')
    .pipe(minHtml({
        collapseWhitespace:true
    }))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('watchFile',()=>{
    return gulp.watch(['./src/sass/*.{sass,scss}','./src/js/*.js'],gulp.parallel('scss','minjs'))
})

gulp.task('rev',()=>{ //改名
    return gulp.src('./src/css/index.css')
    .pipe(gulpRev()) //
    .pipe(gulpRev.manifest())  //生成重命名的json 体现依赖关系
    .pipe(gulp.dest('./manifest/'))  //json输出的地方
})

gulp.task('change',()=>{
    return gulp.src(['./manifest/*.json','./src/index.html'])
    .pipe(gulpRevCollector({
        replaceReved:true //是否前缀被改变后可再次被取代
    }))
    .pipe(gulp.dest('./dist/'))
})
gulp.task('revFile',gulp.series('rev','change'));
//gulp 在运行时默认查找gulpfile.js去运行
//gulp -f=gulpfile.js 任务名(default)  默认
//gulp -f=a.js 任务名 