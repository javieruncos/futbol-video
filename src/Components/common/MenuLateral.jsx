import React from 'react';
import "../../assets/style/MenuLateral.css";
import premier from "../../assets/img/logos/premier.png";
import bundesliga from "../../assets/img/logos/bundesliga.png";
import liga from "../../assets/img/logos/liga.png";
import liga1 from "../../assets/img/logos/LIGA1.png";
import seriea from "../../assets/img/logos/serieA.png";
import { Link } from 'react-router-dom';
const MenuLateral = () => {
    return (
        <div className='menuLateral ps-2'>
            <div className='container pt-3 mb-4'>
                <div className='d-flex align-items-center gap-2 mb-3'>
                    <i className="bi bi-trophy-fill fs-4"></i>
                    <span className='fs-4'>torneos</span>
                </div>
                <div className='d-flex align-items-center gap-2 text-secondary'>
                    <div className='ligas'>
                        <div className='containerLogo'>
                            <Link to="/ligas/ENGLAND: Premier League">
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={premier} alt="" />
                                    <span>Premier League</span>
                                </div>
                            </Link>
                        </div>
                        <div className='containerLogo'>
                            <div className='d-flex align-items-center gap-2'>
                                <Link to="/ligas/GERMANY: Bundesliga">
                                    <div className='d-flex align-items-center gap-2'>
                                        <img src={bundesliga} alt="" />
                                        <span>Bundesliga</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='containerLogo'>
                            <Link to="/ligas/SPAIN: La Liga">
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={liga} alt="" />
                                    <span>La Liga</span>
                                </div>
                            </Link>
                        </div>
                        <div className='containerLogo'>
                            <Link to="/ligas/ITALY: Serie A">
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={seriea} alt="" />
                                    <span>Serie A</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuLateral;