const gulp = require('gulp');
const lessChanged = require('gulp-less-changed');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const livereload = require('gulp-livereload');

gulp.task('css', () => {
  return gulp.src('./src/pomelo-toast.less')
    .pipe(lessChanged())
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});

gulp.task('js', () => {
  return gulp.src('./src/pomelo-toast.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('src/*', ['js', 'css']);
});

gulp.task('default', ['css', 'js']);
