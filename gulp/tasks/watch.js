var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// Watch Task
gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});

    gulp.watch('./app/*.html', function() {
    	browserSync.reload();
    }); 

    gulp.watch('./app/assets/styles/**/*.scss', function() {
    	gulp.start('sassRefresh');
    });
    
    gulp.watch('./app/assets/scripts/**/*.js', function() {
      gulp.start('scriptsRefresh');  
    }); 
});

gulp.task('sassRefresh', ['sass'], function(){
	browserSync.reload();
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});
