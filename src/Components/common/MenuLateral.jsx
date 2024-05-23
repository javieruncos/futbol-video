import React from 'react';
import "../../assets/style/MenuLateral.css";
import { Link } from 'react-router-dom';
const MenuLateral = () => {
    return (
        <div className='menuLateral'>
            <div className='container pt-3 mb-4'>
                <div className='d-flex align-items-center gap-2 mb-3'>
                    <i className="bi bi-trophy-fill"></i>
                    <span className='fs-5'>torneos</span>
                </div>
                <div className='d-flex align-items-center gap-2 text-secondary'>
                    <div className='ligas'>
                        <ul className='list-unstyled d-flex flex-column gap-3'>
                            <li> <Link to="/ligas/ENGLAND: Premier League"><i className="bi bi-trophy-fill me-2"></i>Premier League</Link></li>
                            <li><Link to="/ligas/ITALY: Serie A"><i className="bi bi-trophy-fill me-2"></i>Serie A</Link></li>
                            <li> <a href=""><i className="bi bi-trophy-fill me-2"></i>La Liga</a></li>
                            <li> <a href=""><i className="bi bi-trophy-fill me-2"></i>Ligue 1</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='d-flex align-items-center gap-2 mb-3'>
                    <i className="bi bi-fire"></i>
                    <span className='fs-5'>Destacados</span>
                </div>
                <div className='ligas'>
                    <ul className='list-unstyled d-flex flex-column gap-3 text-secondary'>
                        <li><a href=""><i className="bi bi-shield-fill me-2"></i>Real Madrid</a></li>
                        <li><a href=""><i className="bi bi-shield-fill me-2"></i>Bayern Munich</a></li>
                        <li><a href=""><i className="bi bi-shield-fill me-2"></i>Manchester City</a></li>
                        <li><a href=""><i className="bi bi-shield-fill me-2"></i>PSG</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuLateral;