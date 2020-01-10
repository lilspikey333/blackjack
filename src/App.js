import React, { Component } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div className="App">
        <nav></nav>
        <main>
          <Route path="/game">
            <GameBoard />
          </Route>
        </main>
      </div>
    );
  }
}

export default App;
