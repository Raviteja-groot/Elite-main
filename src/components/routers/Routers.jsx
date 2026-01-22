import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Core Pages
import Home from '../pages/Home'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import About from '../pages/About'
import Services from '../pages/Services'
import Industries from '../pages/Industries'
import Clients from '../pages/Clients'
import Careers from '../pages/Careers'

// Service Sub-pages
import Consulting from '../pages/services/Consulting'
import Staffing from '../pages/services/Staffing'
import Training from '../pages/services/Training'
import ITSolutions from '../pages/services/ITSolutions'

// Industry Sub-pages (Dynamic)
import IndustryPage from '../pages/industries/IndustryPage'

function Routers() {
  return (
    <div className="main-content">
      <Routes>
        {/* Core Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/industries' element={<Industries />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/products' element={<Products />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />

        {/* Service Routes */}
        <Route path='/services/consulting' element={<Consulting />} />
        <Route path='/services/staffing' element={<Staffing />} />
        <Route path='/services/training' element={<Training />} />
        <Route path='/services/it-solutions' element={<ITSolutions />} />

        {/* Industry Routes */}
        <Route path='/industries/:slug' element={<IndustryPage />} />
      </Routes>
    </div>
  )
}

export default Routers

