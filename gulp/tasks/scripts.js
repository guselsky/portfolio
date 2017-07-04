var gulp = require('gulp'),
webpack = require('webpack');

// Scripts Task

gulp.task('scripts', ['modernizr'], function(callback) {
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if(err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});