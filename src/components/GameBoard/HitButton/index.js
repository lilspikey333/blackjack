import React, { Component } from "react";

function HitButton(props) {
  return (
    <>
      <button onClick={props.handleClick}>HIT</button>
    </>
  );
}

export default HitButton;
