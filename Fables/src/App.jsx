import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import OurServicesCardSection from './components/OurServicesCardSection'
import AboutUs from './components/AboutUs'
import ProductsAndServices from './components/ProductsAndServices'
import OurPartners from './components/OurPartners'
import Testimonials from './components/Testimonials'

import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <OurServicesCardSection></OurServicesCardSection>
      <ProductsAndServices></ProductsAndServices>
      <Testimonials></Testimonials>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  )
}

export default App
