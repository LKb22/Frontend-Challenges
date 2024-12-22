/* Add all of the game's logic to the frontend
  Call the writeLevels function to create the levels
  Add all of the functions to the frontend for the game to work
    Select and assign click events to the buttons
    Add all of the respective functions
*/
// Call the writeLevels function to create the levels
writeLevels();

// Initialize normal mode
document
  .querySelector("#mode-normal")
  .addEventListener("click", initiateModeNormal);

// Initialize relax mode
document
  .querySelector("#mode-relax")
  .addEventListener("click", initiateModeRelax);

// Initialize the open levels menu
document
  .querySelector("#control-level")
  .addEventListener("click", sampleMenuLevels);

// Initialize the close levels menu
document
  .querySelector("#close-levels")
  .addEventListener("click", hideMenuLevels);

// Initialize the change levels function
document
  .querySelectorAll(".level").forEach(element => {
  element.addEventListener("click", changeLevel);
});

// Initialize the next level function
document.querySelector("#next").addEventListener("click", loadNewLevel);

// Initialize the close menu on click outside function
document.querySelector("body").addEventListener("click", clickOutOfMenu);

// Initialize the close menu on escape key function
document.addEventListener("keydown", EscKeyCloseMenu);

// Show the welcome screen on page load
document.querySelector("#welcome").classList.add("visible");

// Initialize the restart function
document.querySelectorAll(".restart").forEach(element => {
  element.addEventListener("click", restart);
});

// Initialize the menu function
document.querySelectorAll(".menu").forEach(element => {
  element.addEventListener("click", backToWelcome);
});
