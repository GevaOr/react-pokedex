import React, { Fragment } from "react";

function NoPoke(props) {
  let input = props.input;
  return (
    <>
      {input ? (
        <Fragment>
          <h1 className="poke-name">Pokemon not found...</h1>
          <img
            className="poke-img"
            src={require("./media/not-found-img.jpg")}
            alt=""
          />
        </Fragment>
      ) : (
        <Fragment />
      )}
    </>
  );
}

export default NoPoke;
