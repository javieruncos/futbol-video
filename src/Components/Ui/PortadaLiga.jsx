import React from 'react';
import halland from "../../assets/img/halland.png"
import lautaro from "../../assets/img/lautaro.png"
import logoPremier from "../../assets/img/logoPremier.png"

const PortadaLiga = ({ liga }) => {

    const leagueNames = {
        "ENGLAND: Premier League": "Premier League",
        "ITALY: Serie A": "Serie A",
        "SPAIN: La Liga": "La Liga",
        "FRANCE: Ligue 1": "Ligue 1",
        "Todos":"Todos los resultados"
    };

    return (
        <div className='portadaLigas'>
            <img src="https://images.alphacoders.com/510/510026.jpg" alt="" />
            <div className='capa container'>
                <div className='logo-liga'>
                    <span><i className="bi bi-trophy fs-2 "></i></span>
                    <h1 className='pt-2'>{leagueNames[liga]}</h1>
                </div>
            </div>
        </div>
    );
};

export default PortadaLiga;