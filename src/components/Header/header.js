import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
    return (
        <Navbar bg="light" expand="lg" variant="light">
            <Navbar.Brand href="#home">Sophie Charlwood</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;



{/* <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link
                    to="/"
                >
                    Home
                </Nav.Link>
                <NavLink
                    to="projects"
                >
                    Projects
                </NavLink>
                <NavLink
                    to="contact"
                >
                    Contact
                </NavLink>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar> */}