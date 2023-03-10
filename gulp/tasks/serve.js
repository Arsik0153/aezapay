const gulp = require('gulp')

const styles = require('./styles')
const pug2html = require('./pug2html')
const images = require('./images')
const fonts = require('./fonts')
const languages = require('./languages')
const script = require('./script')
const copyDependencies = require('./copyDependencies')

const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/fonts/*.woff', gulp.series(fonts, readyReload))
    gulp.watch('src/lang/*.json', gulp.series(languages, readyReload))
    gulp.watch('src/img/**/*.{gif,png,jpg,jpeg,svg,ico,webp,mp4}', gulp.series(images, readyReload))
    gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/js/**/*.js', gulp.series(script, readyReload))
    gulp.watch('src/pages/**/*.pug', gulp.series(pug2html, readyReload))

    gulp.watch('package.json', gulp.series(copyDependencies, readyReload))

    return cb()
}
