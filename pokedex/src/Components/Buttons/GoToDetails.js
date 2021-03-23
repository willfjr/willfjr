import { goToDetails } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import React, {useContext} from 'react'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'
import {Details} from './styled'

const Button = styled.button`
`

const GoToDetails = (props) => {
  const { states, setters, requests } = useContext(GlobalStateContext);

    const history = useHistory()

    const selectPokemon = (pokemon) => {
        const index = states.pokeList.findIndex((poke) => poke.name === pokemon.name);

        const pokemonToDetails = states.pokeList[index]
        setters.setPokeDetails(pokemonToDetails)
    };

    const detailsFunction = (pokemon) => {
        selectPokemon(pokemon)
        goToDetails(history)
    }

    return (
        <Details onClick={() => detailsFunction(props.pokemon)}>+</Details>
    )
}

export default GoToDetails