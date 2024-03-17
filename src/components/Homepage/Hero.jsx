import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import heroImg from '../../assets/images/heroImg1.jpg'
import './Hero.css'



function Hero() {

    return (

        <Row className='hero-row'>

            <Col className='hero-body'>

                <p className='hero-title'>
                    Bienvenida a Delta Ecografía
                </p>
                <div className="hero-text-large">
                    <p className='hero-text'>
                        Delta Ecografía es un Centro de Diagnóstico por la Imagen dirigido al cuidado de la mujer.
                        Lo fundamos en 1990 y desde entonces hemos trabajado para reunir a un equipo sobresaliente
                        de médicos especialistas en el estudio ecográfico, ginecológico y obstétrico.
                    </p>
                </div>

                <div className="hero-text-mobile">
                    <p className='hero-text'>
                        Delta Ecografía es un Centro de Diagnóstico por la Imagen dirigido al cuidado de la mujer.
                        Lo fundamos en 1990 y desde entonces hemos trabajado para reunir a un equipo sobresaliente
                        de médicos especialistas en el estudio ecográfico, ginecológico y obstétrico.
                    </p>
                    <p className='hero-text'>
                        Dentro de nuestro trabajo somos pioneros en la ecografía tridimensional conocida como Ecografía 3D/4D.
                        La mayoría de la gente piensa que este tipo de ecografía sólo es útil para las mujeres embarazadas, pero no es así.
                        También es importante para otros estudios como los relacionados con las malformaciones uterinas, el suelo de la pelvis,
                        los tumores de ovario o el cáncer de endometrio.
                    </p>
                    <p className='hero-text'>
                        En el embarazo, la ecografía convencional 2D, el Doppler y la ecografía 3D/4D nos permiten visualizar y estudiar
                        al feto con gran precisión. En la última década el avance tecnológico ha supuesto una verdadera revolución,
                        podemos ver y comprender los cambios que se producen en el embrión y el feto desde que mide apenas 1,5 mm
                        hasta cuando llega a pesar 3500 gr o más.
                    </p>
                </div>

            </Col>

            <Col className='hero-image'>
                <Image src={heroImg} alt='Ecografía en Delta' />
                <div className='circle'></div>
            </Col>
        </Row >
    )
}

export default Hero;
