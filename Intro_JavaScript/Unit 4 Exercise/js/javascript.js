// Group of cards
var cardGroup = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

// EXERCISE: Concatenate cardGroup with itself to duplicate the values
// Total cards, created by duplicating the group
var totalCards = cardGroup.concat(cardGroup);

// Function to shuffle cards
function shuffleCards() {
  var result;
  result = totalCards.sort(function() {
    return 0.5 - Math.random(); // Randomize the order
  });
  return result;
}

// Function to deal cards onto the table
function dealCards() {
  var table = document.querySelector("#mesa"); // Select the table
  var shuffledCards = shuffleCards();
  table.innerHTML = ""; // Clear the table

  // EXERCISE: Loop through shuffledCards and for each element:
  // Create a div (store it in a variable), set its innerHTML to a div with class "tarjeta",
  // and inside it, a div with class "tarjeta__contenido".
  // Add the element's value as content inside the card.

  shuffledCards.forEach(function(element) {
    var card = document.createElement("div"); // Create a div for each card

    // Set innerHTML with the structure including the content of the card
    card.innerHTML =
      "<div class='tarjeta'>" +
        "<div class='tarjeta__contenido'>" +
          element +
        "</div>" +
      "</div>";

    // EXERCISE: Add the created card as a "child" of the table node
    table.appendChild(card); // Add each card to the table
  });

  // BONUS: You could make the cards only deal when a button with text "Repartir cartas" is clicked
}

// Function to reveal a card
function reveal() {
  this.classList.add("descubierta"); // Add 'revealed' class to show the card
}

// Deal the cards when the page loads (for now)
dealCards();

// Add event listeners to reveal cards on click
document.querySelectorAll(".tarjeta").forEach(function(element) {
  element.addEventListener("click", reveal);
});
