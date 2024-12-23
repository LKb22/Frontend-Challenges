/* Restart function
Create the restart function to reset the game
  Reset the current level to the first level
  Update the level display
  Start the game again
*/
// Create the restart function to reset the game
const restart = () => {
  // Reset the current level to the first level
  Game.levelActual = 0;
  // Update the level display
  updateLevel();
  // Start the game again
  start();
};
