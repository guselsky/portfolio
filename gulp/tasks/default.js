var gulp = require('gulp'),
runSequence = require('run-sequence');

// Default Task
gulp.task('default', function (callback) {
  runSequence(['sass', 'watch'],
    callback
  )
});