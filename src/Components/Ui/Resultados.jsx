import React from 'react';
import "../../assets/style/CardVideos.css"

const Resultados = ({arregloVideos}) => {
    return (
        <>
            <div className='container'>
            <h3>Todas las Ligas</h3>
                <div className='row'>
                    {
                        arregloVideos.slice(0,15).map((items, index) => (
                            <div className='col-12 col-md-4 col-lg-4 my-3' key={index}>
                                <a href={`/detalle/${items.videos[0].id}`} className='text-decoration-none text-light'>
                                    <div className='cardVideo'>
                                        <div className='hearderCard'>
                                            <img src={items.thumbnail} alt="" />
                                        </div>
                                        <div className='bodyCard container pt-3'>
                                            <div className='text-secondary'>
                                                <span>{items.competition}</span>
                                            </div>
                                            <span className='fs-5'>{items.title}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Resultados;