import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../../assets/logo.png"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setActiveDropdown(null)
  }, [location])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ]

  const servicesDropdown = [
    { name: "Consulting", path: "/services/consulting", icon: "💼", desc: "Strategic guidance" },
    { name: "Staffing", path: "/services/staffing", icon: "👥", desc: "Top talent solutions" },
    { name: "Training", path: "/services/training", icon: "📚", desc: "Skill development" },
    { name: "IT Solutions", path: "/services/it-solutions", icon: "💻", desc: "Tech innovation" },
  ]

  const industriesDropdown = [
    { name: "Banking", path: "/industries/banking", icon: "🏦" },
    { name: "Healthcare", path: "/industries/healthcare", icon: "🏥" },
    { name: "Media", path: "/industries/media", icon: "📺" },
    { name: "Telecom", path: "/industries/telecom", icon: "📡" },
    { name: "Energy", path: "/industries/energy", icon: "⚡" },
    { name: "Oil & Gas", path: "/industries/oil-gas", icon: "🛢️" },
    { name: "Retail", path: "/industries/retail", icon: "🛍️" },
    { name: "Manufacturing", path: "/industries/manufacturing", icon: "🏭" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-white/70 backdrop-blur-md shadow-lg shadow-purple-500/10 border-b border-white/20"
            : "bg-transparent"
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500" style={{ opacity: scrolled ? 1 : 0 }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
          <div className="flex h-24 items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-50">
              <motion.img
                src={logo}
                className="h-12 transition-all duration-300 drop-shadow-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 text-[15px] font-bold transition-all duration-300 rounded-full group overflow-hidden ${location.pathname === item.path
                    ? "text-[#E91E63]"
                    : "text-slate-800 hover:text-[#E91E63]"
                  }`}
                >
                  <span className="relative z-10 font-serif tracking-wide">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-50 to-amber-50 rounded-full -z-0"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-full bg-amber-50/50 rounded-full -z-10 border border-amber-100"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-[#E91E63] transition-colors duration-300 rounded-lg flex items-center gap-2 group">
                  Services
                  <motion.svg
                    animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-3 w-80 bg-white backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-100 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4 pb-4 border-b border-slate-100">
                          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Our Services</h3>
                        </div>
                        <div className="space-y-2">
                          {servicesDropdown.map((service, idx) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#E91E63]/10 hover:to-[#6A1B9A]/10 transition-all duration-300 group"
                            >
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                {service.icon}
                              </div>
                              <div className="flex-1">
                                <span className="block text-base font-bold text-slate-800 group-hover:text-[#E91E63] transition-colors">
                                  {service.name}
                                </span>
                                <span className="block text-xs text-slate-500 mt-0.5">
                                  {service.desc}
                                </span>
                              </div>
                              <svg className="w-5 h-5 text-slate-300 group-hover:text-[#E91E63] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('industries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-[#E91E63] transition-colors duration-300 rounded-lg flex items-center gap-2 group">
                  Industries
                  <motion.svg
                    animate={{ rotate: activeDropdown === 'industries' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-3 w-96 bg-white backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-100 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4 pb-4 border-b border-slate-100">
                          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Industries We Serve</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {industriesDropdown.map((industry, idx) => (
                            <Link
                              key={industry.name}
                              to={industry.path}
                              className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-[#E91E63]/10 hover:to-[#6A1B9A]/10 transition-all duration-300 group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                {industry.icon}
                              </div>
                              <span className="text-sm font-bold text-slate-700 group-hover:text-[#E91E63] transition-colors">
                                {industry.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="relative z-50 flex lg:hidden flex-col items-center justify-center w-10 h-10 gap-1.5 group"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{
                  rotate: open ? 45 : 0,
                  y: open ? 8 : 0,
                  backgroundColor: open ? "#E91E63" : "#0f172a"
                }}
                className="w-6 h-0.5 bg-slate-800 rounded-full transition-all"
              />
              <motion.span
                animate={{
                  opacity: open ? 0 : 1,
                  backgroundColor: open ? "#E91E63" : "#0f172a"
                }}
                className="w-6 h-0.5 bg-slate-800 rounded-full transition-all"
              />
              <motion.span
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? -8 : 0,
                  backgroundColor: open ? "#E91E63" : "#0f172a"
                }}
                className="w-6 h-0.5 bg-slate-800 rounded-full transition-all"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-8 pt-24 space-y-6">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="block text-2xl font-bold text-slate-800 hover:text-[#E91E63] transition-colors py-3"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Services</h3>
                  <div className="space-y-3">
                    {servicesDropdown.map((service, idx) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 text-slate-700 hover:text-[#E91E63] transition-colors"
                      >
                        <span className="text-xl">{service.icon}</span>
                        <span className="font-semibold">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Industries</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {industriesDropdown.map((industry, idx) => (
                      <Link
                        key={industry.name}
                        to={industry.path}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 text-slate-700 hover:text-[#E91E63] transition-colors"
                      >
                        <span className="text-lg">{industry.icon}</span>
                        <span className="text-sm font-semibold">{industry.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>


              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}