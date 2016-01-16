var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var babel = require('gulp-babel');

var paths = {
  sass: ['./src/scss/**/*.scss'],
  js: ['./src/js/**/*.js'],
  thirdPartyJs: ['./src/lib/**/*.js'],
  static: ['./src/**/*.html', './src/**/*.css', './src/**/*.{png,jpg}', './src/**/*.ttf', './src/**/*.woff'],
  thirdPartyStatic: ['./src/lib/**/*.js', './src/lib/**/*.css'],
};

gulp.task('default', ['build']);

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.thirdPartyJs, ['thirdPartyJs']);
  gulp.watch(paths.static, ['static']);
  gulp.watch(paths.thirdPartyStatic, ['thirdPartyStatic']);
});

gulp.task('clean', function() {
    console.log('for now, do rm -rf www');
});

gulp.task('build', ['sass', 'js', 'thirdPartyJs', 'static', 'thirdPartyStatic']);

gulp.task('sass', function(done) {
  gulp.src('./src/scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('js', function(done) {
    gulp.src(paths.js)
        .pipe(babel({
            presets: ['es2015']  
        }))
        .pipe(gulp.dest('./www/js/'))
        .on('end', done);
});

gulp.task('thirdPartyJs', function(done) {
    gulp.src(paths.thirdPartyJs)
        .pipe(gulp.dest('./www/lib/'))
        .on('end', done);
});

gulp.task('static', function(done) {
    gulp.src(paths.static)
        .pipe(gulp.dest('./www/'))
        .on('end', done);
});

gulp.task('thirdPartyStatic', function(done) {
    gulp.src(paths.thirdPartyStatic)
        .pipe(gulp.dest('./www/lib/'))
        .on('end', done);
});



gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});
