import React from 'react';
import "../../assets/style/Menu.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <>
            <div className='customNav'>
                <div className='logoMenu container ps-4'>
                    logo
                </div>
                <div className='containerLinks px-4'>
                    <div className='ps-2'>
                        <Link to={"/"} className='text-decoration-none text-light'>Inicio</Link>
                    </div>
                    <div className='d-flex gap-3 pe-2'>
                        <Link to={"/"} className='text-decoration-none text-light'>
                            <i className="bi bi-instagram fs-3"></i>
                        </Link>
                        <Link to={"/"} className='text-decoration-none text-light'>
                            <i className="bi bi-facebook fs-3"></i>
                        </Link>
                    </div>
                </div>

            </div>


            <Navbar expand="lg" className="navbar-dark">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/detalle">Home</Nav.Link>
                            <Nav.Link href="/ligas/ENGLAND: Premier League">Link</Nav.Link>
                            <div className='ligasMenu'>
                                <ul className='list-unstyled d-flex flex-column gap-3'>
                                    <li> <Link to="/ligas/ENGLAND: Premier League">Premier League</Link></li>
                                    <li><Link to="/ligas/ITALY: Serie A">Serie A</Link></li>
                                    <li> <Link to="/ligas/SPAIN: La Liga">La Liga</Link></li>
                                    <li> <Link to="/ligas/FRANCE: Ligue 1">Ligue 1</Link></li>
                                    <li> <Link to="/ligas/GERMANY: Bundesliga">Bundesliga</Link></li>
                                </ul>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;