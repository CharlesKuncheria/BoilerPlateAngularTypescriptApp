//HEAD 
(function(app) {
try { app = angular.module("SampleApp"); }
catch(err) { app = angular.module("SampleApp", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("client/demo/templates/answer.html","<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\" ng-class=\"{ 'bg-success': ans.correct }\">\n" +
    "        {{ ans.answer }}\n" +
    "        <div class=\"pull-right\">\n" +
    "            <small><a href=\"#\" ng-click=\"$parent.vm.markAsCorrect(ans.id)\">Mark as correct</a></small>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("client/demo/templates/demo.html","<div id=\"demoPage\">\n" +
    "\n" +
    "    <section id=\"body\"  class=\"container\">\n" +
    "\n" +
    "        <section id=\"main\" class=\"col-md-9\">\n" +
    "            <div class=\"jumbotron text-center\">\n" +
    "                <h1>Sample UI Demo</h1>\n" +
    "                <section>\n" +
    "                    <div ng-repeat=\"ans in vm.answers track by $index\">\n" +
    "                        <answer />\n" +
    "                    </div>\n" +
    "                    <hr />\n" +
    "                    <h4>Add an answer</h4>\n" +
    "                    <div>\n" +
    "                        <textarea class=\"col-md-6 col-xs-8\" ng-model=\"vm.newAnswerText\"></textarea> &nbsp;\n" +
    "                        <input type=\"button\" class=\"btn btn-primary\" value=\"Add\" ng-click=\"vm.addAnswer()\" />\n" +
    "                    </div>\n" +
    "\n" +
    "                </section>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "\n" +
    "    </section>\n" +
    "\n" +
    "</div>")
}]);
})();