import React from 'react';
import { createGlobalStyle } from "styled-components";
import Cards from './components/Cards';
import Pokemon from './components/Pokemon';
import { Route, Switch } from 'react-router-dom';
/* import NavBar from './components/NavBar'; */

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ubuntu;
    background-color: yellow;
}

`;

const App = () => {

  return (
      <>
      <GlobalStyle />
      <Switch>
          <Route 
          path="/"
          exact 
          render={(props) => <Cards {...props} />} />
          
          <Route 
          path="/:pokemonId" 
          exact
          render={(props) => <Pokemon {...props} />} />

      </Switch>
      </>);
};

export default App;
