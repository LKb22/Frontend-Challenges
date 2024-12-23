/* Global variables */
const Game = {
  // Debug mode
  debug: true,
  // Game mode
  modeRelax: false,
  // number of moves
  moves: 0,
  // Current level
  levelActual: 0,
  // Levels array with max moves and time limit for each level
  levels: [
    { movesMax: 4, timeLimit: 25 },   // Level 1: 25 seconds
    { movesMax: 8, timeLimit: 50 },   // Level 2: 50 seconds
    { movesMax: 12, timeLimit: 75 },  // Level 3: 75 seconds
    { movesMax: 16, timeLimit: 100 }, // Level 4: 100 seconds
    { movesMax: 20, timeLimit: 125 }, // Level 5: 125 seconds
    { movesMax: 22, timeLimit: 138 }, // Level 6: 138 seconds
    { movesMax: 26, timeLimit: 162 }, // Level 7: 162 seconds
    { movesMax: 30, timeLimit: 188 }, // Level 8: 188 seconds
    { movesMax: 34, timeLimit: 213 }, // Level 9: 213 seconds
    { movesMax: 38, timeLimit: 238 }, // Level 10: 238 seconds
  ],
};
