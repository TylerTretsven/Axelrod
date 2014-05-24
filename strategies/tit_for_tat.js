
/**
 * Tit for Tat strategy
 *
 * Starts with cooperation, then returns the last move of the opponent.
 * */
module.exports = function(history) {

  if(history.getRound() === 1){

    // Initially Cooperates
    return "C";
  } else {

    // Reciprocates the opponent's last move
    return history.get(-1)[ this.opponent() ];
  }

};