define(['angular', 'app.schedules'], function () {
    angular.module("app.schedules").controller('fruitsController', ['$scope', function ($scope) {
        $scope.fruits = [
                { name: 'Mango' },
                { name: 'Apple' },
                { name: 'Orange' }
        ];
    }]);
});


