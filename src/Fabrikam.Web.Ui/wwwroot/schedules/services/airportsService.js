define(['angular', 'app.schedules'], function () {
    angular.module("app.schedules").factory('airportsService', function ($q, $timeout, $http) {
        var airportsService = {
            list: function () {

                var deferred = $q.defer();

                $timeout(function () {
                    $http.get('schedules/services/airports.json').success(function (data) {
                        deferred.resolve(data);
                    });
                }, 30);

                return deferred.promise;
            }
        }

        return airportsService;
    });
});