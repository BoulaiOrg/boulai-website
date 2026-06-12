import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import WaitlistSection from "@/components/WaitlistSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const focusAreas = [
  "Scientific evidence",
  "Trial analysis",
  "Causal discovery",
  "R&D strategy",
];

const platformPrinciples = [
  {
    title: "Unify the evidence around a decision",
    desc: "Bring together datasets, hypotheses, study context, and scientific assumptions before the analysis starts.",
  },
  {
    title: "Interrogate mechanisms, not just correlations",
    desc: "Use causal and statistical workflows to compare explanations, explore subgroups, and challenge fragile signals.",
  },
  {
    title: "Keep scientific review in the loop",
    desc: "Produce outputs that teams can inspect, discuss, and validate instead of treating AI as the final authority.",
  },
];

const solutionCapabilities = [
  "Profile trial and translational datasets",
  "Explore outcomes, drivers, and subgroups",
  "Test causal hypotheses and assumptions",
  "Prepare evidence for review and next-step decisions",
];

const decisionLayers = [
  {
    label: "Discovery",
    value: "Which hypotheses are worth moving forward?",
  },
  {
    label: "Clinical development",
    value: "Which patient segments, endpoints, or study choices deserve closer analysis?",
  },
  {
    label: "Strategy",
    value: "Which signals are strong enough to shape investment, validation, or trial design?",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-deep pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl">
            <FadeIn>
              <p className="eyebrow mb-5">Scientific intelligence for BioPharma R&D</p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-foreground">
                Better evidence systems for scientific decisions.
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-7 max-w-3xl text-base md:text-xl text-muted-foreground leading-relaxed">
                BOULAI helps research teams reason across data, hypotheses, mechanisms, and evidence so they can
                decide what to test, validate, or deprioritize next.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#waitlist">Request Intro</a>
                </Button>
                <Button variant="ghost-light" size="lg" asChild>
                  <Link to="/product">View BOULAI Discovery</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-mid py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Why BOULAI</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
                A decision layer for scientific teams working with complex evidence.
              </h2>
            </div>
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformPrinciples.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="premium-panel rounded-3xl p-7 h-full">
                  <p className="text-xs font-semibold text-primary mb-4">0{i + 1}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-deep py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-12 items-start">
            <FadeIn>
              <p className="eyebrow mb-4">First solution</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight">
                BOULAI Discovery
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Our first product helps teams analyze scientific datasets, explore causal hypotheses, and identify
                patterns that deserve deeper validation. It is the first solution in the BOULAI platform.
              </p>
              <Button size="lg" className="mt-8" asChild>
                <Link to="/product">Explore the Solution</Link>
              </Button>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="premium-panel rounded-[2rem] overflow-hidden">
                {solutionCapabilities.map((item, i) => (
                  <div key={item} className="grid md:grid-cols-[0.16fr_0.84fr] gap-4 border-b border-border/35 p-6 last:border-b-0">
                    <p className="text-xs font-semibold text-primary">0{i + 1}</p>
                    <p className="text-sm font-medium text-foreground">{item}</p>
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
            <div className="premium-panel rounded-[2rem] p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="eyebrow mb-4">Where it helps</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                  Built for the moments when a scientific signal has to become a decision.
                </h2>
              </div>
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {decisionLayers.map((row) => (
                  <div key={row.label} className="rounded-2xl border border-border bg-muted/35 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{row.label}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{row.value}</p>
                  </div>
                ))}
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
