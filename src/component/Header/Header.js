import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-bar">
        <img src={logo} alt="" />
        <nav>
          <a href="/Home">Home</a>
          <a href="/Features">Features</a>
          <a href="/Events">Events</a>
        </nav>
      </div>
      <h1>World Leader's Fantasy Chess Champioship</h1>
      <h4>Build Your Dream Team</h4>
      <h1>Budget $50000 Only</h1>
    </div>
  );
};

export default Header;
