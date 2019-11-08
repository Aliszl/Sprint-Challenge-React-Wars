import React from "react";

const Card = props => {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Height: {props.height}</h3>
      <h3>Mass: {props.mass}</h3>
      <h3>Hair colour: {props.hair_color}</h3>
      <h3>Skin colour: {props.skin_color}</h3>
    </div>
  );
};
export default Card;
