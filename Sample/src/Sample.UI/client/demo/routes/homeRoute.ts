/// <reference path="../../typings/index.d.ts" />
/// <reference path="../../typings/globals/adal-angular/index.d.ts" />

namespace Sample.Demo {

    export class HomeRoute {

        stateprovider: ng.ui.IStateProvider;
        urlRouterProvider: ng.ui.IUrlRouterProvider;

        static $inject = ['$stateProvider', '$urlRouterProvider'];

        constructor(stateprovider: any, urlRouterProvider: ng.ui.IUrlRouterProvider) {
            this.stateprovider = stateprovider;
            this.urlRouterProvider = urlRouterProvider;

            stateprovider.state(
                'home', {
                    url: '/home',
                    templateUrl: 'client/demo/templates/demo.html',
                    controller: 'DemoController',
                    controllerAs: 'vm' //,
                    //requireADLogin: true
                });
        }
    }

    angular.module('SampleApp').config(HomeRoute);
}
