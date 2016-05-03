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
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/customers.html',
                controller: 'MainCtrl'
            })
            .when('/orders/:customerId', {
                templateUrl: 'views/orders.html',
                controller: 'AboutCtrl'
            })
            .when('/itemlist', {
                templateUrl: 'views/itemlist.html',
                controller: 'mainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
