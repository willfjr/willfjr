import react, {useContext} from 'react';
import { Button } from '../Buttons/styled'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'
import {PokeBall, Square, Circle} from '../Card/styled'



function AddToPokedex(props) {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const addPokemonToPokedex = (poke) => {
    const index = states.pokeList.findIndex((pokemon) => pokemon.name === poke.name);
    
    let newPokedex = [...states.pokedex];
      newPokedex.push( states.pokeList[index] )
    setters.setPokedex(newPokedex);

    let newList = [...states.pokeData]
    newList.splice(states.pokeData[index], 1)
    setters.setPokeData(newList)
  };
  
  return (
    <PokeBall onClick={() => addPokemonToPokedex(props.pokemon)}> 
    <Square>
        <Circle/>
    </Square>            
    </PokeBall>
  )
}

export default AddToPokedex;
