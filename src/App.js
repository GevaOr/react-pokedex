import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Pokemon from "./Pokemon";
import NoPoke from "./NoPoke";

function App() {
  const [input, setInput] = useState("");
  const [pokemonData, setPokemonData] = useState();

  const searchPoke = (event) => {
    event.preventDefault();
    let value = event.target.elements.query.value;
    let pokeName = value.toLowerCase();
    setInput(pokeName);
  };

  useEffect(() => {
    if (input) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then((res) => {
          setPokemonData(res.data);
        })
        .catch((error) => {
          console.log(error);
          setPokemonData("error");
        });
    }
    setPokemonData(null);
  }, [input]);

  return (
    <main>
      <form onSubmit={searchPoke} id="search-bar">
        <input
          type="text"
          name="query"
          id="poke-input"
          placeholder="Search Pokemon..."
        />
        <button type="submit" id="submit">
          Search
        </button>
      </form>
      {pokemonData && pokemonData !== "error" ? (
        <Pokemon changeInput={setInput} data={pokemonData} />
      ) : (
        <NoPoke input={input} data={pokemonData} />
      )}
    </main>
  );
}

export default App;
