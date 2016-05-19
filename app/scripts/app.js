'use strict';

/**
 * @ngdoc overview
 * @name customerAppApp
 * @description
 * # customerAppApp
 *
 * Main module of the application.
 */
angular
  .module('customerAppApp', [
    'phonecatControllers',
    'phonecatFilters',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
     /* .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })*/
      .when('/', {
       /* resolve: {
          'check': function ($location, $rootScope) {
            if (!$rootScope.loggedIn) {
              $location.path('/');
            }
          }
        },*/
        templateUrl: 'views/customers.html',
        controller: 'MainCtrl'
      })
      .when('/orders/:customerId', {
        templateUrl: 'views/orders.html',
        controller: 'AboutCtrl'
      })
      .when('/itemlist', {
        /*resolve: {
          'check': function ($location, $rootScope) {
            if (!$rootScope.loggedIn) {
              $location.path('/');
            }
          }
        },*/
        templateUrl: 'views/itemlist.html',
        controller: 'mainCtrl'
      })
      .when('/phones',{
      templateUrl: 'views/phonelist.html',
        controller:'PhoneListCtrl'
    })
      .when('/phones/:phoneId',{
        templateUrl: 'views/phone-detail.html',
        controller:'PhoneDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
