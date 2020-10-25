import React, { Fragment } from "react";

function TypeList(props) {
  let pokeArr = props.pokeArr;
  return (
    <>
      {pokeArr ? (
        <div className="pokeList">
          <ul>
            {pokeArr.map((poke, index) => {
              return <li key={index}>{poke}</li>;
            })}
          </ul>
        </div>
      ) : (
        <Fragment />
      )}
    </>
  );
}

export default TypeList;
