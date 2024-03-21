import React, { useState } from 'react'
import data from '../../team.json'
import './TeamPage.css'
import { Container, Row, Col } from 'react-bootstrap'

function TeamPage() {

    const [selected, setSelected] = useState()

    const handleSelected = (name) => {
        setSelected(name)
        console.log(selected)
    }

    return (

        <>
            <div className="team-page">
                <p className='page-title'>
                    Conoce al equipo
                </p>
            </div>

            <Container>
                <Row>

                    <Col md={3} sm={12}>
                        {data?.map((e) => (
                            <div
                                key={e.name}
                                onClick={handleSelected}
                                className='team-name'
                            >
                                {e.name}
                            </div>
                        ))}
                    </Col>

                    <Col md={9} sm={12}>
                        <p className="team-intro">
                            Delta es un Centro de Diagnóstico por la Imagen dirigido por Pilar Martínez-Ten y Carmina Bermejo formado por un equipo de profesionales altamente cualificados y con amplia experiencia en diagnóstico prenatal así como en patología ginecológica y de mama.
                        </p>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default TeamPage