import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import "./Leader.css";

const Leader = (props) => {
  const { name, age, country, img, price } = props.leader;
  const knight = <FontAwesomeIcon icon={faChessKnight} />;
  return (
    <div className="leader-container">
      <img className="leader-img" src={img} alt="" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <p>Price: ${price}</p>
      <button
        onClick={() => props.handleAddToTeam(props.leader)}
        className="button"
      >
        <span className="button-icon">{knight}</span> Add to Team
      </button>
      <br />
    </div>
  );
};

export default Leader;
