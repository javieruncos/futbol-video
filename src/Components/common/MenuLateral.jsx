import React from 'react';
import "../../assets/style/MenuLateral.css";
import { Link } from 'react-router-dom';
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
                        <ul className='list-unstyled d-flex flex-column gap-3'>
                            <li> <Link to="/ligas/ENGLAND: Premier League">Premier League</Link></li>
                            <li><Link to="/ligas/ITALY: Serie A">Serie A</Link></li>
                            <li> <Link to="/ligas/SPAIN: La Liga">La Liga</Link></li>
                            <li> <Link to="/ligas/FRANCE: Ligue 1">Ligue 1</Link></li>
                            <li> <Link to="/ligas/GERMANY: Bundesliga">Bundesliga</Link></li>
                            <li> <Link to="/ligas/todos">todos</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuLateral;