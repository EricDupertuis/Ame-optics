var gulp = require('gulp');
var gutil = require('gulp-util');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var copy = require('gulp-copy');

gulp.task('default', function() {
    // place code for your default task here
});

//concat js

gulp.task('js', function() {
    return gulp.src('app/assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .on('error', gutil.log)
});

//optimize images

gulp.task('imagemin', function () {
    return gulp.src('app/assets/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/assets/img'));
});

//style concat and autoprefix
gulp.task('sass', function () {
    return gulp.src('app/assets/sass/main.scss')
        .pipe(sass())
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minify())
        .pipe(gulp.dest('dist/assets/css'));
});

//html concat
gulp.task('html', function() {
    var opts = {
        conditionals: true,
        spare:true
    };
    return gulp.src('app/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('dist'));
});

//copy vendors
gulp.task('vendors', function () {
    return gulp.src('app/vendors/*')
        .pipe(gulp.dest('dist/vendors'));
});

//copy fonts
gulp.task('fonts', function () {
    return gulp.src('app/assets/fonts/*')
        .pipe(gulp.dest('dist/assets/fonts'));
});

//copy other files
gulp.task('conf',function () {
    return gulp.src('app/*.*')
        .pipe(gulp.dest('dist'));
});

//copy .htaccess
gulp.task('htaccess',function () {
    return gulp.src('app/.htaccess')
        .pipe(gulp.dest('dist'));
});

// default gulp task
gulp.task('default', ['imagemin', 'sass', 'html', 'vendors', 'fonts', 'conf', 'htaccess'], function() {
});