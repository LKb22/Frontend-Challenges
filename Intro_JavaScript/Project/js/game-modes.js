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
