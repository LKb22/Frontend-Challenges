/* Function to create a deck of cards
Create a function to create a deck of cards
  Receive an array of cards
  Duplicate the cards
  Shuffle the cards
*/
// Function to create a deck of cards
const deckCards = (theCards) => {
  // Duplicate the cards
  const totalCards = theCards.concat(theCards);
  // Shuffle the cards
  return totalCards.sort(() => 0.5 - Math.random());
  };

/* Function to deal the cards
Create a function to deal the cards
  Select the table element
  Call the deckCards function to get an array of shuffled cards
  Clear the table
  Loops through the cards
    Create a div element and add the class card for styling
      Add the data-valor attribute
    Create a child div element for the card content and add the class card__content for styling
    Add the text content(element) to the card content as plain text
    Append the card content to the card
    Append the card to the table
    Log the cards added to the console
*/
// Function to deal the cards
const dealCards = (theCards) => {
  // Access the table element
  const table = document.querySelector("#table");
  // Get an array of shuffled cards
  const cardsShuffled = deckCards(theCards);
  // Clear the table
  table.innerHTML = "";
  // Loop through the shuffled cards
  cardsShuffled.forEach((element) => {
    // Create a div element
    const card = document.createElement("div");
    // Add the class card for styling
    card.classList.add("card");
    // Add the data-valor attribute
    card.setAttribute("data-valor", element);
    // Create a child div element for the card content
    const cardContent = document.createElement("div");
    // Add the class card__content
    cardContent.classList.add("card__content");
    // Add the text content (element) to the card content as plain text
    cardContent.textContent = element;
    // Append the card content to the card
    card.appendChild(cardContent);
    // Append the card to the table
    table.appendChild(card);
    // Log the cards added to the console
    console.log("Cards added", card.index);
  });
};
