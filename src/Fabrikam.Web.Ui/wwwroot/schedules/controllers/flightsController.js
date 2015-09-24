define(['angular', 'app.schedules', '../services/flightsService', '../services/airportsService'], function () {
    angular.module("app.schedules")
        .controller('flightsController',
        ['$scope', 'flightsService', 'airportsService', '$filter',
            function ($scope, flightsService, airportsService, $filter) {
                $scope.airports = [];
                $scope.flights = [];
                $scope.data = [];
                $scope.filteredData = [];
                $scope.searchText = '';
                $scope.originInSearchQuery = '';
                $scope.destinationInSearchQuery = '';

                //$scope.fetchFlights();

                $scope.filterData = function () {
                    $scope.filteredData = $filter('filter')($scope.data, $scope.searchText, undefined);
                };

                airportsService.list().then(function (data) {
                    $scope.airports = data.List;
                    $scope.originInSearchQuery = data.List[0].Id;
                    $scope.destinationInSearchQuery = data.List[1].Id;
                });

                $scope.fetchFlights = function () {
                    flightsService.fetch().then(function (data) {
                        $scope.data = data.flights;
                        $scope.flights = data.flights;
                        $scope.filteredData = $scope.data;
                    })
                }
            }
        ]
        ).directive('footableBinding', function () {
            return function (scope, element) {
                var footableTable = element.parents('table');


                if (!scope.$last) {
                    return false;
                }

                scope.$evalAsync(function () {

                    if (!footableTable.hasClass('footable-loaded')) {
                        footableTable.footable();
                    }

                    footableTable.trigger('footable_initialized');
                    footableTable.trigger('footable_resize');
                    footableTable.data('footable').redraw();

                });
            };
        });
})