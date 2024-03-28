import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Form, FormGroup, Button, FloatingLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import PolicyModal from "./PolicyModal";
import './ContactForm.css'


function ContactForm() {

    const [state, handleSubmit] = useForm("mvoewzjg");
    const [isBoxChecked, setIsBoxChecked] = useState(false);
    const [openPolicy, setOpenPolicy] = useState(false)
    const [insuranceChecked, setInsuranceChecked] = useState(null);


    const handleCheckbox = (e) => {
        setIsBoxChecked(e.target.checked);
    }

    const handlePolicyModal = () => {
        setOpenPolicy(true)
    }

    const handleInsuranceChange = (e) => {
        const isYes = e.target.id === 'insuranceYes';
        setInsuranceChecked(isYes);
        document.querySelector('input[name="insurance"]').value = isYes;
    }


    if (state.succeeded) {
        return <p className="contact-thanks-message">¡Gracias! Te contactaremos de vuelta en la mayor brevedad posible</p>;
    }


    return (
        <>
            <Form onSubmit={handleSubmit} className="contact-form">

                <FormGroup controlId="username">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre y apellidos *"
                        className="form-label"
                    >
                        <Form.Control type="text" name="username" className="form-placeholder" placeholder="Escribe tu nombre y apellidos..." required />
                        <ValidationError prefix="Name" field="username" errors={state.errors} />
                    </FloatingLabel>
                </FormGroup>

                <FormGroup controlId="email">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email *"
                        className="form-label"
                    >
                        <Form.Control type="text" name="email" className="form-placeholder" placeholder="Escribe tu dirección de correo..." required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </FloatingLabel>
                </FormGroup>

                <FormGroup controlId="phone">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Teléfono de contacto *"
                        className="form-label"
                    >
                        <Form.Control type="text" name="phone" className="form-placeholder" placeholder="Escribe un nº de contacto..." required />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </FloatingLabel>
                </FormGroup>

                <Form.Group controlId="category">
                    <Form.Label className="form-label-normal">Tengo interés en......</Form.Label>
                    <Form.Control as="select" name="category" >
                        <option className="option-placeholder" >Escoge una opción...</option>
                        <option value="consulta">Consulta</option>
                        <option value="cita">Cita</option>
                        <option value="servicios">Servicios</option>
                        <option value="otros">Otros</option>
                    </Form.Control>
                    <ValidationError prefix="Category" field="category" errors={state.errors} />
                </Form.Group>

                <FormGroup className="mb-3" controlId="insuranceCheckbox">
                    <Form.Label className="form-label-normal">Tengo aseguradora</Form.Label>
                    <div className="form-check">
                        <Form.Check
                            type='checkbox'
                            label={`Sí`}
                            id={`insuranceYes`}
                            checked={insuranceChecked === true}
                            onChange={handleInsuranceChange}
                        />
                        <Form.Check
                            type='checkbox'
                            label={`No`}
                            id={`insuranceNo`}
                            checked={insuranceChecked === false}
                            onChange={handleInsuranceChange}
                        />
                    </div>
                    <input type="hidden" name="insurance" value={insuranceChecked} />                    <ValidationError prefix="Insurance" field="insurance" errors={state.errors} />
                </FormGroup>

                <FormGroup controlId="message">
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Mensaje"
                        className="form-label"
                    >
                        <Form.Control type="textarea" name="message" className="form-placeholder" placeholder="Escribe tu mensaje..." />
                    </FloatingLabel>
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


        </>
    );
}

export default ContactForm
