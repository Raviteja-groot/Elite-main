import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion as Motion } from "framer-motion"
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
    { name: "Industries", path: "/industries" },
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



  return (
    <>
      <Motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg"
            : "bg-transparent backdrop-blur-sm"
          }`}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Motion.div
            className="absolute -right-32 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-purple-100/50 via-fuchsia-100/30 to-amber-50/0 blur-3xl"
            animate={{ opacity: scrolled ? 0.4 : 0.7, y: scrolled ? 4 : 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
        <div className="container relative px-6 lg:px-10">
          <div className="flex h-20 lg:h-24 items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-3 relative z-50">
              <Motion.img
                src={logo}
                alt="Elite"
                className="h-16 lg:h-20 w-auto object-contain drop-shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              />
              <div className="hidden sm:flex flex-col leading-tight pl-2 border-l border-slate-300 ml-2">
                <span className="text-xs font-semibold tracking-[0.28em] text-slate-500 uppercase">
                  Elite
                </span>
                <span className="text-base md:text-lg font-semibold tracking-tight text-slate-800">
                  Talent & Technology Partners
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6 rounded-full bg-white/70 px-6 py-2 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md">
              <nav className="flex items-center gap-4">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`relative px-3 py-1.5 text-xs tracking-[0.2em] uppercase transition-colors duration-300 group ${isActive
                          ? "text-purple-700 font-bold"
                          : "text-slate-600 hover:text-purple-600"
                        }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute inset-x-2 -bottom-2 h-px bg-gradient-to-r from-slate-500/0 via-purple-500/40 to-slate-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {isActive && (
                        <Motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-2 -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600"
                          initial={false}
                          transition={{ type: "spring", stiffness: 420, damping: 28 }}
                        />
                      )}
                    </Link>
                  )
                })}

                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-3 py-1.5 text-xs tracking-[0.2em] uppercase font-semibold text-slate-600 hover:text-purple-600 transition-colors duration-300 flex items-center gap-1 group">
                    <span className="relative z-10">Services</span>
                    <Motion.svg
                      animate={{ rotate: activeDropdown === "services" ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </Motion.svg>
                    <span className="absolute inset-x-1 -bottom-2 h-px bg-gradient-to-r from-slate-500/0 via-purple-500/40 to-slate-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <Motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full -left-4 mt-6 w-[360px] bg-white rounded-2xl shadow-2xl shadow-purple-900/20 border border-slate-100 overflow-hidden ring-1 ring-black/5"
                      >
                        {/* Royal Top Gradient */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#E91E63] via-[#9C27B0] to-[#673AB7]" />
                        
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-4 px-2">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                              Elite Services
                            </h3>
                            <span className="px-2 py-0.5 rounded-full bg-purple-50 text-[10px] font-bold text-purple-600 tracking-wider">
                              PREMIUM
                            </span>
                          </div>
                          
                          <div className="space-y-1">
                            {servicesDropdown.map((service, idx) => (
                              <Link
                                key={service.name}
                                to={service.path}
                                className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 relative overflow-hidden"
                              >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="relative z-10 w-10 h-10 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center text-xl group-hover:scale-110 group-hover:border-purple-100 group-hover:shadow-md transition-all duration-300">
                                  {service.icon}
                                </div>
                                
                                <div className="relative z-10 flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="block text-sm font-bold text-slate-800 group-hover:text-purple-700 transition-colors">
                                      {service.name}
                                    </span>
                                    <span className="text-purple-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                      →
                                    </span>
                                  </div>
                                  <span className="block text-[11px] font-medium text-slate-500 mt-0.5 group-hover:text-slate-600">
                                    {service.desc}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Decorative Bottom */}
                          <div className="mt-4 pt-3 border-t border-slate-50 text-center">
                            <p className="text-[10px] text-slate-400 font-medium italic">
                              "Excellence in every interaction"
                            </p>
                          </div>
                        </div>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              <Motion.div
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="ml-2"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-600 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white shadow-[0_10px_20px_rgba(147,51,234,0.3)] hover:shadow-[0_14px_28px_rgba(147,51,234,0.4)] transition-all duration-300"
                >
                  <span>Consult Now</span>
                  <span className="text-xs">↗</span>
                </Link>
              </Motion.div>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="relative z-50 flex lg:hidden flex-col items-center justify-center w-10 h-10 gap-1.5"
              aria-label="Toggle menu"
            >
              <Motion.span
                animate={{
                  rotate: open ? 45 : 0,
                  y: open ? 7 : 0,
                  backgroundColor: open ? "#9333ea" : "#1e293b",
                }}
                className="w-6 h-0.5 bg-slate-800 rounded-full transition-all"
              />
              <Motion.span
                animate={{
                  opacity: open ? 0 : 1,
                  backgroundColor: open ? "#9333ea" : "#1e293b",
                }}
                className="w-6 h-0.5 bg-slate-800 rounded-full transition-all"
              />
              <Motion.span
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? -7 : 0,
                  backgroundColor: open ? "#9333ea" : "#1e293b",
                }}
                className="w-6 h-0.5 bg-slate-800 rounded-full transition-all"
              />
            </button>
          </div>
        </div>
      </Motion.header>

      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <Motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white border-l border-slate-100 shadow-2xl shadow-slate-200/50 overflow-y-auto"
            >
              <div className="p-8 pt-24 space-y-6">
                {navItems.map((item, idx) => (
                  <Motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`block text-2xl font-semibold py-3 transition-colors ${
                        location.pathname === item.path
                          ? "text-purple-600"
                          : "text-slate-800 hover:text-purple-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </Motion.div>
                ))}

                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.3em] mb-4">
                    Services
                  </h3>
                  <div className="space-y-3">
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 text-slate-600 hover:text-purple-600 transition-colors"
                      >
                        <span className="text-xl">{service.icon}</span>
                        <span className="font-medium text-sm tracking-wide">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
