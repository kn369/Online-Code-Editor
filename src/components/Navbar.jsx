import React from "react";
import { Image, Container, Navbar, Nav } from 'react-bootstrap'
import Logo from "./poem.png";

function BasicExample() {
    return (
        <Navbar className="bg-body-tertiary" expand="lg" style={{backgroundColor: 'black'}} variant="dark" fixed="top">
            <Container>
                <Navbar.Brand eventKey="link-3" href="/home">
                    Quill
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" href="/AboutPage">About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
