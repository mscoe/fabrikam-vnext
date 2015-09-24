﻿/*global define*/
'use strict';
// Hook up all modules to the 'app' module
define([
    'angular',
    'angular.translate',
    'ui.router',
    'ui.bootstrap',
    'angular.sanitize',
    'angular.idle',
    'ocLazyLoad',
    'app.config',
    'app.schedules'],
    function (angular) {
        var app = angular.module('app', [
            'pascalprecht.translate', 'oc.lazyLoad', 'app.config', 'ui.router', 'ui.bootstrap', 'ngSanitize', 'ngIdle',
            'app.schedules'
        ])
        .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
            $ocLazyLoadProvider.config({
                loadedModules: ['app'],
                asyncLoader: require
            });
            $locationProvider.html5Mode(false);
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('app', {
                url: '/',
                views: {
                    //'topMenu@': { templateUrl: 'core/header.html' },
                    //'sideMenu@': { templateUrl: 'core/sidebar.html'},
                    'content@': { controller: 'appController', templateUrl: 'core/dashboard.html' }
                },
                resolve: {
                    load: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([{
                            files: ['core/controllers/appController.js']
                        }, {
                            name: 'ui.checkbox',
                            files: ['lib/angular-bootstrap-checkbox/angular-bootstrap-checkbox.js']
                        }
                        ]);
                    }]
                }
            })
        })
        .run(function ($rootScope, $state) {
            $rootScope.$state = $state;

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

        });

        app.controller('translateCtrl', function translateCtrl($translate, $scope) {
            $scope.changeLanguage = function (langKey) {
                $translate.use(langKey);
            };
        });
        return app;
    });