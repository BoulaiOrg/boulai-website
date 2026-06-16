import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "/product" },
  { label: "Company", href: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#121419]/95 backdrop-blur-md"
          : "border-b border-white/10 bg-[#121419]/92"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Boulai home">
          <span className="brand-wordmark">BOULAI</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[11px] font-medium uppercase tracking-[0.24em] transition-colors hover:text-white ${
                location.pathname === link.href ? "text-white" : "text-white/56"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size="sm" className="bg-white text-[#121419] hover:bg-white/92" asChild>
            <a href="#waitlist">Request Intro</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="text-white md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-white/10 bg-[#121419]/98 px-4 pb-6 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
                  location.pathname === link.href ? "text-white" : "text-white/56"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="bg-white text-[#121419] hover:bg-white/92" asChild>
              <a href="#waitlist">Request Intro</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
