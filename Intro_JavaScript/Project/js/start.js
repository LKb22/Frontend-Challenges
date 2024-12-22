/* Create a guessing
Create a guessing game using 'cards'
    Create a deck of cards using emojis
    Deal the cards to the table div display
    User clicks the cards to match them
    Check the guess for a match
    Increase the number of cards and moves per level
*/

/* Initialize the game
Create the start function to initialize the game
  Set the move counter to 0
  Set the move display to 00
  Call the dealCards() function to deal the cards to the table
  Call the maxCounter() function to set the maximum number of moves for the current level
  Hide the menu and modals
    Hide select level menu
    Hide the level up modal
    Hide the game over modal
    Hide the time over modal
    Hide the end game modal
  Add click event listener to each card
  Start the timer if the game is not in relax mode
    Else, hide the timer
*/
// Create the start function to initialize the game
function start() {
  // Set the move counter to 0
  moves = 0;
  // Set the move display to 00
  document.querySelector("#moves").innerText = "00";
  // Call the dealCards() function
  dealCards();
  // Call the maxCounter() function
  maxCounter();
  // Hide the menu and modals
// Hide the menu and modals
[".select-level", "#levelUp", "#gameOver", "#timeOver", "#endGame"].forEach(selector => {
  document.querySelector(selector).classList.remove("visible");
});
    // Add click event listener to each card
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', flip);
  });
  // Start the timer if the game is not in relax mode
  if (!relaxMode) {
    startTimer();
  } else {
    document.querySelector("#stopwatch").classList.add(".hidden-control");
  }
}

/* Restart function
Create the restart function to reset the game
  Reset the current level to the first level
  Update the level display
  Start the game again
*/
// Create the restart function to reset the game
function restart() {
  // Reset the current level to the first level
  currentLevel = 0;
  // Update the level display
  updatelevel();
  // Start the game again
  start();
}

/* Normal Mode
Create the normal game mode function
  Set to normal game mode (relax mode false)
  Hide the welcome modal
  Start the game
  Hide the level control modal
*/
// Create the normal game mode function
function startNormalMode() {
  // Set to normal mode
  relaxMode = false;
  // Hide the welcome modal
  document.querySelector("#welcome").classList.remove("visible");
  // Start the game
  start();
  // Hide the level control modal
  document.querySelector(".select-level").classList.add(".hidden-control");
}

/* Relax Mode
Create the relax game mode function
  Set to relax game mode (relax mode true)
  Hide the welcome modal
  Start the game
*/
// Create the relax game mode function
function startRelaxMode() {
  // Set to relax mode
  relaxMode = true;
  // Hide the welcome modal
  document.querySelector("#welcome").classList.remove("visible");
  // Start the game
  start();
}
