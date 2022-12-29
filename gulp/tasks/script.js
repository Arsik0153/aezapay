const gulp = require('gulp')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')

module.exports = function script() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/js'))
}