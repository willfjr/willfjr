import styled from 'styled-components'


export const Button = styled.button`
    color: black;
    font-size: 10px;
    font-family: "montserrat";
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 1s all ease;
    width: 90px;
    height: 30px;
    border-radius: 25px;
    border: 1px solid black;
    background-color: transparent;
    padding: 5px;

    :hover {
        transition: all 1.0s ease;
        background: #ff7675;
        content: "";
        transform: translate(-50%,-50%);
        z-index: -1;
        width: 150px;
        height: 50px;
        font-size: 10px;
    }
`

export const Details = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #3f3f3f;
    padding: 20px;
    width: 20px;
    height: 20px;
    font-size: 2.5rem;
    text-decoration: none;
    border-radius: 50%;
    position: relative;
    background-color: transparent;
    bottom: 20px;
    z-index: 1;
    transition: all 2s;
    text-shadow: 0px 0px #bdbebd,
                1px 1px #bdbebd,
                2px 2px white;
    cursor: pointer;

    :hover {
        color: #d53b47;
        transform: rotate(360deg);
        font-size: 40px;
        text-shadow: 0px 0px #bdbebd,
                1px 1px #bdbebd,
                2px 2px white;
    }

`