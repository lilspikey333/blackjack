import React from "react";
import back from "../../../photos/cardBack.jpg";

function Card(props) {
  if ((props.newCard && props.isShowing === true) || props.index === 0) {
    return (
      <div className="delt-card">
        <img src={props.newCard.image} alt={props.newCard.code} />
      </div>
    );
  } else if (props.newCard && props.isShowing === false) {
    return (
      <div className="delt-card">
        <img src={back} alt={props.newCard.code} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Card;
