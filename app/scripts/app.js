'use strict';

var CuriousWorld = CuriousWorld | {};
CuriousWorld.modules = {};

var app = angular
  .module('spa1App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'MainCtrl'
      })
      .when('/secured/contact-us', {
        templateUrl: '/views/secured/contact-us.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
