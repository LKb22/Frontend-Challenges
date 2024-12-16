// Group of cards
// Windows: Win + . (Windows key + period) for emojis
const cardGroup = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

// EXERCISE: Concatenate cardGroup with itself to duplicate the values
// Total cards, created by duplicating the group
const totalCards = cardGroup.concat(cardGroup);

// Function to shuffle cards
function shuffleCards() {
  let result;
  result = totalCards.sort(function() {
    return 0.5 - Math.random(); // Randomize the order
  });
  return result;
}

// Function to deal cards onto the table
function dealCards() {
  const table = document.querySelector("#table"); // Select the table
  const shuffledCards = shuffleCards();
  table.innerHTML = ""; // Clear the table

  // EXERCISE: Loop through shuffledCards and for each element:
  // Create a div (store it in a variable), set its innerHTML to a div with class "card",
  // and inside it, a div with class "card_content".
  // Add the element's value as content inside the card.

  shuffledCards.forEach(function(element) {
    const card = document.createElement("div"); // Create a div for each card

    // Set innerHTML with the structure including the content of the card
    card.innerHTML =
      "<div class='card'>" +
        "<div class='card_content'>" +
          element +
        "</div>" +
      "</div>";

    // EXERCISE: Add the created card as a "child" of the table node
    table.appendChild(card); // Add each card to the table
  });

  // BONUS: You could make the cards only deal when a button with text "Dealing cards" is clicked
}

// Function to reveal a card
function reveal() {
  this.classList.add("revealed"); // Add 'revealed' class to show the card
}

// Deal the cards when the page loads (for now)
dealCards();

// Add event listeners to reveal cards on click
document.querySelectorAll(".card").forEach(function(element) {
  element.addEventListener("click", reveal);
});
