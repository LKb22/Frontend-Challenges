/* Create a deck of cards
Create a deck of cards
  Create a function to make a shuffled deck of emoji cards
  Create the Array of emojis
    Emojis use unicode values
    Generate an array of emojis from the unicode range
    Use the Fisher-Yates shuffle algorithm to shuffle the array
  Return the shuffled emojis set to the current level
    Shuffle the full array of emojis
    Add another set of pairs for each level
    Slice the array by this number to get the required number of emojis
    Duplicate the selected emojis to create pairs
    Shuffle the duplicated emojis
    Return the shuffled emojis
Create the other global variables
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

  /* Return shuffled emojis set to current level

  Return shuffled emojis set to current level
    Shuffle the full array of emojis
    Add another set of pairs for each level
    Slice the array by this number to get the required number of emojis
    Duplicate the selected emojis to create pairs
    Shuffle the duplicated emojis
    Return the shuffled emojis
  */
  // Shuffle the array of emojis
    const shuffledEmojis = fisherYatesShuffle(emojiArray);
    console.log("Shuffled emojis:", shuffledEmojis.length);

    // Add another set of pairs for each level (use level index + 1)
    const pairsRequired = (currentLevel + 1) * 2;
    console.log("Current level:", currentLevel);
    console.log("# of pairs:", pairsRequired);
    // Slice the array by this number to get the required number of emojis
    const selectedEmojis = shuffledEmojis.slice(0, pairsRequired);
    console.log("Selected emojis for level:", selectedEmojis);
    // Duplicate the selected emojis to create pairs (2 of each emoji)
    const duplicatedEmojis = [...selectedEmojis, ...selectedEmojis];
    console.log("Duplicated emojis:", duplicatedEmojis);
    // Shuffle the duplicated emojis to randomize the order
    const shuffledDuplicatedEmojis = fisherYatesShuffle(duplicatedEmojis);
    console.log("Shuffled duplicated emojis:", shuffledDuplicatedEmojis);
    // Return the shuffled emojis to be used for the card group
    return shuffledDuplicatedEmojis;
  }

/* Create the other global variables: */
// Relax mode
let relaxMode = false;
// Moves
let moves = 0;
// Timer
let timer;
// Current level
let currentLevel = 0;
/* Create the levels
Create an array of levels for the game
  Each level has a set number of cards and a max number of moves
  The number of cards is handled by the createCardGroup() function
  Set the max number of moves for each level in the array
*/
const levels = [
  {
    maxMoves: 10
  },
  {
    maxMoves: 15
  },
  {
    maxMoves: 20
  },
  {
    maxMoves: 25
  },
  {
    maxMoves: 30
  },
  {
    maxMoves: 35
  },
  {
    maxMoves: 40
  },
  {
    maxMoves: 45
  },
  {
    maxMoves: 50
  },
  {
    maxMoves: 55
  }
];
