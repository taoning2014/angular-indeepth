// File:  chapter3/karma.conf.js
// Karma configuration
module.exports = function(config) {
    config.set({
        // base path that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],
        
        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/js/app.js',
            'app/js/controllers/mainController.js',
            'tests/unit/mainControllerSpec.js'
        ],

        // list of files / patterns to exclude
        exclude: [],
        
        // web server port
        port: 8080,
        
        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR ||
        // LOG_WARN || LOG_INFO || LOG_DEBUG 
        logLevel: config.LOG_INFO,
        
        // enable / disable watching file and executing tests 
        // whenever any file changes
        autoWatch: true,
        
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac) // - PhantomJS
        // - IE (only Windows) 
        browsers: ['Chrome'],
        
        // Continuous Integration mode
        // if true, it captures browsers, runs tests, and exits 
        singleRun: false
    });
};
