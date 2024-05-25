import React from 'react';
import "../../assets/style/MenuLateral.css";
import premier from "../../assets/img/logos/premier.png";
import bundesliga from "../../assets/img/logos/bundesliga.png";
import liga from "../../assets/img/logos/liga.png";
import liga1 from "../../assets/img/logos/LIGA1.png";
import seriea from "../../assets/img/logos/serieA.png";
const MenuLateral = () => {
    return (
        <div className='menuLateral ps-2'>
            <div className='container pt-3 mb-4'>
                <div className='d-flex align-items-center gap-2 mb-3'>
                    <i className="bi bi-trophy-fill"></i>
                    <span className='fs-5'>torneos</span>
                </div>
                <div className='d-flex align-items-center gap-2 text-secondary'>
                    <div className='ligas'>
                        <div className='containerLogo'>
                            <img src={premier} alt="" />
                            <span>Premier League</span>
                        </div>
                        <div className='containerLogo'>
                            <img src={bundesliga} alt="" />
                            <span>Premier League</span>
                        </div>
                        <div className='containerLogo'>
                            <img src={liga} alt="" />
                            <span>Premier League</span>
                        </div>
                        <div className='containerLogo'>
                            <img src={seriea} alt="" />
                            <span>Premier League</span>
                        </div>
                        <div className='containerLogo'>
                            <img src={liga1} alt="" />
                            <span>Premier League</span>
                        </div>
                        {/* <ul className='list-unstyled d-flex flex-column gap-3'>
                            <li> <Link to="/ligas/ENGLAND: Premier League">Premier League</Link></li>
                            <li><Link to="/ligas/ITALY: Serie A">Serie A</Link></li>
                            <li> <Link to="/ligas/SPAIN: La Liga">La Liga</Link></li>
                            <li> <Link to="/ligas/FRANCE: Ligue 1">Ligue 1</Link></li>
                            <li> <Link to="/ligas/GERMANY: Bundesliga">Bundesliga</Link></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuLateral;