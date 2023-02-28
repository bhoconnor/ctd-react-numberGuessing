import React, { Component } from "react";
import NumberGuessingGame from "./NumberGuessingGame";
import "./App.css";

// ************************************************************************************************************************ //
// APP CLASS COMPONENT //////////////////////////////////////////////////////
// ************************************************************************************************************************ //
class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberGuessingGame />
      </div>
    );
  }
}

export default App;
