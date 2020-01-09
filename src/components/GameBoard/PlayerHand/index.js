import React, { Component } from "react";
import Card from "../Card";
import Modal from "../../Modal";

class PlayerHand extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      display: false,
      newCard: [],
      total: 0,
      totalArray: [],
      cardValue: 0,
      playerHand: []
    };
  }
  componentDidMount() {
    this.gameLogic();
  }

  displayModal = (message, boo) => {
    this.setState({ message: message, display: boo });
  };

  calcTotal = () => {
    this.state.playerHand.forEach(element => {
      console.log("this is what youre looking for");
      if (
        element.value === "QUEEN" ||
        element.value === "KING" ||
        element.value === "JACK"
      ) {
        element.face = element.value;
        element.value = 10;
      } else if (element.value === "ACE") {
        element.face = "ACE";
        element.value = 11;
      }
      element.value = parseInt(element.value);
      this.setState({
        cardValue: element.value
      });
      this.setState(prevState => {
        prevState.totalArray.push(this.state.cardValue);
        return {
          totalArray: prevState.totalArray
        };
      });
    });
    this.setState({
      total: this.state.totalArray.reduce((a, b) => a + b, 0)
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.newCard) {
      state.newCard = props.newCard;
      state.playerHand.push(props.newCard);
    }
    return state;
  }

  gameLogic = () => {
    this.props.cards.forEach((element, idx) => {
      if (idx % 2 === 0) {
        this.setState(prevState => {
          prevState.playerHand.push(element);
          return {
            playerHand: prevState.playerHand
          };
        });
      }
    });

    if (
      (this.props.cards[0].face === "JACK" &&
        this.props.cards[2].face === "ACE") ||
      (this.props.cards[0].face === "ACE" &&
        this.props.cards[2].face === "JACK")
    ) {
      this.displayModal("You win - BlackJack", true);
    } else if (this.state.total > 21) {
      this.displayModal("Bust", true);
    }
  };

  render() {
    return (
      <div className="player-hand">
        {this.state.playerHand.map(card => (
          <Card newCard={card} key={this.state.idx} />
        ))}
        <Modal message={this.state.message} display={this.state.display} />;
      </div>
    );
  }
}
export default PlayerHand;
