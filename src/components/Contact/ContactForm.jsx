import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Form, FormGroup, Col, Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './ContactForm.css'
import PolicyModal from "./PolicyModal";


function ContactForm() {

    const [state, handleSubmit] = useForm("mvoewzjg");
    const [isBoxChecked, setIsBoxChecked] = useState(false);
    const [openPolicy, setOpenPolicy] = useState(false)
    const [insuranceChecked, setInsuranceChecked] = useState(false);


    const handleCheckbox = (e) => {
        setIsBoxChecked(e.target.checked);
    }

    const handlePolicyModal = () => {
        setOpenPolicy(true)
        console.log('estoy abierta??----', openPolicy)
    }

    const handleInsuranceChange = (e) => {
        setInsuranceChecked(e.target.id === 'insuranceYes');
    }

    if (state.succeeded) {
        return <p className="contact-thanks-message">¡Gracias! Te contactaremos de vuelta en la mayor brevedad posible</p>;
    }


    return (
        <>
            <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Label className="form-label">Nombre y apellidos*</Form.Label>
                <FormGroup className=" " controlId="username">
                    <Form.Control type="text" name="username" className="form-placeholder" required />
                    <ValidationError prefix="Name" field="username" errors={state.errors} />
                </FormGroup>

                <FormGroup className="" controlId="email">
                    <Form.Label className="form-label">Email*</Form.Label>
                    <Form.Control type="email" name="email" className="form-placeholder" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </FormGroup>

                <FormGroup className="" controlId="teléfono">
                    <Form.Label className="form-label">Tlf de contacto*</Form.Label>
                    <Form.Control type="phone" name="teléfono" className="form-placeholder" required />
                    <ValidationError prefix="phone" field="phone" errors={state.errors} />
                </FormGroup>

                <Form.Group className=" " controlId="category">
                    <Form.Label className="form-label">Consulta relacionada con...</Form.Label>
                    <Form.Control as="select" name="category" >
                        <option className="option-placeholder" >Escoge una opción...</option>
                        <option value="consulta">Consulta</option>
                        <option value="cita">Cita</option>
                        <option value="servicios">Servicios</option>
                        <option value="otros">Otros</option>
                    </Form.Control>
                    <ValidationError prefix="Category" field="category" errors={state.errors} />
                </Form.Group>

                <FormGroup className="mb-3" controlId="insurance">
                    <Form.Label className="form-label">Tengo aseguradora</Form.Label>
                    <div className="form-check">
                        <Form.Check
                            type='checkbox'
                            label={`Sí`}
                            id={`insuranceYes`}
                            checked={insuranceChecked}
                            onChange={handleInsuranceChange}
                        />
                        <Form.Check
                            type='checkbox'
                            label={`No`}
                            id={`insuranceNo`}
                            checked={!insuranceChecked}
                            onChange={handleInsuranceChange}
                        />
                    </div>
                    <ValidationError prefix="Insurance" field="insurance" errors={state.errors} />
                </FormGroup>

                <FormGroup className="" controlId="message">
                    <Form.Label className="form-label">Mensaje</Form.Label>
                    <Form.Control name="message" className="form-placeholder" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </FormGroup>

                <Form.Group className="" controlId="formBasicCheckbox">
                    <Form.Check
                        type='checkbox'
                        label={<span>He leído y acepto la <Link onClick={handlePolicyModal}>política de privacidad</Link></span>}
                        className={'check-label'}
                        onChange={handleCheckbox}
                    />
                </Form.Group>

                <Button className='mb-3 mt-3' variant="secondary" type="submit" disabled={!isBoxChecked || state.submitting}>
                    Enviar
                </Button>
            </Form>

            <PolicyModal
                show={openPolicy}
                setOpenPolicy={setOpenPolicy}
            />

            {/* <Modal
                show={openPolicy}
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
                    <Modal.Body>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus tenetur fugit praesentium beatae sunt quasi magni, unde, natus perferendis ut rem vitae consequatur pariatur laboriosam tempore odit saepe, quidem dicta!
                    </Modal.Body>
                </Modal.Header>
            </Modal> */}
        </>
    );
}

export default ContactForm
