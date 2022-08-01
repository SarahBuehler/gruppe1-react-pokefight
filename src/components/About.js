import React from "react";
import pokemonparty from "../media/pokemonparty.gif";

function About() {
  return (
    <div>
      <h2>Gruppenarbeit in Woche 10</h2>
      <p>Node.js/Express Server</p>
      <p>React router</p>
      <p>MongoDB</p>
      <p> und viele Pokémons</p>
      <img src={pokemonparty} alt="party with pokémons" />
    </div>
  );
}
export default About;
