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
                    <h1 className="hero-main-title">Future-Proof <span className="text-gradient">Engineering.</span></h1>
                    <p className="hero-desc mx-auto">
                        We build the digital foundations that power the world's most complex enterprises using best-in-class architecture.
                    </p>
                </div>
            </section>

            <section className="section-padding pt-0">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {solutions.map((s, i) => (
                            <div key={i} className="card-premium group hover:bg-slate-900 hover:text-white transition-all duration-300 border-dashed!">
                                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block grayscale group-hover:grayscale-0">{s.icon}</div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight group-hover:text-purple-400 transition-colors">{s.title}</h3>
                                <p className="text-muted text-sm leading-relaxed group-hover:text-slate-400">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* New Tech Stack Section */}
                    <div className="mb-24">
                        <div className="text-center mb-16 animate-fade-up">
                            <h2 className="section-heading">Our Tech Stack</h2>
                            <div className="heading-sub">We only use battle-tested, enterprise-grade technologies.</div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 opacity-70">
                            {['AWS', 'Azure', 'Google Cloud', 'React', 'Node.js', 'Python', 'Kubernetes', 'Docker', 'TensorFlow', 'PostgreSQL', 'Redis', 'GraphQL'].map((tech, i) => (
                                <div key={i} className="flex items-center justify-center p-4 border border-slate-100 rounded-lg font-bold text-slate-500 uppercase tracking-widest text-xs hover:border-purple-500 hover:text-purple-600 transition-colors cursor-default">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="stats-bar bg-gradient-to-r from-purple-900 to-slate-900 text-white rounded-[40px] shadow-2xl shadow-purple-900/30 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="container relative z-10">
                            <div className="stats-grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                                {[
                                    { l: 'Uptime SLA', v: '99.99%' },
                                    { l: 'Projects Delivered', v: '500+' },
                                    { l: 'Expert Support', v: '24/7' },
                                    { l: 'Security Index', v: 'A+' }
                                ].map((st, idx) => (
                                    <div key={idx} className="text-center p-12">
                                        <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-4 font-outfit">{st.v}</p>
                                        <p className="text-[10px] font-bold text-purple-300 uppercase tracking-widest">{st.l}</p>
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
