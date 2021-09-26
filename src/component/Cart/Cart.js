import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { addToTeam } = props;
  const element = <FontAwesomeIcon icon={faChessKing} />;
  const totalReducer = (previous, current) => previous + current.price;
  const total = addToTeam.reduce(totalReducer, 0);

  return (
    <div className="cart-container">
      <h2>
        {element} Added Player: {addToTeam.length}
      </h2>
      {props.addToTeam.map((teamMember) => (
        <p>
          {element} {teamMember.name} ${teamMember.price}{" "}
          <img className="flag" src={teamMember?.flag} alt="" />
        </p>
      ))}
      <p>Total Expense: ${total}</p>
    </div>
  );
};

export default Cart;
