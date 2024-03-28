import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './ContactPage.css'
import ContactBanner from '../../components/Contact/ContactBanner'
import ContactForm from '../../components/Contact/ContactForm'

function ContactPage() {

    return (

        <div className="contact-page">
            <Row className='contact-page-row'>
                <Col md={6} >
                    <ContactBanner />
                </Col>
                <Col md={6}>
                    <ContactForm />
                </Col>
            </Row>
        </div>


    )
}

export default ContactPage