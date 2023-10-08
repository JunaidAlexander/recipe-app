import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <h1 className="company">Saucy Spirals</h1>
      <div className="form">
        <input className="search-bar" type="text" placeholder="Search" />
      </div>
      <div className="menu">
        <div className="menu-item">Home</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Contact</div>
      </div>
    </div>
  );
};

export default Header;
