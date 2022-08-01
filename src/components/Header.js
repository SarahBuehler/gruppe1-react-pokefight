import React from "react";
import pokeball from "../media/pokeball.png";
import "./components.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <img src={pokeball} alt="pokeball" className="pokeball-icon" />
        <h1>Pokedex</h1>
        <img src={pokeball} alt="pokeball" className="pokeball-icon" />
      </div>
      <nav className="navbar">
        <NavLink className="myActive" to="/">
          home
        </NavLink>
        <NavLink className="myActive" to="/test">
          test
        </NavLink>
        <NavLink to="/about" className="myActive">
          about
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
