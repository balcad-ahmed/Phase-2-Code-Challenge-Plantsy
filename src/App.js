import React, { useState, useEffect } from 'react';
import './App.css';
import PlantPage from './components/PlantPage';

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch plants from API
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error('Error fetching plants:', error));
  }, []);

  // Add new plant
  const addPlant = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
      .then(response => response.json())
      .then(data => {
        setPlants([...plants, data]);
      })
      .catch(error => console.error('Error adding plant:', error));
  };

  // Mark plant as sold out
  const markSoldOut = (plantId) => {
    setPlants(plants.map(plant => 
      plant.id === plantId ? { ...plant, soldOut: true } : plant
    ));
  };

  // Filter plants based on search term
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <PlantPage
        plants={filteredPlants}
        onAddPlant={addPlant}
        onMarkSoldOut={markSoldOut}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
}

export default App;
