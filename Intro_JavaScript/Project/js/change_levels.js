/* Add Change Levels
Add the change levels function to update the level
  Increment the current level by one
  Update the current level display
    Add a leading zero to have a double-digit display
  Load the next level
    Use the increment, update, and start functions
*/
// Next level function
function nextLevel() {
  currentLevel++;
}
// Update the level function
function updateLevel() {
  let levelText = currentLevel + 1;
  if (levelText < 10) {
    levelText = `0${levelText}`;
  }
  document.querySelector("#level").innerText = levelText;
}

// Load the next level function
function loadNewLevel() {
  nextLevel();
  updateLevel();
  start();
}
