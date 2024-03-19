import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Footer.css';



function Footer() {

    return (

        <div className="Footer">
            <Container className="footer-container">

                <Row className="footer-sections">
                    <Col sm={12} md={3}>
                        <p className="footer-title">QUIÉNES SOMOS</p>
                        <hr />
                        <div className="footer-links">
                            <Link to={'#'}>Equipo</Link>
                            <br />
                            <Link to={'#'}>Publicaciones</Link>
                            <br />
                            <Link to={'#'}>Contacta</Link>
                            <br />
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <p className="footer-title">Hacemos</p>
                        <hr />
                        <div className="footer-links">
                            <Link to={'#'}>Servicios</Link>
                            <br />
                            <Link to={'#'}>Exploraciones Especiales</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <p className="footer-title">Saber más</p>
                        <hr />
                        <div className="footer-links">
                            <Link to={'#'}>Ecografía 3D/4D</Link>
                            <br />
                            <Link to={'#'}>Ecografía en el embarazo</Link>
                            <br />
                            <Link to={'#'}>Biopsia corial</Link>
                            <br />
                            <Link to={'#'}>Amniocentesis</Link>
                            <br />
                            <Link to={'#'}>Cromosomopatía</Link>
                            <br />
                            <Link to={'#'}>Microarrays</Link>
                            <br />
                            <Link to={'#'}>ADN fetal en sangra materna</Link>
                            <br />
                            <Link to={'#'}></Link>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <p className="footer-title">Contacta</p>
                        <hr />
                        <div className="footer-links">
                            <Link to='#'>Escríbenos</Link>
                            <br />
                            <Link to='#'>Conoce la clínica</Link>
                            <br />
                        </div>
                    </Col>
                </Row>
                <hr />
                {/* TODO: Aviso legal, cookies */}
                <Row className='footer-sections'>
                    <Col className='footer-extra-links' lg={6} md={12} sm={12} >
                        <Link to={'#'}>Política de Privacidad</Link> |
                        <Link to={'#'}> Política de Cookies</Link> |
                        <Link to='#'> Aviso legal</Link>
                        <div className="footer-copy">
                            <p> © 2024 Delta Ecografía</p>
                        </div>
                    </Col>
                    <Col className='footer-social' lg={6} md={12} sm={12}>
                        <p className="footer-social-title">SÍGUENOS EN: </p>
                        <div className="footer-social-icons">
                            <a target='blank' rel='noreferer noopener' href="https://www.instagram.com/delta_ecografia/">
                                <FaInstagram />
                            </a>
                            <a target='blank' rel='noreferer noopener' href="https://www.facebook.com/deltaecografia">
                                <FaFacebook />
                            </a>
                            <a target='blank' rel='noreferer noopener' href="https://www.linkedin.com/company/delta-ecograf%C3%ADa/">
                                <FaLinkedin />
                            </a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div >
    );
}

export default Footer;
