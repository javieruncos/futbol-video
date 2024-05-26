import React, { useEffect } from 'react';
import { useState } from 'react';
import "../../assets/style/DetallePartido.css";
import { useParams } from 'react-router-dom';
import { getVideos } from '../../helpers/App';
import Video from '../Ui/Video';
import Categorias from '../Ui/Categorias';
import Publicidad from '../Ui/Publicidad';
import Sugerencia from '../Ui/Sugerencia';
import Footer from '../common/Footer';
import Sponsors from './Sponsors';

const DetallePartido = () => {
    const [video, setVideo] = useState({})
    const [arreglovideos, setArreglovideos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getVideos().then((res) => {
            const foundVideo = res.find(video => video.videos && video.videos[0] && video.videos[0].id === id);
            if (foundVideo) {
                const embedHtml = foundVideo.videos[0].embed;
                const embedUrl = embedHtml.match(/src='([^']+)'/)[1]; // Extrae la URL del iframe
                foundVideo.embedUrl = embedUrl; // Añade embedUrl al objeto video
                setVideo(foundVideo);
            }
            setArreglovideos(res)
        })
    }, [id])



    return (
        <div className='main container'>
            <div className='detalle-container'>
                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-8'>
                        <div className='bg-primary'>
                            <Video src={video.embedUrl}></Video>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <div className='containerCard-sugerencia'>
                            {
                                arreglovideos.slice(0, 3).map((items, index) => (
                                    <a href={`/detalle/${items.videos[0].id}`} className='text-decoration-none text-light' key={index}>
                                        <div className=' cardSugerencia mb-3'>
                                            <div className='img-card'>
                                                <img src={items.thumbnail} alt="" />
                                            </div>
                                            <div className='container py-2'>
                                                <span className='text-secondary'>{items.competition}</span>
                                                <p className='fs-6'>{items.title}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='separador my-5'>
                <div>
                    <h3>Resumenes de las mejores ligas</h3>
                </div>
            </div>
            <div>
                <Categorias categoria={"ENGLAND: Premier League"} arregloVideos={arreglovideos} nombre={"Premier League"}></Categorias>
            </div>
            <div className='my-4'>
                <Categorias categoria={"SPAIN: La Liga"} arregloVideos={arreglovideos} nombre={"La Liga"}></Categorias>
            </div>
            <div className='mt-5'>
                <Publicidad></Publicidad>
            </div>
            <div className='my-5'>
                <Sugerencia arregloVideos={arreglovideos}></Sugerencia>
            </div>
            <div>
                <Sponsors></Sponsors>
            </div>
            <div className='mt-5 mb-3'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DetallePartido;