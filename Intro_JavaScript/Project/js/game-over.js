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

/* Level completed function
Level completed function to add the level completed message
  Check if the current level is the last level (use minus 1 to account for the zero-based array)
  If not, select the levelUp element and add the visible class to display the message
  If so, select the endGame element and add the visible class to display the message
*/
function levelCompleted() {
  if (currentLevel < levels.length - 1) {
    document.querySelector("#levelUp").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }
}
