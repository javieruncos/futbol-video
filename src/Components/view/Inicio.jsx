import React, { useEffect } from 'react';
import { useState } from 'react';
import "../../assets/style/Inicio.css";
import PortadaMenu from '../Ui/PortadaMenu';
import Categorias from '../Ui/Categorias';
import { getVideos } from '../../helpers/App';
const Inicio = () => {
    const [arrleloVideos, setArrleloVideos] = useState([])

    useEffect(() => {
        getVideos().then((res) => {
            console.log(res)
            setArrleloVideos(res)
        })
    }, [])




    return (
        <div className='mainInicio mt-4'>
            <PortadaMenu></PortadaMenu>
            <div className='mt-3'>
                <Categorias categoria={"ITALY: Serie A"} arrleloVideos={arrleloVideos} nombre={"Serie A"}></Categorias>
            </div>
            <div className='mt-3'>
                <Categorias categoria={"ENGLAND: Premier League"} arrleloVideos={arrleloVideos} nombre={"Premier League"}></Categorias>
            </div>
            <div className='mt-3'>
                <Categorias categoria={"SPAIN: La Liga"} arrleloVideos={arrleloVideos} nombre={"La Liga"}></Categorias>
            </div>

            <div className='separador my-5'>
                <div>
                    <span>logo</span>
                </div>
            </div>
            <div className='mt-3'>
                <Categorias categoria={"ARGENTINA: Liga Profesional, Round 2"} arrleloVideos={arrleloVideos} nombre={"Liga Profesional"}></Categorias>
            </div>

        </div>
    );
};

export default Inicio;