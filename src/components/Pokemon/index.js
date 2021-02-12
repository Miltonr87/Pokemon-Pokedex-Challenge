import React, { useState } from 'react';
import Data from '../Data';
import { Typography } from "@material-ui/core";

const Pokemon = (props) => {
    const { match } = props;
    const { params } = match;
    const { item } = params;
    const [ pokemon, setPokemon ] = useState(Data[`${item}`]);

    const generatePokemon = () => {
        const { name, id, species, height, weight, types, sprites} = pokemon;
        const imageURL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;

        return (
            <Typography variant="h1">
                {`${id}.`} {name}
                <img src={imageURL} />
            </Typography>
        )
    };

    return (
        <>
         {/* <h1>`Pokemon card number ${item}`</h1> */}
            {generatePokemon()}
        </>
    )
};

export default Pokemon;