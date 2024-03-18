import React from 'react'
import Hero from '../../components/Homepage/Hero'
import { Container } from 'react-bootstrap'
import './Homepage.css'
import MoreInfo from '../../components/Homepage/MoreInfo'

function Homepage() {

    return (
        <>
            <div className='homepage' >
                <div className="hero">
                    <Hero />
                </div>
                <MoreInfo />
            </div >
        </>
    )
}

export default Homepage