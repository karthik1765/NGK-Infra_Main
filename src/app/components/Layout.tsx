import { useState, useEffect } from "react";
import { Outlet, NavLink, Link, useLocation } from "react-router";
import { Phone, Menu, X, MapPin, Mail, Instagram, Youtube } from "lucide-react";
import logo from "../../imports/WhatsApp_Image_2026-06-29_at_5.32.09_PM-1.jpeg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navSolid = !isHome || scrolled;

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navSolid
            ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-3.5">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="NGK Infra Logo"
              className="w-11 h-11 object-contain rounded-full shrink-0"
            />
            <div className="flex flex-col leading-tight">
              <span
                className="text-lg font-bold tracking-wider text-primary"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                NGK INFRA DEVELOPERS
              </span>
              <span className={`text-[9px] tracking-[0.28em] uppercase font-semibold ${navSolid ? "text-[#1F2937]" : "text-white"}`}>
                Real Estate · Vizag
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all duration-200 text-primary relative pb-0.5 ${
                    isActive
                      ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:rounded-full"
                      : "hover:opacity-80"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <a
            href="tel:+919398691219"
            className="hidden lg:flex items-center gap-2 bg-primary text-white px-5 py-2.5 text-sm font-semibold rounded-sm hover:bg-[#EA580C] transition-colors duration-200"
          >
            <Phone size={13} />
            Call Now
          </a>

          <button
            className={`lg:hidden p-1 ${navSolid ? "text-[#1F2937]" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border px-6 py-6 flex flex-col gap-3 shadow-lg">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-base py-2 border-b border-[#F3F4F6] transition-colors font-medium ${
                    isActive ? "text-primary" : "text-[#374151] hover:text-primary"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="tel:+919398691219"
              className="mt-2 flex items-center gap-2 bg-primary text-white px-5 py-3 text-sm font-semibold justify-center hover:bg-[#EA580C] transition-colors"
            >
              <Phone size={14} /> +91 93986 91219
            </a>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919398691219?text=Hello%20NGK%20Infra%2C%20I%20am%20interested%20in%20your%20properties%20in%20Vizag.%20Please%20share%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.647 4.786 1.776 6.793L2 30l7.438-1.744A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.89-1.608l-.422-.25-4.414 1.034 1.056-4.302-.276-.44A11.556 11.556 0 0 1 4.4 16C4.4 9.594 9.594 4.4 16 4.4S27.6 9.594 27.6 16 22.406 27.6 16 27.6zm6.338-8.674c-.347-.174-2.056-1.015-2.374-1.13-.318-.116-.55-.174-.781.174-.232.347-.895 1.13-1.098 1.362-.202.231-.405.26-.752.087-.347-.174-1.464-.54-2.788-1.72-1.03-.92-1.726-2.055-1.928-2.402-.202-.347-.022-.535.152-.708.156-.156.347-.405.52-.608.174-.202.232-.347.347-.578.116-.232.058-.434-.029-.608-.087-.174-.781-1.884-1.07-2.58-.282-.677-.569-.585-.781-.596l-.665-.011c-.232 0-.608.087-.926.434-.318.347-1.214 1.186-1.214 2.893s1.243 3.355 1.416 3.587c.174.231 2.448 3.737 5.933 5.239.83.358 1.477.572 1.982.732.833.265 1.59.228 2.189.138.668-.1 2.056-.84 2.346-1.652.29-.811.29-1.507.203-1.652-.086-.144-.318-.231-.665-.405z"/>
        </svg>
      </a>

      {/* FOOTER */}
      <footer className="bg-[#1F2937] text-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <img src={logo} alt="NGK Infra Logo" className="w-10 h-10 object-contain rounded-full" />
                <span className="text-xl font-bold text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  NGK INFRA
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6">
                Building premium residences across Vizag that blend contemporary
                design with enduring values. Your dream home, crafted with care.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={16} />, label: "Instagram", href: "https://www.instagram.com/ngk_infra99?igsh=bm5sZHlqd20xZ2g2" },
                  { icon: <Youtube size={16} />, label: "YouTube", href: "https://youtube.com/@ngkinfra?si=EntM3gufJ5sRoXsR" },
                ].map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.25em] text-white/40 uppercase mb-5 font-medium">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-white/60 hover:text-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.25em] text-white/40 uppercase mb-5 font-medium">Contact</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex gap-2.5">
                  <Phone size={14} className="text-primary shrink-0 mt-0.5" />
                  <span>+91 93986 91219</span>
                </li>
                <li className="flex gap-2.5">
                  <Mail size={14} className="text-primary shrink-0 mt-0.5" />
                  <span>ngkinfra99@gmail.com</span>
                </li>
                <li className="flex gap-2.5">
                  <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                  <span>Vizag, Andhra Pradesh</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
            <span>© {new Date().getFullYear()} NGK Infra. All rights reserved.</span>
            <div className="flex gap-6">
              <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
              <Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
