import React from 'react';
import "../../assets/style/PortadaMenu.css";
import jugadores from "../../assets/img/jugadores.png"
import { Link } from 'react-router-dom';
const PortadaMenu = () => {
    return (
        <>
            <div className='portadaMenu mt-5'>
                <img src="https://images.alphacoders.com/510/510026.jpg" alt="" />
                <div className='capa-portada'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6'>
                            <div className='container pt-4 tituloPortada'>
                                <h1 className='display-1 fw-bold'>Sport Resultados</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Commodi cupiditate voluptates autem minima aut delectus?
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
                        <div className='col-6 col-3 col-lg-3'>
                            <Link to="/ligas/ENGLAND: Premier League">
                                <div className='equiposMenu'>
                                    <div className='equipoNombre'>
                                        <div className='escudo'>
                                            <img src="https://turismo.org/wp-content/uploads/2010/09/Bandera-de-Inglaterra.png" alt="" />
                                        </div>
                                        <div className=' w-100 d-flex justify-content-center align-items-center pt-4'>
                                            <span>Inglaterra</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-6 col-3 col-lg-3'>
                            <Link to="/ligas/ITALY: Serie A">
                                <div className='equiposMenu'>
                                    <div className='equipoNombre'>
                                        <div className='escudo'>
                                            <img src="https://static.vecteezy.com/system/resources/previews/011/017/088/original/italian-flag-of-italy-png.png" alt="" />
                                        </div>
                                        <div className=' w-100 d-flex justify-content-center align-items-center pt-4'>
                                            <span>Italia</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-6 col-3 col-lg-3'>
                            <Link to="/ligas/FRANCE: Ligue 1">
                                <div className='equiposMenu'>
                                    <div className='equipoNombre'>
                                        <div className='escudo'>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png" alt="" />
                                        </div>
                                        <div className=' w-100 d-flex justify-content-center align-items-center pt-4'>
                                            <span>Francia</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-6 col-3 col-lg-3'>
                            <Link to="/ligas/SPAIN: La Liga">
                                <div className='equiposMenu'>
                                    <div className='equipoNombre'>
                                        <div className='escudo'>
                                            <a href="">
                                                <img src="https://th.bing.com/th/id/OIP.Hupo_5BQugE89VTqT29_oQHaE7?rs=1&pid=ImgDetMain" alt="" />
                                            </a>
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