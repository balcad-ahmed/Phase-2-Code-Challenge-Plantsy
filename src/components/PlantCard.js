// PlantCard.js
import React from 'react';

function PlantCard({ plant, onMarkSoldOut }) {
  const { id, name, image, price, soldOut } = plant;

  const handleSoldOutClick = () => {
    onMarkSoldOut(id);
  };

  return (
    <div className="plant-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {soldOut ? (
        <button className="sold-out">Sold Out</button>
      ) : (
        <button 
          className="primary"
          onClick={handleSoldOutClick}
        >
          In Stock
        </button>
      )}
    </div>
  );
}

export default PlantCard;