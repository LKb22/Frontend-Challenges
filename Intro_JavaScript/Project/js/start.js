/* Create a guessing game
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
    Pass the number of cards to deal to the dealCards() function from the levels object using the levelActual variable based on the current level
  Call the maxCounter() function to check and set the maximum number of moves for the current level
  Hide the welcome page, menu, and modals
    Hide the welcome page
    Hide select level menu
    Hide the level up modal
    Hide the game over modal
    Hide the time over modal
    Hide the end game modal
  Show the table
  Add click event listener to each card
    Pass the discover function to the click event listener to give the cards their functionality
  Start and unhide the timer if the game is not in relax mode
    Else, hide the timer
  Toggle the header visibility for the weclome page and cards table
*/
// Create the start function to initialize the game
const start = () =>{
  // Set the move counter to 0
  moves = 0;
  // Set the move display to 00
  document.querySelector("#mov").innerText = "00";
  // Call the dealCards() function
  dealCards(levels[levelActual].cards);
  // Call the maxCounter() function
  maxCounter();
  // Hide the welcome page, menu, and modals
  ["#welcome", ".select-level", "#endGame", "#timeOver", "#gameOver", "#nextLevel"].forEach(selector => {
    document.querySelector(selector).classList.remove("visible");
  });
  // Show the table
  document.querySelector("#table").classList.remove("hidden");
  // Add click event listener to each card
  document.querySelectorAll(".card").forEach(element => {
    element.addEventListener("click", discover);
  });
  // If the game is not in relax mode
  if (!modeRelax) {
    // Start the timer
    initiateStopwatch();
    // Unhide the timer
    document.querySelector("#stopwatch").classList.remove("stopwatch-hidden");
    // Else, hide the timer
  } else {
    document.querySelector("#stopwatch").classList.add("stopwatch-hidden");
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

/* Normal Mode
Create the normal game mode function
  Set to normal game mode (relax mode false)
  Hide the level control modal
  Start the game
*/
// Create the normal game mode function
const initiateModeNormal = () => {
  // Set to normal mode
  modeRelax = false;
  // Hide the level control modal
  document.querySelector(".control-level").classList.add("control-hidden");
  // Start the game
  start();
};

/* Relax Mode
Create the relax game mode function
  Set to relax game mode (relax mode true)
  Add the level control modal
  Start the game
*/
// Create the relax game mode function
const initiateModeRelax = () => {
  // Set to relax mode
  modeRelax = true;
  // Add the level control modal
  document.querySelector(".control-level").classList.remove("control-hidden");
  // Start the game
  start();
};

/* Toggle header visibility
Create the toggleHeaderVisibility function to toggle the header visibility
  Get the header and welcome page elements
  If the welcome page is visible, hide the header
  Else, show the header
*/
// toggleHeaderVisibility function
const toggleHeaderVisibility = () => {
  // Get the header and welcome page elements
  const header = document.querySelector('.header');
  const welcomePage = document.querySelector('.welcome');
  // If the welcome page is visible, hide the header
  if (welcomePage.classList.contains('visible')) {
    header.classList.add('header-hidden');
  // Else, show the header
  } else {
    header.classList.remove('header-hidden');
  };
};
