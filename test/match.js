/**
 * Test suite for the Match module
 * */

'use strict';

var should = require('should'),

  // Match Constructor
  Match = require('../lib/match'),

  // Basic Payoff Matrix
  payoffMatrix = require("../lib/payoff")(3, 2, 1, 0);


describe('Match', function() {

  beforeEach(function() {
    var match = new Match("default", "default", payoffMatrix, 100);
  });



});