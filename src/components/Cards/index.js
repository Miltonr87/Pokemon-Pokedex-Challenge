import React, { useState, useEffect } from 'react';
import { 
  useStyles, 
  CardMediaUI, 
  TitleDiv, 
  TitleH1 } from './Cards'; 
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Toolbar,
    AppBar,
    TextField,
    IconButton
  } from "@material-ui/core"; 
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
/* import Data from '../Data'; */
import axios from 'axios';


const Cards = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");
  

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];
    const clicked = () => {
      history.push(`/${id}`)
    }

    return (
      <Grid item xs={4} key={pokemonId}>
        <Card onClick={clicked}>
          <CardMediaUI
            className={classes.cardMedia}
            image={sprite}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${name}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  /* Object Map for data with filter includes getPokemonCard. Anything goes to another page */
  const pokemonMap = Object.keys(pokemonData).map(
    (pokemonId) => pokemonData[pokemonId].name.includes(filter) && getPokemonCard(pokemonId))
  
  /* event handler for TextField */  
  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Pokedex
          </Typography>
          <div className={classes.searchContainer}>
                  <TextField
                  className={classes.searchInput}
                  onChange={handleSearchChange}
                  label="Search"
                  variant="standard"
                  />
                  <SearchIcon className={classes.searchIcon} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
      <TitleDiv>
        <TitleH1> Pokemon Card List </TitleH1>
      </TitleDiv>
        {pokemonData ? (
            <Grid container spacing={2} className={classes.pokedexContainer}>
            {pokemonMap}
            </Grid>
        ) : (
            <CircularProgress />
        )}
    </>
  );
};


export default Cards;