import React from "react";
import MainLayout from "../Layout/MainLayout";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Body from "../components/body";


function HomePage(){
    return(
       <Container fluid style={{padding: 0, background: 'black'}}>
            <MainLayout></MainLayout>
            <Header></Header>
       </Container>
    )
}

export default HomePage