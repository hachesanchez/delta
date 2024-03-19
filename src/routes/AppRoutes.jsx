import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../pages/Homepage/Homepage'
import TeamPage from '../pages/TeamPage/TeamPage'

function AppRoutes() {

    return (

        <div>

            <Routes>

                <Route path='/' element={<Homepage />} />
                <Route path='/equipo' element={<TeamPage />} />

            </Routes>

        </div>
    )
}

export default AppRoutes
