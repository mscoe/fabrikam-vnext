define(['angular', 'app.schedules'], function () {
    angular.module("app.schedules").factory('airportsService', function ($q, $timeout, httpgetService) {
        var airportsService = {
            list: function () {
                var deferred = $q.defer();
                // $timeout(function () {
                httpgetService.get('schedules/services/airports.json', function success(data) {
                    deferred.resolve(data);
                });
                //}, 30);
                //console.log("in airport service");
                //var deferred = $q.defer();
                //$timeout(function () {
                //    var data = httpgetService.get('schedules/services/airports.json', function success(data) {
                //        deferred.resolve(data);
                //    }, function error(data) {
                //        deferred.reject('error');
                //    });

                //}, 30);

                return deferred.promise;
            }
        }

        return airportsService;
    });
});