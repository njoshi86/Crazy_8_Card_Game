import { shuffle } from "lodash";
function createCard(symbol, rank) {
  return {
    symbol,
    rank
  };
}

function createDeck() {
  const symbols = ["d", "c", "h", "s"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "k",
    "q",
    "a"
  ];
  const deck = [];
  symbols.forEach(symbol => {
    ranks.forEach(rank => {
      deck.push(createCard(symbol, rank));
    });
  });
  return deck;
}

function getShuffledDeck() {
  return shuffle(createDeck());
}

function getCards(deck, n) {
  const hand = [];
  for (let i = 0; i < n && deck.length >= 0; i++) {
    hand.push(deck.pop());
  }

  return hand;
}

module.exports = {
  createDeck,
  getShuffledDeck,
  getCards
};
