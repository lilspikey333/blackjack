import React from "react";
import Card from "../Card";

function DealerHand(props) {
  return (
    <div className="dealer-hand">
      {props.dealerHand.map((card, idx) => (
        <Card newCard={card} key={idx} index={idx} isShowing={props.isShowing}/>
      ))}
    </div>
  );
}
export default DealerHand;
