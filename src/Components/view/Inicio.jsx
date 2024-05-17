import React, { useEffect } from 'react';
import { useState } from 'react';
import "../../assets/style/Inicio.css";
import PortadaMenu from '../Ui/PortadaMenu';
import Categorias from '../Ui/Categorias';
import { getVideos } from '../../helpers/App';
const Inicio = () => {
    const [arrleloVideos, setArrleloVideos] = useState([])
    
    useEffect(() => {
       getVideos().then((res)=>{
           console.log(res)
           setArrleloVideos(res)
       }) 
    },[])




    return (
        <div className='mainInicio mt-4'>
            <PortadaMenu></PortadaMenu>
            <div className='mt-3'>
                <Categorias categoria={"Todos"} arrleloVideos={arrleloVideos}></Categorias>
            </div>
            {/* <div className='mt-3'>
                <Categorias categoria={"ligas"}></Categorias>
            </div> */}
            <div className='separador my-5'>
                <div>
                    <span>logo</span>
                </div>
            </div>
            {/* <div className='mt-3'>
                <Categorias categoria={"copas"}></Categorias>
            </div>
            <div className='mt-3'>
                <Categorias categoria={"copas"}></Categorias>
            </div> */}
        </div>
    );
};

export default Inicio;