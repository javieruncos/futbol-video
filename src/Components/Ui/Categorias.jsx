import React from 'react';
import "../../assets/style/Categorias.css";
const Categorias = ({ categoria }) => {
    return (
        <div>
            <div className='d-flex justify-content-between mb-2'>
                <h5> {categoria}</h5>
                <span>ver todo</span>
            </div>
            <div>
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <div className='cardVideo'>
                            <div className='hearderCard'>
                                <img src="https://www.elgoldigital.com/wp-content/uploads/los-200-goles-de-cristiano-ronaldo-con-el-real-madrid-video.jpg" alt="" />
                            </div>
                            <div className='bodyCard container pt-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <span>Lorem ipsum dolor .</span>
                                    <span>Lorem .</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <div className='cardVideo'>
                            <div className='hearderCard'>
                                <img src="https://www.elgoldigital.com/wp-content/uploads/los-200-goles-de-cristiano-ronaldo-con-el-real-madrid-video.jpg" alt="" />
                            </div>
                            <div className='bodyCard container pt-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <span>Lorem ipsum dolor .</span>
                                    <span>Lorem .</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <div className='cardVideo'>
                            <div className='hearderCard'>
                                <img src="https://www.elgoldigital.com/wp-content/uploads/los-200-goles-de-cristiano-ronaldo-con-el-real-madrid-video.jpg" alt="" />
                            </div>
                            <div className='bodyCard container pt-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <span>Lorem ipsum dolor .</span>
                                    <span>Lorem .</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categorias;