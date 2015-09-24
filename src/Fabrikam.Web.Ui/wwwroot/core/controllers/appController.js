define(['angular', 'app','../services/appService'], function () {
    angular.module("app").controller('appController', ['$scope', 'appService', function ($scope, appService) {

        $scope.isTask = function (task) {
            return $scope.Tasks.items.indexOf(task) >= 0;
        }

        appService.getData().then(function (data) {
            $scope.Flight = {
                Total: data["data"]["FlightData"].Total,
                LastUpdated:data["data"]["FlightData"].LastUpdated,
                Percent:data["data"]["FlightData"].Percent
            }
            $scope.Set = {
                Total: data["data"]["SetData"].Total,
                LastUpdated: data["data"]["SetData"].LastUpdated,
                Percent: data["data"]["SetData"].Percent
            },
            $scope.Flix = {
                Total: data["data"]["FlixData"].Total,
                LastUpdated: data["data"]["FlixData"].LastUpdated,
                Percent: data["data"]["FlixData"].Percent
            },
            $scope.RecentSchedules = {
                Total: data["data"]["ScheduleData"].Total,
                LastUpdated: data["data"]["ScheduleData"].LastUpdated,
                Percent: data["data"]["ScheduleData"].Percent
            },
            $scope.Tasks = {
                items: data["data"]["TaskData"]
            },
            $scope.Mail = {
                Number1: data["data"]["MessageData"]["Number1"],
                Number2:data["data"]["MessageData"]["Number2"],
                messages: data["data"]["MessageData"]["Messages"]
            }
        });
        //$scope.data = {
        //    FlightData: {
        //        Total: 900,
        //        LastUpdated: 10,
        //        Percent: 97
        //    },
        //    SET: {
        //        Total: 200,
        //        LastUpdated: 1,
        //        Percent: 99
        //    },
        //    FLIX: {
        //        Total: 100,
        //        LastUpdated: 2,
        //        Percent: 59
        //    },
        //    SCHDULES: {
        //        Total: 200,
        //        LastUpdated: 1,
        //        Percent: 96
        //    },
        //    tasks: [
        //        'Create Schedule record BLR-DXB',
        //        'Create Schedule record MAA-DXB',
        //        'Generate SSIM file',
        //        'Load files',
        //        'Create Schedule record DXB-MMM',
        //        'Create Schedule record BXB-DXB'
        //    ],
        //    messages: [
        //        {
        //            Name: 'Monica Smith',
        //            Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        //            Time: '1'
        //        }
        //    ]
        //}
       
    }]);
});