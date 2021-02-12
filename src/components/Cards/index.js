import React, { useState, useEffect } from 'react';
import { HeroDiv , HeroH1 } from './Cards';
import { AppBar, Toolbar, Grid, Card, CardMedia, CardContent, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Data from '../Data';
import axios from 'axios';

 const useStyles = makeStyles({
     cardsContainer: {
         paddingTop: '20px',
         paddingLeft:  '50px',
         paddingRight: '50px'
     },

     cardMedia: {
         margin: 'auto'
     }

 });

const Cards = (props) => {
    const classes = useStyles();
    const [pokemonData, setPokemonData ] = useState([]);  
    // test with *undefined* value before Data to see the spinning (CircularProgress)
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonType, setPokemonType] = useState("")

    const getPokemon = async () => {
        const toArray = [];
        try {
            const url= `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const response = await axios.get(url)
            console.log(response)
        } catch (event) {
            console.log(event)
        }
    }

    useEffect(() => {
        getPokemon();
    }, [] )

    const pokemonCard = (item) => {
        const { id, name } = pokemonData[`${item}`];
        const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/132.png"
        console.log(pokemonData[`${item}`]);
   


        return ( <Grid item xs={12} sm={4} key={item}>
           <Card>
                <CardMedia
                className={classes.cardMedia}
                image={image}
                style={ { width: "130px", height: "130px" } }
                 />
                    <CardContent>
                        {`${id} ${name}`}
                    </CardContent>
           </Card>    
        </Grid>)
    }

    const pokemonMap = Object.keys(pokemonData).map(item => pokemonCard(item))

    return (
        <>
        <AppBar position="static">
            <Toolbar />
        </AppBar>
        <HeroDiv>
            <HeroH1> Cards page </HeroH1>
        </HeroDiv>
        <Grid container spacing={2} className={classes.cardsContainer}>
        {pokemonMap}
        {/*
        Testing
        {pokemonData ? (<Grid container spacing={2} className={classes.cardsContainer}>
                    {pokemonCard()}
                    {pokemonCard()}
                    {pokemonCard()}
                    {pokemonCard()}
                    {pokemonCard()}
                    {pokemonCard()}
                </Grid>) : (
                    <CircularProgress />
                )}
                */}
        </Grid>
        </>
    )
};

export default Cards;