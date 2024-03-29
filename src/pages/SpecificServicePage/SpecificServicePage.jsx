import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import data from '../../services.json'
import { Col, Row } from 'react-bootstrap'
import './SpecificServicePage.css'


function SpecificServicePage() {

    const { id } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        setService(foundService)
    }, [])

    const foundService = data.find((service) => service.url === `/servicios/${id}`)


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

        </div>
    )
}

export default SpecificServicePage