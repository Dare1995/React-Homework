import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeGuess, startNewGame } from "../actions/gameActions";
import "../style.css"

const GuessingGame = () => {
    const dispatch = useDispatch();
    const [currentGuess, setCurrentGuess] = useState("");
    const { feedback, attempts, guess } = useSelector((state) => state);

    const handleGuess = () => {
        dispatch(makeGuess(Number(currentGuess)));
        setCurrentGuess("");
    };

    const handleNewGame = () => {
        dispatch(startNewGame());
    };

    return (
        <div>
            <h1>Guess the Number Game</h1>
            <p>Guess a number between 1 and 100!</p>

            <input
                type="number"
                value={currentGuess}
                onChange={(e) => setCurrentGuess(e.target.value)}
            />
            <button onClick={handleGuess}>Submit Guess</button>

            {feedback && <p>{feedback}</p>}
            <p>Number of attempts: {attempts}</p>
            <p>Your guesses: {guess.join(", ")}</p>

            <button onClick={handleNewGame}>Start New Game</button>
        </div>
    );
};

export default GuessingGame;