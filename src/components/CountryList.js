import React, { useState } from "react";
import StateList from "./StateList";
import './../styles/CountryList.css'

const CountryList = ({ countries, setCountries }) => {
  const [newCountry, setNewCountry] = useState("");

  const addCountry = () => {
    if (newCountry.trim()) {
      setCountries([...countries, { name: newCountry, states: [] }]);
      setNewCountry(""); // Reset input field after adding
    }
  };

  const editCountry = (index) => {
    const updatedName = prompt("Enter new country name:", countries[index].name);
    if (updatedName && updatedName.trim() !== "" && updatedName !== countries[index].name) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = updatedName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="country-container">
      <h2>Manage Countries</h2>
      <input
        type="text"
        placeholder="Enter country name"
        value={newCountry}
        onChange={(e) => setNewCountry(e.target.value)}
      />
      <button onClick={addCountry}>Add Country</button>

      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {country.name}
            <button onClick={() => editCountry(index)}>Edit</button>
            <button onClick={() => deleteCountry(index)}>Delete</button>
            <StateList
              country={country}
              countries={countries}
              setCountries={setCountries}
              countryIndex={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
