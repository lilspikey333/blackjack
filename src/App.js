import React, { Component } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";

const deckUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=4";

class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: {}
    };
  }

  fetchDeck = () => {
    fetch(deckUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({ deck: res });
      });
  };

  componentDidMount() {
    this.fetchDeck();
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.deck.deck_id}</h1>
        <GameBoard cards={this.state.deck.cards} />
      </div>
    );
  }
}

export default App;
