const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('page',()=>{
    return gulp.src('./src')
    .pipe(webserver({
        port:8000,
        livereload:true,
        open:true,
        fallback:'index.html',
        proxies:[ 
            {
                target:'http://localhost:3000/api/list',
                source:'/api/list'
            },
            {
                target:'http://localhost:3000/api/login',
                source:'/api/login'
            }
        ]
    }))
})