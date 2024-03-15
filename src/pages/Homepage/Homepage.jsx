import React from 'react'
import Hero from '../../components/Homepage/Hero'
import { Container } from 'react-bootstrap'
import './Homepage.css'

function Homepage() {
    return (
        <>
            <div className='homepage' >

                <section className="hero">
                    <Container>
                        <Hero />
                    </Container>
                </section>


            </div >
        </>
    )
}

export default Homepage