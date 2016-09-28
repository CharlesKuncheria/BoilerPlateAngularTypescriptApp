/// <reference path="../typings/index.d.ts" />
/// <reference path="demoservice.ts" />
/// <reference path="answer.ts" />

namespace Sample.Demo {

    export class DemoController {
        private _data: string;
        answers: Array<IAnswer>;
        demoService: IDemoService;
        newAnswerText: string;

        static $inject = ['DemoService', 'ToGoService'];

        constructor(demoService: IDemoService, togoService: ToGoService) {
            this.data = "Hello hi";
            this.answers = demoService.answers;
            this.demoService = demoService;
            this.newAnswerText = "";
        }

        markAsCorrect(id: number) {
            for (var key in this.answers) {
                this.answers[key].correct = false;
            }
            this.answers[id].correct = true;
        }

        removeAnswer() {
        }

        addAnswer() {
            this.demoService.addAnswer(this.newAnswerText, false);
        }

        get data(): string {
            return this._data;
        }

        set data(value: string) {
            if (value === undefined) {
                throw 'supply real data';
            }
            this._data = value;
        }
    }

    angular.module('SampleApp').controller('DemoController', DemoController);
}