# React JS Assignment: Country, State, and City Management Application

## Project Overview

This project is a **Country, State, and City Management** system built using **ReactJS** and **JavaScript** (without using any external libraries or npm packages). The application allows users to **add, edit, and delete** countries, states, and cities hierarchically.

## Folder Structure

```
react-country-state-city/
│── src/
│   │── components/
│   │   │── CountryList.js
│   │   │── StateList.js
│   │   │── CityList.js
│   │── styles/
│   │   │── countryStyles.css
│   │   │── stateStyles.css
│   │   │── cityStyles.css
│   │── App.js
│   │── index.js
│── public/
│── package.json
│── README.md
```

## Features

1. **Country Management**

   - Add, Edit, Delete countries.
   - When a country is deleted, all associated states and cities are removed.
   - Confirmation dialog before update or delete actions.

2. **State Management**

   - Add, Edit, Delete states within a country.
   - States are linked to a specific country.
   - Deleting a state removes all associated cities.
   - Confirmation dialog before update or delete actions.

3. **City Management**

   - Add, Edit, Delete cities within a state.
   - Cities are linked to a specific state.
   - Confirmation dialog before update or delete actions.

## User Interface (UI) Design

- **Main Screen**: Displays a list of countries with options to manage states and cities.
- **State Management Screen**: Lists states under a country, allowing modifications.
- **City Management Screen**: Lists cities under a state, allowing modifications.

## Components Breakdown

### 1. `App.js`

- Manages the overall state of countries, states, and cities.
- Handles adding, updating, and deleting data.

### 2. `CountryList.js`

- Displays a list of countries.
- Provides options to add, edit, and delete countries.
- Allows navigation to state management.

### 3. `StateList.js`

- Displays states for a selected country.
- Provides options to add, edit, and delete states.
- Allows navigation to city management.

### 4. `CityList.js`

- Displays cities for a selected state.
- Provides options to add, edit, and delete cities.

## Styles

- The application uses separate CSS files for better maintainability.
- Located in the `styles/` folder:
  - `countryStyles.css` (for country-related styles)
  - `stateStyles.css` (for state-related styles)
  - `cityStyles.css` (for city-related styles)

## Implementation Details

- **ReactJS**: Component-based UI structure.
- **JavaScript (ES6)**: Handles state management and interactions.
- **State Management**: Implemented using React's `useState` hook.
- **Confirmation Dialogs**: Ensures users confirm critical actions before execution.

## Running the Project

### 1. Clone the Repository

```sh
 git clone https://github.com/yourusername/react-country-state-city.git
 cd react-country-state-city
```

### 2. Install Dependencies

```sh
 npm install
```

### 3. Start the Application

```sh
 npm start
```

### 4. Open in Browser

```
http://localhost:3000
```

## Conclusion

This application provides an easy way to manage hierarchical data (Country → State → City) with essential CRUD functionalities and confirmation dialogs. The structure ensures **scalability, maintainability, and usability**.

---

Feel free to contribute or customize the application as per your needs! 🚀

