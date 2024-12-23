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
