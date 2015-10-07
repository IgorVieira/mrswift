/*'use strict'

let gulp = require('gulp')
let stylus = require('gulp-stylus')

gulp.task('stylus', () => {
  gulp.src('public/css/main.styl')
    .pipe(stylus({linenos: true}))
    .pipe(gulp.dest('./css/build'));
});

gulp.task('watch', ()=> {
 gulp.watch(['public/css/*.styl'],['stylus']);
})


gulp.task('default',['watch']);
*/