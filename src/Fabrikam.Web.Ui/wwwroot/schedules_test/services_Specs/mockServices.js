'use strict';
define(['angular', 'app.schedules', 'angularMocks'], function (angular) {
    angular.module('app.schedules.mock', []);

    angular.module('app.schedules.mock').factory('httpgetServiceMock', function ($http, $httpBackend) {
        var factory = {
            get: function (url, success) {
                //console.log('httpmockservice');
                $httpBackend.expectGET(url)
                .respond(readJSON('schedules/services/flights.json'));

                $http.get(url).success(function (data) {
                    success(data);
                });
                $httpBackend.flush();
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();

            }
        }
        return factory;
    });

    angular.module('app.schedules.mock').factory('FlightMockService', function ($q, httpgetServiceMock) {
        var factory = {
            fetch: function () {
                var deferred = $q.defer();
                //console.log('flightmockservice');
                var data = httpgetServiceMock.get('schedules/services/flights.json', function success(data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            }
        }
        return factory;
    });

    //angular.module('app.schedules.mock').provider({
    //    $httpgetServiceMockprovider: httpgetServiceMock
    //});

});

