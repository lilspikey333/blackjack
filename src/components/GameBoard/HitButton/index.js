import React, { Component } from "react";

function HitButton(props) {
  return (
    <>
      <button onClick={props.handleHitClick}>HIT</button>
    </>
  );
}

export default HitButton;
