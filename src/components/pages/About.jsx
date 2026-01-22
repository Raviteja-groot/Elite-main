import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  const values = [
    { title: 'Excellence', description: 'Upholding the highest standards in every endeavor.', icon: '🏆' },
    { title: 'Innovation', description: 'Pioneering solutions that define tomorrow.', icon: '💡' },
    { title: 'Integrity', description: 'Foundation of trust built on radical transparency.', icon: '🤝' },
    { title: 'Collaboration', description: 'Unifying diverse expertise for singular goals.', icon: '👥' }
  ]

  return (
    <div className="about bg-grid">
      {/* Hero Section */}
      <section className="section-padding text-center">
        <div className="container animate-fade-up">
          <span className="badge-premium mb-6">Our Legacy</span>
          <h1 className="hero-main-title">Modern Expertise. <br />Global <span className="text-gradient">Impact.</span></h1>
          <p className="hero-desc mx-auto">
            ELITE was founded on the principle that technology should be an accelerator, not a barrier. We bridge the gap between human ambition and digital execution.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="section-heading">Defining the Standard</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                For over a decade, we’ve partnered with the world’s most ambitious brands to solve their most complex problems. Our methodology combines rigorous data science with visionary creative thinking.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn-premium primary">Partner With Us</Link>
                <Link to="/careers" className="btn-premium outline">Join the Team</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: '12+', label: 'Years Experience' },
                { val: '250+', label: 'Specialists' },
                { val: '500+', label: 'Projects' },
                { val: '15+', label: 'Countries' }
              ].map((s, i) => (
                <div key={i} className="card-premium text-center py-10">
                  <h3 className="text-3xl font-black text-blue-500 mb-2">{s.val}</h3>
                  <p className="text-xs font-bold text-muted uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="section-heading">The Core Values</h2>
            <div className="heading-sub">What drives us to deliver perfection.</div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="card-premium group">
                <div className="text-4xl mb-6 group-hover:scale-125 transition-transform inline-block">{v.icon}</div>
                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About