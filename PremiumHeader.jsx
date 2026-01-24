import React, { useState, useEffect } from 'react';
import './PremiumHeader.css';

const PremiumHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`premium-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <a href="/" className="brand-logo">ELITE</a>
        <nav>
          <ul className="nav-links">
            <li className="nav-item"><a href="#products">Products</a></li>
            <li className="nav-item"><a href="#solutions">Solutions</a></li>
            <li className="nav-item"><a href="#resources">Resources</a></li>
            <li className="nav-item"><a href="#pricing">Pricing</a></li>
          </ul>
        </nav>
        <button className="cta-button">Get Started</button>
      </div>
    </header>
  );
};

export default PremiumHeader;