'use strict';

/**
 * @ngdoc function
 * @name customerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customerAppApp
 */
(function(){
  var MainCtrl = function($scope){
    $scope.sortBy = 'name';
    $scope.reverse = false;

    $scope.customers = [
      {
        id: 4,
        name: 'Dave',
        city: 'Seattle',
        orderTotal: 101.50,
        joined: '1995-03-03',
        orders:[
          {
            id: 5,
            product: 'Baseball Hat',
            total: 99.995
          },
          {
            id: 6,
            product: 'Bat',
            total: 9.995
          }
        ]
      },
      {
        id: 1,
        name: 'John',
        city: 'Chandler',
        orderTotal: 9.997,
        joined: '2000-12-02',
        orders:[
          {
            id: 1,
            product: 'Shoes',
            total: 9.9956
          }
        ]
      },
      {
        id: 2,
        name: 'Zed',
        city: 'Las Vegas',
        orderTotal: 19.999,
        joined: '1965-01-10',
        orders:[
          {
            id: 2,
            product: 'Baseball',
            total: 9.995
          },
          {
            id: 3,
            product: 'Bat',
            total: 9.995
          }
        ]
      },
      {
        id: 3,
        name: 'Tina',
        city: 'New York',
        orderTotal: 44.896,
        joined: '1944-06-09',
        orders:[
          {
            id: 4,
            product: 'watch',
            total: 44.896
          }
        ]
      },
      {
        id: 5,
        name: 'Robin',
        city: 'California',
        orderTotal: 44.896,
        joined: '2019-12-10',
        orders:[
          {
            id: 4,
            product: 'watch',
            total: 44.896
          }
        ]
      },
      {
        id: 6,
        name: 'Smith',
        city: 'Ohio',
        orderTotal: 44.896,
        joined: '2015-02-059',
        orders:[
          {
            id: 4,
            product: 'watch',
            total: 44.896
          }
        ]
      }
    ];

    $scope.doSort = function(propName){
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  MainCtrl.$inject = ['$scope'];

  angular.module('customerAppApp').controller('MainCtrl', MainCtrl);
})();


