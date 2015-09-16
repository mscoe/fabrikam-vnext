/*global define*/
'use strict';
// Hook up all modules to the 'app' module
define([
    'angular',
    'ui.router',
    'app.config',
    'app.moduleone'],
    function (angular) {
        var app = angular.module('app', [
            'app.config', 'ui.router',
            'app.moduleone'
        ])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(false);
            $urlRouterProvider.otherwise('/');

            $stateProvider.state('app', {
                url: '/',
                views: {
                    //'topMenu@': { templateUrl: 'core/header.html' },
                    //'sideMenu@': { templateUrl: 'core/sidebar.html'},
                    'content@': { templateUrl: 'core/blank.html'}
                }
            })
            .state('app.dashboardv1', {
                url: 'default',
                views: { 'content@': { templateUrl: 'core/dashboardv1.html' } }
            })
            .state('app.dashboardv2', {
                url: 'default',
                views: { 'content@': { templateUrl: 'core/dashboardv1.html' } }
            })
            .state('app.calendar', {
                url: 'calendar',
                views: { 'content@': { templateUrl: 'core/calendar.html' } }
            });
        })
        //.run(function ($rootScope) {

        //    $rootScope
        //        .$on('$stateChangeStart',
        //            function (event, toState, toParams, fromState, fromParams) {
        //                console.log("State Change: transition begins!");
        //            });

        //    $rootScope
        //        .$on('$stateChangeSuccess',
        //            function (event, toState, toParams, fromState, fromParams) {
        //                console.log("State Change: State change success!");
        //            });

        //    $rootScope
        //        .$on('$stateChangeError',
        //            function (event, toState, toParams, fromState, fromParams) {
        //                console.log("State Change: Error!");
        //            });

        //    $rootScope
        //        .$on('$stateNotFound',
        //            function (event, toState, toParams, fromState, fromParams) {
        //                console.log("State Change: State not found!");
        //            });

        //    $rootScope
        //        .$on('$viewContentLoading',
        //            function (event, viewConfig) {
        //                console.log("View Load: the view is loaded, and DOM rendered!");
        //            });

        //    $rootScope
        //        .$on('$viewContentLoaded',
        //            function (event, viewConfig) {
        //                console.log("View Load: the view is loaded, and DOM rendered!");
        //            });

        //})
        ;
    var x = 0;
    app.controller('mainController',['$scope','config', function ($scope,config) {
        $scope.message = 'It is working finally. CONSTANT1='+config.CONSTANT1;
    }]);

    return app;
});