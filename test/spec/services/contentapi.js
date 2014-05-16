'use strict';

describe('Service: Contentapi', function () {

  // load the service's module
  beforeEach(module('spa1App'));

  // instantiate service
  var Contentapi;
  beforeEach(inject(function (_Contentapi_) {
    Contentapi = _Contentapi_;
  }));

  it('should do something', function () {
    expect(!!Contentapi).toBe(true);
  });

});
