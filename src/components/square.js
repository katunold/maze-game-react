import React from "react";

const Square = (props) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      <img src={props.element} style={{ display: props.display }} />
    </button>
  );
};

export default Square;
