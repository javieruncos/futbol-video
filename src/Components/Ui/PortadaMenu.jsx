import React from 'react';
import "../../assets/style/PortadaMenu.css"
const PortadaMenu = () => {
    return (
        <>
            <div className='portadaMenu my-3'>
                <div className='container'>
                    <h1> menu</h1>
                </div>
            </div>
            <div className='MenuTorneos'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-3 col-lg-3'>
                            <div className='equiposMenu'>
                                <div className='equipoNombre'>
                                    <div className='escudo'>
                                        <img src="https://www.freeiconspng.com/uploads/real-madrid-logo-png-1.png" alt="" />
                                    </div>
                                    <div className=' w-100 d-flex justify-content-center align-items-center pt-4'>
                                        <span>Real Madrid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-3 col-lg-3'>
                            <div className='equiposMenu'>
                                <div className='equipoNombre'>
                                    <div className='escudo'>
                                        <img src="https://1.bp.blogspot.com/-Ok3NEcPXVSw/XwI2bRzkRxI/AAAAAAAAQr4/w07J3peUsWEryGizvVpTQrGbTXQ2ezKfwCLcBGAsYHQ/s1600/bayern%2Bmunich%2Blogo.png" alt="" />
                                    </div>
                                    <div className=' w-100 d-flex justify-content-center align-items-center pt-4'>
                                        <span>Bayern Munich</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-3 col-lg-3'>
                            <div className='equiposMenu'>
                                <div className='equipoNombre'>
                                    <div className='escudo'>
                                        <img src="https://logodownload.org/wp-content/uploads/2017/02/Arsenal-logo-escudo-shield-1.png" alt="" />
                                    </div>
                                    <div className=' w-100 d-flex justify-content-center align-items-center pt-4'>
                                        <span>Arsenal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-3 col-lg-3'>
                            <div className='equiposMenu'>
                                <div className='equipoNombre'>
                                    <div className='escudo'>
                                        <a href="">
                                            <img src="https://th.bing.com/th/id/R.80f940efc74de2aa91de7ae9032dd080?rik=zvEeKregmzQOnA&pid=ImgRaw&r=0" alt="" />
                                        </a>
                                    </div>
                                    <div className='w-100 d-flex justify-content-center align-items-center pt-4'>
                                        <span>Benfica</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortadaMenu;