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
                            <Link to="">
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
                            <Link to="">
                                <div className='equiposMenu'>
                                    <div className='equipoNombre'>
                                        <div className='escudo'>
                                            <img src="https://flagcdn.com/w2560/de.png" alt="" />
                                        </div>
                                        <div className=' w-100 d-flex justify-content-center align-items-center pt-4'>
                                            <span>Alemania</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-6 col-3 col-lg-3'>
                            <Link to="">
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
                            <Link to="">
                                <div className='equiposMenu'>
                                    <div className='equipoNombre'>
                                        <div className='escudo'>
                                            <a href="">
                                                <img src="https://logodownload.org/wp-content/uploads/2022/06/bandeira-argentina-flag.png" alt="" />
                                            </a>
                                        </div>
                                        <div className='w-100 d-flex justify-content-center align-items-center pt-4'>
                                            <span>Argentina</span>
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