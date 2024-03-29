import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../pages/Homepage/Homepage'
import TeamPage from '../pages/TeamPage/TeamPage'
import ContactPage from '../pages/ContactPage/ContactPage'

function AppRoutes() {

    return (

        <div>

            <Routes>

                <Route path='/' element={<Homepage />} />
                <Route path='/equipo' element={<TeamPage />} />
                <Route path='/contacta' element={<ContactPage />} />

            </Routes>

        </div>
    )
}

export default AppRoutes
