'use strict';

define(['angular', 'app.schedules','app.schedules.mock', 'angularMocks', 'schedules/services/httpgetService'], function (angular) {
    describe('httpgetService tests', function () {

        beforeEach(module('app.schedules'));

        var httpgetMockservice;

        beforeEach(module('app.schedules.mock'));

        beforeEach(inject(function (httpgetServiceMock) {
            httpgetMockservice = httpgetServiceMock;
        }));


        describe('get function', function () {

            it('get result from server', function () {
                var data1;

                httpgetMockservice.get('schedules/services/flights.json', function success(data) {

                    //console.log(data.flights[0]);
                    data1 = data;
                    return data;
                });
                //console.log(data1.flights[0]);
                expect(data1).not.toBe(null);
            });
        });
    });
});