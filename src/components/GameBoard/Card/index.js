import React from "react";

function Card(props) {
    if (props.card) {
        return (
          <div className='card'>
            <img src={props.card.image} alt={props.card.code} />
          </div>
        );

    } else if (props.newCard) {
        return (
            <div className='card'>
              <img src={props.newCard.image} alt={props.newCard.code} />
            </div>
          );
    } else {
       return <div></div>
    }
}

export default Card;
