const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')
const prettify = require('gulp-html-prettify');
const config = require('../config')


module.exports = function pug2html() {
  return gulp.src('src/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ silenceOnSuccess: 'true' }))
    .pipe(pug())
    .pipe(prettify())
    .pipe(gulp.dest('build'))
}