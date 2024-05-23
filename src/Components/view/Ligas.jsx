import React, { useEffect, useState } from 'react';
import "../../assets/style/Ligas.css";
import { getVideos } from '../../helpers/App';
import { useParams } from 'react-router-dom';

import PortadaLiga from '../Ui/PortadaLiga';
import Publicidad from '../Ui/Publicidad';

const Ligas = () => {
    const { liga } = useParams()

    const [arregloLigas, setArregloLigas] = useState([])
    useEffect(() => {
        getVideos().then((res) => {
            setArregloLigas(res)
        })
    }, [])


    return (
        <div className='main container'>
           <PortadaLiga liga={liga}></PortadaLiga>
            <div className='mt-5'>
                <h5>Todos los partidos</h5>
                <div>
                    <div className='row'>
                        {
                            arregloLigas.filter((items) => items.competition === liga).map((items, index) => (
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
                                                <span>{items.title}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ligas;