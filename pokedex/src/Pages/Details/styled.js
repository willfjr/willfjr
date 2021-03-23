import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 90vh;
    text-align: center;

    @media(max-width: 800px){
    flex-direction: column;
    width: 100vw;
    height: auto;
    margin-bottom: 5%;
    }
`
export const Box = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;

    @media(max-width: 800px){
    width: 98vw;
    height: 98%;
    align-self: center;
    }
`

export const LeftCard = styled.div `
    display: flex;
    align-self: center;
    flex-direction: column;
    background-color: #DDD;
    width: 40%;
    height: 30%;
    margin: 50px;
    border-radius: 10%;

    img {
        object-fit:cover;
    }

    @media(max-width: 1024px){
    width: 50%;
    height: 25%;
    margin: 10%;
    }

    @media(max-width: 800px){
    width: 25%;
    height: 10%;
    margin: 2%;
    }
`
export const MiddleCard = styled.div `
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: #DDD;
    width: 80%;
    height: 75%;
    padding: 5%;
    border-radius: 10%;

    h1 {
        padding: 10px;
    }

    @media(max-width: 1024px){
    width:85%;
    height: 65%;
    margin: 2%;
    }
    
    @media(max-width: 800px){
    width:50%;
    height: 40%;
    margin: 2%;
    }

`
export const RightTopCard = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    background-color: #DDD;
    width: 80%;
    height: 10%;
    margin-bottom:10px;
    padding: 5px;
    border-radius: 15px;

    @media(max-width: 1024px){
    width: 40%;
    margin: 10%;
    }

    @media(max-width: 800px){
    margin: 2%;
    }
`
export const RightCard = styled.div `
    display: flex;
    align-self: center;
    background-color: #DDD;
    flex-direction: column;
    width: 80%;
    height: 40%;
    padding: 10px;
    border-radius: 20px;
    align-items: center;

    @media(max-width: 1024px){
    width: 80%;
    height: 20%;
    margin: 5%;
    border-radius: 20px;
    align-items: center;
    }

    @media(max-width: 800px){
    width: 50%;
    margin: 2%;
    }
`