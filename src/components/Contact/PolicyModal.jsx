import React from 'react';
import { Modal } from 'react-bootstrap';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

function PolicyModal({ show, setOpenPolicy }) {
    return (
        <Modal
            show={show}
            onHide={() => setOpenPolicy(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="contact-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Política de Privacidad
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PrivacyPolicy />
            </Modal.Body>
        </Modal>
    );
}

export default PolicyModal;
