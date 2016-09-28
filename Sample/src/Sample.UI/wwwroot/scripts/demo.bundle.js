/// <reference path="../typings/globals/angular/index.d.ts" />
var Sample;
(function (Sample) {
    var Demo;
    (function (Demo) {
        angular.module('SampleApp', ['ui.router', 'AdalAngular']);
    })(Demo = Sample.Demo || (Sample.Demo = {}));
})(Sample || (Sample = {}));
//# sourceMappingURL=demo.js.map
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
var Sample;
(function (Sample) {
    var Demo;
    (function (Demo) {
        var Organisation = (function () {
            function Organisation() {
            }
            return Organisation;
        }());
        Demo.Organisation = Organisation;
    })(Demo = Sample.Demo || (Sample.Demo = {}));
})(Sample || (Sample = {}));
//# sourceMappingURL=ToGo.js.map
/// <reference path="../typings/globals/angular/index.d.ts" />
/// <reference path="../typings/globals/lodash/index.d.ts" />
/// <reference path="togo.ts" />
var Sample;
(function (Sample) {
    var Demo;
    (function (Demo) {
        var ToGoService = (function () {
            function ToGoService($http) {
                this.toGos = new Array();
                var apiEndpoint = "http://hybridconnectiontesting.azurewebsites.net/";
                var tamAlias = "makalan";
                $http.get(apiEndpoint + '/api/v1/dashboard/portfolio/accounts/' + tamAlias).then(this.callback);
            }
            ToGoService.prototype.callback = function (promiseValue) {
                if (promiseValue.data.length > 0) {
                    //_.each(_.sample(promiseValue.data, 3), alert);
                    for (var _i = 0, _a = promiseValue.data; _i < _a.length; _i++) {
                        var entry = _a[_i];
                    }
                }
            };
            ToGoService.$inject = ['$http'];
            return ToGoService;
        }());
        Demo.ToGoService = ToGoService;
        angular.module('SampleApp').service('ToGoService', ToGoService);
    })(Demo = Sample.Demo || (Sample.Demo = {}));
})(Sample || (Sample = {}));
//# sourceMappingURL=ToGoService.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uanMiLCJkZW1vQ29udHJvbGxlci5qcyIsImRlbW9TZXJ2aWNlLmpzIiwiYW5zd2VyLmpzIiwiYW5zd2VyRGlyZWN0aXZlLmpzIiwiVG9Hby5qcyIsIlRvR29TZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGVtby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9nbG9iYWxzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcbnZhciBTYW1wbGU7XHJcbihmdW5jdGlvbiAoU2FtcGxlKSB7XHJcbiAgICB2YXIgRGVtbztcclxuICAgIChmdW5jdGlvbiAoRGVtbykge1xyXG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKCdTYW1wbGVBcHAnLCBbJ3VpLnJvdXRlcicsICdBZGFsQW5ndWxhciddKTtcclxuICAgIH0pKERlbW8gPSBTYW1wbGUuRGVtbyB8fCAoU2FtcGxlLkRlbW8gPSB7fSkpO1xyXG59KShTYW1wbGUgfHwgKFNhbXBsZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbW8uanMubWFwIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJkZW1vc2VydmljZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJhbnN3ZXIudHNcIiAvPlxyXG52YXIgU2FtcGxlO1xyXG4oZnVuY3Rpb24gKFNhbXBsZSkge1xyXG4gICAgdmFyIERlbW87XHJcbiAgICAoZnVuY3Rpb24gKERlbW8pIHtcclxuICAgICAgICB2YXIgRGVtb0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBEZW1vQ29udHJvbGxlcihkZW1vU2VydmljZSwgdG9nb1NlcnZpY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFwiSGVsbG8gaGlcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VycyA9IGRlbW9TZXJ2aWNlLmFuc3dlcnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbW9TZXJ2aWNlID0gZGVtb1NlcnZpY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0Fuc3dlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIERlbW9Db250cm9sbGVyLnByb3RvdHlwZS5tYXJrQXNDb3JyZWN0ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzW2tleV0uY29ycmVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzW2lkXS5jb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgRGVtb0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUFuc3dlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgRGVtb0NvbnRyb2xsZXIucHJvdG90eXBlLmFkZEFuc3dlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVtb1NlcnZpY2UuYWRkQW5zd2VyKHRoaXMubmV3QW5zd2VyVGV4dCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGVtb0NvbnRyb2xsZXIucHJvdG90eXBlLCBcImRhdGFcIiwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnc3VwcGx5IHJlYWwgZGF0YSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBEZW1vQ29udHJvbGxlci4kaW5qZWN0ID0gWydEZW1vU2VydmljZScsICdUb0dvU2VydmljZSddO1xyXG4gICAgICAgICAgICByZXR1cm4gRGVtb0NvbnRyb2xsZXI7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBEZW1vLkRlbW9Db250cm9sbGVyID0gRGVtb0NvbnRyb2xsZXI7XHJcbiAgICAgICAgYW5ndWxhci5tb2R1bGUoJ1NhbXBsZUFwcCcpLmNvbnRyb2xsZXIoJ0RlbW9Db250cm9sbGVyJywgRGVtb0NvbnRyb2xsZXIpO1xyXG4gICAgfSkoRGVtbyA9IFNhbXBsZS5EZW1vIHx8IChTYW1wbGUuRGVtbyA9IHt9KSk7XHJcbn0pKFNhbXBsZSB8fCAoU2FtcGxlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVtb0NvbnRyb2xsZXIuanMubWFwIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvZ2xvYmFscy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiYW5zd2VyLnRzXCIgLz5cclxudmFyIFNhbXBsZTtcclxuKGZ1bmN0aW9uIChTYW1wbGUpIHtcclxuICAgIHZhciBEZW1vO1xyXG4gICAgKGZ1bmN0aW9uIChEZW1vKSB7XHJcbiAgICAgICAgdmFyIElEZW1vU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIElEZW1vU2VydmljZSgpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gSURlbW9TZXJ2aWNlO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgRGVtby5JRGVtb1NlcnZpY2UgPSBJRGVtb1NlcnZpY2U7XHJcbiAgICAgICAgdmFyIERlbW9TZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gRGVtb1NlcnZpY2UoJGh0dHApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VycyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBbnN3ZXIoXCJ5b3UgbG92ZSB0aGlzIGRlbW9cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBbnN3ZXIoXCJ5b3UgaGF0ZSB0aGlzIGRlbW9cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBbnN3ZXIoXCJuZXV0cmFsIHRvIHRoaXMgZGVtb1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBEZW1vU2VydmljZS5wcm90b3R5cGUuYWRkQW5zd2VyID0gZnVuY3Rpb24gKGFuc3dlciwgY29ycmVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzLnB1c2gobmV3IERlbW8uQW5zd2VyKHRoaXMuYW5zd2Vycy5sZW5ndGgsIGFuc3dlciwgY29ycmVjdCkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBEZW1vU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCddO1xyXG4gICAgICAgICAgICByZXR1cm4gRGVtb1NlcnZpY2U7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBEZW1vLkRlbW9TZXJ2aWNlID0gRGVtb1NlcnZpY2U7XHJcbiAgICAgICAgYW5ndWxhci5tb2R1bGUoJ1NhbXBsZUFwcCcpLnNlcnZpY2UoJ0RlbW9TZXJ2aWNlJywgRGVtb1NlcnZpY2UpO1xyXG4gICAgfSkoRGVtbyA9IFNhbXBsZS5EZW1vIHx8IChTYW1wbGUuRGVtbyA9IHt9KSk7XHJcbn0pKFNhbXBsZSB8fCAoU2FtcGxlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVtb3NlcnZpY2UuanMubWFwIiwidmFyIFNhbXBsZTtcclxuKGZ1bmN0aW9uIChTYW1wbGUpIHtcclxuICAgIHZhciBEZW1vO1xyXG4gICAgKGZ1bmN0aW9uIChEZW1vKSB7XHJcbiAgICAgICAgdmFyIEFuc3dlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEFuc3dlcihpZCwgYW5zd2VyLCBjb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IGNvcnJlY3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEFuc3dlcjtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIERlbW8uQW5zd2VyID0gQW5zd2VyO1xyXG4gICAgfSkoRGVtbyA9IFNhbXBsZS5EZW1vIHx8IChTYW1wbGUuRGVtbyA9IHt9KSk7XHJcbn0pKFNhbXBsZSB8fCAoU2FtcGxlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5zd2VyLmpzLm1hcCIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxyXG52YXIgU2FtcGxlO1xyXG4oZnVuY3Rpb24gKFNhbXBsZSkge1xyXG4gICAgdmFyIERlbW87XHJcbiAgICAoZnVuY3Rpb24gKERlbW8pIHtcclxuICAgICAgICBmdW5jdGlvbiBBbnN3ZXJEaXJlY3RpdmUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NsaWVudC9kZW1vL3RlbXBsYXRlcy9hbnN3ZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0UnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERlbW8uQW5zd2VyRGlyZWN0aXZlID0gQW5zd2VyRGlyZWN0aXZlO1xyXG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKCdTYW1wbGVBcHAnKS5kaXJlY3RpdmUoJ2Fuc3dlcicsIEFuc3dlckRpcmVjdGl2ZSk7XHJcbiAgICB9KShEZW1vID0gU2FtcGxlLkRlbW8gfHwgKFNhbXBsZS5EZW1vID0ge30pKTtcclxufSkoU2FtcGxlIHx8IChTYW1wbGUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbnN3ZXJEaXJlY3RpdmUuanMubWFwIiwidmFyIFNhbXBsZTtcclxuKGZ1bmN0aW9uIChTYW1wbGUpIHtcclxuICAgIHZhciBEZW1vO1xyXG4gICAgKGZ1bmN0aW9uIChEZW1vKSB7XHJcbiAgICAgICAgdmFyIE9yZ2FuaXNhdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIE9yZ2FuaXNhdGlvbigpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgRGVtby5PcmdhbmlzYXRpb24gPSBPcmdhbmlzYXRpb247XHJcbiAgICB9KShEZW1vID0gU2FtcGxlLkRlbW8gfHwgKFNhbXBsZS5EZW1vID0ge30pKTtcclxufSkoU2FtcGxlIHx8IChTYW1wbGUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ub0dvLmpzLm1hcCIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2dsb2JhbHMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvZ2xvYmFscy9sb2Rhc2gvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0b2dvLnRzXCIgLz5cclxudmFyIFNhbXBsZTtcclxuKGZ1bmN0aW9uIChTYW1wbGUpIHtcclxuICAgIHZhciBEZW1vO1xyXG4gICAgKGZ1bmN0aW9uIChEZW1vKSB7XHJcbiAgICAgICAgdmFyIFRvR29TZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVG9Hb1NlcnZpY2UoJGh0dHApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9Hb3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIHZhciBhcGlFbmRwb2ludCA9IFwiaHR0cDovL2h5YnJpZGNvbm5lY3Rpb250ZXN0aW5nLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhbUFsaWFzID0gXCJtYWthbGFuXCI7XHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYXBpRW5kcG9pbnQgKyAnL2FwaS92MS9kYXNoYm9hcmQvcG9ydGZvbGlvL2FjY291bnRzLycgKyB0YW1BbGlhcykudGhlbih0aGlzLmNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBUb0dvU2VydmljZS5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbiAocHJvbWlzZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZVZhbHVlLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXy5lYWNoKF8uc2FtcGxlKHByb21pc2VWYWx1ZS5kYXRhLCAzKSwgYWxlcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBwcm9taXNlVmFsdWUuZGF0YTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgVG9Hb1NlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnXTtcclxuICAgICAgICAgICAgcmV0dXJuIFRvR29TZXJ2aWNlO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgRGVtby5Ub0dvU2VydmljZSA9IFRvR29TZXJ2aWNlO1xyXG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKCdTYW1wbGVBcHAnKS5zZXJ2aWNlKCdUb0dvU2VydmljZScsIFRvR29TZXJ2aWNlKTtcclxuICAgIH0pKERlbW8gPSBTYW1wbGUuRGVtbyB8fCAoU2FtcGxlLkRlbW8gPSB7fSkpO1xyXG59KShTYW1wbGUgfHwgKFNhbXBsZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRvR29TZXJ2aWNlLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
