// Karma configuration
// Generated on Sat Jan 23 2016 13:48:53 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['mocha', 'chai'],
    plugins: [
        'karma-mocha',
        'karma-chai',
        'karma-phantomjs-launcher',
        'karma-ng-html2js-preprocessor'
    ],

    files: [
        './lib/ionic/js/ionic.bundle.min.js',
        './lib/angular-mocks/angular-mocks.js',
        './lib/angular-pouchdb/angular-pouchdb.min.js',
        './src/**/*.js',
        './src/**/*.html',
        './src/**/*.spec.js'
    ],

    exclude: [],

    preprocessors: {
      'src/**/*.html': ['ng-html2js'],
      'src/**/!(*.mock|*.spec).js': ['coverage']
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'src/',
      // create a single module that contains templates from all the files
      moduleName: 'templates'
    },

    reporters: ['progress'/*, 'coverage' */],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
});
};
