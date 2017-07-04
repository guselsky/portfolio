var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
reload = browserSync.reload;

// Watch Task
gulp.task('watch', ['browserSync', 'sass'], function() {

    gulp.watch('./app/assets/styles/**/*.scss', ['sass']);
    gulp.watch('./app/*.html', browserSync.reload); 
    gulp.watch('./app/assets/scripts/**/*.js', function() {
      gulp.start('scriptsRefresh');  
    }); 
});
