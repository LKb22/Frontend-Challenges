function discover() {
  let opened;
  let cardsPending;
  // Get all currently revealed cards that are not yet marked as correct
  let totalOpened = document.querySelectorAll(
    ".discovered:not(.correct)"
  );
  // Log the click event
  console.log("Card clicked!");
  // If two cards are already opened, do nothing
  if (totalOpened.length > 1) {
    return;
  }
  // Reveal the clicked card by adding the "discovered" class to flip it
  this.classList.add("discovered");
  // Log the flipped card and the total number of unmatched flipped cards
  console.log("Card flipped", this);
  console.log("Total unmatched flipped:", totalOpened.length + 1,);
  // Play the card click sound for only the first card in a pair
  if (totalOpened.length === 0) {
    document
      .querySelector("#sound-card")
      .cloneNode()
      .play();
  }
  // If less than two unmatched cards are flipped, do nothing (do not proceed to compare)
  // Get all currently revealed cards that are not yet marked as correct
  opened = document.querySelectorAll(".discovered:not(.correct)");
  // If less than two unmatched cards are flipped, do nothing
  if (opened.length < 2) {
    return;
  }
  // Else, compare the two flipped cards
  // Log the card comparison
  console.log("Comparing cards:", opened);
  // Call the compare function to compare the two flipped cards
  compare(opened);
  // Update the counter (one move is made after every two cards are flipped)
  updateCounter();
  // Get all currently revealed cards that are not yet marked as correct
  cardsPending = document.querySelectorAll(".card:not(.correct)");
  // If all cards are matched, finish the game
  if (cardsPending.length === 0) {
    setTimeout(finish, 1000);
  }
}

/* Function to compare two flipped cards
Create a function to compare the two flipped cards.
  The function should take an array of two flipped cards as an argument (opened)
  If the two flipped cards are the same, pass them to the success function.
  Else, pass them to the error function.
*/
// Compare function
function compare(cardsCompare) {
  // Get the cards by their index and compare them using the "valor" attribute
  if (
    cardsCompare[0].dataset.valor === cardsCompare[1].dataset.valor
  ) {
    // Same - success
    success(cardsCompare);
    // Else - error
  } else {
    error(cardsCompare);
  }
}
