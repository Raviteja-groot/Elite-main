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
          <h1 className="hero-main-title">Master the <span className="text-gradient">Future.</span></h1>
          <p className="hero-desc mx-auto">
            Empower your leadership and precision teams with the intelligence required to dominate the global market.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {courses.map((c, i) => (
              <div key={i} className="card-premium group relative overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4">
                  <span className={`text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ${
                    c.lvl === 'Elite' ? 'bg-purple-100 text-purple-700' : 
                    c.lvl === 'Pro' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                  }`}>{c.lvl}</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 transition-colors group-hover:text-purple-600 uppercase tracking-tighter">{c.title}</h3>
                <p className="text-muted text-lg leading-relaxed mb-10 max-w-sm">{c.desc}</p>
                <div className="flex items-center gap-4 text-xs font-bold text-muted uppercase tracking-widest border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {c.dur}
                  </div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <div>On-Campus / Remote</div>
                </div>
                <button className="btn-premium primary w-full justify-center mt-8 !bg-slate-900 group-hover:!bg-purple-600 transition-colors">View Curriculum</button>
              </div>
            ))}
          </div>

          {/* New Methodology Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {['Live Labs', 'Code Reviews', 'Mentorship', 'Certifications'].map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center aspect-square text-center group hover:bg-purple-50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-2xl group-hover:bg-white group-hover:scale-110 transition-transform">
                      {['💻', '📝', '👥', '🏆'][i]}
                    </div>
                    <span className="font-bold text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="badge-premium mb-6">Methodology</span>
              <h2 className="section-heading text-left mb-6">Learning by Doing</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                We reject passive learning. Our programs are built on a "Build-First" philosophy where theory is immediately applied to real-world architectural challenges.
              </p>
              <ul className="space-y-4">
                {['Curriculum designed by ex-FAANG engineers', 'Proprietary learning management system', 'Post-completion career support'].map((li, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</div>
                    <span className="font-medium text-slate-700">{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center animate-fade-up border-t border-slate-100 pt-20">
            {[
              { icon: '🎯', t: 'Outcome Oriented', d: 'Measurable results at every milestone.' },
              { icon: '👨‍🏫', t: 'Elite Faculty', d: 'Learn from industry architects.' },
              { icon: '💻', t: 'Applied Workflows', d: 'Real-world deployment scenarios.' }
            ].map((f, idx) => (
              <div key={idx}>
                <div className="text-5xl mb-6 grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 cursor-pointer">{f.icon}</div>
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
