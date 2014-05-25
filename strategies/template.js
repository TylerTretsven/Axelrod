
/**
 * Define a new strategy
 *
 * To access a specific turn, call
 *
 *   > history.get(n);
 *
 * in which n is a negative number referencing how many turns back.  For example, to
 * retrieve the previous turn, you would call history.get(-1). The previous turn can
 * more easily be accessed using the shortcut function
 *
 *   > history.getLast();
 *
 * * * *
 *
 * Once a previous turn is retrieved, a specific players move can be accessed.
 * Each agent is assigned their own id integer when the match is initialized.  In
 * a two-agent game, these should be 1 and 2.  Each agent saves a reference to their
 * id and that of their opponent.  These ids are used by the history module to save
 * each agents moves.  In order to isolate an individual agents last move when a turn
 * object is retrieved, you can use the id references as keys. For example:
 *
 *   > var lastTurn = history.getLast();                    // =>  { '1': 'C', '2': 'D' }
 *   >
 *   > var agentsLastMove    = lastTurn[ this.id() ]        // Returns the player's last move
 *   > var opponentsLastMove = lastTurn[ this.opponent() ]  // Returns the player's opponent's last move
 *
 * * * *
 *
 * A shortcut to return the opponent's previous move would be to call
 *
 *   > return history.getLast()[ this.opponent() ];
 *
 * */
module.exports = function(history) {

  // Always Cooperates
  return "C";
};