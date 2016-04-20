
'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

import path from 'path';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('styles', () =>
  gulp
    .src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      precision: 10,
      includePaths: [
        'node_modules'
      ]
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe($.minifyCss({ advanced: false }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(browserSync.stream({ match: '**/*.css' }))
);

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], () => {

  browserSync.init({
    notify: false,
    server: [
      '.tmp',
      'app',
      'node_modules/@salesforce-ux/design-system/assets'
    ]
  });

  gulp.watch("app/styles/*.scss", ['styles']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('clean', () => del(['.tmp'], {dot: true}));

gulp.task('default', callback => {
  runSequence(
    'clean', 'styles', 'serve',
  callback);
});
