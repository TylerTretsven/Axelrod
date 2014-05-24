/**
 * Test suite for the Payoff Module
 * */

'use strict';

var should = require('should'),

  // Note: constructor is PayoffMatrix(t, r, p, s)
  PayoffMatrix = require('../lib/payoff');

describe("Payoff Matrix", function() {

  // Test for valid payoffs
  it("should not throw an exception for invalid payoffs", function() {

    (function () {
      var validPayoffs1 = new PayoffMatrix(4, 3, 2, 1);
    }).should.not.throw();

    (function() {
      var validPayoffs2 = new PayoffMatrix(3, 2, 1, 0);
    }).should.not.throw();

    (function() {
      var validPayoffs3 = new PayoffMatrix(3.535, 2.345, 1, 0.8);
    }).should.not.throw();

  });

  // Test for invalid payoffs
  it("should throw an exception for valid payoffs", function() {

    // Doesn't follow t > r > p > s pattern
    (function() {
      var invalidPayoffs1 = new PayoffMatrix(4, 3, 1, 2);
    }).should.throw();

    // Are equal
    (function() {
      var invalidPayoffs2 = new PayoffMatrix(4, 4, 4, 4);
    }).should.throw();

    // Are Negative
    (function() {
      var invalidPayoffs3 = new PayoffMatrix(-1, -2, -3, -4);
    }).should.throw();

  });


  // Test for invalid moves
  it('should return the correct payoffs', function() {

    // Payoff Matrix matrix values
    var
      t = 4,
      r = 3,
      p = 2,
      s = 1;

    var payoffs = new PayoffMatrix(t, r, p, s);

    payoffs.getPayoff("C", "C").should.equal(r);
    payoffs.getPayoff("C", "D").should.equal(s);
    payoffs.getPayoff("D", "C").should.equal(t);
    payoffs.getPayoff("D", "D").should.equal(p);

  });

  it('should fail with invalid arguments', function() {

    (function() {
      var payoffs = new PayoffMatrix(4, 3, 2, 1);
      payoffs.getPayoff("C", "s");
    }).should.throw();

    (function() {
      var payoffs = new PayoffMatrix(4, 3, 2, 1);
      payoffs.getPayoff("d", "D");
    }).should.throw();

  });

});