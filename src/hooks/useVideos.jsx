import React, { useEffect,useState } from 'react';
import { getVideos } from '../helpers/App';

const useVideos = () => {
    const [arregloVideos, setArregloVideos] = useState([])
    
    useEffect(() => {
        getVideos().then((res) => {
            
            setArregloVideos(res)
        })
    }, [])



    return {arregloVideos,setArregloVideos}
};

export default useVideos;