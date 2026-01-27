import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
    const services = [
        {
            name: 'Strategy & Consulting',
            description: 'Architecting growth through deep data analysis and market intelligence.',
            icon: '🏛️',
            link: '/services/consulting'
        },
        {
            name: 'Enterprise Staffing',
            description: 'Precision talent acquisition for critical infrastructure and scale.',
            icon: '🤝',
            link: '/services/staffing'
        },
        {
            name: 'Expert Training',
            description: 'Empowering workforces with the knowledge of tomorrow, today.',
            icon: '🎓',
            link: '/services/training'
        },
        {
            name: 'Custom IT Solutions',
            description: 'End-to-end engineering from cloud architecture to AI integration.',
            icon: '💻',
            link: '/services/it-solutions'
        }
    ]

    return (
        <div className="services bg-grid">
            {/* Hero */}
            <section className="section-padding text-center">
                <div className="container animate-fade-up">
                    <span className="badge-premium mb-6">Capabilities</span>
                    <h1 className="hero-main-title">Modern Solutions for <br /><span className="text-gradient">Complex Problems.</span></h1>
                    <p className="hero-desc mx-auto">
                        We deliver high-impact services across the entire technology and business lifecycle.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Link to={service.link} key={index} className="group no-underline">
                                <div className="card-premium h-full flex flex-col justify-between hover:border-blue-500/50">
                                    <div className="flex-1 flex flex-col items-center">
                                        <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors uppercase tracking-tight text-center">{service.name}</h3>
                                        <p className="text-muted text-lg leading-relaxed text-center max-w-sm">{service.description}</p>
                                    </div>
                                    <div className="mt-8 flex items-center justify-center text-blue-500 font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                        View Methodology
                                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-surface/30">
                <div className="container">
                    <div className="text-center mb-20">
                        <h2 className="section-heading">How We Work</h2>
                        <div className="heading-sub">Systematic excellence.</div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discovery', desc: 'Deep dive into your infrastructure and business goals.' },
                            { step: '02', title: 'Strategy', desc: 'Designing a roadmap tailored to your specific constraints.' },
                            { step: '03', title: 'Execution', desc: 'Agile implementation with continuous feedback loops.' },
                            { step: '04', title: 'Optimization', desc: 'Data-driven refinement to maximize ROI.' }
                        ].map((p, i) => (
                            <div key={i} className="relative">
                                <div className="text-8xl font-black text-slate-100 absolute -top-10 -left-4 z-0">{p.step}</div>
                                <div className="relative z-10 card-premium border-l-4 border-l-blue-500">
                                    <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                                    <p className="text-muted text-sm">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
