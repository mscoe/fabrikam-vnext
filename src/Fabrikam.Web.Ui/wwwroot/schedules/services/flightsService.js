define(['angular', 'app.schedules'], function () {
    angular.module("app.schedules").factory('flightsService', function($q, $timeout, $http) {
        var flightsService = {
            fetch: function() {

                var deferred = $q.defer();

                $timeout(function() {
                    $http.get('schedules/services/flights.json').success(function(data) {
                        deferred.resolve(data);
                    });
                }, 30);

                return deferred.promise;
            }
        }

        return flightsService;
    });
});