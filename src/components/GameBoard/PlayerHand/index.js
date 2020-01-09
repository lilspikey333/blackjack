import React, { Component } from "react";
import Card from "../Card";
import Modal from "../../Modal";

class PlayerHand extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      display: false,
      newCard: []
    };
  }
  componentDidMount() {
    this.gameLogic(this.props);
  }

  displayModal = (message, boo) => {
    this.setState({ message: message, display: boo });
  };
  gameLogic = () => {
    let total;
    let totalArray = [];
    let cardValue;
    this.props.cards.forEach(element => {
      element.value = parseInt(element.value);
      cardValue = element.value;
      totalArray.push(cardValue);
    });
    total = totalArray.reduce((a, b) => a + b, 0);
    console.log(total);

    if (
      (this.props.cards[0].face === "JACK" &&
        this.props.cards[2].face === "ACE") ||
      (this.props.cards[0].face === "ACE" &&
        this.props.cards[2].face === "JACK")
    ) {
      this.displayModal("You win - BlackJack", true);
    }

    // else if (handTotal > 21) {
    //   this.displayModal("Bust", true);
    // }
  };
  render() {
    if (this.props.newCard.length !== 0) {
      return (
        <div className="player-hand">
          <Card card={this.props.cards[0]} />
          <Card card={this.props.cards[2]} />
          <Card newCard={this.props.newCard} />
          <Modal message={this.state.message} display={this.state.display} />;
        </div>
      );
    } else {
      return (
        <div className="player-hand">
          <Card card={this.props.cards[0]} />
          <Card card={this.props.cards[2]} />
          <Modal message={this.state.message} display={this.state.display} />;
        </div>
      );
    }
  }
}
export default PlayerHand;
