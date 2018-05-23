const gulp = require('gulp');
const lessChanged = require('gulp-less-changed');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('remove', () => {
  return gulp.src('dist')
    .pipe(clean({
      force: true
    }));
});

gulp.task('css', () => {
  return gulp.src('./src/pomelo-toast.less')
    .pipe(lessChanged())
    .pipe(less())
    // .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', () => {
  return gulp.src('./src/pomelo-toast.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['remove', 'css', 'js']);
