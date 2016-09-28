/// <reference path="../typings/globals/angular/index.d.ts" />
/// <reference path="../typings/globals/lodash/index.d.ts" />
/// <reference path="togo.ts" />

namespace Sample.Demo {

    export class ToGoService {
        toGos: Array<Organisation>;
        static $inject = ['$http'];

        constructor($http: ng.IHttpService) {
            this.toGos = new Array<Organisation>();
            var apiEndpoint: string = "http://hybridconnectiontesting.azurewebsites.net/";
            var tamAlias = "makalan";
            $http.get(apiEndpoint + '/api/v1/dashboard/portfolio/accounts/' + tamAlias).then(this.callback);
        }

        private callback(promiseValue: angular.IHttpPromiseCallbackArg<Array<Organisation>>) {
            if (promiseValue.data.length > 0) {

                //_.each(_.sample(promiseValue.data, 3), alert);

                for (let entry of promiseValue.data) {
                    //this.toGos.push(entry);
                }
            }
        }
    }

    angular.module('SampleApp').service('ToGoService', ToGoService);
}
