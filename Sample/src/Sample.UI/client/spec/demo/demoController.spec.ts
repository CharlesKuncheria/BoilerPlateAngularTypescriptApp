/// <reference path="../../demo/demo.ts" />
/// <reference path="../../demo/democontroller.ts" />
/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-mocks/index.d.ts" />
/// <reference path="../../demo/answer.ts" />


describe("DemoController Test", () => {
    // instantiate a new version of my module before each test

    var ctrl: Sample.Demo.DemoController;


    beforeEach(() => {
        angular.mock.module('SampleApp');
    });

    beforeEach(() => {
        angular.mock.module(function ($provide: any) {
            var ans: Array<Sample.Demo.IAnswer>;
            ans = new Array<Sample.Demo.IAnswer>();
            ans.push(new Sample.Demo.Answer(1, "Some data", true));

            var mockService: any = {
                answers: ans
            };
            $provide.value('DemoService', mockService);
        })
    });


    beforeEach(() => {
        angular.mock.inject(($controller: angular.IControllerService) => {
            ctrl = <Sample.Demo.DemoController>$controller('DemoController');
        });
    });

    it("should have some answers", () => {
        expect(ctrl.answers.length).toBeTruthy();
    });


   
});





