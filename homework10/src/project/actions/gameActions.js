export const MAKE_GUESS = "MAKE_GUESS";
export const START_NEW_GAME = "START_NEW_GAME";

export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  payload: guess,
});

export const startNewGame = () => ({
  type: START_NEW_GAME,
});