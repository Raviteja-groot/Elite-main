import React from 'react'

function Careers() {
  const perks = [
    { title: 'Remote First', icon: '🏠' },
    { title: 'Global Coverage', icon: '🏥' },
    { title: 'Growth Credits', icon: '📚' },
    { title: 'Flex Workflow', icon: '⏰' },
    { title: 'Elite Retreats', icon: '✈️' },
    { title: 'Equity Options', icon: '📈' }
  ]

  const positions = [
    { title: 'Lead Technical Consultant', type: 'Full-time', category: 'Consulting' },
    { title: 'Senior AI Engineer', type: 'Full-time', category: 'Engineering' },
    { title: 'Product Strategist', type: 'Contract', category: 'Design' },
    { title: 'SVP Operations', type: 'Full-time', category: 'Leadership' }
  ]

  return (
    <div className="careers bg-grid">
      {/* Hero */}
      <section className="section-padding text-center">
        <div className="container animate-fade-up">
          <span className="badge-premium mb-6">Talent & Culture</span>
          <h1 className="hero-main-title">Join the <span className="text-gradient">Elite.</span></h1>
          <p className="hero-desc mx-auto">
            We are looking for visionary thinkers and relentless executors to solve the world's most critical business challenges.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="section-heading">Why You'll Thrive</h2>
            <div className="heading-sub">Building a future where you belong.</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {perks.map((p, i) => (
              <div key={i} className="card-premium p-8 text-center group hover:bg-white/5">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{p.icon}</div>
                <p className="font-bold text-[10px] uppercase tracking-widest text-muted group-hover:text-white transition-colors">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="section-padding">
        <div className="container animate-fade-up">
          <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-8">
            <div>
              <h2 className="section-heading">Active Roles</h2>
              <p className="text-muted">Find your place in our global network.</p>
            </div>
            <span className="text-blue-500 font-black text-xl">{positions.length} OPENINGS</span>
          </div>

          <div className="space-y-4">
            {positions.map((pos, i) => (
              <div key={i} className="card-premium p-8 flex flex-col md:flex-row justify-between items-center group hover:border-blue-500/30">
                <div>
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2 block">{pos.category}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-blue-500 transition-colors">{pos.title}</h3>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-8">
                  <span className="text-muted font-bold text-xs uppercase tracking-widest">{pos.type}</span>
                  <button className="btn-premium primary">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers