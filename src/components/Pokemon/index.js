import React, { useState, useEffect } from 'react';
import Data from '../Data';
import { Typography, Link } from "@material-ui/core";
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';

const Pokemon = (props) => {
    const { match } = props;
    const { params } = match;
    const { item } = params;
    const [ pokemon, setPokemon ] = useState(Data[`${item}`]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/${item}')
            .then(function (response) {
                const { data } = response;
                setPokemon(data);
            })
    });    

    const generatePokemon = () => {
        const { 
            name, 
            id, 
            species, 
            height, 
            weight, 
            types, 
            sprites} = pokemon;
        const imageURL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;

        return (
            <>
            <Typography variant="h1">
                {`${id}.`} {name}
                <img style={{ width: "330px", height: "300px" }} src={imageURL} />
            </Typography>
            <Typography>
                {"Species: "}
                <Link href={species.url}>{species.name}</Link>
            </Typography>
            <Typography>Height: {height}</Typography>
            <Typography>Weight: {weight}</Typography>
            <Typography variant="h6">Types: </Typography>
            </>
        )
    };

    return (
        <>
        {/* <h1>`Pokemon card number ${item}`</h1> */}
        {pokemon === undefined && <CircularProgress />}
        {pokemon !== undefined && pokemon && generatePokemon()}
        {pokemon === false && <Typography> generatePokemon() </Typography>}
        </>
    )
};

export default Pokemon;