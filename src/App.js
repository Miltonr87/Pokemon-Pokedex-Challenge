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
  background: #7abcff; /* Old browsers */
    background: -moz-linear-gradient(top, #7abcff 0%, #60abf8 44%, #4096ee 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#7abcff), color-stop(44%,#60abf8), color-stop(100%,#4096ee)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* IE10+ */
    background: linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* W3C */
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
