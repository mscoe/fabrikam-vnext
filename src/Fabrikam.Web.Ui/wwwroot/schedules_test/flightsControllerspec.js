'use strict';
define(['angular', 'app.schedules','app.schedules.mock', 'angularMocks', 'schedules/controllers/flightsController', 'schedules/services/httpgetService', 'schedules/services/flightsService', 'schedules/services/airportsService', 'schedules/services/flightscheduleService'], function (angular) {
    describe('flightController', function () {

        beforeEach(module('app.schedules'));
        beforeEach(module('app.schedules.mock'));
        var rootscope ;

        
        var $controller, $q;
        beforeEach(inject(function (_$controller_, _$q_) {
            $controller = _$controller_;
            $q = _$q_;
        }));
        
        
        describe('$scope.flights using mock service', function () {

            var httpgetService, airportsService, flightscheduleService, flightsService, scope, controller;

            beforeEach(inject(function (_FlightMockService_, _$rootScope_) {
                rootscope = _$rootScope_;
                flightsService = _FlightMockService_;
            }));

            beforeEach(function () {
                scope = {};
                var $injector = angular.injector(['app.schedules']);
                httpgetService = $injector.get('httpgetService');
                airportsService = $injector.get('airportsService');
                flightscheduleService = $injector.get('flightscheduleService');
                controller = $controller('flightsController', { $scope: scope, flightsService: flightsService, airportsService: airportsService, flightscheduleService: flightscheduleService, httpgetService: httpgetService });
            });

            it('checks the fetch method', function () {
                
                //var controller = $controller('testController', { $scope: $scope });
                //expect($scope.things.length).toEqual(2);

                scope.fetchFlights();
                rootscope.$digest();
                //console.log(scope.flights);
                expect(scope.flights).not.toBeNull();
            });

            
        });

        describe('using spy on', function () {
            var flightsService;
            beforeEach(inject(function (_FlightMockService_) {
                flightsService = _FlightMockService_;
                spyOn(flightsService, 'fetch').and.callThrough();
            }));

            it('should call fetch method of flight service', function () {
                flightsService.fetch();
                expect(flightsService.fetch).toHaveBeenCalled();
            });

        });
    });

});

