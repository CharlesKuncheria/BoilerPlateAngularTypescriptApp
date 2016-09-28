/// <reference path="../typings/index.d.ts" />

namespace Sample.Demo {

    export function AnswerDirective(): ng.IDirective {
        return {
            templateUrl: 'client/demo/templates/answer.html',
            restrict: 'E'
        };
    }

    angular.module('SampleApp').directive('answer', AnswerDirective);
}
