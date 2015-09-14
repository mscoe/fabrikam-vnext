﻿define(
    //'app.moduleone',
    ['angular', 'ui.router', 'ocLazyLoad', 'app.config'],
    function (angular) {
        var module = angular.module('app.moduleone',
            ['ui.router', 'oc.lazyLoad', 'app.config']
        )
        .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider,$locationProvider) {
            $ocLazyLoadProvider.config({
                loadedModules: ['app','moduleone'],
                asyncLoader: require
            });

            $stateProvider.state('app.moduleone', {
                    url: 'module1',
                    views: {
                        'content@': {
                            templateUrl: 'moduleone/partials/default.html'
                        }
                    }
                }
            ).state('app.moduleonefruits', {
                    url: 'module1/fruits',
                    views: {
                        'content@': {
                            controller: 'fruitsController',
                            templateUrl: 'moduleone/partials/fruits.html'
                        }
                    },
                    resolve: {
                        load: ['$ocLazyLoad', function($ocLazyLoad) {
                            // you can lazy load files for an existing module
                            return $ocLazyLoad.load({
                                files: ['moduleone/controllers/fruitsController.js']
                            });
                        }]
                    }
                }
            );
        });

        //module.controller('fruitsController', ['$scope', function ($scope) {
        //    $scope.fruits = [
        //        { name: 'Mango' },
        //        { name: 'Apple' },
        //        { name: 'Orange' }
        //    ];
        //}]);

        return module;
    }
);