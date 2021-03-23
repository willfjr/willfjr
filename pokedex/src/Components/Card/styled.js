import styled from 'styled-components';


export const ContainerCard =styled.div`
    display:flex;
    flex-wrap: nowrap;
    width:250px;
    height:150px;
    margin: 10px;
    justify-content: space-around;
    border: none;
    border-radius: 28px;
    border: 6px solid #3f3f3f;
    z-index: 1000;
`
export const ImageCard=styled.img`
    display:flex;
    align-self: center;
    width:100%;
    height: 100%;
    justify-content:center;
    align-items:center;
    object-fit: contain;
    z-index: 201;
    background-color: #3f3f3f;
    border-radius: 20px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
`
export const ButtonContainer =styled.div`
display:flex;
justify-content: center;
gap: 10px;
align-items: center;
flex-direction:column;
height: 100%;
margin: 0px 15px 0px 15px;
`


export const PokeBall = styled.div `
    display: flex;
    align-content: center;
    margin: auto;
    position: sticky;
    width: 50px;
    height: 50px;
    background-color: #3f3f3f;
    border: 4px solid #bdbebd;
    border-radius: 50%;
    cursor: pointer;

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
    }
`
export const Square = styled.div `
    display: flex;
    justify-content:center;
    align-items: center;
    align-self: center;
    width: 100px;
    height: 5px;
    border-radius: 1px;
    background-color: #bdbebd;
`
export const Circle = styled.div `
    justify-content: center;
    width: 10px;
    height: 10px;
    z-index: 200;
    background-color: #3f3f3f;
    border-radius: 50%;
    border: 3px solid #bdbebd;
`