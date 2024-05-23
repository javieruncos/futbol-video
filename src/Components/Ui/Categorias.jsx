import React from 'react';
import "../../assets/style/Categorias.css";
import ReactHtmlParser from 'html-react-parser';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
const Categorias = ({ categoria, arrleloVideos ,nombre}) => {

    return (
        <div>
            <div className='d-flex justify-content-between mb-2'>
                <h4> {nombre}</h4>
                <span>ver todo</span>
            </div>
            <div>
                <div className='row'>
                    {
                        arrleloVideos.filter((items) => items.competition === categoria).slice(0, 3)
                        .map((items, index) => (
                            <div className='col-12 col-md-4 col-lg-4 my-3' key={index}>
                                <Link to={`/detalle/${items.videos[0].id}`} className='text-decoration-none text-light'>
                                    <div className='cardVideo'>
                                        <div className='hearderCard'>
                                            <img src={items.thumbnail} alt="" />
                                        </div>
                                        <div className='bodyCard container pt-3'>
                                            <div className='text-secondary'>
                                                <span>{items.competition}</span>
                                            </div>
                                            <span>{items.title}</span>
                                        </div>
                                    </div> 
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Categorias;