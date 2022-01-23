var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];


gulp.task('sass', function () {
	gulp.src('source/scss/covermore_farmers.scss')
    .pipe(sourcemaps.init())
    .pipe($.sass.sync({ outputStyle: 'compressed', includePaths: sassPaths }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('source/css'));
});


gulp.task('watch', ['sass'], function() {
  gulp.watch(['source/css/**/*.scss'], ['sass']);
});
