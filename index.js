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

var PrisonersDilemma = require('./lib/game');

// EXAMPLE GAME

// Configure the game
var config = {

  payoffs: {
    "C:C": 3,
    "D:D": 2,
    "D:C": 1,
    "C:D": 0
  },
  agentOneStrategy: "all_c",
  agentTwoStrategy: "tit_for_tat",
  rounds: 1000
};

PrisonersDilemma(config);