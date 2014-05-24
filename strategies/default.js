/**
 * Default Strategy:
 * > Randomly cooperates or defects
 * */

module.exports = function(history){

  // Probability of cooperation
  var p = Math.random();

  // Return the move
  return (p >= 0.5 ? "C" : "D");
};