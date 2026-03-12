import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

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
  const [dark,       setDark]       = useState(false);

  /* Force light (beige) theme on initial load — never auto-detect system dark */
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    setDark((d) => {
      document.documentElement.classList.toggle("dark", !d);
      return !d;
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={`pill-nav max-w-5xl mx-auto px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold font-sans tracking-tight">
            GMD
          </span>
          <span className="hidden sm:block font-serif font-bold text-foreground text-base tracking-tight">
            G.Md.Dastageer
          </span>
        </a>

        {/* Desktop nav links with dot separators */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link, i) => (
            <span key={link.label} className="flex items-center">
              {i > 0 && (
                <span className="text-muted-foreground/40 mx-1 text-xs select-none">·</span>
              )}
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-lg hover:bg-muted"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 font-sans"
          >
            Connect
          </a>
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-all"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 rounded-3xl border border-border bg-background/95 backdrop-blur-lg shadow-lg overflow-hidden animate-slide-down">
          <div className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold text-center hover:opacity-90 transition-all"
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
