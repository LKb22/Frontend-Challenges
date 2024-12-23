/* Funciton for successful match
Create a function to be called when a match is found
  For both cards in the array of matched cards, add the class "correct"
  Play the sound effect for a correct match
*/
// Success function
const success = (theCards) => {
  // Log the success
  if (Game.debug) console.log("Match found! Removing matched cards...");
  // Add the class "correct" to both cards in the array
  theCards.forEach(element => {
    element.classList.add("correct");
  });
  // Play the sound effect for a correct match
  document.querySelector("#sound-correct").play();
};

/* Function for unsuccessful match
Create a function to be called when a match is not found
  Log the error
  For both cards in the array of matched cards, add the class "error"
  Play the sound effect for an incorrect match
  Flip cards back after a one second delay
    Remove the class "discovered" from both cards
    Remove the class "error" from both cards
*/
// Error function
const error = (theCards) => {
  // Log the error
  if (Game.debug) console.log("No match! Flipping back over...");
  // Add the class "error" to both cards in the array
  theCards.forEach(element => {
    element.classList.add("error");
  });
  // Play the sound effect for an incorrect match
  document.querySelector("#sound-incorrect").play();
  // Flip cards back after a one second delay using setTimeout
  setTimeout(() => {
    // For each card in the array
    theCards.forEach(element => {
      // Remove the class "discovered"
      element.classList.remove("discovered");
      // Remove the class "error"
      element.classList.remove("error");
    });
    // After one second delay
  }, 1000);
};
