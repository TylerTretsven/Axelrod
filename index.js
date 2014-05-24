/**
 * This is an attempted recreation of the Prisoners' Dilemma competition
 * held by Robert Axelrod, and described by Axelrod & Hamilton (1981).
 *
 * On each turn, each participant may either cooperate or defect. The
 * benefits or punishments depend upon what the other participant chooses.
 * Participants will have access only to their own past moves, as well as
 * those of the other.  Each participant will carry out a defined strategy,
 * which they may use their knowledge, as well as employ randomness into
 * their decisions.
 * */

'use strict';

// EXAMPLE MATCH

// Import Modules
var
  Match        = require('./lib/match'),
  PayoffMatrix = require('./lib/payoff');

// Create a new payoff matrix
var payoffs = new PayoffMatrix(4,3,2,1);

// Create a new Match
var match = new Match('default', 'tit_for_tat', payoffs, 1000);
match.run();

// Run the simulation
var results = match.getScores();

console.log(results);