import React { useState }from 'react';
import './App.css';
import axios from 'axios';



/* API from https://pokeapi.co/ */

const App = () => {
  const [pokemon, setPokemon] = useState();
  const [data, setData ] = useState([]);

  return (
    <div className="App">
      <h1> Test </h1>
    </div>
  )
};

export default App;
