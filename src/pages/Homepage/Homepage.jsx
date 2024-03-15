import React from 'react'
import Hero from '../../components/Homepage/Hero'
import { Container } from 'react-bootstrap'
import './Homepage.css'

function Homepage() {

    return (
        <>
            <div className='homepage' >

                <section className="hero">
                    <Hero />
                </section>


            </div >
        </>
    )
}

export default Homepage