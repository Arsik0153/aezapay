const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const gulpStylelint = require('gulp-stylelint')
const cssbeautify = require('gulp-cssbeautify')
const rename = require("gulp-rename")

module.exports = function styles() {
  return gulp.src('src/styles/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssbeautify())
    .pipe(gulp.dest('build/css'))
}

