'use strict';

/**
 * @ngdoc function
 * @name customerAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the customerAppApp
 */
angular.module('customerAppApp')
  .controller('LoginCtrl', function ($scope, $location, $rootScope) {
    $scope.submit = function () {
      /* var username = $scope.username;
       var password = $scope.password;*/
      /*$rootScope.username = $scope.username;
       $rootScope.password = $scope.password;*/
      if ($scope.username === 'admin' && $scope.password === 'shanmukha') {
        $rootScope.loggedIn = true;
        /*window.location.hash = '#/customers';*/
        $location.path('/customers');
      }
      else {
        alert("Wrong stuff");
      }
    };
  })
.controller('companiesCtrl',function ($scope,$http) {
  $http.get(companies.json)
  .success(function(response){
  $scope.person = response.records;
  })
})
