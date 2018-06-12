var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var rename = require("gulp-rename");

var pkg = require("./package.json");

var input = './scss/*.scss';
var output = './dist';

var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

var autoprefixerOptions = {
	browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('default', ['serve']);
gulp.task('serve', ['sass'], function () {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("scss/**/*.scss", ['sass']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
	return gulp
		.src(input)
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(gulp.dest(output))
		.pipe(browserSync.stream());
});

gulp.task('prod', function () {
	return gulp
		.src(input)
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(rename("/prod/nebula-ui-" + pkg.version + ".min.css"))
		.pipe(gulp.dest(output));
});