import React, {useContext, useState, useEffect} from 'react';
import AddToPokedex from '../Buttons/AddToPokedex';
import RemoveToPokedex from '../Buttons/RemoveToPokedex'
import GoToDetails from '../Buttons/GoToDetails'
import {ContainerCard, ImageCard, ButtonContainer, PokeBall, Circle, Square} from '../Card/styled'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'
import axios from 'axios'
import { goToDetails } from '../../Router/Coordinator';
import { useHistory } from 'react-router-dom'

function Cards(props) {
  
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [pokeColor, setPokeColor] = useState();
 
  const color = () => { 
    if (props.pokemon.types[0].type.name === 'normal') {
    return setPokeColor( '#E9D6BC') 

  } else if (props.pokemon.types[0].type.name === 'grass') {
    return setPokeColor( "#28F0C4") 

  } else if (props.pokemon.types[0].type.name === 'fire') {
    return setPokeColor( "#f58634") 
  
  }  else if (props.pokemon.types[0].type.name === 'water') {
    return setPokeColor( "#15BEF0") 
  
  }  else if (props.pokemon.types[0].type.name === 'bug') {
    return setPokeColor( "#7BF051") 
  } 

  else  { return setPokeColor("white")}
  }

  useEffect(() => {
    color()

    },[props.pokemon])
  

    if(states.page === "home"){

        
        return (
        <div>
          {props.pokemon ? 
          <ContainerCard 
            key={props.pokemon.id} 
            style = {{backgroundColor: `${pokeColor}`}} 
          >  
            <ImageCard src={props.pokemon.sprites.front_default}/>
            <ButtonContainer>
              <AddToPokedex pokemon={props.pokemon}/>
              <GoToDetails/>
            </ButtonContainer>
          </ContainerCard> : null}
        </div>
        )
    } else if(states.page === "pokedex") {
        return (
        <>
          {props.pokemon ?

          <ContainerCard 
            key={props.pokemon.id} 
            style = {{backgroundColor: `${pokeColor}`}} 
          >  
            <ImageCard src={props.pokemon.sprites.front_default}/>
            <ButtonContainer>
              <RemoveToPokedex/>
            </ButtonContainer>
          </ContainerCard> : null}
        </>
        )
    } else {
      return (
        <div>carregando...</div>
      )
    }
}

export default Cards;
