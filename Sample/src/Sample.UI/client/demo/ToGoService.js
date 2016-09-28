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