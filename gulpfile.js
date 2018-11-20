//---------------------------------------------------------------------------------------------------
//Plugins
//---------------------------------------------------------------------------------------------------

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  cleancss = require('gulp-clean-css'),
  //  jshint = require('gulp-jshint'),
  //  uglify = require('gulp-uglify'),
  watch = require('gulp-watch');
//  browserSync = require('browser-sync').create();-

//---------------------------------------------------------------------------------------------------
//sourcefiles
//---------------------------------------------------------------------------------------------------

var src = {
  sass: "app/scss/createeditcourse.scss",
  js: "app/js/*.js"
};

var dest = {
  css: "dist/css",
  min_css: "dist/css/min_css",
  min_js: "dist/js"
};

//---------------------------------------------------------------------------------------------------
//Error handler
//---------------------------------------------------------------------------------------------------

var onError = function(err) {
  console.log(err);
  this.emit('end');
};

//---------------------------------------------------------------------------------------------------
//tasks-sass-to-css
//---------------------------------------------------------------------------------------------------

gulp.task('sass', function() {

  return gulp.src(src.sass)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest.css))
    .pipe(cleancss())
    .pipe(gulp.dest(dest.min_css))

});

//---------------------------------------------------------------------------------------------------
//tasks-jshint
//---------------------------------------------------------------------------------------------------
/*
gulp.task('js', function(){

  return gulp.src(src.js)
    .pipe(plumber({
      errorHandle: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest(dest.min_js))

});*/

//---------------------------------------------------------------------------------------------------
//watch-task
//---------------------------------------------------------------------------------------------------

gulp.task('watch', function() {

  gulp.watch(src.sass, ['sass']);
  //  gulp.watch(src.js, ['js']);

});

//---------------------------------------------------------------------------------------------------
//default-task
//---------------------------------------------------------------------------------------------------

gulp.task('default', ['watch', 'sass']);

//---------------------------------------------------------------------------------------------------
