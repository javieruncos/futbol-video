import React from 'react';
import "../../assets/style/Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='capaFooter container'>
                <div className='d-flex align-items-center gap-2 container'>
                    <span><i className="bi bi-caret-left-square-fill text-danger fs-4"></i></span>
                    <span className='fs-4'>futbol video</span>
                </div>
                <div className=' text-center fs-5'>
                    <span>© 2022. Todos los derechos reservados.</span>
                </div>
                <div className='redes container'>
                    <span><i className="bi bi-instagram fs-4"></i></span>
                    <span><i className="bi bi-facebook fs-4"></i></span>
                </div>
            </div>

        </div>
    );
};

export default Footer;