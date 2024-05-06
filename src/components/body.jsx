import React from "react";
import { Container } from 'react-bootstrap'
import './body.css'


function Body({children}){
    return(
        <Container className="mainbody" fluid>
            <Container>
                <p style={{fontSize: '1vw'}}>Bring the whole team</p>
            </Container>
        </Container>
    );
}

export default Body;