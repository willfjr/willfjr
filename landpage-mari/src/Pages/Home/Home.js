import React from "react"
import { useHistory, useParams } from "react-router-dom";
import { Container } from "./styled";


const Home =()=>{

    const history = useHistory();

    return(
        <Container>
            <h1>Home page</h1>
        </Container>
    )
}
export default Home