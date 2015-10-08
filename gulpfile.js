'use strict'

let gulp = require('gulp')
let stylus = require('gulp-stylus')

gulp.task('stylus', () => {
  gulp.src('public/css/*.styl')
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest('public/css/module'));
});

gulp.task('watch', ()=> {
 gulp.watch(['public/css/*.styl'],['stylus']);
})


gulp.task('default',['watch']);
