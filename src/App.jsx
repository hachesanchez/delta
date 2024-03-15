import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import Navigation from './pages/Navigation/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

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
