/* Guess the cards
Guess the cards by clicking on them
  Add an event listener to each card div to listen for a click event
  When a card is clicked, the card will be flipped over to reveal the emoji
  Create a function to flip the card
  In the function, add a class to the card div to flip it over
  Add the styling to flip the card using CSS 'card.revealed'
  Call this function when a card is clicked in the event listener
  Check the guess for a match
  First one card is flipped
  Then, the second card is flipped
  No more than two unmatched cards can be flipped at a time
  So, we need to check if only one or two unmatched cards have been flipped
  Create a variable to track the unmatched, flipped cards
  Check if more than one unmatched card is flipped
  If so, stop further actions (no additional cards can be flipped) until the two flipped cards are checked for a match
  If not/only one card is flipped, allow the user to flip another card
*/
// Function to handle card flipping
function flip() {
  // Get all currently revealed cards that are not yet marked as correct
  const totalFlipped = document.querySelectorAll('.revealed:not(.correct)');
  console.log("Card clicked.");

  // If two cards are already revealed, do nothing
  if (totalFlipped.length > 1) {
    return;
  }

  // Reveal the clicked card
  this.classList.add('revealed');
  console.log("Card flipped. Total:", totalFlipped.length + 1, this);

  // Re-check the flipped cards after the new one is revealed
  const updatedFlipped = document.querySelectorAll('.revealed:not(.correct)');
  console.log("Added card to flipped cards Array:", updatedFlipped);

  // If two cards are revealed, compare them
  if (updatedFlipped.length === 2) {
    console.log("Comparing cards...");
    compare(updatedFlipped);
  }
}
