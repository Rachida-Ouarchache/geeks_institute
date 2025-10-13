import React from "react";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

function PlanetsList() {
  return (
    <ul className="list-group m-5">
      <h2>Exercice 2 "Planets List" </h2>
      {planets.map((planet, index) => (
        <li key={index} className="list-group-item">
          {planet}
        </li>
      ))}
    </ul>
  );
}

export default PlanetsList;
