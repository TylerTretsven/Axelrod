/**
 * Match function
 * */

var Agent = require('./agent');

module.exports = function(strategyOne, strategyTwo, payoffMatrix) {

  strategyOne = require('./strategies/' + strategyOne);
  strategyTwo = require('./strategies/' + strategyTwo);

  var agent1 = new Agent(strategyOne),
      agent2 = new Agent(strategyTwo);

  var scores = [];

  var Round = function(p1Move, p2Move) {

    this.p1 = p1Move;
    this.p2 = p2Move;



  }

};