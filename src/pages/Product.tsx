import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import WaitlistSection from "@/components/WaitlistSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Network, Lightbulb, ShieldAlert, Upload, Cpu, FileText, Users, Briefcase } from "lucide-react";

const steps = [
  {
    icon: <Upload className="w-7 h-7 text-primary" />,
    title: "Load your data",
    desc: "Upload tabular experimental datasets; optionally add scientific context or an existing causal theory.",
  },
  {
    icon: <Cpu className="w-7 h-7 text-primary" />,
    title: "Run the engines",
    desc: "Causal Discovery, Explainable AI (XAI), and Anomaly Detection work in concert.",
  },
  {
    icon: <FileText className="w-7 h-7 text-primary" />,
    title: "Get discovery-ready output",
    desc: "Navigable causal graphs, ranked hypotheses, anomaly explanations, and manager-ready reports.",
  },
];

const engines = [
  {
    icon: <Network className="w-8 h-8 text-primary" />,
    title: "Causal Discovery Engine",
    desc: "Generates candidate causal structures and drivers from your data. Enables what-if simulations to prioritize next experiments.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Hypothesis Generator",
    desc: "Surfaces surprising patterns and hypotheses. Uses a proprietary reasoning pipeline to translate signals into readable, testable narratives.",
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    title: "Anomaly Explanation Engine",
    desc: "Start from your existing causal theory (DAG) and detect where your data breaks it. For when you need to know: where does our model of the world fail?",
  },
];

const audiences = [
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "R&D Researchers in Life Sciences",
    desc: "You run experiments, you have data, and you're drowning in analysis. BouleDiscovery finds what you didn't know to look for.",
  },
  {
    icon: <Briefcase className="w-7 h-7 text-primary" />,
    title: "Research Managers & Innovation Leaders",
    desc: "You need to kill false positives early and fund the right projects. Get the same rigorous output, in a format you can present.",
  },
];

const Product = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="section-mid pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <FadeIn>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground mb-6">
            Now in Pilot — Life Sciences
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">BouleDiscovery</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your magnifier for scientific discovery. From tabular data to hypotheses, causal drivers, and anomaly explanations — fully navigable, fully explainable.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Screenshot placeholder */}
    <section className="section-deep py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <FadeIn>
          <div className="rounded-2xl border-2 border-dashed border-border/50 bg-card/50 flex items-center justify-center h-80 md:h-[28rem]">
            <p className="text-muted-foreground text-sm">Product screenshot coming soon</p>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* How it works */}
    <section className="section-mid py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">How it works</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center mx-auto mb-5 border border-border/30">
                  {step.icon}
                </div>
                <div className="text-xs text-primary font-semibold mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Three engines */}
    <section className="section-deep py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Three engines, one platform</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engines.map((e, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-8 border border-border/30 h-full hover-gold-border">
                <div className="mb-5">{e.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Who is it for */}
    <section className="section-mid py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Who is it for</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {audiences.map((a, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-8 border border-border/30">
                <div className="mb-4">{a.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Coming next */}
    <section className="section-deep py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">What's coming next</p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
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

    <WaitlistSection />
    <Footer />
  </div>
);

export default Product;
