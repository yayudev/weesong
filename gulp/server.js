var gulp 	= require('gulp'),
	connect = require('gulp-connect')

// Start a node server with livereload. 
gulp.task('server', function () {
	connect.server({
		root: './app/',
		port: 9000,
		livereload: true
	})
})