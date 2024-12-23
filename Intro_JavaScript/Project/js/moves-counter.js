/* Create the Moves Counter
Create the Moves Counter
  Create the updateCounter function
    Increment the move counter
    Limit the number of moves
    Use double digits
    Update the display
  Create the maxCounter function
    Retrieve the number of moves
    Use double digits
    Update the display
*/

/* Create the updateCounter function
Create a function to track and update the number of moves
  The function will run once per move
  Initialize the number of moves variable
  Initialize the variable to display the number of moves
  Increment the number of moves by one each time the function runs
  Update the display variable with the number of moves
*/
const updateCounter = () => {
  // Initialize the number of moves variable
  let movesText;
  // Increment the number of moves by one each time the function runs
  Game.moves++;
  // Update the display variable with the number of moves
  movesText = Game.moves;
  // Log the information to the console
  if (Game.debug) console.log("Current number of moves", Game.moves);
  if (Game.debug) console.log("Relax mode activated?:", Game.modeRelax);
  if (Game.debug) console.log("Current level:", Game.levelActual + 1);
  if (Game.debug) console.log("Max moves allowed:", Game.levels[Game.levelActual].movesMax);
  // Limit the number of moves
  if (Game.moves > Game.levels[Game.levelActual].movesMax && !Game.modeRelax) {
    // Call the gameOver function if the number of moves exceeds the limit
    gameOver();
    // Exit the function
    return;
  };
  /* Use double digits
  Use double digits for the moves display
    Handle the formatting for a double-digit display
    If the moves are less than 10, add a leading zero
    Use if statements to add the leading zero
    Update the moves in the display using innerText
  */
  // Create the if statements
  // If the moves are less than 10, add a leading zero
  if (Game.moves < 10) {
    movesText = "0" + Game.moves;
  };
  // Update the moves in the display using innerText
  document.querySelector("#mov").innerText = movesText;
};
