'use strict';

/**
 * @ngdoc service
 * @name customerAppApp.empListService
 * @description
 * # empListService
 * Service in the customerAppApp.
 */
angular.module('customerAppApp')
  .service('empListService', function () {
    this.searched = function (valLists,toSearch) {
      return _.filter(valLists,
      function (i) {
        return searchUtil(i, toSearch);
      });
    };
    this.paged = function(valLists,pageSize){
      retVal : [];
      for (var i = 0; i < valLists.length; i++){
        if (i % pageSize === 0){
          retVal[Math.floor(i / pageSize)] = [valLists[i]];
        }
        else{
          retVal[Math.floor(i / pageSize)].push(valLists[i]);
        }
      }
      return retVal;
    };

  })

var TableCtrl =
function ($scope,$filter,empListService) {
  $scope.pageSize = 4;
  $scope.allItems = getDummyData();
  $scope.reverse = false;

  $scope.resetAll = function () {
    $scope.empList = $scope.allItems;
    $scope.newEmpId = 'sdfd',
      $scope.newName = 'dsfd',
      $scope.newEmail = 'fdf',
      $scope.searchText = 'dfd',
      $scope.currentPage= '0',
      $scope.Header = ['','','']
  };
  $scope.add = function () {
    $scope.allItems.push({
      EmpId: $scope.newEmpId,
      name:$scope.newName,
      Email:$scope.newEmail
    });
    $scope.resetAll();
  };
  $scope.search = function () {
    $scope.empList =
      empListService.searched($scope.allItems,$scope.searchText);
    if($scope.searchText == ''){
      $scope.empList = $scope.allItems;
    }
  };
  /*$scope.pagination();*/

//Calculate Total Number of Pages based on Search Result
  $scope.pagination = function () {
    $scope.ItemsByPage =
      empListService.paged(
        $scope.empList,$scope.pageSize
      );
  };
$scope.setPage = function(){
  $scope.currentPage = this.n;
};
$scope.firstPage = function(){
  $scope.currentPage = 0;
};
$scope.lastPage = function(){
  $scope.currentPage = $scope.ItemsByPage.length -1;
};

$scope.range = function (input, total) {
  var ret = [];
  if(!total){
    total = input;
    input = 0;
  }
  for (var i = input; i < total; i++){
    if(i != 0 && i != total - 1){
      ret.push(i);
    }
  }
  return ret;
};
/*$scope.sort = function (sortBy) {
  $scope.resetAll();
  $scope.columnToOrder = sortBy;

  //$Filter - Standard Service
  $scope.empList =
    $filter('orderBy')($scope.empList,
    $scope.columnToOrder, $scope.reverse);
  if($scope.reverse)
   iconv = 'glyphicon glyphicon-chevron-up';

  else
    iconv :'glyphicon glyphicon-chevron-down';
  if(sortBy === 'EmpId')
  {
    $scope.Header[0] = iconv;
  }
  else if(sortBy === 'name')
  {
    $scope.Header[1] = iconv;
  }
  else{
    $scope.Header[2] = iconv;
  }
  $scope.reverse = !$scope.reverse;
  /!*$scope.pagination();*!/
};*/
/*$scope.sort('name')*/
};

//Inject Services for DI
//$scope is standard service provided by framework
//If we want to use standard $filter, It also needs to be Injected
//EmpService - custom service created by me

TableCtrl.$inject = ['$scope',
'$filter', 'empListService'];
function searchUtil(item,toSerach) {
  //Search Text in all 3 fields
  return
  (item.name.toLowerCase().indexOf(toSerach.toLowerCase())> -1 ||
  item.Email.toLocaleLowerCase().indexOf(toSerach.toLowerCase()) > -1 ||
      item.EmpId == toSerach
  ) ? true : false;
}
//Get Dummy Data for Example
function getDummyData(){
  return[
    {
    EmpId: 2,
    name: 'john',
    Email: 'john@gmail.com'
  },
    {
      EmpId: 2,
      name: 'Jestin',
      Email: 'Jestin@gmail.com'
    },
    {
      EmpId: 12,
      name: 'gracia',
      Email: 'gracia@gmail.com'
    },
    {
      EmpId: 5,
      name: 'johny',
      Email: 'johny@gmail.com'
    },
    {
      EmpId: 21,
      name: 'dave',
      Email: 'dave@gmail.com'
    },
    {
      EmpId: 32,
      name: 'smith',
      Email: 'smith@gmail.com'
    },
    {
      EmpId: 35,
      name: 'pollard',
      Email: 'pollard@gmail.com'
    }


  ];
}
