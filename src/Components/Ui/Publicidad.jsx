import React from 'react';
import '../../assets/style/Publicidad.css';

const Publicidad = () => {
    return (
        <div className='publicidad'>
            <div className='container-liga'>
                <div className='container py-4 px-4 tituloPublicidad'>
                    <h3 className='display-5'>Sigue la actualidad de la premier league</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita nostrum tenetur ut iusto quo magnam.</p>
                    <button className='buttonPublicidad mt-3'>Ver mas</button>
                </div>
                <div className='column-img'>
                    <img src="https://resources.premierleague.com/premierleague/photo/2022/08/04/5d9a2e39-743d-4e90-ade3-58aaf3a2d5bd/MicrosoftTeams-image.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Publicidad;