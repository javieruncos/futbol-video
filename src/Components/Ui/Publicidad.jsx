import React from 'react';
import '../../assets/style/Publicidad.css';

const Publicidad = ({ liga }) => {
    return (
        <div className='publicidad'>
            <div className='container-liga'>
                <div className='container py-4 px-4 tituloPublicidad'>
                    <h2 className='display-3 fw-bold'>Premier League</h2>
                    <p className='fs-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita nostrum tenetur ut iusto quo magnam.</p>
                </div>
                <div className='column-img'>
                    {liga === "ENGLAND: Premier League" ?
                        <img src="https://resources.premierleague.com/premierleague/photo/2022/08/04/5d9a2e39-743d-4e90-ade3-58aaf3a2d5bd/MicrosoftTeams-image.png" alt="" />
                        : false
                    }
                    {liga === "ITALY: Serie A" ?
                        <img src="https://idoofootball.com/blog/wp-content/uploads/2023/09/SerieA.jpg" alt="" />
                        : false
                    }
                </div>
            </div>
        </div>
    );
};

export default Publicidad;