const gulp = require("gulp");

module.exports = function images() {
  return gulp.src("src/img/**/*.{jpg,jpeg,png,gif,ico,svg,mp4}")
    .pipe(gulp.dest('build/img'))
}