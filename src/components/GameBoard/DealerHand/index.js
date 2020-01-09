import React, { Component } from "react";
import Card from "../Card";
import Modal from "../../Modal";

class DealerHand extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      display: false
    };
  }
  componentDidMount() {
    this.gameLogic(this.props.cards[1], this.props.cards[3]);
  }

  displayModal = (message, boo) => {
    this.setState({ message: message, display: boo });
  };
  gameLogic = (cardOne, cardTwo) => {
    let handTotal =
      parseInt(this.props.cards[1].value, 10) +
      parseInt(this.props.cards[3].value, 10);
    console.log(handTotal);

    // Logic to switch ACE value based on total in hand (default is 11)
    if (cardOne.face === "ACE" && handTotal > 21) {
      cardOne.value = 1;
    } else if (cardTwo === "ACE" && handTotal > 21) {
      cardTwo.value = "ACE";
    }

    // Logic to handle the modal messages based on card combinations
    if (
      (cardOne.face === "JACK" && cardTwo.face === "ACE") ||
      (cardOne.face === "ACE" && cardTwo.face === "JACK")
    ) {
      this.displayModal("Dealer wins - BlackJack", true);
    } else if (handTotal > 21) {
      this.displayModal("You win - Dealer Busts", true);
    } else if (handTotal <= 17) {
      // Enter hit logic here
    }
  };
  render() {
    return (
      <div className="dealer-hand">
        <Modal message={this.state.message} display={this.state.display} />;
        <Card card={this.props.cards[1]} />
        <Card card={this.props.cards[3]} />
      </div>
    );
  }
}
export default DealerHand;
