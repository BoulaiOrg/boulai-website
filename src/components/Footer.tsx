import { Link } from "react-router-dom";
import logoAsset from "@/assets/boulai-wordmark.png.asset.json";

const Footer = () => (
  <footer className="section-deep border-t border-border/30 py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Logo & tagline */}
        <div>
          <Link to="/" className="inline-flex items-center" aria-label="BOULAI home">
            <img src={logoAsset.url} alt="BOULAI" className="h-8 w-auto object-contain" />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Scientific intelligence for discovery, clinical development, and R&D strategy.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <Link to="/product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Platform</Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Company</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <a href="mailto:hello@boulai.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BOULAI. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
