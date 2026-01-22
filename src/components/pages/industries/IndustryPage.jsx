import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { industriesData } from '../../../data/industriesData'

function IndustryPage() {
    const { slug } = useParams()
    const data = industriesData[slug]

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-deep">
                <div className="text-center">
                    <h1 className="hero-main-title">404</h1>
                    <p className="hero-desc">Industry data not found.</p>
                    <Link to="/industries" className="btn-premium primary">Back to Industries</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="industry-detail bg-grid">
            {/* Hero */}
            <section className="section-padding overflow-hidden">
                <div className="container animate-fade-up">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-6xl mb-8">{data.icon}</div>
                            <h1 className="hero-main-title">{data.title}</h1>
                            <p className="hero-desc">{data.description}</p>
                            <Link to="/contact" className="btn-premium primary">Request Consultation</Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {data.stats.map((stat, idx) => (
                                <div key={idx} className="card-premium text-center">
                                    <p className="text-3xl font-black text-blue-500 mb-1">{stat.value}</p>
                                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding bg-surface/30">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="section-heading mb-12">Industry Insights</h2>
                        <div className="prose prose-invert max-w-none text-muted text-lg leading-relaxed">
                            <p className="mb-8">{data.details}</p>
                            <p className="mb-12">
                                Our specialized team brings decades of combined experience in {data.title}, ensuring that our partners stay ahead of regulatory changes, market shifts, and technological disruptions.
                            </p>
                        </div>

                        <div className="card-premium mt-12 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <h3 className="text-2xl font-bold mb-8">Strategic Focus Areas</h3>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    'Legacy System Transformation',
                                    'Omnichannel Intelligence',
                                    'Regulatory Compliance Engineering',
                                    'Predictive Risk Management'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="font-semibold text-white/80">{item}</p>
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

export default IndustryPage
