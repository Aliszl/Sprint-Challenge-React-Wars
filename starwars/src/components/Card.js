import React from "react";
import styled from "styled-components";

// styling
const StyledDiv = styled.div`
	margin: 20px auto;
	width: 60%;
    border: rgb(210, 180, 140) 2px solid;
	height: auto;
	border-radius: 4px;
	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    overflow: hidden;
    &:hover {
    background-color: rgb(210, 180, 140);
		}
    `

const Card = props => {
  return (
    <StyledDiv>
      <h1>{props.name}</h1>
      <h3>Height: {props.height}</h3>
      <h3>Mass: {props.mass}</h3>
      <h3>Hair colour: {props.hair_color}</h3>
      <h3>Skin colour: {props.skin_color}</h3>
    </StyledDiv>
  );
};
export default Card;
