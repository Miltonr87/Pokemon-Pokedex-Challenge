import React, { useState } from 'react';
import { HeroDiv , HeroH1 } from './Cards';
import { AppBar, Toolbar, Grid, Card, CardContent, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Data from '../Data';

 const useStyles = makeStyles({
     pokedexContainer: {
         paddingTop: '20px',
         paddingLeft:  '50px',
         paddingRight: '50px'
     }
 });

 

const Cards = () => {
    const classes = useStyles();
    const [pokemonData, setPokemonData ] = useState(Data);  
    // testing with *undefined* value before Data to see the spinning (CircularProgress)

    const pokemonCard = (item) => {
        console.log(pokemonData[`${item}`]);
        return ( <Grid item xs={12} sm={4} key={item}>
           <Card>
               <CardContent>
                   Card
               </CardContent>
           </Card>    
        </Grid>)
    }

    

    return (
        <>
        <AppBar position="static">
            <Toolbar />
        </AppBar>
        <HeroDiv>
            <HeroH1> Cards page </HeroH1>
        </HeroDiv>
        <Grid container spacing={2} className={classes.pokedexContainer}>
        {Object.keys(pokemonData).map(item => pokemonCard(item))}
        {/*
        Testing
        {pokemonData ? (<Grid container spacing={2} className={classes.pokedexContainer}>
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