/**
 * Test Suite for the Agent model
 * */

var Should = require('should'),
  Agent = require('../lib/agent');

describe("Default Agent", function() {

  var agent;

  beforeEach(function(){

    // Imports the default next move and creates a new agent using
    // the default next move.
    agent = new Agent("default");
  });

  it("should return C or D", function(){

    /**
     * Tests 50 next moves to make sure they're C or D
     * */

    // Create an array of 50 next moves
    var moves = [];
    for (var i = 0; i< 50; i++) {
      moves.push(agent.nextMove());
    }

    // Test that each is C or D
    var isValid = true,

      // Tests for a string with either one C or one D
      re = new RegExp("^[CD]$");

    for (var j = 0; j < moves.length; j++) {

      if( !re.test(moves[j]) ) {
        isValid = false;
        break;
      }
    }

    isValid.should.be.true;
  });
});