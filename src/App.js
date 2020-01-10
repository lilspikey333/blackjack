import React, { Component } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import OpeningModal from "./components/OpeningModal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      startGame: false
    };
  }

  handleDismiss = () => {
    this.setState({
      startGame: true
    });
  };

  render() {
    if (this.state.startGame) {
      return (
        <div className="App">
          <nav></nav>
          <main>
            <Route push to="/game">
              <GameBoard />
            </Route>
          </main>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Route path="/">
            <OpeningModal show={true} onHide={this.handleDismiss} />
          </Route>
        </div>
      );
    }
  }
}

export default App;
