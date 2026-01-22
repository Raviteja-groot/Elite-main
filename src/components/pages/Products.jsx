import React, { useState } from 'react'

function Products() {
  const [filter, setFilter] = useState('all')

  const products = [
    { id: 1, name: 'Full Stack Web Development', price: 25000, category: 'development', emoji: '💻', duration: '12 weeks' },
    { id: 2, name: 'Advanced Data Analytics', price: 20000, category: 'analytics', emoji: '📊', duration: '10 weeks' },
    { id: 3, name: 'AI & Machine Learning', price: 30000, category: 'ai', emoji: '🤖', duration: '14 weeks' },
    { id: 4, name: 'Cloud Computing (AWS)', price: 22000, category: 'cloud', emoji: '☁️', duration: '8 weeks' },
    { id: 5, name: 'Python for Beginners', price: 15000, category: 'development', emoji: '🐍', duration: '6 weeks' },
    { id: 6, name: 'DevOps & CI/CD', price: 24000, category: 'devops', emoji: '⚙️', duration: '10 weeks' },
    { id: 7, name: 'UI/UX Design Master', price: 18000, category: 'design', emoji: '🎨', duration: '8 weeks' },
    { id: 8, name: 'Java Enterprise Development', price: 26000, category: 'development', emoji: '☕', duration: '12 weeks' },
  ]

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter)

  return (
    <div className="products bg-grid">
      <section className="section-padding text-center">
        <div className="container animate-fade-up">
          <span className="badge-premium mb-6">Education</span>
          <h1 className="hero-main-title">Professional <span className="text-gradient">Curriculum.</span></h1>
          <p className="hero-desc mx-auto">
            Master the most in-demand skills with our industry-validated certificate programs.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-up">
            {['all', 'development', 'analytics', 'ai', 'cloud', 'design'].map((cat) => (
              <button
                key={cat}
                className={`btn-premium outline text-xs uppercase tracking-widest px-8 py-3 ${filter === cat ? 'bg-primary! border-primary!' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="card-premium group p-0 overflow-hidden flex flex-col h-full animate-fade-up">
                <div className="h-48 bg-slate-50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  {product.emoji}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{product.category}</span>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{product.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-6 leading-tight group-hover:text-blue-500 transition-colors uppercase tracking-tight">{product.name}</h3>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-2xl font-black text-blue-600">₹{product.price.toLocaleString()}</span>
                      <div className="text-[10px] text-muted">⭐ 5.0 (120+)</div>
                    </div>
                    <button className="btn-premium primary w-full justify-center">Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
