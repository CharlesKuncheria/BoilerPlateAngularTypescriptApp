/// <reference path="../typings/index.d.ts" />
var Sample;
(function (Sample) {
    var Demo;
    (function (Demo) {
        function AnswerDirective() {
            return {
                templateUrl: 'client/demo/templates/answer.html',
                restrict: 'E'
            };
        }
        Demo.AnswerDirective = AnswerDirective;
        angular.module('SampleApp').directive('answer', AnswerDirective);
    })(Demo = Sample.Demo || (Sample.Demo = {}));
})(Sample || (Sample = {}));
//# sourceMappingURL=answerDirective.js.map