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
            We don't just advise; we architect the future of your organization through deep surgical consulting.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-premium h-full">
                <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-muted text-lg leading-relaxed mb-10">{service.description}</p>
                <div>
                  <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-6 border-b border-black/5 pb-2 inline-block">Key Modules</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-semibold text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="card-premium !bg-[#3b82f6] border-none p-16 text-center text-white overflow-hidden relative shadow-2xl shadow-blue-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h2 className="text-4xl font-black mb-6 text-white">Architect Your Evolution</h2>
            <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">The difference between survival and dominance is strategy. Let's build yours today.</p>
            <button className="btn-premium primary !bg-white !text-blue-600 !shadow-none hover:!bg-slate-100 transition-colors">Initiate Discovery</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Consulting