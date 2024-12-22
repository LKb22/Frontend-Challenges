/* Functions to increment, change, update, load, and reset levels
Create a function to change the level
  Increment the level by one
Create a function to update the level text
  If the level is less than 10, add a leading zero
  Update the level text to the current level
Create a function to load a new level
  Call the nextLevel function to increment the level
  Call the updateLevel function to update the level text
  Call the start function to start the game
Create a function to reset the level
  Set the level to 0
  Call the updateLevel function to update the level text
*/
// Level changer function
const nextLevel = () => {
  // Increment the level by one
  levelActual++;
};

// Update level function
const updateLevel = () => {
  // If the level is less than 10, add a leading zero
  let levelText = levelActual + 1;
  if (levelText < 10) {
    levelText = `0${levelText}`;
  }
  // Update the level text to the current level
  document.querySelector("#level").innerText = levelText;
};

// Load new level function
const loadNewLevel = () => {
  // Call the nextLevel function to increment the level
  nextLevel();
  // Call the updateLevel function to update the level text
  updateLevel();
  // Call the start function to start the game
  start();
};

// Reset level function
const resetLevel = () => {
  // Set the level to 0
  levelActual = 0;
  // Call the updateLevel function to update the level text
  updateLevel();
};

/* Function to go back to welcome screen
Create a function to go back to the welcome screen when the menu button is clicked
  Use the menu button in the modals and in the levels menu

*/
// Back to welcome function
const backToWelcome = () => {
  // Select the welcome element
  const welcomeElement = document.querySelector("#welcome");
  // Add the class "visible" to the welcome element
  welcomeElement.classList.add("visible");
  // Call the hideMenuLevels function to hide the levels menu
  hideMenuLevels();
  // Clear the interval for the stopwatch
  clearInterval(stopwatch);
  // Call the resetLevel function to reset the level to 0
  resetLevel()
  // Remove the class "visible" from the modals
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#nextLevel").classList.remove("visible");
  // Add the class "hidden" to the table element
  document.querySelector("#table").classList.add("hidden");
};

/* Menu buttons functionality
Attach the back-to-welcome functionality to all ".menu" buttons
  Select all the elements with the class "menu"
  For each element with the class "menu"
    Add an event listener for the click event
      Log the element clicked
      Call the backToWelcome function
*/
// Menu buttons functionality
// Select all the elements with the class "menu"
document.querySelectorAll(".menu").forEach(element => {
  // For each element with the class "menu"
  // Add an event listener for the click event
  element.addEventListener("click", event => {
    // Log the element clicked
    console.log(element);
    console.log("Menu button clicked:", event.target);
    // Call the backToWelcome function
    backToWelcome();
  });
});
