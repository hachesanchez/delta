import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ContactBanner from '../../components/Contact/ContactBanner'
import ContactForm from '../../components/Contact/ContactForm'
import { LuCalendarClock } from "react-icons/lu";
import './ContactPage.css'
import OpeningHours from '../../components/Contact/OpeningHours';
import ContactPhone from '../../components/Contact/ContactPhone';


function ContactPage() {

    return (

        <div className="contact-page">

            <Row className='contact-banner-form-row'>
                <Col md={6} >
                    <ContactBanner />
                </Col>
                <Col md={6}>
                    <ContactForm />
                </Col>
            </Row>
            <Row className='contact-moreinfo-row'>
                <Col md={6}>
                    <OpeningHours />
                </Col>
                <Col md={6}>
                    <ContactPhone />
                </Col>
            </Row>

        </div>


    )
}

export default ContactPage