module.exports = function(){

  // Probability of cooperation
  var p = Math.random();

  // Return the move
  return (p >= 0.5 ? "C" : "D");
};