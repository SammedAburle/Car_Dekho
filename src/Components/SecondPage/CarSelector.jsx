import React, { useState } from 'react';
import './CarSelector.css';
import car from '../DataBase/car_data'; 
import CarDetails from './CarDetails'; 

const carData = {
  Tata: ['Nexon', 'Harrier', 'Safari'],
  Mahindra: ['Xuv700', 'Thar', 'Scorpio'],
  Hyundai: ['Creta', 'i20', 'Verna'],
  Maruti: ['Swift', 'Baleno', 'Ertiga'],
  Toyota: ['Fortuner', 'Innova', 'Vellfire'],
};

const CarSelector = () => {
  const [brand, setBrand] = useState('');
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedCar, setSelectedCar] = useState(null); // State to store the selected car

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);
    setModels(carData[selectedBrand] || []);
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleSearch = () => {
    const carDetails = car.find(
      (item) => item.brand === brand && item.model === selectedModel
    );
    setSelectedCar(carDetails); // Store the selected car details
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>-------SEARCH YOUR CAR-------</h2>
        <div className="dropdown-container">
          <label>Select Brand:</label>
          <select value={brand} onChange={handleBrandChange}>
            <option value="">Select Brand</option>
            {Object.keys(carData).map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown-container">
          <label>Select Model:</label>
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      {/* Display the CarDetails component and pass the selected car */}
      {selectedCar && <CarDetails car={selectedCar} />}
    </div>
  );
};

export default CarSelector;
