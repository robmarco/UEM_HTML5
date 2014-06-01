'use strict';

describe('Service: Marvelservice', function () {

  // load the service's module
  beforeEach(module('p3App'));

  // instantiate service
  var Marvelservice;
  beforeEach(inject(function (_Marvelservice_) {
    Marvelservice = _Marvelservice_;
  }));

  it('should do something', function () {
    expect(!!Marvelservice).toBe(true);
  });

});
