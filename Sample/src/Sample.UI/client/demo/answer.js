var Sample;
(function (Sample) {
    var Demo;
    (function (Demo) {
        var Answer = (function () {
            function Answer(id, answer, correct) {
                this.id = id;
                this.answer = answer;
                this.correct = correct;
            }
            return Answer;
        }());
        Demo.Answer = Answer;
    })(Demo = Sample.Demo || (Sample.Demo = {}));
})(Sample || (Sample = {}));
//# sourceMappingURL=answer.js.map