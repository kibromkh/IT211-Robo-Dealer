// Card object with value and suit properties
function Card(value, suit) {
    this.value = value;
    this.suit = suit;
}

// Create an array of 52 Card objects representing a deck
let deck = [];
const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const faceCards = ['Ace', 'Jack', 'Queen', 'King'];

for (let suit of suits) {
    for (let value = 2; value <= 10; value++) {
        deck.push(new Card(value, suit));
    }
    for (let faceCard of faceCards) {
        deck.push(new Card(faceCard, suit));
    }
}

// Function to draw 5 random cards from the deck
function drawCards() {
    let hand = [];
    const cardContainer = document.getElementById('cardContainer');

    // Clear the currently-displayed hand
    cardContainer.innerHTML = '';

    // Draw 5 random cards without reusing cards
    while (hand.length < 5 && deck.length > 0) {
        const randomIndex = Math.floor(Math.random() * deck.length);
        const card = deck.splice(randomIndex, 1)[0];
        hand.push(card);
    }

    // Display the drawn cards on the HTML page
    for (let card of hand) {
        const cardName = card.value === 'Ace' || card.value > 10 ? card.value : card.value + ' of';
        const cardDiv = document.createElement('div');
        cardDiv.textContent = cardName + ' ' + card.suit;
        cardContainer.appendChild(cardDiv);
    }
}
