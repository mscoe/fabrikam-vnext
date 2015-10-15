define(['angular', 'app.schedules'], function () {
    angular.module('app.schedules')
    .controller('testController', [ '$scope',function ($scope) {
        $scope.things = ['aca', 'sda'];
    }]);
        
});