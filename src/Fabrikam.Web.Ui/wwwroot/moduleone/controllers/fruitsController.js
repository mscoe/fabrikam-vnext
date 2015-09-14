define( ['angular','app.moduleone'], function () {
    angular.module("app.moduleone").controller('fruitsController', ['$scope', function ($scope) {
        $scope.fruits = [
                { name: 'Mango' },
                { name: 'Apple' },
                { name: 'Orange' }
        ];
    }]);
});


