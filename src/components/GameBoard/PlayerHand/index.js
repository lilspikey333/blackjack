import React from "react";
import Card from "../Card";
import Modal from "../../Modal";

function PlayerHand(props) {
  let firstCard = props.cards[0];
  let thirdCard = props.cards[2];

  let handTotal = parseInt(firstCard.value, 10) + parseInt(thirdCard.value, 10);
  console.log(handTotal);

  function playerLogic(cardOne, cardTwo) {
    if (cardOne.face === "JACK" && cardTwo.face === "ACE") {
      let message = "You win - BlackJack";
      return (
        <div className="player-hand">
            <Modal message={message} />
            <Card card={firstCard} />
            <Card card={thirdCard} />
        </div>
      );
    } 

    playerLogic(firstCard, thirdCard)
    
  return (
    <div className="player-hand">
      <Card card={firstCard} />
      <Card card={thirdCard} />
    </div>
  );
}
export default PlayerHand
