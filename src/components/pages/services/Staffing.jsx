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
          <h1 className="hero-main-title">Precision <span className="text-gradient">Personnel.</span></h1>
          <p className="hero-desc mx-auto">
            We bridge the gap between human excellence and enterprise demand through high-fidelity talent matching.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 mb-20 animate-fade-up">
            {categories.map((c, i) => (
              <div key={i} className="card-premium text-center hover:bg-white/5 border-dashed!">
                <div className="text-4xl mb-6">{c.icon}</div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">{c.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-premium">
              <h2 className="text-2xl font-bold mb-10 text-blue-500 uppercase tracking-widest">Enterprise Side</h2>
              <div className="space-y-8">
                {[
                  { t: 'Curated Talent Pool', d: 'Direct access to the top 1% of global specialists.' },
                  { t: 'Velocity Matching', d: 'Reduced time-to-hire by 65% through AI screening.' },
                  { t: 'Scale Capability', d: 'Deploy entire teams in record durations.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">✓</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.t}</h4>
                      <p className="text-muted text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-premium">
              <h2 className="text-2xl font-bold mb-10 text-white uppercase tracking-widest">Specialist Side</h2>
              <div className="space-y-8">
                {[
                  { t: 'Elite Opportunities', d: 'Exclusive access to high-impact global projects.' },
                  { t: 'Career Velocity', d: 'Personalized growth paths within top-tier orgs.' },
                  { t: 'Flexible Command', d: 'Choose your workflow: Remote, Hybrid, or On-site.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">🚀</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.t}</h4>
                      <p className="text-muted text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Staffing