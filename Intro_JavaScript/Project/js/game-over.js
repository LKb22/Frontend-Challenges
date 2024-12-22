/* Time over function
Time over function to add the time over message
  Select the timeOver element and add the visible class to display the message
*/
function timeOver() {
  document.querySelector("#timeOver").classList.add("visible");
}

/* Game over function
Game over function to add the game over message
  Clear the timer as well
  Select the gameOver element and add the visible class to display the message
*/
function gameOver() {
  clearInterval(timer);
  document.querySelector("#gameOver").classList.add("visible");
}

/* Funciton to end the game
Create a function to end the game
  Clear the stopwatch interval
  If the current level is not the last level, show the "Next Level" button
  Else, show the "End Game" button
*/
// End game function
function finish() {
  // Clear the stopwatch interval
  clearInterval(stopwatch);
  // Check if the current level is (not) the last
  if (levelActual < levels.length - 1) {
    // If not, add next level message
    document.querySelector("#nextLevel").classList.add("visible");
    // Else, if so, add end game message
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }
}
