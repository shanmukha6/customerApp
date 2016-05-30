'use strict';

/**
 * @ngdoc function
 * @name customerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customerAppApp
 */
(function () {
  var MainCtrl = function ($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;

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
            total: 9.9956
          },
          {
            id: 2,
            product: 'Key board',
            total: 19.9956
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
        name: 'Smith',
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
            product: 'iPhone',
            total: 744.896
          }
        ]
      }
    ];
    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };
  //MainCtrl.$inject = ['$scope'];
  angular.module('customerAppApp').controller('MainCtrl', MainCtrl)
})();

angular.module('customerAppApp')
  .controller("firstCtrl", function ($scope) {
    $scope.$on('eventName', function (event, args) {
      $scope.message = args.message;
      console.log($scope.message);
    });
  })
  .controller('secondCtrl', function ($scope) {
    $scope.handleClick = function (msg) {
      $scope.$emit('eventName', {message: msg});
    };
  })
  .controller('StockCtrl', function () {
    var self = this;
    self.stocks = [
      {
        name: 'First Stock',
        price: 120,
        previous: 100
      },
      {
        name: 'Second Stock',
        previous: 140,
        price: 220
      },
      {
        name: 'Third Stock',
        previous: 110,
        price: 110
      },
      {
        name: 'First Stock',
        previous: 400,
        price: 420
      }
    ];
    /*self.stockTemplate = 'views/stock.html';
     self.getChange = function(stock){
     return Math.ceil((
     (stock.price - stock.previous)/ stock.previous
     ) * 100);
     };*/
    self.onStockSelect = function (price, name) {
      console.log('Selected Price', price, 'Name', name);
      alert('Name: ' + name + ' and Price is ' + price);
    };

    /*self.changeAllStocks = function () {
     for(var i = 0; i<4; i++){
     self.stocks[i] = {
     name: 'Controller Stock',
     price: 2500,
     previous: 200
     };
     }
     self.changeFirstStock = function () {
     self.stocks[0].name = 'Changed First Stock';
     };
     }*/
  })
.controller('CartForm',function ($scope) {
    $scope.invoice = {
      items: [{
        qty: 10,
        description: 'item',
        cost: 9.95
      }
      ]
    };
    $scope.addItem = function () {
      $scope.invoice.items.push({
        qty: 1,
        description: '',
        cost: 0

      });
    };
    $scope.removeItem = function (index) {
      $scope.invoice.items.splice(index, 1);
    };
    $scope.total = function () {
      var total = 0;
      angular.forEach($scope.invoice.items, function (item) {
        total += item.qty * item.cost;
      });
      return total;
    };

  }
);


/*
/!*(function CartForm($scope){*!/
(function () {
  var CartForm = function ($scope) {
    $scope.invoice = {
      items: [{
        qty: 10,
        description: 'item',
        cost: 9.95
      }
      ]
    };
    $scope.addItem = function () {
      $scope.invoice.items.push({
        qty: 1,
        description: '',
        cost: 0

      });
    };
      $scope.removeItem = function (index) {
        $scope.invoice.items.splice(index, 1);
      };
      $scope.total = function () {
        var total = 0;
        angular.forEach($scope.invoice.items, function (item) {
          total += item.qty * item.cost;
        });
        return total;
      };
    angular.module('customerAppApp').controller('CartForm', CartForm)
  }
})();
*/









