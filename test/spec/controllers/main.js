'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('spa1App'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //console.log(scope);
    //expect(scope.educators.resultcount.total).toBe(89);
    expect(scope.awesomeThings.length).toBe(3);
  });
});
