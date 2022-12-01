import React from "react";
import { Link } from "react-router-dom";

// StyleSheet
// import '../Css/Nav.css'
import {Container, Navbar, Nav} from 'react-bootstrap'

export default function NavApp(){
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={'/'}>Futbol</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={'/Country'}>Paises</Nav.Link>
                            <Nav.Link as={Link} to={'/League'}>Ligas</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to={'/Contact'}>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}