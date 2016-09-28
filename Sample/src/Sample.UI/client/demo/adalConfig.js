/// <reference path="../typings/index.d.ts" />
/// <reference path="../typings/globals/adal-angular/index.d.ts" />
var Sample;
(function (Sample) {
    var Demo;
    (function (Demo) {
        var AdalConfig = (function () {
            function AdalConfig($httpProvider, adalProvider) {
                var endpoints = {
                    // Map the location of a request to an API to a the identifier of the associated resource
                    "https://localhost:44327/": "https://samplefortesting.onmicrosoft.com/ToGoAPI",
                };
                adalProvider.init({
                    instance: 'https://login.microsoftonline.com/',
                    tenant: 'samplefortesting.onmicrosoft.com',
                    clientId: 'e23490a0-c7e8-48b5-9d8c-c78bf9f4c1eb',
                    extraQueryParameter: 'nux=1',
                    endpoints: endpoints,
                }, $httpProvider);
            }
            AdalConfig.$inject = ['$httpProvider', 'adalAuthenticationServiceProvider'];
            return AdalConfig;
        }());
        Demo.AdalConfig = AdalConfig;
    })(Demo = Sample.Demo || (Sample.Demo = {}));
})(Sample || (Sample = {}));
//# sourceMappingURL=adalConfig.js.map