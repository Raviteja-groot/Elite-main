import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import logo from '../../assets/logo.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <img src={logo} alt="ELITE AI SOLUTIONS" className="logo-img" />
            </Link>
          </div>

          <nav className={`navbar ${isOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>

            <div className="nav-dropdown">
              <Link to="/services" className="nav-link">Services ▾</Link>
              <div className="dropdown-menu">
                <Link to="/services/consulting">Consulting</Link>
                <Link to="/services/staffing">Staffing</Link>
                <Link to="/services/training">Training</Link>
                <Link to="/services/it-solutions">IT Solutions</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/industries" className="nav-link">Industries ▾</Link>
              <div className="dropdown-menu scrollable-dropdown">
                <Link to="/industries/banking-financial-services">Banking & Finance</Link>
                <Link to="/industries/healthcare-life-sciences">Healthcare</Link>
                <Link to="/industries/media-entertainment">Media & Entertainment</Link>
                <Link to="/industries/telecommunications">Telecommunications</Link>
                <Link to="/industries/energy-utilities">Energy & Utilities</Link>
                <Link to="/industries/oil-gas">Oil & Gas</Link>
                <Link to="/industries/retail-consumer-goods">Retail</Link>
                <Link to="/industries/manufacturing">Manufacturing</Link>
              </div>
            </div>

            <Link to="/products" className="nav-link">Courses</Link>
            <Link to="/careers" className="nav-link">Careers</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/cart" className="nav-link enroll-btn">Enroll Now</Link>
          </nav>

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>
    </header>
  )
}

export default Header
