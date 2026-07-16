import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#0B0E14] py-16 text-white">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Logo & tagline */}
        <div>
          <Link to="/" className="inline-flex items-center" aria-label="Boulai home">
            <img
              src="/brand/boulai-logo.png?v=8"
              alt="Boulai"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/[58%]">
            Scientific intelligence for discovery, clinical development, and R&D strategy.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <Link to="/product" className="text-sm text-white/[58%] hover:text-white transition-colors">Product</Link>
          <Link to="/about" className="text-sm text-white/[58%] hover:text-white transition-colors">About</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <Link to="/contact" className="text-sm text-white/[58%] hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>

      <div className="mt-12 pt-8 text-center text-xs text-white/[42%]">
        © {new Date().getFullYear()} Boulai. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
