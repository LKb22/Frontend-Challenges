/* Function to reveal cards (discover)
Create a function to reveal cards
  Get all the cards on the table that are discovered but not yet marked as correct
  If two cards are already opened, return (do not proceed/allow to flip more cards)
  Otherwise, reveal the clicked card by adding the "discovered" class to flip it
    Add the audio on the click event for the first card (meaning no cards are flipped yet)
  Re-query all currently revealed cards that are not yet marked as correct
  If less than two unmatched cards are flipped, return (do not proceed to compare)
  Otherwise, compare the two flipped cards using the compare function
  Update the counter (one move is made after every two cards are flipped)
  Check to see if that was the last cards
    Get all the revealed cards on the table that are not yet marked as correct
    If all cards are matched (there are no cards missing the 'correct class')
      Finish the game, after a one second delay
*/
// Discover function
const discover = function () {
  // Get all currently revealed cards that are not yet marked as correct
  const openedCards = document.querySelectorAll(
    ".discovered:not(.correct)"
  );
  // Log the click event
  console.log("Card clicked!");
  // If two cards are already opened, do nothing
  if (openedCards.length > 1) {
    return;
  };
  // Reveal the clicked card by adding the "discovered" class to flip it
  this.classList.add("discovered");
  // Log the flipped card and the total number of unmatched flipped cards
  console.log("Card flipped", this);
  console.log("Total unmatched flipped:", openedCards.length + 1,);
  // Play the card click sound for only the first card in a pair
  if (openedCards.length === 0) {
    document
      .querySelector("#sound-card")
      .cloneNode()
      .play();
  };
  // Re-query all currently revealed cards that are not yet marked as correct
  const updatedOpenedCards = document.querySelectorAll(".discovered:not(.correct)");
  // If less than two unmatched cards are flipped, return (do not proceed to compare)
  if (updatedOpenedCards.length < 2) {
    return;
  };
  // Else, compare the two flipped cards
  // Log the card comparison
  console.log("Comparing cards:", updatedOpenedCards);
  // Call the compare function to compare the two flipped cards
  compare(updatedOpenedCards);
  // Update the counter
  updateCounter();
  // Get all currently revealed cards that are not yet marked as correct
  const cardsPending = document.querySelectorAll(".card:not(.correct)");
  // If all cards are matched, finish the game
  if (cardsPending.length === 0) {
    setTimeout(finish, 1000);
  };
};

/* Function to compare two flipped cards
Create a function to compare the two flipped cards.
  The function should take an array of two flipped cards as an argument (opened)
  If the two flipped cards are the same, pass them to the success function.
  Else, pass them to the error function.
*/
// Compare function
const compare = (cardsCompare) => {
  // Get the cards by their index and compare them using the "value" attribute
  if (
    cardsCompare[0].dataset.value === cardsCompare[1].dataset.value
  ) {
    // Same - success
    success(cardsCompare);
    // Else - error
  } else {
    error(cardsCompare);
  };
};
