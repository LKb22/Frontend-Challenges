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

  if (moves > levels[levelActual].movesMax && !modeRelax) {
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
    movesText = "0" + moves;
  }
  document.querySelector("#mov").innerText = movesText;
}
/* Create the maxCounter function
Create the maxCounter function to set the maximum number of moves for each level
  Add a move limit for each level
    Retrieve the maximum number of moves for the current level
    Use double digits
    Update the display
*/
function maxCounter() {
  let movesMaxText = levels[levelActual].movesMax;
  if (movesMaxText < 10) {
    movesMaxText = "0" + movesMaxText;
  }
  document.querySelector("#mov-total").innerText = movesMaxText;
}
