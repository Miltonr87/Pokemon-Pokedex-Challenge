import React from 'react';
import { createGlobalStyle } from "styled-components";
import Cards from './components/Cards';
import Pokemon from './components/Pokemon';
import { Route, Switch } from 'react-router-dom';
/* import NavBar from './components/NavBar'; */

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  height: 100%;
  background: #f6e6b4; /* Old browsers */
    background: -moz-linear-gradient(top, #f6e6b4 0%, #ed9017 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f6e6b4), color-stop(100%,#ed9017)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* IE10+ */
    background: linear-gradient(top, #f6e6b4 0%,#ed9017 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6e6b4', endColorstr='#ed9017',GradientType=0 ); /* IE6-9 */
    margin-bottom: 5rem;
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
