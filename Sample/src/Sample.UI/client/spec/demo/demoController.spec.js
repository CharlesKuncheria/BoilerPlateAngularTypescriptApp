/// <reference path="../../demo/demo.ts" />
/// <reference path="../../demo/democontroller.ts" />
/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/angular-mocks/index.d.ts" />
/// <reference path="../../demo/answer.ts" />
describe("DemoController Test", function () {
    // instantiate a new version of my module before each test
    var ctrl;
    beforeEach(function () {
        angular.mock.module('SampleApp');
    });
    beforeEach(function () {
        angular.mock.module(function ($provide) {
            var ans;
            ans = new Array();
            ans.push(new Sample.Demo.Answer(1, "Some data", true));
            var mockService = {
                answers: ans
            };
            $provide.value('DemoService', mockService);
        });
    });
    beforeEach(function () {
        angular.mock.inject(function ($controller) {
            ctrl = $controller('DemoController');
        });
    });
    it("should have some answers", function () {
        expect(ctrl.answers.length).toBeTruthy();
    });
});
//# sourceMappingURL=demoController.spec.js.map