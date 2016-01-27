var gulp = require('gulp');
var concat = require('gulp-concat');
var browsersync = require('browser-sync');
var del = require('del');
var myth = require('gulp-myth');
var cssnano = require('gulp-cssnano');

gulp.task('styles', function() {
	return gulp.src(['app/css/normalize.css','app/css/main.css'])
		.pipe(concat('all.css'))
		.pipe(myth())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/'));
});

gulp.task('browsersync', function() {
	return browsersync({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('clean', function() {
	return del(['dist/*']);
});

gulp.task('watch', function() {
	gulp.watch('./index.html', [browsersync.reload]);
});

gulp.task('default', ['clean', 'styles', 'browsersync', 'watch']);