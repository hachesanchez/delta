import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { LuPhone } from "react-icons/lu";
import './ContactPhone.css'

function ContactPhone() {
    return (
        <div className="phone-row">
            <Row  >
                <Col md={{ span: 2, offset: 2 }} className='contact-phone'>
                    <LuPhone />
                </Col>
                <Col md={8} sm={10} className='phone'>
                    <div className="phone-content">
                        <p className="phone-title">
                            Teléfono de contacto
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
