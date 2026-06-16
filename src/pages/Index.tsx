import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import WaitlistSection from "@/components/WaitlistSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const focusAreas = ["Scientific evidence", "Trial analysis", "Causal discovery", "R&D strategy"];

const methodPillars = [
  {
    title: "Inference",
    desc: "Estimate what the evidence supports, where uncertainty remains, and which explanations are still plausible.",
  },
  {
    title: "Machine learning",
    desc: "Use models to discover patterns, heterogeneity, and predictive structure without mistaking every signal for science.",
  },
  {
    title: "Reasoning",
    desc: "Connect data, mechanisms, assumptions, and domain knowledge into arguments that experts can inspect.",
  },
];

const reviewPrinciples = [
  {
    title: "Explicit assumptions",
    desc: "Scientific teams should be able to see which assumptions are being used before a model produces an answer.",
  },
  {
    title: "Inspectable evidence",
    desc: "Outputs should make uncertainty, robustness, and competing explanations easier to review, not harder.",
  },
  {
    title: "Human scientific judgment",
    desc: "AI can help structure analysis and synthesis, but the decision remains accountable to expert review.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-deep min-h-[calc(100vh-5rem)] border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex min-h-[calc(100vh-5rem)] items-center py-28 md:py-36">
            <div className="max-w-6xl">
              <FadeIn>
                <p className="eyebrow mb-5">Scientific intelligence for BioPharma R&D</p>
                <h1 className="font-display max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-[7.75rem] font-semibold leading-[0.9] tracking-[-0.075em] text-foreground">
                  Scientific AI for R&D decisions.
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-8 max-w-3xl text-base md:text-2xl text-muted-foreground leading-relaxed">
                  BOULAI helps research teams reason across data, hypotheses, mechanisms, and evidence so they can
                  decide what to test, validate, or deprioritize next.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {focusAreas.map((area, index) => (
                    <span key={area} className="inline-flex items-center gap-6">
                      <span>{area}</span>
                      {index < focusAreas.length - 1 ? <span className="hidden sm:inline-block text-border">/</span> : null}
                    </span>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#waitlist">Request Intro</a>
                  </Button>
                  <Button variant="ghost-light" size="lg" asChild>
                    <Link to="/product">View BOULAI Discovery</Link>
                  </Button>
                </div>
              </FadeIn>
              <FadeIn delay={0.45}>
                <div className="mt-14 max-w-4xl border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                  BOULAI combines inference, machine learning, and scientific reasoning to help teams move from
                  fragmented evidence to decision-grade judgment.
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section-mid py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="eyebrow mb-4">Method</p>
                <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
                  Scientific AI should make reasoning easier to inspect.
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  BOULAI combines inference, machine learning, and scientific reasoning so teams can organize evidence,
                  compare explanations, and decide what deserves validation.
                </p>
              </div>
              <div className="premium-panel bg-foreground p-0 overflow-hidden">
                <video
                  className="aspect-[16/9] h-full w-full object-cover"
                  src="/brand/boulai-logo-animation.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="BOULAI logo animation"
                />
              </div>
            </div>
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodPillars.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="premium-panel p-7 h-full">
                  <p className="text-xs font-semibold text-primary mb-4">0{i + 1}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-deep py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <FadeIn>
              <p className="eyebrow mb-4">Scientific review</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
                A methodological foundation for decision-grade discovery.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                The goal is not to replace expert judgment. It is to make the path from data to decision clearer,
                more explicit, and easier to challenge.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid sm:grid-cols-3 gap-4">
                {reviewPrinciples.map((item, i) => (
                  <div key={item.title} className="premium-panel p-6 h-full">
                    <p className="text-xs font-semibold text-primary">0{i + 1}</p>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-mid py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="premium-panel p-8 md:p-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
              <div className="max-w-3xl">
                <p className="eyebrow mb-4">First solution</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                  BOULAI Discovery is the first product built on this approach.
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  It helps teams analyze scientific datasets, explore causal hypotheses, and identify patterns that
                  deserve deeper validation.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Button size="lg" asChild>
                  <Link to="/product">Explore BOULAI Discovery</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
