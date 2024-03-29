import React from 'react'
import { Modal } from 'react-bootstrap'
import ContactForm from './../Contact/ContactForm'
import './ContactModal.css'

function ContactModal({ show, setContactModal }) {

    return (

        <Modal
            show={show}
            onHide={() => setContactModal(false)}
            size='md'
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='contact-modal'
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Contacta
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='contact-modal-body'>
                <ContactForm />
            </Modal.Body>
        </Modal>

    )
}

export default ContactModal