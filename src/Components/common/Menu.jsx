import React from 'react';
import "../../assets/style/Menu.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo-futbol.png"
const Menu = () => {

    const redirectToFacebook = (redSocial) => {
        const url =
            redSocial === 'instagram' ? 'https://www.facebook.com/?locale=es_LA' :
                redSocial === 'facebook' ? 'https://www.facebook.com/?locale=es_LA' :
                    redSocial === 'twitter' ? 'https://twitter.com/' : null
        // Redirigir al usuario a la página de Facebook
        if (url) {
            window.open(url, '_blank');
        } else {
            window.open('/error', '_blank');
        }
    };

    return (
        <>
            <div className='customNav'>
                <div className='logoMenu container ps-4 d-flex gap-2'>
                    <span><i className="bi bi-caret-left-square-fill text-danger fs-4"></i></span>
                    <span className='fs-4'>futbol video</span>
                </div>
                <div className='containerLinks px-4'>
                    <div className='ps-2 d-flex gap-3'>
                        <Link to={"/"} className=' fs-4 links'>Inicio</Link>
                        <Link to={"/ligas/Todos"} className='fs-4 links'>Resumenes</Link>
                    </div>
                    <div className='d-flex gap-2 pe-2'>
                        <button onClick={() => redirectToFacebook('instagram')} className='btn-link-redes'>
                            <i className="bi bi-instagram fs-4"></i>
                        </button>
                        <button onClick={() => redirectToFacebook('facebook')} className='btn-link-redes'>
                            <i className="bi bi-facebook fs-4"></i>
                        </button>
                        <button onClick={() => redirectToFacebook('twitter')} className='btn-link-redes'>
                            <i className="bi bi-twitter-x fs-4"></i>
                        </button>
                    </div>
                </div>
            </div>
            <Navbar expand="lg" className="navbar-dark">
                <Container>
                    <Navbar.Brand href="/">
                        <div className='logoMenu container d-flex gap-2'>
                            <span><i className="bi bi-caret-left-square-fill text-danger fs-4"></i></span>
                            <span className='fs-4'>futbol video</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/ligas/ENGLAND: Premier League">Resumenes</Nav.Link>
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