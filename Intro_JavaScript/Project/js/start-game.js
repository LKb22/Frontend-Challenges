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
const start = () => {
  // Set the move counter to 0
  Game.moves = 0;
  // Set the move display to 00
  document.querySelector("#mov").innerText = "00";
  // Call the dealCards() function
  dealCards();
  // Call the maxCounter() function
  maxCounter();
  // Hide the welcome page, menu, and modals
  ["#welcome", ".select-level"].forEach(selector => {
    document.querySelector(selector).classList.remove("visible");
  });
  resetToWelcome();
  // Show the table
  document.querySelector("#table").classList.remove("hidden");
  // Add click event listener to each card
  document.querySelectorAll(".card").forEach(element => {
    element.addEventListener("click", discover);
  });
  // If the game is not in relax mode
  if (!Game.modeRelax) {
    // Start the timer
    initiateStopwatch();
    // Unhide the timer
    document.querySelector("#stopwatch").classList.remove("stopwatch-hidden");
    // Else, hide the timer
  } else {
    document.querySelector("#stopwatch").classList.add("stopwatch-hidden");
  };
};
