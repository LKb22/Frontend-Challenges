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
