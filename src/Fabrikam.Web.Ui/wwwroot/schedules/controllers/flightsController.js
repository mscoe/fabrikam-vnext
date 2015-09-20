define(['angular', 'app.schedules', '../services/flightsService'], function () {
    angular.module("app.schedules")
        .controller('flightsController',
        ['$scope','flightsService','$filter',
            function ($scope, flightsService,$filter) {
                $scope.data = [];
                $scope.filteredData = [];
                $scope.searchText = '';

                //$scope.fetchFlights();

                $scope.filterData = function () {
                    $scope.filteredData = $filter('filter')($scope.data, $scope.searchText, undefined);
                };

                $scope.fetchFlights = function () {
                    flightsService.fetch().then(function (data) {
                        $scope.data = data.flights;
                        $scope.filteredData = $scope.data;
                    })
                }
            }
        ]
        );
});