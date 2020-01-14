const gulp = require('gulp')

 gulp.task('default', ()=>{
    gulp.emit('copiar')
})

gulp.task('copiar', ()=>{
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']).pipe(gulp.dest('pastaB'))
})
