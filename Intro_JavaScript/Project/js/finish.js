/* Time over function
Time over function to add the time over message
  Select the timeOver element and add the visible class to display the message
*/
// Time over function
const timeOver = () => {
  // Select the timeOver element and add the visible class
  document.querySelector("#timeOver").classList.add("visible");
};

/* Game over function
Game over function to add the game over message
  Clear the stopwatch
  Select the gameOver element and add the visible class to display the message
*/
// Game over function
const gameOver = () => {
  // Clear the stopwatch
  clearInterval(stopwatch);
  // Select the gameOver element and add the visible class
  document.querySelector("#gameOver").classList.add("visible");
};

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

/* Rest to welcome function
*/
// reset to welcome function
const resetToWelcome = () => {
  ["#endGame", "#timeOver", "#gameOver", "#nextLevel"].forEach(selector => {
    document.querySelector(selector).classList.remove("visible");
  });
};
