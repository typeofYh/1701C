const gulp = require('gulp');

const gulpWebserver = require('gulp-webserver');


gulp.task('pageserver',()=>{
    return gulp.src('./src')
    .pipe(gulpWebserver({
        port:8000,
        livereload:true,
        fallback:'index.html',
        open:true
    }))
})