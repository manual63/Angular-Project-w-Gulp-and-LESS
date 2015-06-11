var gulp = require( 'gulp' ),
less = require( 'gulp-less' ),
uglify = require( 'gulp-uglify' ),
concat = require( 'gulp-concat' );

gulp.task( 'default', [ 'less', 'move', 'uglify' ]);

gulp.task( 'less', function() {
	return gulp.src( './src/less/main.less' )
		.pipe( less() )
		.pipe( gulp.dest( './dist/css' ) );
});

var projectFiles = [
	'./src/js/AngularProject.js',
	'./src/js/controllers/*.js',
	'./src/js/services/*.js'
]

gulp.task( 'uglify', function() {
	return gulp.src( projectFiles )
	.pipe(concat( 'project.js' ))
    .pipe(uglify({
        mangle: false
    }))
    .pipe(gulp.dest('./dist/js'));
});

var directories = [
	'./src/js/libs/*.js',
	'./src/data/*.json',
	'./src/views/*.html',
	'./src/index.html'
]

gulp.task( 'move', function() {
	gulp.src( directories, { base: './src' })
		.pipe( gulp.dest( './dist/' ));
});