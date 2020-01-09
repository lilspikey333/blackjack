import React, { Component } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";
import { Route } from "react-router-dom";

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
        this.setState({
          deck: res
        });
      });
  };

  componentDidMount() {
    this.fetchDeck();
  }

  render() {
    let cards = this.state.deck.cards;
    let deckId = this.state.deck.deck_id;
    let remainingCards = this.state.deck.remaining;
    return (
      <div className="App">
        <nav></nav>
        <main>
          <Route path="/game">
            {cards !== undefined ? (
              <GameBoard
                cards={cards}
                deckId={deckId}
                remainingCards={remainingCards}
              />
            ) : (
              <div></div>
            )}
          </Route>
        </main>
      </div>
    );
  }
}

export default App;
