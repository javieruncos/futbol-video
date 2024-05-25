import React, { useEffect, useState } from 'react';
import "../../assets/style/Ligas.css";
import { getVideos } from '../../helpers/App';
import { useParams } from 'react-router-dom';
import PortadaLiga from '../Ui/PortadaLiga';
import Footer from '../common/Footer';
import Sponsors from './Sponsors';



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
            <div className='pt-3'>
                <PortadaLiga liga={liga}></PortadaLiga>
            </div>
            <div className='mt-5'>
                <h5>Todos los partidos</h5>
                <div>
                    <div className='row'>
                        {

                            liga === "Todos" ? arregloLigas.map((items, index) => (
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
                            )) :
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
                <div className='my-5'>
                    <Sponsors></Sponsors>
                </div>
                <div className='mt-5 mb-3'>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Ligas;