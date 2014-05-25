/**
 * Match Object
 *
 * Plan:
 * > Conducts one round between two agents.
 * > Requirements:
 *
 *  1) Must take the two agents and the payoff matrix as inputs.
 *  2) Must call Agent.nextMove()
 *  3) Must include a run() function
 *
 * Can I pass the history in as a parameter to nextMove(), i.e., Agent.nextMove(history)
 */

'use strict';

var
  History = require('./history'),
  Agent   = require('./agent');

module.exports = function(agentOneStrategy, agentTwoStrategy, payoffMatrix, rounds) {

  // Instantiate the agents
  var
    agentOne = new Agent(agentOneStrategy),
    agentTwo = new Agent(agentTwoStrategy);

  // Defines each agent's opponent
  agentOne.setOpponent(agentTwo.id());
  agentTwo.setOpponent(agentOne.id());

  // Initialize a history object
  var history = new History(payoffMatrix);

  // Runs the simulation
  var run = function() {
    while (rounds > 0) {

      // Next Turn
      var turn = {};

      // Calculate the next moves and save them to the turn
      turn[ agentOne.id() ] = agentOne.nextMove(history);
      turn[ agentTwo.id() ] = agentTwo.nextMove(history);

      // Add the turn to the history
      history.store(turn);

      rounds--;
    }

    // After simulation, outputs the history
    return getScores();
  };

  var getScores = function() {
    var results = 'Player One:\n' +
           '  strategy: ' + agentOne.strategy() + '\n' +
           '  Score: ' + history.getScoreOf(agentOne) + '\n' +
           '\n' +
           'Player Two\n' +
           '  strategy: ' + agentTwo.strategy() + '\n' +
           '  Score: ' + history.getScoreOf(agentTwo);

    console.log(results);
    return results;
  };

  return {
    run: run
  }

};