'use strict';

/**
 * @ngdoc function
 * @name customerAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the customerAppApp
 */
angular.module('customerAppApp')
    .controller('LoginCtrl', function ($scope, $location) {
        $scope.submit = function () {
            var username = $scope.username;
            var password = $scope.password;
            if ($scope.username === 'admin' && $scope.password === 'shanmukha') {
                $location.path('/customers');
            }
            else {
                alert("Wrong stuff");
            }


        };
    });
