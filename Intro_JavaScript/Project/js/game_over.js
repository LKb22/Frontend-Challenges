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
