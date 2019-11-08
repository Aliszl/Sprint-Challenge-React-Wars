import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

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
     <div className ="CardContainer">
       {
        starwarsChars.map(character => {
            return(
               <Card 
                
                name={character.name} 
                height={character.height}
                mass={character.mass} 
                hair_color={character.hair_color} 
                skin_color={character.skin_color} 
                
                />
            )
        })}
       </div>

    
    //   <h3>Name: {props.name}</h3>
    //   <h3>Height: {props.height}</h3>
    //   <h3>Mass: {props.mass}</h3>
    //   <h3>Hair colour: {props.hair_color}</h3>
    //   <h3>Skin colour: {props.skin_color}</h3>
      
      
    
  );
}
export default StarwarsData;
