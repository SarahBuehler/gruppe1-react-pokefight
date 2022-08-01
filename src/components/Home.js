import React, { useEffect, useState } from "react";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    fetch("../media/pokedex.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
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
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
