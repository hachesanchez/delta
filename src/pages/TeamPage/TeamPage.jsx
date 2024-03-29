import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import data from '../../team.json'
import './TeamPage.css'
import TeamCards from '../../components/TeamComponents/TeamCards'

function TeamPage() {

    const [doctors, setDoctors] = useState([])
    const [selected, setSelected] = useState(null)

    const handleSelected = (doctor) => {
        setSelected(doctor)
    }

    useEffect(() => {
        setDoctors(data)
    }, [])




    return (

        <>
            <h1 className='page-title'>
                Conoce al equipo
            </h1>

            <div className="team-page">
                <Container >
                    <TeamCards doctors={doctors} selected={selected} handleSelected={handleSelected} />
                </Container>
            </div >
        </>
    )
}

export default TeamPage