import React, { useEffect, useState } from 'react'
import logoAsisa from '../../assets/logos/logo-asisa.png'
import logoCaser from '../../assets/logos/logo-caser.png'
import logoCigna2 from '../../assets/logos/logo-cigna2.png'
import logoCosalud from '../../assets/logos/logo-cosalud.png'
import logoDkv from '../../assets/logos/logo-dkv.png'
import logoHna from '../../assets/logos/logo-hna.png'
import logoMapfre from '../../assets/logos/logo-mapfre.png'
import logoMusa from '../../assets/logos/logo-musa.png'
import logoNuevaMutua1 from '../../assets/logos/logo-nueva-mutua-sanitaria_1.png'
import logoOccident from '../../assets/logos/logo-occident.png'
import logoSanitas from '../../assets/logos/logo-sanitas.png'
import logoSersanet from '../../assets/logos/logo-sersanet.png'
import { Card, CardImg, Row, Col, Container } from 'react-bootstrap'
import './WeWorkWith.css'


function WeWorkWith() {


    const [visible, setVisible] = useState(false)

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        const element = document.getElementById('work-with-section')
        if (element) {
            const viewportHeight = window.innerHeight
            const scrollPosition = window.scrollY
            const elementOffsetTop = element.offsetTop
            if (scrollPosition > elementOffsetTop - viewportHeight) {
                setVisible(true)
            }
        }
    }

    const insuranceImg = [
        logoAsisa,
        logoCaser,
        logoCigna2,
        logoCosalud,
        logoDkv,
        logoHna,
        logoMapfre,
        logoMusa,
        logoNuevaMutua1,
        logoOccident,
        logoSanitas,
        logoSersanet
    ]
    return (
        <div id="work-with-section" className={`we-work-with ${visible ? 'visible' : ''}`}>
            <Container>
                <div className='work-with-title'>
                    Trabajamos con estas aseguradoras:
                </div>
                <Row className='g-0 work-with-row'>
                    {insuranceImg.map((src, index) => (
                        <Col key={index} md={2} sm={6} xs={6} className="work-with-cards">
                            <img className={`work-with-image ${visible ? 'reveal' : ''}`} src={src} alt='Insurance logos' />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default WeWorkWith