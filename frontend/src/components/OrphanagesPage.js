import React, { useState } from 'react';
import '../styles/OrphanagesPage.css';
import NoticesSection from './NoticesSection';

// Import the orphanages data from the JSON file
const orphanagesData = require('../data/orphanageData.json');

const OrphanagesPage = () => {
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [filteredOrphanages, setFilteredOrphanages] = useState(orphanagesData);

  // Handler functions for city and type selection
  const handleCityChange = (event) => {
    setCity(event.target.value);
    handleFilterOrphanages(event.target.value, type); // Filter orphanages when city changes
 import React, { useState } from 'react';
import '../styles/OrphanagesPage.css';
import NoticesSection from './NoticesSection';

// Import the orphanages data from the JSON file
const orphanagesData = require('../data/orphanageData.json');

const OrphanagesPage = () => {
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [filteredOrphanages, setFilteredOrphanages] = useState(orphanagesData);

  // Handler functions for city and type selection
  const handleCityChange = (event) => {
    setCity(event.target.value);
    handleFilterOrphanages(event.target.value, type); // Filter orphanages when city changes
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
    handleFilterOrphanages(city, event.target.value); // Filter orphanages when type changes
  };

  // Filtering logic for orphanages based on selected city and type
  const handleFilterOrphanages = (selectedCity, selectedType) => {
    const filteredData = orphanagesData.filter((orphanage) => {
      // Add a check for null values before calling toLowerCase()
      const cityMatch = selectedCity === '' || (orphanage.city && orphanage.city.toLowerCase().includes(selectedCity.toLowerCase()));
      const typeMatch = selectedType === '' || (orphanage.categoryName && orphanage.categoryName.toLowerCase() === selectedType.toLowerCase());
      return cityMatch && typeMatch;
    });
    setFilteredOrphanages(filteredData);
  };

  return (
    <div className="orphanages-container">
      <h2 className="orphanages-header">Explore Orphanages</h2>
      <div className="filter-container">
        <label htmlFor="city">Search by City:</label>
        <input type="text" id="city" value={city} onChange={handleCityChange} />

        <label htmlFor="type">Search by Type:</label>
        <select id="type" value={type} onChange={handleTypeChange}>
          <option value="">Select Type</option>
          <option value="children">Children</option>
          <option value="girls">Girls</option>
          <option value="boys">Boys</option>
          {/* Add more options as needed */}
        </select>

        <button onClick={() => handleFilterOrphanages(city, type)}>Filter</button>
      </div>

      {/* Display the filtered orphanages */}
      <div className="notices-container">
        <NoticesSection />
      </div>

      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
        {filteredOrphanages.map((orphanage) => (
          <div key={orphanage._id.$oid} className="col mb-4">
            <div className="orphanage-card">
              {/* Display the orphanage details */}
              <h3>{orphanage.title}</h3>
              <p>City: {orphanage.city}</p>
              <p>State: {orphanage.state}</p>
              <p>Contact Details: {orphanage.phone || 'N/A'}</p>
              <p>Website: {orphanage.website || 'N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrphanagesPage;
