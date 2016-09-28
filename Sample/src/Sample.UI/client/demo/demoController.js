/// <reference path="../typings/index.d.ts" />
/// <reference path="demoservice.ts" />
/// <reference path="answer.ts" />
var Sample;
(function (Sample) {
    var Demo;
    (function (Demo) {
        var DemoController = (function () {
            function DemoController(demoService, togoService) {
                this.data = "Hello hi";
                this.answers = demoService.answers;
                this.demoService = demoService;
                this.newAnswerText = "";
            }
            DemoController.prototype.markAsCorrect = function (id) {
                for (var key in this.answers) {
                    this.answers[key].correct = false;
                }
                this.answers[id].correct = true;
            };
            DemoController.prototype.removeAnswer = function () {
            };
            DemoController.prototype.addAnswer = function () {
                this.demoService.addAnswer(this.newAnswerText, false);
            };
            Object.defineProperty(DemoController.prototype, "data", {
                get: function () {
                    return this._data;
                },
                set: function (value) {
                    if (value === undefined) {
                        throw 'supply real data';
                    }
                    this._data = value;
                },
                enumerable: true,
                configurable: true
            });
            DemoController.$inject = ['DemoService', 'ToGoService'];
            return DemoController;
        }());
        Demo.DemoController = DemoController;
        angular.module('SampleApp').controller('DemoController', DemoController);
    })(Demo = Sample.Demo || (Sample.Demo = {}));
})(Sample || (Sample = {}));
//# sourceMappingURL=demoController.js.map