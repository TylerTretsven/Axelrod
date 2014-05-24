/**
 * The basic Agent object
 *
 * This defines a default nextMove in which the agent cooperates
 * or defects with equal probability
 * */

'use strict';

var AGENT_ID = 0;

// Agent Constructor
module.exports = function(strategy) {

  // Retrieve the strategy
  var
    _strategy   = strategy,
    getStrategy = function() { return _strategy },
    nextMove    = require('../strategies/' + _strategy);

  // Sets a unique id for the agent; this is used for organizing the history
  var
    _id   = ++AGENT_ID,
    getId = function() { return _id };

  // Sets a reference for the opponent; used for accessing the history
  var
    _opponent   = undefined,
    setOpponent = function(oppID) { _opponent = oppID; },
    getOpponent = function()      { return _opponent; };

  return {

    // Public API
    nextMove:    nextMove,
    id:          getId,
    opponent:    getOpponent,
    setOpponent: setOpponent,
    strategy:    getStrategy
  }
};