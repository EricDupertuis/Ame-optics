var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var filesize = require('gulp-filesize');


gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('js', function() {
    return gulp.src('app/assets/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js/main.js'))
        .on('error', gutil.log)
});