/**
 * Test suite for the Payoff Module
 * */

'use strict';

var should = require('should'),

  // Note: constructor is Payoffs(t, r, p, s)
  Payoffs = require('../lib/payoffs');

describe("Payoffs", function() {

  // Test for invalid payoffs
  it("should throw an exception for invalid payoffs", function() {

    (function () {
      var validPayoffs = new Payoffs(4, 3, 2, 1);
    }).should.not.throw();

  });

  // Test for valid payoffs
  it("should not throw an exception for valid payoffs", function(){
    (function() {
      var invalidPayoffs = new Payoffs(4, 3, 1, 2);
    }).should.throw();

  });


  // Test for invalid moves
  it('should return the correct payoffs', function() {

    // Payoff matrix values
    var
      t = 4,
      r = 3,
      p = 2,
      s = 1;

    var payoffs = new Payoffs(t, r, p, s);

    payoffs.getPayoff("C", "C").should.equal(r);
    payoffs.getPayoff("C", "D").should.equal(s);
    payoffs.getPayoff("D", "C").should.equal(t);
    payoffs.getPayoff("D", "D").should.equal(p);

  });

});