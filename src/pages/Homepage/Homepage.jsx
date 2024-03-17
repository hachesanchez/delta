import React from 'react'
import Hero from '../../components/Homepage/Hero'
import { Container } from 'react-bootstrap'
import './Homepage.css'
import MoreInfo from '../../components/Homepage/MoreInfo'

function Homepage() {

    return (
        <>
            <div className='homepage' >

                <section className="hero">
                    <Hero />
                </section>
                <section className="more-info">
                    <MoreInfo />
                </section>


            </div >
        </>
    )
}

export default Homepage