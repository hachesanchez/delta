import React from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import './TeamCards.css';

function TeamCards({ doctors, selected, handleSelected }) {

    return (

        <Row className='team-row'>
            <Col md={3} sm={12}>
                {doctors?.map((doctor) => (
                    <div
                        key={doctor.username}
                        onClick={() => handleSelected(doctor)}
                        className={`team-username ${selected && selected.username === doctor.username ? 'active' : ''}`}
                    >
                        {doctor.username}
                    </div>
                ))}
            </Col>

            <Col md={{ span: 8, offset: 1 }} sm={12} className='team-card-section'>
                {!selected ?
                    <p className="team-intro">
                        Delta es un Centro de Diagnóstico por la Imagen dirigido por Pilar Martínez-Ten y Carmina Bermejo formado por un equipo de profesionales altamente cualificados y con amplia experiencia en diagnóstico prenatal así como en patología ginecológica y de mama.
                    </p>
                    :
                    <div className="team-selected">
                        {selected &&
                            <>
                                <Row>
                                    <Col className='team-image-col' sm={12} md={12} lg={5}>
                                        <img className="team-avatar" src={selected.avatar} alt={selected.fullName} />
                                    </Col>
                                    <Col sm={12} md={12} lg={7}>
                                        <p className='team-fullname'>{selected.fullName}</p>
                                        <div className="team-body">
                                            {selected.experience?.map((e, idx) => (
                                                <div key={idx} className="team-experience">
                                                    <Accordion className='team-subtitle-experience'>
                                                        <Accordion.Item eventKey={idx}>
                                                            <Accordion.Header>
                                                                <p className='team-subtitle'>{e.subtitle}</p>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <ul>
                                                                    {e.content.map((item, index) => (
                                                                        <li key={index}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="team-body">
                                            {selected.publications?.map((e, idx) => (
                                                <div key={idx} className="team-publications">
                                                    <Accordion>
                                                        <Accordion.Item eventKey={idx}>
                                                            <Accordion.Header>
                                                                <p className='team-subtitle'>{e.subtitle}</p>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <ul>
                                                                    {e.content.map((item, index) => (
                                                                        <li key={index}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="team-body">
                                            {selected.presentations?.map((e, idx) => (
                                                <div key={idx} className="team-presentations">
                                                    <Accordion>
                                                        <Accordion.Item eventKey={idx}>
                                                            <Accordion.Header>
                                                                <p className='team-subtitle'>{e.subtitle}</p>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <ul>
                                                                    {e.content.map((item, index) => (
                                                                        <li key={index}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="team-body">
                                            {selected.today?.map((e, idx) => (
                                                <div key={idx} className="team-today">
                                                    <Accordion>
                                                        <Accordion.Item eventKey={idx}>
                                                            <Accordion.Header>
                                                                <p className='team-subtitle'>{e.subtitle}</p>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <ul>
                                                                    {e.content.map((item, index) => (
                                                                        <li key={index}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        }
                    </div>
                }
            </Col>
        </Row>
    );
}

export default TeamCards;
