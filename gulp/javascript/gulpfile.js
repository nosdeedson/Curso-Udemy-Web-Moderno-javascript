const gulp = require('gulp')
const concat = require('gulp-concat')
const ulgify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', ()=>{
    return gulp.src('src/**/*.js')
    .pipe(babel({
        comments: false,
        presets: ["env"]
    }))
    .pipe(ulgify())
    .on('error', function(err){ console.log(err)})
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
})