// Create a guessing game using 'cards'
// Create a deck of cards
// Deal the cards
// Guess the cards by clicking on them
// Check the guess for a match


// Create a deck of cards
// The deck of cards will be an array of emojis, each card being one emoji

// Create a function to generate an array of 15 random emojis
// Emojis use unicode values
// Define the range / set the starting and ending unicode values for the range of emojis
// Create an array to store the emojis
// For each code point in the range, convert the code point to an emoji and add it to the array
// Calculate the number of code points in the range, add + 1 to include the last code point
// Iterate over the unicode values within the range using Array.from()
// For each index in the range, convert the code point to an emoji using String.fromCodePoint()
// Add emojiRange[0] to convert the result to start from the first code point in the range
// Shuffle/Randomize the array of emojis using the Fisher-Yates algorithm
// Slice the arrray to get the first 15 emojis from the shuffled array
// Duplicate the array to get 2 of each emoji for the matching game
// Combine the duplicates using the array spread syntax, which is used to copy an array into a new array, combine arrays, or insert elements into an array
// Reshuffle the array of emojis
// Return the shuffled array of emojis

function createCardGroup() {
  const emojiRange = [0x1F600, 0x1F64F];
  const emojiArray = Array.from(
    { length: emojiRange[1] - emojiRange[0] + 1 },
    (_, i) => String.fromCodePoint(emojiRange[0] + i)
  );

  const fisherYatesShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  const shuffledEmojis = fisherYatesShuffle(emojiArray);
  const selectedEmojis = shuffledEmojis.slice(0, 15);
  const duplicatedEmojis = [...selectedEmojis, ...selectedEmojis];
  const finalShuffledEmojis = fisherYatesShuffle(duplicatedEmojis);

  return finalShuffledEmojis
}
console.log(createCardGroup());


// Deal the cards
// Create a function to deal the cards
// The cards will be dealt into the table div
// Clear the table div before adding the cards
// Each emoji in the finalShuffledEmojis array will be added to a card div
// Iterate over the finalShuffledEmojis array using forEach()
// For each emoji in the array, create a card div element
// Use two divs for each card for styling, an inner and outer div
// Add the emoji to the inner card div
// Append the card div to the table div

function dealCards() {
  const table = document.getElementById('table');
  table.innerHTML = '';
  const emojis = createCardGroup();
  emojis.forEach((emoji) => {
    const card = document.createElement('div');
    card.innerHTML =
      "<div class='card'>" +
      "<div class='card_content'>" +
      emoji +
      "</div>" +
      "</div>";

    table.appendChild(card);
  });
}


// Guess the cards by clicking on them
// Add an event listener to each card div to listen for a click event
// When a card is clicked, the card will be flipped over to reveal the emoji
// Create a function to flip the card
// In the function, add a class to the card div to flip it over
// Add the styling to flip the card using CSS 'card.revealed'
// Call this function when a card is clicked in the event listener

function reveal() {
  this.classList.add("revealed");
}

dealCards();

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', reveal);
});
