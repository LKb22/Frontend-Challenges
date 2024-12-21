/* Check for a match
Compare the two flipped cards for a match
  Create a function to check for a match
  The array of flipped cards contains two cards
  Compare the cards by their indexes and data-value attributes
  If the cards match, mark them as matched with another function
  If the cards do not match, flip them back over with another function
  The array is a function scope variable, so we cannot access it outside of the function
  Call the function and pass it the array as an arguement in the flip function
*/
// Function to compare two flipped cards
function compare(totalFlipped) {
  const [card1, card2] = totalFlipped;
  const value1 = card1.dataset.value;
  const value2 = card2.dataset.value;

  console.log("Card 1 value:", value1);
  console.log("Card 2 value:", value2);

  if (value1 === value2) {
    console.log("Match found! Removing matched cards...");
    totalFlipped.forEach((card) => {
      card.classList.add('correct');
      document.querySelector("#sound-correct").play();
    });
  } else {
    console.log("No match! Flipping back over...");
    totalFlipped.forEach((card) => {
      card.classList.add('incorrect');
      document.querySelector("#sound-incorrect").play();
    });

    // Flip cards back after a short delay
    setTimeout(() => {
      totalFlipped.forEach((card) => {
        card.classList.remove('revealed', 'incorrect');
      });
    }, 1000);
  }
}
