/**
 * Defines the PAYOFF MATRIX:
 * the benefits of either cooperating or defecting.
 *
 * ===========================================================
 *
 * Payoff Matrix:
 *               P2
 *       __________________
 *      |     |     |     |
 *      |     |  C  |  D  |
 *      |_____|_____|_____|
 *      |     |     |     |
 *  P1  |  C  | R,R | S,T |
 *      |_____|_____|_____|
 *      |     |     |     |
 *      |  D  | T,S | P,P |
 *      |_____|_____|_____|
 *
 * Where:  T > R > P > S
 * Or:     Temptation > Reward > Punishment > Sucker
 *
 * ===========================================================
 *
 * Creates a Payoff Matrix object, with which each player calculates
 * their score with reference to the other move:
 *
 * e.x.:
 *
 *   pm.getPayoff("C", "D"); ==> S
 *   pm.getPayoff", "C"); ==> T
 *
 */


'use strict';

module.exports = function(t, r, p, s) {

  // Tests for a valid payoff matrix
  if( t < r ||
      r < p ||
      p < s ) {
    throw "Invalid Payoff Matrix";
  }

  // Payoffs
  var payoffs = {
    "C": {
      "C": r,
      "D": s
    },
    "D": {
      "C": t,
      "D": p
    }
  };

  // Function that returns a payoff
  this.getPayoff = function(playerMove, opponentMove){

    // Retrieve payoff from Payoff Matrix
    var p = payoffs[playerMove][opponentMove];

    // If defined, return PO, if not, console
    if (p) {
      return p
    } else {
      throw 'Invalid set of moves';
    }
  };
};