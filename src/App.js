import React, { useState } from "react";
import CountryList from "./components/CountryList";
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);


  return (
    <div className="app-container">
      <h1>Country, State & City Management</h1>
       <div className="app">
      <CountryList countries={countries} setCountries={setCountries}/>
      </div>
    </div>
  );
}

export default App;