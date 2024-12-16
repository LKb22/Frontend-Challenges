// Group of cards
var cardGroup = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

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

  shuffledCards.forEach(function(element) {
    var card = document.createElement("div");

    card.innerHTML =
      "<div class='tarjeta'>" +
      "<div class='tarjeta__contenido'>" +
      element +
      "</div>" +
      "</div>";

    table.appendChild(card); // Add each card to the table
  });
}

// Function to reveal a card
function reveal() {
  this.classList.add("descubierta"); // Add the 'revealed' class
}

// Deal the cards on page load
dealCards();

// Add event listeners to reveal cards on click
document.querySelectorAll(".tarjeta").forEach(function(element) {
  element.addEventListener("click", reveal);
});
