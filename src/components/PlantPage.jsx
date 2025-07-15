import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then(setPlants)
      .catch((error) => console.error("Failed to load plants:", error));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  function handleToggleSoldOut(id) {
    setPlants((prev) => 
      prev.map((plant) => 
      plant.id === id ? {...plant, soldOut: !plant.soldOut } : plant ));
  }

  const plantsToDisplay = plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search value={searchTerm} onSearch={setSearchTerm} />
      <PlantList plants={plantsToDisplay} onToggleSoldOut={handleToggleSoldOut} />
    </main>
  );
}

export default PlantPage;
