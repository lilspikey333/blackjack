import React from "react";
import Card from "../Card";

function PlayerHand(props) {
  return (
    <div className="player-hand">
      <h4 className="total">{props.playerTotal}</h4>
      {props.playerHand.map((card, idx) => (
        <Card newCard={card} key={idx} isShowing={true} />
      ))}
    </div>
  );
}
export default PlayerHand;
