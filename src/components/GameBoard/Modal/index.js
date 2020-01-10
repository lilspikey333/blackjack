import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function InGameModal(props) {
  if (props.display === "true") {
    return (
      <Modal {...props} size="lg" centered show={true}>
        <Modal.Body>
          <h4>{props.message}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>NEXT HAND</Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return <div></div>;
  }
}

export default InGameModal;
