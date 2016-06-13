'use strict';

/**
 * @ngdoc directive
 * @name customerAppApp.directive:stockWidget
 * @description
 * # stockWidget
 */
/*angular.module('customerAppApp')
  .directive('stockWidget', [function () {
    return {
      templateUrl: 'views/stock.html',
      restrict: 'A',
      transclude: true,
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
        /!* $scope.changeStock = function () {
           $scope.stockData = {
             name: 'Directive Stock',
             price: 500,
             previous: 200
           };
         };*!/
         $scope.onSelect = function () {
           $scope.whenSelect({
             stockName: $scope.stockData.name,
             stockPrice: $scope.stockData.price,
             stockPrevious: $scope.stockData.previous
           });
         }
      }
    };
  }]);*/


angular.module('customerAppApp')
  .directive('stockWidget',
  [function () {
    return {
      restrict: 'A',
      //Capture and replace the entire element
      //instead of just its content

      transclude: 'element',
      //A $transclude is passed in as the fifth
      //argument to the link function
      link: function($scope,$element,$attrs, ctrl, $transclude){
        var myArray = $scope.$eval($attrs.stockWidget);
        var container = angular.element(
          '<div class ="container"></div>'
        );
        for (var i = 0; i < myArray.length; i++){
          //Create an element instance with a new child
        //scope using the clone linking function
        var instance = $transclude($scope.$new(),
        function (clonedElement, newScope) {
          //Expose custom variables for the instance
          newScope.currentIndex = i;
          newScope.stock = myArray[i];
        });
        //Add it to our container

        container.append(instance);
      }
      //With transclude: 'element', the element gets replaced
      //with a comment. Add our generated content
      //after the comment
      $element.after(container);
    }
  };
}]);
