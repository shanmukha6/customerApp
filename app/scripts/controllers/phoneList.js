'use strict';

/**
 * @ngdoc function
 * @name customerAppApp.controller:PhonelistCtrl
 * @description
 * # PhonelistCtrl
 * Controller of the customerAppApp
 */
/*angular.module('customerAppApp')
  .controller('PhoneListCtrl', function ($scope,$http) {
    $http.get('JSON/phones.json').success(function (data) {
      $scope.phones = data;
    });
    $scope.orderProp = 'age';
  });*/
var phonecatControllers = angular.module('phonecatControllers',[]);
phonecatControllers.controller('PhoneListCtrl',['$scope','$http',
function ($scope,$http) {
  $http.get('phones/phones.json').success(function (data) {
    $scope.phones = data;
  });
  $scope.orderProp = 'age';
}]);
phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams','$http',
function($scope,$routeParams,$http){
  $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
    $scope.phone = data
    $scope.mainImageUrl = data.images[0];
  });
  $scope.setImage = function(imageUrl){
    $scope.mainImageUrl = imageUrl;
  };
  /*$scope.phoneId = $routeParams.phoneId;*/
}]);

