import React from "react";

function Card(props) {
  return (
    <div className='card'>
      <img src={props.card.image} alt={props.card.code} />
    </div>
  );
}

export default Card;
