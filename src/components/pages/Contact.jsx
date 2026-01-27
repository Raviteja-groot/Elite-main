import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Request transmitted. Our advisors will prioritize your inquiry.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact bg-grid">
      <section className="section-padding text-center">
        <div className="container animate-fade-up">
          <span className="badge-premium mb-6">Concierge</span>
          <h1 className="hero-main-title">Direct <span className="text-gradient">Access.</span></h1>
          <p className="hero-desc mx-auto">
            Our global intelligence network is at your disposal. Connect with our strategic leads for partnership and guidance.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-5 animate-fade-up">
              <h2 className="section-heading mb-12">Global Hubs</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: '📍', label: 'InnoDist HQ', val: 'Bangalore, India' },
                  { icon: '📱', label: 'Primary Line', val: '+91 8899-123456' },
                  { icon: '📧', label: 'Direct Mail', val: 'lead@elite.com' },
                  { icon: '⏰', label: 'Operating SLA', val: 'Mon - Fri | 24/5' }
                ].map((item, i) => (
                  <div key={i} className="card-premium p-8 h-full">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="font-bold tracking-tight text-white">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 animate-fade-up overflow-visible">
              <form className="card-premium border-blue-500/20 shadow-2xl shadow-blue-500/10 p-12 lg:p-16 h-full flex flex-col justify-center" onSubmit={handleSubmit}>
                <h3 className="text-3xl font-bold mb-10 uppercase tracking-widest text-center text-gradient">Transmission Form</h3>
                <div className="space-y-8">
                  <div className="input-group">
                    <label className="text-sm font-bold text-muted uppercase tracking-widest mb-3 block">Identity</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-8 py-5 text-lg text-slate-900 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label className="text-sm font-bold text-muted uppercase tracking-widest mb-3 block">Communication</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-8 py-5 text-lg text-slate-900 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label className="text-sm font-bold text-muted uppercase tracking-widest mb-3 block">Objective</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-8 py-5 text-lg text-slate-900 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="Subject of Interest"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label className="text-sm font-bold text-muted uppercase tracking-widest mb-3 block">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-8 py-5 text-lg text-slate-900 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="Detailed Inquiry"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-premium primary w-full justify-center mt-6 py-5 text-lg">Transmit Data</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
