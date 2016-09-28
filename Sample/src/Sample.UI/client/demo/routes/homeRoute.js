/// <reference path="../../typings/index.d.ts" />
/// <reference path="../../typings/globals/adal-angular/index.d.ts" />
var Sample;
(function (Sample) {
    var Demo;
    (function (Demo) {
        var HomeRoute = (function () {
            function HomeRoute(stateprovider, urlRouterProvider) {
                this.stateprovider = stateprovider;
                this.urlRouterProvider = urlRouterProvider;
                stateprovider.state('home', {
                    url: '/home',
                    templateUrl: 'client/demo/templates/demo.html',
                    controller: 'DemoController',
                    controllerAs: 'vm' //,
                });
            }
            HomeRoute.$inject = ['$stateProvider', '$urlRouterProvider'];
            return HomeRoute;
        }());
        Demo.HomeRoute = HomeRoute;
        angular.module('SampleApp').config(HomeRoute);
    })(Demo = Sample.Demo || (Sample.Demo = {}));
})(Sample || (Sample = {}));
//# sourceMappingURL=homeRoute.js.map