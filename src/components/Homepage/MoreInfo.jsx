import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './MoreInfo.css'
import iconAmnio from '../../assets/images/iconAmniocentesis.png'
import iconBiopsia from '../../assets/images/iconBiopsia.png'
import iconCromo from '../../assets/images/iconCromosomopatia.png'
import iconDismorfo from '../../assets/images/iconDismorfologia.png'
import iconEco from '../../assets/images/iconEcografia.png'
import iconHistero from '../../assets/images/iconHisterosonosalpingografia.png'
import iconNeuro from '../../assets/images/iconNeurosonografia.png'
import iconEndometriosos from '../../assets/images/iconEndometriosis.png'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { BsDisplay } from 'react-icons/bs';


function MoreInfo() {


    const data = [
        {
            name: 'ecografía',
            image: iconEco,
            title: 'Ecografías 3D/4D',
            body: 'Las ecografías 3D/4D, junto con la imagen tradicional en dos dimensiones, nos permiten visualizar al feto con gran precisión, acercando a los padres y a los profesionales de la obstetricia a ese extraordinario mundo que es la vida antes de nacer.',
            url: '/sabermas/ecografia-3d-4d'
        },
        {
            name: 'neurosonografía',
            image: iconNeuro,
            title: 'Neurosonografía fetal',
            body: 'Estudio de las enfermedades del sistema nervioso central a través de un equipo multidisciplinar que engloba el diagnóstico, pronóstico, posibilidades de tratamiento e información a los padres.',
            url: '/hacemos/neurosonografía'
        },
        {
            name: 'biopsia',
            image: iconBiopsia,
            title: 'Biopsia Corial',
            body: 'La biopsia corial consiste en la obtención de una muestra de placenta entre la 10ª y la 14ª semanas de embarazo.Su composición genética es idéntica a la del feto y refleja la misma situación cromosómica, bioquímica y genética del mismo.',
            url: '/biopsia-corial'
        },
        {
            name: 'dismorfología',
            image: iconDismorfo,
            title: 'Dismorfología fetal',
            body: 'El objetivo de la Dismorfología Fetal es orientar el diagnóstico de una Enfermedad Cromosómica, como por ejemplo el Sind de Down, o de una Enfermedad Rara a través de pequeños detalles de la cara, orejas, manos y pies.',
            url: '/hacemos/dismorfologia-fetal'

        },
        {
            name: 'amnsiocentesis',
            image: iconAmnio,
            title: 'Amniocentesis',
            body: 'Extracción de líquido amniótico mediante la punción del útero gestante. Es el procedimiento invasivo más antiguo del diagnóstico prenatal.',
            url: '/sabermas/amniocentesis'
        },
        {
            name: 'histerosonosalpingografía',
            image: iconHistero,
            title: 'Histerosonosalpingografía',
            body: 'Se trata de una técnica que se usa fundamentalmente para valorar la permeabilidad de las trompas mediante ecografía.',
            url: '/hacemos/histerosonosalpingrografía'
        },
        {
            name: 'cromosomopatia',
            image: iconCromo,
            title: 'Cromosomopatia',
            body: 'Aparecen en el 0.5-0.7% de los fetos y son responsables del 12-15% de todos los defectos congénitos. Pueden ser numéricas o estructurales y la más frecuente es la trisomía 21 (Síndrome de Down).',
            url: '/sabermas/cromosomopatia'
        },
        {
            name: 'endometiosis',
            image: iconEndometriosos,
            title: 'Endometriosis',
            body: 'La endometriosis es una enfermedad benigna, crónica, en la que el tejido que normalmente tapiza el útero, el endometrio, crece fuera del mismo. Se estima que una de cada diez mujeres en edad reproductiva tienen endometriosis.',
            url: '/hacemos/endometriosis-pelvica'
        }
    ];

    const [showAllCards, setShowAllCards] = useState(true)
    const [isFlipped, setIsFlipped] = useState({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        setShowAllCards(windowWidth > 768)
    }, [windowWidth])


    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }


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
            <div className="more-info">

                <div className='more-info-container-text'>
                    <div className="more-info-text">
                        <p className='more-info-title'>
                            Somos pioneras en la ecografía tridimensional conocida como Ecografía 3D/4D
                        </p>
                        <p className='more-info-body'>
                            Aunque la mayoría de la gente piensa que este tipo de ecografía solo es útil para las mujeres embarazadas, lo cierto
                            es que también es muy importante para otros estudios como los relacionados con las malformaciones uterinas, el suelo de la pelvis,
                            los tumores de ovario o el cáncer de endometrio.
                        </p>
                    </div>
                </div>

                <div className='more-info-cards'>
                    <div className='more-info-container-cards'>
                        {data.map((e, index) => (
                            <div
                                className="more-info-card-container"
                                key={e.name}
                                style={{ display: (showAllCards || index < 4) ? 'block' : 'none' }}
                            >
                                <div
                                    className="more-info-card"
                                    onMouseEnter={() => handleMouseEnter(e.name)}
                                    onMouseLeave={() => handleMouseLeave(e.name)}
                                >
                                    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped[e.name] || false}>
                                        <div className="more-info-card">
                                            <img className="more-info-card-image" src={e.image} alt={''} />
                                        </div>
                                        <div className="more-info-card back">
                                            <div className="more-info-card-text">
                                                <p className="more-info-card-title">{e.title}</p>
                                                <p className="more-info-card-body">{e.body}</p>
                                                <Link to={e.url} className='more-info-card-link' onClick={() => handleCardClick(e.url)}>
                                                    <p >Saber más</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </ReactCardFlip>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="more-info-link">
                    <Link to={'/hacemos'}>
                        <p className="link">Explora todos nuestros servicios {'>>'}</p>
                    </Link>
                </div>


            </div>
        </>
    )
}

export default MoreInfo