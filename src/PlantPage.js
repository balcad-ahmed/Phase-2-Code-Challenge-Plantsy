import React from 'react';
import PlantList from './PlantList';
import NewPlantForm from './NewPlantForm';
import Search from './Search';

function PlantPage({ plants, onAddPlant, onMarkSoldOut, searchTerm, onSearchChange }) {
  return (
    <main>
      <div className="plant-page">
        <NewPlantForm onAddPlant={onAddPlant} />
        <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <PlantList plants={plants} onMarkSoldOut={onMarkSoldOut} />
      </div>
    </main>
  );
}

export default PlantPage;
