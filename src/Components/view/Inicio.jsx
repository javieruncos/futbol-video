import React, { useEffect } from 'react';
import { useState } from 'react';
import "../../assets/style/Inicio.css";
import PortadaMenu from '../Ui/PortadaMenu';
import Categorias from '../Ui/Categorias';
import Publicidad from '../Ui/Publicidad';
import { getVideos } from '../../helpers/App';
import logo from "../../assets/img/logo-futbol.png"
import Footer from '../common/Footer';
import useVideos from '../../hooks/useVideos';
import Resultados from '../Ui/Resultados';
const Inicio = () => {
    const { arregloVideos } = useVideos()

    return (
        <div className='mainInicio mt-4 container'>
            <div className='container pt-3'>
                <PortadaMenu></PortadaMenu>
            </div>
            <div className='mt-4 container'>
                <Categorias categoria={"ITALY: Serie A"} arregloVideos={arregloVideos} nombre={"Serie A"}></Categorias>
            </div>
            <div className='mt-3 container'>
                <Categorias categoria={"ENGLAND: Premier League"} arregloVideos={arregloVideos} nombre={"Premier League"}></Categorias>
            </div>
            <div className='mt-3 container'>
                <Categorias categoria={"SPAIN: La Liga"} arregloVideos={arregloVideos} nombre={"La Liga"}></Categorias>
            </div>
            <div className='mt-3 container'>
                <Categorias categoria={"GERMANY: Bundesliga"} arregloVideos={arregloVideos} nombre={"Bundesliga"}></Categorias>
            </div>
            <div className='separador my-5'>
                <div>
                    <h3>Resumenes de las mejores ligas</h3>
                </div>
            </div>

            <div className='mt-3'>
                <Resultados arregloVideos={arregloVideos}></Resultados>
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