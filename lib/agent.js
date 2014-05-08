/**
 * The basic Agent object
 *
 * This defines a default nextMove in which the agent cooperates
 * or defects with equal probability
 * */

// Imports
var defaultMove = require('../strategies/default');


var Agent = function(nextMove) {

  // Object array of past turns
  var memory = [];

  // Store the last turn in memory
  var storeTurn = function(lastMoves) {
    memory.push(lastMoves);
  };

  // Accesses a specific move by a particular player
  var rememberMove = function(turn, player) {
    return memory[turn][player];
  };

  // Accesses a specific turn
  var rememberTurn = function(turn) {
    return memory[turn];
  };

  return {

    // Public API
    nextMove:  nextMove,
    storeTurn: storeTurn
  }
};

var agent1 = new Agent(defaultMove);

var agent2 = new Agent(function() {
  return "C";
});

console.log(agent1.nextMove());
console.log(agent2.nextMove());