/*
Copyright (c) 2016, salesforce.com, inc. All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

gulp.task('assets', () =>
  gulp
    .src([
      'node_modules/@salesforce-ux/design-system/assets/**/*.{woff,woff2,txt,jpg,png,gif,svg}',
      'src/assets/**/*.{woff,woff2,txt,jpg,png,gif,svg}'
    ])
    .pipe(gulp.dest('dist/assets'))
);

gulp.task('favicon', () =>
  gulp
    .src([
      'src/favicon*.*'
    ], { base: 'src' })
    .pipe(gulp.dest('dist'))
);

// Get data from the corresponding filename
// e.g. inject data/foo.json into foo.html
const getData = (file) => {
  const dataPath = path.resolve('./src/views/data/' + path.basename(file.path, '.html') + '.json')
  let data = {};

  try {
    data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  } catch(e) {
    // Don't fail if the JSON is badly formed or the file doesn't exist
  } finally {
    return data;
  }
};

gulp.task('views', () =>
  gulp
    .src([
      'src/views/**/*.html',
      '!src/views/**/_*.html'
    ], { base: 'src/views' })
    .pipe($.data(getData))
    .pipe($.nunjucks.compile())
    .pipe(gulp.dest('dist'))
);

gulp.task('scripts', () =>
  gulp
    .src([
      'src/scripts/**/*.js'
    ], { base: 'src' })
    .pipe(gulp.dest('dist/'))
);

gulp.task('styles', () =>
  gulp
    .src('src/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'], remove: false }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream({ match: '**/*.css' }))
);

// Static Server (development)
gulp.task('default', ['build'], () => {
  browserSync({
    notify: false,
    server: 'dist'
  });

  gulp.watch('src/styles/*.scss', ['styles']);
  gulp.watch([
    'src/views/**/*.html',
    'src/views/data/*.json'
  ], ['views']);
  gulp.watch('src/assets/**/*.{woff,woff2,txt,jpg,png,gif,svg}', ['assets']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch([
    'dist/**/*.html',
    'dist/scripts/**/*.js',

    // Note: we're not watching icons and fonts changes,
    // as they're slowing down the task
    'dist/assets/*.{woff,woff2,txt,jpg,png,gif,svg}',
    'dist/assets/styles/*.css'
  ]).on('change', browserSync.reload);
});

gulp.task('clean', () => del(['dist'], { dot: true }));

gulp.task('build', callback => {
  runSequence(
    'clean', [ 'assets', 'views', 'styles', 'scripts', 'favicon' ],
  callback);
});
