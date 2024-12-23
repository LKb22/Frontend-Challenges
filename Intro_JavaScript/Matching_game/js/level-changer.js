/* Functions to increment, change, update, load, and reset levels
Create a function to increment the level
  Increment the level by one
Create a function to change the current Level
  Retrieve the level number from the button data attribute
  Update the current level to the selected level
  Update the level display
  Start the game with the new level
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
  Game.levelActual++;
};

// Create the level change function
function changeLevel() {
  // Retrieve the level number from the button data attribute
  let level = parseInt(this.dataset.level);
  // Update the current level to the selected level
  Game.levelActual = level;
  // Update the level display
  updateLevel();
  // Update the level display
  start();
};

// Update level function
const updateLevel = () => {
  // If the level is less than 10, add a leading zero
  let levelText = Game.levelActual + 1;
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
  Game.levelActual = 0;
  // Call the updateLevel function to update the level text
  updateLevel();
};
