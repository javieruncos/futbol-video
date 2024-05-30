import React from 'react';
import "../../assets/style/PortadaMenu.css";
import jugadores from "../../assets/img/jugadores.png"
import { Link } from 'react-router-dom';
import inglaterra from "../../assets/img/banderas/Bandera-de-Inglaterra.png"
import italia from "../../assets/img/banderas/bandera-de-italia.webp"
import españa from "../../assets/img/banderas/bandera-de-españa.jpg"
import francia from "../../assets/img/banderas/bandera-de-francia.png"
import estadio from "../../assets/img/estadio.jpg"
const PortadaMenu = () => {
    return (
        <>
            <div className='portadaMenu mt-5'>
                <img src={estadio} alt="" />
                <div className='capa-portada'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6'>
                            <div className='container pt-4 tituloPortada'>
                                <h1 className=' fw-bold'>Fútbol Flash</h1>
                                <p>¡Bienvenido a nuestro sitio especializado en resúmenes de partidos de fútbol
                                Desde las ligas locales hasta los torneos internacionales, 
                                </p>
                                <div className='mt-4'>
                                    <a href='/ligas/Todos'>Ver todos</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6'>
                            <div className='container-img'>
                                <img src={jugadores} alt="jugadores real madrid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MenuTorneos container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 col-md-3 col-lg-3'>
                            <Link to="/ligas/ENGLAND: Premier League">
                                <div className='equiposMenu'>
                                    <div className='equipoNombre'>
                                        <div className='escudo'>
                                            <img src={inglaterra} alt="" />
                                        </div>
                                        <div className=' w-100 d-flex justify-content-center align-items-center pt-4'>
                                            <span>Inglaterra</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-6 col-md-3 col-lg-3'>
                            <Link to="/ligas/ITALY: Serie A">
                                <div className='equiposMenu'>
                                    <div className='equipoNombre'>
                                        <div className='escudo'>
                                            <img src={italia} alt="" />
                                        </div>
                                        <div className=' w-100 d-flex justify-content-center align-items-center pt-4'>
                                            <span>Italia</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-6 col-md-3 col-lg-3'>
                            <Link to="/ligas/FRANCE: Ligue 1">
                                <div className='equiposMenu'>
                                    <div className='equipoNombre'>
                                        <div className='escudo'>
                                            <img src={francia} alt="" />
                                        </div>
                                        <div className=' w-100 d-flex justify-content-center align-items-center pt-4'>
                                            <span>Francia</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-6 col-md-3 col-lg-3'>
                            <Link to="/ligas/SPAIN: La Liga">
                                <div className='equiposMenu'>
                                    <div className='equipoNombre'>
                                        <div className='escudo'>
                                                <img src={españa} alt="" />
                                        </div>
                                        <div className='w-100 d-flex justify-content-center align-items-center pt-4'>
                                            <span>España</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortadaMenu;