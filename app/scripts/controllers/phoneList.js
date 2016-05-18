'use strict';

/**
 * @ngdoc function
 * @name customerAppApp.controller:PhonelistCtrl
 * @description
 * # PhonelistCtrl
 * Controller of the customerAppApp
 */
angular.module('customerAppApp')
  .controller('PhoneListCtrl', function ($scope,$http) {
    $http.get('phones.json').success(function (data) {
      $scope.phones = data;
    });
    $scope.orderProp = 'age';
  });
