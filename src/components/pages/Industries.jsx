import React from 'react'
import { Link } from 'react-router-dom'
import { industriesData } from '../../data/industriesData'

function Industries() {
  const industries = Object.entries(industriesData).map(([slug, data]) => ({
    slug,
    ...data
  }))

  return (
    <div className="industries bg-grid">
      {/* Hero */}
      <section className="section-padding text-center">
        <div className="container animate-fade-up">
          <span className="badge-premium mb-6">Verticals</span>
          <h1 className="hero-main-title">Domain Expertise. <br /><span className="text-gradient">Universal Excellence.</span></h1>
          <p className="hero-desc mx-auto">
            Deep specialized knowledge across every major industry sector in the global economy.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link to={`/industries/${industry.slug}`} key={index} className="group no-underline">
                <div className="card-premium h-full hover:border-blue-500/50 flex flex-col items-center text-center">
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{industry.icon}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors uppercase tracking-tight">{industry.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-8 line-clamp-2">{industry.description}</p>
                  <div className="flex items-center justify-center text-blue-500 font-bold uppercase tracking-widest text-[10px] mt-auto">
                    Sector Analysis
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
    </div>
  )
}

export default Industries