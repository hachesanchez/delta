import React from 'react'
import { Col, Row, Image, Container } from 'react-bootstrap'
import { BsChevronDown } from "react-icons/bs"
import { Link as ScrollLink } from 'react-scroll';
import heroImg from '../../assets/images/heroImg1.jpg'
import './Hero.css'




function Hero() {

    return (

        <>
            <div className="hero">

                <Row className='g-0 hero-row-header'>

                    <Col className='hero-body'>
                        <p className='hero-title'>
                            Bienvenida a Delta Ecografía
                        </p>
                        <div className="hero-text-large">
                            <p className='hero-text'>
                                Somos un Centro de Diagnóstico por la Imagen dirigido al cuidado de la mujer.
                                Lo fundamos en 1990 y desde entonces hemos trabajado para reunir a un equipo sobresaliente
                                de médicos especialistas en el estudio ecográfico, ginecológico y obstétrico.
                            </p>
                        </div>

                        <div className="hero-text-mobile">

                            <p className='hero-text'>
                                Somos un Centro de Diagnóstico por la Imagen dirigido al cuidado de la mujer.
                                Lo fundamos en 1990 y desde entonces hemos trabajado para reunir a un equipo sobresaliente
                                de médicos especialistas en el estudio ecográfico, ginecológico y obstétrico.
                            </p>

                        </div>
                    </Col>

                    <Col className='hero-image'>
                        <div className="image-container">
                            <Image src={heroImg} alt='Ecografía en Delta' />
                            <div className='circle'></div>
                            <div className="arrow-mobile">
                                <ScrollLink to="hero-body" smooth={true} duration={200} offset={-15}>
                                    <BsChevronDown />
                                </ScrollLink>
                            </div>
                        </div>
                    </Col>

                </Row >

            </div>
        </>

    )
}

export default Hero;
