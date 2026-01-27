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
                    <div className="mb-24 relative z-10">
                        <div className="text-center mb-16 animate-fade-up">
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-6 uppercase">Our Tech Stack</h2>
                            <div className="text-slate-500 max-w-2xl mx-auto">We only use battle-tested, enterprise-grade technologies.</div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {['AWS', 'Azure', 'Google Cloud', 'React', 'Node.js', 'Python', 'Kubernetes', 'Docker', 'TensorFlow', 'PostgreSQL', 'Redis', 'GraphQL'].map((tech, i) => (
                                <div key={i} className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center hover:-translate-y-1 hover:shadow-xl hover:border-purple-200 transition-all duration-300">
                                    <span className="font-bold text-slate-600 uppercase tracking-widest text-xs group-hover:text-purple-600 transition-colors">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative -mt-12 mx-4 lg:mx-20 bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-12 overflow-hidden z-20">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-[80px] opacity-60 -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-50 rounded-full blur-[80px] opacity-60 translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
                            {[
                                { l: 'Uptime SLA', v: '99.99%' },
                                { l: 'Projects Delivered', v: '500+' },
                                { l: 'Expert Support', v: '24/7' },
                                { l: 'Security Index', v: 'A+' }
                            ].map((st, idx) => (
                                <div key={idx} className="text-center group">
                                    <p className="text-5xl lg:text-6xl font-black text-slate-800 mb-4 tracking-tight group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent">
                                        {st.v}
                                    </p>
                                    <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.2em]">{st.l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ITSolutions
