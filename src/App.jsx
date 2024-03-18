import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'

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
