import React, { Component } from "react";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";
import HitButton from "./HitButton";
import Card from "../GameBoard/Card";

class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      newCard: null,
      playerHandArray: []
    };
  }
  // props.cards.forEach(card => {
  //   if (
  //     card.value === "QUEEN" ||
  //     card.value === "KING" ||
  //     card.value === "JACK"
  //   ) {
  //     card.face = card.value;
  //     card.value = 10;
  //   } else if (card.value === "ACE") {
  //     card.face = "ACE";
  //     card.value = 11;
  //   }
  // });

  fetchData = () => {
    const HitUrl = `https://deckofcardsapi.com/api/deck/${this.props.deckId}/draw/?count=1`;
    fetch(HitUrl)
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => {
          prevState.playerHandArray.push(this.state.newCard);
          return {
            playerHandArray: prevState.playerHandArray,
            newCard: res.cards[0]
          };
        });
      });
  };

  handleClick = e => {
    this.fetchData();
  };
  render() {
    return (
      <div>
        <h1 className="game-board">GameBoard</h1>
        <div>
          <DealerHand cards={this.props.cards} />
        </div>
        <div>
          <PlayerHand
            cards={this.props.cards}
            newCard={this.state.newCard}
            addNewCard={this.addNewCard}
            playerHandArray={this.state.playerHandArray}
          />
        </div>
        <div className="buttons">
          <HitButton
            handleClick={this.handleClick}
            deckId={this.props.deckId}
          />
        </div>
      </div>
    );
  }
}

export default GameBoard;
