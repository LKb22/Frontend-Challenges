let modeRelax = false;
let moves = 0;
let stopwatch;
let groupCards = [
  ["🦄", "🍦"],
  ["🌈", "👽"],
  ["👾", "🤖", "👹", "👺"],
  ["🤡", "💩", "🎃", "🙀"],
  ["☠️", "👾", "😽", "😼"]
];
let levelActual = 0;
const levels = [
  {
    cards: groupCards[0],
    movesMax: 3
  },
  {
    cards: groupCards[0].concat(groupCards[1]),
    movesMax: 8
  },
  {
    cards: groupCards[0].concat(groupCards[1], groupCards[2]),
    movesMax: 12
  },
  {
    cards: groupCards[0].concat(
      groupCards[1],
      groupCards[2],
      groupCards[3]
    ),
    movesMax: 25
  },
  {
    cards: groupCards[0].concat(
      groupCards[1],
      groupCards[2],
      groupCards[3],
      groupCards[4]
    ),
    movesMax: 60
  }
];
