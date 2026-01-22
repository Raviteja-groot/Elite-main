import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Footer.css'
import logo from '../../assets/logo.png'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="ELITE AI SOLUTIONS" className="footer-logo-img" />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Premier career guidance and professional development institute transforming careers through excellence.
            </p>
            <div className="social-links flex gap-4">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">📷</a>
            </div>
          </div>

          {/* Explore Section */}
          <div className="footer-links-group">
            <h4 className="footer-title">Explore</h4>
            <div className="links-columns">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/clients">Clients</Link></li>
                <li><Link to="/products">Products</Link></li>
              </ul>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-links-group">
            <h4 className="footer-title">Services</h4>
            <ul>
              <li><Link to="/services/consulting">Consulting</Link></li>
              <li><Link to="/services/staffing">Staffing</Link></li>
              <li><Link to="/services/training">Training</Link></li>
              <li><Link to="/services/it-solutions">IT Solutions</Link></li>
            </ul>
          </div>

          {/* Industries Section */}
          <div className="footer-links-group industries-group">
            <h4 className="footer-title">Industries</h4>
            <div className="links-columns">
              <ul>
                <li><Link to="/industries/banking-financial-services">Banking & Financial S...</Link></li>
                <li><Link to="/industries/media-entertainment">Media & Entertainment</Link></li>
                <li><Link to="/industries/energy-utilities">Energy & Utilities</Link></li>
                <li><Link to="/industries/retail-consumer-goods">Retail & Consumer Go...</Link></li>
                <li><Link to="/industries/transportation-logistics">Transportation & Logi...</Link></li>
                <li><Link to="/industries/automotive">Automotive</Link></li>
                <li><Link to="/industries/government-public-sector">Government & Public ...</Link></li>
              </ul>
              <ul>
                <li><Link to="/industries/healthcare-life-sciences">Healthcare & Life Scie...</Link></li>
                <li><Link to="/industries/telecommunications">Telecommunications</Link></li>
                <li><Link to="/industries/oil-gas">Oil & Gas</Link></li>
                <li><Link to="/industries/manufacturing">Manufacturing</Link></li>
                <li><Link to="/industries/travel-hospitality">Travel & Hospitality</Link></li>
                <li><Link to="/industries/education">Education</Link></li>
                <li><Link to="/industries/insurance">Insurance</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} ELITE Institute. All rights reserved.</p>
            <p className="tagline">Empowering Careers, Transforming Futures 💜</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

