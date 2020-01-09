import React from "react";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

function GameBoard(props) {
  props.cards.forEach(card => {
    if (
      card.value === "QUEEN" ||
      card.value === "KING" ||
      card.value === "JACK"
    ) {
      card.face = card.value;
      card.value = 10;
    } else if (card.value === "ACE") {
      card.face = card.value;
      card.value = 11;
    }
  });
  return (
    <div>
      <h1 className="game-board">GameBoard</h1>
      <div>
        <DealerHand cards={props.cards} />
      </div>
      <div>
        <PlayerHand cards={props.cards} />
      </div>
    </div>
  );
}

export default GameBoard;
