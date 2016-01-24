var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var babel = require('gulp-babel');
var exec = require('child_process').exec;
var mocha = require('gulp-mocha');

var paths = {
    sass: ['./src/**/*.scss'],
    js: [
        './src/**/*.js',
        '!./src/**/*.spec.js'
    ],
    tests: ['./src/**/*.spec.js'],
    static: [
        './src/**/*.html',
        './src/**/*.css',
        './src/**/*.{png,jpg}'
    ],
    thirdPartyStatic: [
        './lib/**/*.js',
        './lib/**/*.css',
        './lib/**/*.ttf',
        './lib/**/*.woff'
    ]
};

gulp.task('default', ['build']);

var Server = require('karma').Server;
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function() { done(); }).start();
});

gulp.task('tdd', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, function() { done(); }).start();
});

gulp.task('build', ['sass', 'js', 'static', 'thirdPartyStatic']);

gulp.task('build:watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.static, ['static']);
    gulp.watch(paths.thirdPartyStatic, ['thirdPartyStatic']);
});

gulp.task('clean', function() {
    console.log('for now, do rm -rf www');
});

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
    var concat = require('gulp-concat');
    var sourcemaps = require('gulp-sourcemaps');
    var uglify = require('gulp-uglify');
    var ngAnnotate = require('gulp-ng-annotate');

    gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/'))
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

gulp.task('cukes', function(done) {
    exec('cucumber', {cwd: './cukes/' }, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done();
    });
});

gulp.task('cukes:focus', function(done) {
    exec('cucumber --tags @focus', {cwd: './cukes/' }, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done();
    });
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
