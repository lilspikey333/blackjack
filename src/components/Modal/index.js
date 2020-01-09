import React from "react";

function Modal(props) {
  if (props.display) {
    return (
      <div>
        <h1>{props.message}</h1>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Modal;
