import Hero3DLottie from "../Hero3DLottie";
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'
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
      whileInView="visible"
      viewport={{ once: true }}
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

const FeatureCard = ({ f, i }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top, width, height } = currentTarget.getBoundingClientRect();
    let xPoint = clientX - left;
    let yPoint = clientY - top;
    
    mouseX.set(xPoint);
    mouseY.set(yPoint);
  }

  return (
    <motion.div 
      className="card-premium feature-card-item group relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(233, 30, 99, 0.15),
              transparent 80%
            )
          `
        }}
      />
      <div className="icon-box-premium relative z-10 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
      <h3 className="card-title-premium text-gradient text-2xl relative z-10">{f.title}</h3>
      <p className="card-desc-premium relative z-10 group-hover:text-slate-900 transition-colors duration-300">{f.desc}</p>
    </motion.div>
  )
}

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="home bg-grid-light relative overflow-hidden">
      {/* Floating Background Blobs */}
      <motion.div 
        className="fixed top-20 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl -z-10 mix-blend-multiply filter opacity-70 animate-blob"
        style={{ y: y1 }}
      />
      <motion.div 
        className="fixed top-40 right-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl -z-10 mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"
        style={{ y: y2 }}
      />
      <motion.div 
        className="fixed -bottom-8 left-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl -z-10 mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000"
        style={{ x: y1 }}
      />

      {/* Hero Section */}
      <section className="hero-premium bg-transparent section-padding relative">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content text-left flex flex-col items-start z-10">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="badge-premium mb-6 backdrop-blur-sm bg-white/30"
              >
                #1 Global IT Consulting Partner
              </motion.span>

              <h1 className="hero-main-title">
                <span className="transcend-wrapper" data-text="Transform"><LetterReveal text="Transform" delay={0.2} className="word-block" /></span>
                <span className="possibility-wrapper brand-flow stay-colored" data-text="Your Future"><LetterReveal text="Your Future" delay={0.8} className="word-block possibility-text" /></span>
                <span className="intelligence-group" data-text="with Intelligence."><LetterReveal text="with Intelligence." delay={1.4} className="word-block" /></span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1.5 }}
                className="hero-desc text-left text-lg md:text-xl font-medium text-slate-600/90"
              >
                Empowering enterprises with next-gen AI, Cloud, and Digital strategies. We build the systems that power the world's leading brands.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
                className="hero-cta-group mt-8"
              >
                <Link to="/products" className="btn-premium primary group relative overflow-hidden">
                  <span className="relative z-10">Explore Services</span>
                  <motion.span 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="arrow ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link to="/about" className="btn-premium outline backdrop-blur-sm hover:bg-white/50">
                  Our Mission
                </Link>
              </motion.div>
            </div>
            <div className="hero-visual relative">
              <div className="sphere-gradient opacity-50"></div>
              <motion.div 
                className="lottie-center-wrapper"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Hero3DLottie />
              </motion.div>
              <div className="floating-elements">
                {['EXECUTION', 'STRATEGY', 'INNOVATION', 'DESIGN', 'GROWTH', 'DATA', 'AI'].map((text, i) => (
                  <motion.div 
                    key={text} 
                    className={`element e${i+1} backdrop-blur-md bg-white/40 border border-white/50 shadow-lg`}
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    whileHover={{ scale: 1.2, zIndex: 50, backgroundColor: "rgba(255,255,255,0.9)" }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar relative z-10 backdrop-blur-xl bg-white/10 border-y border-white/20">
        <div className="container">
          <div className="stats-grid">
            {[
              { label: 'Fortune 500 Partners', val: '150+' },
              { label: 'Global Consultants', val: '500+' },
              { label: 'Success Rate', val: '99.9%' },
              { label: 'Industry Awards', val: '24' }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="stat-val text-gradient drop-shadow-sm">
                  <CountUp end={s.val} />
                </h3>
                <p className="stat-label font-bold text-slate-600">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Marquee */}
      <section className="trusted-by py-12 bg-white/50 backdrop-blur-sm border-b border-white/20 overflow-hidden">
        <div className="container mb-8 text-center">
          <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Trusted by Global Leaders</p>
        </div>
        <div className="marquee-container relative flex overflow-x-hidden">
          <motion.div 
            className="marquee-content flex gap-16 items-center px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Tesla', 'IBM', 'Oracle', 'Intel', 'Adobe'].map((brand, i) => (
                  <div key={`${setIndex}-${i}`} className="brand-item text-2xl font-bold text-slate-300 hover:text-pink-500 transition-colors cursor-default whitespace-nowrap">
                    {brand}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-premium section-padding relative z-10">
        <div className="container">
          <div className="text-center mb-20">
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Expertise
            </motion.h2>
            <motion.div 
              className="heading-sub"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Driving digital transformation across industries.
            </motion.div>
          </div>
          <div className="features-grid-premium">
            {[
              { icon: '💎', title: 'Digital Transformation', desc: 'Reinventing business models with AI-native architectures and seamless cloud integration.' },
              { icon: '🚀', title: 'Cloud Enablement', desc: 'Scalable, secure, and resilient cloud foundations that power rapid innovation.' },
              { icon: '🛡️', title: 'Intelligent Operations', desc: 'Telemetry-driven FinOps and SRE to keep your releases fast and safe.' },
              { icon: '🔮', title: 'AI & Data Strategy', desc: 'Unlocking new value pools through predictive analytics and generative AI copilots.' }
            ].map((f, i) => (
              <FeatureCard key={i} f={f} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section-padding relative z-10 bg-slate-50/50">
        <div className="container">
          <div className="text-center mb-20">
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Methodology
            </motion.h2>
            <p className="max-w-2xl mx-auto text-slate-600 mt-4 text-lg">
              From concept to scale, we engineer success through a proven, rigorous framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-purple-100 via-amber-200 to-purple-100 -z-10" />
            
            {[
              { step: '01', title: 'Discover', desc: 'Immersion, value modeling, and rapid concept validation.' },
              { step: '02', title: 'Design', desc: 'Blueprint customer journeys and platform architectures.' },
              { step: '03', title: 'Build', desc: 'Multidisciplinary pods ship increments with automated QA.' },
              { step: '04', title: 'Scale', desc: 'Launch kits and managed evolution ensure continuous growth.' }
            ].map((p, i) => (
              <motion.div 
                key={i}
                className="process-card bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-slate-900 group-hover:text-purple-700 transition-colors font-serif">
                  {p.step}
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 to-amber-500 text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                  {p.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 font-serif">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-premium section-padding relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 -z-10"
          style={{ scale: useTransform(scrollYProgress, [0.8, 1], [1, 1.2]) }}
        />
        <div className="container">
          <div className="cta-wrapper backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-12">
            <motion.h2 
              className="cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to define <span className="text-gradient">the future?</span>
            </motion.h2>
            <p className="cta-subtitle">Join the elite organizations transforming their industries today.</p>
            <div className="flex justify-center gap-6 mt-12">
              <Link to="/contact" className="btn-premium primary shadow-lg shadow-pink-500/30">Start Your Journey</Link>
              <Link to="/services" className="btn-premium outline bg-white/50 hover:bg-white">View Capabilities</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
