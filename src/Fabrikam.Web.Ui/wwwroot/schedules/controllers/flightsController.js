define(['angular', 'app.schedules', '../services/flightsService', '../services/airportsService', '../services/flightscheduleService', '../services/httpgetService'], function () {
    angular.module("app.schedules")
        .controller('flightsController',
        ['$scope', 'flightsService', 'airportsService', 'flightscheduleService', 'httpgetService',
            function ($scope, flightsService, airportsService, flightscheduleService,httpgetService) {
                $scope.airports = [];
                $scope.flights = [];
                $scope.flightsFiltered = [];
                $scope.searchText = '';
                $scope.originInSearchQuery = '';
                $scope.destinationInSearchQuery = '';

                $scope.gridOptions={
                    enableRowSelection: true,
                    multiSelect: false,
                    enableRowHeaderSelection: true
                    
                };

                $scope.gridOptions.data = 'flights';

                $scope.gridOptions.onRegisterApi = function (gridApi) {
                    $scope.gridApi = gridApi;
                    gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                        //$scope.searchText = row.entity.Number;
                        $scope.filterData();
                    });
                };

                $scope.filterData = function () {
                    
                    //$scope.flightsFiltered = $filter('filter')($scope.flights, $scope.searchText, undefined);
                    flightscheduleService.fetch().then(function (data) {
                        $scope.flightsFiltered = data.flights;
                    })
                };
                airportsService.list().then(function (data) {
                    $scope.airports = data.List;
                    $scope.originInSearchQuery = data.List[0].Id;
                    $scope.destinationInSearchQuery = data.List[1].Id;
                });
                //$scope.airports = airportsService.list().data;
                $scope.fetchFlights = function () {
                    flightsService.fetch().then(function (data) {
                        $scope.flights = data.flights;
                        //$scope.flightsFiltered = $scope.data.data;
                    })
                    
                }
            }
        ]
     );
})