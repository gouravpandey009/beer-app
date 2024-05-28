import React, { useState } from "react";

const BeerCard = ({ beer }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="beer-card">
      {imageError ? (
        <div className="placeholder-image">Image not available</div>
      ) : (
        <img src={beer.image} alt={beer.name} onError={handleImageError} />
      )}
      <h3>{beer.name}</h3>
      <p>{beer.description}</p>
    </div>
  );
};

export default BeerCard;
