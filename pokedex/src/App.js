import Router from './Router/Router'
import React from "react";
import './App.css';
import GlobalState from "./Global/GlobalState";


const App = props => {
  return (
    
    <GlobalState>
      <Router/>
    </GlobalState>
  
  );
  }

export default App;