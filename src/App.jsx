import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './pages/Navigation/Navigation'

function App() {

  return (
    <>
      <div>
        <Navigation />
        <AppRoutes />
      </div>
    </>
  )
}

export default App
