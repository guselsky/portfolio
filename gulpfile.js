var gulp = require('gulp'),
runSequence = require('run-sequence');

require('./gulp/tasks/watch');
require('./gulp/tasks/sass');
require('./gulp/tasks/modernizr');
require('./gulp/tasks/scripts');
require('./gulp/tasks/build');

// Default Task
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});