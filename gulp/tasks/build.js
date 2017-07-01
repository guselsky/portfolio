var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del= require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

// Spin up a preview server to display contents of dist folder
gulp.task('previewDist', function() {
	browserSync.init({
    	notify: false,
    	server: {
      	baseDir: 'dist'
   	}
  });
});

gulp.task('deleteDistFolder', function() {
  return del('./dist');
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src('./app/assets/images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', ['deleteDistFolder', 'sass', 'scripts'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
    	css: [function() {return rev()}, function() {return cssnano()}],
    	js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['deleteDistFolder','optimizeImages', 'usemin']);