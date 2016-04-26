'use strict';

/**
 * @ngdoc function
 * @name customerAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the customerAppApp
 */
angular.module('customerAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
