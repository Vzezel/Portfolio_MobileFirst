var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	gulp.watch(['sass/**/*.scss'], ['sass']);
});

gulp.task('sass', function() {
	return gulp.src('sass/style.scss')
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(gulp.dest('dist/'));
});

gulp.task('serve',  function(){
	browserSync.init({
		server: {
			baseDir: "./",
			https: true
		},
		port: 3000
	})
});

gulp.task('default',['watch', 'sass', 'serve'], function() {
});