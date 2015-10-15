define(['angular', 'app.schedules'], function () {
    angular.module("app.schedules").factory('httpgetService', function ($http) {
        var httpgetService = {
            get: function (url,success) {
                
                $http.get(url).success(function (data) {
                    success(data);
                });
                //$http.get(url).then(function (response) {
                //    success(response.data)
                //}, function (response) {
                //    error(response.data)
                //});
            }

        }
        return httpgetService;

    });
});