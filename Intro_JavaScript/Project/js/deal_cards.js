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
