import React from 'react';
import { createGlobalStyle } from "styled-components";
import Cards from './components/Cards';
import Pokemon from './components/Pokemon';
import { Route, Switch } from 'react-router-dom';

/* import NavBar from './components/NavBar'; */

const GlobalStyle = createGlobalStyle`

  * {
    font-family: ubuntu;
}

body {
  margin: 0;
  height: 100%;
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
          path="/:item" 
          exact
          render={(props) => <Pokemon {...props} />} />

      </Switch>
      </>);
};

export default App;
