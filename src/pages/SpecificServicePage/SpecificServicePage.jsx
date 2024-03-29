import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import data from '../../services.json'
import { Col, Container, Row } from 'react-bootstrap'
import './SpecificServicePage.css'


function SpecificServicePage() {

    const { id } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        setService(foundService)
    }, [])

    const foundService = data.find((service) => service.url === `/servicios/${id}`)
    if (!service || !service.content) {
        return <p>Cargando...</p>
    }


    return (

        <div className='specific-service'>

            <div className='service-header'>
                <div className="service-icon">
                    <img src={service.image} alt={service.title} />
                </div>
                <div className="service-title">
                    <p>{service.title}</p>
                </div>
            </div>

            <Container>
                {service.content.map((e) => (
                    <div>

                        <p>
                            {e.subtitle}
                        </p>
                        <ul>
                            {e.list.map((j, idx) => (
                                <li key={idx}>{j}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Container>

        </div>
    )
}

export default SpecificServicePage