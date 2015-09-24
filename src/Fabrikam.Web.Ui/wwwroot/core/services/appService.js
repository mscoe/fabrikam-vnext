define(['angular', 'app'], function () {
    angular.module("app").factory('appService', function ($q, $timeout, $http) {
        var appService = {
            getData: function () {
                var deferred = $q.defer();
                var items;
                $timeout(function () {
                    $http.get('core/services/appData.json').success(function (data) {                   
                        deferred.resolve(data);
                    });
                }, 30);

                return deferred.promise;
            }
            
            
        }

        return appService;
    });
});
