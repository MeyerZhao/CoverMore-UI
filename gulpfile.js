var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
	gulp.src('./source/css/*.scss')
    .pipe(sourcemaps.init())
		// .pipe(sass().on('error', sass.logError))
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./source/css'));
});



// Watch for changes for scss files and rebuild.
gulp.task('watch', ['sass'], function () {
  gulp.watch('./source/css/**/*.scss', ['sass']);
});
