import React from 'react';
//import { NavLink } from 'react-router-dom';
import "./header.css"
//import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Sophie Charlwood</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects">
                        <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header

