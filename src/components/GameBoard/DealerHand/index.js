import React from "react";
import Card from "../Card";
import Modal from "../../Modal";

function DealerHand(props) {
  let secondCard = props.cards[1];
  let fourthCard = props.cards[3];

  let handTotal =
    parseInt(secondCard.value, 10) + parseInt(fourthCard.value, 10);
  console.log(handTotal);

  function gameLogic(cardOne, cardTwo) {
    if (cardOne.face === "JACK" && cardTwo.face === "ACE") {
      let message = "Dealer wins - BlackJack";
      return (
        <div className="dealer-hand">
          <Modal message={message} />
          <Card card={secondCard} />
          <Card card={fourthCard} />
        </div>
      );
    } else if (handTotal <= 17) {
      // Put hit card logic here
    }
  }
  gameLogic(secondCard, fourthCard);

  return (
    <div className="dealer-hand">
      <Card card={secondCard} />
      <Card card={fourthCard} />
    </div>
  );
}
export default DealerHand;
