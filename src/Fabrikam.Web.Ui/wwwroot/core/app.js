/*global define*/
'use strict';

require(['app.Config']);
// Hook up all modules to the 'app' module
define([
    'angular',
    'ui.router',
    'app.Config'
], function (angular) {
    var app = angular.module('app', ['app.Config']);
    var x = 0;
    app.controller('mainController',['$scope','config', function ($scope,config) {
        $scope.message = 'It is working finally. CONSTANT1='+config.CONSTANT1;
    }]);

    return app;
});