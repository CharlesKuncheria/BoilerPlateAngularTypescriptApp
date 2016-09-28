/// <reference path="../typings/globals/angular/index.d.ts" />
/// <reference path="answer.ts" />

namespace Sample.Demo {

    export class IDemoService {
        answers: Array<IAnswer>;
        addAnswer: (newAsnwer: string, correct: boolean) => void;
    }

    export class DemoService implements IDemoService {
        answers: Array<IAnswer>;
        

        static $inject = ['$http'];

        constructor($http: ng.IHttpService) {
            this.answers = new Array<IAnswer>();
            this.addAnswer("you love this demo", false);
            this.addAnswer("you hate this demo", false);
            this.addAnswer("neutral to this demo", true);
        }

        addAnswer(answer: string, correct: boolean) {
            this.answers.push(new Answer(this.answers.length, answer, correct));
        }
    }

    angular.module('SampleApp').service('DemoService', DemoService);
}
