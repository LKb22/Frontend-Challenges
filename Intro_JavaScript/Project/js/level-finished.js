/* Level finished function
Create a function to handle the end of each level
  Clear the stopwatch interval
  If the current level is not the last level, show the "Next Level" button
  Else, show the "End Game" button
*/
// End game function
const finish = () => {
  // Clear the stopwatch interval
  clearInterval(stopwatch);
  // Check if the current level is (not) the last
  if (levelActual < levels.length - 1) {
    // If not, add next level message
    document.querySelector("#nextLevel").classList.add("visible");
    // Else, if so, add end game message
  } else {
    document.querySelector("#endGame").classList.add("visible");
  };
};
