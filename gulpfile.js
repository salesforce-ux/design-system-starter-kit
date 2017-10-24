// Copyright (c) 2017-present, Salesforce.com, Inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

'use strict'

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

const path = require('path')
const fs = require('fs')
const gulp = require('gulp')
const del = require('del')
const runSequence = require('run-sequence')
const browserSync = require('browser-sync')
const JSON5 = require('json5')
const gulpLoadPlugins = require('gulp-load-plugins')

const $ = gulpLoadPlugins()

gulp.task('assets', () =>
  gulp
    .src([
      'node_modules/@salesforce-ux/design-system/assets/**/*.{woff,woff2,txt,jpg,png,gif,svg}',
      'src/assets/**/*.{woff,woff2,txt,jpg,png,gif,svg}'
    ])
    .pipe(gulp.dest('dist/assets'))
)

gulp.task('favicon', () =>
  gulp
    .src([
      'src/favicon*.*'
    ], { base: 'src' })
    .pipe(gulp.dest('dist'))
)

const sharedData = JSON5.parse(fs.readFileSync('./src/views/data/shared.json', 'utf8'))

// Get data from the corresponding filename
// e.g. inject data/foo.json into foo.html
const getData = (file) => {
  const dataPath = path.resolve('./src/views/data/' + path.basename(file.path, '.html') + '.json')
  let data = { shared: sharedData }

  try {
    data = Object.assign(data, JSON5.parse(fs.readFileSync(dataPath, 'utf8')))
  } catch (e) {
    // Don't fail if the JSON is badly formed or the file doesn't exist
  } finally {
    /* eslint-disable no-unsafe-finally */
    return data
  }
}

gulp.task('views', () =>
  gulp
    .src([
      'src/views/**/*.html',
      '!src/views/**/_*.html'
    ], { base: 'src/views' })
    .pipe($.data(getData))
    .pipe($.nunjucks.compile())
    .pipe(gulp.dest('dist'))
)

gulp.task('scripts', () =>
  gulp
    .src([
      'src/scripts/**/*.js'
    ], { base: 'src' })
    .pipe(gulp.dest('dist/'))
)

gulp.task('styles', () =>
  gulp
    .src('src/styles/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'], remove: false }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream({ match: '**/*.css' }))
)

// Static Server (development)
gulp.task('default', ['build'], () => {
  browserSync({
    // The starter kit opens itself up in a new browser tab every time the app starts.
    // Uncomment the next line to prevent this behavior:
    // open: false,
    notify: false,
    server: 'dist'
  })

  gulp.watch('src/styles/**/*.scss', ['styles'])
  gulp.watch([
    'src/views/**/*.html',
    'src/views/data/*.json'
  ], ['views'])
  gulp.watch('src/assets/**/*.{woff,woff2,txt,jpg,png,gif,svg}', ['assets'])
  gulp.watch('src/scripts/**/*.js', ['scripts'])
  gulp.watch([
    'dist/**/*.html',
    'dist/scripts/**/*.js',

    // Note: we're not watching icons and fonts changes,
    // as they're slowing down the task
    'dist/assets/*.{woff,woff2,txt,jpg,png,gif,svg}',
    'dist/assets/styles/*.css'
  ]).on('change', browserSync.reload)
})

gulp.task('clean', () => del(['dist'], { dot: true }))

gulp.task('build', callback => {
  runSequence(
    'clean', [ 'assets', 'views', 'styles', 'scripts', 'favicon' ],
  callback)
})
