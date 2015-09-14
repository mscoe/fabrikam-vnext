define(['angular'], function (angular) {
    var config= angular.module('app.config', []);
    var initInjector = angular.injector(['ng']);
    var $http = initInjector.get('$http');
    $http.get('/core/constants.json').then(
             function (response) {
                 config.value('config', response.data);
             }
         );
    return config;
});