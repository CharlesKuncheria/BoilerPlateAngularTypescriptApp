/// <reference path="../typings/index.d.ts" />
/// <reference path="../typings/globals/adal-angular/index.d.ts" />

namespace Sample.Demo {

    export class AdalConfig {

        static $inject = ['$httpProvider', 'adalAuthenticationServiceProvider'];

        constructor($httpProvider: ng.IHttpProvider, adalProvider: adal.AdalAuthenticationServiceProvider) {
            var endpoints = {

                // Map the location of a request to an API to a the identifier of the associated resource
                "https://localhost:44327/": "https://samplefortesting.onmicrosoft.com/ToGoAPI",
            };

            adalProvider.init(
                {
                    instance: 'https://login.microsoftonline.com/',
                    tenant: 'samplefortesting.onmicrosoft.com',
                    clientId: 'e23490a0-c7e8-48b5-9d8c-c78bf9f4c1eb',
                    extraQueryParameter: 'nux=1',
                    endpoints: endpoints,
                },
                $httpProvider
            );

        }
    }

    //angular.module('SampleApp').config(AdalConfig);
}
