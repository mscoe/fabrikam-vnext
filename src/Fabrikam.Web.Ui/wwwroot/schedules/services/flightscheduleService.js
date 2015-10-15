define(['angular', 'app.schedules'], function () {
    angular.module("app.schedules").factory('flightscheduleService', function ($q, $timeout, httpgetService) {
        var flightscheduleService = {
            fetch: function () {

                var deferred = $q.defer();

                //$timeout(function () {
                    var data = httpgetService.get('schedules/services/flightschedule.json', function success(data) {
                        deferred.resolve(data);
                    //}, function error(data) {
                    //    deferred.reject('error');
                    });
                //}, 30);

                return deferred.promise;
            }
        }

        return flightscheduleService;

    });
});