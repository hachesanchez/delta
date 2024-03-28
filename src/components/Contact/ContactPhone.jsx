import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { LuPhone } from "react-icons/lu";
import './ContactPhone.css'

function ContactPhone() {
    return (
        <div className="phone-row">
            <Row   >
                <Col md={6} sm={6} className='contact-phone'>
                    <LuPhone />
                </Col>
                <Col md={6} sm={6} className='opening'>
                    <div className="phone-content">
                        <p className="phone-title">
                            Teléfono
                        </p>
                        <p className="phone-body">
                            914320891
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContactPhone
