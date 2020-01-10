import React from "react";
import Card from "../Card";

function DealerHand(props) {
  return (
    <div className="dealer-hand">
      <h2>{props.dealerTotal}</h2>
      {props.dealerHand.map(card => (
        <Card newCard={card} />
      ))}
    </div>
  );
}
export default DealerHand;
