import React from "react";

function PlantCard({ plant, onToggleSoldOut }) {
  const { id, name, image, price, soldOut } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      
       {soldOut ? (
        <button onClick={() => onToggleSoldOut(id)}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => onToggleSoldOut(id)}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
