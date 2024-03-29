import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import data from '../../services.json'
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
            <h2>{service.title}</h2>
        </div>
    )
}

export default SpecificServicePage