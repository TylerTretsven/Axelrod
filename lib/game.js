/**
 *
 *
 * */

'use strict';

module.exports = function(config) {
  // Import Modules
  var
    Match        = require('./match'),
    PayoffMatrix = require('./payoff');

// Create a new payoff matrix
  var payoffs = new PayoffMatrix(
    config.payoffs["C:C"],
    config.payoffs["D:D"],
    config.payoffs["D:C"],
    config.payoffs["C:D"]
  );

// Create a new Match
  var match = new Match(
    config.agentOneStrategy,
    config.agentTwoStrategy,
    payoffs,
    config.rounds
  );

// Run the simulation
  match.run();
};