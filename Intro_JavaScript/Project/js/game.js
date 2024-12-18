/* Create a guessing
Create a guessing game using 'cards'
    Create a deck of cards
    Deal the cards
    Guess the cards by clicking on them
    Check the guess for a match
*/

/* Create a deck of cards
Create a deck of cards
  The deck of cards will be an array of emojis, each card being one emoji
  Create a function to generate an array of 15 random emojis
  Emojis use unicode values
  Define the range / set the starting and ending unicode values for the range of emojis
  Create an array to store the emojis
  For each code point in the range, convert the code point to an emoji and add it to the array
  Calculate the number of code points in the range, add + 1 to include the last code point
  Iterate over the unicode values within the range using Array.from()
  For each index in the range, convert the code point to an emoji using String.fromCodePoint()
  Add emojiRange[0] to convert the result to start from the first code point in the range
  Shuffle/Randomize the array of emojis using the Fisher-Yates algorithm
  Slice the arrray to get the first 15 emojis from the shuffled array
  Duplicate the array to get 2 of each emoji for the matching game
  Combine the duplicates using the array spread syntax, which is used to copy an array into a new array, combine arrays, or insert elements into an array
  Reshuffle the array of emojis
  Return the shuffled array of emojis
  */
// Function to create a shuffled deck of emoji cards
function createCardGroup() {
  const emojiRange = [0x1F600, 0x1F64F]; // Unicode range for emojis

  // Generate an array of emojis from the unicode range
  const emojiArray = Array.from(
    { length: emojiRange[1] - emojiRange[0] + 1 },
    (_, i) => String.fromCodePoint(emojiRange[0] + i)
  );

  // Fisher-Yates Shuffle Algorithm
  const fisherYatesShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle and select 15 random emojis
  const selectedEmojis = fisherYatesShuffle(emojiArray).slice(0, 15);
  console.log("Selected emojis:", selectedEmojis);

  // Duplicate and reshuffle the emojis for the matching game
  const duplicatedEmojis = [...selectedEmojis, ...selectedEmojis];
  console.log("Duplicated and shuffled emojis:", duplicatedEmojis);
  return fisherYatesShuffle(duplicatedEmojis);
}

/* Deal the cards
Deal the cards
  Create a function to deal the cards
  The cards will be dealt into the table div
  Clear the table div before adding the cards
  Each emoji in the finalShuffledEmojis array will be added to a card div
  Iterate over the finalShuffledEmojis array using forEach()
  For each emoji in the array, create a card div element
  Use two divs for each card for styling, an inner and outer div
  Add the emoji to the inner card div
  Use template literals for multi-line string interpolation
  Add the data-value attribute to the card div to store the emoji value, so we can check for matches later on
  Append the card div to the table div
*/
// Function to deal the cards to the table
function dealCards() {
  const table = document.getElementById('table');
  table.innerHTML = ''; // Clear existing cards

  const emojis = createCardGroup();
  emojis.forEach((emoji) => {
    const card = document.createElement('div');
    card.innerHTML = `
      <div class='card' data-value='${emoji}'>
        <div class='card_content'>
          ${emoji}
        </div>
      </div>
    `;
    table.appendChild(card);
    console.log("Cards added", card.index);
  });

  // Add click event listener to each card
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', flip);
  });
}

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
    });
  } else {
    console.log("No match! Flipping back over...");
    totalFlipped.forEach((card) => {
      card.classList.add('incorrect');
    });

    // Flip cards back after a short delay
    setTimeout(() => {
      totalFlipped.forEach((card) => {
        card.classList.remove('revealed', 'incorrect');
      });
    }, 1000);
  }
}

// Initialize the game
dealCards();
