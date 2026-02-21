import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import CausalGraph from "@/components/CausalGraph";
import WaitlistSection from "@/components/WaitlistSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertTriangle, Brain, SearchX } from "lucide-react";

const problemCards = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "LLMs can't replace scientific reasoning",
    desc: "Text generation ≠ causal insight. Language models hallucinate structure where none exists.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-primary" />,
    title: "False positives cost years and millions",
    desc: "Life science R&D cycles are brutal. One bad hypothesis can derail an entire program.",
  },
  {
    icon: <SearchX className="w-8 h-8 text-primary" />,
    title: "Discovery is still a rare skill",
    desc: "Most teams rely on narrative, not disciplined evidence. Real discovery requires new tools.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center section-deep overflow-hidden">
        <CausalGraph />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
              From Data to Discovery.
              <br />
              <span className="text-gradient-gold">From Discovery to Breakthroughs.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              BOULAi gives life science researchers the rigorous AI tools they need to turn complex experimental data into testable hypotheses, causal insights, and explainable anomalies. Not another LLM wrapper. Real discovery engines.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/product">Discover BouleDiscovery</Link>
              </Button>
              <Button variant="ghost-light" size="lg" asChild>
                <Link to="/about">Who We Are</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem */}
      <section className="section-mid py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
              AI is everywhere.<br />
              <span className="text-muted-foreground">Rigorous discovery is rare.</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemCards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-surface-raised rounded-xl p-8 h-full border border-border/30">
                  <div className="mb-5">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product Teaser */}
      <section className="section-deep py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-10 border border-border/40 gold-glow text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground mb-6">
                Now in Pilot
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">BouleDiscovery</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Upload your experimental data. Get hypotheses, causal drivers, and anomaly explanations — navigable, explainable, and manager-ready.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/product">Explore BouleDiscovery →</Link>
              </Button>
            </div>
          </FadeIn>

          {/* Coming Soon cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mt-10">
            {[
              { name: "BouleMagellan", desc: "Evaluate research novelty and commercialization potential" },
              { name: "BouleFolio", desc: "R&D portfolio governance and fund/pause/kill decisions" },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-xl p-6 border border-border/20 opacity-50 text-center">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-medium rounded-full border border-muted-foreground/30 text-muted-foreground mb-3">
                    Coming Soon
                  </span>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{p.name}</h4>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
