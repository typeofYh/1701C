const gulp = require('gulp');

const gulpWebserver = require('gulp-webserver');


gulp.task('page',()=>{
    return gulp.src('./src')
    .pipe(gulpWebserver({
        port:8000,
        open:true,
        livereload:true,
        fallback:'./index.html',
        proxies:[
            {
                target:'http://localhost:3000/api/movieRoom',
                source:'/api/movieRoom'
            },
            {
                target:'http://localhost:3000/api/movieItem',
                source:'/api/movieItem'
            }
        ]
    }))
})