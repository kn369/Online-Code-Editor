import React from "react";
import Navbar from "../components/Navbar"
import { Container, Accordion, AccordionItem } from "react-bootstrap";


function AboutPage() {

    return (
        <>
            <Navbar></Navbar>
            <Container className="mainBody" fluid  style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100vh', backgroundColor: 'black' }}>
    
            </Container>
        </>
    );
}

export default AboutPage;