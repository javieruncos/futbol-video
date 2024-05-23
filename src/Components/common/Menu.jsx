import React from 'react';
import "../../assets/style/Menu.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar-dark">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/detalle">Home</Nav.Link>
                            <Nav.Link href="/ligas/ENGLAND: Premier League">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;