// import React, { Component } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";
import { useState } from "react";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

// ************************************************************************************************************************ //
// *NEW* NUMBER GUESSING GAME FUNCTION COMPONENT //////////////////////////////////////////////////////
// ************************************************************************************************************************ //
const NumberGuessingGame = () => {
  // state setter variables
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  // Essentially an *if* statement it seems, saying is correct guess is true if latest guess === the number to guess
  const isCorrectGuess = latestGuess === numberToGuess;

  // Essentially an *if* statement TOO it seems, saying the game over value is whichever of the following is true: a) latest guess === the number to guess (requiring isCorrectGuess to be true) OR  the max number of attempts has been reached.
  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  // Event handlers
  const handleGuess = (guess) => {
    setLatestGuess(Number(guess));
    setNumberOfGuesses(numberOfGuesses + 1);
  };
  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      {/* ************************************************************************************************************************ */}
      {/* GUESS CONTROL: Instantiation of <GuessControl/> Component */}
      <GuessControl onGuess={handleGuess} />
      {/* GAME OVER: Instantiation of <GameOver/> Component */}
      {/* ALSO seems to have version of operator-based if-then logic like some of the above variables, *without* using "if"--i.e., do the below if isGameOver is true AND user guesses correctly (ie, isCorrectGuess is true) AND onReset button is pushed */}
      {isGameOver && <GameOver hasWon={isCorrectGuess} onReset={handleReset} />}
      {/* ************************************************************************************************************************ */}
      {/* GUESS MESSAGE: Instantiation of <GuessMessage/> Component */}
      {/* ALSO seems to have version of operator-based if-then logic like above--i.e., do the below if isGameOver is NOT true AND other items below are true (I think, clarify though) */}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
};

// ************************************************************************************************************************ //
// *OLD* NUMBER GUESSING GAME CLASS COMPONENT //////////////////////////////////////////////////////
// ************************************************************************************************************************ //

// class NumberGuessingGameOld extends Component {
//   constructor(props) {
//     super(props);

// this.state draws on a "state object," & is here a prop, with the below key:value pairs that can be called (eg, this.state.latestGuess, as is done near the bottom of the JSX below)
// this.state = {
//   numberToGuess: getRandomNumber(),
//   numberOfGuesses: 0,
//   latestGuess: null,
// };

/**
 * These lines are required to make the methods/functions declared on this
 *  class have the correct `this` object when they run.
 */
// this.handleGuess = this.handleGuess.bind(this);
// this.handleReset = this.handleReset.bind(this);
// }

// handleGuess(guess) {
//   this.setState({
//     latestGuess: guess,
//     numberOfGuesses: this.state.numberOfGuesses + 1,
//   });
// }

// handleReset() {
//   this.setState({
//     numberToGuess: getRandomNumber(),
//     numberOfGuesses: 0,
//     latestGuess: null,
//   });
// }

// render() {
//   const isCorrectGuess = this.state.latestGuess === this.state.numberToGuess;

//   const isGameOver =
//     isCorrectGuess || this.state.numberOfGuesses === MAX_ATTEMPTS;

//   return (
//     <div>
//       <h2>I'm thinking of a number from 1 to 100.</h2>
//       <h2>
//         Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
//       </h2>
//       <GuessControl onGuess={this.handleGuess} />
//       {isGameOver && (
//         <GameOver hasWon={isCorrectGuess} onReset={this.handleReset} />
//       )}
//       {!isGameOver && (
//         <GuessMessage
//           guess={this.state.latestGuess}
//           numberToGuess={this.state.numberToGuess}
//           numberOfGuesses={this.state.numberOfGuesses}
//         />
//       )}
//     </div>
//   );
// }
// }

export default NumberGuessingGame;
