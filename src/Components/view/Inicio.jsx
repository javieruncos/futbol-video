import React, { useEffect } from 'react';
import { useState } from 'react';
import "../../assets/style/Inicio.css";
import PortadaMenu from '../Ui/PortadaMenu';
import Categorias from '../Ui/Categorias';
import Publicidad from '../Ui/Publicidad';
import { getVideos } from '../../helpers/App';
import logo from "../../assets/img/logo-futbol.png"
import Footer from '../common/Footer';
const Inicio = () => {
    const [arrleloVideos, setArrleloVideos] = useState([])

    useEffect(() => {
        getVideos().then((res) => {
            console.log(res)
            setArrleloVideos(res)
        })
    }, [])




    return (
        <div className='mainInicio mt-4 container'>
            <div className='container pt-3'>
                <PortadaMenu></PortadaMenu>
            </div>
            <div className='mt-4 container'>
                <Categorias categoria={"ITALY: Serie A"} arrleloVideos={arrleloVideos} nombre={"Serie A"}></Categorias>
            </div>
            <div className='mt-3 container'>
                <Categorias categoria={"ENGLAND: Premier League"} arrleloVideos={arrleloVideos} nombre={"Premier League"}></Categorias>
            </div>
            <div className='mt-3 container'>
                <Categorias categoria={"SPAIN: La Liga"} arrleloVideos={arrleloVideos} nombre={"La Liga"}></Categorias>
            </div>

            <div className='separador my-5'>
                <div>
                  <h3>Resumenes de las mejores ligas</h3>
                </div>
            </div>
            <div className='mt-3 container'>
                <Categorias categoria={"FRANCE: Ligue 1"} arrleloVideos={arrleloVideos} nombre={"Ligue 1"}></Categorias>
            </div>
            <div className='mt-3 container'>
                <Categorias categoria={"GERMANY: Bundesliga"} arrleloVideos={arrleloVideos} nombre={"Bundesliga"}></Categorias>
            </div>
            <div>
                <Publicidad></Publicidad>
            </div>
            <div className='mt-5 mb-3'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Inicio;