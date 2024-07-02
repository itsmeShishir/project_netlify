import React from 'react'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import Services from './component/Services'
import Tours from './component/Tours'
import Footer from './component/Footer'
import About from './component/About'

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  )
}

export default App