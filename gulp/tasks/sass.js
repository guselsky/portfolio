var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
browserSync = require('browser-sync').create(),
reload = browserSync.reload,
sass = require('gulp-sass');

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
    return gulp.src('./app/assets/styles/**/*.scss')
        .pipe(sass({     
            includePaths: require('node-normalize-scss').includePaths
        }))
        // Prevents watch task from quitting on CSS error
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
         .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./app/temp/styles'))
        .pipe(browserSync.reload({
            stream: true
        }))
});



gulp.task('browserSync', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
})
