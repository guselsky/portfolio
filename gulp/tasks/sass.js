var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
sass = require('gulp-sass');

// Sass task, will run when any SCSS files change
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
});