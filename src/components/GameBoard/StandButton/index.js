import React from "react";
import Button from "react-bootstrap/Button";

function StandButton(props) {
  return (
    <>
      <Button
        onClick={props.handleStandClick}
        variant="danger"
        size="lg"
        className="game-buttons"
      >
        STAND
      </Button>
    </>
  );
}

export default StandButton;
