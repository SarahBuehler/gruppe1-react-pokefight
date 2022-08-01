import React from "react";
import pokeball from "../media/pokeball.png";
import "./components.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <img src={pokeball} alt="pokeball" className="pokeball-icon" />
        <h1>Pokedex</h1>
        <img src={pokeball} alt="pokeball" className="pokeball-icon" />
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/">Alle Pokemons</Link>
      </nav>
    </div>
  );
}

export default Header;
