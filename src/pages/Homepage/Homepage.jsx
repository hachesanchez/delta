import React from 'react'
import Hero from '../../components/Homepage/Hero'
import { Container } from 'react-bootstrap'
import './Homepage.css'
import MoreInfo from '../../components/Homepage/MoreInfo'
import WeWorkWith from '../../components/Homepage/WeWorkWith'
import Team from '../../components/Homepage/Team'
import CarrouselTeam from '../../components/Homepage/CarrouselTeam'

function Homepage() {

    return (
        <>
            <div className='homepage' >
                <div className="hero">
                    <Hero />
                </div>
                <MoreInfo />
                <Team />
                <CarrouselTeam />
                <WeWorkWith />
            </div >
        </>
    )
}

export default Homepage