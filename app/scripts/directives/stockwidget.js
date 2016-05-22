'use strict';

/**
 * @ngdoc directive
 * @name customerAppApp.directive:stockWidget
 * @description
 * # stockWidget
 */
angular.module('customerAppApp')
  .directive('stockWidget', [function () {
    return {
      templateUrl: 'views/stock.html',
      restrict: 'A',
      scope: {
        stockData: '=',
        stockTitle:'@',
        whenSelect:'&'
      },

       link: function($scope) {
       $scope.getChange = function(stock) {
         return Math.ceil(
           ((stock.price - stock.previous)/stock.previous)*100);
       };
        /* $scope.changeStock = function () {
           $scope.stockData = {
             name: 'Directive Stock',
             price: 500,
             previous: 200
           };
         };*/
         $scope.onSelect = function () {
           $scope.whenSelect({
             stockName: $scope.stockData.name,
             stockPrice: $scope.stockData.price,
             stockPrevious: $scope.stockData.previous
           });
         }
      }
    };
  }]);
