'use strict';

describe('Controller: PhoneListCtrl', function () {

  // load the controller's module
  beforeEach(module('customerAppApp'));

  var PhoneListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhoneListCtrl = $controller('PhoneListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.phones.length).toBe(3);
  });
});
