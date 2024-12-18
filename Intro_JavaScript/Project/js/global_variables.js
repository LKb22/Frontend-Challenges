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
