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
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.7,
      students: '1.5k+',
      desc: 'Architect scalable cloud solutions on the world\'s leading cloud platform.'
    },
    {
      id: 5,
      name: 'Python for Beginners',
      price: 15000,
      category: 'development',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1607799275518-d58665d096b1?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
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
      <section className="section-padding overflow-hidden relative pb-10">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
            <span className="badge-premium mb-6">Elite Academy</span>
            <h1 className="hero-main-title text-center block" style={{ alignItems: 'center' }}>
              Master the <span className="text-gradient">Future.</span>
            </h1>
            <p className="hero-desc mx-auto mt-6">
              Empower your career with industry-leading courses designed by experts from the world's top tech firms.
            </p>

            {/* Search Bar */}
            <div className="mt-10 relative max-w-xl mx-auto">
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
          <div className="flex flex-wrap justify-center gap-6 mb-20 animate-fade-up">
            {['all', 'development', 'analytics', 'ai', 'cloud', 'design', 'devops'].map((cat) => (
              <button
                key={cat}
                className={`px-10 py-4 rounded-full text-base lg:text-lg font-black uppercase tracking-widest transition-all transform hover:-translate-y-1 ${filter === cat
                    ? 'bg-gradient-to-r from-[#E91E63] to-[#6A1B9A] text-white shadow-xl shadow-[#E91E63]/30 scale-105'
                    : 'bg-white text-slate-600 border-2 border-slate-100 hover:border-[#E91E63] hover:text-[#E91E63] hover:shadow-lg'
                  }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Stats Strip - Filling the Up Space */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-slate-100 py-12 bg-white/50 backdrop-blur-sm">
            {[
              { label: 'Active Learners', value: '50,000+', icon: '👥' },
              { label: 'Course Completion', value: '94%', icon: '📈' },
              { label: 'Career Transition', value: '85%', icon: '🚀' },
              { label: 'Avg Rating', value: '4.9/5', icon: '⭐' }
            ].map((stat, i) => (
              <div key={i} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-black text-slate-800 mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
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
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      <section className="pt-20 pb-0 bg-slate-50/50">
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
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 via-pink-200/40 to-amber-200/40 rounded-full blur-[100px] opacity-70" />
              
              {/* Main Dashboard Card */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">student_success.jsx</div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-6">
                  <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-lg">🚀</div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current Status</div>
                      <div className="text-sm font-bold text-slate-800">Job Ready Developer</div>
                    </div>
                    <div className="ml-auto px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded">Verified</div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Skills Mastered</div>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Python', 'AWS', 'System Design'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recent Offers</div>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-white">G</div>
                        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-white">A</div>
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-white">M</div>
                      </div>
                      <span className="text-xs font-medium text-slate-500">+ 12 Interview Calls</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 max-w-[180px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">💰</div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Avg Hike</div>
                    <div className="text-sm font-black text-slate-800">150%</div>
                  </div>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-green-500 rounded-full" />
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 bottom-32 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl">🏆</div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Certificate</div>
                    <div className="text-sm font-black text-slate-800">Industry Recognized</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section - Filling the Down Space */}
      <section className="pt-10 pb-20 bg-white border-y border-slate-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-premium mb-4">How It Works</span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-800 uppercase leading-tight">
              Your Journey to <span className="text-gradient">Mastery.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-purple-200 to-slate-200" />
            
            {[
              { step: '01', title: 'Choose Path', desc: 'Select from our industry-aligned tech stacks.', icon: '🎯' },
              { step: '02', title: 'Build Projects', desc: 'Work on real-world enterprise applications.', icon: '💻' },
              { step: '03', title: 'Get Mentored', desc: 'Weekly 1:1 sessions with experts.', icon: '👨‍🏫' },
              { step: '04', title: 'Get Hired', desc: 'Resume reviews and interview referrals.', icon: '🚀' }
            ].map((item, i) => (
              <div key={i} className="relative pt-8 text-center group">
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-2xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-4 border-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-3 uppercase">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
