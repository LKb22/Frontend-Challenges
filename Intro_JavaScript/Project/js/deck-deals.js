function deckCards(theCards) {
  let result;
  const totalCards = theCards.concat(theCards);
  result = totalCards.sort(function() {
    return 0.5 - Math.random();
  });
  return result;
}

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
function dealCards(theCards) {
  // Access the tabel element
  const table = document.querySelector("#table");
  // Get an array of shuffled cards
  let cardsShuffled = deckCards(theCards);
  // Clear the table
  table.innerHTML = "";
  // Loop through the shuffled cards
  cardsShuffled.forEach(function(element) {
    // Create a div element
    let card = document.createElement("div");
    // Add the class card for styling
    card.classList.add("card");
    // Add the data-valor attribute
    card.setAttribute("data-valor", element);
    // Create a child div element for the card content
    let cardContent = document.createElement("div");
    // Add the class card__content
    cardContent.classList.add("card__content");
    // Add the text content(element) to the card content as plain text
    cardContent.textContent = element;
    // Append the card content to the card
    card.appendChild(cardContent);
    // Append the card to the table
    table.appendChild(card);
    // Log the cards added to the console
    console.log("Cards added", card.index);
  });
}
