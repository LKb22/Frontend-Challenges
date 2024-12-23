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
