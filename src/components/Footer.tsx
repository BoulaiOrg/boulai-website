import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="section-deep border-t border-border/30 py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Logo & tagline */}
        <div>
          <Link to="/" className="text-xl font-bold text-foreground tracking-tight">
            BOULA<span className="relative">i<span className="absolute -top-[2px] left-[3px] w-[4px] h-[4px] rounded-full bg-primary" /></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            A modern Boule — human minds and AI, around the same table.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <Link to="/product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Product</Link>
          <Link to="/research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Research</Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Who We Are</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@boulai.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BOULAi. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
