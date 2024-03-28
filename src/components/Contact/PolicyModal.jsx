import React from 'react';
import { Modal } from 'react-bootstrap';

function PolicyModal({ show, setOpenPolicy }) {
    return (
        <Modal
            show={show} // Aquí debes usar show en lugar de openPolicy
            onHide={() => setOpenPolicy(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="contact-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Soy la modal de la policy
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus tenetur fugit praesentium beatae sunt quasi magni, unde, natus perferendis ut rem vitae consequatur pariatur laboriosam tempore odit saepe, quidem dicta!
            </Modal.Body>
        </Modal>
    );
}

export default PolicyModal;
