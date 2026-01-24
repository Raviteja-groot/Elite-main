import Hero3DLottie from "../Hero3DLottie";
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../../styles/Home.css'






const LetterReveal = ({ text, delay = 0, className = "" }) => {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState('0')
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) observer.observe(countRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const endValue = parseFloat(end.replace(/[^0-9.]/g, ''))
    const suffix = end.replace(/[0-9.]/g, '')
    const totalFrames = duration / 16
    const increment = endValue / totalFrames

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= endValue) {
        setCount(endValue % 1 === 0 ? endValue + suffix : endValue.toFixed(1) + suffix)
        clearInterval(timer)
      } else {
        setCount(current % 1 === 0 ? Math.floor(current) + suffix : current.toFixed(1) + suffix)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return <span ref={countRef}>{count}</span>
}

const Home = () => {
  return (
    <div className="home bg-grid-light">
      {/* Hero Section */}
      <section className="hero-premium bg-grid-light section-padding">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content text-left flex flex-col items-start">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="badge-premium mb-6"
              >
                #1 Industry Intelligence Platform
              </motion.span>

              <h1 className="hero-main-title">
                <span className="transcend-wrapper brand-flow pass-through" data-text="Transcend"><LetterReveal text="Transcend" delay={0.2} className="word-block" /></span>
                <span className="possibility-wrapper brand-flow stay-colored" data-text="Possibility"><LetterReveal text="Possibility" delay={0.8} className="word-block possibility-text" /></span>
                <span className="intelligence-group brand-flow pass-through" data-text="with Intelligence."><LetterReveal text="with Intelligence." delay={1.4} className="word-block" /></span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1.5 }}
                className="hero-desc text-left"
              >
                ELITE delivers world-class consulting, technical mastery, and career transformation for the next generation of global leaders.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
                className="hero-cta-group"
              >
                <Link to="/products" className="btn-premium primary">
                  Explore Services <span className="arrow">→</span>
                </Link>
                <Link to="/about" className="btn-premium outline">
                  Our Mission
                </Link>
              </motion.div>
            </div>
            <div className="hero-visual">
              <div className="sphere-gradient"></div>
              <div className="lottie-center-wrapper">
                <Hero3DLottie />
              </div>
              <div className="floating-elements">
                <div className="element e9">EXECUTION</div>
                <div className="element e2">STRATEGY</div>
                <div className="element e8">INNOVATION</div>
                <div className="element e4">DESIGN</div>
                <div className="element e3">GROWTH</div>
                <div className="element e7">DATA</div>
                <div className="element e1">AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {[
              { label: 'Fortune 500 Partners', val: '150+' },
              { label: 'Global Consultants', val: '500+' },
              { label: 'Success Rate', val: '99.9%' },
              { label: 'Industry Awards', val: '24' }
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <h3 className="stat-val text-gradient">
                  <CountUp end={s.val} />
                </h3>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-premium section-padding">
        <div className="container">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="section-heading">Why Choose ELITE</h2>
            <div className="heading-sub">Excellence engineered into every detail.</div>
          </div>
          <div className="features-grid-premium">
            {[
              { icon: '💎', title: 'Precision Strategy', desc: 'Data-driven insights that cut through complexity and deliver clarity.' },
              { icon: '🚀', title: 'Agile Scale', desc: 'Solutions designed to grow at the speed of your ambition.' },
              { icon: '🛡️', title: 'Secure Future', desc: 'Enterprise-grade security and reliability integrated at every layer.' },
              { icon: '🔮', title: 'Visionary Tech', desc: 'Leveraging the frontier of AI and cloud to redefine your edge.' }
            ].map((f, i) => (
              <div key={i} className="card-premium feature-card-item">
                <div className="icon-box-premium">{f.icon}</div>
                <h3 className="card-title-premium text-gradient text-2xl">{f.title}</h3>
                <p className="card-desc-premium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-premium section-padding">
        <div className="container">
          <div className="cta-wrapper animate-fade-up">
            <h2 className="cta-title">Ready to define <span className="text-gradient">the future?</span></h2>
            <p className="cta-subtitle">Join the elite organizations transforming their industries today.</p>
            <div className="flex justify-center gap-6 mt-12">
              <Link to="/contact" className="btn-premium primary">Start Your Journey</Link>
              <Link to="/services" className="btn-premium outline">View Capabilities</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
