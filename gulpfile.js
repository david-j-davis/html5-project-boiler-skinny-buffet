/*
 *    $ npm install gulp gulp - sass gulp - imagemin gulp - cache browser - sync--save - dev
 */

var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  server = 'ENTER DOMAIN HERE (eg. thecrnt.dev)';

// Styles
gulp.task('styles', function () {
  return gulp.src('styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Scripts
gulp.task('scripts', function () {
  return gulp.src('scripts/**/*.js')
    .pipe(gulp.dest('dist/js'));
});

// Images
gulp.task('images', function () {
  return gulp.src('images/**/*')
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/img'));
});

// Server + Watching styles/scripts/images/html files
gulp.task('serve', ['styles', 'scripts', 'images'], function () {

  browserSync.init({
    proxy: server
  });

  gulp.watch('styles/**/*.scss', ['styles']);
  gulp.watch('scripts/**/*.js', ['scripts']);
  gulp.watch('images/**/*', ['images']);
  gulp.watch('dist/**/*').on('change', browserSync.reload);
});

gulp.task('default', ['serve'], function () {
  gulp.start('styles', 'scripts', 'images');
});
