'use strict';

angular
	.module('p4App', [
		'ngSanitize',
		'ngRoute'
	])
	.config(function($routeProvider) {
		$routeProvider
	      .when('/', {
	        templateUrl: 'views/login.html',
	        controller: 'LoginCtrl'
	      })
	      .when('/play', {
	        templateUrl: 'views/play.html',
	        controller: 'PlayCtrl'
	      })
	      .otherwise({
	        redirectTo: '/'
	      });
	});