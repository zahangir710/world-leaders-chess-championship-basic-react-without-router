import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Leader from "../Leader/Leader";
import "./Championship.css";

const Championship = () => {
  const [leaders, setLeaders] = useState([]);
  const [addToTeam, setAddToTeam] = useState([]);

  useEffect(() => {
    fetch("./leaders.json")
      .then((res) => res.json())
      .then((data) => setLeaders(data));
  }, []);

  const handleAddToTeam = (leader) => {
    if (addToTeam.indexOf(leader) === -1) {
      const newAddToTeam = [...addToTeam, leader];
      setAddToTeam(newAddToTeam);
    }
  };
  return (
    <div className="main-container">
      <div className="championship-container">
        {leaders.map((leader) => (
          <Leader
            leader={leader}
            key={leader.key}
            handleAddToTeam={handleAddToTeam}
          ></Leader>
        ))}
      </div>
      <div className="cart">
        <Cart addToTeam={addToTeam} key={addToTeam["key"]}></Cart>
      </div>
    </div>
  );
};

export default Championship;
