import React from 'react'

function ITSolutions() {
    const solutions = [
        { title: 'Cloud Infrastructure', icon: '☁️', desc: 'Secure, multi-region architecture using AWS, Azure, and GCP.' },
        { title: 'Custom Engineering', icon: '💻', desc: 'Bespoke software systems engineered for horizontal scalability.' },
        { title: 'Cyber Resilience', icon: '🛡️', desc: 'Surgical threat detection and zero-trust security frameworks.' },
        { title: 'Intelligence & BI', icon: '📊', desc: 'Deep neural analytics and real-time data visualization nodes.' },
        { title: 'DevOps Velocity', icon: '🚀', desc: 'Automated CI/CD pipelines delivering sub-second deployments.' },
        { title: 'Managed Systems', icon: '🔌', desc: '24/7 proactive monitoring and system health management.' }
    ]

    return (
        <div className="it-solutions bg-grid">
            <section className="section-padding text-center">
                <div className="container animate-fade-up">
                    <span className="badge-premium mb-6">Technological Edge</span>
                    <h1 className="hero-main-title">Next-Gen <span className="text-gradient">Infrastructure.</span></h1>
                    <p className="hero-desc mx-auto">
                        We build the digital foundations that power the world's most complex enterprises.
                    </p>
                </div>
            </section>

            <section className="section-padding pt-0">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {solutions.map((s, i) => (
                            <div key={i} className="card-premium group hover:bg-blue-50/50">
                                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{s.icon}</div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight group-hover:text-blue-500 transition-colors">{s.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="stats-bar bg-primary/10 border-primary/20 rounded-[40px]">
                        <div className="container">
                            <div className="stats-grid grid-cols-2 md:grid-cols-4">
                                {[
                                    { l: 'Uptime SLA', v: '99.99%' },
                                    { l: 'Projects Delivered', v: '500+' },
                                    { l: 'Expert Support', v: '24/7' },
                                    { l: 'Security Index', v: 'A+' }
                                ].map((st, idx) => (
                                    <div key={idx} className="text-center p-8">
                                        <p className="text-4xl font-black text-blue-600 mb-2 font-outfit">{st.v}</p>
                                        <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{st.l}</p>
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

export default ITSolutions
