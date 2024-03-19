import React from 'react';
import './Team.css';
import { Link } from 'react-router-dom';


function Team() {
    return (
        <div className='team'>

            <div className="team-text">
                <p className="team-title">
                    Nuestro <Link to={'/equipo'} className='equipo-link'>equipo</Link> está formado por profesionales específicamente formados y con amplia experiencia en Diagnóstico Prenatal, Medicina Fetal y Técnicas Invasivas, así como Patología Ginecológica y Mamaria.
                </p>
            </div>

        </div>
    );
}

export default Team;
