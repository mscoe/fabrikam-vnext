/*global define*/
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
    'app.schedules',
    'stacktrace'],
    function (angular) {
        var app = angular.module('app', [
            'pascalprecht.translate', 'oc.lazyLoad', 'app.config', 'ui.router', 'ui.bootstrap', 'ngSanitize', 'ngIdle',
            'app.schedules'
        ])
        .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider, $httpProvider) {
            $ocLazyLoadProvider.config({
                loadedModules: ['app'],
                asyncLoader: require
            });
            

            $locationProvider.html5Mode(false);
            $urlRouterProvider.otherwise('/');
            $httpProvider.interceptors.push(['$rootScope', '$q', '$injector', '$location', 'applicationLoggingService', function ($rootScope, $q, $injector, $location, applicationLoggingService) {
                
                return {
                    'request': function (config) {
                        return config || $q.when(config);
                    },
                    'requestError': function (request) {
                        return $q.reject(request);
                    },
                    'response': function (response) {
                        return response || $q.when(response);
                    },
                    'responseError': function (response) {
                        //if (response.status === null || response.status === 404) {
                            var error = {
                                method: response.config.method,
                                url: response.config.url,
                                message: response.data,
                                status: response.status
                            };
                            applicationLoggingService.error(JSON.stringify(error));
                        //}
                        return $q.reject(response);
                    }
                };

            }]);
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
        app.factory(
            "stacktraceService",
            function () {
                var stacktraceService = {
                // "printStackTrace" is a global object.
                    print: function () {
                        return printStackTrace;
                    }
                }
                return stacktraceService;
               
            }
        );
        app.provider(
            "$exceptionHandler",
            {
                $get: function (errorLogService) {
                    return (errorLogService);
                }
            }
        );
        app.factory(
            "errorLogService",
            ["$log", "$window", "stacktraceService",
            function ($log, $window, stacktraceService) {
                // I log the given error to the remote server.
                function log(exception, cause) {
                    // Pass off the error to the default error handler
                    // on the AngualrJS logger. This will output the
                    // error to the console (and let the application
                    // keep running normally for the user).
                    $log.error.apply($log, arguments);
                    // Now, we need to try and log the error the server.
                    // --
                    // NOTE: In production, I have some debouncing
                    // logic here to prevent the same client from
                    // logging the same error over and over again! All
                    // that would do is add noise to the log.
                    try {
                        var errorMessage = exception.toString();
                        var stackTrace = stacktraceService.print({ e: exception });
                       
                        console.log(angular.toJson({
                            errorUrl: $window.location.href,
                            errorMessage: errorMessage,
                            stackTrace: stackTrace,
                            cause: (cause || "")
                        }));
                        // Log the JavaScript error to the server.

                        //$.ajax({
                        //    type: "POST",
                        //    url: "core/Errors.json",
                        //    contentType: "application/json",
                        //    data: angular.toJson({
                        //        errorUrl: $window.location.href,
                        //        errorMessage: errorMessage,
                        //        stackTrace: stackTrace,
                        //        cause: (cause || "")
                        //    })
                        //});
                    } catch (loggingError) {
                        // For Developers - log the log-failure.
                        $log.warn("Error logging failed");
                        $log.log(loggingError);
                    }
                }
                // Return the logging function.
                return (log);
            }]
        );
        app.factory( "applicationLoggingService", ["$log","$window",function($log, $window){ 
            return({ 
                error: function(message){ 
                    // preserve default behaviour $log.error.apply($log, arguments); 
                    // send server side 
                    
                    console.log(angular.toJson({ url: $window.location.href, message: message, type: "error" }));
                    //$.ajax({
                    //    type: "POST",
                    //    url: "/logger",
                    //    contentType: "application/json",
                    //    data: angular.toJson({ url: $window.location.href, message: message, type: "error" })
                    //});
                }, debug: function (message) {
                    $log.log.apply($log, arguments);
                    //$.ajax({
                    //    type: "POST",
                    //    url: "/clientlogger",
                    //    contentType: "application/json",
                    //    data: angular.toJson({ url: $window.location.href, message: message, type: "debug" })
                    //});
                }
            });
        }]);

        app.controller('translateCtrl', function translateCtrl($translate, $scope) {
            $scope.changeLanguage = function (langKey) {
                $translate.use(langKey);
            };
        });
        return app;
    });