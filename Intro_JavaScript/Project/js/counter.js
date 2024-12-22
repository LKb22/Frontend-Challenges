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
  moves++;
  // Update the display variable with the number of moves
  movesText = moves;
  // Log the information to the console
  console.log("Current number of moves", moves);
  console.log("Relax mode activated?:", modeRelax);
  console.log("Current level:", levelActual + 1);
  console.log("Max moves allowed:", levels[levelActual].movesMax);
  // Limit the number of moves
  if (moves > levels[levelActual].movesMax && !modeRelax) {
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
  if (moves < 10) {
    movesText = "0" + moves;
  };
  // Update the moves in the display using innerText
  document.querySelector("#mov").innerText = movesText;
};

/* Create the maxCounter function
Create the maxCounter function to set the maximum number of moves for each level
  Add a move limit for each level
    Retrieve the maximum number of moves for the current level
    Use double digits
    Update the display
*/
// Create the maxCounter function
const maxCounter = () => {
  // Retrieve the maximum number of moves for the current level
  let movesMaxText = levels[levelActual].movesMax;
  // Use double digits if the number of moves is less than 10
  if (movesMaxText < 10) {
    movesMaxText = "0" + movesMaxText;
  };
  // Update the display using innerText
  document.querySelector("#mov-total").innerText = movesMaxText;
};
