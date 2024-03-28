import React from 'react'
import contactBanner from '../../assets/images/contactBanner.jpg'
import './ContactBanner.css'

function ContactBanner() {

    return (

        <div className='contact-banner'>
            <img src={contactBanner} className='contact-image' alt="Delta Ecografía recepción" />
        </div>
    )
}

export default ContactBanner