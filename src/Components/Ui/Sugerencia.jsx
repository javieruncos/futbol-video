import React from 'react';

const Sugerencia = ({arregloVideos}) => {
    return (
        <>
            <div>
                <div className='d-flex justify-content-between mb-2'>
                    <h4> Sugeridos para ti</h4>
                </div>
                <div>
                    <div className='row'>
                        {
                            arregloVideos.slice(10, 19)
                                .map((items, index) => (
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
            </div>
        </>
    );
};

export default Sugerencia;