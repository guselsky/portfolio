

var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
reload = browserSync.reload,
autoprefixer = require('gulp-autoprefixer'),
sass = require('gulp-sass'),
uglify = require('gulp-uglify'),
usemin = require('gulp-usemin'),
cache = require('gulp-cache'),
runSequence = require('run-sequence'),
webpack = require('webpack'),
modernizr = require('gulp-modernizr');


// Default Task
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});

// Watch Task
gulp.task('watch', ['browserSync', 'sass'], function() {

    gulp.watch('app/assets/styles/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/assets/scripts/**/*.js', function() {
      gulp.start('scriptsRefresh');  
    }); 
});


gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
})

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
    return gulp.src('app/assets/styles/**/*.scss')
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
        .pipe(gulp.dest('app/temp/styles'))
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

// Scripts Task

gulp.task('scripts', ['modernizr'], function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if(err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});

gulp.task('modernizr', function() {
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
  .pipe(modernizr({
    'options': [
      'setClasses'
    ]
  }))
  .pipe(gulp.dest('./app/temp/scripts'));
});

require('./gulp/tasks/build');

// // Gulp Build Task
// gulp.task('build', function (callback) {
//   runSequence('clean:dist', 
//     ['sass', 'useref', 'images', 'fonts'],
//     callback
//   )
// });

// gulp.task('useref', function(){
//   return gulp.src('app/*.html')
//     .pipe(useref())
//     // Minifies only if it's a JavaScript file
//     .pipe(gulpIf('*.js', uglify()))
//     .pipe(gulpIf('app/assets/temp/styles/*.css', cssnano()))
//     .pipe(gulp.dest('dist'))
// });

// gulp.task('images', function(){
//   return gulp.src('app/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
//   // Caching images that ran through imagemin
//   .pipe(cache(imagemin({
//       interlaced: true
//     })))
//   .pipe(gulp.dest('dist/assets/images'))
// });

// gulp.task('fonts', function() {
//   return gulp.src('app/assets/fonts/**/*')
//   .pipe(gulp.dest('dist/assets/fonts'))
// });

// gulp.task('clean:dist', function() {
//   return del.sync('dist');
// });