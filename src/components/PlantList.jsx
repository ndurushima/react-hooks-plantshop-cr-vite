import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleSoldOut }) {
  return (
    <ul className="cards" data-testid="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onToggleSoldOut={onToggleSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;
