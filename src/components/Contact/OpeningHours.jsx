import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { LuCalendarClock } from 'react-icons/lu'
import './OpeningHours.css'

function OpeningHours() {
    return (
        <div className="opening-hours-row">
            <Row >
                <Col md={{ span: 2, offset: 2 }} sm={2} className='contact-clock'>
                    <LuCalendarClock />
                </Col>
                <Col md={8} sm={10} className='opening'>
                    <div className="opening-content">
                        <p className="opening-title">
                            Horario de consulta
                        </p>
                        <p className="opening-body">
                            Lunes a viernes de 08:30 a 21:00
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default OpeningHours
