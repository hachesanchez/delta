import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import ScrollToTop from './ScrollToTop.jsx'


function App() {

  return (
    <>
      <div>
        <ScrollToTop>
          <Navigation />
          <AppRoutes />
          <Footer />
        </ScrollToTop>
      </div>
    </>
  )
}

export default App
