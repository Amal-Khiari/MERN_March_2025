import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => {
        setPokemonList(res.data.results);
      })
      .catch(err => {
        console.error("Error fetching Pokémon:", err);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Pokémon API</h2>
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: '0 auto', 
        display: 'inline-block',
        textAlign: 'left' 
      }}>
        {pokemonList.map((pokemon, index) => (
          <li key={index} style={{ margin: '5px 0', fontSize: '16px' }}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;