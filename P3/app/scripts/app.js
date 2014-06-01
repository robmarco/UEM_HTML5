'use strict';

angular
  .module('p3App', [
    'ngSanitize',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/show/:id', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
