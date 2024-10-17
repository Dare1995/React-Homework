import { MAKE_GUESS, START_NEW_GAME } from "../actions/gameActions";

export const initialState = {
    targetNumber: Math.floor(Math.random() * 100) + 1,
    guess: [],
    attempts: 0,
    feedback: "",
  };

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_GUESS:
      const userGuess = action.payload;
      const newGuesses = [...state.guess, userGuess];
      let feedback = "";

      if (userGuess > state.targetNumber) {
        feedback = "Too high";
      } else if (userGuess < state.targetNumber) {
        feedback = "Too low";
      } else {
        feedback = "Correct!";
      }

      return {
        ...state,
        guess: newGuesses,
        attempts: state.attempts + 1,
        feedback,
      };

    case START_NEW_GAME:
      return {
        ...initialState,
        targetNumber: Math.floor(Math.random() * 100) + 1,
      };

    default:
      return state;
  }
};