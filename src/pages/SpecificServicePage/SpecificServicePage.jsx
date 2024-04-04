import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import data from '../../services.json'
import SpecificService from '../../components/ServicesComponents/SpecificService'
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

        <SpecificService service={service} />

    )
}

export default SpecificServicePage