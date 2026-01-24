import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Products = () => {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const courses = [
    {
      id: 1,
      name: 'Full Stack Web Development',
      price: 25000,
      category: 'development',
      emoji: '💻',
      duration: '12 weeks',
      level: 'Beginner - Advanced',
      rating: 4.9,
      students: '2.5k+',
      desc: 'Master frontend and backend with modern frameworks and cloud deployment.'
    },
    {
      id: 2,
      name: 'Advanced Data Analytics',
      price: 20000,
      category: 'analytics',
      emoji: '📊',
      duration: '10 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: '1.2k+',
      desc: 'Turn data into actionable insights using Python, R, and Tableau.'
    },
    {
      id: 3,
      name: 'AI & Machine Learning',
      price: 30000,
      category: 'ai',
      emoji: '🤖',
      duration: '14 weeks',
      level: 'Advanced',
      rating: 5.0,
      students: '800+',
      desc: 'Build sophisticated AI models and neural networks from scratch.'
    },
    {
      id: 4,
      name: 'Cloud Computing (AWS)',
      price: 22000,
      category: 'cloud',
      emoji: '☁️',
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.7,
      students: '1.5k+',
      desc: 'Architectscalable cloud solutions on the world\'s leading cloud platform.'
    },
    {
      id: 5,
      name: 'Python for Beginners',
      price: 15000,
      category: 'development',
      emoji: '🐍',
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.9,
      students: '4k+',
      desc: 'Start your coding journey with the most versatile programming language.'
    },
    {
      id: 6,
      name: 'DevOps & CI/CD',
      price: 24000,
      category: 'devops',
      emoji: '⚙️',
      duration: '10 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: '900+',
      desc: 'Streamline software delivery with automated pipelines and tools.'
    },
    {
      id: 7,
      name: 'UI/UX Design Master',
      price: 18000,
      category: 'design',
      emoji: '🎨',
      duration: '8 weeks',
      level: 'Beginner - Intermediate',
      rating: 4.9,
      students: '2k+',
      desc: 'Create beautiful, user-centered digital experiences and interfaces.'
    },
    {
      id: 8,
      name: 'Java Enterprise Development',
      price: 26000,
      category: 'development',
      emoji: '☕',
      duration: '12 weeks',
      level: 'Intermediate - Advanced',
      rating: 4.7,
      students: '1.1k+',
      desc: 'Build robust enterprise applications using Java and Spring Boot.'
    },
  ]

  const filteredCourses = courses.filter(course => {
    const matchesFilter = filter === 'all' || course.category === filter
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="courses-page bg-grid-light">
      {/* Hero Section */}
      <section className="section-padding overflow-hidden relative">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="badge-premium mb-6">Elite Academy</span>
            <h1 className="hero-main-title text-center block" style={{ alignItems: 'center' }}>
              Master the <span className="text-gradient">Future.</span>
            </h1>
            <p className="hero-desc mx-auto mt-6">
              Empower your career with industry-leading courses designed by experts from the world's top tech firms.
            </p>

            {/* Search Bar */}
            <div className="mt-12 relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for courses (e.g. AI, Development...)"
                className="w-full px-8 py-5 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#E91E63]/20 focus:border-[#E91E63] transition-all shadow-xl text-slate-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400">
                🔍
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E91E63]/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6A1B9A]/10 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Filter & Courses Section */}
      <section className="section-padding pt-0">
        <div className="container">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-up">
            {['all', 'development', 'analytics', 'ai', 'cloud', 'design', 'devops'].map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === cat
                    ? 'bg-gradient-to-r from-[#E91E63] to-[#6A1B9A] text-white shadow-lg shadow-[#E91E63]/20'
                    : 'bg-white text-slate-600 border border-slate-100 hover:border-[#E91E63] hover:text-[#E91E63]'
                  }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-premium group p-0 overflow-hidden flex flex-col h-full hover:border-[#E91E63]/30"
                >
                  <div className="h-44 bg-slate-50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-700">
                    {course.emoji}
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-3 py-1 bg-slate-100 text-[10px] font-black uppercase tracking-widest border border-slate-200 rounded-lg text-slate-500">
                        {course.category}
                      </span>
                      <span className="text-[10px] font-bold text-[#6A1B9A] uppercase tracking-widest">
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-black mb-3 text-slate-800 leading-tight group-hover:text-[#E91E63] transition-colors line-clamp-2">
                      {course.name}
                    </h3>

                    <p className="text-xs text-slate-500 mb-6 line-clamp-2 leading-relaxed">
                      {course.desc}
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-center gap-4 mb-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>⭐ {course.rating}</span>
                        <span>•</span>
                        <span>👥 {course.students} students</span>
                        <span>•</span>
                        <span>📊 {course.level}</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-2xl font-black text-slate-800">₹{course.price.toLocaleString()}</span>
                        <Link to="/cart" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#E91E63] group-hover:text-white transition-all text-slate-400">
                          →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center card-premium">
                <div className="text-5xl mb-6">🔍</div>
                <h3 className="text-2xl font-black text-slate-800 mb-2 uppercase">No matching courses</h3>
                <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-slate-50/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="badge-premium mb-6">Why Elite?</span>
              <h2 className="text-4xl font-black mb-8 text-slate-800 uppercase leading-tight">
                Designed for <span className="text-gradient">Impact.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Industry Experts', desc: 'Learn directly from seniors at Google, Amazon, and Meta.' },
                  { title: 'Hands-on Projects', desc: 'Build a portfolio with real-world enterprise projects.' },
                  { title: 'Placement Support', desc: '1-on-1 career coaching and direct interview referrals.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      ⭐
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#E91E63]/5 to-[#6A1B9A]/5 border border-slate-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-[200px] opacity-20">🎓</div>
                {/* Visual Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-2xl animate-bounce" style={{ animationDuration: '3s' }}>💻</div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-3xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🚀</div>
                <div className="absolute top-1/2 right-20 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>🤖</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="card-premium p-20 text-center bg-[#0b0b0b] relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 uppercase leading-tight">
                Transform your <span className="text-gradient">Career.</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-12">
                Join 50,000+ professionals who have accelerated their journey with Elite AI Solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="btn-premium primary">Start Your Journey</Link>
                <Link to="/about" className="btn-premium outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.1)' }}>Learn More</Link>
              </div>
            </div>
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E91E63]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#6A1B9A]/10 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
