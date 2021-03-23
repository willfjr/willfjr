import { BrowserRouter, Switch, Route} from "react-router-dom"
import Header from '../Components/Header'
import Home from '../Pages/Home/Home'
import Pokedex from '../Pages/Pokedex/Pokedex'
import Details from '../Pages/Details/Details'

const Router = () => {

    return(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/pokedex">
                <Pokedex/>
            </Route>
            <Route exact path="/details">
                <Details/>
            </Route>
            <Route>
                <div>error</div>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Router