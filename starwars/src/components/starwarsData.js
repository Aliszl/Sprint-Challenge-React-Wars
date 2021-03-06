import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";

// styling
const DivStyled = styled.div`
   
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  
`;

function StarwarsData() {
  const [starwarsChars, fetchStarwarsChars] = useState([]);

  useEffect(() => {
    console.log("StarwarsData component mounted");
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log("Charachters: ", response.data);
        console.log("Charachters: ", response.data.results);
        fetchStarwarsChars(response.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <DivStyled className="CardContainer">
         
      {starwarsChars.map(character => {
        return (
          <Card
            name={character.name}
            height={character.height}
            mass={character.mass}
            hair_color={character.hair_color}
            skin_color={character.skin_color}
          />
        );
      })}
         
    </DivStyled>
  );
}
export default StarwarsData;
