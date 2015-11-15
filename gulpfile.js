var gulp  = require('gulp'),
    gutil = require('gulp-util'),
	concat = require("gulp-concat"),
	uglify = require('gulp-uglify'),
	minify = require('gulp-ngmin'),
	ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function() {
  return gulp.src('ngletteravatar.js')
    .pipe(ngAnnotate())
	.pipe(concat("ngletteravatar.min.js"))
    .pipe(uglify({mangle: true}))
	.pipe(gulp.dest('dist'));
});