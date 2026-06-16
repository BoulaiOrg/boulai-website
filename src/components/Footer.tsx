import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#121419] py-16 text-white">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Logo & tagline */}
        <div>
          <Link to="/" className="inline-flex items-center" aria-label="Boulai home">
            <span className="brand-wordmark text-[1.7rem]">Boulai</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/58">
            Scientific intelligence for discovery, clinical development, and R&D strategy.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <Link to="/product" className="text-sm text-white/58 hover:text-white transition-colors">Platform</Link>
          <Link to="/about" className="text-sm text-white/58 hover:text-white transition-colors">Company</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <a href="mailto:hello@boulai.com" className="text-sm text-white/58 hover:text-white transition-colors">
            Contact
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/58 hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/42">
        © {new Date().getFullYear()} Boulai. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
