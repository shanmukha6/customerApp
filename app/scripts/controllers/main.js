'use strict';

/**
 * @ngdoc function
 * @name customerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customerAppApp
 */
angular.module('customerAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
