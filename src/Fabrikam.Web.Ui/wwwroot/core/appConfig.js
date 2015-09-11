define(['angular'], function (angular) {
    var config= angular.module('app.Config', []);
    var initInjector = angular.injector(['ng']);
    var $http = initInjector.get('$http');
    $http.get('/core/constants.json').then(
             function (response) {
                 config.value('config', response.data);
             }
         );
    return config;
});