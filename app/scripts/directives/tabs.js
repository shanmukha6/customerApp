'use strict';

/**
 * @ngdoc directive
 * @name customerAppApp.directive:tabs
 * @description
 * # tabs
 */
angular.module('customerAppApp')
  .directive('tabs', function () {
    return {
      restrict: 'E',
      template: '<div class="tab-headers">' +
      '<div ng-repeat="selectedTab($index)"' +
      'ng-class="{selected: isSelectedTab($index)}">' +
      '<span ng-bind="tab.title"></span> </div> </div>'+
      '<div ng-transclude></div>',
controller: function ($scope) {
  var currentIndex = 0;
  $scope.tabs = [];
  this.registerTab = function(title,scope){
    if($scope.tabs.length === 0){
      scope.selected = true;
    }else {
      scope.selected = false;
    }
    $scope.tabs.push({
      title: title,
      scope : scope
    });
  };
  $scope.selectTab = function(index){
    currentIndex = index;
    for(var i = 0; i < $scope.tabs.length; i++){
      $scope.tabs[i].scope.selected = currentIndex === i;
    }
  };
  $scope.isSelectedTab = function(index){
    return currentIndex === index;
  }
}

    };
  });
