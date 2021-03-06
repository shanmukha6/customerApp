'use strict';

/**
 * @ngdoc function
 * @name customerAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the customerAppApp
 */
(function () {
  var AboutCtrl = function ($scope, $routeParams) {
    var customerId = $routeParams.customerId;
    $scope.orders = null;

    function init() {
      for (var i = 0, len = $scope.customers.length; i < len; i++) {
        if ($scope.customers[i].id === parseInt(customerId)) {
          $scope.orders = $scope.customers[i].orders;
          break;
        }
      }
    }

//console.log(customerId);
    $scope.customers = [
      {
        id: 4,
        name: 'Dave',
        city: 'Seattle',
        orderTotal: 101.50,
        joined: '1995-03-03',
        orders: [
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
        orders: [
          {
            id: 1,
            product: 'Shoes',
            total: 19.9956
          },
          {
            id: 2,
            product: 'Playing Kit',
            total: 29.9956
          },
          {
            id: 3,
            product: 'Video Games',
            total: 9.9956
          }
        ]
      },
      {
        id: 2,
        name: 'Zed',
        city: 'Los Vegas',
        orderTotal: 19.999,
        joined: '1965-01-10',
        orders: [
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
        orders: [
          {
            id: 4,
            product: 'watch',
            total: 44.896
          },
          {
            id: 5,
            product: 'joy stick',
            total: 14.896
          },
          {
            id: 6,
            product: 'ATM',
            total: 15894.896
          }
        ]
      },
      {
        id: 5,
        name: 'Robin',
        city: 'California',
        orderTotal: 44.896,
        joined: '2019-12-10',
        orders: [
          {
            id: 4,
            product: 'watch',
            total: 44.896
          },
          {
            id: 5,
            product: 'Camera',
            total: 414.896
          }
        ]
      },
      {
        id: 6,
        name: 'Tina',
        city: 'Ohio',
        orderTotal: 44.896,
        joined: '2015-02-05',
        orders: [
          {
            id: 4,
            product: 'watch',
            total: 44.896
          },
          {
            id: 5,
            product: 'joy stick',
            total: 14.896
          }
        ]
      }
    ];

    init();
  };

  //AboutCtrl.$inject = ['$scope', '$routeParams'];


  angular.module('customerAppApp')
    .controller('AboutCtrl', AboutCtrl);

})();



