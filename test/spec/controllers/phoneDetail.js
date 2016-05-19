'use strict';

describe('Controller: PhonedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('customerAppApp'));

  var PhonedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhonedetailCtrl = $controller('PhonedetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
