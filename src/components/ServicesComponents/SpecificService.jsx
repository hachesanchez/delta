import React from 'react'
import './SpecificService.css'
import { Col, Container, Row } from 'react-bootstrap'
import SpecificServiceCarousel from './SpecificServiceCarousel'



function SpecificService({ service }) {

    return (

        <div className='specific-service'>

            <div className='service-header'>
                <div className="service-icon">
                    <img src={service.image} alt={service.title} />
                </div>
                <div className="service-title">
                    <p>{service.title}</p>
                </div>
            </div>

            <Container className='specific-service-container'>
                {service.content.map((e) => (
                    <Row>
                        <Col>
                            <div className='service-text'>
                                <p className='service-subtitle'>
                                    {e.subtitle}
                                </p>
                                <div className="service-body">
                                    {e.body?.map((e) => (
                                        <p>{e}</p>
                                    ))}
                                </div>
                                <ul className='service-list'>
                                    {e.list?.map((j, idx) => (
                                        <li key={idx}>{j}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>

                        <SpecificServiceCarousel content={e} />

                    </Row>
                ))}
            </Container>

        </div>
    )
}

export default SpecificService