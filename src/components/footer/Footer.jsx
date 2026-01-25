import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../../styles/Footer.css'
import logo from '../../assets/logo.png'

function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="footer relative overflow-hidden bg-white border-t border-slate-100">
      <motion.div 
        className="container relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="footer-grid">
          {/* Brand Section */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <Link to="/" className="footer-logo inline-block mb-6">
              <motion.img 
                src={logo} 
                alt="ELITE AI SOLUTIONS" 
                className="footer-logo-img h-20 w-auto drop-shadow-md" 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
              We provide comprehensive IT consulting services to help businesses optimize their technology infrastructure and achieve digital transformation goals.
            </p>
            <div className="newsletter-box mt-6">
              <h5 className="text-slate-900 font-bold mb-3 text-sm uppercase tracking-wide">Stay Updated</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-600 transition-colors w-full shadow-sm"
                />
                <button className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-4 py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  →
                </button>
              </div>
            </div>
            <div className="social-links flex gap-4 mt-8">
              {['f', '𝕏', 'in', '📷'].map((icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  className="social-icon w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors shadow-sm"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Explore Section */}
          <motion.div className="footer-links-group" variants={itemVariants}>
            <h4 className="footer-title text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">Explore</h4>
            <div className="links-columns grid grid-cols-2 gap-x-8 gap-y-2">
              <ul className="space-y-3">
                {['Home', 'Services', 'Clients', 'Products'].map((item) => (
                  <li key={item}>
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-500 hover:text-purple-700 transition-colors hover:pl-2 block font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {['About', 'Industries', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-purple-700 transition-colors hover:pl-2 block font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div className="footer-links-group" variants={itemVariants}>
            <h4 className="footer-title text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Consulting', path: '/services/consulting' },
                { name: 'Staffing', path: '/services/staffing' },
                { name: 'Training', path: '/services/training' },
                { name: 'IT Solutions', path: '/services/it-solutions' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-500 hover:text-purple-700 transition-colors hover:pl-2 block font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries Section */}
          <motion.div className="footer-links-group industries-group" variants={itemVariants}>
            <h4 className="footer-title text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">Industries</h4>
            <div className="links-columns grid grid-cols-2 gap-x-8 gap-y-2">
              <ul className="space-y-3">
                {['Banking & Finance', 'Media', 'Energy', 'Retail', 'Logistics', 'Automotive', 'Government'].map((item) => (
                  <li key={item}>
                    <Link to={`/industries/${item.toLowerCase().replace(/ /g, '-')}`} className="text-slate-500 hover:text-purple-700 transition-colors hover:pl-2 block text-sm font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {['Healthcare', 'Telecom', 'Oil & Gas', 'Manufacturing', 'Travel', 'Education', 'Insurance'].map((item) => (
                  <li key={item}>
                    <Link to={`/industries/${item.toLowerCase().replace(/ /g, '-')}`} className="text-slate-500 hover:text-purple-700 transition-colors hover:pl-2 block text-sm font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <p className="text-slate-500 text-sm font-medium">&copy; {currentYear} ELITE Institute. All rights reserved.</p>
          <p className="tagline font-bold text-slate-800 flex items-center gap-2">
            Empowering Careers, Transforming Futures <span className="text-purple-600">💜</span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer

