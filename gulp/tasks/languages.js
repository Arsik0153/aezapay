const gulp = require("gulp");

module.exports = function languages() {
  return gulp.src("src/lang/*")
    .pipe(gulp.dest('build/lang'))
}