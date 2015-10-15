define(['angular', 'app.schedules', '../services/httpgetService'], function () {
    angular.module("app.schedules").factory('flightsService', function ($q, $timeout, httpgetService) {
        var flightsService = {
            fetch: function () {
                //var data = httpgetService.get('schedules/services/flights.json', function success(data) {
                //    return data;
                //    console.log(data);
                //}, function error(data) {
                //    return data;
                //});
                var deferred = $q.defer();
                //$timeout(function () {
                var data = httpgetService.get('schedules/services/flights.json', function success(data) {
                    deferred.resolve(data);
                });
                //}, 30);

                return deferred.promise;
            }
        }

        return flightsService;
    });
});