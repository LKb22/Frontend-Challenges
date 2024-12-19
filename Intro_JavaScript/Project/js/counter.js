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
function updateCounter() {
  let movesText;
  moves++;
  movesText = moves;
  /* Add a move limit for eaach level
  Add a move limit for each level
    If the game is in game mode (not relax mode) and the number of moves exceeds the limit for the current level, game over
    Use return to stop the game and prevent further actions
    Otherwise, continue the game
  */
  if (moves > levels[currentLevel].maxMoves && !relaxMode) {
    console.log("Game Over");
    gameOver();
    return;
  }
  /* Use double digits
  Use double digits for the moves display
    Handle the formatting for a double-digit display
    If the moves are less than 10, add a leading zero
    Use if statements to add the leading zero
    Update the moves in the display using innerText
  */
  // Create the if statements
  if (moves < 10) {
    movesText = `0${moves}`;
  }
   // Update the moves in the display
   document.querySelector("#moves").innerText = movesText;

/* Create the maxCounter function
Create the maxCounter function to set the maximum number of moves for each level
  Add a move limit for each level
    Retrieve the maximum number of moves for the current level
    Use double digits
    Update the display
*/
function maxCounter() {
  let maxMovesText = levels[currentLevel].maxMoves;
  /* Use double digits
  Use double digits for the max moves display
    Handle the formatting for a double-digit display
    If the moves are less than 10, add a leading zero
    Use if statements to add the leading zero
    Update the moves in the display using innerText
  */
  // Create the if statements
  if (maxMovesText < 10) {
    maxMovesText = `0${maxMovesText}`;
  }
   // Update the moves in the display
   document.querySelector("#total-moves").innerText = maxMovesText;
}
}
