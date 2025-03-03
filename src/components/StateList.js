import React, { useState } from "react";
import CityList from "./CityList";
import './../styles/StateList.css'

const StateList = ({ country, countries, setCountries, countryIndex }) => {
  const [newState, setNewState] = useState("");

  const addState = () => {
    if (newState.trim()) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({ name: newState, cities: [] });
      setCountries(updatedCountries);
      setNewState("");
    }
  };

  const editState = (stateIndex) => {
    const updatedName = prompt("Enter new state name:", country.states[stateIndex].name);
    if (updatedName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].name = updatedName;
      setCountries(updatedCountries);
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.splice(stateIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="state-container">
      <h3>{country.name} - Manage States</h3>
      <input
        type="text"
        placeholder="Enter state name"
        value={newState}
        onChange={(e) => setNewState(e.target.value)}
      />
      <button onClick={addState}>Add State</button>

      <ul>
        {country.states.map((state, stateIndex) => (
          <li key={stateIndex}>
            {state.name}
            <button onClick={() => editState(stateIndex)}>Edit</button>
            <button onClick={() => deleteState(stateIndex)}>Delete</button>
            <CityList
              state={state}
              countries={countries}
              setCountries={setCountries}
              countryIndex={countryIndex}
              stateIndex={stateIndex}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateList;