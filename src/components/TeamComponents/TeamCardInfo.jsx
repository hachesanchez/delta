import React from 'react'
import { Accordion } from 'react-bootstrap';
import './TeamCardInfo.css'

function TeamCardInfo({ idx, e }) {

    return (

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
    )
}

export default TeamCardInfo