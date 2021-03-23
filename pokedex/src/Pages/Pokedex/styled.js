import styled from 'styled-components'

export const PokedexContainer = styled.div`
max-width:100vw;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
background-color: white;
`

export const PokeBall = styled.div `
    display: flex;
    position: fixed;
    width: 500px;
    height: 500px;
    margin: auto;
    top: 15%;
    background-color: #e9e9e9;
    border-radius: 50%;
    /* cursor: pointer;

    :hover { 
        transition: all 2s;
        background-color: #d53b47;
        border: 4px solid white;
        width: 55px;
        height: 55px;
    }

    :hover > div { 
        transition: all 2s;
        background-color: white;
    }

    :hover > div > div { 
        transition: all 2s;
        border: 4px solid white;
        background-color: #d53b47;
    } */
`
export const Square = styled.div `
    display: flex;
    justify-content:center;
    align-items: center;
    align-self: center;
    width: 600px;
    height: 50px;
    border-radius: 2px;
    background-color: white;
`
export const Circle = styled.div `
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: #e9e9e9;
    border-radius: 50%;
    border: 40px solid white;
`