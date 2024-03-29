import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import iconCromo from '../../assets/images/iconCromosomopatia.png'
import iconDismorfo from '../../assets/images/iconDismorfologia.png'
import iconEco from '../../assets/images/iconEcografia.png'
import iconHistero from '../../assets/images/iconHisterosonosalpingografia.png'
import iconNeuro from '../../assets/images/iconNeurosonografia.png'
import iconBreast from '../../assets/images/iconBreast.png'
import iconOnco from '../../assets/images/iconOnco.png'
import iconGine from '../../assets/images/iconGine.png'
import iconLongitud from '../../assets/images/iconLongitud.png'
import iconArteria from '../../assets/images/iconArteria.png'
import iconPelvis from '../../assets/images/iconPelvis.png'
import iconEndometriosos from '../../assets/images/iconEndometriosis.png'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './ServicesCards.css'


function ServicesCards() {


    const data = [
        {
            name: 'ecoObste',
            image: iconEco,
            title: 'Ecografía Obstétrica',
            url: '/servicios/ecografia-obstetrica'
        },
        {
            name: 'ecoGine',
            image: iconGine,
            title: 'Ecografía Ginecológica',
            url: '/servicios/ecografia-ginecologica'
        }, {
            name: 'ecoOnco',
            image: iconOnco,
            title: 'Ecografía Oncológica',
            url: '/servicios/ecografia-oncologica'
        }, {
            name: 'ecoMama',
            image: iconBreast,
            title: 'Ecografía de mama',
            url: '/servicios/ecografia-de-mama'
        }, {
            name: 'nerurosonografía',
            image: iconNeuro,
            title: 'Nerurosonografía',
            url: '/servicios/neurosonografía'
        },
        {
            name: 'histerosonosalpingografía',
            image: iconHistero,
            title: 'Histerosonosalpingografía (HyCosy)',
            url: '/servicios/histerosonosalpingografia'
        }, {
            name: 'arterias',
            image: iconArteria,
            title: 'Arterias Uterinas',
            url: '/servicios/earterias-uterinas'
        }, {
            name: 'longitud',
            image: iconLongitud,
            title: 'Longitud vertical',
            url: '/servicios/longitud-vertical'
        }, {
            name: 'dismorfología',
            image: iconDismorfo,
            title: 'Dismorfología fetal',
            url: '/servicios/dismorfologia-fetal'
        }, {
            name: 'malformaciones',
            image: iconCromo,
            title: 'Malformaciones uterinas ',
            url: '/servicios/malformaciones-uterinas'
        }, {
            name: 'suelo',
            image: iconPelvis,
            title: 'Suelo pélvico ',
            url: '/servicios/suelo-pelvico'
        }, {
            name: 'endometriosis',
            image: iconEndometriosos,
            title: 'Endometriosis pélvica',
            url: '/servicios/endometriosis-pelvica'
        }
    ];

    const [isFlipped, setIsFlipped] = useState({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)





    const handleMouseEnter = (name) => {
        setIsFlipped(prevState => ({
            ...prevState,
            [name]: true
        }));
    };


    const handleMouseLeave = (name) => {
        setIsFlipped(prevState => ({
            ...prevState,
            [name]: false
        }));
    };

    const navigate = useNavigate()

    const handleCardClick = (url) => {
        navigate(url)
    }


    return (
        <>
            <div className="services">

                <div className='services-cards'>
                    <div className='services-container-cards'>
                        {data.map((e, index) => (
                            <div
                                className="services-card-container"
                                key={e.name}
                            >
                                <div
                                    className="services-card"
                                    onMouseEnter={() => handleMouseEnter(e.name)}
                                    onMouseLeave={() => handleMouseLeave(e.name)}
                                >
                                    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped[e.name] || false}>
                                        <div className="services-card">
                                            <img className="services-card-image" src={e.image} alt={''} />
                                        </div>
                                        <div className="services-card back">
                                            <div className="services-card-text">
                                                <Link to={e.url} onClick={() => handleCardClick(e.url)}>
                                                    <p className="services-card-title">{e.title}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </ReactCardFlip>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default ServicesCards