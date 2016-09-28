namespace Sample.Demo {

    export interface IAnswer {
        id: number;
        answer: string;
        correct: boolean;
    }

    export class Answer implements IAnswer {
        answer: string;
        correct: boolean;
        id: number;
        constructor(id: number, answer: string, correct: boolean) {
            this.id = id;
            this.answer = answer;
            this.correct = correct;
        }
    }
}