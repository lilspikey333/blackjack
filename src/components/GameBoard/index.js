import React, { Component } from "react";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";
import HitButton from "./HitButton";
import StandButton from "./StandButton";
import InGameModal from "./Modal";

const deckUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=4";

class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      deck: {},
      newCard: {},
      playerHand: [],
      dealerHand: [],
      cardValue: 0,
      playerTotalArray: [],
      playerTotal: 0,
      dealerTotalArray: [],
      dealerTotal: 0,
      dealersTurn: false,
      message: "",
      display: false,
      isShowing: false
    };
  }

  componentDidMount() {
    this.fetchDeck();
  }

  fetchDeck = () => {
    fetch(deckUrl)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            deck: res
          },
          this.setGameStart
        );
      });
  };

  fetchNextHand = () => {
    const nextHandUrl = `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/?count=4`;
    fetch(nextHandUrl)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            deck: res
          },
          this.setGameStart
        );
      });
  };

  setGameStart = () => {
    this.setFaceCardValues(this.state.deck.cards);
    this.buildInitialHands();
  };

  setFaceCardValues = array => {
    array.forEach(card => {
      if (
        card.value === "QUEEN" ||
        card.value === "KING" ||
        card.value === "JACK"
      ) {
        card.face = card.value;
        card.value = 10;
      } else if (card.value === "ACE") {
        card.face = "ACE";
        card.value = 11;
      } else {
        card.value = parseInt(card.value);
      }
    });
  };

  buildInitialHands = () => {
    let playerArray = [];
    let dealerArray = [];
    this.state.deck.cards.forEach((el, idx) => {
      if (idx % 2 === 0) {
        playerArray.push(el);
      } else if (idx % 2 !== 0) {
        return dealerArray.push(el);
      }
    });

    this.setState(
      {
        playerHand: playerArray
      },
      this.calcPlayerTotal
    );
    this.setState(
      {
        dealerHand: dealerArray
      },
      this.calcDealerTotal
    );
  };

  // Player Logic

  calcPlayerTotal = () => {
    let tempTotal = 0;
    let tempArray = [];
    this.setFaceCardValues(this.state.playerHand);
    this.state.playerHand.forEach(card => {
      card.value = parseInt(card.value);
      tempArray.push(card.value);
    });
    tempTotal = tempArray.reduce((a, b) => a + b, 0);
    this.setState({
      playerTotalArray: tempArray,
      playerTotal: tempTotal
    });
    if (
      (tempTotal === 21 &&
        this.state.playerHand[0].face &&
        this.state.playerHand[1].face === "ACE") ||
      (tempTotal === 21 &&
        this.state.playerHand[1].face &&
        this.state.playerHand[0].face === "ACE")
    ) {
      this.displayModal("Blackjack! You win!", true);
    }

    if (tempTotal > 21 && tempArray.includes(11) === true) {
      let idx = tempArray.indexOf(11);
      this.state.playerHand[idx].value = 1;
      this.state.playerTotalArray[idx] = 1;
      this.calcPlayerTotal();
    } else if (tempTotal > 21) {
      this.displayModal("Bust", true);
    }
  };

  fetchPlayerCard = () => {
    const HitUrl = `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/?count=1`;
    fetch(HitUrl)
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => {
          prevState.playerHand.push(res.cards[0]);
          return {
            playerHand: prevState.playerHand,
            newCard: res.cards[0]
          };
        }, this.calcPlayerTotal);
      });
  };

  handleHitClick = e => {
    this.fetchPlayerCard();
  };

  handleStandClick = () => {
    this.setState(
      {
        dealersTurn: true,
        isShowing: true
      },
      this.handleDealerTurn
    );
  };

  // Dealer Logic

  calcDealerTotal = () => {
    let tempTotal = 0;
    let tempArray = [];
    this.setFaceCardValues(this.state.dealerHand);
    this.state.dealerHand.forEach(card => {
      card.value = parseInt(card.value);
      tempArray.push(card.value);
    });
    tempTotal = tempArray.reduce((a, b) => a + b, 0);
    if (
      (tempTotal === 21 &&
        this.state.dealerHand[0].face &&
        this.state.dealerHand[1].face === "ACE") ||
      (tempTotal === 21 &&
        this.state.dealerHand[1].face &&
        this.state.dealerHand[0].face === "ACE")
    ) {
      this.displayModal("Dealer wins - Blackjack", true);
    }
    this.setState(
      {
        dealerTotalArray: tempArray,
        dealerTotal: tempTotal
      },
      this.handleDealerTurn
    );
  };

  fetchDealerCard = () => {
    const standUrl = `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/?count=1`;
    fetch(standUrl)
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => {
          console.log(res.cards[0]);
          prevState.dealerHand.push(res.cards[0]);
          return {
            dealerHand: prevState.dealerHand,
            newCard: res.cards[0]
          };
        }, this.calcDealerTotal);
      });
  };

  handleDealerTurn = () => {
    if (this.state.dealersTurn === true && this.state.dealerTotal <= 17) {
      this.fetchDealerCard();
    } else if (
      this.state.dealersTurn === true &&
      this.state.dealerTotal > 17 &&
      this.state.dealerTotal <= 21
    ) {
      this.compareHands(this.state.dealerTotal, this.state.playerTotal);
    }

    if (
      this.state.dealerTotal > 21 &&
      this.state.dealerTotalArray.includes(11) === true
    ) {
      let idx = this.state.dealerTotalArray.indexOf(11);
      this.state.dealerHand[idx].value = 1;
      this.state.dealerTotalArray[idx] = 1;
      this.calcDealerTotal();
    } else if (this.state.dealerTotal > 21) {
      this.displayModal("You win - Dealer busts", true);
    }
  };

  // Game Logic

  compareHands = (dealerTotal, playerTotal) => {
    if (dealerTotal > playerTotal) {
      this.displayModal("Dealer wins...", true);
    } else if (playerTotal > dealerTotal) {
      this.displayModal("You win!", true);
    } else if (dealerTotal === playerTotal) {
      this.displayModal("Tie", true);
    }
  };

  resetGame = () => {
    this.setState(
      {
        newCard: {},
        playerHand: [],
        dealerHand: [],
        cardValue: 0,
        playerTotalArray: [],
        playerTotal: 0,
        dealerTotalArray: [],
        dealerTotal: 0,
        dealersTurn: false,
        message: "",
        display: false
      },
      this.fetchNextHand
    );
  };

  displayModal = (message, boolean) => {
    this.setState({ message: message, display: boolean });
  };

  dismissModal = () => {
    this.resetGame();
  };

  render() {
    return (
      <div>
        <h1 className="game-board">GameBoard</h1>
        <div>
          <InGameModal
            onHide={this.dismissModal}
            message={this.state.message}
            display={this.state.display}
          />
          ;
          <DealerHand
            cards={this.props.cards}
            dealerHand={this.state.dealerHand}
            dealerTotal={this.state.dealerTotal}
            isShowing={this.state.isShowing}
          />
          <PlayerHand
            cards={this.props.cards}
            playerHand={this.state.playerHand}
            playerTotal={this.state.playerTotal}
          />
        </div>
        <div className="buttons">
          <HitButton handleHitClick={this.handleHitClick} />
          <StandButton handleStandClick={this.handleStandClick} />
        </div>
      </div>
    );
  }
}

export default GameBoard;
