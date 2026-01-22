import React from 'react'

function Training() {
    const courses = [
        { title: 'Executive Coaching', dur: '4 Weeks', lvl: 'Elite', desc: 'Surgical leadership development for board-level executives.' },
        { title: 'Technical Mastery', dur: '8 Weeks', lvl: 'Pro', desc: 'High-fidelity technical upskilling in modern tech stacks.' },
        { title: 'Soft Systems', dur: '2 Weeks', lvl: 'Core', desc: 'Mastering the human interface: Communication & Synthesis.' },
        { title: 'Digital Strategy', dur: '6 Weeks', lvl: 'Strategic', desc: 'Architecting growth through digital-first methodologies.' }
    ]

    return (
        <div className="training-service bg-grid">
            <section className="section-padding text-center">
                <div className="container animate-fade-up">
                    <span className="badge-premium mb-6">Knowledge Transfer</span>
                    <h1 className="hero-main-title">Continuous <span className="text-gradient">Evolution.</span></h1>
                    <p className="hero-desc mx-auto">
                        Empower your leadership and precision teams with the intelligence required to dominate the global market.
                    </p>
                </div>
            </section>

            <section className="section-padding pt-0">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {courses.map((c, i) => (
                            <div key={i} className="card-premium group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">{c.lvl}</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-6 transition-colors group-hover:text-blue-500 uppercase tracking-tighter">{c.title}</h3>
                                <p className="text-muted text-lg leading-relaxed mb-10 max-w-sm">{c.desc}</p>
                                <div className="flex items-center gap-4 text-xs font-bold text-muted uppercase tracking-widest">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Duration: {c.dur}
                                </div>
                                <button className="btn-premium primary w-full justify-center mt-12">Apply for Program</button>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 text-center animate-fade-up">
                        {[
                            { icon: '🎯', t: 'Outcome Oriented', d: 'Measurable results at every milestone.' },
                            { icon: '👨‍🏫', t: 'Elite Faculty', d: 'Learn from industry architects.' },
                            { icon: '💻', t: 'Applied Workflows', d: 'Real-world deployment scenarios.' }
                        ].map((f, idx) => (
                            <div key={idx}>
                                <div className="text-5xl mb-6">{f.icon}</div>
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{f.t}</h4>
                                <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">{f.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Training
