import React, { useEffect } from 'react';
import { useState } from 'react';
import "../../assets/style/DetallePartido.css";
import { useParams } from 'react-router-dom';
import { getVideos } from '../../helpers/App';
import Video from '../Ui/Video';

const DetallePartido = () => {
   const [video, setVideo] = useState({})
   const {id} = useParams()

   useEffect(() => {
      getVideos().then((res)=>{
        const foundVideo = res.find(video => video.videos && video.videos[0] && video.videos[0].id === id);
        if (foundVideo) {
            const embedHtml = foundVideo.videos[0].embed;
            const embedUrl = embedHtml.match(/src='([^']+)'/)[1]; // Extrae la URL del iframe
            foundVideo.embedUrl = embedUrl; // Añade embedUrl al objeto video
            setVideo(foundVideo);
        }
      })
   },[])



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
                        <div className='bg-primary'>
                            <span>video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetallePartido;