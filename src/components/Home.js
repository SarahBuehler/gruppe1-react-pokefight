import React, { useEffect, useState } from "react";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    fetch("./data/pokedex.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setPokemons(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {pokemons.length > 0 && (
        <ul className="poke-list">
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name.english}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
