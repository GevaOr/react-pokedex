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
    let pokeName = event.target.elements.query.value.toLowerCase();
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
        });
    }
    setPokemonData();
  }, [input]);

  // useEffect(() => {
  //   if (pokemonData) {
  //     axios
  //       .get(pokemonData.)
  //       .then((res) => {
  //         setPokemonData(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [pokemonData]);

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
      {pokemonData ? <Pokemon data={pokemonData} /> : <NoPoke input={input} />}
    </main>
  );
}

export default App;
