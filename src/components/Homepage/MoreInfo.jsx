import React from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
// import { handleCardClick } from '../../utils/handleCardClick';
import { Row, Col, Container } from 'react-bootstrap'
import './MoreInfo.css'
import iconAmnio from '../../assets/images/iconAmniocentesis.png'
import iconBiopsia from '../../assets/images/iconBiopsia.png'
import iconCromo from '../../assets/images/iconCromosomopatia.png'
import iconDismorfo from '../../assets/images/iconDismorfologia.png'
import iconEco from '../../assets/images/iconEcografia.png'
import iconHistero from '../../assets/images/iconHisterosonosalpingografia.png'
import iconNeuro from '../../assets/images/iconNeurosonografia.png'



function MoreInfo() {


    const data = [
        {
            name: 'ecografía',
            image: iconEco,
            title: 'Ecografías 3D/4D',
            body: 'Las ecografías 3D/4D, junto con la imagen tradicional en dos dimensiones, nos permiten visualizar al feto con gran precisión, acercando a los padres y a los profesionales de la obstetricia a ese extraordinario mundo que es la vida antes de nacer.',
        },
        {
            name: 'neurosonografía',
            image: iconNeuro,
            title: 'Neurosonografía fetal',
            body: 'Estudio de las enfermedades del sistema nervioso central a través de un equipo multidisciplinar que engloba el diagnóstico, pronóstico, posibilidades de tratamiento e información a los padres.',
        },
        {
            name: 'biopsia',
            image: iconBiopsia,
            title: 'Biopsia Corial',
            body: 'La biopsia corial consiste en la obtención de una muestra de placenta entre la 10ª y la 14ª semanas de embarazo.Su composición genética es idéntica a la del feto y refleja la misma situación cromosómica, bioquímica y genética del mismo.',
        },
        {
            name: 'dismorfología',
            image: iconDismorfo,
            title: 'Dismorfología fetal',
            body: 'El objetivo de la Dismorfología Fetal es orientar el diagnóstico de una Enfermedad Cromosómica, como por ejemplo el Sind de Down, o de una Enfermedad Rara a través de pequeños detalles de la cara, orejas, manos y pies.',
        },
        {
            name: 'amnsiocentesis',
            image: iconAmnio,
            title: 'Amniocentesis',
            body: 'Extracción de líquido amniótico mediante la punción del útero gestante. Es el procedimiento invasivo más antiguo del diagnóstico prenatal.',
        },
        {
            name: 'histerosonosalpingografía',
            image: iconHistero,
            title: 'Histerosonosalpingografía',
            body: 'Se trata de una técnica que se usa fundamentalmente para valorar la permeabilidad de las trompas mediante ecografía.',
        },
        // {
        //     name: 'cromosomopatia',
        //     image: iconCromo,
        //     title: 'Cromosomopatia',
        //     body: 'Aparecen en el 0.5-0.7% de los fetos y son responsables del 12-15% de todos los defectos congénitos. Pueden ser numéricas o estructurales y la más frecuente es la trisomía 21 (Síndrome de Down).',
        // }
    ];

    const [isFlipped, setIsFlipped] = useState({});

    // const handleMouseEnter = () => setIsFlipped(true);
    // const handleMouseLeave = () => setIsFlipped(false);

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


    return (
        <>

            <div className="more-info">
                <div className='more-info-container'>
                    <div className="more-info-text">
                        <p className='more-info-title'>
                            Dentro de nuestro trabajo somos pioneros en la ecografía tridimensional conocida como Ecografía 3D/4D.
                        </p>
                        <p className='more-info-body'>
                            La mayoría de la gente piensa que este tipo de ecografía solo es útil para las mujeres embarazadas, pero no es así.
                            También es importante para otros estudios como los relacionados con las malformaciones uterinas, el suelo de la pelvis,
                            los tumores de ovario o el cáncer de endometrio.
                        </p>
                    </div>
                </div>
                <div className='more-info-cards'>
                    <div className='more-info-container'>
                        {data.map((e) => (
                            <div className="more-info-card-container" key={e.name}>
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

export default MoreInfo