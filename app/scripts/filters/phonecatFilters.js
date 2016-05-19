'use strict';

/**
 * @ngdoc filter
 * @name customerAppApp.filter:filters
 * @function
 * @description
 * # filters
 * Filter in the customerAppApp.
 */
angular.module('phonecatFilters',[])
  .filter('checkmark',function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    };
  });
