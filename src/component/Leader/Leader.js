import React from "react";
import "./Leader.css";

const Leader = (props) => {
  const { name, age, country, img, price } = props.leader;
  return (
    <div className="leader-container">
      <img className="leader-img" src={img} alt="" />
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <p>Price: ${price}</p>
      <button className="button">Add to Team</button>
    </div>
  );
};

export default Leader;
