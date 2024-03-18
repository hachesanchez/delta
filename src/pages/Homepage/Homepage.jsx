import React from 'react'
import Hero from '../../components/Homepage/Hero'
import { Container } from 'react-bootstrap'
import './Homepage.css'
import MoreInfo from '../../components/Homepage/MoreInfo'
import WeWorkWith from '../../components/WeWorkWith/WeWorkWith'

function Homepage() {

    return (
        <>
            <div className='homepage' >
                <div className="hero">
                    <Hero />
                </div>
                <MoreInfo />
                <WeWorkWith />
            </div >
        </>
    )
}

export default Homepage