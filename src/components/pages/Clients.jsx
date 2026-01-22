import React from 'react'

function Clients() {
  const logos = [
    'TechVision', 'GlobalLink', 'FinStream', 'HealthAxis', 'EcoCore', 'EduPlus',
    'LogiTrack', 'RetailRise', 'InnoSys', 'CloudNet', 'BioGen', 'AutoMoto'
  ]

  return (
    <div className="clients bg-grid">
      {/* Hero */}
      <section className="section-padding text-center">
        <div className="container animate-fade-up">
          <span className="badge-premium mb-6">Partnerships</span>
          <h1 className="hero-main-title">Validated by <br /><span className="text-gradient">Industry Giants.</span></h1>
          <p className="hero-desc mx-auto">
            From agile startups to Fortune 100 conglomerates, our solutions power the world's most successful organizations.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {logos.map((logo, i) => (
              <div key={i} className="card-premium h-32 flex items-center justify-center grayscale hover:grayscale-0 p-4 border-dashed!">
                <span className="text-xl font-black text-white/20 group-hover:text-white transition-all uppercase tracking-tighter">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface/50">
        <div className="container">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="section-heading">Voice of the Partner</h2>
            <div className="heading-sub">The impact of excellence told by our clients.</div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "ELITE redefined our digital landscape. Their strategic consulting is surgical and incredibly effective.", author: "Marcus Thorne", role: "CTO, TechVision" },
              { text: "The most professional training network we've collaborated with. Measurable ROI within months.", author: "Elena Rossi", role: "VP People, GlobalLink" },
              { text: "Unmatched technical execution. They don't just solve problems; they anticipate them.", author: "James Chen", role: "CEO, FinStream" }
            ].map((t, i) => (
              <div key={i} className="card-premium flex flex-col justify-between border-blue-500/10!">
                <div className="text-4xl text-blue-500/30 mb-8">“</div>
                <p className="text-lg italic text-white/80 leading-relaxed mb-10">"{t.text}"</p>
                <div className="pt-8 border-t border-white/5">
                  <p className="font-black tracking-tight">{t.author}</p>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Clients