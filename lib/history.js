/**
 *  History Module
 *
 * Plan:
 *  > The history module will store the past moves of each player as well as provide
 *    an API for accessing past turns.
 *  > Each agent's nextMove will have a reference to a history instance passed into it.
 */

'use strict';

module.exports = function(payoffMatrix) {

  // Turn History
  var
    _history = [],
    lastTurn = function() {
      return _history.length - 1;
    };

  // Pushes a turn the the history array
  var store = function(turn) {
    _history.push(turn);
  };


  /**
   * Retrieval Functions
   * */

  // Retrieves a turn from the history array
  // Use negative numbers to access past turns, i.e., last turn is -1
  var get = function(turn) {
    return _history[_history.length + turn];
  };

  var getLast = function() {
    return get(-1);
  };

  var getRound = function() {
    return _history.length + 1;
  };

  // Game Records
  var getScoreOf = function(player) {

    // Players final score
    var playerScore = 0;

    for (var i = 0; i < _history.length; i++) {

      var
        playerMove   = _history[i][player.id()],
        opponentMove = _history[i][player.opponent()];

//      console.log('player move: ' + playerMove + '\n opponent move: ' + opponentMove + '\n');

      playerScore += payoffMatrix.getPayoff(playerMove, opponentMove);
    }

    return playerScore;
  };

  var getHistory = function() { return _history };

  return {
    store:       store,
    get:         get,
    getLast:     getLast,
    getHistory:  getHistory,
    getScoreOf:  getScoreOf,
    getRound:    getRound
  }
};