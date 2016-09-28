/// <reference path="../typings/globals/angular/index.d.ts" />
/// <reference path="answer.ts" />
var Sample;
(function (Sample) {
    var Demo;
    (function (Demo) {
        var IDemoService = (function () {
            function IDemoService() {
            }
            return IDemoService;
        }());
        Demo.IDemoService = IDemoService;
        var DemoService = (function () {
            function DemoService($http) {
                this.answers = new Array();
                this.addAnswer("you love this demo", false);
                this.addAnswer("you hate this demo", false);
                this.addAnswer("neutral to this demo", true);
            }
            DemoService.prototype.addAnswer = function (answer, correct) {
                this.answers.push(new Demo.Answer(this.answers.length, answer, correct));
            };
            DemoService.$inject = ['$http'];
            return DemoService;
        }());
        Demo.DemoService = DemoService;
        angular.module('SampleApp').service('DemoService', DemoService);
    })(Demo = Sample.Demo || (Sample.Demo = {}));
})(Sample || (Sample = {}));
//# sourceMappingURL=demoservice.js.map