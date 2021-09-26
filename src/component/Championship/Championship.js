import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Leader from "../Leader/Leader";
import "./Championship.css";

const Championship = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    fetch("./leaders.json")
      .then((res) => res.json())
      .then((data) => setLeaders(data));
  }, []);
  return (
    <div className="main-container">
      <div className="championship-container">
        {leaders.map((leader) => (
          <Leader leader={leader} key={leader.id}></Leader>
        ))}
      </div>
      <div className="cart">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Championship;
