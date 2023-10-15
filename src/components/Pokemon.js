import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
//what are the next steps i need to do? 
// Find the right endpoint in pokemon docs. 
// put into axios call
// check our response in inspect tools
//after its correct, Set the list into pokemon list
// set list to setter - .notation
// 

const Pokemon = () => {
    const [pokemonList, setpokemonList] = useState([])
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=807"

    useEffect(() => {
        // Fetch the data
        axios.get(`${apiUrl}/?limit=807&offset=60`)
            .then(Response => {
                console.log(Response)
                setpokemonList(Response.data.results);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <div className='con'>
            <h1>PokeDash</h1>
            {pokemonList.map((poke, i) => {
                return (
                    <div key={i}>
                        <p>{poke.name}</p>
                        <p>{poke.url}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Pokemon