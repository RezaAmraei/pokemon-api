import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [displayPokemon, setDisplayPokemon] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=898")
      .then((response) => response.json())
      .then((response) => setAllPokemon(response.results));
  }, []);
  console.log(allPokemon);

  return (
    <div className="App">
      <button onClick={() => setDisplayPokemon((prev) => !prev)}>
        Fetch Pokemon
      </button>
      <ul>
        {displayPokemon &&
          allPokemon.map((pokemon, i) => <li key={i}>{pokemon.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
