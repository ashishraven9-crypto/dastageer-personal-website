import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog",       href: "#blog" },
  { label: "Contact",    href: "#contact" },
];

const Navbar = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={`max-w-5xl mx-auto px-5 py-3 flex items-center justify-between transition-all duration-300 rounded-full backdrop-blur-lg ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{
          background: "rgba(250, 248, 244, 0.92)",
          border: "1px solid #DDD6CC",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-sans tracking-tight"
            style={{ background: "#5C4A32", color: "#FAF8F4" }}
          >
            GMD
          </span>
          <span className="hidden sm:block font-serif font-bold text-base tracking-tight" style={{ color: "#2C2013" }}>
            G.Md.Dastageer
          </span>
        </a>

        {/* Desktop nav links with dot separators */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link, i) => (
            <span key={link.label} className="flex items-center">
              {i > 0 && (
                <span className="mx-1 text-xs select-none" style={{ color: "rgba(138, 125, 107, 0.4)" }}>·</span>
              )}
              <a
                href={link.href}
                className="text-sm transition-colors px-2 py-1 rounded-lg"
                style={{ color: "#8A7D6B" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#2C2013"; e.currentTarget.style.background = "#EDE9E2"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#8A7D6B"; e.currentTarget.style.background = "transparent"; }}
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:flex items-center px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 font-sans"
            style={{ background: "#5C4A32", color: "#FAF8F4" }}
          >
            Connect
          </a>
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ color: "#8A7D6B" }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden max-w-5xl mx-auto mt-2 rounded-3xl backdrop-blur-lg shadow-lg overflow-hidden animate-slide-down"
          style={{ background: "rgba(250, 248, 244, 0.97)", border: "1px solid #DDD6CC" }}
        >
          <div className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-all"
                style={{ color: "#8A7D6B" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-full text-sm font-semibold text-center hover:opacity-90 transition-all"
              style={{ background: "#5C4A32", color: "#FAF8F4" }}
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
