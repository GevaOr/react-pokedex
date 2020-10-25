import React, { Fragment } from "react";

function NoPoke(props) {
  let input = props.input;
  let data = props.data;
  return (
    <>
      {input && data === "error" ? (
        <Fragment>
          <h1 className="poke-name">Pokemon not found...</h1>
          <img
            className="poke-img"
            src={require("./media/not-found-img.jpg")}
            alt="Pokemon not found"
          />
        </Fragment>
      ) : (
        <Fragment />
      )}
    </>
  );
}

export default NoPoke;
