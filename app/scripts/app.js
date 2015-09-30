/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

// Declare app level module which depends on views, and components
angular.module('mapper', [
  'ngRoute',
  'ui.bootstrap'
])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                    .when('/', {templateUrl: 'views/view.html', controller: 'MainCtrl as mainCtrl'})
                    .otherwise({redirectTo: 'views/view.html'});
          }]);
