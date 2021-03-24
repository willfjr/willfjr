import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from '../Pages/Home/Home';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';


const Router = () => {
    
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router