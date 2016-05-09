'use strict';

/**
 * @ngdoc service
 * @name customerAppApp.CompanyService
 * @description
 * # CompanyService
 * Service in the customerAppApp.
 */
angular.module('customerAppApp')
  .service('CompanyService', function CompanyService(CompanyService, $resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    $scope.companies = CompanyService.query();
    return $resource('companies.json');
  })
  .controller('companiesCtrl', function ($scope, $http) {
    $http.get('companies.json')
      .success(function (response) {
        $scope.companies = response.records;
      })
  });

