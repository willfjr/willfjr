import styled from 'styled-components'
import React, {useContext} from 'react'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'


const BoxList = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 100%;
    text-align: left;
`

const List = styled.ul`
    display: block;
    list-style-type: none;
    margin-top: 1em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 20px;

    h2 {
      text-align: center;
    }
`
const Item = styled.li ` 
    padding: 15px;
`

function PowerList() {
    
  const { states} = useContext(GlobalStateContext);
    return (
        <BoxList>
          <List>
            <h2>Poderes</h2>
            {states.pokeDataDetails.stats.map((stats) => {
              return(

            <Item>{stats.stat.name}: {stats.base_stat}</Item>

              )
          })}
          </List>
        </BoxList>
    )
}

export default PowerList