define(
    ['angular', 'ui.router', 'ocLazyLoad', 'app.config'],
    function (angular) {
        var module = angular.module('app.schedules',
            ['ui.router','oc.lazyLoad', 'app.config']
        )
        .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
            $ocLazyLoadProvider.config({
                loadedModules: ['app', 'schedules'],
                asyncLoader: require
            });

            $stateProvider.state('app.schedules', {
                url: 'schedules',
                views: {
                    'content@': {
                        controller: 'flightsController',
                        templateUrl: 'schedules/partials/flights.html'
                    }
                },
                resolve: {
                    load: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([{
                                files: ['schedules/controllers/flightsController.js', 'lib/jasny-bootstrap/dist/js/jasny-bootstrap.js']
                            }, {
                                files:['lib/angular-ui-grid/ui-grid.css']
                            }, {
                                name: 'ui.grid',
                                files: ['lib/angular-ui-grid/ui-grid.js']
                            }
                        ]);
                    }]
                }
            }
            ).state('app.schedulesfruits', {
                url: 'module1/fruits',
                views: {
                    'content@': {
                        controller: 'fruitsController',
                        templateUrl: 'schedules/partials/fruits.html'
                    }
                },
                resolve: {
                    load: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['schedules/controllers/fruitsController.js']
                        });
                    }]
                }
            }
            ).state('app.viewSchedules', {
                url: 'module1/schedules',
                views: {
                    'content@': {
                        templateUrl: 'schedules/partials/schedules.html'
                    }
                }
            }
            ).state('app.createNewFlight', {
                url: 'module1/createNewFlight',
                views: {
                    'content@': {
                        templateUrl: 'schedules/partials/createNewFlight.html'
                    }
                }
            }
            );
        });
        return module;
    }
);