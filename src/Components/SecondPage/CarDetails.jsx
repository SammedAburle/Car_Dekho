import React from 'react';
import './CarDetails.css'; 

const CarDetails = ({ car }) => {
  if (!car) {
    return <p>No car selected.</p>; 
  }

  const { brand, model, price, specification, image } = car;

  return (
    <div className="car-details-container">
      <h2>{`${brand} ${model}`}</h2>
      <img src={image} alt={`${model}`} className="car-image" />
      <p>Price: {price}</p>
      <h3>Specifications:</h3>
      <ul>
        <li>Engine: {specification.Engine}</li>
        <li>Power: {specification.Power}</li>
        <li>Torque: {specification.Torque}</li>
        <li>Seating Capacity: {specification.Seating_Capacity}</li>
        <li>Drive Type: {specification.Drive_Type}</li>
        <li>Mileage: {specification.Mileage}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
