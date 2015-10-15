/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var karma = require('karma').Server;

gulp.task('default', function () {
    // place code for your default task here
});
gulp.task('test', function (done) {
    
    //karma.start({
    //    configFile: __dirname + '/karma.conf.js',
    //    singleRun: true
    //}, done);

    new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});