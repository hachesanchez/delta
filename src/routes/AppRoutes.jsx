import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../pages/Homepage/Homepage'

function AppRoutes() {

    return (

        <div>

            <Routes>

                <Route path='/' element={<Homepage />} />

            </Routes>

        </div>
    )
}

export default AppRoutes
