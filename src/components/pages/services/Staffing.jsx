import React from 'react'

function Staffing() {
  const categories = [
    { title: 'Elastic Staffing', icon: '⏰', desc: 'On-demand talent for mission-critical bursts.' },
    { title: 'Permanence', icon: '👥', desc: 'Building the foundational core of your enterprise.' },
    { title: 'Hybrid Trials', icon: '📋', desc: 'Surgical evaluation before full-scale integration.' },
    { title: 'Executive Headhunt', icon: '🎯', desc: 'Securing visionary leads for organizational command.' }
  ]

  return (
    <div className="staffing-service bg-grid">
      <section className="section-padding text-center">
        <div className="container animate-fade-up">
          <span className="badge-premium mb-6">Talent Acquisition</span>
          <h1 className="hero-main-title">Elite Talent <span className="text-gradient">Ecosystem.</span></h1>
          <p className="hero-desc mx-auto">
            We don't just fill seats; we deploy high-impact human capital that accelerates your roadmap from Day 1.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 mb-20 animate-fade-up">
            {categories.map((c, i) => (
              <div key={i} className="card-premium text-center hover:bg-slate-800 border-dashed! group transition-all duration-300">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{c.icon}</div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-tight group-hover:text-purple-400 transition-colors">{c.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* New Vetting Section */}
          <div className="mb-24">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="section-heading">The Top 1% Protocol</h2>
              <div className="heading-sub">Our rigorous vetting process ensures only the elite make the cut.</div>
            </div>
            <div className="grid md:grid-cols-5 gap-4 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 hidden md:block"></div>
              {['Application', 'Skill Audit', 'Behavioral', 'Live Code', 'Final Board'].map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center relative">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4 relative z-10 ring-4 ring-white">{i + 1}</div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900">{step}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h2 className="text-2xl font-bold mb-10 text-purple-400 uppercase tracking-widest">Enterprise Side</h2>
              <div className="space-y-8 relative z-10">
                {[
                  { t: 'Curated Talent Pool', d: 'Direct access to the top 1% of global specialists.' },
                  { t: 'Velocity Matching', d: 'Reduced time-to-hire by 65% through AI screening.' },
                  { t: 'Scale Capability', d: 'Deploy entire teams in record durations.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shrink-0 text-white shadow-lg shadow-purple-500/30">✓</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.t}</h4>
                      <p className="text-muted text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-premium primary mt-10 w-full">Find Talent</button>
            </div>

            <div className="card-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h2 className="text-2xl font-bold mb-10 text-amber-400 uppercase tracking-widest">Specialist Side</h2>
              <div className="space-y-8 relative z-10">
                {[
                  { t: 'Elite Opportunities', d: 'Exclusive access to high-impact global projects.' },
                  { t: 'Career Velocity', d: 'Personalized growth paths within top-tier orgs.' },
                  { t: 'Flexible Command', d: 'Choose your workflow: Remote, Hybrid, or On-site.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-white shadow-lg shadow-amber-500/30">🚀</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.t}</h4>
                      <p className="text-muted text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-premium outline mt-10 w-full hover:text-white">Join Network</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Staffing