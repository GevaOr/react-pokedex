import React, { useState, useEffect } from "react";
// import axios from "axios";
// import TypeList from "./TypeList";

const Pokemon = (props) => {
  const formatName = (name) => {
    let lowerName = name.toLowerCase();
    return lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
  };

  let data = props.data;
  let height = data.height;
  let weight = data.weight;
  let frontImgSrc = data.sprites.front_default;
  let backImgSrc = data.sprites.back_default;
  let types = data.types;
  // let typePokeArr = [];

  const [name, setName] = useState(formatName(data.name));
  const [imgSrc, setImgSrc] = useState(frontImgSrc);
  const [typesComp, setTypesComp] = useState();

  // const showTypePokeList = (typeObj) => {
  //   axios
  //     .get(typeObj.type.url)
  //     .then((res) => {
  //       setTypesComp(res.data.pokemon);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   axios
  //     .get(typeObj.type.url)
  //     .then((res) => {
  //       typePokeArr = res.data.pokemon;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [typesComp]);

  return (
    <div>
      <div className="poke-info">
        <h1 className="poke-name title">{name}</h1>
        <img
          onMouseEnter={() => setImgSrc(backImgSrc)}
          onMouseLeave={() => setImgSrc(frontImgSrc)}
          className="poke-img"
          src={imgSrc}
          alt={name}
        />
        <h3 className="poke-height title poke-detail">Height: {height}</h3>
        <h3 className="poke-weight title poke-detail">Weight: {weight}</h3>
        <div className="poke-types poke-detail">
          <h3 className="title">Types:</h3>
          <div className="type-tags">
            {types.map((type) => {
              let typeName = type.type.name;
              return (
                <span
                  key={typeName}
                  // onClick={() => showTypePokeList(type)}
                  className="type-tag"
                >
                  {formatName(typeName)}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      {/* <TypeList pokeArr={typePokeArr} /> */}
    </div>
  );
};

export default Pokemon;
