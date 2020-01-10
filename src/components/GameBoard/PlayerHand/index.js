import React from "react";
import Card from "../Card";

function PlayerHand(props) {
  return (
    <div className="player-hand">
      <h2>{props.playerTotal}</h2>
      {props.playerHand.map(card => (
        <Card newCard={card} />
      ))}
    </div>
  );
}
export default PlayerHand;
