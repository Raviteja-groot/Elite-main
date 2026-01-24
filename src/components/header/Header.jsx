import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-black/5 shadow-sm" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} className="h-10 transition-transform hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 lg:flex">
            {["Home", "Courses", "Careers", "Contact"].map(item => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="group relative text-sm font-medium text-slate-800 hover:text-[#E91E63] transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#E91E63] to-[#6A1B9A] transition-all group-hover:w-full"></span>
              </Link>
            ))}

            {/* Services */}
            <div className="group relative">
              <span className="cursor-pointer text-sm font-medium text-slate-800 hover:text-[#E91E63] transition-colors">
                Services
              </span>
              <div className="absolute left-0 top-8 w-56 rounded-xl bg-black/90 opacity-0 shadow-xl backdrop-blur-xl transition-all group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 pointer-events-none group-hover:pointer-events-auto">
                {["Consulting", "Staffing", "Training", "IT Solutions"].map(s => (
                  <Link
                    key={s}
                    to={`/services/${s.toLowerCase().replace(" ", "-")}`}
                    className="block px-5 py-3 text-sm text-white/80 hover:bg-white/10"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="group relative">
              <span className="cursor-pointer text-sm font-medium text-slate-800 hover:text-[#E91E63] transition-colors">
                Industries
              </span>
              <div className="absolute left-0 top-8 w-64 rounded-xl bg-black/90 opacity-0 shadow-xl backdrop-blur-xl transition-all group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 pointer-events-none group-hover:pointer-events-auto">
                {[
                  "Banking",
                  "Healthcare",
                  "Media",
                  "Telecom",
                  "Energy",
                  "Oil & Gas",
                  "Retail",
                  "Manufacturing",
                ].map(i => (
                  <Link
                    key={i}
                    to={`/industries/${i.toLowerCase().replace(/ & | /g, "-")}`}
                    className="block px-5 py-3 text-sm text-white/80 hover:bg-white/10"
                  >
                    {i}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/cart"
              className="rounded-full bg-gradient-to-r from-[#E91E63] to-[#6A1B9A] px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-[#6A1B9A]/40"
            >
              Enroll Now
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1 lg:hidden"
          >
            <span className={`h-[2px] w-6 bg-slate-800 transition ${open && "rotate-45 translate-y-[6px]"}`} />
            <span className={`h-[2px] w-6 bg-slate-800 transition ${open && "opacity-0"}`} />
            <span className={`h-[2px] w-6 bg-slate-800 transition ${open && "-rotate-45 -translate-y-[6px]"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl transition-transform duration-500 lg:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 text-xl text-white">
          {["Home", "Courses", "Careers", "Contact"].map(item => (
            <Link key={item} to="/" onClick={() => setOpen(false)}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}