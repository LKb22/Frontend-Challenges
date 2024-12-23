const groupCards = () => {
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

    // Add another set of pairs for each level increase (use level index + 1)
    const pairsRequired = (Game.levelActual + 1) * 2;
    console.log("Current level:", Game.levelActual);
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
