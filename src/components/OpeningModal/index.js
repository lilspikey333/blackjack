import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function OpeningModal(props) {
  return (
    <>
      <Modal {...props} size="xl">
        <Modal.Title id="opening-header">Welcome to BlackJack!!!</Modal.Title>
        <Modal.Body>
          <h4>Rules</h4>
          <ul>
            <li>
              Beat the dealer by getting as close to 21 as possible without
              going over
            </li>
            <li>Dealer must hit on soft 17</li>
            <li>Face cards are worth 10</li>
            <li>Aces can be worth 1 or 11</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>

            <Button onClick={props.onHide}>
              LET'S PLAY!
            </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
export default OpeningModal;
