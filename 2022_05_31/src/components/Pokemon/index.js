import React from 'react';
import { useGetPokemonByNameQuery } from '../../services/pokemon';

const Pokemon = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');

  return (
    <div className='App' style={{ accentColor: 'rgb(246, 198, 82)' }}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img width='250' src={data.sprites.front_shiny} alt={data.species.name} />

          <br />

          <progress />
        </>
      ) : null}
    </div>
  );
};

export default Pokemon;
