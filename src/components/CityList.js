import React, { useState } from "react";
import './../styles/CityList.css'

const CityList = ({ state, countries, setCountries, countryIndex, stateIndex }) => {
  const [newCity, setNewCity] = useState("");

  const addCity = () => {
    if (newCity.trim()) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.push(newCity);
      setCountries(updatedCountries);
      setNewCity("");
    }
  };

  const editCity = (cityIndex) => {
    const updatedName = prompt("Enter new city name:", state.cities[cityIndex]);
    if (updatedName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities[cityIndex] = updatedName;
      setCountries(updatedCountries);
    }
  };

  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.splice(cityIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="city-container">
      <h4>{state.name} - Manage Cities</h4>
      <input
        type="text"
        placeholder="Enter city name"
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
      />
      <button onClick={addCity}>Add City</button>

      <ul>
        {state.cities.map((city, cityIndex) => (
          <li key={cityIndex}>
            {city}
            <button onClick={() => editCity(cityIndex)}>Edit</button>
            <button onClick={() => deleteCity(cityIndex)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;