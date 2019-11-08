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
        fetchStarwarsChars(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <div>
       
      <Card />
      
    </div>
  );
}
export default StarwarsData;
