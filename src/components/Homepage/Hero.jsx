import React from 'react'
import { Col, Row, Image, Container } from 'react-bootstrap'
import { BsChevronDown } from "react-icons/bs"
import { Link as ScrollLink } from 'react-scroll';
import heroImg from '../../assets/images/heroImg1.jpg'
import './Hero.css'




function Hero() {

    return (

        <>
            <Row className='hero-row-header'>

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

                    {/* <div className="arrow-large">
                        <ScrollLink to="hero-row-info" smooth={true} duration={100} offset={100}>
                            <BsChevronDown />
                        </ScrollLink>
                    </div> */}

                    <div className="hero-text-mobile">

                        <p className='hero-text'>
                            Somos un Centro de Diagnóstico por la Imagen dirigido al cuidado de la mujer.
                            Lo fundamos en 1990 y desde entonces hemos trabajado para reunir a un equipo sobresaliente
                            de médicos especialistas en el estudio ecográfico, ginecológico y obstétrico.
                        </p>

                    </div>
                </Col>

                <Col className='hero-image'>
                    <Image src={heroImg} alt='Ecografía en Delta' />
                    <div className='circle'></div>
                    <div className="arrow-mobile">
                        <ScrollLink to="hero-title" smooth={true} duration={200} offset={-40}>
                            <BsChevronDown />
                        </ScrollLink>
                    </div>
                </Col>

            </Row >

        </>

    )
}

export default Hero;
