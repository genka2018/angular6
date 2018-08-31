
var gulp = require('gulp'),
    sass = require('gulp-sass');

var paths = {
  sass: {
    src: './src/assets/sass/**/*.{scss,sass}',
    dest: './src/assets/css',
    opts: {

    }
  }
};

gulp.task('sass', function () {
  return gulp.src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
});

gulp.task('message', function(){
  console.log('It works!!');
});

gulp.task('watch:styles', function () {
  gulp.watch(paths.sass.src, gulp.series('sass'));
});

gulp.task('watch', gulp.series('sass',
  gulp.parallel('watch:styles')
));


gulp.task('default', gulp.series('sass',
  gulp.parallel('message', 'watch')
));
