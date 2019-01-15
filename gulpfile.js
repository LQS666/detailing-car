// --------------------------------------------
// Dependencies
// --------------------------------------------
var autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    images = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();


// paths
var styleSrc = 'source/sass/**/*.sass',
    styleDest = 'build/assets/css/',
    htmlSrc = 'source/',
    htmlDest = 'build/';



// --------------------------------------------
// Stand Alone Tasks
// --------------------------------------------


// Compiles all SASS files
gulp.task('sass', function () {
    gulp.src('source/sass/**/*.sass')
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))

        .pipe(gulp.dest('build/assets/css'));
});

gulp.task('images', function () {
    gulp.src('source/img/*')
        .pipe(images())
        .pipe(gulp.dest('build/assets/img'));
});



// Watch for changes
gulp.task('watch', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        notify: false
    });

    gulp.watch(styleSrc, ['sass']);
    gulp.watch(['build/*.html', 'build/assets/css/*.css']).on('change', browserSync.reload);

});


// use default task to launch Browsersync and watch JS files
gulp.task('default', ['sass', 'watch'], function () {});