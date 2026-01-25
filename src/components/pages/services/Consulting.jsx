import React from 'react'

function Consulting() {
  const services = [
    {
      title: 'Structural Strategy',
      description: 'Engineering resilient business architectures that pivot with market volatility.',
      features: ['Market Intelligence', 'Competitive Recon', 'Growth Sculpting', 'Risk Mitigation']
    },
    {
      title: 'Digital Evolution',
      description: 'Transforming legacy inertia into digital velocity through radical re-engineering.',
      features: ['Tech Audit', 'Process Synthesis', 'Change Calibration', 'Deployment Support']
    },
    {
      title: 'Operational Precision',
      description: 'Optimizing the nucleus of your business for maximum performance and output.',
      features: ['Workflow Mapping', 'Efficiency Logic', 'Automation Nodes', 'KPI Synthesis']
    },
    {
      title: 'Leadership Synthesis',
      description: 'Developing the architects of your organizational future through elite coaching.',
      features: ['Org Design', 'Lead Mechanics', 'Culture Coding', 'Performance Tuning']
    }
  ]

  return (
    <div className="consulting-service bg-grid">
      <section className="section-padding text-center">
        <div className="container animate-fade-up">
          <span className="badge-premium mb-6">Expert Advisory</span>
          <h1 className="hero-main-title">Strategy <span className="text-gradient">Redefined.</span></h1>
          <p className="hero-desc mx-auto">
            We don't just advise; we architect the future of your organization through deep surgical consulting and AI-driven insights.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-premium h-full group hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="text-muted text-lg leading-relaxed mb-10">{service.description}</p>
                <div>
                  <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Key Modules</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-semibold text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Process Section */}
      <section className="section-padding bg-surface/50">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="section-heading">Our Methodology</h2>
            <div className="heading-sub">From chaos to clarity in four steps.</div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive analysis of current infrastructure and bottlenecks.' },
              { step: '02', title: 'Strategy', desc: 'Architecting a bespoke roadmap aligned with business KPIs.' },
              { step: '03', title: 'Execution', desc: 'Agile implementation with continuous feedback loops.' },
              { step: '04', title: 'Optimization', desc: 'Data-driven refinement for sustained peak performance.' }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-purple-500/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="text-6xl font-black text-purple-100 absolute top-4 right-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-4 relative z-10 text-slate-900">{item.title}</h3>
                <p className="text-muted text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Impact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-premium mb-6">Real Impact</span>
              <h2 className="section-heading text-left mb-6">Transforming Business Logic</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Our consulting practice isn't about slide decks; it's about tangible, measurable change. We've helped Fortune 500 companies rewrite their operational DNA.
              </p>
              <div className="space-y-6">
                {[
                  { label: 'Efficiency Increase', val: '40%' },
                  { label: 'Cost Reduction', val: '25%' },
                  { label: 'Revenue Growth', val: '3x' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-slate-700">{stat.label}</span>
                      <span className="font-black text-purple-600">{stat.val}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-full animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-amber-500 rounded-3xl transform rotate-3 opacity-20 blur-2xl"></div>
              <div className="bg-white p-10 rounded-3xl shadow-2xl relative border border-slate-100">
                <div className="text-purple-600 text-6xl mb-6">"</div>
                <p className="text-xl font-medium text-slate-800 mb-6 italic">
                  Elite's strategic insight didn't just solve our immediate problems; it positioned us to dominate our sector for the next decade.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Sarah Jenkins</h4>
                    <p className="text-xs text-muted uppercase tracking-widest">CTO, FinCorp Global</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="card-premium !bg-gradient-to-r !from-purple-900 !to-slate-900 border-none p-16 text-center text-white overflow-hidden relative shadow-2xl shadow-purple-900/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h2 className="text-4xl font-black mb-6 text-white">Architect Your Evolution</h2>
            <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto">The difference between survival and dominance is strategy. Let's build yours today.</p>
            <button className="btn-premium primary !bg-white !text-purple-900 !shadow-none hover:!bg-slate-100 transition-colors">Initiate Discovery</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Consulting