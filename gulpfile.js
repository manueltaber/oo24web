var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_uglify = require('gulp-uglify');

gulp.task('bundle-css', function(){
    return gulp.src([
        './css/bootstrap.min.css', 
        './css/ionicons.min.css', 
        './css/slick.css',
        './css/slick-theme.css',
        './css/jquery.fancybox.css',
        './css/animate.min.css',
        './css/style.css'
        ])
        //.pipe(gp_concat('concat.js'))
        //.pipe(gulp.dest('dist'))
        //.pipe(gp_rename('uglify.js'))
        //.pipe(gp_uglify())
        //.pipe(gulp.dest('dist'));
        .pipe(gp_concat('bundle.css'))
        //.pipe(gp_uglify())
        .pipe(gulp.dest('www'));
});

gulp.task('bundle-js', function(){
    return gulp.src([
        './js/jquery-1.11.3.min.js', 
        './js/jquery-migrate-1.2.1.min.js', 
        './js/bootstrap.min.js',
        './js/jquery.easing.min.js',
        './js/smoothscroll.js',
        './js/response.min.js',
        './js/jquery.placeholder.min.js',
        './js/jquery.fitvids.js',
        './js/waypoints.min.js',
        './js/slick.min.js',
        './js/jquery.mousewheel-3.0.6.pack.js',
        './js/jquery.fancybox.pack.js',
        './js/jquery.fancybox-media.js',
        './js/parallax.min.js',
        './js/jquery.counterup.min.js',
        './js/jquery.stickem.js',
        './js/script.js'
        ])
        //.pipe(gp_concat('concat.js'))
        //.pipe(gulp.dest('dist'))
        //.pipe(gp_rename('uglify.js'))
        //.pipe(gp_uglify())
        //.pipe(gulp.dest('dist'));
        .pipe(gp_concat('bundle.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('www'));
});

gulp.task('default', ['bundle-css', 'bundle-js'], function(){});