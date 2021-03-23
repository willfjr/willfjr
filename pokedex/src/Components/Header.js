import styled from 'styled-components'
import React, {useContext, useEffect} from 'react'
import GoToPokedex from './Buttons/GoToPokedex'
import GoToHome from './Buttons/GoToHome'
import GoBack from './Buttons/GoBack'
import GlobalStateContext from '../Global/Contexts/GlobalStateContext'
import logo from './pokedex_logo.png'

const HeaderBox = styled.header`
    display:flex;
    align-items: center;
    padding: 5px;  
    background: #d53b47;
    max-width: 100vw;
    height: 10vh;

`
const Title = styled.img`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 300px;
    font-size: 25px;
    font-weight: bold;
    object-fit:cover;
    
    @media(max-width: 800px){
    font-size: 1rem;
    margin-left: 5vw;
    }
`

function Header() {
    
  const { states, setters, requests } = useContext(GlobalStateContext);

    if(states.page === "home"){
        
        return (
            <HeaderBox>
                <GoToPokedex/>
                <Title src={logo}/>
            </HeaderBox>
        )
    } else if(states.page === "pokedex") {
        return (
            <HeaderBox>
                <GoToHome/>
                <Title src={logo}/>
                
             
            </HeaderBox>
        )
    } else if(states.page === "details") {
        return(
            <HeaderBox>
                <GoBack/>
                <Title>Pokemon</Title>
                <GoToPokedex/>
            </HeaderBox>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Header