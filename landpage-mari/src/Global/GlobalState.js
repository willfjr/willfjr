import GlobalStateContext from './GlobalStateContext'
import React,{useState} from 'react'


const GlobalState = (props) => { 

    return (
        <GlobalStateContext.Provider value={data}>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;