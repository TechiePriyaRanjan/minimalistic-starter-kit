var gulp = require('gulp');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');


// styles task
gulp.task('styles', function(){
    return gulp.src(['./assests/styles/scss/app.scss'])
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 4 versions']
    }))
    .pipe(nano())
    .pipe(gulp.dest('./assests/styles/css/'));   
});

gulp.task('scripts', function(){
    return gulp.src('./assests/scripts/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./assests/scripts/js/minified'));
});

gulp.task('default', ['styles', 'scripts'] );


gulp.task('watch-build', function(){
    gulp.watch('assests/styles/scss/*.scss', ['styles']);
    gulp.watch('assests/scripts/js/*.js', ['scripts']);
});
gulp.task('watch', ['default', 'watch-build']);