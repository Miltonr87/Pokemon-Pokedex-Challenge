import React, { useState, useEffect } from "react";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import { PokemonProfile, Section, Container } from "./Pokemon";
import axios from "axios";
/* import Data from '../Data'; */

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const {
      name,
      id,
      species,
      height,
      weight,
      types,
      abilities,
      stats,
    } = pokemon;
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    return (
      <>
        <Section>
          <Container>
            <Typography variant="h1">{`${name}`}</Typography>
            <PokemonProfile src={imageUrl} alt="Image" />
            <Typography variant="h3">Pokemon Info</Typography>
            <Typography>
              {"Species: "}
              <Link href={species.url}>{species.name} </Link>
            </Typography>
            <Typography>Height: {height} </Typography>
            <Typography>Weight: {weight} </Typography>
            <Typography variant="h6"> Types:</Typography>
            {types.map((typeInfo) => {
              const { type } = typeInfo;
              const { name } = type;
              return <Typography key={name}> {`${name}`}</Typography>;
            })}
            <Typography variant="h6"> Powers:</Typography>
            {abilities.map((abilityInfo) => {
              const { ability } = abilityInfo;
              const { name } = ability;
              return <Typography key={name}> {`${name}`}</Typography>;
            })}
            <Typography variant="h6"> Status:</Typography>
            {stats.map((statInfo) => {
              const { stat } = statInfo;
              const { name } = stat;
              const { base_stat } = statInfo;
              return (
                <Typography key={name}>
                  {" "}
                  {`${name}`}: {`${base_stat}`}
                </Typography>
              );
            })}
          </Container>
        </Section>
      </>
    );
  };
  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          Back to Pokedex
        </Button>
      )}
    </>
  );
};

export default Pokemon;
