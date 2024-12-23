/* End game the game
Create a function to end the game
  Clear the stopwatch interval
  If the current level is not the last level, show the "Next Level" button
  Else, show the "End Game" button
*/
// End game function
const finish = () => {
  // Clear the stopwatch interval
  clearInterval(stopwatch);
  // Check if the current level is (not) the last
  if (levelActual < levels.length - 1) {
    // If not, add next level message
    document.querySelector("#nextLevel").classList.add("visible");
    // Else, if so, add end game message
  } else {
    document.querySelector("#endGame").classList.add("visible");
  };
};

/* Restart function
Create the restart function to reset the game
  Reset the current level to the first level
  Update the level display
  Start the game again
*/
// Create the restart function to reset the game
const restart = () => {
  // Reset the current level to the first level
  levelActual = 0;
  // Update the level display
  updateLevel();
  // Start the game again
  start();
};
