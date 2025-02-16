import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Stats from './Components/Stats/Stats'
import Reviews from './Components/Reviews/Reviews'
import Services from './Components/Service/Services'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Stats />
      <Services />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
