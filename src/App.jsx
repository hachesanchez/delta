import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <Navigation />
        <AppRoutes />
        <Footer />
      </div>
    </>
  )
}

export default App
