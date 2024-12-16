// Arrays
const cardGroup1 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
const cardGroup2 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
const cardGroup3 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

console.log(cardGroup1);
console.log(cardGroup1[0]);
console.log(cardGroup1.includes("🦄"));
const totalCards = cardGroup1.concat(cardGroup2, cardGroup3);
console.log(totalCards);
console.log(totalCards.length);
const newTotal = totalCards.push("25");
console.log(newTotal);
console.log(totalCards);

const cardArray = [
  ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"],
  ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"],
  ["🦄", "🍦", "🌈", "🥾", "👾", "🤖", "👹", "👺"]
];

console.log(cardArray);
console.log(cardArray[2][3]);

// Loops
cardGroup1.forEach(function(element, index) {
  console.log(element, index);
});

// DOM
/*
Create an array of emojis
Create a new array by concatenating the array with itself (doubling the array)
Define a new function
  Select the space for the cards, in this case the `table`div
  Clear any existing content inside the table div
  Loop over each emoji in the concatenated array
    For each emoji, create a new div element
      Set the HTML content of the div
      	Include a div class for styling and insert the emoji as its content
      Append each new div containing one of the emojis to the table div
Call the function to display the cards on the table.
*/

const concatgroup = cardGroup1.concat(cardGroup1);

function dealCards() {
  const table = document.querySelector("#table");
  table.innerHTML = "";

  concatgroup.forEach(function(element) {
    const card = document.createElement("div");
    card.innerHTML =
      "<div class='card'>" +
        "<div class='card_content'>" +
          element +
        "</div>" +
      "</div>";

    table.appendChild(card)
  });
}

dealCards();
